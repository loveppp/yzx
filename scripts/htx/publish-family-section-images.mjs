/**
 * Publish HTX long-form detail section images (application, materials, icons) with watermark.
 *
 *   node scripts/htx/publish-family-section-images.mjs
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import sharp from 'sharp';
import {readWatermarkSvg, watermarkImageBytes} from '../watermark/lib.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const rulesPath = path.join(root, 'data/catalog/htx-family-figure-rules.json');
const outJsonPath = path.join(root, 'src/data/catalog-family-figures.json');
const rules = JSON.parse(await fs.readFile(rulesPath, 'utf8'));
const watermarkSvg = await readWatermarkSvg(root);
const stamp = new Date().toISOString().replace(/[:.]/g, '-');

/** @param {string[]} dirs @param {string} needle */
async function findSourceFile(dirs, needle) {
  for (const rel of dirs) {
    const absDir = path.join(root, rel);
    let names;
    try {
      names = await fs.readdir(absDir);
    } catch {
      continue;
    }
    const hit = names.find((n) => n.includes(needle));
    if (hit) return path.join(absDir, hit);
  }
  return null;
}

async function publishFigure(productId, role, absSource) {
  const bytes = await fs.readFile(absSource);
  const meta = await sharp(bytes).metadata();
  const minDim = Math.min(meta.width ?? 0, meta.height ?? 0);
  const skipWatermark = minDim < 360;
  const ext = path.extname(absSource).slice(1).toLowerCase();
  const useExt = ext === 'jpeg' ? 'jpg' : ext;
  const publicPath = `/images/products/family-sections/${productId}--${role}-${stamp}.${useExt}`;
  const dest = path.join(root, 'public', publicPath);
  await fs.mkdir(path.dirname(dest), {recursive: true});
  let outBytes = bytes;
  if (!skipWatermark) {
    try {
      outBytes = await watermarkImageBytes(bytes, watermarkSvg);
    } catch {
      outBytes = bytes;
    }
  }
  await fs.writeFile(dest, outBytes);
  return publicPath;
}

/** @type {Record<string, import('../../src/data/catalog-family-figures.ts').FamilyFigures>} */
const published = {};

for (const [productId, cfg] of Object.entries(rules)) {
  const entry = {figures: {}, highlightIcons: [], applicationTiles: []};
  const dirs = cfg.sourceDirs ?? [];

  for (const [role, needle] of Object.entries(cfg.figures ?? {})) {
    const src = await findSourceFile(dirs, needle);
    if (!src) continue;
    entry.figures[role] = await publishFigure(productId, role, src);
  }

  for (const needle of cfg.highlightIcons ?? []) {
    const src = await findSourceFile(dirs, needle);
    if (!src) continue;
    entry.highlightIcons.push(await publishFigure(productId, `icon-${entry.highlightIcons.length + 1}`, src));
  }

  for (const needle of cfg.applicationTiles ?? []) {
    const src = await findSourceFile(dirs, needle);
    if (!src) continue;
    entry.applicationTiles.push(await publishFigure(productId, `app-tile-${entry.applicationTiles.length + 1}`, src));
  }

  if (
    Object.keys(entry.figures).length > 0 ||
    entry.highlightIcons.length > 0 ||
    entry.applicationTiles.length > 0
  ) {
    published[productId] = entry;
  }
}

await fs.writeFile(outJsonPath, JSON.stringify(published, null, 2) + '\n');
console.log(JSON.stringify({products: Object.keys(published).length, out: path.relative(root, outJsonPath)}));
