/**
 * Download product images from htxprecision.com pages listed in catalog sourceUrls.
 * Output: output/htx-sources/{groupId}/{productId}/ + manifest.json (for AI retouch pipeline).
 *
 * Usage:
 *   node scripts/htx/collect-product-images.mjs
 *   node scripts/htx/collect-product-images.mjs --group punch-components
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const catalog = JSON.parse(await fs.readFile(path.join(root, 'src/data/catalog.json'), 'utf8'));

const groupFilter = (() => {
  const i = process.argv.indexOf('--group');
  return i >= 0 ? process.argv[i + 1] : null;
})();

const SKIP_NAME =
  /logo|site-logo|header-logo|footer-logo|favicon|icon|fb\.|yt\.|tw\.|ln\.|wechat|whatsapp|sprite|avatar|150x150|100x100/i;

function normalizeUrl(raw, pageUrl) {
  if (!raw || raw.startsWith('data:')) return null;
  try {
    return new URL(raw, pageUrl).href.split('#')[0];
  } catch {
    return null;
  }
}

function extractImageUrls(html, pageUrl) {
  const found = new Set();
  const patterns = [
    /\bsrc=["']([^"']+)["']/gi,
    /\bdata-src=["']([^"']+)["']/gi,
    /https:\/\/htxprecision\.com\/wp-content\/uploads\/[^\s"'<>]+?\.(?:jpg|jpeg|png|webp)/gi,
  ];
  for (const re of patterns) {
    for (const m of html.matchAll(re)) {
      const u = normalizeUrl(m[1] ?? m[0], pageUrl);
      if (u) found.add(u);
    }
  }
  return [...found].filter((u) => {
    if (!/\/wp-content\/uploads\//i.test(u)) return false;
    if (!/\.(jpg|jpeg|png|webp)(\?|$)/i.test(u)) return false;
    const base = path.basename(u.split('?')[0]);
    if (SKIP_NAME.test(base)) return false;
    return true;
  });
}

async function fetchHtml(url) {
  const res = await fetch(url, {
    headers: {'User-Agent': 'foreignTrade-catalog-collector/1.0 (+internal reference)'},
    redirect: 'follow',
    signal: AbortSignal.timeout(60_000),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} ${url}`);
  return res.text();
}

async function downloadFile(url, dest) {
  const res = await fetch(url, {
    headers: {'User-Agent': 'foreignTrade-catalog-collector/1.0'},
    signal: AbortSignal.timeout(120_000),
  });
  if (!res.ok) throw new Error(`download ${res.status} ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await fs.mkdir(path.dirname(dest), {recursive: true});
  await fs.writeFile(dest, buf, {flag: 'wx'}).catch(async (e) => {
    if (e.code === 'EEXIST') return;
    throw e;
  });
  return buf.length;
}

const products = catalog.products.filter((p) => !groupFilter || p.group === groupFilter);
const manifest = {
  collectedAt: new Date().toISOString(),
  sourceSite: 'https://htxprecision.com',
  purpose: 'internal reference for AI retouch; do not republish raw files without rights review',
  groupFilter,
  products: [],
};

for (const product of products) {
  const pageUrls = [...new Set([...(product.sourceUrls ?? []), ...(product.group === 'punch-components' ? ['https://htxprecision.com/punch-components/'] : [])])];
  const outDir = path.join(root, 'output/htx-sources', product.group, product.id);
  await fs.mkdir(outDir, {recursive: true});

  const entry = {
    productId: product.id,
    groupId: product.group,
    nameZh: product.name.zh,
    pageUrls,
    images: [],
  };

  const seenUrl = new Set();
  let index = 0;

  for (const pageUrl of pageUrls) {
    let html;
    try {
      html = await fetchHtml(pageUrl);
    } catch (e) {
      entry.images.push({pageUrl, error: String(e.message ?? e)});
      continue;
    }
    for (const imgUrl of extractImageUrls(html, pageUrl)) {
      if (seenUrl.has(imgUrl)) continue;
      seenUrl.add(imgUrl);
      index += 1;
      const base = path.basename(imgUrl.split('?')[0]);
      const safe = base.replace(/[^\w.-]+/g, '_').slice(0, 80);
      const dest = path.join(outDir, `source-${String(index).padStart(2, '0')}-${safe}`);
      try {
        const bytes = await downloadFile(imgUrl, dest);
        entry.images.push({file: path.relative(root, dest), sourceUrl: imgUrl, pageUrl, bytes});
      } catch (e) {
        entry.images.push({sourceUrl: imgUrl, pageUrl, error: String(e.message ?? e)});
      }
    }
  }

  manifest.products.push(entry);
}

const manifestPath = path.join(root, 'output/htx-sources', groupFilter ?? 'all', 'manifest.json');
await fs.mkdir(path.dirname(manifestPath), {recursive: true});
await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2) + '\n');

const totalFiles = manifest.products.reduce(
  (n, p) => n + p.images.filter((i) => i.file).length,
  0,
);
console.log(JSON.stringify({products: manifest.products.length, files: totalFiles, manifest: path.relative(root, manifestPath)}));
