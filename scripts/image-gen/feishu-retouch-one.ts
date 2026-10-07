/** One-off Feishu source photo → catalog-style retouch via Terrakinc (no auto-retry). */
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {downloadToFile, generateImage, loadConfig, writeInlineToFile} from './terrakinc-client.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');

async function loadTerrakincEnv() {
  const envText = await fs.readFile(path.join(root, '.env'), 'utf8');
  for (const line of envText.split('\n')) {
    const match = line.trim().match(/^(TERRAKINC_[A-Z_]+)=(.*)$/);
    if (match && process.env[match[1]] === undefined) {
      process.env[match[1]] = match[2].trim().replace(/^(['"])(.*)\1$/, '$2');
    }
  }
}

const RETOUCH_PROMPT = `Edit the attached industrial product photograph for a B2B punch-pin catalog.

Preserve the same metal punch pins and blocks: keep the approximate product count, layout, and machined metal look. Do not add or remove individual parts.

Remove completely: all text (including Chinese), colored marketing banners, logos, watermarks, and any graphic overlays. Remove measuring tools such as micrometers or calipers if visible.

Replace the background with a seamless neutral light-gray studio backdrop (#f5f6f7), soft upper-left light, restrained lower-right contact shadows, neutral white balance. No visible horizon, no black backdrop, no mirror floor reflections.

Professional catalog product photo only. No text, numbers, dimension lines, or material-grade markings anywhere in the image.

Realistic studio product style: fine machining texture, restrained metal highlights.`;

async function main() {
  const sourceArg = process.argv[2];
  const source = sourceArg
    ? path.resolve(sourceArg)
    : path.join(root, 'output/feishu-source/F8ywb2pYnoipXYxEPNbc1T8anKh.png');
  if (!source.startsWith(root + path.sep)) throw new Error('Source must stay inside the project.');
  await loadTerrakincEnv();
  const cfg = loadConfig();
  if (new URL(cfg.baseUrl).origin !== 'https://api.terrakinc.com') {
    throw new Error('Unexpected provider origin.');
  }

  const bytes = await fs.readFile(source);
  const ext = path.extname(source).toLowerCase();
  const mimeType = ext === '.png' ? 'image/png' : ext === '.webp' ? 'image/webp' : 'image/jpeg';
  const stem = path.basename(source, ext);
  const outDir = path.join(root, 'output/feishu-retouch', `${stem}-trial`);
  await fs.mkdir(outDir, {recursive: true});

  const meta = {
    source: path.relative(root, source),
    model: cfg.model,
    aspectRatio: '4:3',
    imageSize: '2K',
    createdAt: new Date().toISOString(),
  };
  await fs.writeFile(path.join(outDir, 'request.json'), JSON.stringify({...meta, prompt: RETOUCH_PROMPT}, null, 2));

  console.log(JSON.stringify({status: 'generating', ...meta, outDir: path.relative(root, outDir)}));

  const result = await generateImage(cfg, {
    prompt: RETOUCH_PROMPT,
    referenceInline: {mimeType, data: bytes.toString('base64')},
    aspectRatio: '4:3',
    imageSize: '2K',
    responseFile: path.join(outDir, 'provider-response.json'),
  });

  const outPath = path.join(outDir, `retouched${result.inline?.mimeType === 'image/jpeg' ? '.jpg' : '.png'}`);
  if (result.inline) await writeInlineToFile(result.inline, outPath);
  else if (result.url) await downloadToFile(result.url, outPath);
  else throw new Error('No image in response.');

  const stat = await fs.stat(outPath);
  console.log(JSON.stringify({status: 'done', file: path.relative(root, outPath), bytes: stat.size, usage: result.usage ?? null}));
}

main().catch((e) => {
  console.error(e instanceof Error ? e.message : e);
  process.exit(1);
});
