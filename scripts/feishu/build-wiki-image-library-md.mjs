/** Build Feishu wiki markdown for full-site image library (menu-aligned). */
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const catalog = JSON.parse(fs.readFileSync(path.join(root, 'src/data/catalog.json'), 'utf8'));

/** @type {Record<string, string[]>} existing feishu file URLs by product id */
const existingImages = {
  'carbide-punches': ['https://feishu.cn/file/F8ywb2pYnoipXYxEPNbc1T8anKh'],
  'stepped-punches': [
    'https://feishu.cn/file/E6UUbQmCjoHRNhxCVXycfB7Lnme',
    'https://feishu.cn/file/CrVTbdbdYoXRMex9LYlcPoIbnvc',
  ],
  'hss-punches': ['https://feishu.cn/file/RM13bXJVeoYvcZxHOHRcXMXXn0g'],
  'a-type-punches': ['https://feishu.cn/file/D2JFbzAzno6algxebXqcjcrMnyc'],
  'stamping-die-punches': ['https://feishu.cn/file/U7EsbnfOko2KGJxrqM1cJ5kzn5g'],
};

const menuGroupOrder = [
  'punch-components',
  'ejector-components',
  'guide-components',
  'die-springs',
  'bronze-components',
  'dowel-pins',
];

function namingPrefix(groupId, productId) {
  return `${groupId}/${productId}`;
}

function exampleName(groupId, productId, n = 1) {
  return `${namingPrefix(groupId, productId)}/img-${String(n).padStart(2, '0')}.jpg`;
}

const lines = [];
lines.push('# 模具配件图片库');
lines.push('');
lines.push('<callout emoji="📌">');
lines.push(
  '结构与网站导航「查看全部配件」一致，共 **6 大类、30 个产品页**。每个产品下可继续追加图片；文件名请按下方规则，便于与 `catalog.json` 对照。',
);
lines.push('</callout>');
lines.push('');
lines.push('## 使用说明与文件命名');
lines.push('');
lines.push('| 项目 | 规则 |');
lines.push('| --- | --- |');
lines.push(
  '| **命名路径** | `{组ID}/{产品ID}/img-序号.扩展名`，例：`punch-components/carbide-punches/img-01.jpg` |',
);
lines.push('| **序号** | 从 `01` 起递增；同产品多款式用 `img-02`、`img-03` … |');
lines.push(
  '| **可选后缀** | 需要时在序号后加简述：`img-01-round-tip.jpg`（仅用英文、数字、连字符） |',
);
lines.push('| **格式** | 优先 JPG/PNG；棚拍修图建议 4:3、背景 `#f5f6f7` |');
lines.push('| **本地目录** | 仓库 `output/feishu-image-library/` 下已建好同名文件夹，可先放本地再上传 Wiki |');
lines.push('| **站点对照** | **组 ID**、**产品 ID** 与外贸站 `src/data/catalog.json` 一致 |');
lines.push('');
lines.push('## 分类总览（与导航一致）');
lines.push('');

let index = 0;
for (const groupId of menuGroupOrder) {
  const group = catalog.groups.find((g) => g.id === groupId);
  const products = catalog.products.filter((p) => p.group === groupId);
  lines.push(`### ${group.name.zh}（\`${groupId}\`）`);
  lines.push('');
  for (const p of products) {
    index += 1;
    lines.push(`${index}. ${p.name.zh} — \`${p.id}\` — 命名前缀 \`${namingPrefix(groupId, p.id)}/\``);
  }
  lines.push('');
}

lines.push('---');
lines.push('');

for (const groupId of menuGroupOrder) {
  const group = catalog.groups.find((g) => g.id === groupId);
  const products = catalog.products.filter((p) => p.group === groupId);
  lines.push(`## ${group.name.zh}`);
  lines.push('');
  lines.push(`**组 ID：** \`${groupId}\``);
  lines.push('');

  for (const p of products) {
    lines.push(`### ${p.name.zh}`);
    lines.push('');
    lines.push(`**产品 ID：** \`${p.id}\``);
    lines.push(`**命名示例：** \`${exampleName(groupId, p.id, 1)}\`、\`${exampleName(groupId, p.id, 2)}\``);
    lines.push('');
    lines.push('**图库**');
    lines.push('');
    const urls = existingImages[p.id];
    if (urls?.length) {
      for (let i = 0; i < urls.length; i++) {
        lines.push(`![${p.name.zh} ${i + 1}](${urls[i]})`);
        lines.push('');
      }
    } else {
      lines.push(`*待上传 — 建议首图文件名：\`${exampleName(groupId, p.id, 1)}\`*`);
      lines.push('');
    }
    lines.push('---');
    lines.push('');
  }
}

lines.push('## 附录');
lines.push('');
lines.push('- 新图请归入对应 **产品 ID** 小节，勿跨类混放。');
lines.push('- 与网站已发布 catalog 图重复时，在图下注明 public 路径或 `image-briefs` 条目。');
lines.push('- 注塑辅助件（`plastic-mold-components`）不在当前导航菜单内，如需可另建 Wiki 子页。');
lines.push('');

const outMd = path.join(root, 'output/feishu-image-library/wiki-body.md');
fs.mkdirSync(path.dirname(outMd), {recursive: true});
fs.writeFileSync(outMd, lines.join('\n'));

for (const groupId of menuGroupOrder) {
  for (const p of catalog.products.filter((pr) => pr.group === groupId)) {
    const dir = path.join(root, 'output/feishu-image-library', groupId, p.id);
    fs.mkdirSync(dir, {recursive: true});
    fs.writeFileSync(
      path.join(dir, 'README.txt'),
      `产品：${p.name.zh}\n产品 ID：${p.id}\n命名：${namingPrefix(groupId, p.id)}/img-01.jpg\n`,
    );
  }
}

console.log(JSON.stringify({markdown: path.relative(root, outMd), products: index, groups: menuGroupOrder.length}));
