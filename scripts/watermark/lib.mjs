import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const WATERMARK_VIEWBOX = { w: 200, h: 32 };

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
  else if (format === 'png') pipeline = pipeline.png();
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
