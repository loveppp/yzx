import {readFileSync, writeFileSync} from 'node:fs';

const root = new URL('../', import.meta.url);
const modeNames = {single: '单件图', series: '同系列组合图', 'matched-set': '配套组件图'};
const stylePrompt = `Use case: product-mockup.
Create a realistic studio-style product illustration for a precision mold component catalog.
Use a seamless neutral off-white/light-gray background (#f5f6f7), a matte ground plane, soft diffused upper-left light and a restrained contact shadow to the lower right. Neutral white balance, no dramatic gradient or horizon line.
Camera: consistent mildly elevated three-quarter view, approximately 85 mm product-photography perspective, no wide-angle distortion. Keep every part sharp.
Framing: landscape 4:3. Center the complete product or set; occupy approximately 75–82% of the available frame, with at least 8% safe margin on every edge. Preserve all tips, heads and openings. No cropped parts.
Finish: credible fine machining and grinding texture, controlled metal highlights, clean new components without scratches, oil or rust. Preserve the distinct appearance of steel, bronze, graphite and painted springs.
This is a representative product illustration, not a dimensional drawing or proof of actual stock. Do not invent dimensions, tolerances, certifications, brands or material-grade markings.
If an approved image is supplied later, use it ONLY as a lighting, background and photographic-style reference. The product geometry and object count must follow this job, not the style-reference object.`;

export function prepareProductImagePlan(catalog) {
  const source = JSON.parse(readFileSync(new URL('data/catalog/image-briefs.json', root), 'utf8'));
  const productIds = new Set(catalog.products.map(p => p.id));
  const briefs = new Map(source.products.map(p => [p.id, p]));
  if (briefs.size !== source.products.length || briefs.size !== productIds.size || [...briefs.keys()].some(id => !productIds.has(id))) {
    throw new Error('Image brief IDs must match the current catalog exactly, without duplicates.');
  }
  const contentFields = ['name', 'summary', 'application', 'selection'];
  for (const p of catalog.products) {
    for (const field of contentFields) {
      for (const locale of ['zh', 'en', 'vi']) {
        if (!p[field]?.[locale]?.trim()) throw new Error(`Missing ${field}.${locale} for ${p.id}`);
      }
    }
    if (!p.materials?.length || !p.variants?.length || p.variants.some(v => ['zh', 'en', 'vi'].some(l => !v[l]?.trim()))) {
      throw new Error(`Incomplete material/configuration content for ${p.id}`);
    }
  }
  const jobs = catalog.products.map(p => {
    const b = briefs.get(p.id);
    if (!modeNames[b.composition] || !Number.isInteger(b.pieceCount) || b.pieceCount < 1 || !b.descriptionZh || !b.subjectEn || !b.avoidEn || !b.reviewZh) {
      throw new Error(`Incomplete visual brief for ${p.id}`);
    }
    const layout = b.composition === 'single'
      ? 'One complete component only. Use a diagonal resting pose for long slender parts; expose both working end and mounting end. Compact cylindrical parts may stand or rest with the bore facing the viewer.'
      : b.composition === 'matched-set'
        ? 'A separated matched set. Keep mating interfaces visible and visual scales consistent. Do not fuse or assemble the pieces; no exploded-view arrows.'
        : 'A small same-family collection in a shallow staggered arrangement. Space silhouettes clearly; no intersections or occlusion of working ends. Long parts may rest in a shallow fan; keep all axes straight. Do not introduce other families or extra duplicates.';
    const textRule = p.id === 'mold-date-stamps'
      ? 'Only the specified functional month numerals and central arrow may appear on the part. No other text, logo, watermark or webpage UI. If legible correct engraving cannot be achieved, flag for correction rather than publishing gibberish.'
      : 'No text, labels, dimensions, arrows, logos, watermarks or webpage UI anywhere in the image.';
    const prompt = `${stylePrompt}\n\nAsset type: shared product listing and product-detail main image.\nProduct family: ${p.name.en}.\nCatalog function (context only): ${p.summary.en}\nSelected visible subject: ${b.subjectEn}\nExact physical object count: ${b.pieceCount}.\nComposition: ${layout}\nText policy: ${textRule}\nAvoid: ${b.avoidEn} Also avoid fused geometry, physically impossible intersections, duplicate extra parts and floating shadows.\nDo not attempt to depict every available catalog material or variant; depict only the selected subject above.`;
    return {
      id: p.id, group: p.group, name: p.name, method: 'generate-one-image',
      composition: b.composition, pieceCount: b.pieceCount,
      descriptionZh: b.descriptionZh, reviewZh: b.reviewZh,
      catalogDescription: p.summary, configurations: p.variants, geometryToConfirm: p.selection,
      promptStatus: 'authored-see-candidate-manifests-for-generation-status', prompt, aspectRatio: '4:3',
      output: `/images/products/catalog/${p.id}.webp`,
      candidatePathPattern: `output/product-images/candidates/${p.id}/vNN.<actual-format>`,
      currentIllustration: p.illustration, productPage: `/zh/products/${p.group}/${p.id}/`,
      publish: 'Manual review only. Keep AI-illustration disclosure outside the bitmap. Set catalog.json image only after approval; dimensions follow an agreed drawing.',
    };
  });
  const compositeJobs = source.categoryComposites.map(c => {
    const group = catalog.groups.find(g => g.id === c.group);
    if (!group) throw new Error(`Unknown composite group ${c.group}`);
    return {
      id: `category-${c.group}`, group: c.group, name: `${group.name.zh}分类组合图`,
      method: 'composite-approved-assets', ...c, aspectRatio: '4:3',
      output: `/images/products/categories/${c.group}.webp`,
      destination: 'Planned: homepage category entry and category introduction. Requires category-image rendering support before publishing.',
    };
  });
  compositeJobs.push({
    id: 'catalog-hero', name: '全系列产品横幅', method: 'composite-approved-assets', ...source.hero,
    aspectRatio: '16:9', mobileAspectRatio: '4:3',
    output: '/images/products/catalog-hero.webp', mobileOutput: '/images/products/catalog-hero-mobile.webp',
    destination: 'Planned: homepage product-range feature. Desktop and mobile are two exports of the same composition, not additional image-generation jobs.',
  });
  if (new Set(source.categoryComposites.map(c => c.group)).size !== catalog.groups.length) throw new Error('Every category needs one composite brief.');
  for (const c of compositeJobs) {
    if (c.sourceProductIds.some(id => !productIds.has(id))) throw new Error(`Invalid composite dependency ${c.id}`);
    c.layoutRule = 'Extract only approved complete subject silhouettes. Preserve their geometry; harmonize background and contact shadows. Rescale by visual hierarchy, not as a calibrated size comparison. Do not synthesize replacement geometry. If clean extraction is impossible, use an orderly layout of approved image tiles.';
    c.status = 'brief-authored-awaiting-approved-source-images';
  }
  const countByMode = Object.fromEntries(Object.keys(modeNames).map(k => [k, jobs.filter(j => j.composition === k).length]));
  const plan = {
    version: 2,
    status: 'Planning only; prompts authored, no images generated by this script. Approval and generation history must be stored separately, not in this regenerated file.',
    source: 'src/data/catalog.json + data/catalog/image-briefs.json',
    referencePolicy: source.referencePolicy,
    totals: {productFamilies: jobs.length, productMainImages: jobs.length, categoryComposites: compositeJobs.length - 1, heroComposites: 1, plannedCreativeAssets: jobs.length + compositeJobs.length, productCompositionCounts: countByMode, detailExtras: 0},
    style: {aspectRatio: '4:3', masterSize: '1600 x 1200 export target; request a supported provider size before resizing', background: 'neutral off-white / light-gray #f5f6f7', prompt: stylePrompt, consistency: 'Style lock plus an approved visual reference and per-image review. Prompt equality alone does not guarantee consistency.'},
    execution: {provider: 'Terrakinc (user selected)', apiReady: true, singleImageEntry: 'scripts/image-gen/sample.ts --id <product-id>', reason: 'Single-image catalog draft runner is available; legacy punch batch CLI must not be used for this plan.', maxImagesPerRequest: 1, maxConcurrentRequests: 1, automaticGenerationRetries: 0, automaticPublishing: false, samplesOneAtATime: source.sampleOrder, samplesIncludedIn36: true, subsequentReviewBatchSize: '2–3 images requested sequentially; stop for review between batches', modelAndPrice: 'Confirm provider model availability and current price before generating. A non-empty local token is not proof of API validity.', costNote: '36 accepted product images is a content target, not a cap on billed attempts. 8 composites use approved assets without new image generation. Revisions require a separately chosen retry.'},
    publishing: {mainImagesSupportedNow: true, categoryAndHeroIntegration: 'planned-not-implemented', aiDisclosureRequired: true, mobile: 'Use object-contain, full silhouettes and generous safe margins. Check the actual two-column mobile catalog plus full-width detail page; reflow the hero, do not crop tips.', acceptance: ['Product-family identity and object count', 'Straight axes, plausible shoulders, open bores and distinct parts', 'Consistent background, light direction, contrast and framing', 'No fabricated grade, stock or dimensional claim', 'Date-stamp numerals checked manually', 'Desktop and mobile preview approved']},
    jobs, compositeJobs,
  };
  writeFileSync(new URL('data/catalog/image-plan.json', root), JSON.stringify(plan, null, 2) + '\n');
  writeFileSync(new URL('docs/product-image-production-plan.md', root), renderPlan(catalog, plan));
  return plan;
}

function renderPlan(catalog, plan) {
  const counts = plan.totals.productCompositionCounts;
  const out = [
    '# 产品图片制作计划',
    '',
    '> 由 scripts/prepare-catalog.mjs 从产品目录及 image-briefs.json 生成。修改图片策划请编辑 image-briefs.json；不要直接修改此文件。此计划不调用 API。',
    '',
    '## 总量与使用位置',
    '',
    `首期 44 张成品构图：36 张产品主图（${counts.single} 张单件、${counts.series} 张同系列组合、${counts['matched-set']} 张配套组件），7 张分类组合图，1 张全系列横幅。`,
    '36 张主图对应 36 个产品系列；一张图中的零件数量不等于图片数量。列表与详情复用，三种语言复用，不按材质牌号重复出图。',
    '7 张分类图与 1 张横幅用审核通过的主图元素合成，计划不额外调用生图 API。横幅桌面与手机各导出一份，属于同一设计的适配版本，因此至少有 45 个交付文件，但只有 44 个成品构图。WebP/缩略图等导出也不算新的生成任务。',
    '第一期额外详情图为 0 张。网站目前每款只有一个主图位；暂不把每款扩成三张，也不生成钢材堆料、工厂、库存或认证图片。确有解释需求的结构特写可在主图完成后另列第二期，独立确定数量。',
    '',
    '## 内容完成状态',
    '',
    '36 个产品的中、英、越名称、简介、应用、选型信息和配置选项已检查为非空，材质列表齐全。它们是产品系列介绍，不是已验证的具体型号规格。',
    '36 张主图均已写好中文画面说明、精确零件数量、单件/组合选择、英文完整提示词与重点排错项；8 张合成图均已有来源清单和排版说明。实际出图与审核状态单独记录在 output/product-images/candidates 下，不能仅凭提示词完成状态判断图片通过。',
    '用户提供的三张网站截图只作为构图启发，不再要求用户补充实拍。依据现有商品说明生成代表性产品示意；不宣称复现特定尺寸或真实库存。A 型冲头、气顶阀、压片模等结构未由工程图锁定，采用保守的代表款外观。',
    '',
    '## 统一风格与验收',
    '',
    '浅灰白无缝背景、左上柔光、右下轻接触阴影、中性白平衡、轻俯视斜侧视角。产品图和分类图为 4:3，主体占画面约 75–82%，四周至少 8% 安全留白。单件长杆可斜放，组合图错落排列且不遮挡关键结构。',
    '统一的是光线、背景、质感和留白，不是把所有产品摆成同一姿势。钢件保持银灰，铜件保持暖铜色，石墨保留深灰嵌块，弹簧按选定系列展示涂装；不能从外观判定钢材牌号。',
    '先批准第一张风格样图，再对照后续图。相同提示词不能保证完全一致；通过背景处理、色调校正和人工验收统一。每次只请求 1 张，失败或超时即停，不自动重复付费请求。',
    '验收先看结构：轴线、台阶、孔洞、壁厚、配合关系和数量，再看美观。日期章的功能数字需逐字核对，不能使用乱码。手机两列卡片仍需看得清主要结构；横幅在手机上重新排版，不强行裁掉长杆。',
    '上线时保留“AI 产品示意，具体结构以确认图纸为准”的页面说明；不得以实际产品摄影或尺寸证明的名义展示。',
    '',
    '## 分步执行',
    '',
    '0. 密钥只保留在本地 .env；单图草稿入口 scripts/image-gen/sample.ts 已支持当前目录、4:3、版本化草稿、实际文件格式识别和零自动重试。费用以供应商控制台为准；不自动上架，不上传用户截图。',
    '1. 仅生成台阶与多级冲头 1 张，画面 3 支，确定钢件风格和组合方式；通过后才继续。',
    '2. 扁顶针 1 张（单件）→ 石墨铜套 1 张（2 件）→ 矩形模具弹簧 1 张（5 件），每张单独生成、单独确认。四张样图计入 36 张，不额外增加数量。',
    '3. 按冲头 → 顶出 → 导向 → 弹簧 → 模具辅助件 → 铜套耐磨件 → 定位销顺序补齐其余 32 张，每个审核批次最多 2–3 张，实际请求串行执行。复杂组件放在相应类别的最后。',
    '4. 每类主图通过后合成该类分类图；最后合成全系列横幅，并导出手机构图。提取边缘不干净时采用规整的产品图拼版，不让 AI 重新虚构已确认的零件。',
    '5. 仅把通过审核的成品接入网站。产品主图已有 image 字段；分类图和全系列横幅需要补对应显示位置，当前尚未接入。电脑与手机检查通过后再继续下一批。',
    '',
    '36 是成功交付的产品主图目标，不是费用承诺或自动执行次数。重做次数不预先计入；不满意时只处理该图。',
    '',
    '## 按类别的完整清单',
    '',
  ];
  for (const group of catalog.groups) {
    const jobs = plan.jobs.filter(j => j.group === group.id);
    const composite = plan.compositeJobs.find(c => c.group === group.id);
    out.push(`### ${group.name.zh}：${jobs.length} 张主图 + 1 张分类图 = ${jobs.length + 1} 张`, '');
    for (const job of jobs) {
      out.push(`- **${job.name.zh}**：1 张${modeNames[job.composition]}，画面 ${job.pieceCount} 件。${job.descriptionZh}`);
    }
    out.push('', `分类图：${composite.descriptionZh}`, '');
  }
  out.push('另加全系列横幅 1 张：' + plan.compositeJobs.at(-1).descriptionZh, '', '## 每张主图的完整提示词', '');
  for (const job of plan.jobs) {
    out.push(`### ${job.name.zh} · ${job.id}`, '', `网站产品简介：${job.catalogDescription.zh}`, '', `画面：${job.descriptionZh}`, '', `重点检查：${job.reviewZh}`, '', `预定地址：\`${job.output}\``, '', '```text', job.prompt, '```', '');
  }
  return out.join('\n') + '\n';
}
