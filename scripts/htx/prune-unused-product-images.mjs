/**
 * Remove files under public/images/products/{catalog,details,family-sections}
 * that are not referenced in src/data or data JSON (and public/_redirects).
 *
 *   node scripts/htx/prune-unused-product-images.mjs
 *   node scripts/htx/prune-unused-product-images.mjs --dry-run
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const dryRun = process.argv.includes('--dry-run');
const productDirs = ['public/images/products/catalog', 'public/images/products/details', 'public/images/products/family-sections'];

function collectRefsFromText(text, set) {
  const re = /\/images\/products\/(?:catalog|details|family-sections)\/[^"'\s]+/g;
  for (const m of text.matchAll(re)) {
    set.add(`public${m[0]}`);
  }
}

function walk(dir, visit) {
  if (!fs.existsSync(dir)) return;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, visit);
    else visit(p);
  }
}

const refs = new Set();
for (const base of [path.join(root, 'src/data'), path.join(root, 'data')]) {
  walk(base, (file) => {
    if (!/\.(json|md)$/.test(file) && path.basename(file) !== '_redirects') return;
    try {
      collectRefsFromText(fs.readFileSync(file, 'utf8'), refs);
    } catch {
      /* ignore */
    }
  });
}
const redirects = path.join(root, 'public/_redirects');
if (fs.existsSync(redirects)) collectRefsFromText(fs.readFileSync(redirects, 'utf8'), refs);

const deleted = [];
let kept = 0;

for (const dir of productDirs) {
  const absDir = path.join(root, dir);
  if (!fs.existsSync(absDir)) continue;
  for (const name of fs.readdirSync(absDir)) {
    const rel = `${dir}/${name}`.replace(/\\/g, '/');
    if (refs.has(rel)) {
      kept++;
      continue;
    }
    if (!dryRun) fs.unlinkSync(path.join(root, rel));
    deleted.push(rel);
  }
}

console.log(
  JSON.stringify(
    { dryRun, referenced: refs.size, kept, deleted: deleted.length, files: deleted },
    null,
    2,
  ),
);
