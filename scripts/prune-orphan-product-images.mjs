/**
 * Remove public/images/products/{catalog,details} files not referenced by
 * catalog.json, catalog-detail-media.json, or group coverImage.
 *
 *   node scripts/prune-orphan-product-images.mjs
 *   node scripts/prune-orphan-product-images.mjs --dry-run
 */
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dryRun = process.argv.includes('--dry-run');

const catalog = JSON.parse(fs.readFileSync(path.join(root, 'src/data/catalog.json'), 'utf8'));
const media = JSON.parse(fs.readFileSync(path.join(root, 'src/data/catalog-detail-media.json'), 'utf8'));

const refs = new Set();
for (const p of catalog.products) {
  if (p.image) refs.add(`public${p.image}`);
}
for (const g of catalog.groups ?? []) {
  if (g.coverImage) refs.add(`public${g.coverImage}`);
}
for (const a of media.assets) {
  if (a.image) refs.add(`public${a.image}`);
}

const productsRoot = path.join(root, 'public/images/products');
const orphans = [];
for (const sub of ['catalog', 'details']) {
  const dir = path.join(productsRoot, sub);
  if (!fs.existsSync(dir)) continue;
  for (const name of fs.readdirSync(dir)) {
    const rel = path.join('public/images/products', sub, name).replaceAll('\\', '/');
    if (!refs.has(rel)) orphans.push(path.join(root, rel));
  }
}

let deleted = 0;
let bytes = 0;
for (const abs of orphans.sort()) {
  const st = fs.statSync(abs);
  if (dryRun) {
    console.log('would delete', path.relative(root, abs));
  } else {
    fs.unlinkSync(abs);
  }
  deleted += 1;
  bytes += st.size;
}

console.log(
  JSON.stringify({
    dryRun,
    referenced: refs.size,
    orphans: deleted,
    freedMb: Number((bytes / 1024 / 1024).toFixed(2)),
  }),
);
