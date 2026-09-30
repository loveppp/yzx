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
  const read=file=>JSON.parse(readFileSync(new URL(file,root),'utf8'));
  const source=read('data/catalog/image-briefs.json');
  const detailSource=read('data/catalog/detail-image-briefs.json');
  const content=read('src/data/catalog-details.json');
  const publishedDetails=read('src/data/catalog-detail-media.json').assets;
  const briefs=new Map(source.products.map(b=>[b.id,b]));
  const products=new Map(catalog.products.map(p=>[p.id,p]));
  if(briefs.size!==products.size||source.products.length!==products.size||[...briefs.keys()].some(id=>!products.has(id)))throw new Error('Main briefs must match every family exactly.');
  const makeJob=(p,b,kind)=>{
    if(!modeNames[b.composition]||!Number.isInteger(b.pieceCount)||b.pieceCount<1||!b.subjectEn||!b.reviewZh||!b.avoidEn)throw new Error(`Incomplete brief: ${b.id}`);
    const configurations=kind==='main'?content[p.id].variants:content[p.id].variants.filter(v=>b.configurationIds.includes(v.id));
    if(kind==='detail'&&configurations.length!==b.configurationIds.length)throw new Error(`Invalid configuration mapping: ${b.id}`);
    const name=kind==='main'?p.name:{zh:b.titleZh,en:configurations.map(v=>v.name.en).join(' / '),vi:configurations.map(v=>v.name.vi).join(' / ')};
    const layout=b.composition==='single'?'One complete part only, with a diagonal pose for long components and visible working and mounting ends.':b.composition==='matched-set'?'A separated matched set, consistent mating proportions, no fusion or exploded-view arrows.':'A separated same-family collection, shallow staggered layout, no overlap or hidden working ends. Long axes stay straight.';
    const textRule=p.id==='mold-date-stamps'?'Only the specified functional month numerals and center arrow may appear. Flag incorrect engraving rather than publishing it. No other text.':'No text, labels, dimensions, arrows, logos, grade numbers or watermarks.';
    const prompt=`${stylePrompt}\n\nAsset role: ${kind==='main'?'shared family listing and main product image':'family detail image, linked to the specified configurations'}.\nProduct family: ${p.name.en}.\nProduct function: ${p.summary.en}\nConfiguration context: ${configurations.map(v=>v.name.en+': '+v.description.en).join(' ')}\nSelected visible subject (takes priority over context): ${b.subjectEn}\nExact physical object count: ${b.pieceCount}.\nComposition: ${layout}\nText policy: ${textRule}\nAvoid: ${b.avoidEn} Also avoid fused geometry, cropped tips, floating shadows or extra objects.\nShow only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.`;
    return {id:b.id,productId:p.id,group:p.group,kind,name,method:b.revisionAction==='reuse-approved'?'reuse-existing-image':'generate-one-image',composition:b.composition,pieceCount:b.pieceCount,descriptionZh:b.descriptionZh,reviewZh:b.reviewZh,configurationIds:configurations.map(v=>v.id),catalogDescription:p.summary,configurations,geometryToConfirm:p.selection,generationReady:b.generationReady!==false,structuralVariants:b.structuralVariants??[],promptStatus:b.generationReady===false?'needs-structural-variant-list':'authored-not-proof-of-generation',prompt,aspectRatio:'4:3',output:`/images/products/${kind==='main'?'catalog':'details'}/${b.id}-<timestamp>.<original-format>`,productPage:`/zh/products/${p.group}/${p.id}/`,currentImage:kind==='main'?p.image:(publishedDetails.find(asset=>asset.id===b.id)?.image??null),revisionAction:kind==='main'?b.revisionAction:(b.revisionAction??'new-detail'),publication:'direct-original-on-generation',candidatePathPattern:`output/product-images/candidates/${b.id}/<timestamp>/original.<format>`};
  };
  const jobs=catalog.products.map(p=>makeJob(p,briefs.get(p.id),'main'));
  const detailJobs=detailSource.assets.map(b=>{const p=products.get(b.productId);if(!p)throw new Error(`Unknown detail family ${b.productId}`);return makeJob(p,b,'detail');});
  const compositeJobs=source.categoryComposites.map(c=>({id:`category-${c.group}`,name:catalog.groups.find(g=>g.id===c.group)?.name.zh+'分类组合图',...c,method:'composite-approved-assets',aspectRatio:'4:3',output:`/images/products/categories/${c.group}.webp`}));
  compositeJobs.push({id:'catalog-hero',name:'冲头主业务与配套系列横幅',...source.hero,method:'composite-approved-assets',aspectRatio:'16:9',mobileAspectRatio:'4:3',output:'/images/products/catalog-hero.webp',mobileOutput:'/images/products/catalog-hero-mobile.webp'});
  for(const c of compositeJobs){if(c.sourceProductIds.some(id=>!products.has(id)))throw new Error(`Invalid composite ${c.id}`);c.status='planned-awaiting-reviewed-sources';c.layoutRule='Use reviewed complete subjects without changing geometry. Match light and background. If clean extraction is not possible, use a tidy tile composition. No additional paid generation.';}
  if(new Set(compositeJobs.slice(0,-1).map(c=>c.group)).size!==catalog.groups.length)throw new Error('Missing category composite.');
  const textOnly=new Set(['straight-ejector-pins/skd61','straight-ejector-pins/nitrided','shoulder-ejector-pins/surface','guide-posts/nitrided','a-type-punches/custom','threaded-dowel-pins/units']);
  const configurationCoverage=catalog.products.flatMap(p=>content[p.id].variants.map(v=>{
    const extras=detailJobs.filter(j=>j.productId===p.id&&j.configurationIds.includes(v.id)).map(j=>j.id);
    return {productId:p.id,configurationId:v.id,name:v.name,mode:textOnly.has(`${p.id}/${v.id}`)?'text-explanation':extras.length?'dedicated-detail':'family-main-reference',imageJobIds:textOnly.has(`${p.id}/${v.id}`)?[]:extras.length?extras:[p.id],note:'Main images are representative references, not proof of every configuration, material, tolerance or compatibility.'};
  }));
  const allJobs=[...jobs,...detailJobs];
  if(new Set(allJobs.map(j=>j.id)).size!==allJobs.length)throw new Error('Duplicate image job ID');
  const counts=Object.fromEntries(Object.keys(modeNames).map(k=>[k,allJobs.filter(j=>j.composition===k).length]));
  const totals={productFamilies:jobs.length,configurationOptions:configurationCoverage.length,productMainImages:jobs.length,detailExtras:detailJobs.length,newDetailImages:detailJobs.filter(j=>j.revisionAction!=='reuse-approved').length,categoryComposites:compositeJobs.length-1,heroComposites:1,plannedCreativeAssets:allJobs.length+compositeJobs.length,reuseApprovedMains:jobs.filter(j=>j.revisionAction==='reuse-approved').length,refreshExistingMains:jobs.filter(j=>j.revisionAction==='refresh-after-sample-review').length,newMains:jobs.filter(j=>j.revisionAction==='new-main').length,compositionCounts:counts};
  const plan={version:3,reviewDate:'2026-09-30',status:'Staged proposal only. Generating this plan makes no API calls and authorizes no image batch.',source:'catalog.json + catalog-details.json + image-briefs.json + detail-image-briefs.json',referencePolicy:source.referencePolicy,totals,style:{aspectRatio:'4:3',masterSize:'Provider original, displayed in a 4:3 contain frame',background:'#f5f6f7',prompt:stylePrompt,consistency:'Reuse the user-confirmed background and lighting reference. Publish original outputs directly; no repeated image inspection, recoloring or re-export.'},execution:{provider:'Terrakinc (user selected)',singleImageEntry:'scripts/image-gen/sample.ts --id <job-id> --publish',maxImagesPerRequest:1,maxConcurrentRequests:1,automaticGenerationRetries:0,automaticPublishing:true,batchSize:'2–3 sequential images, published immediately after each result',nextSample:'carbide-punches',currentFocus:'punch-components',focusPlan:'docs/punch-image-production-plan.md',costNote:'Generate in small batches without automatic retries. Publish each original directly and preserve the previous version.'},publishing:{mainImagesSupportedNow:true,configurationCardImagesSupportedNow:true,categoryCompositeIntegration:'planned; current punch showcase uses four existing image tiles',aiDisclosureRequired:false,publicCaptionPolicy:"Product name and neutral drawing-based specification wording; no AI labels. Preserve provenance in internal generation records.",mobile:'Full silhouettes with object-contain; single-column detail cards on narrow phones; hero requires a separate mobile export.'},configurationCoverage,jobs,detailJobs,compositeJobs};
  writeFileSync(new URL('data/catalog/image-plan.json',root),JSON.stringify(plan,null,2)+'\n');
  writeFileSync(new URL('docs/product-image-production-plan.md',root),renderPlan(catalog,plan));
  writeFileSync(new URL('docs/punch-image-production-plan.md',root),renderPunchPlan(plan));
  return plan;
}
function renderPlan(catalog,plan){
  const t=plan.totals;
  const out=['# 产品图片制作计划 · V3','', '> 2026-09-30：基于全部目录与详情重整后的方案。由 scripts/prepare-catalog.mjs 生成；此脚本不调用生图 API。主图修改 image-briefs.json，详情图修改 detail-image-briefs.json，款式内容修改 src/data/catalog-details.json。','',
  '## 总量与当前状态','',
  `${t.productFamilies} 个系列、${t.configurationOptions} 个可组合选项，规划 ${t.plannedCreativeAssets} 个成品构图：${t.productMainImages} 张系列主图 + ${t.detailExtras} 张结构/款式详情图 + ${t.categoryComposites} 张分类合成图 + ${t.heroComposites} 张横幅。三种语言复用，同一张图内的零件数不是图片数。`,
  `已有 7 张冲头主图在线：A 型按台阶结构重做并在硬质合金详情中复用；T 型单肩使用独立的三支规格组合图。其他系列按各自任务逐项更新。另有 ${t.newMains} 张主图尚待制作。`,
  `若执行完整方案且全部首稿通过，待生成目标为 ${t.newMains} 张新主图 + ${t.refreshExistingMains} 张主图新版 + ${t.newDetailImages} 张详情图，共 ${t.newMains+t.refreshExistingMains+t.newDetailImages} 张（另有详情素材复用）；8 张合成图不额外生图。这是分阶段内容目标，不是一次提交 ${t.newMains+t.refreshExistingMains+t.newDetailImages} 次请求，也不是费用上限。`,
  `${t.productMainImages+t.detailExtras} 张主图和详情图中：${t.compositionCounts.single} 张单件构图、${t.compositionCounts.series} 张同系列组合、${t.compositionCounts['matched-set']} 张配套组件。横幅手机端另导出一份，不增加构图数量。`,
  '', '## 为什么这样分配','',
  '- 主图回答“这一系列能做什么”：冲头主业务优先采用多件组合，工作端与安装端都要清楚；其他系列依产品结构采用单件、组合或配套组件。',
  '- 详情图只用于需要看清的形状和配合区别。钢材牌号、氮化层深、涂层性能、尺寸公差及设备兼容不靠图片证明，也不为每个材料标签重复生图。',
  `- ${t.configurationOptions} 个选项均有图文安排。部分共享代表性主图，部分链接独立详情图，材质/处理选项使用文字说明；共享主图不表示图中同时呈现所有选项。`,
  '- 材料、适用理由、应用工况、表面处理及 FAQ 使用本次写好的三语内容，不生成虚构工厂、认证、客户案例或性能对比图片。',
  '', '## 分步生成与直接接入','',
  '1. 风格已确认，沿用相同背景和光线参考。先补齐硬质合金详情中的不同结构，不继续围绕主图反复审图和加工。',
  '2. 每次生成 1 张，每批 2–3 张，生成成功后直接接入网站。原图不反复审查、校色或导出，旧版本保留。',
  '3. 按硬质合金 → 高速钢 → 台阶 → 冲压模 → 异形成型 → A 型 → 压片，分批制作各系列冲头详情图。双冲尖、分割线等复杂图使用各自的结构提示词。',
  '4. 依顶出、导向、弹簧、模具辅助件、铜套耐磨件、定位销顺序处理剩余 29 张主图与 9 张详情图。之前不合格的扁顶针/石墨铜套草稿不直接发布。',
  '5. 各类素材审核后再合成 7 张分类图，最后完成 1 张横幅及手机版。当前冲头入口仍使用已通过的 4 图拼版。',
  '6. 最后统一检查手机端两列卡片、单列详情、头部与工作端是否被裁切，以及色温和明暗一致性。',
  '', '## 风格与验收','',
  '浅灰白 #f5f6f7 背景、左上柔光、右下轻接触阴影、中性白平衡、轻俯视斜侧视角；主图和详情图统一 4:3。保留至少 8% 留白，长杆可斜放。风格统一不等于所有部件都变成同样长短或颜色。',
  '优先检查真实可解释的形状：直线轴、合理台阶、孔是否贯通、钢球是否被保持、内孔石墨点、六角/八角边数、椭圆与长圆区别。AI 图仅作产品示意，具体尺寸和型号按确认图纸。没有工程图时不生成精确剖面、公差图或内部机制证明。',
  '当前优先执行冲头冲针专项计划，其他类别暂不生成。页面仅展示产品名称和必要的图纸规格说明，不显示 AI 效果图等标记；生成来源保留在内部。',
  '提示词已逐张编写。使用用户确认的风格参考，生成后直接上图，不反复审图和处理图片；不自动重试，保留旧版本和提示词。',
  '', '## 每类数量与具体图片',''];
  for(const group of catalog.groups){
    const mains=plan.jobs.filter(j=>j.group===group.id),details=plan.detailJobs.filter(j=>j.group===group.id);
    out.push(`### ${group.name.zh}：${mains.length} 张主图 + ${details.length} 张详情图 + 1 张分类合成图 = ${mains.length+details.length+1} 张`,'');
    for(const j of mains){out.push(`- **${j.name.zh}**：主图 1 张，画面 ${j.pieceCount} 件，${modeNames[j.composition]}。${j.descriptionZh} 状态：${j.revisionAction==='reuse-approved'?'复用已审核主图':j.revisionAction==='refresh-after-sample-review'?'计划新版，旧图保留':'待制作'}。`);for(const d of details.filter(d=>d.productId===j.id))out.push(`  - 详情图：${d.name.zh}，${d.pieceCount} 件，${modeNames[d.composition]}。检查：${d.reviewZh}`);}
    out.push('');
  }
  out.push('另加全系列横幅 1 张；冲头为主视觉，其他系列作为配套展示。','',`## ${t.configurationOptions} 个配置的图文对应`,'');
  for(const p of catalog.products){out.push(`### ${p.name.zh}`,'');for(const row of plan.configurationCoverage.filter(r=>r.productId===p.id))out.push(`- ${row.name.zh}：${row.mode==='text-explanation'?'文字说明，无额外图片':row.mode==='family-main-reference'?'共享本系列代表性主图；不单独生成':`使用详情图 ${row.imageJobIds.join('、')}`}。`);out.push('');}
  out.push('## 每张主图与详情图的完整提示词','');
  for(const j of [...plan.jobs,...plan.detailJobs])out.push(`### ${j.id} · ${j.name.zh}`,'',`用途：${j.kind==='main'?'系列主图':'结构/款式详情图'}；${j.pieceCount} 件；${modeNames[j.composition]}。`,`画面：${j.descriptionZh}`,`提示词状态：${j.generationReady?'已逐项编写':'待补充不同结构款式；禁止以尺寸变化替代'}`,`审图重点：${j.reviewZh}`,`位置：${j.productPage}${j.kind==='detail'?'#configuration-'+j.configurationIds[0]:''}`,'','```text',j.prompt,'```','');
  return out.join('\n')+'\n';
}

function renderPunchPlan(plan){
  const mains=plan.jobs.filter(j=>j.group==='punch-components');
  const details=plan.detailJobs.filter(j=>j.group==='punch-components');
  const refresh=mains.filter(j=>j.revisionAction==='refresh-after-sample-review');
  const reusedDetails=details.filter(j=>j.revisionAction==='reuse-approved');
  const reused=mains.filter(j=>j.revisionAction==='reuse-approved');
  const out=['# 冲头冲针图片执行计划','',
    '> 当前先完成冲头冲针，其他产品暂不生成。本文件只是计划，不调用生图接口。由 scripts/product-image-plan.mjs 从图片提示词源文件生成。','',
    `范围：${mains.length} 个系列，${mains.length} 张主图 + ${details.length} 张详情图 + 1 张冲头专区组合图，共 ${mains.length+details.length+1} 个构图。主图在产品列表与详情页复用，三语共用同一套图片。`,
    `已有主图中 ${reused.length} 张优先复用（${reused.map(j=>j.name.zh).join("、")}），沿用现有图片；${refresh.length} 张计划重做。另复用 ${reusedDetails.length} 张详情素材。全方案生成任务为 ${refresh.length+details.length-reusedDetails.length} 张（包含已执行部分），另外 1 张组合图使用通过审核的素材排版，不增加生图调用。若复用图与新风格不协调，单独列出替换需求，不自动扩大批次。`,
    '', '## 同类不同结构款式组合（当前更新）','',
    '系列展示采用同一类型下的不同结构款式；提示词逐件写出每支的台阶数量、过渡肩、安装或工作端差异，不以长度和直径变化代替款式差异。A 型保持缩径台阶，T 型保持单肩直身。轮廓或涂层对比图可保留 2–3 件。压片上冲、下冲、中模仍按配套套装展示，不为了数量混入无关零件。',
    '本轮只纠正 A 型：单台阶圆冲、多级阶梯圆冲、锥肩缩径细针各一支，共用到 A 型系列入口与硬质合金详情。之前套用尺寸变化模板的其余任务已标记待逐件定义结构，未再次调用接口。已有图不因提示词更新而自动换掉。',
    '', '## 统一视觉规范','',
    '- 背景：统一浅灰白 #f5f6f7、无明显地平线，不混用纯黑、蓝色、车间或渐变场景。每次生成使用同一张风格参考，生成后直接使用原图，不额外校色。',
    '- 光线：左上大面积柔光，右下轻接触阴影，金属高光柔和，不出现镜面过曝或不同方向的强阴影。',
    '- 视角：轻俯视斜侧视角；工作端清楚，安装头完整。长杆可斜放，组合件错落摆放，不能互相遮挡刃口。',
    '- 输出：保留生成原图，页面使用 4:3 容器完整展示；四周至少 8% 留白。列表与详情使用同一张图，手机不裁掉尖端或安装头。',
    '- 形态：突出细长杆身、合理支撑和真实可解释的台阶。保持圆、方、矩形、六角、椭圆、长圆、成型曲面的区别，不能把所有冲头画成同一种短圆柱。',
    '- 材质：钢件银灰，硬质合金可略深；不靠颜色冒充钢号，不给所有冲头添加金色涂层。',
    '- 页面：只展示产品名称、款式与必要规格说明，不显示“AI 效果图”“AI 产品示意”等标记。生成来源、原图、提示词和审图记录留在内部，不声称产品实拍。',
    '', '## 当前执行方式（按用户最新要求）','',
    '**硬质合金系列主图**：5 支冲头，圆形、方形、六角、长圆、台阶圆冲各 1 支。完整显示杆身、安装头和工作端。',
    '风格已确认，继续使用该风格参考。系列主图表示产品范围，详情图片直接放到对应结构卡片中；材料和涂层不冒充独立几何种类。',
    '执行时每次请求 1 张，不并发、不自动重试；生成后自动复制原图到网站，不反复审图、校色、裁切或重新导出。计划脚本本身不调用接口。',
    '', '## 之后按系列完成，每批最多 2–3 张','',
    '1. 硬质合金：A 型复用三种结构款式组合主图；T 型的不同款式需另行逐件定义；六角、椭圆/长圆及涂层分别配图。方形/矩形、台阶、切断已接入。所有八项配置都有对应的图片任务，不再让 A/T 两卡重复同一张图。',
    '2. 高速钢：主图与 4 张详情图，拆成 3 张 + 2 张两个生成批次。',
    '3. 台阶与多级：主图与 3 张详情图，拆成 2 张 + 2 张两个生成批次。',
    '4. 冲压模冲头：主图与 3 张详情图，拆成 2 张 + 2 张两个生成批次。',
    '5. 异形与成型：主图与 3 张详情图，拆成 2 张 + 2 张两个生成批次。',
    '6. A 型：纠正为粗杆、缩径工作端与明显台阶的主图，再补 1 张同样带台阶的削边安装位详情图。',
    '7. 压片冲模：复用现有套装主图；先做冲面形状、分割线 2 张，双冲尖 1 张单独生成。',
    '8. 全部系列验收后，用通过审核的素材制作冲头专区组合图；可复用到首页冲头入口，手机另作排版导出，不重新生成零件。',
    '', '## 各系列图片清单',''];
  for(const main of mains){
    const extras=details.filter(j=>j.productId===main.productId);
    out.push(`### ${main.name.zh}：1 张主图 + ${extras.length} 张详情图 = ${extras.length+1} 张`,'',`- 主图：${main.descriptionZh}（${main.revisionAction==='reuse-approved'?'优先直接复用':'计划重做'}）`);
    for(const image of extras)out.push(`- 详情：${image.name.zh}，画面 ${image.pieceCount} 件。审图重点：${image.reviewZh}`);
    out.push('');
  }
  out.push('## 每张生成后同步网站','',
    '使用 sample.ts --id <job-id> --publish 生成一张并直接复制原图。详情图按 configurationIds 放在对应款式卡片；首页定制案例复用对应图文与链接。保留旧版本方便回退。只做必要的页面加载和移动端布局验证，不进行反复图片审核或处理。',
    '材料、应用和 FAQ 的段落以文字说明为主；产品结构卡片配对应产品图，涂层选项配同结构的表面外观对比图，不以颜色证明性能。',
    '', '## 已写好的提示词','',
    '以下提示词与全站 V3 计划共享同一份源数据。每个任务使用用户确认的风格参考和该款式的独立提示词；生成后直接接入对应页面。','');
  for(const j of [...mains,...details])out.push(`### ${j.id} · ${j.name.zh}`,'',`位置：${j.productPage}${j.kind==='detail'?'#configuration-'+j.configurationIds[0]:''}`,`数量：画面 ${j.pieceCount} 件。`,`提示词状态：${j.generationReady?'已编写':'待补充不同结构款式'}`,`检查：${j.reviewZh}`,'','```text',j.prompt,'```','');
  return out.join('\n')+'\n';
}
