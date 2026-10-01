/**
 * Generate homepage category strip images via Terrakinc; set group coverImage to published path.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { loadConfig } from './terrakinc-client.js';
import { loadCurrentImagePlan } from '../product-image-plan.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const PAUSE_MS = 100_000;

/** Representative catalog job per homepage group (punch uses uploaded hero). */
const JOBS: Array<{ group: string; id: string; skip?: boolean }> = [
  { group: 'punch-components', id: 'carbide-punches', skip: true },
  { group: 'ejector-components', id: 'shoulder-ejector-pins' },
  { group: 'guide-components', id: 'guide-posts' },
  { group: 'die-springs', id: 'rectangular-die-springs' },
  { group: 'plastic-mold-components', id: 'sprue-bushings' },
  { group: 'bronze-components', id: 'graphite-bronze-bushings' },
  { group: 'dowel-pins', id: 'precision-dowel-pins' },
];

async function loadEnvFile() {
  const env = await fs.readFile(path.join(root, '.env'), 'utf8');
  for (const line of env.split('\n')) {
    const m = line.trim().match(/^(TERRAKINC_[A-Z_]+)=(.*)$/);
    if (m && process.env[m[1]] === undefined) {
      process.env[m[1]] = m[2].trim().replace(/^(['"])(.*)\1$/, '$2');
    }
  }
}

async function listImageModels(cfg: ReturnType<typeof loadConfig>) {
  const res = await fetch(`${cfg.baseUrl}/v1/models`, {
    headers: { Authorization: `Bearer ${cfg.token}` },
    signal: AbortSignal.timeout(30_000),
  });
  if (!res.ok) return [];
  const body = (await res.json()) as { data?: Array<{ id: string }> };
  return (body.data ?? []).map((m) => m.id).filter((id) => /image/i.test(id));
}

function modelOrder(preferred: string, available: string[]) {
  return [
    ...new Set([
      'gemini-3.1-flash-image',
      'gemini-3.1-flash-lite-image',
      preferred,
      'gemini-3.0-pro-image',
      'gemini-3-pro-image-preview',
      ...available,
    ]),
  ];
}

async function sleep(ms: number) {
  await new Promise((r) => setTimeout(r, ms));
}

function runGenerate(id: string, model: string) {
  execFileSync(
    process.execPath,
    ['--import', 'tsx', path.join(root, 'scripts/image-gen/sample.ts'), '--id', id, '--model', model, '--publish'],
    { stdio: 'inherit', env: { ...process.env, TERRAKINC_IMAGE_MODEL: model } },
  );
}

async function setGroupCover(group: string, imagePath: string) {
  const catalogPath = path.join(root, 'src/data/catalog.json');
  const catalog = JSON.parse(await fs.readFile(catalogPath, 'utf8'));
  const g = catalog.groups.find((x: { id: string }) => x.id === group);
  if (!g) throw new Error(`Unknown group ${group}`);
  g.coverImage = imagePath;
  await fs.writeFile(catalogPath, JSON.stringify(catalog, null, 2) + '\n');
}

async function main() {
  await loadEnvFile();
  const cfg = loadConfig();
  const models = modelOrder(cfg.model, await listImageModels(cfg));
  console.log(JSON.stringify({ models: models.slice(0, 6) }));

  for (let i = 0; i < JOBS.length; i++) {
    const job = JOBS[i];
    if (job.skip) {
      console.log(JSON.stringify({ skip: job.group, reason: 'custom hero already set' }));
      continue;
    }
    if (i > 0) {
      console.log(JSON.stringify({ pauseMs: PAUSE_MS }));
      await sleep(PAUSE_MS);
    }
    const plan = loadCurrentImagePlan();
    const entry = plan.jobs.find((j) => j.id === job.id);
    if (!entry?.generationReady) {
      throw new Error(`${job.id} not generationReady: ${entry?.blockingReasons?.join('; ')}`);
    }
    let lastErr = '';
    for (const model of models) {
      try {
        console.log(JSON.stringify({ generate: job.id, model, group: job.group }));
        runGenerate(job.id, model);
        const catalog = JSON.parse(await fs.readFile(path.join(root, 'src/data/catalog.json'), 'utf8'));
        const product = catalog.products.find((p: { id: string }) => p.id === job.id);
        if (!product?.image) throw new Error('Publish did not set product image');
        await setGroupCover(job.group, product.image);
        console.log(JSON.stringify({ ok: job.group, coverImage: product.image }));
        lastErr = '';
        break;
      } catch (e) {
        lastErr = e instanceof Error ? e.message : String(e);
        console.error(JSON.stringify({ failed: job.id, model, error: lastErr.slice(0, 200) }));
      }
    }
    if (lastErr) throw new Error(`${job.id}: ${lastErr}`);
  }
  execFileSync(process.execPath, [path.join(root, 'scripts/prepare-catalog.mjs')], { stdio: 'inherit' });
}

main().catch((e) => {
  console.error(e instanceof Error ? e.message : e);
  process.exitCode = 1;
});
