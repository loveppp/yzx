/**
 * Align punch catalog-details variants + punch-htx-selection with data/catalog/htx-punch-categories.json
 */
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const taxonomy = JSON.parse(
  fs.readFileSync(path.join(root, 'data/catalog/htx-punch-categories.json'), 'utf8'),
);
const detailsPath = path.join(root, 'src/data/catalog-details.json');
const details = JSON.parse(fs.readFileSync(detailsPath, 'utf8'));
const catalog = JSON.parse(fs.readFileSync(path.join(root, 'src/data/catalog.json'), 'utf8'));

const defaultDescription = (nameEn) => ({
  zh: `与 HTX 产品分类「${nameEn}」对应，具体尺寸、材料与安装形式以图纸确认。`,
  en: `Matches the HTX product category “${nameEn}”. Confirm dimensions, material and mounting from your drawing.`,
  vi: `Tương ứng danh mục HTX “${nameEn}”. Xác nhận kích thước, vật liệu và lắp ghép theo bản vẽ.`,
});

const defaultParameters = {
  zh: '工作端轮廓、杆径、总长、公差与材料',
  en: 'Working profile, shank, overall length, tolerances and material',
  vi: 'Biên dạng, thân, chiều dài, dung sai và vật liệu',
};

for (const [productId, block] of Object.entries(taxonomy.products)) {
  const prev = details[productId]?.variants ?? [];
  const byId = new Map(prev.map((v) => [v.id, v]));

  details[productId] = details[productId] ?? {note: {zh: '', en: '', vi: ''}};
  details[productId].variants = block.variants.map((v) => {
    const old = byId.get(v.id);
    return {
      id: v.id,
      name: v.name,
      description: old?.description ?? defaultDescription(v.name.en),
      parameters: old?.parameters ?? defaultParameters,
    };
  });
}

fs.writeFileSync(detailsPath, JSON.stringify(details, null, 2) + '\n');

const entries = [];
for (const [productId, block] of Object.entries(taxonomy.products)) {
  const product = catalog.products.find((p) => p.id === productId);
  entries.push({
    sourceFile: block.catalogMainFile,
    productId,
    role: 'catalog-main',
    detailAssetId: null,
    configurationIds: [],
    variantNameZh: '品类主图',
    descriptionZh: `【${product.name.zh} · 品类主图】HTX 品类页主图。`,
    status: 'selected',
  });
  for (const v of block.variants) {
    if (v.textOnly) continue;
    entries.push({
      sourceFile: v.sourceFile,
      productId,
      role: 'detail',
      detailAssetId: `${productId}--${v.id}`,
      configurationIds: [v.id],
      variantNameZh: v.name.zh,
      descriptionZh: `【${product.name.zh} · ${v.name.zh}】HTX 分类图。详情锚点 #configuration-${v.id}。`,
      status: 'selected',
    });
  }
}

const selectionPath = path.join(root, 'data/catalog/punch-htx-selection.json');
fs.writeFileSync(
  selectionPath,
  JSON.stringify({version: 2, updatedAt: new Date().toISOString(), entries}, null, 2) + '\n',
);

const punchIds = new Set(Object.keys(taxonomy.products));
const mediaPath = path.join(root, 'src/data/catalog-detail-media.json');
const media = JSON.parse(fs.readFileSync(mediaPath, 'utf8'));
media.assets = media.assets.filter((a) => !punchIds.has(a.productId));
fs.writeFileSync(mediaPath, JSON.stringify(media, null, 2) + '\n');

const briefsPath = path.join(root, 'data/catalog/detail-image-briefs.json');
const briefs = JSON.parse(fs.readFileSync(briefsPath, 'utf8'));
briefs.assets = briefs.assets.filter((a) => !punchIds.has(a.productId));

function materialClass(productId) {
  if (productId.includes('hss')) return 'hss';
  if (productId.includes('tableting')) return 'tool-steel';
  return 'carbide';
}

function stubDetailBrief(productId, v) {
  return {
    id: `${productId}--${v.id}`,
    productId,
    configurationIds: [v.id],
    composition: 'single',
    targetVariantCount: 1,
    variantCount: 1,
    pieceCount: 1,
    materialClass: materialClass(productId),
    familyInvariantEn: 'HTX punch-components category; image published from HTX reference grid.',
    structuralVariants: [
      {
        id: v.id,
        nameZh: v.name.zh,
        geometryEn: `Representative ${v.name.en} per HTX product page category tile.`,
        differenceZh: '与 HTX 站该分类展示图一致，不以 AI 臆造结构。',
        structuralKey: v.id,
        verificationStatus: 'htx-grid',
        references: [
          {
            url: 'https://htxprecision.com/punch-components/',
            evidenceZh: `HTX 分类：${v.name.en}`,
            verification: 'htx-published',
            reviewedAt: new Date().toISOString().slice(0, 10),
          },
        ],
        name: v.name,
      },
    ],
    missingEvidenceZh: [],
    generationReady: false,
    revisionAction: 'htx-direct-publish',
    descriptionZh: v.name.zh,
    reviewZh: '已用 HTX 原图直发；不再要求 Terrakinc 生图覆盖。',
    avoidEn: 'No AI restyle required when HTX source is used.',
    layoutEn: 'Single product photo as on HTX category grid.',
    titleZh: v.name.zh,
    finishEn: 'As photographed on HTX reference.',
    caption: v.name,
  };
}

for (const [productId, block] of Object.entries(taxonomy.products)) {
  for (const v of block.variants) {
    if (v.textOnly) continue;
    briefs.assets.push(stubDetailBrief(productId, v));
  }
}
fs.writeFileSync(briefsPath, JSON.stringify(briefs, null, 2) + '\n');

const lines = [
  '# 冲针 HTX 选图对齐表',
  '',
  '结构与 [HTX Punch Components](https://htxprecision.com/punch-components/) 各品类页 `pc3s4` / `pc3s5` 分类一一对应。发布：`node scripts/htx/publish-punch-from-retouch.mjs --htx`',
  '',
];
for (const productId of Object.keys(taxonomy.products)) {
  const product = catalog.products.find((p) => p.id === productId);
  lines.push(`## ${product.name.zh} (\`${productId}\`)`, '');
  lines.push('| 种类 ID | 中文名 | HTX 源文件 |');
  lines.push('| --- | --- | --- |');
  for (const v of taxonomy.products[productId].variants) {
    lines.push(`| \`${v.id}\` | ${v.name.zh} | \`${v.sourceFile}\` |`);
  }
  lines.push('');
}
fs.writeFileSync(path.join(root, 'docs/punch-htx-alignment.md'), lines.join('\n'));

console.log(JSON.stringify({products: Object.keys(taxonomy.products).length, entries: entries.length}));
