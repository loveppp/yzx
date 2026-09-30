#!/usr/bin/env node
/** Public CLI for the reference-backed catalog recipes. One request per invocation. */
import {execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {loadCurrentImagePlan} from '../product-image-plan.mjs';
const [command, ...args] = process.argv.slice(2);
const sample = fileURLToPath(new URL('./sample.ts', import.meta.url));
try {
  if (['清单','list'].includes(command)) {
    const plan = loadCurrentImagePlan();
    for (const job of [...plan.jobs,...plan.detailJobs]) console.log(`${job.id} · ${job.name.zh} · ${job.generationReady?'提示词完成':'待核实'}${job.reuseOf?' · 复用 '+job.reuseOf:''}`);
  } else if (['生成','generate'].includes(command)) {
    if (!args.includes('--id')) throw new Error('旧的 --种类/--材料 生图模板已停用。请指定清单中的 --id，不再按尺寸或材料凑款式。');
    execFileSync(process.execPath, ['--import','tsx',sample,...args], {stdio:'inherit'});
  } else if (['批量','batch','初始化','init-style'].includes(command)) {
    throw new Error('批量和旧风格初始化入口已停用。沿用已确认风格，每次通过 --id 执行一张，不自动重试。');
  } else {
    console.log('清单：npm run image-gen -- 清单\n离线检查：npm run image-gen -- 生成 --id a-type-punches --dry-run\n逐张生成：npm run image-gen -- 生成 --id <清单ID> --style-reference <风格参考路径> --publish\n待核实任务在读取密钥和网络请求前拦截。');
  }
} catch (error) {
  // Child process already printed the sanitized error; do not echo its command or environment.
  if (!(error && typeof error === 'object' && 'status' in error)) console.error(error instanceof Error ? error.message : 'Image command failed');
  process.exitCode = 1;
}
