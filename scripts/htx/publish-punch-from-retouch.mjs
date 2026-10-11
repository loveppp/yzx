/**
 * Publish punch selection images to catalog.json + catalog-detail-media.json (clean files; site CSS watermark).
 *
 *   node scripts/htx/publish-punch-from-retouch.mjs --htx      # HTX source files (default)
 *   node scripts/htx/publish-punch-from-retouch.mjs --retouch  # Terrakinc retouched files
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import sharp from 'sharp';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const useRetouch = process.argv.includes('--retouch');
const catalogMainOnly = process.argv.includes('--catalog-main-only');
const detailOnly = process.argv.includes('--detail-only');
const selectionFlag = process.argv.indexOf('--selection');
const selectionRel =
  selectionFlag >= 0 && process.argv[selectionFlag + 1]
    ? process.argv[selectionFlag + 1]
    : 'data/catalog/punch-htx-selection.json';
const selection = JSON.parse(await fs.readFile(path.join(root, selectionRel), 'utf8'));
const catalogPath = path.join(root, 'src/data/catalog.json');
const mediaPath = path.join(root, 'src/data/catalog-detail-media.json');
const catalog = JSON.parse(await fs.readFile(catalogPath, 'utf8'));
const media = JSON.parse(await fs.readFile(mediaPath, 'utf8'));
const stamp = new Date().toISOString().replace(/[:.]/g, '-');

/** @type {Map<string, string>} sourceFile -> relative path to image bytes */
const fileBySource = new Map();

if (useRetouch) {
  const retouch = JSON.parse(
    await fs.readFile(path.join(root, 'output/htx-retouch/manifest-retouched.json'), 'utf8'),
  );
  for (const item of retouch.items) {
    if (item.sourceFile && item.retouchedFile) fileBySource.set(item.sourceFile, item.retouchedFile);
  }
} else {
  for (const entry of selection.entries) {
    if (entry.status === 'selected' && entry.sourceFile) {
      fileBySource.set(entry.sourceFile, entry.sourceFile);
    }
  }
}

/**
 * @param {'catalog' | 'details'} publicDir
 * @param {string} fileName
 * @param {string} relImage
 */
async function publishTo(publicDir, fileName, relImage) {
  const abs = path.join(root, relImage);
  const bytes = await fs.readFile(abs);
  let ext = path.extname(abs).slice(1).toLowerCase();
  if (!ext) {
    const meta = await sharp(bytes).metadata();
    ext = meta.format === 'jpeg' ? 'jpg' : meta.format ?? 'jpg';
  }
  const useExt = ext === 'jpeg' ? 'jpg' : ext;
  const publicPath = `/images/products/${publicDir}/${fileName}-${stamp}.${useExt}`;
  const dest = path.join(root, 'public', publicPath);
  await fs.mkdir(path.dirname(dest), {recursive: true});
  await fs.writeFile(dest, bytes);
  return publicPath;
}

const published = [];

const selected = selection.entries.filter((e) => e.status === 'selected' && e.sourceFile);
const toPublish = catalogMainOnly
  ? selected.filter((e) => e.role === 'catalog-main')
  : detailOnly
    ? selected.filter((e) => e.role === 'detail')
    : selected;

for (const entry of toPublish) {
  const relImage = fileBySource.get(entry.sourceFile);
  if (!relImage) continue;

  if (entry.role === 'catalog-main') {
    const product = catalog.products.find((p) => p.id === entry.productId);
    if (!product) continue;
    const publicPath = await publishTo('catalog', entry.productId, relImage);
    product.image = publicPath;
    product.imageGenerated = useRetouch;
    delete product.imageCaption;
    published.push({type: 'catalog-main', productId: entry.productId, publicPath, source: relImage});
    continue;
  }

  if (entry.role === 'detail' && entry.detailAssetId) {
    const fileName = entry.detailAssetId;
    const publicPath = await publishTo('details', fileName, relImage);
    let asset = media.assets.find((a) => a.id === entry.detailAssetId);
    if (!asset) {
      asset = {
        id: entry.detailAssetId,
        productId: entry.productId,
        configurationIds: entry.configurationIds,
        image: publicPath,
        name: {zh: entry.variantNameZh, en: entry.variantNameZh, vi: entry.variantNameZh},
      };
      media.assets.push(asset);
    } else {
      asset.image = publicPath;
      asset.configurationIds = entry.configurationIds;
      if (!asset.name) asset.name = {zh: entry.variantNameZh, en: entry.variantNameZh, vi: entry.variantNameZh};
      asset.name.zh = entry.variantNameZh;
    }
    published.push({type: 'detail', detailAssetId: entry.detailAssetId, publicPath, source: relImage});
  }
}

await fs.writeFile(catalogPath, JSON.stringify(catalog, null, 2) + '\n');
await fs.writeFile(mediaPath, JSON.stringify(media, null, 2) + '\n');
console.log(JSON.stringify({mode: useRetouch ? 'retouch' : 'htx', published: published.length, items: published}));
