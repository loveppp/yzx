/**
 * Overwrite current punch catalog + detail public paths with clean HTX source bytes (no baked watermark).
 *
 *   node scripts/htx/refresh-punch-images-from-htx.mjs
 *   node scripts/htx/refresh-punch-images-from-htx.mjs --dry-run
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const dryRun = process.argv.includes('--dry-run');
const selection = JSON.parse(
  await fs.readFile(path.join(root, 'data/catalog/punch-htx-selection.json'), 'utf8'),
);
const catalog = JSON.parse(await fs.readFile(path.join(root, 'src/data/catalog.json'), 'utf8'));
const media = JSON.parse(await fs.readFile(path.join(root, 'src/data/catalog-detail-media.json'), 'utf8'));

const punchIds = new Set(catalog.products.filter((p) => p.group === 'punch-components').map((p) => p.id));

/** @param {string} publicPath */
function absPublic(publicPath) {
  return path.join(root, 'public', publicPath.replace(/^\//, ''));
}

const updated = [];
const skipped = [];

for (const entry of selection.entries) {
  if (entry.status !== 'selected' || !entry.sourceFile || !punchIds.has(entry.productId)) continue;
  const srcAbs = path.join(root, entry.sourceFile);
  try {
    await fs.access(srcAbs);
  } catch {
    skipped.push({ reason: 'missing-source', entry: entry.sourceFile });
    continue;
  }

  let publicPath;
  if (entry.role === 'catalog-main') {
    const product = catalog.products.find((p) => p.id === entry.productId);
    publicPath = product?.image;
  } else if (entry.role === 'detail' && entry.detailAssetId) {
    const asset = media.assets.find((a) => a.id === entry.detailAssetId);
    publicPath = asset?.image;
  }
  if (!publicPath?.startsWith('/images/products/')) {
    skipped.push({ reason: 'no-public-path', productId: entry.productId, role: entry.role });
    continue;
  }

  const dest = absPublic(publicPath);
  const bytes = await fs.readFile(srcAbs);
  const meta = await sharp(bytes).metadata();
  const outExt = path.extname(dest).slice(1).toLowerCase();
  let outBytes = bytes;
  if (meta.format && outExt && meta.format !== outExt.replace('jpg', 'jpeg')) {
    let pipe = sharp(bytes);
    if (outExt === 'jpg' || outExt === 'jpeg') pipe = pipe.jpeg({ quality: 94, mozjpeg: true });
    else if (outExt === 'png') pipe = pipe.png({ compressionLevel: 6 });
    else if (outExt === 'webp') pipe = pipe.webp({ quality: 92 });
    outBytes = await pipe.toBuffer();
  }

  if (!dryRun) {
    await fs.mkdir(path.dirname(dest), { recursive: true });
    await fs.writeFile(dest, outBytes);
  }
  updated.push({ publicPath, sourceFile: entry.sourceFile, bytes: outBytes.length });
}

console.log(JSON.stringify({ dryRun, updated: updated.length, files: updated, skipped }, null, 2));
