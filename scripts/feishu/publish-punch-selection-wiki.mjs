/**
 * Overwrite HTX Feishu wiki with punch-htx-selection only (outer product + inner variants).
 * Usage: node scripts/feishu/publish-punch-selection-wiki.mjs [doc_id_or_wiki_url]
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {execFileSync} from 'node:child_process';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const defaultDoc = 'SZPiwcTolipmo0k8YYLc5ybOn3g';
const docArg = process.argv[2] ?? defaultDoc;

const catalog = JSON.parse(await fs.readFile(path.join(root, 'src/data/catalog.json'), 'utf8'));
const selection = JSON.parse(await fs.readFile(path.join(root, 'data/catalog/punch-htx-selection.json'), 'utf8'));
const useRetouchImages = process.argv.includes('--retouch');
const retouchManifestPath = path.join(root, 'output/htx-retouch/manifest-retouched.json');
/** @type {Map<string, string>} */
let retouchBySource = new Map();
if (useRetouchImages) {
  try {
    const rt = JSON.parse(await fs.readFile(retouchManifestPath, 'utf8'));
    for (const item of rt.items ?? []) {
      if (item.sourceFile && item.retouchedFile) retouchBySource.set(item.sourceFile, item.retouchedFile);
    }
  } catch {
    /* fall back to HTX sources */
  }
}

function lark(args) {
  return execFileSync('lark-cli', args, {cwd: root, encoding: 'utf8', maxBuffer: 30 * 1024 * 1024});
}

function resolveDocId(arg) {
  if (arg.includes('wiki/')) return arg;
  const raw = lark(['wiki', '+node-get', '--as', 'user', '--node-token', arg]);
  const j = JSON.parse(raw);
  return j.data?.obj_token ?? arg;
}

const docId = resolveDocId(docArg);
const punchIds = catalog.products.filter((p) => p.group === 'punch-components').map((p) => p.id);

const lines = [];
lines.push(`# HTX 冲针精选图库（${useRetouchImages ? '修图版' : '原图 · 与站一致'}）`);
lines.push('');
lines.push('<callout emoji="📌">');
lines.push(
  '仅保留 **选中的** HTX 原图/修图，按 **外层品类（7）→ 内部具体种类** 组织。完整 190 张采集包在本地 `output/htx-sources/`，不在本文档展示。',
);
lines.push('</callout>');
lines.push('');
lines.push('## 使用说明');
lines.push('');
lines.push('| 字段 | 说明 |');
lines.push('| --- | --- |');
lines.push('| 外层品类 | 与网站 `catalog.json` product id 一致 |');
lines.push('| 内部种类 | 与详情页 `#configuration-*` 及 `detailAssetId` 一致 |');
lines.push(
  useRetouchImages
    ? '| 修图标准 | `#f5f6f7` 背景、4:3、Terrakinc 去字/去道具 |'
    : '| 发布 | HTX 原图直出（本站仅叠水印） |',
);
lines.push('');

for (const productId of punchIds) {
  const product = catalog.products.find((p) => p.id === productId);
  const group = selection.entries.filter((e) => e.productId === productId && e.status === 'selected');
  if (!group.length) continue;

  lines.push(`## ${product.name.zh}`);
  lines.push('');
  lines.push(`**产品 ID：** \`${productId}\``);
  lines.push('');

  const main = group.find((e) => e.role === 'catalog-main');
  if (main) {
    lines.push('### 品类主图（列表 / 详情顶图）');
    lines.push('');
    lines.push(`**描述：** ${main.descriptionZh}`);
    lines.push('');
    const imgPath = retouchBySource.get(main.sourceFile) ?? main.sourceFile;
    lines.push(`![${product.name.zh} 主图](@${imgPath.replace(/\\/g, '/')})`);
    lines.push('');
  }

  const details = group.filter((e) => e.role === 'detail');
  if (details.length) {
    lines.push('### 内部具体种类（详情页用图）');
    lines.push('');
    for (const d of details) {
      lines.push(`#### ${d.variantNameZh}`);
      lines.push('');
      lines.push(`**detailAssetId：** \`${d.detailAssetId}\``);
      lines.push(`**configurationIds：** \`${(d.configurationIds ?? []).join(', ')}\``);
      lines.push(`**描述：** ${d.descriptionZh}`);
      lines.push('');
      const imgPath = retouchBySource.get(d.sourceFile) ?? d.sourceFile;
      lines.push(`![${d.variantNameZh}](@${imgPath.replace(/\\/g, '/')})`);
      lines.push('');
    }
  }

  const missing = selection.entries.filter((e) => e.productId === productId && e.status === 'missing-source');
  if (missing.length) {
    lines.push('### 待补图');
    lines.push('');
    for (const m of missing) {
      lines.push(`- **${m.variantNameZh}** (\`${m.detailAssetId}\`)：${m.descriptionZh}`);
    }
    lines.push('');
  }
  lines.push('---');
  lines.push('');
}

const bodyPath = path.join(root, 'output/htx-sources/_feishu-punch-selection-body.md');
await fs.writeFile(bodyPath, lines.join('\n'));

lark([
  'docs',
  '+update',
  '--as',
  'user',
  '--doc',
  docId,
  '--command',
  'overwrite',
  '--doc-format',
  'markdown',
  '--content',
  '@output/htx-sources/_feishu-punch-selection-body.md',
]);

console.log(JSON.stringify({ok: true, docId, bodyPath: path.relative(root, bodyPath)}));
