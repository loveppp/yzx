/**
 * Create a new Feishu wiki doc and append HTX collected images with captions.
 * Usage: node scripts/feishu/publish-htx-manifest-to-wiki.mjs [manifest.json]
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {execFileSync} from 'node:child_process';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const manifestPath = path.resolve(root, process.argv[2] ?? 'output/htx-sources/punch-components/manifest.json');
const manifest = JSON.parse(await fs.readFile(manifestPath, 'utf8'));

function lark(args) {
  return execFileSync('lark-cli', args, {
    cwd: root,
    encoding: 'utf8',
    maxBuffer: 20 * 1024 * 1024,
  });
}

const title = 'HTX 图源采集 · 冲针与冲头（含描述）';
const createRaw = lark([
  'wiki',
  '+node-create',
  '--as',
  'user',
  '--space-id',
  'my_library',
  '--title',
  title,
  '--obj-type',
  'docx',
]);
const create = JSON.parse(createRaw);
if (!create.ok) throw new Error(`node-create failed: ${createRaw}`);
const docId = create.data?.node?.obj_token ?? create.data?.obj_token;
const nodeToken = create.data?.node?.node_token ?? create.data?.node_token;
const wikiUrl =
  create.data?.node?.url ??
  (nodeToken ? `https://open.feishu.cn/wiki/${nodeToken}` : null);

const intro = `# ${title}

<callout emoji="📦">
从 [htxprecision.com](https://htxprecision.com/punch-components/) 采集的**冲针与冲头**原图，每张附中文描述、来源页与建议文件名。仅供内部修图与选型参考；对外发布前请 AI 处理并核对版权。
</callout>

## 使用说明

| 字段 | 说明 |
| --- | --- |
| 建议文件名 | 与本地 \`output/htx-sources/\` 及 Wiki 图库命名一致 |
| 描述 | 产品类别 + 原图文件名语义 |
| 来源页 | HTX 产品页 URL |
| 后续 | Terrakinc 修图 → 飞书「模具配件图片库」或 \`image-gen\` 发布 |

## 分类

`;

let toc = '';
for (const p of manifest.products) {
  const count = p.images.filter((i) => i.file && !i.error).length;
  toc += `- ${p.nameZh}（\`${p.productId}\`）— ${count} 张\n`;
}

await fs.writeFile(path.join(root, 'output/htx-sources/_feishu-intro.md'), intro + toc + '\n---\n\n');
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
  '@output/htx-sources/_feishu-intro.md',
]);

for (const product of manifest.products) {
  const images = product.images.filter((i) => i.file && !i.error);
  if (!images.length) continue;

  let chunk = `## ${product.nameZh}\n\n**产品 ID：** \`${product.productId}\`  \n**HTX 页面：** ${product.pageUrls?.[0] ?? '—'}\n\n`;
  for (const img of images) {
    const rel = img.file.replace(/\\/g, '/');
    chunk += `### ${path.basename(img.file)}\n\n`;
    chunk += `**描述：** ${img.descriptionZh ?? '—'}\n\n`;
    chunk += `**建议路径：** \`${img.suggestedName ?? rel}\`\n\n`;
    chunk += `**来源页：** ${img.pageUrl}\n\n`;
    chunk += `**原图 URL：** ${img.sourceUrl}\n\n`;
    chunk += `![${img.descriptionZh ?? path.basename(img.file)}](@${rel})\n\n`;
  }
  chunk += '---\n\n';

  const partPath = path.join(root, 'output/htx-sources', `_feishu-chunk-${product.productId}.md`);
  await fs.writeFile(partPath, chunk);
  lark([
    'docs',
    '+update',
    '--as',
    'user',
    '--doc',
    docId,
    '--command',
    'append',
    '--doc-format',
    'markdown',
    '--content',
    `@output/htx-sources/_feishu-chunk-${product.productId}.md`,
  ]);
  console.log(JSON.stringify({appended: product.productId, images: images.length}));
}

console.log(JSON.stringify({ok: true, title, docId, wikiUrl, nodeToken, totalProducts: manifest.products.length}));
