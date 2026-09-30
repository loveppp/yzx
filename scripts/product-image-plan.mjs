import {readFileSync, writeFileSync, existsSync, readdirSync} from 'node:fs';
import {createHash} from 'node:crypto';

const root = new URL('../', import.meta.url);
const read = file => JSON.parse(readFileSync(new URL(file, root), 'utf8'));
const digest = value => createHash('sha256').update(JSON.stringify(value)).digest('hex');
export const stylePrompt = `Create a realistic studio product illustration. Seamless neutral light-gray background (#f5f6f7), soft upper-left light, restrained lower-right contact shadows, neutral white balance. Mildly elevated three-quarter product view, no wide-angle distortion. Landscape 4:3 with at least 8% margin; complete heads, tips and openings visible. Fine machining texture, restrained metal highlights. Style reference controls only background and light, never geometry, count or material. No text, logo, watermark, dimensions or material-grade markings. Do not imply dimensional accuracy, certified performance or actual stock photography.`;
const statusZh = {'needs-verification':'待核实','prompt-complete':'提示词完成','generated':'已生成','published':'已接入'};
const canonical = value => value.trim().toLowerCase().replace(/\s+/g,' ');
const validUrl = value => {try {return new URL(value).protocol === 'https:';} catch {return false;}};

/** This gate checks authored evidence and consistency; it cannot certify a generated geometry. */
export function assessBrief(b) {
  const issues = [];
  const variants = b.structuralVariants ?? [];
  if (b.generationReady !== true) issues.push('未明确核定为可生成');
  if (['zh','en','vi'].some(locale=>!b.caption?.[locale]?.trim())) issues.push('缺少与款式对应的三语图片说明');
  if (!b.familyInvariantEn?.trim() || !b.materialClass?.trim()) issues.push('缺少类别共同特征或材料范围');
  if (!['series','matched-set'].includes(b.composition)) issues.push('必须使用不同款式组合');
  if (variants.length < 2) issues.push('不足两种可核实款式');
  if (b.variantCount !== variants.length) issues.push('款式数量与清单矛盾');
  if (!Number.isInteger(b.targetVariantCount) || b.targetVariantCount < 2) issues.push('缺少至少两款的构图目标');
  if (new Set(variants.map(v=>canonical(v.structuralKey ?? ''))).size !== variants.length) issues.push('重复结构：尺寸、颜色、角度不计为不同款式');
  if (new Set(variants.map(v=>canonical(v.geometryEn ?? ''))).size !== variants.length) issues.push('重复几何描述');
  let count = 0;
  for (const v of variants) {
    if (!v.id || !v.nameZh?.trim() || !v.geometryEn?.trim() || !v.differenceZh?.trim() || !v.structuralKey?.trim()) issues.push(`${v.id ?? '?'}：逐件定义不完整`);
    if (v.verificationStatus !== 'verified') issues.push(`${v.nameZh}：结构尚未核实`);
    if (!v.references?.length || v.references.some(r=>!validUrl(r.url) || !r.evidenceZh?.trim())) issues.push(`${v.nameZh}：缺少有效来源与证据说明`);
    if (!v.references?.some(r=>['geometry-reviewed','text-supported'].includes(r.verification))) issues.push(`${v.nameZh}：名称或候选链接不能证明结构`);
    if (b.composition === 'matched-set') {
      if (!v.members?.length || v.members.length < 2 || v.members.some(m=>!m.nameZh || !Number.isInteger(m.quantity) || m.quantity < 1)) issues.push(`${v.nameZh}：配套成员清单不完整`);
    } else if (v.members) issues.push(`${v.nameZh}：完整套装不能混用单件计数`);
    count += v.members?.reduce((n,m)=>n+m.quantity,0) ?? 1;
  }
  if (b.pieceCount !== count) issues.push('实物件数与逐件/配套清单矛盾');
  for (const gap of b.missingEvidenceZh ?? []) issues.push(gap);
  return {ready:issues.length === 0, issues:[...new Set(issues)], definedVariantCount:variants.length, definedPieceCount:count};
}

export function compilePrompt(b) {
  const assessment = assessBrief(b);
  const subjects = b.structuralVariants.map((v,i)=>`${i+1}. ${v.geometryEn}${v.members ? ' Complete set members: '+v.members.map(m=>m.nameZh+' x '+m.quantity).join(', ')+'.' : ''}`);
  return [
    ...(!assessment.ready ? ['DRAFT ONLY — DO NOT SEND TO A GENERATION API. Unverified or missing styles must never be invented.'] : []),
    `Family boundary: ${b.familyInvariantEn}`,
    `Material scope: ${b.materialClass}. ${b.finishEn}`,
    'Individual product styles:', ...subjects,
    `Distinct-style rule: ${b.structuralVariants.map(v=>v.differenceZh).join(' / ')}. Size, finish, pose and color changes do not count as different styles.`,
    `Defined styles: ${b.variantCount}; physical objects: ${b.pieceCount}. Each listed style occurs once.`,
    `Composition: ${b.layoutEn}`, stylePrompt, `Exclude: ${b.avoidEn}`,
  ].join('\n\n');
}

export function assertGenerationJob(job) {
  const assessment = assessBrief(job);
  if (!assessment.ready || job.generationReady !== true) throw new Error(`${job.id}: ${assessment.issues.join('；')}. No request sent.`);
  if (job.prompt !== compilePrompt(job)) throw new Error(`${job.id}: stale or manually overridden prompt. No request sent.`);
}

/** Read current source briefs, never trusting readiness or prompts in a previously generated plan. */
export function loadCurrentImagePlan(catalog = read('src/data/catalog.json')) {
  const source = read('data/catalog/image-briefs.json');
  const detailSource = read('data/catalog/detail-image-briefs.json');
  const content = read('src/data/catalog-details.json');
  const media = read('src/data/catalog-detail-media.json').assets;
  if (source.version !== 4 || detailSource.version !== 4) throw new Error('Image briefs must both use the reference-backed V4 schema.');
  const products = new Map(catalog.products.map(p=>[p.id,p]));
  if (source.products.length !== products.size || new Set(source.products.map(b=>b.id)).size !== products.size || source.products.some(b=>!products.has(b.id))) throw new Error('Main briefs must match every family exactly.');
  const makeJob = (b,kind) => {
    const p = products.get(b.productId ?? b.id);
    if (!p) throw new Error(`Unknown family ${b.id}`);
    const configurationIds = kind === 'main' ? content[p.id].variants.map(v=>v.id) : b.configurationIds;
    if (!configurationIds?.length || new Set(configurationIds).size !== configurationIds.length || configurationIds.some(id=>!content[p.id].variants.some(v=>v.id===id))) throw new Error(`Invalid configuration mapping ${b.id}`);
    const assessment = assessBrief(b);
    const name = kind === 'main' ? p.name : {zh:b.titleZh,en:content[p.id].variants.filter(v=>configurationIds.includes(v.id)).map(v=>v.name.en).join(' / '),vi:content[p.id].variants.filter(v=>configurationIds.includes(v.id)).map(v=>v.name.vi).join(' / ')};
    const prompt = compilePrompt(b);
    // Evidence changes invalidate old candidates even when their visible wording remains the same.
    const promptFingerprint = digest({version:4,brief:b,prompt});
    const visualSignature = digest({material:b.materialClass,finish:b.finishEn,boundary:b.familyInvariantEn,styles:b.structuralVariants,layout:b.layoutEn,stylePrompt});
    const currentImage = kind === 'main' ? p.image : media.find(a=>a.id===b.id)?.image ?? null;
    const job = {...b,productId:p.id,group:p.group,kind,name,configurationIds,prompt,promptFingerprint,visualSignature,generationReady:assessment.ready,blockingReasons:assessment.issues,promptStatus:assessment.ready?'prompt-complete':'needs-verification',status:assessment.ready?'prompt-complete':'needs-verification',currentImage,currentImageStatus:currentImage?'legacy-needs-replacement':'not-present',aspectRatio:'4:3',productPage:`/zh/products/${p.group}/${p.id}/`,publication:'direct-original-on-generation',candidatePathPattern:`output/product-images/candidates/${b.id}/<timestamp>/original.<format>`};
    const candidateRoot = new URL(`output/product-images/candidates/${b.id}/`,root);
    if (existsSync(candidateRoot)) for (const entry of readdirSync(candidateRoot,{withFileTypes:true})) {
      if (!entry.isDirectory()) continue;
      const manifest = new URL(`${entry.name}/generation.json`,candidateRoot);
      if (!existsSync(manifest)) continue;
      const record = JSON.parse(readFileSync(manifest,'utf8'));
      if (!assessment.ready || record.id !== b.id || record.promptFingerprint !== promptFingerprint || !record.file || !existsSync(record.file) || record.visualReview?.publicationDecision === 'do-not-publish') continue;
      if (record.status !== 'generated-awaiting-review') continue;
      if (job.status !== 'published') job.status = 'generated';
      if (record.publication === 'local-website' && record.publicPath === currentImage && existsSync(new URL('public'+currentImage,root))) {
        job.status = 'published'; job.currentImageStatus = 'published-current';
      }
    }
    return job;
  };
  const jobs = source.products.map(b=>makeJob(b,'main'));
  const detailJobs = detailSource.assets.map(b=>makeJob(b,'detail'));
  const all = [...jobs,...detailJobs];
  if (new Set(all.map(j=>j.id)).size !== all.length) throw new Error('Duplicate job ID');
  // Reuse is opt-in and requires identical visible content/material/context. It cannot cross steel/carbide contexts.
  for (const job of all.filter(j=>j.reuseOf)) {
    const original = all.find(j=>j.id===job.reuseOf);
    if (!original || original.id===job.id || original.reuseOf || original.visualSignature!==job.visualSignature) throw new Error(`Incompatible image reuse: ${job.id}`);
    if (original.status === 'published' && job.currentImage === original.currentImage) {
      job.status = 'published'; job.currentImageStatus = 'published-current';
    } else if (['generated','published'].includes(original.status)) job.status = 'generated';
  }
  const compositeJobs = [...source.categoryComposites.map(c=>({...c,id:`category-${c.group}`,name:catalog.groups.find(g=>g.id===c.group)?.name.zh+'分类入口'})),{...source.hero,id:'catalog-hero',name:'首页产品横幅'}].map(c=>{
    if (!c.sourceProductIds?.length || c.sourceProductIds.some(id=>!products.has(id))) throw new Error(`Invalid composite ${c.id}`);
    return {...c,method:'layout-existing-complete-assets',generationCalls:0,status:c.sourceProductIds.every(id=>jobs.find(j=>j.id===id).status==='published')?'ready-to-compose':'waiting-for-current-sources',layoutRule:'Arrange complete current-revision product tiles; no cutting out, recoloring or regenerating parts. Keep source captions and category links. Responsive layout, no cropped ends.'};
  });
  if (new Set(source.categoryComposites.map(c=>c.group)).size!==catalog.groups.length) throw new Error('Missing category composition');
  const textOnly = new Set(['straight-ejector-pins/skd61','straight-ejector-pins/nitrided','shoulder-ejector-pins/surface','guide-posts/nitrided','a-type-punches/custom','threaded-dowel-pins/units']);
  const configurationCoverage = catalog.products.flatMap(p=>content[p.id].variants.map(v=>{
    const extra = detailJobs.filter(j=>j.productId===p.id && j.configurationIds.includes(v.id));
    return {productId:p.id,configurationId:v.id,name:v.name,mode:textOnly.has(`${p.id}/${v.id}`)?'text-explanation':extra.length?'dedicated-detail':'family-main-reference',imageJobIds:textOnly.has(`${p.id}/${v.id}`)?[]:extra.length?extra.map(j=>j.id):[p.id],note:'Representative image only. Material, treatment and performance options remain text; no implicit depiction of every option.'};
  }));
  const totals = {productFamilies:jobs.length,configurationOptions:configurationCoverage.length,productMainImages:jobs.length,detailExtras:detailJobs.length,categoryComposites:compositeJobs.length-1,heroComposites:1,plannedCreativeAssets:all.length+compositeJobs.length,promptReady:all.filter(j=>j.generationReady).length,needsVerification:all.filter(j=>!j.generationReady).length,currentGenerated:all.filter(j=>['generated','published'].includes(j.status)).length,currentPublished:all.filter(j=>j.status==='published').length};
  return {version:4,reviewDate:'2026-09-30',status:'Prompt rewrite only; no generation calls authorized by a build or this document.',referencePolicy:source.referencePolicy,totals,style:{background:'#f5f6f7',aspectRatio:'4:3',prompt:stylePrompt},jobs,detailJobs,compositeJobs,configurationCoverage};
}

export function renderImagePlan(plan,{punchOnly=false}={}) {
  const all = [...plan.jobs,...plan.detailJobs].filter(j=>!punchOnly || j.group==='punch-components');
  const out = [`# ${punchOnly?'冲头冲针':'全站产品'}图片提示词清单 · V4`,'','> 本文件由参考款式清单生成。当前阶段只重编提示词，不调用生图接口。旧图在线不表示新版已生成或已通过结构核实。','',
    `本清单 ${all.length} 个任务：${all.filter(j=>j.generationReady).length} 个提示词完成，${all.filter(j=>!j.generationReady).length} 个待核实；新版已生成 ${all.filter(j=>['generated','published'].includes(j.status)).length} 个，已接入 ${all.filter(j=>j.status==='published').length} 个。`,
    '', '## 规则与分批顺序','',
    '- 每张展示同类不同结构款式；尺寸、颜色、材料牌号、摆放角度不计款式。普通主图目标3款，综合主图4款，详情2款；只核实2款时用2款。成套产品展示2种完整套装。',
    '- 提示词顺序：类别边界、逐件结构、辨识差异、排列、统一风格、禁止项。不拼入整页材料/应用/FAQ。',
    '- 原图直接使用，不反复校色、裁切、转码或自动重试。每次1张，每批2–3张。首批目标A冲、T冲；T冲未补齐证据前不强行凑齐批次。',
    '- 先冲头冲针，再顶出、导向、弹簧、辅助件、铜套耐磨件、定位销。分类入口和横幅复用对应新版完整图片，不额外调用生图接口。',
    '- 材质与表面处理用文字说明；同样的金属颜色不证明同一材料。页面不新增AI标签，内部保存版本。',
    '- 资料仅核实可见结构，不能证明尺寸、公差、库存或性能；现有旧图不提前改成新版款式说明。',
    '', '## 待核实任务与具体缺口','',
    ...all.filter(j=>!j.generationReady).map(j=>`- **${j.name.zh}**（${j.id}）：${(j.missingEvidenceZh.length?j.missingEvidenceZh:j.blockingReasons).join('；')}`),
    '', '## 逐图款式、出处与完整提示词',''];
  for (const j of all) {
    out.push(`### ${j.name.zh} · ${j.id}`,'',`状态：${statusZh[j.status]}；现有图片：${j.currentImageStatus==='legacy-needs-replacement'?'旧版保留、待替换':j.currentImageStatus==='published-current'?'新版已接入':'暂无'}。`,
      `目标 ${j.targetVariantCount} 款；已定义 ${j.variantCount} 款、${j.pieceCount} 件${j.composition==='matched-set'?'（按完整套装分组）':''}。${j.generationReady?'按已核实数量生成。':'当前仅为草稿，不可调用接口。'}`,
      `位置：${j.productPage}${j.kind==='detail'?'#configuration-'+j.configurationIds[0]:''}`,
      `类别共同特征：${j.familyInvariantEn}`,`材料范围：${j.materialClass}；相同几何但材料不同不得直接复用。`,'');
    for (const v of j.structuralVariants) {
      out.push(`- **${v.nameZh}**（${v.verificationStatus==='verified'?'结构已核实':'待核实'}）：${v.differenceZh}`);
      for (const r of v.references) out.push(`  - [参考页面](${r.url})${r.imageUrl?` · [参考图](${r.imageUrl})`:''}：${r.evidenceZh}`);
      if (v.members) out.push(`  - 配套件：${v.members.map(m=>`${m.nameZh}×${m.quantity}`).join('、')}。`);
    }
    if (j.blockingReasons.length) out.push('',`生成拦截：${j.blockingReasons.join('；')}`);
    out.push('','```text',j.prompt,'```','');
  }
  if (!punchOnly) {
    out.push('## 分类入口与首页横幅','');
    for (const c of plan.compositeJobs) out.push(`- **${c.name}**：${c.sourceProductIds.join('、')}。${c.status==='ready-to-compose'?'来源新版已接入，可排版':'等待来源新版图片'}；不额外生图。`);
    out.push('','## 配置图文对应','');
    for (const row of plan.configurationCoverage) out.push(`- ${row.productId} / ${row.name.zh}：${row.mode==='text-explanation'?'文字说明':row.imageJobIds.join('、')}。`);
  }
  return out.join('\n')+'\n';
}

export function prepareProductImagePlan(catalog) {
  const plan = loadCurrentImagePlan(catalog);
  writeFileSync(new URL('data/catalog/image-plan.json',root),JSON.stringify(plan,null,2)+'\n');
  writeFileSync(new URL('docs/product-image-production-plan.md',root),renderImagePlan(plan));
  writeFileSync(new URL('docs/punch-image-production-plan.md',root),renderImagePlan(plan,{punchOnly:true}));
  return plan;
}
