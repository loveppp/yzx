/** Add descriptionZh / descriptionEn from filename + product context. */
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const manifestPath = process.argv[2] ?? path.join(root, 'output/htx-sources/punch-components/manifest.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

function humanizeFilename(filePath) {
  const base = path.basename(filePath).replace(/^source-\d+-/, '').replace(/\.[^.]+$/, '');
  return base.replace(/[-_]+/g, ' ').trim();
}

for (const product of manifest.products) {
  for (const img of product.images) {
    if (!img.file || img.error) continue;
    const label = humanizeFilename(img.file);
    img.descriptionZh = `【${product.nameZh}】${label}。采集自 HTX 页面，供后续 AI 修图（#f5f6f7 / 4:3）与站内发布参考。`;
    img.descriptionEn = `[${product.productId}] ${label}. Scraped from HTX for AI retouch and catalog reference.`;
    img.suggestedName = `${product.groupId}/${product.productId}/${path.basename(img.file)}`;
    if (!img.pageUrl) img.pageUrl = product.pageUrls?.[0];
  }
}

fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n');
const n = manifest.products.reduce((c, p) => c + p.images.filter((i) => i.descriptionZh).length, 0);
console.log(JSON.stringify({manifest: path.relative(root, manifestPath), described: n}));
