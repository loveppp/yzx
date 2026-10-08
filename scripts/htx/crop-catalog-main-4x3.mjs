/**
 * HTX wide catalog banners → 4:3 main image (full height, right-weighted). No watermark.
 *
 *   node scripts/htx/crop-catalog-main-4x3.mjs --group ejector-components
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { cropImageToAspectRatio } from '../watermark/lib.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const dryRun = process.argv.includes('--dry-run');
const groupFlag = process.argv.indexOf('--group');
const productFlag = process.argv.indexOf('--product');
const selectionFlag = process.argv.indexOf('--selection');
const groupId = groupFlag >= 0 ? process.argv[groupFlag + 1] : null;
const productId = productFlag >= 0 ? process.argv[productFlag + 1] : null;
const selectionRel =
  selectionFlag >= 0 && process.argv[selectionFlag + 1]
    ? process.argv[selectionFlag + 1]
    : 'data/catalog/ejector-htx-selection.json';

if (!groupId && !productId) {
  console.error('Usage: --group <id> | --product <id> [--selection path] [--dry-run]');
  process.exit(1);
}

const selection = JSON.parse(await fs.readFile(path.join(root, selectionRel), 'utf8'));
const catalogPath = path.join(root, 'src/data/catalog.json');
const catalog = JSON.parse(await fs.readFile(catalogPath, 'utf8'));
const stamp = new Date().toISOString().replace(/[:.]/g, '-');

/** @type {Map<string, string>} */
const catalogMainSource = new Map();
for (const entry of selection.entries) {
  if (entry.status === 'selected' && entry.role === 'catalog-main' && entry.sourceFile) {
    catalogMainSource.set(entry.productId, entry.sourceFile);
  }
}

const products = catalog.products.filter((p) => {
  if (productId) return p.id === productId;
  if (groupId) return p.group === groupId;
  return false;
});

const results = [];

for (const product of products) {
  const relSource = catalogMainSource.get(product.id);
  let bytes;
  let ext = 'jpg';

  if (relSource) {
    const absSource = path.join(root, relSource);
    try {
      bytes = await fs.readFile(absSource);
      ext = path.extname(absSource).slice(1).toLowerCase() || 'jpg';
    } catch {
      results.push({ productId: product.id, skipped: 'htx source missing', path: relSource });
      continue;
    }
  } else if (product.image) {
    const abs = path.join(root, 'public', product.image.replace(/^\//, ''));
    try {
      bytes = await fs.readFile(abs);
      ext = path.extname(abs).slice(1).toLowerCase() || 'jpg';
    } catch {
      results.push({ productId: product.id, skipped: 'file missing', path: product.image });
      continue;
    }
  } else {
    results.push({ productId: product.id, skipped: 'no image' });
    continue;
  }

  const useExt = ext === 'jpeg' ? 'jpg' : ext;

  const cropped = await cropImageToAspectRatio(bytes, {
    ratioWidth: 4,
    ratioHeight: 3,
    focus: 'right',
    outWidth: 1200,
    outHeight: 900,
  });

  const publicPath = `/images/products/catalog/${product.id}-${stamp}-4x3.${useExt}`;

  if (!dryRun) {
    await fs.mkdir(path.join(root, 'public/images/products/catalog'), { recursive: true });
    await fs.writeFile(path.join(root, 'public', publicPath.replace(/^\//, '')), cropped);
    product.image = publicPath;
    delete product.detailImage;
  }

  results.push({
    productId: product.id,
    source: relSource ?? 'existing public image',
    image: dryRun ? `(dry-run) ${publicPath}` : publicPath,
  });
}

if (!dryRun) {
  await fs.writeFile(catalogPath, JSON.stringify(catalog, null, 2) + '\n');
}

console.log(JSON.stringify({ dryRun, aspect: '4:3', count: results.length, results }, null, 2));
