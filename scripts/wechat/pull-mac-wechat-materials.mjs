/**
 * Pull images & documents from Mac WeChat local storage into a structured material pack.
 *
 * WeChat Moments cannot be scraped remotely; practical workflow:
 * 1. In WeChat: 朋友圈 → 长按图片/链接 → 收藏 (repeat for posts you need).
 * 2. Chat files: open/download PDF·Word·Excel in chat, or save to data/wechat-materials/<label>/inbox/.
 * 3. Run this script, then use output manifest for Feishu/wiki or retouch pipeline.
 *
 * Usage:
 *   node scripts/wechat/pull-mac-wechat-materials.mjs --label htx
 *   node scripts/wechat/pull-mac-wechat-materials.mjs --label htx --contact swxid_xxx --days 90
 *   node scripts/wechat/pull-mac-wechat-materials.mjs --label htx --inbox data/wechat-materials/htx/inbox
 *   node scripts/wechat/pull-mac-wechat-materials.mjs --label htx --message-temp --days 7
 */
import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');

const IMAGE_EXT = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif', '.heic']);
const DOC_EXT = new Set([
  '.pdf',
  '.doc',
  '.docx',
  '.xls',
  '.xlsx',
  '.ppt',
  '.pptx',
  '.csv',
  '.txt',
  '.zip',
  '.rar',
  '.7z',
]);

function argValue(flag) {
  const i = process.argv.indexOf(flag);
  return i >= 0 ? process.argv[i + 1] : null;
}

const label = argValue('--label') ?? 'htx';
const contactFilter = argValue('--contact'); // substring match on source path, e.g. swxid_xxx
const days = Number(argValue('--days') ?? '3650');
const inboxArg = argValue('--inbox');
const includeMessageTemp = process.argv.includes('--message-temp');
const sinceMs = Date.now() - days * 86400_000;

function shouldSkipFileName(name) {
  if (name === '.DS_Store') return true;
  if (/\.pic_thumb\.jpg$/i.test(name)) return true;
  return false;
}

const wechatVersionRoot = path.join(
  process.env.HOME,
  'Library/Containers/com.tencent.xinWeChat/Data/Library/Application Support/com.tencent.xinWeChat',
);

async function findAccountDataDirs() {
  let versions;
  try {
    versions = await fs.readdir(wechatVersionRoot);
  } catch {
    return [];
  }
  const dirs = [];
  for (const ver of versions) {
    const verPath = path.join(wechatVersionRoot, ver);
    let entries;
    try {
      entries = await fs.readdir(verPath, {withFileTypes: true});
    } catch {
      continue;
    }
    for (const ent of entries) {
      if (!ent.isDirectory()) continue;
      if (ent.name.length !== 32 || !/^[a-f0-9]+$/.test(ent.name)) continue;
      const messageDir = path.join(verPath, ent.name, 'Message');
      try {
        await fs.access(messageDir);
        dirs.push(path.join(verPath, ent.name));
      } catch {
        /* skip */
      }
    }
  }
  return dirs;
}

function kindForExt(ext) {
  if (IMAGE_EXT.has(ext)) return 'image';
  if (DOC_EXT.has(ext)) return 'document';
  return 'other';
}

function safeName(name) {
  return name.replace(/[^\w.\-()+@#]+/g, '_').slice(0, 120);
}

async function sha256File(filePath) {
  const h = crypto.createHash('sha256');
  const buf = await fs.readFile(filePath);
  h.update(buf);
  return h.digest('hex');
}

async function* walkFiles(dir, maxDepth = 6, depth = 0) {
  if (depth > maxDepth) return;
  let entries;
  try {
    entries = await fs.readdir(dir, {withFileTypes: true});
  } catch {
    return;
  }
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (/^(desc_cache|descheight_cache|FavoritesThumbnails|cdn_thumbnails|tp_thumbnails)$/i.test(ent.name)) {
        continue;
      }
      yield* walkFiles(full, maxDepth, depth + 1);
      continue;
    }
    if (!ent.isFile()) continue;
    if (shouldSkipFileName(ent.name)) continue;
    yield full;
  }
}

async function collectFromSources(sourceRoots, outRaw) {
  const seenHash = new Set();
  const copied = [];

  for (const {dir: srcRoot, maxDepth} of sourceRoots) {
    for await (const src of walkFiles(srcRoot, maxDepth ?? 6)) {
      const ext = path.extname(src).toLowerCase();
      const kind = kindForExt(ext);
      if (kind === 'other') continue;

      let stat;
      try {
        stat = await fs.stat(src);
      } catch {
        continue;
      }
      if (stat.mtimeMs < sinceMs) continue;
      if (contactFilter && !src.includes(contactFilter)) continue;

      let hash;
      try {
        hash = await sha256File(src);
      } catch {
        continue;
      }
      if (seenHash.has(hash)) continue;
      seenHash.add(hash);

      const sub = kind === 'image' ? 'images' : 'documents';
      const base = safeName(path.basename(src));
      const dest = path.join(outRaw, sub, `${hash.slice(0, 12)}-${base}`);
      await fs.mkdir(path.dirname(dest), {recursive: true});
      try {
        await fs.copyFile(src, dest);
      } catch {
        continue;
      }

      copied.push({
        kind,
        file: path.relative(root, dest),
        sourcePath: src,
        bytes: stat.size,
        mtime: new Date(stat.mtimeMs).toISOString(),
        sha256: hash,
      });
    }
  }
  return copied;
}

function buildIndexMd(manifest) {
  const lines = [
    `# ${manifest.title}`,
    '',
    `生成时间：${manifest.builtAt}`,
    '',
    manifest.purpose,
    '',
    '## 统计',
    '',
    `- 图片：${manifest.stats.images}`,
    `- 文档：${manifest.stats.documents}`,
    `- 合计：${manifest.stats.total}`,
    '',
    '## 采集说明',
    '',
    '1. 朋友圈：可**收藏**，或近期浏览过的图会落在 MessageTemp（加 `--message-temp --days 7` 拉取）。',
    '2. 聊天 PDF/Word：在微信中**打开并下载**后重跑；或手动放入 `inbox/`。',
    '3. 对外发布前请核对版权与供应商授权。',
    '',
    '## 文件清单',
    '',
  ];

  for (const item of manifest.items) {
    const tag = item.kind === 'image' ? '图' : '文档';
    lines.push(`- [${tag}] \`${item.file}\` (${Math.round(item.bytes / 1024)} KB)`);
  }
  lines.push('');
  return lines.join('\n');
}

const accountDirs = await findAccountDataDirs();
const sourceRoots = accountDirs.map((d) => ({dir: path.join(d, 'Favorites', 'data'), maxDepth: 6}));
if (includeMessageTemp) {
  for (const d of accountDirs) {
    sourceRoots.push({dir: path.join(d, 'Message', 'MessageTemp'), maxDepth: 4});
  }
}

const defaultInbox = path.join(root, 'data/wechat-materials', label, 'inbox');
const inbox = path.resolve(root, inboxArg ?? defaultInbox);
const sourceDirs = [...sourceRoots];
try {
  await fs.access(inbox);
  sourceDirs.push(inbox);
} catch {
  await fs.mkdir(inbox, {recursive: true});
}

const outDir = path.join(root, 'output/wechat-materials', label);
const outRaw = path.join(outDir, 'raw');
await fs.mkdir(outRaw, {recursive: true});

const items = await collectFromSources(sourceDirs, outRaw);
items.sort((a, b) => a.file.localeCompare(b.file));

const stats = {
  images: items.filter((i) => i.kind === 'image').length,
  documents: items.filter((i) => i.kind === 'document').length,
  total: items.length,
};

const manifest = {
  builtAt: new Date().toISOString(),
  label,
  title: `微信资料包 · ${label}`,
  purpose:
    '从 Mac 微信本地缓存（收藏 + 可选 MessageTemp + inbox）汇总的图片与文档，供内部选型、修图与资料整理；勿直接对外转载原文件。',
  contactFilter: contactFilter ?? null,
  includeMessageTemp,
  days,
  wechatAccountDirs: accountDirs,
  inbox: path.relative(root, inbox),
  stats,
  items,
};

await fs.writeFile(path.join(outDir, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
await fs.writeFile(path.join(outDir, 'index.md'), buildIndexMd(manifest));

console.log(
  JSON.stringify({
    ok: true,
    label,
    outDir: path.relative(root, outDir),
    manifest: path.relative(root, path.join(outDir, 'manifest.json')),
    stats,
    inbox: path.relative(root, inbox),
    hint:
      stats.total === 0
        ? '暂无文件：请先在微信收藏朋友圈图片，或将文档放入 inbox 后重试'
        : '完成：查看 output/wechat-materials 下 index.md 与 manifest.json',
  }),
);
