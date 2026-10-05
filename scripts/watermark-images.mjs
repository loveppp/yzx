import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  readWatermarkSvg,
  shouldWatermarkPublicImage,
  watermarkPublicImageFile,
} from './watermark/lib.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const imagesRoot = path.join(root, 'public/images');
const backupRoot = path.join(root, 'output/watermark-backups');

async function collectTargets(dir, acc = []) {
  for (const name of await fs.readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, name.name);
    if (name.isDirectory()) await collectTargets(full, acc);
    else {
      const rel = path.relative(imagesRoot, full);
      if (shouldWatermarkPublicImage(rel)) acc.push(full);
    }
  }
  return acc;
}

const watermarkSvgBytes = await readWatermarkSvg(root);
const targets = await collectTargets(imagesRoot);
const results = { applied: [], skipped: 0 };

for (const file of targets.sort()) {
  const r = await watermarkPublicImageFile(root, file, { watermarkSvgBytes, backupRoot });
  if (r.skipped) results.skipped += 1;
  else results.applied.push({ file: r.relative, bytes: r.bytes });
}

console.log(
  JSON.stringify(
    {
      watermark: 'public/images/brand/logo-watermark.svg',
      backups: 'output/watermark-backups/',
      applied: results.applied.length,
      files: results.applied.map((x) => x.file),
    },
    null,
    2,
  ),
);
