/**
 * Apply HTX-style short blurbs to punch catalog-details descriptions (display copy).
 *   node scripts/htx/apply-variant-blurbs.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const blurbs = JSON.parse(
  fs.readFileSync(path.join(root, 'data/catalog/htx-variant-blurbs.json'), 'utf8'),
);
const detailsPath = path.join(root, 'src/data/catalog-details.json');
const details = JSON.parse(fs.readFileSync(detailsPath, 'utf8'));

let updated = 0;
for (const [productId, variants] of Object.entries(blurbs)) {
  const detail = details[productId];
  if (!detail?.variants) continue;
  for (const variant of detail.variants) {
    const blurb = variants[variant.id];
    if (!blurb) continue;
    variant.description = blurb;
    updated += 1;
  }
}

fs.writeFileSync(detailsPath, JSON.stringify(details, null, 2) + '\n');
console.log(JSON.stringify({updatedVariants: updated}));
