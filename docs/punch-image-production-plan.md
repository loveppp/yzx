# 冲头冲针图片执行计划

> 当前先完成冲头冲针，其他产品暂不生成。本文件只是计划，不调用生图接口。由 scripts/product-image-plan.mjs 从图片提示词源文件生成。

范围：7 个系列，7 张主图 + 25 张详情图 + 1 张冲头专区组合图，共 33 个构图。主图在产品列表与详情页复用，三语共用同一套图片。
已有主图中 1 张优先复用（压片冲模），沿用现有图片；6 张计划重做。另复用 1 张详情素材。全方案生成任务为 30 张（包含已执行部分），另外 1 张组合图使用通过审核的素材排版，不增加生图调用。若复用图与新风格不协调，单独列出替换需求，不自动扩大批次。

## 同类不同结构款式组合（当前更新）

系列展示采用同一类型下的不同结构款式；提示词逐件写出每支的台阶数量、过渡肩、安装或工作端差异，不以长度和直径变化代替款式差异。A 型保持缩径台阶，T 型保持单肩直身。轮廓或涂层对比图可保留 2–3 件。压片上冲、下冲、中模仍按配套套装展示，不为了数量混入无关零件。
本轮只纠正 A 型：单台阶圆冲、多级阶梯圆冲、锥肩缩径细针各一支，共用到 A 型系列入口与硬质合金详情。之前套用尺寸变化模板的其余任务已标记待逐件定义结构，未再次调用接口。已有图不因提示词更新而自动换掉。

## 统一视觉规范

- 背景：统一浅灰白 #f5f6f7、无明显地平线，不混用纯黑、蓝色、车间或渐变场景。每次生成使用同一张风格参考，生成后直接使用原图，不额外校色。
- 光线：左上大面积柔光，右下轻接触阴影，金属高光柔和，不出现镜面过曝或不同方向的强阴影。
- 视角：轻俯视斜侧视角；工作端清楚，安装头完整。长杆可斜放，组合件错落摆放，不能互相遮挡刃口。
- 输出：保留生成原图，页面使用 4:3 容器完整展示；四周至少 8% 留白。列表与详情使用同一张图，手机不裁掉尖端或安装头。
- 形态：突出细长杆身、合理支撑和真实可解释的台阶。保持圆、方、矩形、六角、椭圆、长圆、成型曲面的区别，不能把所有冲头画成同一种短圆柱。
- 材质：钢件银灰，硬质合金可略深；不靠颜色冒充钢号，不给所有冲头添加金色涂层。
- 页面：只展示产品名称、款式与必要规格说明，不显示“AI 效果图”“AI 产品示意”等标记。生成来源、原图、提示词和审图记录留在内部，不声称产品实拍。

## 当前执行方式（按用户最新要求）

**硬质合金系列主图**：5 支冲头，圆形、方形、六角、长圆、台阶圆冲各 1 支。完整显示杆身、安装头和工作端。
风格已确认，继续使用该风格参考。系列主图表示产品范围，详情图片直接放到对应结构卡片中；材料和涂层不冒充独立几何种类。
执行时每次请求 1 张，不并发、不自动重试；生成后自动复制原图到网站，不反复审图、校色、裁切或重新导出。计划脚本本身不调用接口。

## 之后按系列完成，每批最多 2–3 张

1. 硬质合金：A 型复用三种结构款式组合主图；T 型的不同款式需另行逐件定义；六角、椭圆/长圆及涂层分别配图。方形/矩形、台阶、切断已接入。所有八项配置都有对应的图片任务，不再让 A/T 两卡重复同一张图。
2. 高速钢：主图与 4 张详情图，拆成 3 张 + 2 张两个生成批次。
3. 台阶与多级：主图与 3 张详情图，拆成 2 张 + 2 张两个生成批次。
4. 冲压模冲头：主图与 3 张详情图，拆成 2 张 + 2 张两个生成批次。
5. 异形与成型：主图与 3 张详情图，拆成 2 张 + 2 张两个生成批次。
6. A 型：纠正为粗杆、缩径工作端与明显台阶的主图，再补 1 张同样带台阶的削边安装位详情图。
7. 压片冲模：复用现有套装主图；先做冲面形状、分割线 2 张，双冲尖 1 张单独生成。
8. 全部系列验收后，用通过审核的素材制作冲头专区组合图；可复用到首页冲头入口，手机另作排版导出，不重新生成零件。

## 各系列图片清单

### 硬质合金冲头（钨钢）：1 张主图 + 8 张详情图 = 9 张

- 主图：5 支细长硬质合金冲头组合：圆形、方形、六角、长圆及台阶圆冲各一支，展示安装头和工作端。（计划重做）
- 详情：A 冲款式 · 单台阶 / 多级阶梯 / 锥肩，画面 3 件。审图重点：三件的台阶数量、肩部形状及轮廓明确不同，不能只改变尺寸。
- 详情：T 型单肩冲针系列，画面 3 件。审图重点：先明确每件不同的结构款式，再生成；不使用同款缩放组合。
- 详情：六角冲头 · 六边形工作端系列，画面 3 件。审图重点：先明确每件不同的结构款式，再生成；不使用同款缩放组合。
- 详情：椭圆与长圆 · 两种工作轮廓，画面 2 件。审图重点：图片与该卡片的结构名称对应，直接使用生成原图。
- 详情：未涂层与涂层 · 外观对比，画面 2 件。审图重点：图片与该卡片的结构名称对应，直接使用生成原图。
- 详情：方形与矩形刃口，画面 2 件。审图重点：方形与矩形可辨，刃口不能变为螺丝刀或钻头。
- 详情：硬质合金台阶结构系列，画面 3 件。审图重点：先明确每件不同的结构款式，再生成；不使用同款缩放组合。
- 详情：切断冲头工作端系列，画面 3 件。审图重点：先明确每件不同的结构款式，再生成；不使用同款缩放组合。

### 高速钢冲头：1 张主图 + 4 张详情图 = 5 张

- 主图：4 支高速钢冲头：直身圆冲、台阶圆冲、矩形冲、六角冲，均为银灰色细长结构。（计划重做）
- 详情：高速钢方形与矩形冲头，画面 2 件。审图重点：两种截面清楚，不通过颜色表示不同钢号。
- 详情：窄扁冲裁工作段系列，画面 3 件。审图重点：先明确每件不同的结构款式，再生成；不使用同款缩放组合。
- 详情：高速钢单台阶冲头系列，画面 3 件。审图重点：先明确每件不同的结构款式，再生成；不使用同款缩放组合。
- 详情：高速钢六角与八角冲头，画面 2 件。审图重点：逐一核对六边和八边；边数不对即不发布。

### 台阶与多级冲头：1 张主图 + 3 张详情图 = 4 张

- 主图：4 支台阶冲头：单台阶圆冲、多级圆冲、台阶方冲、T 头缩径冲，完整呈现肩位。（计划重做）
- 详情：台阶方冲系列，画面 3 件。审图重点：先明确每件不同的结构款式，再生成；不使用同款缩放组合。
- 详情：台阶异形与长圆冲头，画面 2 件。审图重点：长圆直边与半圆端清晰，不能混成椭圆。
- 详情：多级台阶结构系列，画面 3 件。审图重点：先明确每件不同的结构款式，再生成；不使用同款缩放组合。

### 冲压模冲头：1 张主图 + 3 张详情图 = 4 张

- 主图：4 件冲压模冲头组合：圆孔、矩形、长圆及切断工作端，安装端完整。（计划重做）
- 详情：冲压切断件系列，画面 3 件。审图重点：先明确每件不同的结构款式，再生成；不使用同款缩放组合。
- 详情：可更换冲裁件安装端系列，画面 3 件。审图重点：先明确每件不同的结构款式，再生成；不使用同款缩放组合。
- 详情：长圆槽冲头系列，画面 3 件。审图重点：先明确每件不同的结构款式，再生成；不使用同款缩放组合。

### 异形与成型冲头：1 张主图 + 3 张详情图 = 4 张

- 主图：4 支异形与成型冲头：六角、椭圆、长圆、圆弧成型端，突出不同工作面。（计划重做）
- 详情：方形与六角轮廓，画面 2 件。审图重点：几何边数与直线度正确。
- 详情：椭圆与长圆对比，画面 2 件。审图重点：两种轮廓必须确实不同。
- 详情：曲面成型与斜面工作端，画面 2 件。审图重点：圆弧成型端不应生成锋利尖刺，斜面件不能弯曲。

### A 型台阶冲针：1 张主图 + 1 张详情图 = 2 张

- 主图：A 冲不同款式组合：单台阶圆冲、多级阶梯圆冲、锥肩缩径细针，各 1 支。（计划重做）
- 详情：带削边安装位的圆冲系列，画面 3 件。审图重点：先明确每件不同的结构款式，再生成；不使用同款缩放组合。

### 压片冲模：1 张主图 + 3 张详情图 = 4 张

- 主图：1 套压片冲模：上冲、下冲、中模共 3 件，平行分开摆放，展示圆形浅凹冲面与中模通孔。（优先直接复用）
- 详情：三种压片冲面系列，画面 3 件。审图重点：冲面是浅凹面，不是实心平冲裁刃；不虚构压机型号。
- 详情：分割线冲面系列，画面 3 件。审图重点：先明确每件不同的结构款式，再生成；不使用同款缩放组合。
- 详情：双冲尖代表结构系列，画面 3 件。审图重点：先明确每件不同的结构款式，再生成；不使用同款缩放组合。

## 每张生成后同步网站

使用 sample.ts --id <job-id> --publish 生成一张并直接复制原图。详情图按 configurationIds 放在对应款式卡片；首页定制案例复用对应图文与链接。保留旧版本方便回退。只做必要的页面加载和移动端布局验证，不进行反复图片审核或处理。
材料、应用和 FAQ 的段落以文字说明为主；产品结构卡片配对应产品图，涂层选项配同结构的表面外观对比图，不以颜色证明性能。

## 已写好的提示词

以下提示词与全站 V3 计划共享同一份源数据。每个任务使用用户确认的风格参考和该款式的独立提示词；生成后直接接入对应页面。

### carbide-punches · 硬质合金冲头（钨钢）

位置：/zh/products/punch-components/carbide-punches/
数量：画面 5 件。
提示词状态：已编写
检查：5 件必须对应圆、方、六角、长圆、台阶圆；刃口为平整端面，六角数边、长圆检查两直边加两半圆；异形仅在短工作段，后部为圆柱支撑杆。背景按 #f5f6f7 校正。首稿圆端偏圆钝、长圆近似磨平圆头，未通过结构审核。

```text
Use case: product-mockup.
Create a realistic studio-style product illustration for a precision mold component catalog.
Use a seamless neutral off-white/light-gray background (#f5f6f7), a matte ground plane, soft diffused upper-left light and a restrained contact shadow to the lower right. Neutral white balance, no dramatic gradient or horizon line.
Camera: consistent mildly elevated three-quarter view, approximately 85 mm product-photography perspective, no wide-angle distortion. Keep every part sharp.
Framing: landscape 4:3. Center the complete product or set; occupy approximately 75–82% of the available frame, with at least 8% safe margin on every edge. Preserve all tips, heads and openings. No cropped parts.
Finish: credible fine machining and grinding texture, controlled metal highlights, clean new components without scratches, oil or rust. Preserve the distinct appearance of steel, bronze, graphite and painted springs.
This is a representative product illustration, not a dimensional drawing or proof of actual stock. Do not invent dimensions, tolerances, certifications, brands or material-grade markings.
If an approved image is supplied later, use it ONLY as a lighting, background and photographic-style reference. The product geometry and object count must follow this job, not the style-reference object.

Asset role: shared family listing and main product image.
Product family: Carbide Punches.
Product function: Wear-resistant punches with round or profiled working ends for repeat stamping. Carbide grade and edge geometry are selected together.
Configuration context: Type A stepped punch: Type A stepped punches include single-step, multi-stage and tapered-shoulder designs. Select the construction by working profile, support and mounting requirements. Type T single-shoulder punch: A normally proportioned retaining head forms one shoulder with a straight shank; the shank continues to the round working end without a further diameter reduction. Confirm head diameter, thickness, shank diameter and length against the mounting drawing. Stepped and carbide-tipped designs: A larger shank supports the reduced tip; tipped designs require an agreed joint and load path. Square, rectangular and custom profiles: Define the cutting edge from the required hole; non-round tips also need rotational orientation. Hexagonal punch: For hexagonal holes; across-flats size, corners and tip length define the working geometry. Oval and obround punches: An ellipse differs from a straight-sided obround; define the exact outline in the drawing. Cut-off and precision piercing: Define cut-off edges and precision piercing by load and dimensional requirements; precision is not a fixed tolerance claim. Coating and wear options: Choose an uncoated or compatible coated finish on the same punch geometry. The appearance comparison illustrates finish options; select for carbide grade, work material, edge condition and regrinding.
Selected visible subject (takes priority over context): Exactly five complete elongated carbide punches, arranged separately in a shallow fan. All five have cylindrical support shanks and coherent retaining heads. Show their working ends clearly toward the camera. From left to right: (1) a straight round punch with a FLAT circular end face; (2) a cylindrical support shank transitioning to a short square cutting tip with a FLAT square end face; (3) a cylindrical support shank transitioning to a short true hexagonal cutting tip with exactly six straight sides and six corners on its FLAT end face; (4) a cylindrical support shank transitioning to a short obround cutting tip whose FLAT end-face outline has two parallel straight sides joined by two semicircular ends; (5) a round punch with two coaxial diameter reductions and a FLAT circular working face. Each cutting face is planar and perpendicular to its shaft axis, with crisp readable edges. Profiled tips occupy only a short working section ahead of a visibly larger supporting round shank. Do not extend the square, hexagonal or obround profile along the entire shaft. No domed or ball-ended working faces, no rounded screwdriver-like noses, no decorative longitudinal flats and no drill features. Preserve complete heads and tips, neutral cool gray carbide, slender straight bodies.
Exact physical object count: 5.
Composition: A separated same-family collection, shallow staggered layout, no overlap or hidden working ends. Long axes stay straight.
Text policy: No text, labels, dimensions, arrows, logos, grade numbers or watermarks.
Avoid: No drill flutes, gold coating, invented brazed joints, domed cutting ends, soft bulbous edges, full-length polygonal shanks, longitudinally ground spoon-like obround tips or ambiguous polygon counts. Also avoid fused geometry, cropped tips, floating shadows or extra objects.
Show only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.
```

### hss-punches · 高速钢冲头

位置：/zh/products/punch-components/hss-punches/
数量：画面 4 件。
提示词状态：已编写
检查：不靠颜色区分 SKH51、M2 或粉末钢牌号。 完整细长杆身，重点确认所有工作端轮廓和安装头，不满意则减少同图件数分步重做。

```text
Use case: product-mockup.
Create a realistic studio-style product illustration for a precision mold component catalog.
Use a seamless neutral off-white/light-gray background (#f5f6f7), a matte ground plane, soft diffused upper-left light and a restrained contact shadow to the lower right. Neutral white balance, no dramatic gradient or horizon line.
Camera: consistent mildly elevated three-quarter view, approximately 85 mm product-photography perspective, no wide-angle distortion. Keep every part sharp.
Framing: landscape 4:3. Center the complete product or set; occupy approximately 75–82% of the available frame, with at least 8% safe margin on every edge. Preserve all tips, heads and openings. No cropped parts.
Finish: credible fine machining and grinding texture, controlled metal highlights, clean new components without scratches, oil or rust. Preserve the distinct appearance of steel, bronze, graphite and painted springs.
This is a representative product illustration, not a dimensional drawing or proof of actual stock. Do not invent dimensions, tolerances, certifications, brands or material-grade markings.
If an approved image is supplied later, use it ONLY as a lighting, background and photographic-style reference. The product geometry and object count must follow this job, not the style-reference object.

Asset role: shared family listing and main product image.
Product family: HSS Punches.
Product function: High-speed steel punches for cutting duties that need a balance of wear resistance and toughness.
Configuration context: Round and T-head punches: Round-hole piercing with alternative heads; a round tip alone does not establish a T-type standard. Flat and rectangular punches: Slots and rectangular holes require blade support, straight long edges and controlled orientation. Square punches: Four cutting edges form square holes; match corner radii to the die and part requirements. Stepped HSS punches: A larger body supports a reduced tip with one or more steps; steps do not imply piercing several hole diameters at once. Hexagonal and special profiles: Custom tips follow the part outline, with orientation datums and specified corner details. Punches with scrap-ejection features: Where scrap ejection is needed, specify the internal bore or ejecting mechanism as part of the punch.
Selected visible subject (takes priority over context): Exactly four complete elongated silver HSS punches: one straight round, one stepped round, one rectangular and one hexagonal. Clear retaining heads and supported cutting ends, separated shallow fan layout, no color coding of grades.
Exact physical object count: 4.
Composition: A separated same-family collection, shallow staggered layout, no overlap or hidden working ends. Long axes stay straight.
Text policy: No text, labels, dimensions, arrows, logos, grade numbers or watermarks.
Avoid: Do not encode alloy grades with different colors or add printed grade labels. Also avoid fused geometry, cropped tips, floating shadows or extra objects.
Show only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.
```

### stepped-punches · 台阶与多级冲头

位置：/zh/products/punch-components/stepped-punches/
数量：画面 4 件。
提示词状态：已编写
检查：不要生成锥形针尖；台阶不能融化或轴线偏移。 完整细长杆身，重点确认所有工作端轮廓和安装头，不满意则减少同图件数分步重做。

```text
Use case: product-mockup.
Create a realistic studio-style product illustration for a precision mold component catalog.
Use a seamless neutral off-white/light-gray background (#f5f6f7), a matte ground plane, soft diffused upper-left light and a restrained contact shadow to the lower right. Neutral white balance, no dramatic gradient or horizon line.
Camera: consistent mildly elevated three-quarter view, approximately 85 mm product-photography perspective, no wide-angle distortion. Keep every part sharp.
Framing: landscape 4:3. Center the complete product or set; occupy approximately 75–82% of the available frame, with at least 8% safe margin on every edge. Preserve all tips, heads and openings. No cropped parts.
Finish: credible fine machining and grinding texture, controlled metal highlights, clean new components without scratches, oil or rust. Preserve the distinct appearance of steel, bronze, graphite and painted springs.
This is a representative product illustration, not a dimensional drawing or proof of actual stock. Do not invent dimensions, tolerances, certifications, brands or material-grade markings.
If an approved image is supplied later, use it ONLY as a lighting, background and photographic-style reference. The product geometry and object count must follow this job, not the style-reference object.

Asset role: shared family listing and main product image.
Product family: Stepped Punches.
Product function: Punches with different shank and working diameters. Shoulder position and transition radii are defined by the tool drawing.
Configuration context: Single-step round punch: A shoulder joins a small cutting tip to a larger supporting shank. Multi-step punch: Multiple coaxial sections suit different plate and support positions; dimension every shoulder. Stepped square punch: A round shank transitions to a square tip with controlled orientation and root support. Stepped profile and slot punches: Hexagonal, obround or custom tips need a profile drawing in addition to reduced-section dimensions. T-head and custom mounting: Stepped bodies can use different retaining heads; mounting and cutting profiles are separate choices.
Selected visible subject (takes priority over context): Exactly four complete elongated stepped punches: single-step round, multi-step round, stepped square and T-head reduced round. Distinct supported tips, all shoulders visible, straight axes and moderate slenderness.
Exact physical object count: 4.
Composition: A separated same-family collection, shallow staggered layout, no overlap or hidden working ends. Long axes stay straight.
Text policy: No text, labels, dimensions, arrows, logos, grade numbers or watermarks.
Avoid: No needle points, melted shoulders, bent shafts or non-coaxial steps. Also avoid fused geometry, cropped tips, floating shadows or extra objects.
Show only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.
```

### stamping-die-punches · 冲压模冲头

位置：/zh/products/punch-components/stamping-die-punches/
数量：画面 4 件。
提示词状态：已编写
检查：不混入顶针、弹簧或整副模具。 完整细长杆身，重点确认所有工作端轮廓和安装头，不满意则减少同图件数分步重做。

```text
Use case: product-mockup.
Create a realistic studio-style product illustration for a precision mold component catalog.
Use a seamless neutral off-white/light-gray background (#f5f6f7), a matte ground plane, soft diffused upper-left light and a restrained contact shadow to the lower right. Neutral white balance, no dramatic gradient or horizon line.
Camera: consistent mildly elevated three-quarter view, approximately 85 mm product-photography perspective, no wide-angle distortion. Keep every part sharp.
Framing: landscape 4:3. Center the complete product or set; occupy approximately 75–82% of the available frame, with at least 8% safe margin on every edge. Preserve all tips, heads and openings. No cropped parts.
Finish: credible fine machining and grinding texture, controlled metal highlights, clean new components without scratches, oil or rust. Preserve the distinct appearance of steel, bronze, graphite and painted springs.
This is a representative product illustration, not a dimensional drawing or proof of actual stock. Do not invent dimensions, tolerances, certifications, brands or material-grade markings.
If an approved image is supplied later, use it ONLY as a lighting, background and photographic-style reference. The product geometry and object count must follow this job, not the style-reference object.

Asset role: shared family listing and main product image.
Product family: Stamping Die Punches.
Product function: Replaceable cutting punches made around the hole profile, die clearance and mounting arrangement of your stamping tool.
Configuration context: Round piercing punches: A flat circular cutting face pierces holes; review it with the die opening and stripper. Profile and slot punches: Define rectangular, obround and irregular tips with a closed profile and orientation datum. Cut-off and trimming punches: For separation or edge trimming, match edge direction and loaded area to the die station. Progressive-die replacement punches: Match shoulder positions, head, working length and fits to the existing die station.
Selected visible subject (takes priority over context): Exactly four complete stamping punches: round piercing, rectangular piercing, obround slotting and a robust rectangular cut-off punch. Show supported working ends and mounting interfaces clearly; no die assembly or ejector pins.
Exact physical object count: 4.
Composition: A separated same-family collection, shallow staggered layout, no overlap or hidden working ends. Long axes stay straight.
Text policy: No text, labels, dimensions, arrows, logos, grade numbers or watermarks.
Avoid: No ejector pins, springs, full die assemblies or decorative grooves. Also avoid fused geometry, cropped tips, floating shadows or extra objects.
Show only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.
```

### forming-punches · 异形与成型冲头

位置：/zh/products/punch-components/forming-punches/
数量：画面 4 件。
提示词状态：已编写
检查：不要用任意尖刺表示异形；不要合并六角与圆形轮廓。 完整细长杆身，重点确认所有工作端轮廓和安装头，不满意则减少同图件数分步重做。

```text
Use case: product-mockup.
Create a realistic studio-style product illustration for a precision mold component catalog.
Use a seamless neutral off-white/light-gray background (#f5f6f7), a matte ground plane, soft diffused upper-left light and a restrained contact shadow to the lower right. Neutral white balance, no dramatic gradient or horizon line.
Camera: consistent mildly elevated three-quarter view, approximately 85 mm product-photography perspective, no wide-angle distortion. Keep every part sharp.
Framing: landscape 4:3. Center the complete product or set; occupy approximately 75–82% of the available frame, with at least 8% safe margin on every edge. Preserve all tips, heads and openings. No cropped parts.
Finish: credible fine machining and grinding texture, controlled metal highlights, clean new components without scratches, oil or rust. Preserve the distinct appearance of steel, bronze, graphite and painted springs.
This is a representative product illustration, not a dimensional drawing or proof of actual stock. Do not invent dimensions, tolerances, certifications, brands or material-grade markings.
If an approved image is supplied later, use it ONLY as a lighting, background and photographic-style reference. The product geometry and object count must follow this job, not the style-reference object.

Asset role: shared family listing and main product image.
Product family: Forming & Profile Punches.
Product function: Non-round and contoured working ends for shaped openings or forming operations. The working surface is defined from your drawing.
Configuration context: Hexagonal, square and polygonal: For non-round holes, specify each side and mounting orientation. Oval and obround profiles: Axes, slot width and end radii define the exact hole geometry. Angled and offset working ends: Angled or offset tips require review of side loads and support. Contoured forming noses: For pressing or local forming, focus on the contact surface and forming depth.
Selected visible subject (takes priority over context): Exactly four complete supported forming/profile punches: hexagonal, elliptical, straight-sided obround and broad rounded convex forming nose. Slender but supported cylindrical shanks; each working end visually distinct.
Exact physical object count: 4.
Composition: A separated same-family collection, shallow staggered layout, no overlap or hidden working ends. Long axes stay straight.
Text policy: No text, labels, dimensions, arrows, logos, grade numbers or watermarks.
Avoid: No fantasy spikes, hybrid end profiles or fragile unsupported fins. Also avoid fused geometry, cropped tips, floating shadows or extra objects.
Show only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.
```

### a-type-punches · A 型台阶冲针

位置：/zh/products/punch-components/a-type-punches/
数量：画面 3 件。
提示词状态：已编写
检查：三件的台阶数量、肩部形状及轮廓明确不同，不能只改变尺寸。

```text
Use case: product-mockup.
Create a realistic studio-style product illustration for a precision mold component catalog.
Use a seamless neutral off-white/light-gray background (#f5f6f7), a matte ground plane, soft diffused upper-left light and a restrained contact shadow to the lower right. Neutral white balance, no dramatic gradient or horizon line.
Camera: consistent mildly elevated three-quarter view, approximately 85 mm product-photography perspective, no wide-angle distortion. Keep every part sharp.
Framing: landscape 4:3. Center the complete product or set; occupy approximately 75–82% of the available frame, with at least 8% safe margin on every edge. Preserve all tips, heads and openings. No cropped parts.
Finish: credible fine machining and grinding texture, controlled metal highlights, clean new components without scratches, oil or rust. Preserve the distinct appearance of steel, bronze, graphite and painted springs.
This is a representative product illustration, not a dimensional drawing or proof of actual stock. Do not invent dimensions, tolerances, certifications, brands or material-grade markings.
If an approved image is supplied later, use it ONLY as a lighting, background and photographic-style reference. The product geometry and object count must follow this job, not the style-reference object.

Asset role: shared family listing and main product image.
Product family: Type A Stepped Punches.
Product function: Type A stepped punches include single-step, multi-stage and tapered-shoulder designs. Select the construction by working profile, support and mounting requirements.
Configuration context: Type A stepped punch: A larger support shank steps down to a smaller working tip, with a normally proportioned retaining head at the rear. Specify tip and shank diameters, working length and shoulder radius. Flatted or anti-rotation version: Flats provide orientation or mounting clearance and must reference the working end. Custom length and mounting fit: For replacements, verify mounting dimensions and fits rather than appearance alone.
Selected visible subject (takes priority over context): Exactly THREE DIFFERENT TYPE-A STEPPED PUNCH DESIGNS in one coherent product-series photograph. The point is different construction styles, not the same design scaled to different lengths or diameters. The required distinct pieces are: LEFT: a conventional single-step round punch. One slim cylindrical cutting section above one larger support shank, with a distinct square annular shoulder and only a tiny root radius. A modest round retaining foot at the bottom. Two body diameters above the foot. No intermediate cylinder. CENTER: a visibly different heavy multi-stage stepped punch, with THREE stacked cylindrical body tiers above a modest retaining foot: a broad lower support barrel, a medium-diameter middle stage, and a slim upper working cylinder. Two widely separated square annular shoulders. The broad barrel is prominent, making a strong architectural staircase silhouette. Not a scaled copy of the left punch. RIGHT: a slender fine-tip punch whose support body transitions through a clearly visible LONG CONICAL SHOULDER to the very thin straight cylindrical working needle. The conical neck is the defining feature, distinct from the square shoulders on the other two. A small retaining foot at the bottom. Flat working end, never a sharp pointed needle. Stand the three separately on their retaining feet in a lightly staggered group, working ends upward, with the bulky multi-tier design in the center. Use a mildly elevated three-quarter view so shoulders and flat working faces are visible. Every complete silhouette must be readable without overlap. Shared neutral silver-gray ground-metal finish and the approved light-gray studio background. These are structural catalog examples, no standard numbers, labels or dimensions. No three copies, no same topology at different scales, no decorative grooves, no extra flanges or fourth object.
Exact physical object count: 3.
Composition: A separated same-family collection, shallow staggered layout, no overlap or hidden working ends. Long axes stay straight.
Text policy: No text, labels, dimensions, arrows, logos, grade numbers or watermarks.
Avoid: No equal-diameter head-and-shank-only pin, no oversized flange, no pointed tip, no decorative rings or standard numbers. Also avoid fused geometry, cropped tips, floating shadows or extra objects.
Show only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.
```

### tableting-punches · 压片冲模

位置：/zh/products/punch-components/tableting-punches/
数量：画面 3 件。
提示词状态：已编写
检查：不生成药片、刻字或未验证的压机接口；不把中模画成封闭实心块。

```text
Use case: product-mockup.
Create a realistic studio-style product illustration for a precision mold component catalog.
Use a seamless neutral off-white/light-gray background (#f5f6f7), a matte ground plane, soft diffused upper-left light and a restrained contact shadow to the lower right. Neutral white balance, no dramatic gradient or horizon line.
Camera: consistent mildly elevated three-quarter view, approximately 85 mm product-photography perspective, no wide-angle distortion. Keep every part sharp.
Framing: landscape 4:3. Center the complete product or set; occupy approximately 75–82% of the available frame, with at least 8% safe margin on every edge. Preserve all tips, heads and openings. No cropped parts.
Finish: credible fine machining and grinding texture, controlled metal highlights, clean new components without scratches, oil or rust. Preserve the distinct appearance of steel, bronze, graphite and painted springs.
This is a representative product illustration, not a dimensional drawing or proof of actual stock. Do not invent dimensions, tolerances, certifications, brands or material-grade markings.
If an approved image is supplied later, use it ONLY as a lighting, background and photographic-style reference. The product geometry and object count must follow this job, not the style-reference object.

Asset role: shared family listing and main product image.
Product family: Tableting Punches & Dies.
Product function: Matched upper punches, lower punches and dies for powder compaction. Cup geometry and press compatibility need joint review.
Configuration context: Upper punch: Enters the die from above and compresses powder; the cup defines one tablet face. Lower punch: Works with fill depth and compression position, then ejects the compact. Mating die: The die bore defines the outer profile and must fit both punches. Round, oval and custom shapes: Each tablet shape needs matching cups and die bore, with specified concavity and edge geometry. Engraving and score lines: Confirm markings by machinable artwork, depth and release direction. Multi-tip and press-specific tooling: Multiple tips need matching die bores and checks on press space, load and orientation.
Selected visible subject (takes priority over context): One separated three-part round-tablet tooling set: an upper punch, a lower punch and a cylindrical die with a round through-bore. Punches have substantial heads and narrow cylindrical tips with shallow concave round cup faces. Place all parts separately with cup faces and die bore visible.
Exact physical object count: 3.
Composition: A separated matched set, consistent mating proportions, no fusion or exploded-view arrows.
Text policy: No text, labels, dimensions, arrows, logos, grade numbers or watermarks.
Avoid: No tablets, pills, embossed lettering, machine compatibility labels or closed solid die bore. Also avoid fused geometry, cropped tips, floating shadows or extra objects.
Show only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.
```

### carbide-punches--type-a · A 冲款式 · 单台阶 / 多级阶梯 / 锥肩

位置：/zh/products/punch-components/carbide-punches/#configuration-type-a
数量：画面 3 件。
提示词状态：已编写
检查：三件的台阶数量、肩部形状及轮廓明确不同，不能只改变尺寸。

```text
Use case: product-mockup.
Create a realistic studio-style product illustration for a precision mold component catalog.
Use a seamless neutral off-white/light-gray background (#f5f6f7), a matte ground plane, soft diffused upper-left light and a restrained contact shadow to the lower right. Neutral white balance, no dramatic gradient or horizon line.
Camera: consistent mildly elevated three-quarter view, approximately 85 mm product-photography perspective, no wide-angle distortion. Keep every part sharp.
Framing: landscape 4:3. Center the complete product or set; occupy approximately 75–82% of the available frame, with at least 8% safe margin on every edge. Preserve all tips, heads and openings. No cropped parts.
Finish: credible fine machining and grinding texture, controlled metal highlights, clean new components without scratches, oil or rust. Preserve the distinct appearance of steel, bronze, graphite and painted springs.
This is a representative product illustration, not a dimensional drawing or proof of actual stock. Do not invent dimensions, tolerances, certifications, brands or material-grade markings.
If an approved image is supplied later, use it ONLY as a lighting, background and photographic-style reference. The product geometry and object count must follow this job, not the style-reference object.

Asset role: family detail image, linked to the specified configurations.
Product family: Carbide Punches.
Product function: Wear-resistant punches with round or profiled working ends for repeat stamping. Carbide grade and edge geometry are selected together.
Configuration context: Type A stepped punch: Type A stepped punches include single-step, multi-stage and tapered-shoulder designs. Select the construction by working profile, support and mounting requirements.
Selected visible subject (takes priority over context): Exactly THREE DIFFERENT TYPE-A STEPPED PUNCH DESIGNS in one coherent product-series photograph. The point is different construction styles, not the same design scaled to different lengths or diameters. The required distinct pieces are: LEFT: a conventional single-step round punch. One slim cylindrical cutting section above one larger support shank, with a distinct square annular shoulder and only a tiny root radius. A modest round retaining foot at the bottom. Two body diameters above the foot. No intermediate cylinder. CENTER: a visibly different heavy multi-stage stepped punch, with THREE stacked cylindrical body tiers above a modest retaining foot: a broad lower support barrel, a medium-diameter middle stage, and a slim upper working cylinder. Two widely separated square annular shoulders. The broad barrel is prominent, making a strong architectural staircase silhouette. Not a scaled copy of the left punch. RIGHT: a slender fine-tip punch whose support body transitions through a clearly visible LONG CONICAL SHOULDER to the very thin straight cylindrical working needle. The conical neck is the defining feature, distinct from the square shoulders on the other two. A small retaining foot at the bottom. Flat working end, never a sharp pointed needle. Stand the three separately on their retaining feet in a lightly staggered group, working ends upward, with the bulky multi-tier design in the center. Use a mildly elevated three-quarter view so shoulders and flat working faces are visible. Every complete silhouette must be readable without overlap. Shared neutral silver-gray ground-metal finish and the approved light-gray studio background. These are structural catalog examples, no standard numbers, labels or dimensions. No three copies, no same topology at different scales, no decorative grooves, no extra flanges or fourth object.
Exact physical object count: 3.
Composition: A separated same-family collection, shallow staggered layout, no overlap or hidden working ends. Long axes stay straight.
Text policy: No text, labels, dimensions, arrows, logos, grade numbers or watermarks.
Avoid: No text, logos, watermarks, dimension labels, extra parts, fused geometry or decorative grooves. Also avoid fused geometry, cropped tips, floating shadows or extra objects.
Show only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.
```

### carbide-punches--type-t · T 型单肩冲针系列

位置：/zh/products/punch-components/carbide-punches/#configuration-type-t
数量：画面 3 件。
提示词状态：待补充不同结构款式
检查：先明确每件不同的结构款式，再生成；不使用同款缩放组合。

```text
Use case: product-mockup.
Create a realistic studio-style product illustration for a precision mold component catalog.
Use a seamless neutral off-white/light-gray background (#f5f6f7), a matte ground plane, soft diffused upper-left light and a restrained contact shadow to the lower right. Neutral white balance, no dramatic gradient or horizon line.
Camera: consistent mildly elevated three-quarter view, approximately 85 mm product-photography perspective, no wide-angle distortion. Keep every part sharp.
Framing: landscape 4:3. Center the complete product or set; occupy approximately 75–82% of the available frame, with at least 8% safe margin on every edge. Preserve all tips, heads and openings. No cropped parts.
Finish: credible fine machining and grinding texture, controlled metal highlights, clean new components without scratches, oil or rust. Preserve the distinct appearance of steel, bronze, graphite and painted springs.
This is a representative product illustration, not a dimensional drawing or proof of actual stock. Do not invent dimensions, tolerances, certifications, brands or material-grade markings.
If an approved image is supplied later, use it ONLY as a lighting, background and photographic-style reference. The product geometry and object count must follow this job, not the style-reference object.

Asset role: family detail image, linked to the specified configurations.
Product family: Carbide Punches.
Product function: Wear-resistant punches with round or profiled working ends for repeat stamping. Carbide grade and edge geometry are selected together.
Configuration context: Type T single-shoulder punch: A normally proportioned retaining head forms one shoulder with a straight shank; the shank continues to the round working end without a further diameter reduction. Confirm head diameter, thickness, shank diameter and length against the mounting drawing.
Selected visible subject (takes priority over context): Type T SINGLE-SHOULDER round punch. A compact cylindrical retaining head is only modestly wider than a long straight ground cylindrical shank. There is exactly ONE diameter shoulder, at the junction between the retaining head and the shank. The shank continues at a CONSTANT diameter all the way to the flat circular working end, with NO reduced working tip and NO additional body steps. Use a normally proportioned modest head, never an oversized flat disk. Diagonal pose, full head and working end visible. Neutral metal, no text, no dimensions or standard markings.
Exact physical object count: 3.
Composition: A separated same-family collection, shallow staggered layout, no overlap or hidden working ends. Long axes stay straight.
Text policy: No text, labels, dimensions, arrows, logos, grade numbers or watermarks.
Avoid: No text, logos, watermarks, dimension labels, extra parts, fused geometry or decorative grooves. Also avoid fused geometry, cropped tips, floating shadows or extra objects.
Show only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.
```

### carbide-punches--hexagonal · 六角冲头 · 六边形工作端系列

位置：/zh/products/punch-components/carbide-punches/#configuration-hexagonal
数量：画面 3 件。
提示词状态：待补充不同结构款式
检查：先明确每件不同的结构款式，再生成；不使用同款缩放组合。

```text
Use case: product-mockup.
Create a realistic studio-style product illustration for a precision mold component catalog.
Use a seamless neutral off-white/light-gray background (#f5f6f7), a matte ground plane, soft diffused upper-left light and a restrained contact shadow to the lower right. Neutral white balance, no dramatic gradient or horizon line.
Camera: consistent mildly elevated three-quarter view, approximately 85 mm product-photography perspective, no wide-angle distortion. Keep every part sharp.
Framing: landscape 4:3. Center the complete product or set; occupy approximately 75–82% of the available frame, with at least 8% safe margin on every edge. Preserve all tips, heads and openings. No cropped parts.
Finish: credible fine machining and grinding texture, controlled metal highlights, clean new components without scratches, oil or rust. Preserve the distinct appearance of steel, bronze, graphite and painted springs.
This is a representative product illustration, not a dimensional drawing or proof of actual stock. Do not invent dimensions, tolerances, certifications, brands or material-grade markings.
If an approved image is supplied later, use it ONLY as a lighting, background and photographic-style reference. The product geometry and object count must follow this job, not the style-reference object.

Asset role: family detail image, linked to the specified configurations.
Product family: Carbide Punches.
Product function: Wear-resistant punches with round or profiled working ends for repeat stamping. Carbide grade and edge geometry are selected together.
Configuration context: Hexagonal punch: For hexagonal holes; across-flats size, corners and tip length define the working geometry.
Selected visible subject (takes priority over context): elongated punch with a SHORT six-sided prism working section supported by a thicker cylindrical shank and a modest rear retaining head. The working end faces lower left toward camera: the ENTIRE planar cutting face is a regular HEXAGON with exactly SIX straight edges and SIX corners. Six planar side walls. Minimal edge break only, no circular inset disk, no octagon and no broad chamfer. Camera looking toward the working face enough to see all six edges. Fully visible shaft and mounting head.
Exact physical object count: 3.
Composition: A separated same-family collection, shallow staggered layout, no overlap or hidden working ends. Long axes stay straight.
Text policy: No text, labels, dimensions, arrows, logos, grade numbers or watermarks.
Avoid: No text, logos, watermarks, dimension labels, extra parts, fused geometry or decorative grooves. Also avoid fused geometry, cropped tips, floating shadows or extra objects.
Show only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.
```

### carbide-punches--oval-obround · 椭圆与长圆 · 两种工作轮廓

位置：/zh/products/punch-components/carbide-punches/#configuration-oval
数量：画面 2 件。
提示词状态：已编写
检查：图片与该卡片的结构名称对应，直接使用生成原图。

```text
Use case: product-mockup.
Create a realistic studio-style product illustration for a precision mold component catalog.
Use a seamless neutral off-white/light-gray background (#f5f6f7), a matte ground plane, soft diffused upper-left light and a restrained contact shadow to the lower right. Neutral white balance, no dramatic gradient or horizon line.
Camera: consistent mildly elevated three-quarter view, approximately 85 mm product-photography perspective, no wide-angle distortion. Keep every part sharp.
Framing: landscape 4:3. Center the complete product or set; occupy approximately 75–82% of the available frame, with at least 8% safe margin on every edge. Preserve all tips, heads and openings. No cropped parts.
Finish: credible fine machining and grinding texture, controlled metal highlights, clean new components without scratches, oil or rust. Preserve the distinct appearance of steel, bronze, graphite and painted springs.
This is a representative product illustration, not a dimensional drawing or proof of actual stock. Do not invent dimensions, tolerances, certifications, brands or material-grade markings.
If an approved image is supplied later, use it ONLY as a lighting, background and photographic-style reference. The product geometry and object count must follow this job, not the style-reference object.

Asset role: family detail image, linked to the specified configurations.
Product family: Carbide Punches.
Product function: Wear-resistant punches with round or profiled working ends for repeat stamping. Carbide grade and edge geometry are selected together.
Configuration context: Oval and obround punches: An ellipse differs from a straight-sided obround; define the exact outline in the drawing.
Selected visible subject (takes priority over context): Exactly TWO separate complete slender punches lying side by side, with their flat working faces presented almost front-on toward the camera and shanks receding upward. LEFT punch: strongly elongated TRUE ELLIPTICAL end face, long axis about 2.5 times short axis, continuous curved outline, NO straight sides. RIGHT punch: elongated OBROUND end face with TWO clearly straight parallel long sides joined by two semicircular ends, long axis about 2.5 times width. Both have short profiled cutting sections supported by thicker cylindrical shafts and complete modest retaining heads. The distinct ellipse versus straight-sided capsule outlines must be visible. No ordinary round working tip. Same metal and light for both. Entire two bodies visible, no overlap.
Exact physical object count: 2.
Composition: A separated same-family collection, shallow staggered layout, no overlap or hidden working ends. Long axes stay straight.
Text policy: No text, labels, dimensions, arrows, logos, grade numbers or watermarks.
Avoid: No text, logos, watermarks, dimension labels, extra parts, fused geometry or decorative grooves. Also avoid fused geometry, cropped tips, floating shadows or extra objects.
Show only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.
```

### carbide-punches--coated · 未涂层与涂层 · 外观对比

位置：/zh/products/punch-components/carbide-punches/#configuration-coated
数量：画面 2 件。
提示词状态：已编写
检查：图片与该卡片的结构名称对应，直接使用生成原图。

```text
Use case: product-mockup.
Create a realistic studio-style product illustration for a precision mold component catalog.
Use a seamless neutral off-white/light-gray background (#f5f6f7), a matte ground plane, soft diffused upper-left light and a restrained contact shadow to the lower right. Neutral white balance, no dramatic gradient or horizon line.
Camera: consistent mildly elevated three-quarter view, approximately 85 mm product-photography perspective, no wide-angle distortion. Keep every part sharp.
Framing: landscape 4:3. Center the complete product or set; occupy approximately 75–82% of the available frame, with at least 8% safe margin on every edge. Preserve all tips, heads and openings. No cropped parts.
Finish: credible fine machining and grinding texture, controlled metal highlights, clean new components without scratches, oil or rust. Preserve the distinct appearance of steel, bronze, graphite and painted springs.
This is a representative product illustration, not a dimensional drawing or proof of actual stock. Do not invent dimensions, tolerances, certifications, brands or material-grade markings.
If an approved image is supplied later, use it ONLY as a lighting, background and photographic-style reference. The product geometry and object count must follow this job, not the style-reference object.

Asset role: family detail image, linked to the specified configurations.
Product family: Carbide Punches.
Product function: Wear-resistant punches with round or profiled working ends for repeat stamping. Carbide grade and edge geometry are selected together.
Configuration context: Coating and wear options: Choose an uncoated or compatible coated finish on the same punch geometry. The appearance comparison illustrates finish options; select for carbide grade, work material, edge condition and regrinding.
Selected visible subject (takes priority over context): Exactly TWO complete punches with IDENTICAL geometry: long straight round shank, short reduced round tip, modest retaining head, flat circular cutting end. One is uncoated neutral silver-gray; the other has a restrained satin warm gold coating across its working section, with a neutral silver mounting head. Parallel separated arrangement, same size and perspective. Clearly show an optional surface finish on the same structural design, NOT two different shapes. Smooth industrial coating without peeling, flakes or decorative gold texture. No performance claims or text.
Exact physical object count: 2.
Composition: A separated same-family collection, shallow staggered layout, no overlap or hidden working ends. Long axes stay straight.
Text policy: No text, labels, dimensions, arrows, logos, grade numbers or watermarks.
Avoid: No text, logos, watermarks, dimension labels, extra parts, fused geometry or decorative grooves. Also avoid fused geometry, cropped tips, floating shadows or extra objects.
Show only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.
```

### carbide-punches--profiles · 方形与矩形刃口

位置：/zh/products/punch-components/carbide-punches/#configuration-profile
数量：画面 2 件。
提示词状态：已编写
检查：方形与矩形可辨，刃口不能变为螺丝刀或钻头。

```text
Use case: product-mockup.
Create a realistic studio-style product illustration for a precision mold component catalog.
Use a seamless neutral off-white/light-gray background (#f5f6f7), a matte ground plane, soft diffused upper-left light and a restrained contact shadow to the lower right. Neutral white balance, no dramatic gradient or horizon line.
Camera: consistent mildly elevated three-quarter view, approximately 85 mm product-photography perspective, no wide-angle distortion. Keep every part sharp.
Framing: landscape 4:3. Center the complete product or set; occupy approximately 75–82% of the available frame, with at least 8% safe margin on every edge. Preserve all tips, heads and openings. No cropped parts.
Finish: credible fine machining and grinding texture, controlled metal highlights, clean new components without scratches, oil or rust. Preserve the distinct appearance of steel, bronze, graphite and painted springs.
This is a representative product illustration, not a dimensional drawing or proof of actual stock. Do not invent dimensions, tolerances, certifications, brands or material-grade markings.
If an approved image is supplied later, use it ONLY as a lighting, background and photographic-style reference. The product geometry and object count must follow this job, not the style-reference object.

Asset role: family detail image, linked to the specified configurations.
Product family: Carbide Punches.
Product function: Wear-resistant punches with round or profiled working ends for repeat stamping. Carbide grade and edge geometry are selected together.
Configuration context: Square, rectangular and custom profiles: Define the cutting edge from the required hole; non-round tips also need rotational orientation.
Selected visible subject (takes priority over context): Two elongated carbide punches, one square and one rectangular cutting tip, each backed by a substantial round support shank. A close three-quarter view reveals the complete heads and cutting profiles.
Exact physical object count: 2.
Composition: A separated same-family collection, shallow staggered layout, no overlap or hidden working ends. Long axes stay straight.
Text policy: No text, labels, dimensions, arrows, logos, grade numbers or watermarks.
Avoid: No text, dimensions, logos, grade markings, impossible intersections, decorative grooves or invented internal mechanisms. Also avoid fused geometry, cropped tips, floating shadows or extra objects.
Show only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.
```

### carbide-punches--stepped · 硬质合金台阶结构系列

位置：/zh/products/punch-components/carbide-punches/#configuration-stepped
数量：画面 3 件。
提示词状态：待补充不同结构款式
检查：先明确每件不同的结构款式，再生成；不使用同款缩放组合。

```text
Use case: product-mockup.
Create a realistic studio-style product illustration for a precision mold component catalog.
Use a seamless neutral off-white/light-gray background (#f5f6f7), a matte ground plane, soft diffused upper-left light and a restrained contact shadow to the lower right. Neutral white balance, no dramatic gradient or horizon line.
Camera: consistent mildly elevated three-quarter view, approximately 85 mm product-photography perspective, no wide-angle distortion. Keep every part sharp.
Framing: landscape 4:3. Center the complete product or set; occupy approximately 75–82% of the available frame, with at least 8% safe margin on every edge. Preserve all tips, heads and openings. No cropped parts.
Finish: credible fine machining and grinding texture, controlled metal highlights, clean new components without scratches, oil or rust. Preserve the distinct appearance of steel, bronze, graphite and painted springs.
This is a representative product illustration, not a dimensional drawing or proof of actual stock. Do not invent dimensions, tolerances, certifications, brands or material-grade markings.
If an approved image is supplied later, use it ONLY as a lighting, background and photographic-style reference. The product geometry and object count must follow this job, not the style-reference object.

Asset role: family detail image, linked to the specified configurations.
Product family: Carbide Punches.
Product function: Wear-resistant punches with round or profiled working ends for repeat stamping. Carbide grade and edge geometry are selected together.
Configuration context: Stepped and carbide-tipped designs: A larger shank supports the reduced tip; tipped designs require an agreed joint and load path.
Selected visible subject (takes priority over context): solid-carbide stepped punch with a long cylindrical mounting body, one reduced round cutting tip and a mechanically plausible shoulder. Flat tip, no pointed end.
Exact physical object count: 3.
Composition: A separated same-family collection, shallow staggered layout, no overlap or hidden working ends. Long axes stay straight.
Text policy: No text, labels, dimensions, arrows, logos, grade numbers or watermarks.
Avoid: No text, dimensions, logos, grade markings, impossible intersections, decorative grooves or invented internal mechanisms. Also avoid fused geometry, cropped tips, floating shadows or extra objects.
Show only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.
```

### carbide-punches--cutoff · 切断冲头工作端系列

位置：/zh/products/punch-components/carbide-punches/#configuration-cutting
数量：画面 3 件。
提示词状态：待补充不同结构款式
检查：先明确每件不同的结构款式，再生成；不使用同款缩放组合。

```text
Use case: product-mockup.
Create a realistic studio-style product illustration for a precision mold component catalog.
Use a seamless neutral off-white/light-gray background (#f5f6f7), a matte ground plane, soft diffused upper-left light and a restrained contact shadow to the lower right. Neutral white balance, no dramatic gradient or horizon line.
Camera: consistent mildly elevated three-quarter view, approximately 85 mm product-photography perspective, no wide-angle distortion. Keep every part sharp.
Framing: landscape 4:3. Center the complete product or set; occupy approximately 75–82% of the available frame, with at least 8% safe margin on every edge. Preserve all tips, heads and openings. No cropped parts.
Finish: credible fine machining and grinding texture, controlled metal highlights, clean new components without scratches, oil or rust. Preserve the distinct appearance of steel, bronze, graphite and painted springs.
This is a representative product illustration, not a dimensional drawing or proof of actual stock. Do not invent dimensions, tolerances, certifications, brands or material-grade markings.
If an approved image is supplied later, use it ONLY as a lighting, background and photographic-style reference. The product geometry and object count must follow this job, not the style-reference object.

Asset role: family detail image, linked to the specified configurations.
Product family: Carbide Punches.
Product function: Wear-resistant punches with round or profiled working ends for repeat stamping. Carbide grade and edge geometry are selected together.
Configuration context: Cut-off and precision piercing: Define cut-off edges and precision piercing by load and dimensional requirements; precision is not a fixed tolerance claim.
Selected visible subject (takes priority over context): representative carbide cut-off punch with a rectangular supported cutting section, a broad straight end edge and a robust mounting body. Show the working end and the complete mounting section.
Exact physical object count: 3.
Composition: A separated same-family collection, shallow staggered layout, no overlap or hidden working ends. Long axes stay straight.
Text policy: No text, labels, dimensions, arrows, logos, grade numbers or watermarks.
Avoid: No text, dimensions, logos, grade markings, impossible intersections, decorative grooves or invented internal mechanisms. Also avoid fused geometry, cropped tips, floating shadows or extra objects.
Show only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.
```

### hss-punches--square-rectangle · 高速钢方形与矩形冲头

位置：/zh/products/punch-components/hss-punches/#configuration-flat
数量：画面 2 件。
提示词状态：已编写
检查：两种截面清楚，不通过颜色表示不同钢号。

```text
Use case: product-mockup.
Create a realistic studio-style product illustration for a precision mold component catalog.
Use a seamless neutral off-white/light-gray background (#f5f6f7), a matte ground plane, soft diffused upper-left light and a restrained contact shadow to the lower right. Neutral white balance, no dramatic gradient or horizon line.
Camera: consistent mildly elevated three-quarter view, approximately 85 mm product-photography perspective, no wide-angle distortion. Keep every part sharp.
Framing: landscape 4:3. Center the complete product or set; occupy approximately 75–82% of the available frame, with at least 8% safe margin on every edge. Preserve all tips, heads and openings. No cropped parts.
Finish: credible fine machining and grinding texture, controlled metal highlights, clean new components without scratches, oil or rust. Preserve the distinct appearance of steel, bronze, graphite and painted springs.
This is a representative product illustration, not a dimensional drawing or proof of actual stock. Do not invent dimensions, tolerances, certifications, brands or material-grade markings.
If an approved image is supplied later, use it ONLY as a lighting, background and photographic-style reference. The product geometry and object count must follow this job, not the style-reference object.

Asset role: family detail image, linked to the specified configurations.
Product family: HSS Punches.
Product function: High-speed steel punches for cutting duties that need a balance of wear resistance and toughness.
Configuration context: Flat and rectangular punches: Slots and rectangular holes require blade support, straight long edges and controlled orientation. Square punches: Four cutting edges form square holes; match corner radii to the die and part requirements.
Selected visible subject (takes priority over context): Two elongated silver HSS punches with round mounting shafts, one square and one rectangular flat cutting face. Staggered parallel composition without overlap.
Exact physical object count: 2.
Composition: A separated same-family collection, shallow staggered layout, no overlap or hidden working ends. Long axes stay straight.
Text policy: No text, labels, dimensions, arrows, logos, grade numbers or watermarks.
Avoid: No text, dimensions, logos, grade markings, impossible intersections, decorative grooves or invented internal mechanisms. Also avoid fused geometry, cropped tips, floating shadows or extra objects.
Show only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.
```

### hss-punches--blade · 窄扁冲裁工作段系列

位置：/zh/products/punch-components/hss-punches/#configuration-flat
数量：画面 3 件。
提示词状态：待补充不同结构款式
检查：先明确每件不同的结构款式，再生成；不使用同款缩放组合。

```text
Use case: product-mockup.
Create a realistic studio-style product illustration for a precision mold component catalog.
Use a seamless neutral off-white/light-gray background (#f5f6f7), a matte ground plane, soft diffused upper-left light and a restrained contact shadow to the lower right. Neutral white balance, no dramatic gradient or horizon line.
Camera: consistent mildly elevated three-quarter view, approximately 85 mm product-photography perspective, no wide-angle distortion. Keep every part sharp.
Framing: landscape 4:3. Center the complete product or set; occupy approximately 75–82% of the available frame, with at least 8% safe margin on every edge. Preserve all tips, heads and openings. No cropped parts.
Finish: credible fine machining and grinding texture, controlled metal highlights, clean new components without scratches, oil or rust. Preserve the distinct appearance of steel, bronze, graphite and painted springs.
This is a representative product illustration, not a dimensional drawing or proof of actual stock. Do not invent dimensions, tolerances, certifications, brands or material-grade markings.
If an approved image is supplied later, use it ONLY as a lighting, background and photographic-style reference. The product geometry and object count must follow this job, not the style-reference object.

Asset role: family detail image, linked to the specified configurations.
Product family: HSS Punches.
Product function: High-speed steel punches for cutting duties that need a balance of wear resistance and toughness.
Configuration context: Flat and rectangular punches: Slots and rectangular holes require blade support, straight long edges and controlled orientation.
Selected visible subject (takes priority over context): HSS cutting punch with a narrow flat rectangular working section supported by a long round shank. The thin edge and broad face are both visible; straight flat cutting end.
Exact physical object count: 3.
Composition: A separated same-family collection, shallow staggered layout, no overlap or hidden working ends. Long axes stay straight.
Text policy: No text, labels, dimensions, arrows, logos, grade numbers or watermarks.
Avoid: No text, dimensions, logos, grade markings, impossible intersections, decorative grooves or invented internal mechanisms. Also avoid fused geometry, cropped tips, floating shadows or extra objects.
Show only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.
```

### hss-punches--stepped · 高速钢单台阶冲头系列

位置：/zh/products/punch-components/hss-punches/#configuration-stepped
数量：画面 3 件。
提示词状态：待补充不同结构款式
检查：先明确每件不同的结构款式，再生成；不使用同款缩放组合。

```text
Use case: product-mockup.
Create a realistic studio-style product illustration for a precision mold component catalog.
Use a seamless neutral off-white/light-gray background (#f5f6f7), a matte ground plane, soft diffused upper-left light and a restrained contact shadow to the lower right. Neutral white balance, no dramatic gradient or horizon line.
Camera: consistent mildly elevated three-quarter view, approximately 85 mm product-photography perspective, no wide-angle distortion. Keep every part sharp.
Framing: landscape 4:3. Center the complete product or set; occupy approximately 75–82% of the available frame, with at least 8% safe margin on every edge. Preserve all tips, heads and openings. No cropped parts.
Finish: credible fine machining and grinding texture, controlled metal highlights, clean new components without scratches, oil or rust. Preserve the distinct appearance of steel, bronze, graphite and painted springs.
This is a representative product illustration, not a dimensional drawing or proof of actual stock. Do not invent dimensions, tolerances, certifications, brands or material-grade markings.
If an approved image is supplied later, use it ONLY as a lighting, background and photographic-style reference. The product geometry and object count must follow this job, not the style-reference object.

Asset role: family detail image, linked to the specified configurations.
Product family: HSS Punches.
Product function: High-speed steel punches for cutting duties that need a balance of wear resistance and toughness.
Configuration context: Stepped HSS punches: A larger body supports a reduced tip with one or more steps; steps do not imply piercing several hole diameters at once.
Selected visible subject (takes priority over context): elongated silver HSS punch with a modest retaining head, substantial round support shank and a shorter reduced round tip, all coaxial.
Exact physical object count: 3.
Composition: A separated same-family collection, shallow staggered layout, no overlap or hidden working ends. Long axes stay straight.
Text policy: No text, labels, dimensions, arrows, logos, grade numbers or watermarks.
Avoid: No text, dimensions, logos, grade markings, impossible intersections, decorative grooves or invented internal mechanisms. Also avoid fused geometry, cropped tips, floating shadows or extra objects.
Show only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.
```

### hss-punches--special · 高速钢六角与八角冲头

位置：/zh/products/punch-components/hss-punches/#configuration-profile
数量：画面 2 件。
提示词状态：已编写
检查：逐一核对六边和八边；边数不对即不发布。

```text
Use case: product-mockup.
Create a realistic studio-style product illustration for a precision mold component catalog.
Use a seamless neutral off-white/light-gray background (#f5f6f7), a matte ground plane, soft diffused upper-left light and a restrained contact shadow to the lower right. Neutral white balance, no dramatic gradient or horizon line.
Camera: consistent mildly elevated three-quarter view, approximately 85 mm product-photography perspective, no wide-angle distortion. Keep every part sharp.
Framing: landscape 4:3. Center the complete product or set; occupy approximately 75–82% of the available frame, with at least 8% safe margin on every edge. Preserve all tips, heads and openings. No cropped parts.
Finish: credible fine machining and grinding texture, controlled metal highlights, clean new components without scratches, oil or rust. Preserve the distinct appearance of steel, bronze, graphite and painted springs.
This is a representative product illustration, not a dimensional drawing or proof of actual stock. Do not invent dimensions, tolerances, certifications, brands or material-grade markings.
If an approved image is supplied later, use it ONLY as a lighting, background and photographic-style reference. The product geometry and object count must follow this job, not the style-reference object.

Asset role: family detail image, linked to the specified configurations.
Product family: HSS Punches.
Product function: High-speed steel punches for cutting duties that need a balance of wear resistance and toughness.
Configuration context: Hexagonal and special profiles: Custom tips follow the part outline, with orientation datums and specified corner details.
Selected visible subject (takes priority over context): Two HSS profile punches with complete round shanks and heads; one six-sided and one eight-sided flat cutting profile, visible from an elevated end-facing perspective.
Exact physical object count: 2.
Composition: A separated same-family collection, shallow staggered layout, no overlap or hidden working ends. Long axes stay straight.
Text policy: No text, labels, dimensions, arrows, logos, grade numbers or watermarks.
Avoid: No text, dimensions, logos, grade markings, impossible intersections, decorative grooves or invented internal mechanisms. Also avoid fused geometry, cropped tips, floating shadows or extra objects.
Show only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.
```

### stepped-punches--square · 台阶方冲系列

位置：/zh/products/punch-components/stepped-punches/#configuration-square
数量：画面 3 件。
提示词状态：待补充不同结构款式
检查：先明确每件不同的结构款式，再生成；不使用同款缩放组合。

```text
Use case: product-mockup.
Create a realistic studio-style product illustration for a precision mold component catalog.
Use a seamless neutral off-white/light-gray background (#f5f6f7), a matte ground plane, soft diffused upper-left light and a restrained contact shadow to the lower right. Neutral white balance, no dramatic gradient or horizon line.
Camera: consistent mildly elevated three-quarter view, approximately 85 mm product-photography perspective, no wide-angle distortion. Keep every part sharp.
Framing: landscape 4:3. Center the complete product or set; occupy approximately 75–82% of the available frame, with at least 8% safe margin on every edge. Preserve all tips, heads and openings. No cropped parts.
Finish: credible fine machining and grinding texture, controlled metal highlights, clean new components without scratches, oil or rust. Preserve the distinct appearance of steel, bronze, graphite and painted springs.
This is a representative product illustration, not a dimensional drawing or proof of actual stock. Do not invent dimensions, tolerances, certifications, brands or material-grade markings.
If an approved image is supplied later, use it ONLY as a lighting, background and photographic-style reference. The product geometry and object count must follow this job, not the style-reference object.

Asset role: family detail image, linked to the specified configurations.
Product family: Stepped Punches.
Product function: Punches with different shank and working diameters. Shoulder position and transition radii are defined by the tool drawing.
Configuration context: Stepped square punch: A round shank transitions to a square tip with controlled orientation and root support.
Selected visible subject (takes priority over context): elongated stepped punch: round retaining head and cylindrical support shank transitioning to a shorter square working section. Show the flat square end and two side faces.
Exact physical object count: 3.
Composition: A separated same-family collection, shallow staggered layout, no overlap or hidden working ends. Long axes stay straight.
Text policy: No text, labels, dimensions, arrows, logos, grade numbers or watermarks.
Avoid: No text, dimensions, logos, grade markings, impossible intersections, decorative grooves or invented internal mechanisms. Also avoid fused geometry, cropped tips, floating shadows or extra objects.
Show only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.
```

### stepped-punches--special · 台阶异形与长圆冲头

位置：/zh/products/punch-components/stepped-punches/#configuration-custom
数量：画面 2 件。
提示词状态：已编写
检查：长圆直边与半圆端清晰，不能混成椭圆。

```text
Use case: product-mockup.
Create a realistic studio-style product illustration for a precision mold component catalog.
Use a seamless neutral off-white/light-gray background (#f5f6f7), a matte ground plane, soft diffused upper-left light and a restrained contact shadow to the lower right. Neutral white balance, no dramatic gradient or horizon line.
Camera: consistent mildly elevated three-quarter view, approximately 85 mm product-photography perspective, no wide-angle distortion. Keep every part sharp.
Framing: landscape 4:3. Center the complete product or set; occupy approximately 75–82% of the available frame, with at least 8% safe margin on every edge. Preserve all tips, heads and openings. No cropped parts.
Finish: credible fine machining and grinding texture, controlled metal highlights, clean new components without scratches, oil or rust. Preserve the distinct appearance of steel, bronze, graphite and painted springs.
This is a representative product illustration, not a dimensional drawing or proof of actual stock. Do not invent dimensions, tolerances, certifications, brands or material-grade markings.
If an approved image is supplied later, use it ONLY as a lighting, background and photographic-style reference. The product geometry and object count must follow this job, not the style-reference object.

Asset role: family detail image, linked to the specified configurations.
Product family: Stepped Punches.
Product function: Punches with different shank and working diameters. Shoulder position and transition radii are defined by the tool drawing.
Configuration context: Stepped profile and slot punches: Hexagonal, obround or custom tips need a profile drawing in addition to reduced-section dimensions.
Selected visible subject (takes priority over context): Two stepped punches with round support shanks; one has a hexagonal tip, one a straight-sided obround tip with semicircular ends. Flat cutting faces and entire heads visible.
Exact physical object count: 2.
Composition: A separated same-family collection, shallow staggered layout, no overlap or hidden working ends. Long axes stay straight.
Text policy: No text, labels, dimensions, arrows, logos, grade numbers or watermarks.
Avoid: No text, dimensions, logos, grade markings, impossible intersections, decorative grooves or invented internal mechanisms. Also avoid fused geometry, cropped tips, floating shadows or extra objects.
Show only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.
```

### stepped-punches--multi · 多级台阶结构系列

位置：/zh/products/punch-components/stepped-punches/#configuration-multiple
数量：画面 3 件。
提示词状态：待补充不同结构款式
检查：先明确每件不同的结构款式，再生成；不使用同款缩放组合。

```text
Use case: product-mockup.
Create a realistic studio-style product illustration for a precision mold component catalog.
Use a seamless neutral off-white/light-gray background (#f5f6f7), a matte ground plane, soft diffused upper-left light and a restrained contact shadow to the lower right. Neutral white balance, no dramatic gradient or horizon line.
Camera: consistent mildly elevated three-quarter view, approximately 85 mm product-photography perspective, no wide-angle distortion. Keep every part sharp.
Framing: landscape 4:3. Center the complete product or set; occupy approximately 75–82% of the available frame, with at least 8% safe margin on every edge. Preserve all tips, heads and openings. No cropped parts.
Finish: credible fine machining and grinding texture, controlled metal highlights, clean new components without scratches, oil or rust. Preserve the distinct appearance of steel, bronze, graphite and painted springs.
This is a representative product illustration, not a dimensional drawing or proof of actual stock. Do not invent dimensions, tolerances, certifications, brands or material-grade markings.
If an approved image is supplied later, use it ONLY as a lighting, background and photographic-style reference. The product geometry and object count must follow this job, not the style-reference object.

Asset role: family detail image, linked to the specified configurations.
Product family: Stepped Punches.
Product function: Punches with different shank and working diameters. Shoulder position and transition radii are defined by the tool drawing.
Configuration context: Multi-step punch: Multiple coaxial sections suit different plate and support positions; dimension every shoulder.
Selected visible subject (takes priority over context): elongated multi-step punch with exactly three coaxial cylindrical shaft diameters decreasing toward a flat round working tip, plus one modest retaining head. Side-biased view showing all shoulders.
Exact physical object count: 3.
Composition: A separated same-family collection, shallow staggered layout, no overlap or hidden working ends. Long axes stay straight.
Text policy: No text, labels, dimensions, arrows, logos, grade numbers or watermarks.
Avoid: No text, dimensions, logos, grade markings, impossible intersections, decorative grooves or invented internal mechanisms. Also avoid fused geometry, cropped tips, floating shadows or extra objects.
Show only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.
```

### stamping-die-punches--cutoff · 冲压切断件系列

位置：/zh/products/punch-components/stamping-die-punches/#configuration-cutoff
数量：画面 3 件。
提示词状态：待补充不同结构款式
检查：先明确每件不同的结构款式，再生成；不使用同款缩放组合。

```text
Use case: product-mockup.
Create a realistic studio-style product illustration for a precision mold component catalog.
Use a seamless neutral off-white/light-gray background (#f5f6f7), a matte ground plane, soft diffused upper-left light and a restrained contact shadow to the lower right. Neutral white balance, no dramatic gradient or horizon line.
Camera: consistent mildly elevated three-quarter view, approximately 85 mm product-photography perspective, no wide-angle distortion. Keep every part sharp.
Framing: landscape 4:3. Center the complete product or set; occupy approximately 75–82% of the available frame, with at least 8% safe margin on every edge. Preserve all tips, heads and openings. No cropped parts.
Finish: credible fine machining and grinding texture, controlled metal highlights, clean new components without scratches, oil or rust. Preserve the distinct appearance of steel, bronze, graphite and painted springs.
This is a representative product illustration, not a dimensional drawing or proof of actual stock. Do not invent dimensions, tolerances, certifications, brands or material-grade markings.
If an approved image is supplied later, use it ONLY as a lighting, background and photographic-style reference. The product geometry and object count must follow this job, not the style-reference object.

Asset role: family detail image, linked to the specified configurations.
Product family: Stamping Die Punches.
Product function: Replaceable cutting punches made around the hole profile, die clearance and mounting arrangement of your stamping tool.
Configuration context: Cut-off and trimming punches: For separation or edge trimming, match edge direction and loaded area to the die station.
Selected visible subject (takes priority over context): representative steel cut-off punch with a stout rectangular cutting section and a supported mounting body. Flat straight cutting end, no decorative bevels or drill features.
Exact physical object count: 3.
Composition: A separated same-family collection, shallow staggered layout, no overlap or hidden working ends. Long axes stay straight.
Text policy: No text, labels, dimensions, arrows, logos, grade numbers or watermarks.
Avoid: No text, dimensions, logos, grade markings, impossible intersections, decorative grooves or invented internal mechanisms. Also avoid fused geometry, cropped tips, floating shadows or extra objects.
Show only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.
```

### stamping-die-punches--mount · 可更换冲裁件安装端系列

位置：/zh/products/punch-components/stamping-die-punches/#configuration-replacement
数量：画面 3 件。
提示词状态：待补充不同结构款式
检查：先明确每件不同的结构款式，再生成；不使用同款缩放组合。

```text
Use case: product-mockup.
Create a realistic studio-style product illustration for a precision mold component catalog.
Use a seamless neutral off-white/light-gray background (#f5f6f7), a matte ground plane, soft diffused upper-left light and a restrained contact shadow to the lower right. Neutral white balance, no dramatic gradient or horizon line.
Camera: consistent mildly elevated three-quarter view, approximately 85 mm product-photography perspective, no wide-angle distortion. Keep every part sharp.
Framing: landscape 4:3. Center the complete product or set; occupy approximately 75–82% of the available frame, with at least 8% safe margin on every edge. Preserve all tips, heads and openings. No cropped parts.
Finish: credible fine machining and grinding texture, controlled metal highlights, clean new components without scratches, oil or rust. Preserve the distinct appearance of steel, bronze, graphite and painted springs.
This is a representative product illustration, not a dimensional drawing or proof of actual stock. Do not invent dimensions, tolerances, certifications, brands or material-grade markings.
If an approved image is supplied later, use it ONLY as a lighting, background and photographic-style reference. The product geometry and object count must follow this job, not the style-reference object.

Asset role: family detail image, linked to the specified configurations.
Product family: Stamping Die Punches.
Product function: Replaceable cutting punches made around the hole profile, die clearance and mounting arrangement of your stamping tool.
Configuration context: Progressive-die replacement punches: Match shoulder positions, head, working length and fits to the existing die station.
Selected visible subject (takes priority over context): replacement stamping punch, elongated round mounting shank with a clear retaining head, locating flat on the mounting shank and shorter round cutting tip. Whole part visible.
Exact physical object count: 3.
Composition: A separated same-family collection, shallow staggered layout, no overlap or hidden working ends. Long axes stay straight.
Text policy: No text, labels, dimensions, arrows, logos, grade numbers or watermarks.
Avoid: No text, dimensions, logos, grade markings, impossible intersections, decorative grooves or invented internal mechanisms. Also avoid fused geometry, cropped tips, floating shadows or extra objects.
Show only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.
```

### stamping-die-punches--slot · 长圆槽冲头系列

位置：/zh/products/punch-components/stamping-die-punches/#configuration-profile
数量：画面 3 件。
提示词状态：待补充不同结构款式
检查：先明确每件不同的结构款式，再生成；不使用同款缩放组合。

```text
Use case: product-mockup.
Create a realistic studio-style product illustration for a precision mold component catalog.
Use a seamless neutral off-white/light-gray background (#f5f6f7), a matte ground plane, soft diffused upper-left light and a restrained contact shadow to the lower right. Neutral white balance, no dramatic gradient or horizon line.
Camera: consistent mildly elevated three-quarter view, approximately 85 mm product-photography perspective, no wide-angle distortion. Keep every part sharp.
Framing: landscape 4:3. Center the complete product or set; occupy approximately 75–82% of the available frame, with at least 8% safe margin on every edge. Preserve all tips, heads and openings. No cropped parts.
Finish: credible fine machining and grinding texture, controlled metal highlights, clean new components without scratches, oil or rust. Preserve the distinct appearance of steel, bronze, graphite and painted springs.
This is a representative product illustration, not a dimensional drawing or proof of actual stock. Do not invent dimensions, tolerances, certifications, brands or material-grade markings.
If an approved image is supplied later, use it ONLY as a lighting, background and photographic-style reference. The product geometry and object count must follow this job, not the style-reference object.

Asset role: family detail image, linked to the specified configurations.
Product family: Stamping Die Punches.
Product function: Replaceable cutting punches made around the hole profile, die clearance and mounting arrangement of your stamping tool.
Configuration context: Profile and slot punches: Define rectangular, obround and irregular tips with a closed profile and orientation datum.
Selected visible subject (takes priority over context): supported obround stamping punch, with two straight parallel sides and semicircular ends on its flat cutting face, cylindrical support shank and retaining head. Elevated view emphasizes the tip without cropping the body.
Exact physical object count: 3.
Composition: A separated same-family collection, shallow staggered layout, no overlap or hidden working ends. Long axes stay straight.
Text policy: No text, labels, dimensions, arrows, logos, grade numbers or watermarks.
Avoid: No text, dimensions, logos, grade markings, impossible intersections, decorative grooves or invented internal mechanisms. Also avoid fused geometry, cropped tips, floating shadows or extra objects.
Show only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.
```

### forming-punches--polygon · 方形与六角轮廓

位置：/zh/products/punch-components/forming-punches/#configuration-polygon
数量：画面 2 件。
提示词状态：已编写
检查：几何边数与直线度正确。

```text
Use case: product-mockup.
Create a realistic studio-style product illustration for a precision mold component catalog.
Use a seamless neutral off-white/light-gray background (#f5f6f7), a matte ground plane, soft diffused upper-left light and a restrained contact shadow to the lower right. Neutral white balance, no dramatic gradient or horizon line.
Camera: consistent mildly elevated three-quarter view, approximately 85 mm product-photography perspective, no wide-angle distortion. Keep every part sharp.
Framing: landscape 4:3. Center the complete product or set; occupy approximately 75–82% of the available frame, with at least 8% safe margin on every edge. Preserve all tips, heads and openings. No cropped parts.
Finish: credible fine machining and grinding texture, controlled metal highlights, clean new components without scratches, oil or rust. Preserve the distinct appearance of steel, bronze, graphite and painted springs.
This is a representative product illustration, not a dimensional drawing or proof of actual stock. Do not invent dimensions, tolerances, certifications, brands or material-grade markings.
If an approved image is supplied later, use it ONLY as a lighting, background and photographic-style reference. The product geometry and object count must follow this job, not the style-reference object.

Asset role: family detail image, linked to the specified configurations.
Product family: Forming & Profile Punches.
Product function: Non-round and contoured working ends for shaped openings or forming operations. The working surface is defined from your drawing.
Configuration context: Hexagonal, square and polygonal: For non-round holes, specify each side and mounting orientation.
Selected visible subject (takes priority over context): Two custom steel profile punches, one square and one hexagonal, with substantial cylindrical shanks and separate distinct flat end faces.
Exact physical object count: 2.
Composition: A separated same-family collection, shallow staggered layout, no overlap or hidden working ends. Long axes stay straight.
Text policy: No text, labels, dimensions, arrows, logos, grade numbers or watermarks.
Avoid: No text, dimensions, logos, grade markings, impossible intersections, decorative grooves or invented internal mechanisms. Also avoid fused geometry, cropped tips, floating shadows or extra objects.
Show only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.
```

### forming-punches--oval-obround · 椭圆与长圆对比

位置：/zh/products/punch-components/forming-punches/#configuration-obround
数量：画面 2 件。
提示词状态：已编写
检查：两种轮廓必须确实不同。

```text
Use case: product-mockup.
Create a realistic studio-style product illustration for a precision mold component catalog.
Use a seamless neutral off-white/light-gray background (#f5f6f7), a matte ground plane, soft diffused upper-left light and a restrained contact shadow to the lower right. Neutral white balance, no dramatic gradient or horizon line.
Camera: consistent mildly elevated three-quarter view, approximately 85 mm product-photography perspective, no wide-angle distortion. Keep every part sharp.
Framing: landscape 4:3. Center the complete product or set; occupy approximately 75–82% of the available frame, with at least 8% safe margin on every edge. Preserve all tips, heads and openings. No cropped parts.
Finish: credible fine machining and grinding texture, controlled metal highlights, clean new components without scratches, oil or rust. Preserve the distinct appearance of steel, bronze, graphite and painted springs.
This is a representative product illustration, not a dimensional drawing or proof of actual stock. Do not invent dimensions, tolerances, certifications, brands or material-grade markings.
If an approved image is supplied later, use it ONLY as a lighting, background and photographic-style reference. The product geometry and object count must follow this job, not the style-reference object.

Asset role: family detail image, linked to the specified configurations.
Product family: Forming & Profile Punches.
Product function: Non-round and contoured working ends for shaped openings or forming operations. The working surface is defined from your drawing.
Configuration context: Oval and obround profiles: Axes, slot width and end radii define the exact hole geometry.
Selected visible subject (takes priority over context): Two complete elongated steel punches. One has a true elliptical tip; the other a straight-sided obround tip with semicircular ends. Equal visual prominence, clearly visible working faces.
Exact physical object count: 2.
Composition: A separated same-family collection, shallow staggered layout, no overlap or hidden working ends. Long axes stay straight.
Text policy: No text, labels, dimensions, arrows, logos, grade numbers or watermarks.
Avoid: No text, dimensions, logos, grade markings, impossible intersections, decorative grooves or invented internal mechanisms. Also avoid fused geometry, cropped tips, floating shadows or extra objects.
Show only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.
```

### forming-punches--contour · 曲面成型与斜面工作端

位置：/zh/products/punch-components/forming-punches/#configuration-angled
数量：画面 2 件。
提示词状态：已编写
检查：圆弧成型端不应生成锋利尖刺，斜面件不能弯曲。

```text
Use case: product-mockup.
Create a realistic studio-style product illustration for a precision mold component catalog.
Use a seamless neutral off-white/light-gray background (#f5f6f7), a matte ground plane, soft diffused upper-left light and a restrained contact shadow to the lower right. Neutral white balance, no dramatic gradient or horizon line.
Camera: consistent mildly elevated three-quarter view, approximately 85 mm product-photography perspective, no wide-angle distortion. Keep every part sharp.
Framing: landscape 4:3. Center the complete product or set; occupy approximately 75–82% of the available frame, with at least 8% safe margin on every edge. Preserve all tips, heads and openings. No cropped parts.
Finish: credible fine machining and grinding texture, controlled metal highlights, clean new components without scratches, oil or rust. Preserve the distinct appearance of steel, bronze, graphite and painted springs.
This is a representative product illustration, not a dimensional drawing or proof of actual stock. Do not invent dimensions, tolerances, certifications, brands or material-grade markings.
If an approved image is supplied later, use it ONLY as a lighting, background and photographic-style reference. The product geometry and object count must follow this job, not the style-reference object.

Asset role: family detail image, linked to the specified configurations.
Product family: Forming & Profile Punches.
Product function: Non-round and contoured working ends for shaped openings or forming operations. The working surface is defined from your drawing.
Configuration context: Angled and offset working ends: Angled or offset tips require review of side loads and support. Contoured forming noses: For pressing or local forming, focus on the contact surface and forming depth.
Selected visible subject (takes priority over context): Two supported forming punches: one has a broad smooth convex rounded forming nose, the other a simple angled planar working face on a robust cylindrical shank. Separate complete pieces.
Exact physical object count: 2.
Composition: A separated same-family collection, shallow staggered layout, no overlap or hidden working ends. Long axes stay straight.
Text policy: No text, labels, dimensions, arrows, logos, grade numbers or watermarks.
Avoid: No text, dimensions, logos, grade markings, impossible intersections, decorative grooves or invented internal mechanisms. Also avoid fused geometry, cropped tips, floating shadows or extra objects.
Show only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.
```

### a-type-punches--flat · 带削边安装位的圆冲系列

位置：/zh/products/punch-components/a-type-punches/#configuration-flat
数量：画面 3 件。
提示词状态：待补充不同结构款式
检查：先明确每件不同的结构款式，再生成；不使用同款缩放组合。

```text
Use case: product-mockup.
Create a realistic studio-style product illustration for a precision mold component catalog.
Use a seamless neutral off-white/light-gray background (#f5f6f7), a matte ground plane, soft diffused upper-left light and a restrained contact shadow to the lower right. Neutral white balance, no dramatic gradient or horizon line.
Camera: consistent mildly elevated three-quarter view, approximately 85 mm product-photography perspective, no wide-angle distortion. Keep every part sharp.
Framing: landscape 4:3. Center the complete product or set; occupy approximately 75–82% of the available frame, with at least 8% safe margin on every edge. Preserve all tips, heads and openings. No cropped parts.
Finish: credible fine machining and grinding texture, controlled metal highlights, clean new components without scratches, oil or rust. Preserve the distinct appearance of steel, bronze, graphite and painted springs.
This is a representative product illustration, not a dimensional drawing or proof of actual stock. Do not invent dimensions, tolerances, certifications, brands or material-grade markings.
If an approved image is supplied later, use it ONLY as a lighting, background and photographic-style reference. The product geometry and object count must follow this job, not the style-reference object.

Asset role: family detail image, linked to the specified configurations.
Product family: Type A Stepped Punches.
Product function: Type A stepped punches include single-step, multi-stage and tapered-shoulder designs. Select the construction by working profile, support and mounting requirements.
Configuration context: Flatted or anti-rotation version: Flats provide orientation or mounting clearance and must reference the working end.
Selected visible subject (takes priority over context): Type A stepped round punch with a modest retaining head, thick support shank, and a distinctly reduced round working tip with a flat end face. Add a shallow locating flat on the mounting shank only. Preserve the visible diameter step between support shank and working tip. No standard designation.
Exact physical object count: 3.
Composition: A separated same-family collection, shallow staggered layout, no overlap or hidden working ends. Long axes stay straight.
Text policy: No text, labels, dimensions, arrows, logos, grade numbers or watermarks.
Avoid: No text, dimensions, logos, grade markings, impossible intersections, decorative grooves or invented internal mechanisms. Also avoid fused geometry, cropped tips, floating shadows or extra objects.
Show only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.
```

### tableting-punches--cup-shapes · 三种压片冲面系列

位置：/zh/products/punch-components/tableting-punches/#configuration-upper
数量：画面 3 件。
提示词状态：已编写
检查：冲面是浅凹面，不是实心平冲裁刃；不虚构压机型号。

```text
Use case: product-mockup.
Create a realistic studio-style product illustration for a precision mold component catalog.
Use a seamless neutral off-white/light-gray background (#f5f6f7), a matte ground plane, soft diffused upper-left light and a restrained contact shadow to the lower right. Neutral white balance, no dramatic gradient or horizon line.
Camera: consistent mildly elevated three-quarter view, approximately 85 mm product-photography perspective, no wide-angle distortion. Keep every part sharp.
Framing: landscape 4:3. Center the complete product or set; occupy approximately 75–82% of the available frame, with at least 8% safe margin on every edge. Preserve all tips, heads and openings. No cropped parts.
Finish: credible fine machining and grinding texture, controlled metal highlights, clean new components without scratches, oil or rust. Preserve the distinct appearance of steel, bronze, graphite and painted springs.
This is a representative product illustration, not a dimensional drawing or proof of actual stock. Do not invent dimensions, tolerances, certifications, brands or material-grade markings.
If an approved image is supplied later, use it ONLY as a lighting, background and photographic-style reference. The product geometry and object count must follow this job, not the style-reference object.

Asset role: family detail image, linked to the specified configurations.
Product family: Tableting Punches & Dies.
Product function: Matched upper punches, lower punches and dies for powder compaction. Cup geometry and press compatibility need joint review.
Configuration context: Upper punch: Enters the die from above and compresses powder; the cup defines one tablet face. Lower punch: Works with fill depth and compression position, then ejects the compact. Round, oval and custom shapes: Each tablet shape needs matching cups and die bore, with specified concavity and edge geometry.
Selected visible subject (takes priority over context): Exactly three complete representative tablet punches with substantial heads and narrow working tips. Round, elliptical and capsule-shaped shallow concave cups, one each. Show all cups clearly; no tablets.
Exact physical object count: 3.
Composition: A separated same-family collection, shallow staggered layout, no overlap or hidden working ends. Long axes stay straight.
Text policy: No text, labels, dimensions, arrows, logos, grade numbers or watermarks.
Avoid: No text, dimensions, logos, grade markings, impossible intersections, decorative grooves or invented internal mechanisms. Also avoid fused geometry, cropped tips, floating shadows or extra objects.
Show only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.
```

### tableting-punches--score · 分割线冲面系列

位置：/zh/products/punch-components/tableting-punches/#configuration-engraved
数量：画面 3 件。
提示词状态：待补充不同结构款式
检查：先明确每件不同的结构款式，再生成；不使用同款缩放组合。

```text
Use case: product-mockup.
Create a realistic studio-style product illustration for a precision mold component catalog.
Use a seamless neutral off-white/light-gray background (#f5f6f7), a matte ground plane, soft diffused upper-left light and a restrained contact shadow to the lower right. Neutral white balance, no dramatic gradient or horizon line.
Camera: consistent mildly elevated three-quarter view, approximately 85 mm product-photography perspective, no wide-angle distortion. Keep every part sharp.
Framing: landscape 4:3. Center the complete product or set; occupy approximately 75–82% of the available frame, with at least 8% safe margin on every edge. Preserve all tips, heads and openings. No cropped parts.
Finish: credible fine machining and grinding texture, controlled metal highlights, clean new components without scratches, oil or rust. Preserve the distinct appearance of steel, bronze, graphite and painted springs.
This is a representative product illustration, not a dimensional drawing or proof of actual stock. Do not invent dimensions, tolerances, certifications, brands or material-grade markings.
If an approved image is supplied later, use it ONLY as a lighting, background and photographic-style reference. The product geometry and object count must follow this job, not the style-reference object.

Asset role: family detail image, linked to the specified configurations.
Product family: Tableting Punches & Dies.
Product function: Matched upper punches, lower punches and dies for powder compaction. Cup geometry and press compatibility need joint review.
Configuration context: Engraving and score lines: Confirm markings by machinable artwork, depth and release direction.
Selected visible subject (takes priority over context): representative round tablet punch with a shallow concave cup and a single clean raised straight rib across its center, representing tooling that forms a recessed score line. Keep the whole punch visible.
Exact physical object count: 3.
Composition: A separated same-family collection, shallow staggered layout, no overlap or hidden working ends. Long axes stay straight.
Text policy: No text, labels, dimensions, arrows, logos, grade numbers or watermarks.
Avoid: No text, dimensions, logos, grade markings, impossible intersections, decorative grooves or invented internal mechanisms. Also avoid fused geometry, cropped tips, floating shadows or extra objects.
Show only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.
```

### tableting-punches--multi · 双冲尖代表结构系列

位置：/zh/products/punch-components/tableting-punches/#configuration-multi-tip
数量：画面 3 件。
提示词状态：待补充不同结构款式
检查：先明确每件不同的结构款式，再生成；不使用同款缩放组合。

```text
Use case: product-mockup.
Create a realistic studio-style product illustration for a precision mold component catalog.
Use a seamless neutral off-white/light-gray background (#f5f6f7), a matte ground plane, soft diffused upper-left light and a restrained contact shadow to the lower right. Neutral white balance, no dramatic gradient or horizon line.
Camera: consistent mildly elevated three-quarter view, approximately 85 mm product-photography perspective, no wide-angle distortion. Keep every part sharp.
Framing: landscape 4:3. Center the complete product or set; occupy approximately 75–82% of the available frame, with at least 8% safe margin on every edge. Preserve all tips, heads and openings. No cropped parts.
Finish: credible fine machining and grinding texture, controlled metal highlights, clean new components without scratches, oil or rust. Preserve the distinct appearance of steel, bronze, graphite and painted springs.
This is a representative product illustration, not a dimensional drawing or proof of actual stock. Do not invent dimensions, tolerances, certifications, brands or material-grade markings.
If an approved image is supplied later, use it ONLY as a lighting, background and photographic-style reference. The product geometry and object count must follow this job, not the style-reference object.

Asset role: family detail image, linked to the specified configurations.
Product family: Tableting Punches & Dies.
Product function: Matched upper punches, lower punches and dies for powder compaction. Cup geometry and press compatibility need joint review.
Configuration context: Multi-tip and press-specific tooling: Multiple tips need matching die bores and checks on press space, load and orientation.
Selected visible subject (takes priority over context): representative multi-tip tablet punch body with exactly two parallel separated cylindrical working tips mounted to one substantial common head/body. Each tip has a shallow round cup. Illustrative external geometry only.
Exact physical object count: 3.
Composition: A separated same-family collection, shallow staggered layout, no overlap or hidden working ends. Long axes stay straight.
Text policy: No text, labels, dimensions, arrows, logos, grade numbers or watermarks.
Avoid: No text, dimensions, logos, grade markings, impossible intersections, decorative grooves or invented internal mechanisms. Also avoid fused geometry, cropped tips, floating shadows or extra objects.
Show only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.
```

