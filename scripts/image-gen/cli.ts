#!/usr/bin/env node
/**
 * 冲针产品图生成（Terrakinc API）
 * 中文命令：npm run image-gen -- 帮助
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  type BatchFile,
  categoryLabelForSlug,
  categoryNameZh,
  defaultOutFile,
  printCatalogZh,
  resolveCategorySlug,
  resolveMaterialCode,
  type BatchJob,
} from './catalog.js';
import {
  MANIFEST_PATH,
  STYLE_REF_LOCAL,
  STYLE_REF_URI_PATH,
  readStyleRefUri,
  upsertEntry,
  writeStyleRefUri,
} from './manifest.js';
import { buildPunchVariantPrompt, buildStyleInitPrompt } from './prompts.js';
import {
  downloadToFile,
  generateImage,
  loadConfig,
  uploadLocalImage,
  writeInlineToFile,
} from './terrakinc-client.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../..');

async function loadDotEnv(): Promise<void> {
  const envPath = path.join(ROOT, '.env');
  try {
    const raw = await fs.readFile(envPath, 'utf8');
    for (const line of raw.split('\n')) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const eq = trimmed.indexOf('=');
      if (eq <= 0) continue;
      const key = trimmed.slice(0, eq).trim();
      let val = trimmed.slice(eq + 1).trim();
      if (
        (val.startsWith('"') && val.endsWith('"')) ||
        (val.startsWith("'") && val.endsWith("'"))
      ) {
        val = val.slice(1, -1);
      }
      if (process.env[key] === undefined) process.env[key] = val;
    }
  } catch {
    /* .env 首次可不存在 */
  }
}

function parseArgs(argv: string[]) {
  const args = [...argv];
  const positional: string[] = [];
  const flags: Record<string, string | boolean> = {};
  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a.startsWith('--')) {
      const key = a.slice(2);
      const next = args[i + 1];
      if (next && !next.startsWith('--')) {
        flags[key] = next;
        i++;
      } else {
        flags[key] = true;
      }
    } else {
      positional.push(a);
    }
  }
  return { positional, flags };
}

function normalizeCmd(raw: string | undefined): string | undefined {
  if (!raw) return raw;
  const map: Record<string, string> = {
    帮助: 'help',
    help: 'help',
    清单: 'list',
    list: 'list',
    初始化: 'init-style',
    'init-style': 'init-style',
    生成: 'generate',
    generate: 'generate',
    批量: 'batch',
    batch: 'batch',
  };
  return map[raw] ?? raw;
}

function flagStr(flags: Record<string, string | boolean>, ...keys: string[]): string | undefined {
  for (const k of keys) {
    const v = flags[k];
    if (typeof v === 'string' && v) return v;
  }
  return undefined;
}

async function saveGenerationResult(
  result: Awaited<ReturnType<typeof generateImage>>,
  destPath: string,
): Promise<string | undefined> {
  const abs = path.join(ROOT, destPath);
  if (result.url) {
    await downloadToFile(result.url, abs);
    return result.url;
  }
  if (result.inline) {
    await writeInlineToFile(result.inline, abs);
    return undefined;
  }
  throw new Error('API 未返回图片');
}

async function cmdInitStyle(dryRun: boolean): Promise<void> {
  const prompt = buildStyleInitPrompt();
  if (dryRun) {
    console.log('[试跑] 将调用 API 生成「风格参考图」，不会扣费请忽略此行若未配 token');
    console.log('（英文 prompt 由程序自动生成，无需阅读）');
    return;
  }

  const cfg = loadConfig();
  console.log(`正在生成统一背景参考图… 模型：${cfg.model}`);
  const result = await generateImage(cfg, {
    prompt,
    aspectRatio: '1:1',
    imageSize: '2K',
    outputMode: 'url',
  });

  const localRel = STYLE_REF_LOCAL;
  await saveGenerationResult(result, localRel);
  console.log(`✓ 已保存：${localRel}`);

  console.log('正在上传参考图供后续批量使用…');
  const publicUrl = await uploadLocalImage(cfg, path.join(ROOT, localRel));
  await writeStyleRefUri(publicUrl);
  console.log(`✓ 参考图地址已缓存：${STYLE_REF_URI_PATH}`);

  await upsertEntry({
    id: 'style-reference',
    categorySlug: '_style',
    material: '_',
    prompt,
    model: cfg.model,
    styleRefUri: publicUrl,
    sourceUrl: result.url,
    localPath: localRel,
    createdAt: new Date().toISOString(),
    status: 'ok',
  });
  console.log('\n下一步：npm run image-gen -- 生成 --种类 台阶冲针 --材料 SKD61');
  console.log('或：npm run image-gen -- 批量 --任务单 data/image-gen/batches/冲针-示例.json');
}

function normalizeJob(job: BatchJob): BatchJob {
  const categorySlug = resolveCategorySlug(job.categorySlug);
  const material = resolveMaterialCode(job.material);
  return { ...job, categorySlug, material };
}

async function runOneJob(job: BatchJob, styleRefUri: string | undefined, dryRun: boolean): Promise<void> {
  const normalized = normalizeJob(job);
  const categoryLabel = categoryLabelForSlug(normalized.categorySlug);
  const prompt = buildPunchVariantPrompt({
    categoryLabel,
    material: normalized.material,
    shapeNotes: normalized.shapeNotes,
  });
  const localPath = defaultOutFile(normalized);
  const nameZh = categoryNameZh(normalized.categorySlug);

  if (dryRun) {
    console.log(`[试跑] ${normalized.id} | ${nameZh} | ${normalized.material} → ${localPath}`);
    return;
  }

  const cfg = loadConfig();
  await upsertEntry({
    id: normalized.id,
    categorySlug: normalized.categorySlug,
    material: normalized.material,
    shapeNotes: normalized.shapeNotes,
    prompt,
    model: cfg.model,
    styleRefUri,
    localPath,
    createdAt: new Date().toISOString(),
    status: 'pending',
  });

  try {
    console.log(`生成中：${nameZh}（${normalized.material}）…`);
    const result = await generateImage(cfg, {
      prompt,
      referenceFileUri: styleRefUri,
      referenceMimeType: 'image/jpeg',
      aspectRatio: '1:1',
      imageSize: '2K',
      outputMode: 'url',
    });
    const sourceUrl = await saveGenerationResult(result, localPath);
    await upsertEntry({
      id: normalized.id,
      categorySlug: normalized.categorySlug,
      material: normalized.material,
      shapeNotes: normalized.shapeNotes,
      prompt,
      model: cfg.model,
      styleRefUri,
      sourceUrl,
      localPath,
      createdAt: new Date().toISOString(),
      status: 'ok',
    });
    console.log(`✓ 完成 → ${localPath}`);
  } catch (e) {
    const message = e instanceof Error ? e.message : String(e);
    await upsertEntry({
      id: normalized.id,
      categorySlug: normalized.categorySlug,
      material: normalized.material,
      shapeNotes: normalized.shapeNotes,
      prompt,
      model: cfg.model,
      styleRefUri,
      localPath,
      createdAt: new Date().toISOString(),
      status: 'failed',
      error: message,
    });
    console.error(`✗ 失败 ${normalized.id}：${message}`);
    throw e;
  }
}

async function cmdGenerate(flags: Record<string, string | boolean>, dryRun: boolean): Promise<void> {
  const categoryRaw = flagStr(flags, 'category', '种类', 'cat');
  const materialRaw = flagStr(flags, 'material', '材料', 'mat');
  if (!categoryRaw || !materialRaw) {
    throw new Error('请指定：--种类 台阶冲针 --材料 SKD61\n运行 npm run image-gen -- 清单  查看可选值');
  }
  const id =
    flagStr(flags, 'id') ??
    `${resolveCategorySlug(categoryRaw)}-${resolveMaterialCode(materialRaw)}`.replace(/\s+/g, '-');
  const job: BatchJob = {
    id,
    categorySlug: categoryRaw,
    material: materialRaw,
    shapeNotes: flagStr(flags, 'shape', '形状'),
    outFile: flagStr(flags, 'out', '输出'),
  };
  const styleRefUri = await readStyleRefUri();
  if (!styleRefUri && !dryRun) {
    throw new Error('还没做「初始化」。请先运行：npm run image-gen -- 初始化');
  }
  await runOneJob(job, styleRefUri, dryRun);
}

async function cmdBatch(fileRel: string, dryRun: boolean): Promise<void> {
  const abs = path.join(ROOT, fileRel);
  const raw = await fs.readFile(abs, 'utf8');
  const batch = JSON.parse(raw) as BatchFile & { _说明?: string };
  if (!Array.isArray(batch.jobs) || batch.jobs.length === 0) {
    throw new Error('任务单里需要有 jobs 数组，可参考 data/image-gen/batches/冲针-示例.json');
  }
  const styleRefUri = await readStyleRefUri();
  if (!styleRefUri && !dryRun) {
    throw new Error('请先运行：npm run image-gen -- 初始化');
  }
  console.log(`共 ${batch.jobs.length} 个任务…`);
  let failed = 0;
  for (const job of batch.jobs) {
    try {
      await runOneJob(job, styleRefUri, dryRun);
    } catch {
      failed++;
    }
  }
  if (failed > 0) process.exitCode = 1;
  else if (!dryRun) {
    console.log(`\n全部完成。记录见 ${MANIFEST_PATH}`);
    console.log('网站要用图：打开对应产品 .md，把 heroImage 改成上面的路径（不会自动改）。');
  }
}

function printHelp(): void {
  console.log(`
冲针产品图生成 — 用法（中文即可，不用写英文 prompt）

━━ 第一次（只需一次）━━
  1. cp .env.example .env
  2. 在 .env 里填 TERRAKINC_API_TOKEN=sk-你的密钥
  3. npm run image-gen -- 初始化        ← 生成统一灰色背景「样板图」

━━ 出一张图 ━━
  npm run image-gen -- 生成 --种类 台阶冲针 --材料 SKD61

━━ 按任务单批量 ━━
  npm run image-gen -- 批量 --任务单 data/image-gen/batches/冲针-示例.json

━━ 其它 ━━
  npm run image-gen -- 清单              ← 所有种类、材料中文对照
  npm run image-gen -- 生成 ... --试跑    ← 只打印计划，不调 API

英文提示词由程序自动生成（给 AI 看图模型用），你不用管。
生成图在 public/images/products/generated/punches/ 下；日志在 ${MANIFEST_PATH}
详细说明：docs/image-gen-terrakinc.md
`);
}

async function main(): Promise<void> {
  await loadDotEnv();
  const { positional, flags } = parseArgs(process.argv.slice(2));
  const dryRun = flags['dry-run'] === true || flags['试跑'] === true;

  const cmd = normalizeCmd(positional[0]);

  if (flags.help === true || cmd === 'help' || positional[0] === '?') {
    printHelp();
    return;
  }

  if (!cmd) {
    printHelp();
    process.exitCode = 1;
    return;
  }

  switch (cmd) {
    case 'list':
      printCatalogZh();
      console.log('示例：npm run image-gen -- 生成 --种类 台阶冲针 --材料 SKD61');
      console.log('更多说明：npm run image-gen -- 帮助\n');
      break;
    case 'init-style':
      await cmdInitStyle(dryRun);
      break;
    case 'generate':
      await cmdGenerate(flags, dryRun);
      break;
    case 'batch': {
      const file = flagStr(flags, 'file', '任务单', 'f');
      if (!file) throw new Error('请指定任务单：--任务单 data/image-gen/batches/冲针-示例.json');
      await cmdBatch(file, dryRun);
      break;
    }
    default:
      console.error(`未知命令：${positional[0]}。输入：npm run image-gen -- 帮助`);
      process.exitCode = 1;
  }
}

main().catch((e) => {
  console.error(e instanceof Error ? e.message : e);
  process.exit(1);
});
