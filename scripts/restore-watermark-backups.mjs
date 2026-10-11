/**
 * Restore public/images files from output/watermark-backups (pre-bake originals).
 *
 *   node scripts/restore-watermark-backups.mjs
 *   node scripts/restore-watermark-backups.mjs --dry-run
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dryRun = process.argv.includes('--dry-run');
const backupRoot = path.join(root, 'output/watermark-backups');
const imagesRoot = path.join(root, 'public/images');

async function walk(dir, acc = []) {
  for (const name of await fs.readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, name.name);
    if (name.isDirectory()) await walk(full, acc);
    else acc.push(full);
  }
  return acc;
}

const backups = await walk(backupRoot);
const restored = [];

for (const backup of backups) {
  const rel = path.relative(backupRoot, backup);
  const dest = path.join(imagesRoot, rel);
  try {
    await fs.access(dest);
  } catch {
    continue;
  }
  if (!dryRun) {
    await fs.mkdir(path.dirname(dest), { recursive: true });
    await fs.copyFile(backup, dest);
  }
  restored.push(rel);
}

console.log(JSON.stringify({ dryRun, restored: restored.length, files: restored.sort() }, null, 2));
