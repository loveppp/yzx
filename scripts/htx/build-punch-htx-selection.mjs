/**
 * Regenerate punch-htx-selection from htx-punch-categories.json (same as sync-punch-details-from-htx).
 */
import {spawnSync} from 'node:child_process';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const r = spawnSync(process.execPath, [path.join(root, 'scripts/htx/sync-punch-details-from-htx.mjs')], {
  cwd: root,
  encoding: 'utf8',
});
if (r.status !== 0) {
  console.error(r.stderr || r.stdout);
  process.exit(r.status ?? 1);
}
console.log(r.stdout.trim());
