/**
 * Scan public product images for EXIF/IPTC/XMP presence and try to read copyright strings.
 *   node scripts/inspect-image-metadata.mjs
 *   node scripts/inspect-image-metadata.mjs --json
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const asJson = process.argv.includes('--json');
const imagesRoot = path.join(root, 'public/images');

const COPYRIGHT_RE =
  /copyright|rights|author|creator|credit|owner|yzx|borui|htx|precision|©/i;

function collectRasterFiles(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) collectRasterFiles(p, acc);
    else if (/\.(jpe?g|png|webp)$/i.test(ent.name)) acc.push(p);
  }
  return acc;
}

/** @param {Buffer} buf */
function scanBinaryForCopyrightStrings(buf) {
  const hits = new Set();
  const text = buf.toString('latin1');
  const chunks = text.split(/[\x00-\x08\x0b\x0c\x0e-\x1f]/);
  for (const chunk of chunks) {
    const t = chunk.trim();
    if (t.length < 4 || t.length > 200) continue;
    if (COPYRIGHT_RE.test(t)) hits.add(t.slice(0, 120));
  }
  return [...hits];
}

async function inspectFile(absPath) {
  const rel = path.relative(root, absPath).replace(/\\/g, '/');
  const buf = fs.readFileSync(absPath);
  const meta = await sharp(buf).metadata();
  const blobs = {
    exif: meta.exif,
    iptc: meta.iptc,
    xmp: meta.xmp,
  };
  const strings = [];
  for (const [kind, blob] of Object.entries(blobs)) {
    if (!blob?.length) continue;
    strings.push(...scanBinaryForCopyrightStrings(blob).map((s) => `${kind}: ${s}`));
  }
  return {
    rel,
    format: meta.format,
    hasExif: Boolean(meta.exif?.length),
    hasIptc: Boolean(meta.iptc?.length),
    hasXmp: Boolean(meta.xmp?.length),
    copyrightStrings: [...new Set(strings)].slice(0, 8),
  };
}

const all = collectRasterFiles(imagesRoot);
const byArea = {
  products: all.filter((p) => p.includes(`${path.sep}products${path.sep}`)),
  home: all.filter((p) => p.includes(`${path.sep}home${path.sep}`)),
  factory: all.filter((p) => p.includes(`${path.sep}factory${path.sep}`)),
  catalog: all.filter((p) => p.includes(`${path.sep}catalog${path.sep}`)),
};

async function summarize(label, files) {
  let withAnyMeta = 0;
  let withCopyrightHint = 0;
  const examples = [];
  for (const f of files) {
    const r = await inspectFile(f);
    if (r.hasExif || r.hasIptc || r.hasXmp) withAnyMeta += 1;
    if (r.copyrightStrings.length) {
      withCopyrightHint += 1;
      if (examples.length < 5) examples.push(r);
    }
  }
  return { label, total: files.length, withAnyMeta, withCopyrightHint, examples };
}

const summaries = [];
for (const [label, files] of Object.entries(byArea)) {
  summaries.push(await summarize(label, files));
}

const punchSample = [
  'public/images/home/punch-showcase-hero.png',
  'public/images/products/catalog/carbide-punches-2026-10-07T13-17-57-118Z.png',
  'public/images/products/details/carbide-punches--type-a-2026-10-07T13-17-57-118Z.jpg',
  'public/images/products/catalog/guide-posts-2026-10-08T17-30-30-331Z-4x3.jpg',
  'public/images/products/details/guide-posts--stripper-2026-10-11T09-00-00-000Z.jpg',
  'public/images/products/family-sections/guide-posts--applicationsFigure-2026-10-08T17-31-34-603Z.jpg',
  'public/images/factory/punch-workshop-1.jpg',
  'public/images/catalog/bronze-components-cover.png',
].map((rel) => path.join(root, rel)).filter((p) => fs.existsSync(p));

const sampleResults = [];
for (const p of punchSample) sampleResults.push(await inspectFile(p));

const backupRoot = path.join(root, 'output/watermark-backups');
let backupSample = null;
const backupTry = path.join(
  backupRoot,
  'images/products/catalog/carbide-punches-2026-10-07T13-17-57-118Z.png',
);
if (fs.existsSync(backupTry)) backupSample = await inspectFile(backupTry);

// Deep pass: files with EXIF but no copyright strings — show common EXIF tag names via regex on full file
async function exifTagHints(absPath) {
  const buf = fs.readFileSync(absPath);
  const tags = [
    'Copyright',
    'Artist',
    'Author',
    'Creator',
    'ImageDescription',
    'UserComment',
    'Software',
    'Make',
    'Model',
  ];
  const text = buf.toString('latin1');
  /** @type {string[]} */
  const found = [];
  for (const tag of tags) {
    const idx = text.indexOf(tag);
    if (idx >= 0) {
      const snippet = text.slice(idx, idx + 80).replace(/[^\x20-\x7e]/g, ' ');
      found.push(snippet.trim());
    }
  }
  return found;
}

let exifNoCopyright = 0;
/** @type {Array<{ rel: string; hints: string[] }>} */
const exifExamples = [];
for (const f of byArea.products) {
  const r = await inspectFile(f);
  if (!r.hasExif && !r.hasIptc && !r.hasXmp) continue;
  if (r.copyrightStrings.length) continue;
  exifNoCopyright += 1;
  if (exifExamples.length < 4) {
    exifExamples.push({ rel: r.rel, hints: await exifTagHints(f) });
  }
}

const feishuSamples = [
  'output/feishu-retouch/Z4pObuz7QoHnOZxlN7VcdJ0jnoh-trial/retouched.jpg',
  'output/feishu-retouch/KR8obVZT0oRA5dxsuqZcQ0Btntg-trial/retouched.jpg',
]
  .map((rel) => path.join(root, rel))
  .filter((p) => fs.existsSync(p));
const feishuResults = [];
for (const p of feishuSamples) feishuResults.push(await inspectFile(p));

const out = { summaries, sampleResults, backupSample, exifNoCopyright, exifExamples, feishuResults };

if (asJson) console.log(JSON.stringify(out, null, 2));
else {
  console.log('=== 按目录统计（public/images）===');
  for (const s of summaries) {
    console.log(
      `${s.label}: ${s.total} 张 raster | 含 EXIF/IPTC/XMP 任一: ${s.withAnyMeta} | 块内出现版权相关可读串: ${s.withCopyrightHint}`,
    );
  }
  console.log('\n=== 抽样明细 ===');
  for (const r of sampleResults) {
    console.log(`\n${r.rel}`);
    console.log(
      `  EXIF:${r.hasExif} IPTC:${r.hasIptc} XMP:${r.hasXmp} | 版权相关串: ${r.copyrightStrings.length ? r.copyrightStrings.join(' | ') : '(无)'}`,
    );
  }
  if (backupSample) {
    console.log('\n=== watermark-backups 冲针主图（烙水印前备份）===');
    console.log(JSON.stringify(backupSample, null, 2));
  }
  console.log(
    `\n=== products 含 EXIF 但无版权相关可读串: ${exifNoCopyright} 张（多为相机/导出默认 EXIF，非版权字段）===`,
  );
  for (const e of exifExamples) {
    console.log(`\n${e.rel}`);
    console.log(`  tag hints: ${e.hints.length ? e.hints.join(' | ') : '(未扫到常见 EXIF 标签名)'}`);
  }
  if (feishuResults.length) {
    console.log('\n=== output/feishu-retouch 修图原稿抽样 ===');
    for (const r of feishuResults) {
      console.log(
        `${r.rel} EXIF:${r.hasExif} IPTC:${r.hasIptc} XMP:${r.hasXmp} copyrightStrings:${r.copyrightStrings.length}`,
      );
    }
  }
}
