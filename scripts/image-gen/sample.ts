/** One catalog sample per invocation. Never publishes or retries a generation. */
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {generateImage, loadConfig} from './terrakinc-client.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const args = process.argv.slice(2);
const value = (flag: string) => { const i = args.indexOf(flag); return i < 0 ? undefined : args[i + 1]; };

async function main() {
  const env = await fs.readFile(path.join(root, '.env'), 'utf8');
  for (const line of env.split('\n')) {
    const match = line.trim().match(/^(TERRAKINC_[A-Z_]+)=(.*)$/);
    if (match && process.env[match[1]] === undefined) process.env[match[1]] = match[2].trim().replace(/^(['"])(.*)\1$/, '$2');
  }
  const cfg = loadConfig();
  // Keep the configured credential on the user-selected provider origin.
  if (new URL(cfg.baseUrl).origin !== 'https://api.terrakinc.com') throw new Error('Unexpected provider origin; stop before transmitting credentials.');
  const plan = JSON.parse(await fs.readFile(path.join(root, 'data/catalog/image-plan.json'), 'utf8'));
  const id = value('--id');
  const job = plan.jobs.find((j: {id: string}) => j.id === id);
  if (!job) throw new Error('Specify one valid catalog product using --id.');
  if (args.includes('--dry-run')) {
    console.log(JSON.stringify({id, model: cfg.model, aspectRatio: job.aspectRatio, imageSize: '2K', pieceCount: job.pieceCount, promptLength: job.prompt.length, tokenPresent: Boolean(cfg.token), calls: 0}));
    return;
  }
  if (args.includes('--check-model')) {
    const res = await fetch(`${cfg.baseUrl}/v1/models`, {headers: {Authorization: `Bearer ${cfg.token}`}, signal: AbortSignal.timeout(30_000)});
    if (!res.ok) throw new Error(`Model check HTTP ${res.status}`);
    const body = await res.json() as {data?: Array<{id: string}>};
    if (!body.data?.some(m => m.id === cfg.model)) throw new Error('Configured image model is not available to this token.');
    console.log(JSON.stringify({configuredModel: cfg.model, available: true, generationCalls: 0}));
    return;
  }
  const refPath = value('--style-reference');
  let referenceInline: {mimeType: string; data: string} | undefined;
  if (refPath) {
    const bytes = await fs.readFile(path.resolve(root, refPath));
    if (bytes.length > 1_000_000) throw new Error('Use a style preview smaller than 1 MB.');
    const format = detectFormat(bytes);
    referenceInline = {mimeType: format.mime, data: bytes.toString('base64')};
  }
  const stamp = new Date().toISOString().replace(/[:.]/g, '-');
  const dir = path.join(root, 'output/product-images/candidates', id!, stamp);
  await fs.mkdir(dir, {recursive: true});
  const prompt = job.prompt + (refPath ? '\nInput image role: provisional style reference from this sample round only. Match its background and lighting, not its product, object count or material. Generate the specified new product.' : '');
  await fs.writeFile(path.join(dir, 'prompt.txt'), prompt, {flag: 'wx'});
  const record = {id, model: cfg.model, createdAt: new Date().toISOString(), aspectRatio: job.aspectRatio, imageSize: '2K', reference: refPath ?? null, generationAttempts: 1, publication: 'draft-only'};
  const saveRecord = (extra: Record<string, unknown>) => fs.writeFile(path.join(dir, 'generation.json'), JSON.stringify({...record, ...extra}, null, 2) + '\n');
  await saveRecord({status: 'request-started'});
  console.log(JSON.stringify({status: 'generating-one-image', id, model: cfg.model, directory: dir, automaticRetries: 0}));
  try {
    const result = await generateImage(cfg, {prompt, referenceInline, aspectRatio: job.aspectRatio, imageSize: '2K', responseFile: path.join(dir, 'provider-response.json')});
    // Save returned source before download; a failed download must not cause another paid generation.
    await fs.writeFile(path.join(dir, 'provider-result.json'), JSON.stringify(result), {mode: 0o600});
    let bytes: Buffer;
    if (result.inline) bytes = Buffer.from(result.inline.data, 'base64');
    else if (result.url) {
      const response = await fetch(result.url, {signal: AbortSignal.timeout(60_000)});
      if (!response.ok) throw new Error(`Image download HTTP ${response.status}; generated source saved locally.`);
      bytes = Buffer.from(await response.arrayBuffer());
    } else throw new Error('No image returned.');
    const format = detectFormat(bytes);
    const image = path.join(dir, `original.${format.ext}`);
    await fs.writeFile(image, bytes, {flag: 'wx'});
    await saveRecord({status: 'generated-awaiting-review', file: image, mimeType: format.mime, bytes: bytes.length, usage: result.usage});
    console.log(JSON.stringify({status: 'saved-draft', id, file: image, bytes: bytes.length}));
  } catch (error) {
    const message = error instanceof Error ? error.message.replaceAll(cfg.token, '[redacted]') : 'Request failed';
    await saveRecord({status: 'stopped-needs-review', error: message});
    throw new Error(message);
  }
}

function detectFormat(b: Buffer) {
  if (b.subarray(0, 8).equals(Buffer.from([137,80,78,71,13,10,26,10]))) return {ext: 'png', mime: 'image/png'};
  if (b[0] === 255 && b[1] === 216 && b[2] === 255) return {ext: 'jpg', mime: 'image/jpeg'};
  if (b.toString('ascii', 0, 4) === 'RIFF' && b.toString('ascii', 8, 12) === 'WEBP') return {ext: 'webp', mime: 'image/webp'};
  throw new Error('Returned bytes are not a supported PNG, JPEG or WebP image.');
}

main().catch(error => { console.error(error instanceof Error ? error.message : 'Sample generation failed'); process.exitCode = 1; });
