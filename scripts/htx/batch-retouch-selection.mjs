/**
 * Terrakinc retouch for punch-htx-selection entries (selected + sourceFile).
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {spawnSync} from 'node:child_process';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const selection = JSON.parse(
  await fs.readFile(path.join(root, 'data/catalog/punch-htx-selection.json'), 'utf8'),
);
const toRun = selection.entries.filter((e) => e.status === 'selected' && e.sourceFile);

const items = [];
for (const entry of toRun) {
  const abs = path.join(root, entry.sourceFile);
  console.log(JSON.stringify({retouching: entry.sourceFile, role: entry.role}));
  const r = spawnSync(
    process.execPath,
    ['--import', 'tsx', path.join(root, 'scripts/image-gen/feishu-retouch-one.ts'), abs],
    {cwd: root, encoding: 'utf8', maxBuffer: 20 * 1024 * 1024},
  );
  if (r.status !== 0) {
    items.push({...entry, error: r.stderr || r.stdout, retouchedFile: null});
    continue;
  }
  const last = r.stdout.trim().split('\n').pop();
  let retouchedFile = null;
  try {
    const j = JSON.parse(last);
    retouchedFile = j.file ? path.join(root, j.file) : null;
  } catch {
    /* ignore */
  }
  if (!retouchedFile) {
    const stem = path.basename(entry.sourceFile, path.extname(entry.sourceFile));
    const trial = path.join(root, 'output/feishu-retouch', `${stem}-trial`, 'retouched.jpg');
    try {
      await fs.access(trial);
      retouchedFile = trial;
    } catch {
      items.push({...entry, error: 'no output file', retouchedFile: null});
      continue;
    }
  }
  items.push({
    sourceFile: entry.sourceFile,
    retouchedFile: path.relative(root, retouchedFile),
    productId: entry.productId,
    role: entry.role,
    detailAssetId: entry.detailAssetId,
  });
}

const out = {updatedAt: new Date().toISOString(), items};
await fs.mkdir(path.join(root, 'output/htx-retouch'), {recursive: true});
await fs.writeFile(path.join(root, 'output/htx-retouch/manifest-retouched.json'), JSON.stringify(out, null, 2) + '\n');
console.log(JSON.stringify({done: items.filter((i) => i.retouchedFile).length, failed: items.filter((i) => i.error).length}));
