import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const WATERMARK_VIEWBOX = { w: 200, h: 32 };

/** @typedef {{ r: number; g: number; b: number; alpha?: number }} RgbBackground */

/**
 * Average RGB from a small corner crop (for matching HTX light-gray plate).
 * @param {import('sharp').Sharp} image
 * @param {number} width
 * @param {number} height
 * @param {'tl' | 'tr' | 'bl' | 'br'} corner
 */
async function cornerMeanRgb(image, width, height, corner) {
  const size = Math.max(4, Math.min(16, Math.floor(Math.min(width, height) * 0.04)));
  const left =
    corner === 'tr' || corner === 'br' ? Math.max(0, width - size) : 0;
  const top =
    corner === 'bl' || corner === 'br' ? Math.max(0, height - size) : 0;
  const { channels } = await image
    .clone()
    .extract({ left, top, width: size, height: size })
    .stats();
  return {
    r: Math.round(channels[0]?.mean ?? 245),
    g: Math.round(channels[1]?.mean ?? 244),
    b: Math.round(channels[2]?.mean ?? 241),
  };
}

/**
 * Pad to target aspect without scaling content (letterbox / pillarbox).
 * @param {Buffer} imageBytes
 * @param {{ ratioWidth?: number; ratioHeight?: number; background?: RgbBackground | 'sample' }} [options]
 */
export async function padImageToAspectRatio(imageBytes, options = {}) {
  const ratioWidth = options.ratioWidth ?? 4;
  const ratioHeight = options.ratioHeight ?? 3;
  const image = sharp(imageBytes);
  const meta = await image.metadata();
  if (!meta.width || !meta.height) throw new Error('Unable to read image dimensions.');

  const targetRatio = ratioWidth / ratioHeight;
  const currentRatio = meta.width / meta.height;
  const epsilon = 0.002;
  if (Math.abs(currentRatio - targetRatio) < epsilon) return imageBytes;

  /** @type {RgbBackground} */
  let background =
    options.background && options.background !== 'sample'
      ? options.background
      : { r: 245, g: 244, b: 241, alpha: 1 };

  if (options.background === 'sample') {
    const corners = await Promise.all([
      cornerMeanRgb(image, meta.width, meta.height, 'tl'),
      cornerMeanRgb(image, meta.width, meta.height, 'tr'),
      cornerMeanRgb(image, meta.width, meta.height, 'bl'),
      cornerMeanRgb(image, meta.width, meta.height, 'br'),
    ]);
    background = {
      r: Math.round(corners.reduce((s, c) => s + c.r, 0) / corners.length),
      g: Math.round(corners.reduce((s, c) => s + c.g, 0) / corners.length),
      b: Math.round(corners.reduce((s, c) => s + c.b, 0) / corners.length),
      alpha: 1,
    };
  }

  let canvasW;
  let canvasH;
  let left;
  let top;
  if (currentRatio > targetRatio) {
    canvasW = meta.width;
    canvasH = Math.round(meta.width / targetRatio);
    left = 0;
    top = Math.round((canvasH - meta.height) / 2);
  } else {
    canvasH = meta.height;
    canvasW = Math.round(meta.height * targetRatio);
    left = Math.round((canvasW - meta.width) / 2);
    top = 0;
  }

  const format = meta.format;
  let pipeline = sharp({
    create: {
      width: canvasW,
      height: canvasH,
      channels: 4,
      background,
    },
  }).composite([{ input: imageBytes, left, top }]);

  if (format === 'jpeg') pipeline = pipeline.jpeg({ quality: 94, mozjpeg: true });
  else if (format === 'webp') pipeline = pipeline.webp({ quality: 92 });
  else pipeline = pipeline.png({ compressionLevel: 6, adaptiveFiltering: true });

  return pipeline.toBuffer();
}

/**
 * Uniform scale (same factor for width & height) then center-crop to exact aspect — no stretch.
 * @param {Buffer} imageBytes
 * @param {{ ratioWidth?: number; ratioHeight?: number; outWidth?: number; outHeight?: number; position?: import('sharp').FitEnum extends never ? string : string }} [options]
 */
export async function coverImageToAspectRatio(imageBytes, options = {}) {
  const ratioWidth = options.ratioWidth ?? 4;
  const ratioHeight = options.ratioHeight ?? 3;
  const image = sharp(imageBytes);
  const meta = await image.metadata();
  if (!meta.width || !meta.height) throw new Error('Unable to read image dimensions.');

  const targetRatio = ratioWidth / ratioHeight;
  const currentRatio = meta.width / meta.height;
  const epsilon = 0.002;
  if (Math.abs(currentRatio - targetRatio) < epsilon && !options.outWidth && !options.outHeight) {
    return imageBytes;
  }

  const outHeight = options.outHeight ?? Math.max(meta.height, 900);
  const outWidth = options.outWidth ?? Math.round(outHeight * targetRatio);

  const format = meta.format;
  let pipeline = sharp(imageBytes).resize(outWidth, outHeight, {
    fit: 'cover',
    position: options.position ?? 'centre',
    withoutEnlargement: false,
  });

  if (format === 'jpeg') pipeline = pipeline.jpeg({ quality: 94, mozjpeg: true });
  else if (format === 'webp') pipeline = pipeline.webp({ quality: 92 });
  else pipeline = pipeline.png({ compressionLevel: 6, adaptiveFiltering: true });

  return pipeline.toBuffer();
}

/**
 * Extract the largest axis-aligned window at target aspect (no stretch), then resize to output size.
 * For HTX wide banners, `focus: 'right'` keeps the product strip on the right.
 * @param {Buffer} imageBytes
 * @param {{ ratioWidth?: number; ratioHeight?: number; outWidth?: number; outHeight?: number; focus?: 'left' | 'centre' | 'right' | 'htx-banner'; bannerCenterX?: number }} [options]
 */
export async function cropImageToAspectRatio(imageBytes, options = {}) {
  const ratioWidth = options.ratioWidth ?? 4;
  const ratioHeight = options.ratioHeight ?? 3;
  const focus = options.focus ?? 'centre';
  const bannerCenterX = options.bannerCenterX ?? 0.68;
  const image = sharp(imageBytes);
  const meta = await image.metadata();
  if (!meta.width || !meta.height) throw new Error('Unable to read image dimensions.');

  const targetRatio = ratioWidth / ratioHeight;
  const w = meta.width;
  const h = meta.height;
  const currentRatio = w / h;

  let pipeline = sharp(imageBytes);
  if (currentRatio > targetRatio + 0.002) {
    const cropW = Math.min(w, Math.round(h * targetRatio));
    let left;
    if (focus === 'right') {
      left = w - cropW;
    } else if (focus === 'htx-banner') {
      // Wide HTX hero: products sit mid-frame; pure right or high centerX clips the left of the fan.
      const slack = w - cropW;
      if (currentRatio > 2 && bannerCenterX <= 0) {
        const bias = Math.min(0.45, Math.max(0, -bannerCenterX));
        left = Math.round(slack * bias);
      } else {
        const centerX = Math.round(w * bannerCenterX);
        left = Math.round(centerX - cropW / 2);
      }
      left = Math.max(0, Math.min(left, w - cropW));
    } else if (focus === 'left') {
      left = 0;
    } else {
      left = Math.max(0, Math.round((w - cropW) / 2));
    }
    pipeline = pipeline.extract({ left, top: 0, width: cropW, height: h });
  } else if (currentRatio < targetRatio - 0.002) {
    const cropH = Math.min(h, Math.round(w / targetRatio));
    const top = Math.max(0, Math.round((h - cropH) / 2));
    pipeline = pipeline.extract({ left: 0, top, width: w, height: cropH });
  }

  const outHeight = options.outHeight ?? 900;
  const outWidth = options.outWidth ?? Math.round(outHeight * targetRatio);
  pipeline = pipeline.resize(outWidth, outHeight, { fit: 'fill' });

  const format = meta.format;
  if (format === 'jpeg') pipeline = pipeline.jpeg({ quality: 94, mozjpeg: true });
  else if (format === 'webp') pipeline = pipeline.webp({ quality: 92 });
  else pipeline = pipeline.png({ compressionLevel: 6, adaptiveFiltering: true });

  return pipeline.toBuffer();
}

/** @param {Buffer} imageBytes @param {Buffer} watermarkSvgBytes */
export async function watermarkImageBytes(imageBytes, watermarkSvgBytes) {
  const image = sharp(imageBytes);
  const meta = await image.metadata();
  if (!meta.width || !meta.height) throw new Error('Unable to read image dimensions.');

  const wmWidth = Math.max(120, Math.round(meta.width * 0.22));
  const wmHeight = Math.max(20, Math.round((wmWidth * WATERMARK_VIEWBOX.h) / WATERMARK_VIEWBOX.w));
  const margin = Math.max(8, Math.round(meta.width * 0.025));

  const overlay = await sharp(watermarkSvgBytes).resize(wmWidth, wmHeight).png().toBuffer();

  let pipeline = sharp(imageBytes).composite([
    {
      input: overlay,
      top: Math.min(meta.height - wmHeight - margin, meta.height - wmHeight - 1),
      left: Math.min(meta.width - wmWidth - margin, meta.width - wmWidth - 1),
    },
  ]);

  const format = meta.format;
  if (format === 'jpeg') pipeline = pipeline.jpeg({ quality: 92, mozjpeg: true });
  else if (format === 'webp') pipeline = pipeline.webp({ quality: 90 });
  else if (format === 'png') pipeline = pipeline.png({ compressionLevel: 6, adaptiveFiltering: true });
  else throw new Error(`Unsupported format: ${format}`);

  return pipeline.toBuffer();
}

export async function readWatermarkSvg(root) {
  return fs.readFile(path.join(root, 'public/images/brand/logo-watermark.svg'));
}

const RASTER = new Set(['.jpg', '.jpeg', '.png', '.webp']);

export function shouldWatermarkPublicImage(relativeFromImages) {
  const normalized = relativeFromImages.replaceAll('\\', '/');
  if (normalized.startsWith('brand/') || normalized.startsWith('contact/')) return false;
  if (normalized.includes('.before-color.')) return false;
  const ext = path.extname(normalized).toLowerCase();
  if (!RASTER.has(ext)) return false;
  return (
    normalized.startsWith('products/') ||
    normalized.startsWith('home/') ||
    normalized.startsWith('factory/') ||
    (normalized.startsWith('catalog/') && /cover|category/i.test(path.basename(normalized)))
  );
}

/** @param {string} root repo root @param {string} publicImagePath absolute path under public/images */
export async function watermarkPublicImageFile(root, publicImagePath, { watermarkSvgBytes, backupRoot }) {
  const imagesRoot = path.join(root, 'public/images');
  if (!publicImagePath.startsWith(imagesRoot + path.sep)) throw new Error('Path must be under public/images.');
  const relative = path.relative(imagesRoot, publicImagePath);
  if (!shouldWatermarkPublicImage(relative)) return { skipped: true, relative };

  const backupPath = path.join(backupRoot, relative);
  await fs.mkdir(path.dirname(backupPath), { recursive: true });

  let sourceBytes;
  try {
    sourceBytes = await fs.readFile(backupPath);
  } catch {
    sourceBytes = await fs.readFile(publicImagePath);
    await fs.writeFile(backupPath, sourceBytes);
  }

  const out = await watermarkImageBytes(sourceBytes, watermarkSvgBytes);
  await fs.writeFile(publicImagePath, out);
  return { skipped: false, relative, bytes: out.length };
}
