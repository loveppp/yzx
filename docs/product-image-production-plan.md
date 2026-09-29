# 产品图片制作计划

> 由 scripts/prepare-catalog.mjs 从产品目录及 image-briefs.json 生成。修改图片策划请编辑 image-briefs.json；不要直接修改此文件。此计划不调用 API。

## 总量与使用位置

首期 44 张成品构图：36 张产品主图（16 张单件、17 张同系列组合、3 张配套组件），7 张分类组合图，1 张全系列横幅。
36 张主图对应 36 个产品系列；一张图中的零件数量不等于图片数量。列表与详情复用，三种语言复用，不按材质牌号重复出图。
7 张分类图与 1 张横幅用审核通过的主图元素合成，计划不额外调用生图 API。横幅桌面与手机各导出一份，属于同一设计的适配版本，因此至少有 45 个交付文件，但只有 44 个成品构图。WebP/缩略图等导出也不算新的生成任务。
第一期额外详情图为 0 张。网站目前每款只有一个主图位；暂不把每款扩成三张，也不生成钢材堆料、工厂、库存或认证图片。确有解释需求的结构特写可在主图完成后另列第二期，独立确定数量。

## 内容完成状态

36 个产品的中、英、越名称、简介、应用、选型信息和配置选项已检查为非空，材质列表齐全。它们是产品系列介绍，不是已验证的具体型号规格。
36 张主图均已写好中文画面说明、精确零件数量、单件/组合选择、英文完整提示词与重点排错项；8 张合成图均已有来源清单和排版说明。实际出图与审核状态单独记录在 output/product-images/candidates 下，不能仅凭提示词完成状态判断图片通过。
用户提供的三张网站截图只作为构图启发，不再要求用户补充实拍。依据现有商品说明生成代表性产品示意；不宣称复现特定尺寸或真实库存。A 型冲头、气顶阀、压片模等结构未由工程图锁定，采用保守的代表款外观。

## 统一风格与验收

浅灰白无缝背景、左上柔光、右下轻接触阴影、中性白平衡、轻俯视斜侧视角。产品图和分类图为 4:3，主体占画面约 75–82%，四周至少 8% 安全留白。单件长杆可斜放，组合图错落排列且不遮挡关键结构。
统一的是光线、背景、质感和留白，不是把所有产品摆成同一姿势。钢件保持银灰，铜件保持暖铜色，石墨保留深灰嵌块，弹簧按选定系列展示涂装；不能从外观判定钢材牌号。
先批准第一张风格样图，再对照后续图。相同提示词不能保证完全一致；通过背景处理、色调校正和人工验收统一。每次只请求 1 张，失败或超时即停，不自动重复付费请求。
验收先看结构：轴线、台阶、孔洞、壁厚、配合关系和数量，再看美观。日期章的功能数字需逐字核对，不能使用乱码。手机两列卡片仍需看得清主要结构；横幅在手机上重新排版，不强行裁掉长杆。
上线时保留“AI 产品示意，具体结构以确认图纸为准”的页面说明；不得以实际产品摄影或尺寸证明的名义展示。

## 分步执行

0. 密钥只保留在本地 .env；单图草稿入口 scripts/image-gen/sample.ts 已支持当前目录、4:3、版本化草稿、实际文件格式识别和零自动重试。费用以供应商控制台为准；不自动上架，不上传用户截图。
1. 仅生成台阶与多级冲头 1 张，画面 3 支，确定钢件风格和组合方式；通过后才继续。
2. 扁顶针 1 张（单件）→ 石墨铜套 1 张（2 件）→ 矩形模具弹簧 1 张（5 件），每张单独生成、单独确认。四张样图计入 36 张，不额外增加数量。
3. 按冲头 → 顶出 → 导向 → 弹簧 → 模具辅助件 → 铜套耐磨件 → 定位销顺序补齐其余 32 张，每个审核批次最多 2–3 张，实际请求串行执行。复杂组件放在相应类别的最后。
4. 每类主图通过后合成该类分类图；最后合成全系列横幅，并导出手机构图。提取边缘不干净时采用规整的产品图拼版，不让 AI 重新虚构已确认的零件。
5. 仅把通过审核的成品接入网站。产品主图已有 image 字段；分类图和全系列横幅需要补对应显示位置，当前尚未接入。电脑与手机检查通过后再继续下一批。

36 是成功交付的产品主图目标，不是费用承诺或自动执行次数。重做次数不预先计入；不满意时只处理该图。

## 按类别的完整清单

### 冲针与冲头：7 张主图 + 1 张分类图 = 8 张

- **硬质合金冲头（钨钢）**：1 张同系列组合图，画面 3 件。3 支硬质合金冲头：两支圆形工作端、一支方形工作端，短而有支撑的刃口，深银灰色磨削表面。
- **高速钢冲头**：1 张同系列组合图，画面 3 件。3 支高速钢冲头，采用不同长度和工作直径的圆形冲裁结构，统一银灰色。
- **台阶与多级冲头**：1 张同系列组合图，画面 3 件。3 支台阶冲头：单台阶、多级缩径、T 形安装头各一支，工作端平整，错落但不遮挡台阶。
- **冲压模冲头**：1 张同系列组合图，画面 3 件。3 支冲压模冲头，圆形、矩形、长圆工作端各一支，展示不同孔型。
- **异形与成型冲头**：1 张同系列组合图，画面 3 件。3 支异形冲头：六角、椭圆、圆滑曲面成型端各一支，工作轮廓可辨。
- **A 型冲头**：1 张单件图，画面 1 件。1 支代表性带头圆冲，展示安装头、圆柱杆与圆形工作端；不声称某一标准系列。
- **压片冲模**：1 张配套组件图，画面 3 件。1 套压片冲模：上冲、下冲、中模共 3 件，平行分开摆放，展示圆形浅凹冲面与中模通孔。

分类图：6 个代表元素，台阶与异形冲头居中，圆冲两侧，压片中模在前；选用已通过主图中的独立元素，不堆满几十支。

### 顶出组件：7 张主图 + 1 张分类图 = 8 张

- **直身顶针**：1 张同系列组合图，画面 3 件。3 支直身顶针，长度适度变化，圆杆直径均匀、尾部扁圆头，顶出端平整。
- **带肩顶针**：1 张单件图，画面 1 件。1 支带肩顶针，头部附近有清晰加粗定位肩，后接长直顶出杆。
- **台阶顶针**：1 张同系列组合图，画面 2 件。2 支台阶顶针，粗支撑杆连接细顶出端，展示不同缩径长度。
- **扁顶针**：1 张单件图，画面 1 件。1 支细长扁顶针，较长圆杆平顺过渡到窄薄矩形扁位；扁位宽度接近杆径，斜向摆放，同时看见宽面与厚度。
- **方顶针**：1 张单件图，画面 1 件。1 支方顶针，方形工作段的两个侧面和端面可见，后接圆杆及安装头。
- **司筒与顶出套筒**：1 张同系列组合图，画面 2 件。2 支司筒，一支直身、一支台阶，均展示贯通内孔与合理壁厚。
- **气顶阀**：1 张单件图，画面 1 件。1 个闭合状态气顶阀，紧凑圆柱阀体及齐平圆阀面，展示模具安装件外形。

分类图：7 个代表元素，长杆后排，司筒及气顶阀前排；扁顶针宽面、方顶针截面和司筒开口均保留。

### 导向组件：6 张主图 + 1 张分类图 = 7 张

- **导柱**：1 张同系列组合图，画面 2 件。2 根导柱，长圆柱磨削导向段，后端安装肩部，展示不同长度。
- **滑动导套与钢导套**：1 张单件图，画面 1 件。1 个直身钢导套，厚壁圆筒，斜视可见通孔和端面倒角。
- **法兰导套**：1 张单件图，画面 1 件。1 个法兰钢导套，筒体与法兰一体，突出法兰定位面及贯通内孔。
- **导柱导套组件**：1 张配套组件图，画面 2 件。1 套滑动导向组件：配套导柱与导套共 2 件，分开且同轴对应。
- **滚珠保持架**：1 张单件图，画面 1 件。1 个铜质滚珠保持架，薄壁圆筒架体、规则孔位中的独立钢球，中央贯通。
- **滚珠导套**：1 张单件图，画面 1 件。1 个滚珠导套单元，外部厚壁钢套，开口处露出少量内部滚动元件。

分类图：5 个代表元素，导柱与导套错落排列；裸保持架与完整滚珠导套必须能区分，保留内孔。

### 模具弹簧：2 张主图 + 1 张分类图 = 3 张

- **矩形模具弹簧**：1 张同系列组合图，画面 5 件。5 个矩形线材模具弹簧，黄、蓝、红、绿、棕各一个，分开站立，清晰展示矩形线材。
- **氮气弹簧**：1 张单件图，画面 1 件。1 个紧凑氮气弹簧，黑色圆柱壳体、顶部导向密封圈和伸出的银色活塞杆。

分类图：6 个代表元素，五色矩形弹簧与一个氮气弹簧；仅展示种类，避免用高度或颜色暗示通用负荷排序。

### 浇注与模具辅助件：6 张主图 + 1 张分类图 = 7 张

- **浇口套（唧咀）**：1 张单件图，画面 1 件。1 个浇口套，带头部法兰和筒身，喷嘴侧凹球面入口及中心浇口可见。
- **定位圈**：1 张同系列组合图，画面 2 件。2 个定位圈，平面型和台阶型各一件，中央大孔、环形定位面清楚。
- **模具日期章**：1 张单件图，画面 1 件。1 个日期章，圆柱外套与可调中心镶件，正面能看清月份刻度及指向关系。
- **侧锁与精定位块**：1 张配套组件图，画面 2 件。1 对侧锁，公块与母块共 2 件，分开展示可相互配合的凸台和凹槽。
- **限位螺栓**：1 张单件图，画面 1 件。1 支带肩限位螺栓，圆头内六角、光滑定位肩与较短外螺纹端。
- **拉杆**：1 张同系列组合图，画面 2 件。2 支模具拉杆，一支螺纹端式、一支带肩端式，长直杆与连接端清楚可见。

分类图：7 个实体零件：浇口套、定位圈、日期章、侧锁一对、限位螺栓、拉杆；侧锁保留成对展示。

### 自润滑轴套与耐磨件：4 张主图 + 1 张分类图 = 5 张

- **石墨铜套**：1 张同系列组合图，画面 2 件。2 个石墨铜套，直筒与法兰各一个；内孔轴承工作面清晰可见规则深灰石墨嵌块，两件之间留有明显间距。
- **普通铜套**：1 张单件图，画面 1 件。1 个普通铜套，光孔厚壁圆筒，暖铜色机加工纹理，无石墨点。
- **法兰铜套**：1 张单件图，画面 1 件。1 个普通法兰铜套，突出法兰环面、筒体和中央贯通孔，采用无石墨代表款。
- **耐磨板与滑板**：1 张同系列组合图，画面 2 件。2 块铜合金耐磨板：一块镶石墨、一块带浅油槽，倾斜展示平面和厚度。

分类图：4 个代表元素，石墨铜套、普通铜套、法兰铜套和一块耐磨板；暖铜色统一，保留石墨与普通光面的区别。

### 定位与送料销件：4 张主图 + 1 张分类图 = 5 张

- **精密圆柱销**：1 张同系列组合图，画面 3 件。3 根精密圆柱销，短实心圆柱、两端轻倒角，长度和直径适度变化。
- **螺纹与拔出式定位销**：1 张同系列组合图，画面 2 件。2 根定位销，一根端面内螺纹拔出孔、一根短外螺纹端，定位圆柱面保持光滑。
- **导正销**：1 张同系列组合图，画面 2 件。2 根导正销，圆形导入端和带削边导入端各一支，头部短而圆滑，后接定位段。
- **浮升销与浮料销**：1 张单件图，画面 1 件。1 个代表性浮升销，宽圆形承料头、台阶导向杆，展示承料面，不展示内部弹簧。

分类图：4 个代表元素，圆柱销、内螺纹拔出销、导正销、浮升销；采用少量大主体，避免小尺寸下只剩一堆金属棒。

另加全系列横幅 1 张：10 个代表零件组成全系列展示，至少覆盖 7 大类。采用已审核图中独立元素，疏密有序，金属为主、铜色和弹簧色点缀；不复制截图中的几十件密集阵列。桌面按实际首页文字布局留白，手机另导出紧凑构图且与文字分行。

## 每张主图的完整提示词

### 硬质合金冲头（钨钢） · carbide-punches

网站产品简介：适用于重复冲裁的耐磨冲头，可采用圆形或异形工作端。硬质合金牌号应与刃口结构配合选择。

画面：3 支硬质合金冲头：两支圆形工作端、一支方形工作端，短而有支撑的刃口，深银灰色磨削表面。

重点检查：不要表现成钻头；不添加金色涂层或虚构焊缝。

预定地址：`/images/products/catalog/carbide-punches.webp`

```text
Use case: product-mockup.
Create a realistic studio-style product illustration for a precision mold component catalog.
Use a seamless neutral off-white/light-gray background (#f5f6f7), a matte ground plane, soft diffused upper-left light and a restrained contact shadow to the lower right. Neutral white balance, no dramatic gradient or horizon line.
Camera: consistent mildly elevated three-quarter view, approximately 85 mm product-photography perspective, no wide-angle distortion. Keep every part sharp.
Framing: landscape 4:3. Center the complete product or set; occupy approximately 75–82% of the available frame, with at least 8% safe margin on every edge. Preserve all tips, heads and openings. No cropped parts.
Finish: credible fine machining and grinding texture, controlled metal highlights, clean new components without scratches, oil or rust. Preserve the distinct appearance of steel, bronze, graphite and painted springs.
This is a representative product illustration, not a dimensional drawing or proof of actual stock. Do not invent dimensions, tolerances, certifications, brands or material-grade markings.
If an approved image is supplied later, use it ONLY as a lighting, background and photographic-style reference. The product geometry and object count must follow this job, not the style-reference object.

Asset type: shared product listing and product-detail main image.
Product family: Carbide Punches.
Catalog function (context only): Wear-resistant punches with round or profiled working ends for repeat stamping. Carbide grade and edge geometry are selected together.
Selected visible subject: Exactly three solid-carbide punches: two with round cutting tips of different diameters and one with a square cutting tip. Compact supported cutting ends, cylindrical mounting shanks, cool dark-silver ground surfaces. All pieces separate.
Exact physical object count: 3.
Composition: A small same-family collection in a shallow staggered arrangement. Space silhouettes clearly; no intersections or occlusion of working ends. Long parts may rest in a shallow fan; keep all axes straight. Do not introduce other families or extra duplicates.
Text policy: No text, labels, dimensions, arrows, logos, watermarks or webpage UI anywhere in the image.
Avoid: No drill flutes, gold coating or invented brazed joints. Also avoid fused geometry, physically impossible intersections, duplicate extra parts and floating shadows.
Do not attempt to depict every available catalog material or variant; depict only the selected subject above.
```

### 高速钢冲头 · hss-punches

网站产品简介：兼顾耐磨性与韧性的高速钢冲头，按冲裁材料及使用工况选择牌号。

画面：3 支高速钢冲头，采用不同长度和工作直径的圆形冲裁结构，统一银灰色。

重点检查：不靠颜色区分 SKH51、M2 或粉末钢牌号。

预定地址：`/images/products/catalog/hss-punches.webp`

```text
Use case: product-mockup.
Create a realistic studio-style product illustration for a precision mold component catalog.
Use a seamless neutral off-white/light-gray background (#f5f6f7), a matte ground plane, soft diffused upper-left light and a restrained contact shadow to the lower right. Neutral white balance, no dramatic gradient or horizon line.
Camera: consistent mildly elevated three-quarter view, approximately 85 mm product-photography perspective, no wide-angle distortion. Keep every part sharp.
Framing: landscape 4:3. Center the complete product or set; occupy approximately 75–82% of the available frame, with at least 8% safe margin on every edge. Preserve all tips, heads and openings. No cropped parts.
Finish: credible fine machining and grinding texture, controlled metal highlights, clean new components without scratches, oil or rust. Preserve the distinct appearance of steel, bronze, graphite and painted springs.
This is a representative product illustration, not a dimensional drawing or proof of actual stock. Do not invent dimensions, tolerances, certifications, brands or material-grade markings.
If an approved image is supplied later, use it ONLY as a lighting, background and photographic-style reference. The product geometry and object count must follow this job, not the style-reference object.

Asset type: shared product listing and product-detail main image.
Product family: HSS Punches.
Catalog function (context only): High-speed steel punches for cutting duties that need a balance of wear resistance and toughness.
Selected visible subject: Exactly three high-speed-steel cutting punches, each with a cylindrical shank, a retaining head and a flat-ended round cutting tip; vary length and working diameter moderately. All silver ground metal, no coating.
Exact physical object count: 3.
Composition: A small same-family collection in a shallow staggered arrangement. Space silhouettes clearly; no intersections or occlusion of working ends. Long parts may rest in a shallow fan; keep all axes straight. Do not introduce other families or extra duplicates.
Text policy: No text, labels, dimensions, arrows, logos, watermarks or webpage UI anywhere in the image.
Avoid: Do not encode alloy grades with different colors or add printed grade labels. Also avoid fused geometry, physically impossible intersections, duplicate extra parts and floating shadows.
Do not attempt to depict every available catalog material or variant; depict only the selected subject above.
```

### 台阶与多级冲头 · stepped-punches

网站产品简介：杆部与工作端具有不同直径的冲头，台阶位置与过渡圆角按模具图纸确定。

画面：3 支台阶冲头：单台阶、多级缩径、T 形安装头各一支，工作端平整，错落但不遮挡台阶。

重点检查：不要生成锥形针尖；台阶不能融化或轴线偏移。

预定地址：`/images/products/catalog/stepped-punches.webp`

```text
Use case: product-mockup.
Create a realistic studio-style product illustration for a precision mold component catalog.
Use a seamless neutral off-white/light-gray background (#f5f6f7), a matte ground plane, soft diffused upper-left light and a restrained contact shadow to the lower right. Neutral white balance, no dramatic gradient or horizon line.
Camera: consistent mildly elevated three-quarter view, approximately 85 mm product-photography perspective, no wide-angle distortion. Keep every part sharp.
Framing: landscape 4:3. Center the complete product or set; occupy approximately 75–82% of the available frame, with at least 8% safe margin on every edge. Preserve all tips, heads and openings. No cropped parts.
Finish: credible fine machining and grinding texture, controlled metal highlights, clean new components without scratches, oil or rust. Preserve the distinct appearance of steel, bronze, graphite and painted springs.
This is a representative product illustration, not a dimensional drawing or proof of actual stock. Do not invent dimensions, tolerances, certifications, brands or material-grade markings.
If an approved image is supplied later, use it ONLY as a lighting, background and photographic-style reference. The product geometry and object count must follow this job, not the style-reference object.

Asset type: shared product listing and product-detail main image.
Product family: Stepped Punches.
Catalog function (context only): Punches with different shank and working diameters. Shoulder position and transition radii are defined by the tool drawing.
Selected visible subject: Exactly three stepped cutting punches: one single-shoulder punch, one with two diameter reductions, and one reduced-tip punch with a disk-shaped T retaining head. Straight coaxial cylindrical sections, smaller working tip than support shank, flat cutting end faces and restrained transition radii.
Exact physical object count: 3.
Composition: A small same-family collection in a shallow staggered arrangement. Space silhouettes clearly; no intersections or occlusion of working ends. Long parts may rest in a shallow fan; keep all axes straight. Do not introduce other families or extra duplicates.
Text policy: No text, labels, dimensions, arrows, logos, watermarks or webpage UI anywhere in the image.
Avoid: No needle points, melted shoulders, bent shafts or non-coaxial steps. Also avoid fused geometry, physically impossible intersections, duplicate extra parts and floating shadows.
Do not attempt to depict every available catalog material or variant; depict only the selected subject above.
```

### 冲压模冲头 · stamping-die-punches

网站产品简介：围绕孔型、凹模间隙及安装结构设计的可更换冲裁零件。

画面：3 支冲压模冲头，圆形、矩形、长圆工作端各一支，展示不同孔型。

重点检查：不混入顶针、弹簧或整副模具。

预定地址：`/images/products/catalog/stamping-die-punches.webp`

```text
Use case: product-mockup.
Create a realistic studio-style product illustration for a precision mold component catalog.
Use a seamless neutral off-white/light-gray background (#f5f6f7), a matte ground plane, soft diffused upper-left light and a restrained contact shadow to the lower right. Neutral white balance, no dramatic gradient or horizon line.
Camera: consistent mildly elevated three-quarter view, approximately 85 mm product-photography perspective, no wide-angle distortion. Keep every part sharp.
Framing: landscape 4:3. Center the complete product or set; occupy approximately 75–82% of the available frame, with at least 8% safe margin on every edge. Preserve all tips, heads and openings. No cropped parts.
Finish: credible fine machining and grinding texture, controlled metal highlights, clean new components without scratches, oil or rust. Preserve the distinct appearance of steel, bronze, graphite and painted springs.
This is a representative product illustration, not a dimensional drawing or proof of actual stock. Do not invent dimensions, tolerances, certifications, brands or material-grade markings.
If an approved image is supplied later, use it ONLY as a lighting, background and photographic-style reference. The product geometry and object count must follow this job, not the style-reference object.

Asset type: shared product listing and product-detail main image.
Product family: Stamping Die Punches.
Catalog function (context only): Replaceable cutting punches made around the hole profile, die clearance and mounting arrangement of your stamping tool.
Selected visible subject: Exactly three replaceable stamping punches with supported shanks and flat cutting faces: one round, one rectangular and one obround working profile. Show the working profiles clearly from the elevated viewing angle.
Exact physical object count: 3.
Composition: A small same-family collection in a shallow staggered arrangement. Space silhouettes clearly; no intersections or occlusion of working ends. Long parts may rest in a shallow fan; keep all axes straight. Do not introduce other families or extra duplicates.
Text policy: No text, labels, dimensions, arrows, logos, watermarks or webpage UI anywhere in the image.
Avoid: No ejector pins, springs, full die assemblies or decorative grooves. Also avoid fused geometry, physically impossible intersections, duplicate extra parts and floating shadows.
Do not attempt to depict every available catalog material or variant; depict only the selected subject above.
```

### 异形与成型冲头 · forming-punches

网站产品简介：用于异形孔及成型工序的非圆、曲面工作端，工作轮廓以图纸为准。

画面：3 支异形冲头：六角、椭圆、圆滑曲面成型端各一支，工作轮廓可辨。

重点检查：不要用任意尖刺表示异形；不要合并六角与圆形轮廓。

预定地址：`/images/products/catalog/forming-punches.webp`

```text
Use case: product-mockup.
Create a realistic studio-style product illustration for a precision mold component catalog.
Use a seamless neutral off-white/light-gray background (#f5f6f7), a matte ground plane, soft diffused upper-left light and a restrained contact shadow to the lower right. Neutral white balance, no dramatic gradient or horizon line.
Camera: consistent mildly elevated three-quarter view, approximately 85 mm product-photography perspective, no wide-angle distortion. Keep every part sharp.
Framing: landscape 4:3. Center the complete product or set; occupy approximately 75–82% of the available frame, with at least 8% safe margin on every edge. Preserve all tips, heads and openings. No cropped parts.
Finish: credible fine machining and grinding texture, controlled metal highlights, clean new components without scratches, oil or rust. Preserve the distinct appearance of steel, bronze, graphite and painted springs.
This is a representative product illustration, not a dimensional drawing or proof of actual stock. Do not invent dimensions, tolerances, certifications, brands or material-grade markings.
If an approved image is supplied later, use it ONLY as a lighting, background and photographic-style reference. The product geometry and object count must follow this job, not the style-reference object.

Asset type: shared product listing and product-detail main image.
Product family: Forming & Profile Punches.
Catalog function (context only): Non-round and contoured working ends for shaped openings or forming operations. The working surface is defined from your drawing.
Selected visible subject: Exactly three custom forming/profile punches: one hexagonal working profile, one oval profile and one broad rounded forming nose. Each has a substantial cylindrical mounting shank. Working-end profiles remain distinct and mechanically plausible.
Exact physical object count: 3.
Composition: A small same-family collection in a shallow staggered arrangement. Space silhouettes clearly; no intersections or occlusion of working ends. Long parts may rest in a shallow fan; keep all axes straight. Do not introduce other families or extra duplicates.
Text policy: No text, labels, dimensions, arrows, logos, watermarks or webpage UI anywhere in the image.
Avoid: No fantasy spikes, hybrid end profiles or fragile unsupported fins. Also avoid fused geometry, physically impossible intersections, duplicate extra parts and floating shadows.
Do not attempt to depict every available catalog material or variant; depict only the selected subject above.
```

### A 型冲头 · a-type-punches

网站产品简介：采用 A 型安装结构的带头圆冲，选型时需同时确认参考系列及具体尺寸。

画面：1 支代表性带头圆冲，展示安装头、圆柱杆与圆形工作端；不声称某一标准系列。

重点检查：A 型标准未锁定，不加标准号、尺寸或夸张多级台阶。

预定地址：`/images/products/catalog/a-type-punches.webp`

```text
Use case: product-mockup.
Create a realistic studio-style product illustration for a precision mold component catalog.
Use a seamless neutral off-white/light-gray background (#f5f6f7), a matte ground plane, soft diffused upper-left light and a restrained contact shadow to the lower right. Neutral white balance, no dramatic gradient or horizon line.
Camera: consistent mildly elevated three-quarter view, approximately 85 mm product-photography perspective, no wide-angle distortion. Keep every part sharp.
Framing: landscape 4:3. Center the complete product or set; occupy approximately 75–82% of the available frame, with at least 8% safe margin on every edge. Preserve all tips, heads and openings. No cropped parts.
Finish: credible fine machining and grinding texture, controlled metal highlights, clean new components without scratches, oil or rust. Preserve the distinct appearance of steel, bronze, graphite and painted springs.
This is a representative product illustration, not a dimensional drawing or proof of actual stock. Do not invent dimensions, tolerances, certifications, brands or material-grade markings.
If an approved image is supplied later, use it ONLY as a lighting, background and photographic-style reference. The product geometry and object count must follow this job, not the style-reference object.

Asset type: shared product listing and product-detail main image.
Product family: A-Type Punches.
Catalog function (context only): Headed round punches with an A-type mounting profile. Confirm the reference series before specifying dimensions.
Selected visible subject: One representative headed cylindrical round punch with a modest retaining head, straight ground shank and a flat circular cutting end. A generic catalog representation, not a dimensionally specified standard-series model.
Exact physical object count: 1.
Composition: One complete component only. Use a diagonal resting pose for long slender parts; expose both working end and mounting end. Compact cylindrical parts may stand or rest with the bore facing the viewer.
Text policy: No text, labels, dimensions, arrows, logos, watermarks or webpage UI anywhere in the image.
Avoid: No standard numbers, dimensions, elaborate multi-step shoulders or invented proprietary details. Also avoid fused geometry, physically impossible intersections, duplicate extra parts and floating shadows.
Do not attempt to depict every available catalog material or variant; depict only the selected subject above.
```

### 压片冲模 · tableting-punches

网站产品简介：用于粉末压制的上冲、下冲及中模配套件，冲面结构与压机接口需共同核对。

画面：1 套压片冲模：上冲、下冲、中模共 3 件，平行分开摆放，展示圆形浅凹冲面与中模通孔。

重点检查：不生成药片、刻字或未验证的压机接口；不把中模画成封闭实心块。

预定地址：`/images/products/catalog/tableting-punches.webp`

```text
Use case: product-mockup.
Create a realistic studio-style product illustration for a precision mold component catalog.
Use a seamless neutral off-white/light-gray background (#f5f6f7), a matte ground plane, soft diffused upper-left light and a restrained contact shadow to the lower right. Neutral white balance, no dramatic gradient or horizon line.
Camera: consistent mildly elevated three-quarter view, approximately 85 mm product-photography perspective, no wide-angle distortion. Keep every part sharp.
Framing: landscape 4:3. Center the complete product or set; occupy approximately 75–82% of the available frame, with at least 8% safe margin on every edge. Preserve all tips, heads and openings. No cropped parts.
Finish: credible fine machining and grinding texture, controlled metal highlights, clean new components without scratches, oil or rust. Preserve the distinct appearance of steel, bronze, graphite and painted springs.
This is a representative product illustration, not a dimensional drawing or proof of actual stock. Do not invent dimensions, tolerances, certifications, brands or material-grade markings.
If an approved image is supplied later, use it ONLY as a lighting, background and photographic-style reference. The product geometry and object count must follow this job, not the style-reference object.

Asset type: shared product listing and product-detail main image.
Product family: Tableting Punches & Dies.
Catalog function (context only): Matched upper punches, lower punches and dies for powder compaction. Cup geometry and press compatibility need joint review.
Selected visible subject: One separated three-part round-tablet tooling set: an upper punch, a lower punch and a cylindrical die with a round through-bore. Punches have substantial heads and narrow cylindrical tips with shallow concave round cup faces. Place all parts separately with cup faces and die bore visible.
Exact physical object count: 3.
Composition: A separated matched set. Keep mating interfaces visible and visual scales consistent. Do not fuse or assemble the pieces; no exploded-view arrows.
Text policy: No text, labels, dimensions, arrows, logos, watermarks or webpage UI anywhere in the image.
Avoid: No tablets, pills, embossed lettering, machine compatibility labels or closed solid die bore. Also avoid fused geometry, physically impossible intersections, duplicate extra parts and floating shadows.
Do not attempt to depict every available catalog material or variant; depict only the selected subject above.
```

### 直身顶针 · straight-ejector-pins

网站产品简介：圆形顶针将顶针板运动传递至制品。SKD61 属于材质选项，氮化属于表面处理，可按实际工况组合。

画面：3 支直身顶针，长度适度变化，圆杆直径均匀、尾部扁圆头，顶出端平整。

重点检查：不加冲裁刃口、针尖或钻头纹路。

预定地址：`/images/products/catalog/straight-ejector-pins.webp`

```text
Use case: product-mockup.
Create a realistic studio-style product illustration for a precision mold component catalog.
Use a seamless neutral off-white/light-gray background (#f5f6f7), a matte ground plane, soft diffused upper-left light and a restrained contact shadow to the lower right. Neutral white balance, no dramatic gradient or horizon line.
Camera: consistent mildly elevated three-quarter view, approximately 85 mm product-photography perspective, no wide-angle distortion. Keep every part sharp.
Framing: landscape 4:3. Center the complete product or set; occupy approximately 75–82% of the available frame, with at least 8% safe margin on every edge. Preserve all tips, heads and openings. No cropped parts.
Finish: credible fine machining and grinding texture, controlled metal highlights, clean new components without scratches, oil or rust. Preserve the distinct appearance of steel, bronze, graphite and painted springs.
This is a representative product illustration, not a dimensional drawing or proof of actual stock. Do not invent dimensions, tolerances, certifications, brands or material-grade markings.
If an approved image is supplied later, use it ONLY as a lighting, background and photographic-style reference. The product geometry and object count must follow this job, not the style-reference object.

Asset type: shared product listing and product-detail main image.
Product family: Straight Ejector Pins.
Catalog function (context only): Round pins transfer ejector-plate movement to the molded part. SKD61 and nitrided configurations are options within this family, not different functions.
Selected visible subject: Exactly three straight round ejector pins in a small length progression, each with a constant-diameter slender shaft, a flat disk retaining head at the rear and a flat working end. Continuous straight axes, silver polished steel.
Exact physical object count: 3.
Composition: A small same-family collection in a shallow staggered arrangement. Space silhouettes clearly; no intersections or occlusion of working ends. Long parts may rest in a shallow fan; keep all axes straight. Do not introduce other families or extra duplicates.
Text policy: No text, labels, dimensions, arrows, logos, watermarks or webpage UI anywhere in the image.
Avoid: No piercing tips, drill flutes, cutting edges or arbitrary shaft steps. Also avoid fused geometry, physically impossible intersections, duplicate extra parts and floating shadows.
Do not attempt to depict every available catalog material or variant; depict only the selected subject above.
```

### 带肩顶针 · shoulder-ejector-pins

网站产品简介：加大肩部提供明确的安装或导向配合段，肩部位置及配合结构需与顶出系统一致。

画面：1 支带肩顶针，头部附近有清晰加粗定位肩，后接长直顶出杆。

重点检查：不要将定位肩放到细长工作端中间；不要生成针尖。

预定地址：`/images/products/catalog/shoulder-ejector-pins.webp`

```text
Use case: product-mockup.
Create a realistic studio-style product illustration for a precision mold component catalog.
Use a seamless neutral off-white/light-gray background (#f5f6f7), a matte ground plane, soft diffused upper-left light and a restrained contact shadow to the lower right. Neutral white balance, no dramatic gradient or horizon line.
Camera: consistent mildly elevated three-quarter view, approximately 85 mm product-photography perspective, no wide-angle distortion. Keep every part sharp.
Framing: landscape 4:3. Center the complete product or set; occupy approximately 75–82% of the available frame, with at least 8% safe margin on every edge. Preserve all tips, heads and openings. No cropped parts.
Finish: credible fine machining and grinding texture, controlled metal highlights, clean new components without scratches, oil or rust. Preserve the distinct appearance of steel, bronze, graphite and painted springs.
This is a representative product illustration, not a dimensional drawing or proof of actual stock. Do not invent dimensions, tolerances, certifications, brands or material-grade markings.
If an approved image is supplied later, use it ONLY as a lighting, background and photographic-style reference. The product geometry and object count must follow this job, not the style-reference object.

Asset type: shared product listing and product-detail main image.
Product family: Shoulder Ejector Pins.
Catalog function (context only): An enlarged shoulder provides a defined mounting or guiding interface. Shoulder position and mating geometry must match the ejector assembly.
Selected visible subject: One shoulder ejector pin with a flat retaining head, an enlarged locating shoulder immediately beside the head, and a long straight reduced-diameter ejector shaft ending in a flat face. Clearly distinguish the locating shoulder from the head.
Exact physical object count: 1.
Composition: One complete component only. Use a diagonal resting pose for long slender parts; expose both working end and mounting end. Compact cylindrical parts may stand or rest with the bore facing the viewer.
Text policy: No text, labels, dimensions, arrows, logos, watermarks or webpage UI anywhere in the image.
Avoid: No pointed tip or enlarged locating collar halfway along the working tip. Also avoid fused geometry, physically impossible intersections, duplicate extra parts and floating shadows.
Do not attempt to depict every available catalog material or variant; depict only the selected subject above.
```

### 台阶顶针 · stepped-ejector-pins

网站产品简介：较细顶出端连接较粗支撑杆，按制品接触面积及模具支撑条件确定台阶尺寸。

画面：2 支台阶顶针，粗支撑杆连接细顶出端，展示不同缩径长度。

重点检查：要与带肩顶针区分；不画冲裁尖刃。

预定地址：`/images/products/catalog/stepped-ejector-pins.webp`

```text
Use case: product-mockup.
Create a realistic studio-style product illustration for a precision mold component catalog.
Use a seamless neutral off-white/light-gray background (#f5f6f7), a matte ground plane, soft diffused upper-left light and a restrained contact shadow to the lower right. Neutral white balance, no dramatic gradient or horizon line.
Camera: consistent mildly elevated three-quarter view, approximately 85 mm product-photography perspective, no wide-angle distortion. Keep every part sharp.
Framing: landscape 4:3. Center the complete product or set; occupy approximately 75–82% of the available frame, with at least 8% safe margin on every edge. Preserve all tips, heads and openings. No cropped parts.
Finish: credible fine machining and grinding texture, controlled metal highlights, clean new components without scratches, oil or rust. Preserve the distinct appearance of steel, bronze, graphite and painted springs.
This is a representative product illustration, not a dimensional drawing or proof of actual stock. Do not invent dimensions, tolerances, certifications, brands or material-grade markings.
If an approved image is supplied later, use it ONLY as a lighting, background and photographic-style reference. The product geometry and object count must follow this job, not the style-reference object.

Asset type: shared product listing and product-detail main image.
Product family: Stepped Ejector Pins.
Catalog function (context only): A reduced ejection tip joins a larger support shaft. Step dimensions are selected to suit the available contact area and mold support.
Selected visible subject: Exactly two stepped ejector pins with rear retaining heads, thicker support shafts and long thinner round ejection ends. Use different step positions and reduced-tip lengths; both working ends flat and blunt.
Exact physical object count: 2.
Composition: A small same-family collection in a shallow staggered arrangement. Space silhouettes clearly; no intersections or occlusion of working ends. Long parts may rest in a shallow fan; keep all axes straight. Do not introduce other families or extra duplicates.
Text policy: No text, labels, dimensions, arrows, logos, watermarks or webpage UI anywhere in the image.
Avoid: No needle points or cutting bevels; emphasize the long reduced ejection end rather than a locating collar near the head. Also avoid fused geometry, physically impossible intersections, duplicate extra parts and floating shadows.
Do not attempt to depict every available catalog material or variant; depict only the selected subject above.
```

### 扁顶针 · blade-ejector-pins

网站产品简介：薄矩形工作端用于窄筋及受限顶出区域，需重点确认扁位方向以及与杆部的过渡结构。

画面：1 支细长扁顶针，较长圆杆平顺过渡到窄薄矩形扁位；扁位宽度接近杆径，斜向摆放，同时看见宽面与厚度。

重点检查：避免初版样图的宽铲状比例：扁位宽度接近杆径，圆杆明显长于扁位；工作端不能是刀刃。

预定地址：`/images/products/catalog/blade-ejector-pins.webp`

```text
Use case: product-mockup.
Create a realistic studio-style product illustration for a precision mold component catalog.
Use a seamless neutral off-white/light-gray background (#f5f6f7), a matte ground plane, soft diffused upper-left light and a restrained contact shadow to the lower right. Neutral white balance, no dramatic gradient or horizon line.
Camera: consistent mildly elevated three-quarter view, approximately 85 mm product-photography perspective, no wide-angle distortion. Keep every part sharp.
Framing: landscape 4:3. Center the complete product or set; occupy approximately 75–82% of the available frame, with at least 8% safe margin on every edge. Preserve all tips, heads and openings. No cropped parts.
Finish: credible fine machining and grinding texture, controlled metal highlights, clean new components without scratches, oil or rust. Preserve the distinct appearance of steel, bronze, graphite and painted springs.
This is a representative product illustration, not a dimensional drawing or proof of actual stock. Do not invent dimensions, tolerances, certifications, brands or material-grade markings.
If an approved image is supplied later, use it ONLY as a lighting, background and photographic-style reference. The product geometry and object count must follow this job, not the style-reference object.

Asset type: shared product listing and product-detail main image.
Product family: Blade Ejector Pins.
Catalog function (context only): A thin rectangular working end reaches narrow ribs and restricted ejection areas. Blade orientation and the transition to the shank require close attention.
Selected visible subject: One slender blade ejector pin resting diagonally, with a round retaining head, a long cylindrical support shank and a smooth transition into a narrow thin rectangular blade. Blade width should be approximately equal to the support-shaft diameter, and the cylindrical support section visibly longer than the flat blade section; these are illustrative proportions, not manufacturing dimensions. Both the broad blade face and narrow thickness edge are visible. Flat blunt working end.
Exact physical object count: 1.
Composition: One complete component only. Use a diagonal resting pose for long slender parts; expose both working end and mounting end. Compact cylindrical parts may stand or rest with the bore facing the viewer.
Text policy: No text, labels, dimensions, arrows, logos, watermarks or webpage UI anywhere in the image.
Avoid: No sharpened knife edge, screwdriver tip, twisted blade or all-square shaft. Also avoid fused geometry, physically impossible intersections, duplicate extra parts and floating shadows.
Do not attempt to depict every available catalog material or variant; depict only the selected subject above.
```

### 方顶针 · square-ejector-pins

网站产品简介：方形工作段提供非圆接触面，方向由相应模具导向结构保持。

画面：1 支方顶针，方形工作段的两个侧面和端面可见，后接圆杆及安装头。

重点检查：不要画成薄片扁顶针；方形段不扭转。

预定地址：`/images/products/catalog/square-ejector-pins.webp`

```text
Use case: product-mockup.
Create a realistic studio-style product illustration for a precision mold component catalog.
Use a seamless neutral off-white/light-gray background (#f5f6f7), a matte ground plane, soft diffused upper-left light and a restrained contact shadow to the lower right. Neutral white balance, no dramatic gradient or horizon line.
Camera: consistent mildly elevated three-quarter view, approximately 85 mm product-photography perspective, no wide-angle distortion. Keep every part sharp.
Framing: landscape 4:3. Center the complete product or set; occupy approximately 75–82% of the available frame, with at least 8% safe margin on every edge. Preserve all tips, heads and openings. No cropped parts.
Finish: credible fine machining and grinding texture, controlled metal highlights, clean new components without scratches, oil or rust. Preserve the distinct appearance of steel, bronze, graphite and painted springs.
This is a representative product illustration, not a dimensional drawing or proof of actual stock. Do not invent dimensions, tolerances, certifications, brands or material-grade markings.
If an approved image is supplied later, use it ONLY as a lighting, background and photographic-style reference. The product geometry and object count must follow this job, not the style-reference object.

Asset type: shared product listing and product-detail main image.
Product family: Square Ejector Pins.
Catalog function (context only): A square working section provides a non-round contact surface. Its orientation must be maintained by the corresponding mold guide geometry.
Selected visible subject: One square ejector pin with a visibly square-section working segment, a supporting round shank and a retaining head. Show two perpendicular flat sides and the square blunt end face, with a plausible transition to the round support.
Exact physical object count: 1.
Composition: One complete component only. Use a diagonal resting pose for long slender parts; expose both working end and mounting end. Compact cylindrical parts may stand or rest with the bore facing the viewer.
Text policy: No text, labels, dimensions, arrows, logos, watermarks or webpage UI anywhere in the image.
Avoid: No thin blade geometry, twisting square shaft or pointed tip. Also avoid fused geometry, physically impossible intersections, duplicate extra parts and floating shadows.
Do not attempt to depict every available catalog material or variant; depict only the selected subject above.
```

### 司筒与顶出套筒 · ejector-sleeves

网站产品简介：空心套筒围绕芯针运动，用于柱位或管状部位顶出，壁厚与同轴关系需结合配套芯针核对。

画面：2 支司筒，一支直身、一支台阶，均展示贯通内孔与合理壁厚。

重点检查：司筒不能是实心顶针；内外孔须同轴。

预定地址：`/images/products/catalog/ejector-sleeves.webp`

```text
Use case: product-mockup.
Create a realistic studio-style product illustration for a precision mold component catalog.
Use a seamless neutral off-white/light-gray background (#f5f6f7), a matte ground plane, soft diffused upper-left light and a restrained contact shadow to the lower right. Neutral white balance, no dramatic gradient or horizon line.
Camera: consistent mildly elevated three-quarter view, approximately 85 mm product-photography perspective, no wide-angle distortion. Keep every part sharp.
Framing: landscape 4:3. Center the complete product or set; occupy approximately 75–82% of the available frame, with at least 8% safe margin on every edge. Preserve all tips, heads and openings. No cropped parts.
Finish: credible fine machining and grinding texture, controlled metal highlights, clean new components without scratches, oil or rust. Preserve the distinct appearance of steel, bronze, graphite and painted springs.
This is a representative product illustration, not a dimensional drawing or proof of actual stock. Do not invent dimensions, tolerances, certifications, brands or material-grade markings.
If an approved image is supplied later, use it ONLY as a lighting, background and photographic-style reference. The product geometry and object count must follow this job, not the style-reference object.

Asset type: shared product listing and product-detail main image.
Product family: Ejector Sleeves.
Catalog function (context only): A hollow sleeve moves around a core pin to eject a boss or tubular feature. Concentricity and wall thickness are reviewed with the mating core.
Selected visible subject: Exactly two hollow ejector sleeves: one straight-body and one stepped-body sleeve, both with rear mounting shoulders. Tilt their open ends toward the camera so concentric through-bores and credible wall thicknesses are visible. Separate parts, no core pin inserted.
Exact physical object count: 2.
Composition: A small same-family collection in a shallow staggered arrangement. Space silhouettes clearly; no intersections or occlusion of working ends. Long parts may rest in a shallow fan; keep all axes straight. Do not introduce other families or extra duplicates.
Text policy: No text, labels, dimensions, arrows, logos, watermarks or webpage UI anywhere in the image.
Avoid: No solid pins, blind bores, paper-thin walls or eccentric openings. Also avoid fused geometry, physically impossible intersections, duplicate extra parts and floating shadows.
Do not attempt to depict every available catalog material or variant; depict only the selected subject above.
```

### 气顶阀 · air-poppet-valves

网站产品简介：弹簧复位阀在脱模时向模具表面引入空气，辅助解除真空吸附；应与机械顶出结构配合设计。

画面：1 个闭合状态气顶阀，紧凑圆柱阀体及齐平圆阀面，展示模具安装件外形。

重点检查：不凭空展示内部气路、外露弹簧或高压气瓶。

预定地址：`/images/products/catalog/air-poppet-valves.webp`

```text
Use case: product-mockup.
Create a realistic studio-style product illustration for a precision mold component catalog.
Use a seamless neutral off-white/light-gray background (#f5f6f7), a matte ground plane, soft diffused upper-left light and a restrained contact shadow to the lower right. Neutral white balance, no dramatic gradient or horizon line.
Camera: consistent mildly elevated three-quarter view, approximately 85 mm product-photography perspective, no wide-angle distortion. Keep every part sharp.
Framing: landscape 4:3. Center the complete product or set; occupy approximately 75–82% of the available frame, with at least 8% safe margin on every edge. Preserve all tips, heads and openings. No cropped parts.
Finish: credible fine machining and grinding texture, controlled metal highlights, clean new components without scratches, oil or rust. Preserve the distinct appearance of steel, bronze, graphite and painted springs.
This is a representative product illustration, not a dimensional drawing or proof of actual stock. Do not invent dimensions, tolerances, certifications, brands or material-grade markings.
If an approved image is supplied later, use it ONLY as a lighting, background and photographic-style reference. The product geometry and object count must follow this job, not the style-reference object.

Asset type: shared product listing and product-detail main image.
Product family: Air Poppet Valves.
Catalog function (context only): A spring-loaded valve admits air at the mold surface during release to help break a vacuum. It assists demolding without replacing the mechanical ejector design.
Selected visible subject: One compact mold air poppet valve in its closed state: a short cylindrical insert body with a circular flush poppet face and a fine annular separation line around the poppet. Silver machined steel, exterior view only.
Exact physical object count: 1.
Composition: One complete component only. Use a diagonal resting pose for long slender parts; expose both working end and mounting end. Compact cylindrical parts may stand or rest with the bore facing the viewer.
Text policy: No text, labels, dimensions, arrows, logos, watermarks or webpage UI anywhere in the image.
Avoid: No internal cutaway, exposed spring, pressure cylinder, invented ports or hoses. Also avoid fused geometry, physically impossible intersections, duplicate extra parts and floating shadows.
Do not attempt to depict every available catalog material or variant; depict only the selected subject above.
```

### 导柱 · guide-posts

网站产品简介：磨削导柱通过配套导套对运动模板进行导向，普通及氮化形式应结合整套导向系统选择。

画面：2 根导柱，长圆柱磨削导向段，后端安装肩部，展示不同长度。

重点检查：导柱不能细如顶针；不混入空心导套。

预定地址：`/images/products/catalog/guide-posts.webp`

```text
Use case: product-mockup.
Create a realistic studio-style product illustration for a precision mold component catalog.
Use a seamless neutral off-white/light-gray background (#f5f6f7), a matte ground plane, soft diffused upper-left light and a restrained contact shadow to the lower right. Neutral white balance, no dramatic gradient or horizon line.
Camera: consistent mildly elevated three-quarter view, approximately 85 mm product-photography perspective, no wide-angle distortion. Keep every part sharp.
Framing: landscape 4:3. Center the complete product or set; occupy approximately 75–82% of the available frame, with at least 8% safe margin on every edge. Preserve all tips, heads and openings. No cropped parts.
Finish: credible fine machining and grinding texture, controlled metal highlights, clean new components without scratches, oil or rust. Preserve the distinct appearance of steel, bronze, graphite and painted springs.
This is a representative product illustration, not a dimensional drawing or proof of actual stock. Do not invent dimensions, tolerances, certifications, brands or material-grade markings.
If an approved image is supplied later, use it ONLY as a lighting, background and photographic-style reference. The product geometry and object count must follow this job, not the style-reference object.

Asset type: shared product listing and product-detail main image.
Product family: Guide Posts & Pillars.
Catalog function (context only): Ground posts align moving mold plates through a mating bushing. Plain and nitrided versions are selected with the complete guide system.
Selected visible subject: Exactly two mold guide posts with substantial cylindrical ground guide surfaces, modest mounting shoulders and gently chamfered ends, in two lengths. Robust proportions, larger shaft diameter relative to length than ejector pins.
Exact physical object count: 2.
Composition: A small same-family collection in a shallow staggered arrangement. Space silhouettes clearly; no intersections or occlusion of working ends. Long parts may rest in a shallow fan; keep all axes straight. Do not introduce other families or extra duplicates.
Text policy: No text, labels, dimensions, arrows, logos, watermarks or webpage UI anywhere in the image.
Avoid: No needle-like shafts, hollow tubes, screw threads on the guide surface or arbitrary grooves. Also avoid fused geometry, physically impossible intersections, duplicate extra parts and floating shadows.
Do not attempt to depict every available catalog material or variant; depict only the selected subject above.
```

### 滑动导套与钢导套 · guide-bushings

网站产品简介：可更换滑动套为导柱提供导向并承担配合面的磨损，需同时确认内孔表面及安装后配合。

画面：1 个直身钢导套，厚壁圆筒，斜视可见通孔和端面倒角。

重点检查：不加法兰、石墨点或滚珠。

预定地址：`/images/products/catalog/guide-bushings.webp`

```text
Use case: product-mockup.
Create a realistic studio-style product illustration for a precision mold component catalog.
Use a seamless neutral off-white/light-gray background (#f5f6f7), a matte ground plane, soft diffused upper-left light and a restrained contact shadow to the lower right. Neutral white balance, no dramatic gradient or horizon line.
Camera: consistent mildly elevated three-quarter view, approximately 85 mm product-photography perspective, no wide-angle distortion. Keep every part sharp.
Framing: landscape 4:3. Center the complete product or set; occupy approximately 75–82% of the available frame, with at least 8% safe margin on every edge. Preserve all tips, heads and openings. No cropped parts.
Finish: credible fine machining and grinding texture, controlled metal highlights, clean new components without scratches, oil or rust. Preserve the distinct appearance of steel, bronze, graphite and painted springs.
This is a representative product illustration, not a dimensional drawing or proof of actual stock. Do not invent dimensions, tolerances, certifications, brands or material-grade markings.
If an approved image is supplied later, use it ONLY as a lighting, background and photographic-style reference. The product geometry and object count must follow this job, not the style-reference object.

Asset type: shared product listing and product-detail main image.
Product family: Plain & Steel Guide Bushings.
Catalog function (context only): A replaceable sliding sleeve guides the post and takes wear at the mating interface. Bore finish and installed fit matter together.
Selected visible subject: One straight cylindrical steel guide bushing with a thick wall, concentric open through-bore, ground external cylinder and small end chamfers. Angle the bore toward the viewer.
Exact physical object count: 1.
Composition: One complete component only. Use a diagonal resting pose for long slender parts; expose both working end and mounting end. Compact cylindrical parts may stand or rest with the bore facing the viewer.
Text policy: No text, labels, dimensions, arrows, logos, watermarks or webpage UI anywhere in the image.
Avoid: No flange, graphite inserts, visible balls or sealed bore. Also avoid fused geometry, physically impossible intersections, duplicate extra parts and floating shadows.
Do not attempt to depict every available catalog material or variant; depict only the selected subject above.
```

### 法兰导套 · flanged-guide-bushings

网站产品简介：法兰为导套提供轴向定位面，安装面与内孔需满足规定的几何关系。

画面：1 个法兰钢导套，筒体与法兰一体，突出法兰定位面及贯通内孔。

重点检查：不混淆铜套；不随意增加螺孔或滚珠。

预定地址：`/images/products/catalog/flanged-guide-bushings.webp`

```text
Use case: product-mockup.
Create a realistic studio-style product illustration for a precision mold component catalog.
Use a seamless neutral off-white/light-gray background (#f5f6f7), a matte ground plane, soft diffused upper-left light and a restrained contact shadow to the lower right. Neutral white balance, no dramatic gradient or horizon line.
Camera: consistent mildly elevated three-quarter view, approximately 85 mm product-photography perspective, no wide-angle distortion. Keep every part sharp.
Framing: landscape 4:3. Center the complete product or set; occupy approximately 75–82% of the available frame, with at least 8% safe margin on every edge. Preserve all tips, heads and openings. No cropped parts.
Finish: credible fine machining and grinding texture, controlled metal highlights, clean new components without scratches, oil or rust. Preserve the distinct appearance of steel, bronze, graphite and painted springs.
This is a representative product illustration, not a dimensional drawing or proof of actual stock. Do not invent dimensions, tolerances, certifications, brands or material-grade markings.
If an approved image is supplied later, use it ONLY as a lighting, background and photographic-style reference. The product geometry and object count must follow this job, not the style-reference object.

Asset type: shared product listing and product-detail main image.
Product family: Flanged Guide Bushings.
Catalog function (context only): A flange provides an axial locating face for the guide bushing. The mounting face and bore must share the specified alignment.
Selected visible subject: One steel guide bushing with an integral circular locating flange at one end, a cylindrical sleeve body and a concentric through-bore. Show the flange thickness, bore and mounting face clearly.
Exact physical object count: 1.
Composition: One complete component only. Use a diagonal resting pose for long slender parts; expose both working end and mounting end. Compact cylindrical parts may stand or rest with the bore facing the viewer.
Text policy: No text, labels, dimensions, arrows, logos, watermarks or webpage UI anywhere in the image.
Avoid: No bronze coloration, graphite dots, arbitrary flange bolt holes or rolling elements. Also avoid fused geometry, physically impossible intersections, duplicate extra parts and floating shadows.
Do not attempt to depict every available catalog material or variant; depict only the selected subject above.
```

### 导柱导套组件 · guide-sets

网站产品简介：按配套关系提供导柱与导套，便于统一配合要求。滑动与滚动系统的间隙和装配条件应分别确认。

画面：1 套滑动导向组件：配套导柱与导套共 2 件，分开且同轴对应。

重点检查：此图仅表现滑动式，不混入滚珠保持架或暗示所有组合可互换。

预定地址：`/images/products/catalog/guide-sets.webp`

```text
Use case: product-mockup.
Create a realistic studio-style product illustration for a precision mold component catalog.
Use a seamless neutral off-white/light-gray background (#f5f6f7), a matte ground plane, soft diffused upper-left light and a restrained contact shadow to the lower right. Neutral white balance, no dramatic gradient or horizon line.
Camera: consistent mildly elevated three-quarter view, approximately 85 mm product-photography perspective, no wide-angle distortion. Keep every part sharp.
Framing: landscape 4:3. Center the complete product or set; occupy approximately 75–82% of the available frame, with at least 8% safe margin on every edge. Preserve all tips, heads and openings. No cropped parts.
Finish: credible fine machining and grinding texture, controlled metal highlights, clean new components without scratches, oil or rust. Preserve the distinct appearance of steel, bronze, graphite and painted springs.
This is a representative product illustration, not a dimensional drawing or proof of actual stock. Do not invent dimensions, tolerances, certifications, brands or material-grade markings.
If an approved image is supplied later, use it ONLY as a lighting, background and photographic-style reference. The product geometry and object count must follow this job, not the style-reference object.

Asset type: shared product listing and product-detail main image.
Product family: Guide Post & Bushing Sets.
Catalog function (context only): Posts and bushings specified as a mating set simplify fit coordination. Sliding and rolling systems use different clearances and assembly requirements.
Selected visible subject: One matched sliding guide set comprising exactly two separate pieces: one ground steel guide post and one flanged steel guide bushing. Align the components on a shared diagonal axis with a visible gap. Post guide diameter must visually fit the bushing bore.
Exact physical object count: 2.
Composition: A separated matched set. Keep mating interfaces visible and visual scales consistent. Do not fuse or assemble the pieces; no exploded-view arrows.
Text policy: No text, labels, dimensions, arrows, logos, watermarks or webpage UI anywhere in the image.
Avoid: No ball cage, mismatched bore diameter, impossible assembly or overlap hiding the fit surfaces. Also avoid fused geometry, physically impossible intersections, duplicate extra parts and floating shadows.
Do not attempt to depict every available catalog material or variant; depict only the selected subject above.
```

### 滚珠保持架 · ball-cages

网站产品简介：保持架在导柱与导套之间定位滚珠。铜、铝及塑料架体按运动质量、温度和工况选择，不能与实心导套混用。

画面：1 个铜质滚珠保持架，薄壁圆筒架体、规则孔位中的独立钢球，中央贯通。

重点检查：钢球不能变成黑色石墨点；不得出现漂浮钢球或封闭实心筒。

预定地址：`/images/products/catalog/ball-cages.webp`

```text
Use case: product-mockup.
Create a realistic studio-style product illustration for a precision mold component catalog.
Use a seamless neutral off-white/light-gray background (#f5f6f7), a matte ground plane, soft diffused upper-left light and a restrained contact shadow to the lower right. Neutral white balance, no dramatic gradient or horizon line.
Camera: consistent mildly elevated three-quarter view, approximately 85 mm product-photography perspective, no wide-angle distortion. Keep every part sharp.
Framing: landscape 4:3. Center the complete product or set; occupy approximately 75–82% of the available frame, with at least 8% safe margin on every edge. Preserve all tips, heads and openings. No cropped parts.
Finish: credible fine machining and grinding texture, controlled metal highlights, clean new components without scratches, oil or rust. Preserve the distinct appearance of steel, bronze, graphite and painted springs.
This is a representative product illustration, not a dimensional drawing or proof of actual stock. Do not invent dimensions, tolerances, certifications, brands or material-grade markings.
If an approved image is supplied later, use it ONLY as a lighting, background and photographic-style reference. The product geometry and object count must follow this job, not the style-reference object.

Asset type: shared product listing and product-detail main image.
Product family: Ball Cages & Retainers.
Catalog function (context only): The cage spaces and retains bearing balls between a post and bushing. Brass, aluminum and polymer bodies are alternatives selected for mass, temperature and duty.
Selected visible subject: One brass ball cage for a mold guide system: an open thin-walled cylindrical brass retainer holding separate polished steel balls in evenly spaced rows. Balls are seated in individual pockets and protrude slightly from inner and outer surfaces. The central cylindrical passage is open.
Exact physical object count: 1.
Composition: One complete component only. Use a diagonal resting pose for long slender parts; expose both working end and mounting end. Compact cylindrical parts may stand or rest with the bore facing the viewer.
Text policy: No text, labels, dimensions, arrows, logos, watermarks or webpage UI anywhere in the image.
Avoid: No black graphite dots, floating balls, solid closed cylinder or fused steel beads. Also avoid fused geometry, physically impossible intersections, duplicate extra parts and floating shadows.
Do not attempt to depict every available catalog material or variant; depict only the selected subject above.
```

### 滚珠导套 · ball-bearing-bushings

网站产品简介：导套本体与滚动元件构成导柱周围的滚动导向单元，订购时需明确是否包含保持架及配套导柱。

画面：1 个滚珠导套单元，外部厚壁钢套，开口处露出少量内部滚动元件。

重点检查：区别于裸露保持架；不做未经验证的剖面和复杂滚珠回流结构。

预定地址：`/images/products/catalog/ball-bearing-bushings.webp`

```text
Use case: product-mockup.
Create a realistic studio-style product illustration for a precision mold component catalog.
Use a seamless neutral off-white/light-gray background (#f5f6f7), a matte ground plane, soft diffused upper-left light and a restrained contact shadow to the lower right. Neutral white balance, no dramatic gradient or horizon line.
Camera: consistent mildly elevated three-quarter view, approximately 85 mm product-photography perspective, no wide-angle distortion. Keep every part sharp.
Framing: landscape 4:3. Center the complete product or set; occupy approximately 75–82% of the available frame, with at least 8% safe margin on every edge. Preserve all tips, heads and openings. No cropped parts.
Finish: credible fine machining and grinding texture, controlled metal highlights, clean new components without scratches, oil or rust. Preserve the distinct appearance of steel, bronze, graphite and painted springs.
This is a representative product illustration, not a dimensional drawing or proof of actual stock. Do not invent dimensions, tolerances, certifications, brands or material-grade markings.
If an approved image is supplied later, use it ONLY as a lighting, background and photographic-style reference. The product geometry and object count must follow this job, not the style-reference object.

Asset type: shared product listing and product-detail main image.
Product family: Ball Bearing Bushings.
Catalog function (context only): A rolling guide unit combines a bushing body and bearing elements around the post. Confirm whether the order includes the cage and mating post.
Selected visible subject: One complete ball-bearing guide bushing unit with a substantial cylindrical steel outer sleeve and a visible open inner passage. Show only the accessible internal retainer and a few seated steel balls near the opening, with most of the mechanism enclosed by the outer sleeve.
Exact physical object count: 1.
Composition: One complete component only. Use a diagonal resting pose for long slender parts; expose both working end and mounting end. Compact cylindrical parts may stand or rest with the bore facing the viewer.
Text policy: No text, labels, dimensions, arrows, logos, watermarks or webpage UI anywhere in the image.
Avoid: No bare standalone cage, cutaway, exposed external ball rows or invented recirculating mechanism. Also avoid fused geometry, physically impossible intersections, duplicate extra parts and floating shadows.
Do not attempt to depict every available catalog material or variant; depict only the selected subject above.
```

### 矩形模具弹簧 · rectangular-die-springs

网站产品简介：矩形截面压缩弹簧在紧凑模具空间中提供作用力。先核对负荷曲线与允许行程，再确认颜色标识。

画面：5 个矩形线材模具弹簧，黄、蓝、红、绿、棕各一个，分开站立，清晰展示矩形线材。

重点检查：不能变成圆线弹簧；颜色仅示系列外观，不通过文字或比例声称负荷标准。

预定地址：`/images/products/catalog/rectangular-die-springs.webp`

```text
Use case: product-mockup.
Create a realistic studio-style product illustration for a precision mold component catalog.
Use a seamless neutral off-white/light-gray background (#f5f6f7), a matte ground plane, soft diffused upper-left light and a restrained contact shadow to the lower right. Neutral white balance, no dramatic gradient or horizon line.
Camera: consistent mildly elevated three-quarter view, approximately 85 mm product-photography perspective, no wide-angle distortion. Keep every part sharp.
Framing: landscape 4:3. Center the complete product or set; occupy approximately 75–82% of the available frame, with at least 8% safe margin on every edge. Preserve all tips, heads and openings. No cropped parts.
Finish: credible fine machining and grinding texture, controlled metal highlights, clean new components without scratches, oil or rust. Preserve the distinct appearance of steel, bronze, graphite and painted springs.
This is a representative product illustration, not a dimensional drawing or proof of actual stock. Do not invent dimensions, tolerances, certifications, brands or material-grade markings.
If an approved image is supplied later, use it ONLY as a lighting, background and photographic-style reference. The product geometry and object count must follow this job, not the style-reference object.

Asset type: shared product listing and product-detail main image.
Product family: Rectangular Die Springs.
Catalog function (context only): Rectangular-wire compression springs provide force in a compact mold space. Choose the load curve and permitted stroke before choosing the color code.
Selected visible subject: Exactly five separate compression die springs made from rectangular-section wire, one each yellow, blue, red, green and brown. Upright side-by-side arrangement, modest size variation, visible rectangular wire faces, open helix gaps and finished end coils. Realistic satin painted surfaces.
Exact physical object count: 5.
Composition: A small same-family collection in a shallow staggered arrangement. Space silhouettes clearly; no intersections or occlusion of working ends. Long parts may rest in a shallow fan; keep all axes straight. Do not introduce other families or extra duplicates.
Text policy: No text, labels, dimensions, arrows, logos, watermarks or webpage UI anywhere in the image.
Avoid: No round-wire springs, fused coils, load-rating labels, standardized force claims or arbitrary numeric markings. Also avoid fused geometry, physically impossible intersections, duplicate extra parts and floating shadows.
Do not attempt to depict every available catalog material or variant; depict only the selected subject above.
```

### 氮气弹簧 · nitrogen-gas-springs

网站产品简介：密封气弹簧通过压缩氮气提供复位或压料力，应根据模具工况选择额定规格及安装形式。

画面：1 个紧凑氮气弹簧，黑色圆柱壳体、顶部导向密封圈和伸出的银色活塞杆。

重点检查：不出现外绕螺旋弹簧、气管、压力数值或品牌。

预定地址：`/images/products/catalog/nitrogen-gas-springs.webp`

```text
Use case: product-mockup.
Create a realistic studio-style product illustration for a precision mold component catalog.
Use a seamless neutral off-white/light-gray background (#f5f6f7), a matte ground plane, soft diffused upper-left light and a restrained contact shadow to the lower right. Neutral white balance, no dramatic gradient or horizon line.
Camera: consistent mildly elevated three-quarter view, approximately 85 mm product-photography perspective, no wide-angle distortion. Keep every part sharp.
Framing: landscape 4:3. Center the complete product or set; occupy approximately 75–82% of the available frame, with at least 8% safe margin on every edge. Preserve all tips, heads and openings. No cropped parts.
Finish: credible fine machining and grinding texture, controlled metal highlights, clean new components without scratches, oil or rust. Preserve the distinct appearance of steel, bronze, graphite and painted springs.
This is a representative product illustration, not a dimensional drawing or proof of actual stock. Do not invent dimensions, tolerances, certifications, brands or material-grade markings.
If an approved image is supplied later, use it ONLY as a lighting, background and photographic-style reference. The product geometry and object count must follow this job, not the style-reference object.

Asset type: shared product listing and product-detail main image.
Product family: Nitrogen Gas Springs.
Catalog function (context only): A sealed gas spring produces return or holding force through compressed nitrogen. Select a rated unit and mounting arrangement for the intended tool duty.
Selected visible subject: One compact nitrogen die gas spring, with a short robust black cylindrical body, a top rod guide/seal collar and one centered polished steel piston rod partially extended. Closed exterior product view.
Exact physical object count: 1.
Composition: One complete component only. Use a diagonal resting pose for long slender parts; expose both working end and mounting end. Compact cylindrical parts may stand or rest with the bore facing the viewer.
Text policy: No text, labels, dimensions, arrows, logos, watermarks or webpage UI anywhere in the image.
Avoid: No external helical coil, hoses, pressure values, brand marks or exposed internals. Also avoid fused geometry, physically impossible intersections, duplicate extra parts and floating shadows.
Do not attempt to depict every available catalog material or variant; depict only the selected subject above.
```

### 浇口套（唧咀） · sprue-bushings

网站产品简介：浇口套连接注塑机喷嘴与模具流道，喷嘴接触面及内孔锥度需匹配注塑系统。

画面：1 个浇口套，带头部法兰和筒身，喷嘴侧凹球面入口及中心浇口可见。

重点检查：不画成实心螺栓；不虚构透明剖面或内部锥度尺寸。

预定地址：`/images/products/catalog/sprue-bushings.webp`

```text
Use case: product-mockup.
Create a realistic studio-style product illustration for a precision mold component catalog.
Use a seamless neutral off-white/light-gray background (#f5f6f7), a matte ground plane, soft diffused upper-left light and a restrained contact shadow to the lower right. Neutral white balance, no dramatic gradient or horizon line.
Camera: consistent mildly elevated three-quarter view, approximately 85 mm product-photography perspective, no wide-angle distortion. Keep every part sharp.
Framing: landscape 4:3. Center the complete product or set; occupy approximately 75–82% of the available frame, with at least 8% safe margin on every edge. Preserve all tips, heads and openings. No cropped parts.
Finish: credible fine machining and grinding texture, controlled metal highlights, clean new components without scratches, oil or rust. Preserve the distinct appearance of steel, bronze, graphite and painted springs.
This is a representative product illustration, not a dimensional drawing or proof of actual stock. Do not invent dimensions, tolerances, certifications, brands or material-grade markings.
If an approved image is supplied later, use it ONLY as a lighting, background and photographic-style reference. The product geometry and object count must follow this job, not the style-reference object.

Asset type: shared product listing and product-detail main image.
Product family: Sprue Bushings.
Catalog function (context only): The sprue bushing connects the machine nozzle to the mold runner. Nozzle-seat geometry and the internal taper must suit the injection system.
Selected visible subject: One steel injection-mold sprue bushing with a broad head flange, a cylindrical shank and a centered sprue opening in a shallow concave nozzle-contact face. Show the head opening and shank in the same three-quarter view.
Exact physical object count: 1.
Composition: One complete component only. Use a diagonal resting pose for long slender parts; expose both working end and mounting end. Compact cylindrical parts may stand or rest with the bore facing the viewer.
Text policy: No text, labels, dimensions, arrows, logos, watermarks or webpage UI anywhere in the image.
Avoid: No solid closed inlet, bolt threads, transparent cutaway or taper dimensions. Also avoid fused geometry, physically impossible intersections, duplicate extra parts and floating shadows.
Do not attempt to depict every available catalog material or variant; depict only the selected subject above.
```

### 定位圈 · locating-rings

网站产品简介：定位圈将模具与注塑机模板定位孔对中，外径与伸出高度需匹配机台接口。

画面：2 个定位圈，平面型和台阶型各一件，中央大孔、环形定位面清楚。

重点检查：不生成齿轮或滚动轴承；不增加无依据的孔阵列。

预定地址：`/images/products/catalog/locating-rings.webp`

```text
Use case: product-mockup.
Create a realistic studio-style product illustration for a precision mold component catalog.
Use a seamless neutral off-white/light-gray background (#f5f6f7), a matte ground plane, soft diffused upper-left light and a restrained contact shadow to the lower right. Neutral white balance, no dramatic gradient or horizon line.
Camera: consistent mildly elevated three-quarter view, approximately 85 mm product-photography perspective, no wide-angle distortion. Keep every part sharp.
Framing: landscape 4:3. Center the complete product or set; occupy approximately 75–82% of the available frame, with at least 8% safe margin on every edge. Preserve all tips, heads and openings. No cropped parts.
Finish: credible fine machining and grinding texture, controlled metal highlights, clean new components without scratches, oil or rust. Preserve the distinct appearance of steel, bronze, graphite and painted springs.
This is a representative product illustration, not a dimensional drawing or proof of actual stock. Do not invent dimensions, tolerances, certifications, brands or material-grade markings.
If an approved image is supplied later, use it ONLY as a lighting, background and photographic-style reference. The product geometry and object count must follow this job, not the style-reference object.

Asset type: shared product listing and product-detail main image.
Product family: Locating Rings.
Catalog function (context only): A locating ring aligns the mold with the machine platen opening. Ring diameter and projection are matched to the press interface.
Selected visible subject: Exactly two steel mold locating rings: one plain annular ring and one stepped annular ring with a raised locating shoulder. Broad circular central openings and machined annular faces. Keep both openings unobstructed.
Exact physical object count: 2.
Composition: A small same-family collection in a shallow staggered arrangement. Space silhouettes clearly; no intersections or occlusion of working ends. Long parts may rest in a shallow fan; keep all axes straight. Do not introduce other families or extra duplicates.
Text policy: No text, labels, dimensions, arrows, logos, watermarks or webpage UI anywhere in the image.
Avoid: No gear teeth, bearing balls or arbitrary arrays of mounting holes. Also avoid fused geometry, physically impossible intersections, duplicate extra parts and floating shadows.
Do not attempt to depict every available catalog material or variant; depict only the selected subject above.
```

### 模具日期章 · mold-date-stamps

网站产品简介：可更换标记镶件在制品上形成日期或识别信息，字符布局与调节方式需同时确定。

画面：1 个日期章，圆柱外套与可调中心镶件，正面能看清月份刻度及指向关系。

重点检查：仅此产品允许功能性数字；数字错误不得上架，不用整图标语或品牌遮盖。

预定地址：`/images/products/catalog/mold-date-stamps.webp`

```text
Use case: product-mockup.
Create a realistic studio-style product illustration for a precision mold component catalog.
Use a seamless neutral off-white/light-gray background (#f5f6f7), a matte ground plane, soft diffused upper-left light and a restrained contact shadow to the lower right. Neutral white balance, no dramatic gradient or horizon line.
Camera: consistent mildly elevated three-quarter view, approximately 85 mm product-photography perspective, no wide-angle distortion. Keep every part sharp.
Framing: landscape 4:3. Center the complete product or set; occupy approximately 75–82% of the available frame, with at least 8% safe margin on every edge. Preserve all tips, heads and openings. No cropped parts.
Finish: credible fine machining and grinding texture, controlled metal highlights, clean new components without scratches, oil or rust. Preserve the distinct appearance of steel, bronze, graphite and painted springs.
This is a representative product illustration, not a dimensional drawing or proof of actual stock. Do not invent dimensions, tolerances, certifications, brands or material-grade markings.
If an approved image is supplied later, use it ONLY as a lighting, background and photographic-style reference. The product geometry and object count must follow this job, not the style-reference object.

Asset type: shared product listing and product-detail main image.
Product family: Mold Date Stamps.
Catalog function (context only): A replaceable marking insert places date or identification information on molded parts. The marking layout and adjustment method are specified together.
Selected visible subject: One cylindrical mold date stamp viewed toward its marking face: a circular steel outer insert with exactly twelve evenly spaced small engraved month numerals 1 through 12, and a separate flush central adjustable insert carrying one simple arrow pointing to a single numeral. Crisp concentric construction.
Exact physical object count: 1.
Composition: One complete component only. Use a diagonal resting pose for long slender parts; expose both working end and mounting end. Compact cylindrical parts may stand or rest with the bore facing the viewer.
Text policy: Only the specified functional month numerals and central arrow may appear on the part. No other text, logo, watermark or webpage UI. If legible correct engraving cannot be achieved, flag for correction rather than publishing gibberish.
Avoid: No repeated or missing month numerals, impossible arrow, fake year, decorative text, branding or surrounding captions. Also avoid fused geometry, physically impossible intersections, duplicate extra parts and floating shadows.
Do not attempt to depict every available catalog material or variant; depict only the selected subject above.
```

### 侧锁与精定位块 · side-locks

网站产品简介：相互配合的定位面辅助模具闭合定位，安装基准需与主导向系统协调。

画面：1 对侧锁，公块与母块共 2 件，分开展示可相互配合的凸台和凹槽。

重点检查：不要两块都做成凸块；不凭空悬浮拼装。

预定地址：`/images/products/catalog/side-locks.webp`

```text
Use case: product-mockup.
Create a realistic studio-style product illustration for a precision mold component catalog.
Use a seamless neutral off-white/light-gray background (#f5f6f7), a matte ground plane, soft diffused upper-left light and a restrained contact shadow to the lower right. Neutral white balance, no dramatic gradient or horizon line.
Camera: consistent mildly elevated three-quarter view, approximately 85 mm product-photography perspective, no wide-angle distortion. Keep every part sharp.
Framing: landscape 4:3. Center the complete product or set; occupy approximately 75–82% of the available frame, with at least 8% safe margin on every edge. Preserve all tips, heads and openings. No cropped parts.
Finish: credible fine machining and grinding texture, controlled metal highlights, clean new components without scratches, oil or rust. Preserve the distinct appearance of steel, bronze, graphite and painted springs.
This is a representative product illustration, not a dimensional drawing or proof of actual stock. Do not invent dimensions, tolerances, certifications, brands or material-grade markings.
If an approved image is supplied later, use it ONLY as a lighting, background and photographic-style reference. The product geometry and object count must follow this job, not the style-reference object.

Asset type: shared product listing and product-detail main image.
Product family: Side Locks & Interlocks.
Catalog function (context only): Interlocking mating faces help locate mold halves at closure. Their mounting datums should be coordinated with the main guide system.
Selected visible subject: One two-piece mold side-lock pair: a steel male locating block with a straight raised locating tongue and a matching female block with a complementary open recess. Show both mating surfaces separately at the same scale and alignment.
Exact physical object count: 2.
Composition: A separated matched set. Keep mating interfaces visible and visual scales consistent. Do not fuse or assemble the pieces; no exploded-view arrows.
Text policy: No text, labels, dimensions, arrows, logos, watermarks or webpage UI anywhere in the image.
Avoid: No two male halves, incompatible mating shapes, floating assembled parts or unnecessary decorative features. Also avoid fused geometry, physically impossible intersections, duplicate extra parts and floating shadows.
Do not attempt to depict every available catalog material or variant; depict only the selected subject above.
```

### 限位螺栓 · stopper-bolts

网站产品简介：肩部或止挡面在装配结构中限制模板行程，强度与啮合长度需按实际载荷核对。

画面：1 支带肩限位螺栓，圆头内六角、光滑定位肩与较短外螺纹端。

重点检查：不能全长带螺纹；螺纹不得沿错误方向或融化。

预定地址：`/images/products/catalog/stopper-bolts.webp`

```text
Use case: product-mockup.
Create a realistic studio-style product illustration for a precision mold component catalog.
Use a seamless neutral off-white/light-gray background (#f5f6f7), a matte ground plane, soft diffused upper-left light and a restrained contact shadow to the lower right. Neutral white balance, no dramatic gradient or horizon line.
Camera: consistent mildly elevated three-quarter view, approximately 85 mm product-photography perspective, no wide-angle distortion. Keep every part sharp.
Framing: landscape 4:3. Center the complete product or set; occupy approximately 75–82% of the available frame, with at least 8% safe margin on every edge. Preserve all tips, heads and openings. No cropped parts.
Finish: credible fine machining and grinding texture, controlled metal highlights, clean new components without scratches, oil or rust. Preserve the distinct appearance of steel, bronze, graphite and painted springs.
This is a representative product illustration, not a dimensional drawing or proof of actual stock. Do not invent dimensions, tolerances, certifications, brands or material-grade markings.
If an approved image is supplied later, use it ONLY as a lighting, background and photographic-style reference. The product geometry and object count must follow this job, not the style-reference object.

Asset type: shared product listing and product-detail main image.
Product family: Stopper Bolts.
Catalog function (context only): A shoulder or stop face limits plate travel in the designed assembly. Strength and engagement must be checked for the actual load.
Selected visible subject: One mold stopper shoulder bolt with a cylindrical socket head, a long smooth precision shoulder and a shorter reduced-diameter external threaded end. Show the shoulder-to-thread transition and socket clearly.
Exact physical object count: 1.
Composition: One complete component only. Use a diagonal resting pose for long slender parts; expose both working end and mounting end. Compact cylindrical parts may stand or rest with the bore facing the viewer.
Text policy: No text, labels, dimensions, arrows, logos, watermarks or webpage UI anywhere in the image.
Avoid: No fully threaded shoulder, malformed thread, bent axis or mismatched socket geometry. Also avoid fused geometry, physically impossible intersections, duplicate extra parts and floating shadows.
Do not attempt to depict every available catalog material or variant; depict only the selected subject above.
```

### 拉杆 · pull-rods

网站产品简介：拉杆根据开模结构连接或带动模板，端部连接与有效行程以装配要求为准。

画面：2 支模具拉杆，一支螺纹端式、一支带肩端式，长直杆与连接端清楚可见。

重点检查：不要拉伸成钢丝，不添加螺旋弹簧或不明机构。

预定地址：`/images/products/catalog/pull-rods.webp`

```text
Use case: product-mockup.
Create a realistic studio-style product illustration for a precision mold component catalog.
Use a seamless neutral off-white/light-gray background (#f5f6f7), a matte ground plane, soft diffused upper-left light and a restrained contact shadow to the lower right. Neutral white balance, no dramatic gradient or horizon line.
Camera: consistent mildly elevated three-quarter view, approximately 85 mm product-photography perspective, no wide-angle distortion. Keep every part sharp.
Framing: landscape 4:3. Center the complete product or set; occupy approximately 75–82% of the available frame, with at least 8% safe margin on every edge. Preserve all tips, heads and openings. No cropped parts.
Finish: credible fine machining and grinding texture, controlled metal highlights, clean new components without scratches, oil or rust. Preserve the distinct appearance of steel, bronze, graphite and painted springs.
This is a representative product illustration, not a dimensional drawing or proof of actual stock. Do not invent dimensions, tolerances, certifications, brands or material-grade markings.
If an approved image is supplied later, use it ONLY as a lighting, background and photographic-style reference. The product geometry and object count must follow this job, not the style-reference object.

Asset type: shared product listing and product-detail main image.
Product family: Pull Rods.
Catalog function (context only): Pull rods connect or sequence mold plates according to the opening arrangement. End connections and effective travel are defined by the assembly.
Selected visible subject: Exactly two straight mold pull rods, one with a short external threaded connection end and one with a distinct integral shoulder end. Long sturdy cylindrical bodies, clearly visible end connections, silver machined steel.
Exact physical object count: 2.
Composition: A small same-family collection in a shallow staggered arrangement. Space silhouettes clearly; no intersections or occlusion of working ends. Long parts may rest in a shallow fan; keep all axes straight. Do not introduce other families or extra duplicates.
Text policy: No text, labels, dimensions, arrows, logos, watermarks or webpage UI anywhere in the image.
Avoid: No flexible wire, spring coils, hooks or invented linked mechanism. Also avoid fused geometry, physically impossible intersections, duplicate extra parts and floating shadows.
Do not attempt to depict every available catalog material or variant; depict only the selected subject above.
```

### 石墨铜套 · graphite-bronze-bushings

网站产品简介：铜合金基体内嵌固体润滑块，用于难以连续补充润滑的滑动工况，适用性取决于载荷、速度及温度。

画面：2 个石墨铜套，直筒与法兰各一个；内孔轴承工作面清晰可见规则深灰石墨嵌块，两件之间留有明显间距。

重点检查：不能像初稿只在外壁有石墨点；核对内孔工作面的嵌块，石墨不能成为通孔或凸起钢球。

预定地址：`/images/products/catalog/graphite-bronze-bushings.webp`

```text
Use case: product-mockup.
Create a realistic studio-style product illustration for a precision mold component catalog.
Use a seamless neutral off-white/light-gray background (#f5f6f7), a matte ground plane, soft diffused upper-left light and a restrained contact shadow to the lower right. Neutral white balance, no dramatic gradient or horizon line.
Camera: consistent mildly elevated three-quarter view, approximately 85 mm product-photography perspective, no wide-angle distortion. Keep every part sharp.
Framing: landscape 4:3. Center the complete product or set; occupy approximately 75–82% of the available frame, with at least 8% safe margin on every edge. Preserve all tips, heads and openings. No cropped parts.
Finish: credible fine machining and grinding texture, controlled metal highlights, clean new components without scratches, oil or rust. Preserve the distinct appearance of steel, bronze, graphite and painted springs.
This is a representative product illustration, not a dimensional drawing or proof of actual stock. Do not invent dimensions, tolerances, certifications, brands or material-grade markings.
If an approved image is supplied later, use it ONLY as a lighting, background and photographic-style reference. The product geometry and object count must follow this job, not the style-reference object.

Asset type: shared product listing and product-detail main image.
Product family: Graphite Bronze Bushings.
Catalog function (context only): Solid-lubricant plugs in a copper-alloy body support sliding applications where continuous lubrication is difficult. Suitability depends on load, speed and temperature.
Selected visible subject: Exactly two graphite-plugged bronze inner-diameter sliding bushings: one straight sleeve and one integral-flange sleeve. Warm muted bronze matrix, concentric open through-bores, and separate flush dark circular solid-lubricant plugs clearly visible in orderly staggered positions on the INNER bore bearing surface. Do not place all plugs exclusively on the outer cylinder. Orient both openings toward the camera; preserve a visible air gap between the two parts.
Exact physical object count: 2.
Composition: A small same-family collection in a shallow staggered arrangement. Space silhouettes clearly; no intersections or occlusion of working ends. Long parts may rest in a shallow fan; keep all axes straight. Do not introduce other families or extra duplicates.
Text policy: No text, labels, dimensions, arrows, logos, watermarks or webpage UI anywhere in the image.
Avoid: No drilled-through graphite holes, raised steel balls, random black smears or mirror-gold jewelry finish. Also avoid fused geometry, physically impossible intersections, duplicate extra parts and floating shadows.
Do not attempt to depict every available catalog material or variant; depict only the selected subject above.
```

### 普通铜套 · bronze-bushings

网站产品简介：机加工铜套提供可更换滑动轴承面。普通铜套不等于自润滑铜套，需明确润滑方式。

画面：1 个普通铜套，光孔厚壁圆筒，暖铜色机加工纹理，无石墨点。

重点检查：不得出现黑色石墨点；不要暗示普通铜套天然自润滑。

预定地址：`/images/products/catalog/bronze-bushings.webp`

```text
Use case: product-mockup.
Create a realistic studio-style product illustration for a precision mold component catalog.
Use a seamless neutral off-white/light-gray background (#f5f6f7), a matte ground plane, soft diffused upper-left light and a restrained contact shadow to the lower right. Neutral white balance, no dramatic gradient or horizon line.
Camera: consistent mildly elevated three-quarter view, approximately 85 mm product-photography perspective, no wide-angle distortion. Keep every part sharp.
Framing: landscape 4:3. Center the complete product or set; occupy approximately 75–82% of the available frame, with at least 8% safe margin on every edge. Preserve all tips, heads and openings. No cropped parts.
Finish: credible fine machining and grinding texture, controlled metal highlights, clean new components without scratches, oil or rust. Preserve the distinct appearance of steel, bronze, graphite and painted springs.
This is a representative product illustration, not a dimensional drawing or proof of actual stock. Do not invent dimensions, tolerances, certifications, brands or material-grade markings.
If an approved image is supplied later, use it ONLY as a lighting, background and photographic-style reference. The product geometry and object count must follow this job, not the style-reference object.

Asset type: shared product listing and product-detail main image.
Product family: Plain Bronze Bushings.
Catalog function (context only): Machined bronze sleeves provide a replaceable sliding bearing surface. Plain bronze is not automatically self-lubricating; specify the lubrication arrangement.
Selected visible subject: One plain bronze sleeve bushing with a smooth open concentric bore, thick cylindrical wall, small chamfers and subtle machining marks. Muted warm bronze tone without inserted lubricant plugs.
Exact physical object count: 1.
Composition: One complete component only. Use a diagonal resting pose for long slender parts; expose both working end and mounting end. Compact cylindrical parts may stand or rest with the bore facing the viewer.
Text policy: No text, labels, dimensions, arrows, logos, watermarks or webpage UI anywhere in the image.
Avoid: No graphite plugs, ball elements, gold plating or added self-lubricating labels. Also avoid fused geometry, physically impossible intersections, duplicate extra parts and floating shadows.
Do not attempt to depict every available catalog material or variant; depict only the selected subject above.
```

### 法兰铜套 · flanged-bronze-bushings

网站产品简介：整体法兰铜套增加轴向定位或承载面，需同时说明径向与轴向工况。

画面：1 个普通法兰铜套，突出法兰环面、筒体和中央贯通孔，采用无石墨代表款。

重点检查：法兰与筒体须一体；不添加石墨点、螺栓或钢轴。

预定地址：`/images/products/catalog/flanged-bronze-bushings.webp`

```text
Use case: product-mockup.
Create a realistic studio-style product illustration for a precision mold component catalog.
Use a seamless neutral off-white/light-gray background (#f5f6f7), a matte ground plane, soft diffused upper-left light and a restrained contact shadow to the lower right. Neutral white balance, no dramatic gradient or horizon line.
Camera: consistent mildly elevated three-quarter view, approximately 85 mm product-photography perspective, no wide-angle distortion. Keep every part sharp.
Framing: landscape 4:3. Center the complete product or set; occupy approximately 75–82% of the available frame, with at least 8% safe margin on every edge. Preserve all tips, heads and openings. No cropped parts.
Finish: credible fine machining and grinding texture, controlled metal highlights, clean new components without scratches, oil or rust. Preserve the distinct appearance of steel, bronze, graphite and painted springs.
This is a representative product illustration, not a dimensional drawing or proof of actual stock. Do not invent dimensions, tolerances, certifications, brands or material-grade markings.
If an approved image is supplied later, use it ONLY as a lighting, background and photographic-style reference. The product geometry and object count must follow this job, not the style-reference object.

Asset type: shared product listing and product-detail main image.
Product family: Flanged Bronze Bushings.
Catalog function (context only): A bronze sleeve with an integral flange adds an axial locating or thrust face. Radial and axial working conditions should both be specified.
Selected visible subject: One plain bronze flanged bushing with an integral annular flange at one end of a cylindrical sleeve, an open concentric bore, restrained edge chamfers and a warm machined bronze finish. No solid-lubricant inserts in this selected variant.
Exact physical object count: 1.
Composition: One complete component only. Use a diagonal resting pose for long slender parts; expose both working end and mounting end. Compact cylindrical parts may stand or rest with the bore facing the viewer.
Text policy: No text, labels, dimensions, arrows, logos, watermarks or webpage UI anywhere in the image.
Avoid: No separate loose flange, graphite dots, bolts or inserted steel shaft. Also avoid fused geometry, physically impossible intersections, duplicate extra parts and floating shadows.
Do not attempt to depict every available catalog material or variant; depict only the selected subject above.
```

### 耐磨板与滑板 · wear-plates

网站产品简介：可更换板件为模具滑块等运动配合提供耐磨面，需明确摩擦副及润滑要求。

画面：2 块铜合金耐磨板：一块镶石墨、一块带浅油槽，倾斜展示平面和厚度。

重点检查：石墨点不可成为通孔；油槽不可变成贯穿裂缝。

预定地址：`/images/products/catalog/wear-plates.webp`

```text
Use case: product-mockup.
Create a realistic studio-style product illustration for a precision mold component catalog.
Use a seamless neutral off-white/light-gray background (#f5f6f7), a matte ground plane, soft diffused upper-left light and a restrained contact shadow to the lower right. Neutral white balance, no dramatic gradient or horizon line.
Camera: consistent mildly elevated three-quarter view, approximately 85 mm product-photography perspective, no wide-angle distortion. Keep every part sharp.
Framing: landscape 4:3. Center the complete product or set; occupy approximately 75–82% of the available frame, with at least 8% safe margin on every edge. Preserve all tips, heads and openings. No cropped parts.
Finish: credible fine machining and grinding texture, controlled metal highlights, clean new components without scratches, oil or rust. Preserve the distinct appearance of steel, bronze, graphite and painted springs.
This is a representative product illustration, not a dimensional drawing or proof of actual stock. Do not invent dimensions, tolerances, certifications, brands or material-grade markings.
If an approved image is supplied later, use it ONLY as a lighting, background and photographic-style reference. The product geometry and object count must follow this job, not the style-reference object.

Asset type: shared product listing and product-detail main image.
Product family: Wear & Slide Plates.
Catalog function (context only): Replaceable plates form a controlled wear surface on mold slides and other moving interfaces. Specify the sliding pair and lubrication requirements.
Selected visible subject: Exactly two rectangular bronze-alloy wear plates resting separately: one with orderly flush circular graphite plugs on its broad bearing face, the other with shallow machined lubrication grooves. Flat parallel surfaces, modest plate thickness, subtle chamfered edges.
Exact physical object count: 2.
Composition: A small same-family collection in a shallow staggered arrangement. Space silhouettes clearly; no intersections or occlusion of working ends. Long parts may rest in a shallow fan; keep all axes straight. Do not introduce other families or extra duplicates.
Text policy: No text, labels, dimensions, arrows, logos, watermarks or webpage UI anywhere in the image.
Avoid: No graphite through-holes, deep cracks, warped plates or jewelry-gold reflections. Also avoid fused geometry, physically impossible intersections, duplicate extra parts and floating shadows.
Do not attempt to depict every available catalog material or variant; depict only the selected subject above.
```

### 精密圆柱销 · precision-dowel-pins

网站产品简介：磨削圆柱销用于零件重复装配定位，淬硬或定制长度属于同一定位销系列的选项。

画面：3 根精密圆柱销，短实心圆柱、两端轻倒角，长度和直径适度变化。

重点检查：不添加安装头、螺纹、孔或锥形针尖。

预定地址：`/images/products/catalog/precision-dowel-pins.webp`

```text
Use case: product-mockup.
Create a realistic studio-style product illustration for a precision mold component catalog.
Use a seamless neutral off-white/light-gray background (#f5f6f7), a matte ground plane, soft diffused upper-left light and a restrained contact shadow to the lower right. Neutral white balance, no dramatic gradient or horizon line.
Camera: consistent mildly elevated three-quarter view, approximately 85 mm product-photography perspective, no wide-angle distortion. Keep every part sharp.
Framing: landscape 4:3. Center the complete product or set; occupy approximately 75–82% of the available frame, with at least 8% safe margin on every edge. Preserve all tips, heads and openings. No cropped parts.
Finish: credible fine machining and grinding texture, controlled metal highlights, clean new components without scratches, oil or rust. Preserve the distinct appearance of steel, bronze, graphite and painted springs.
This is a representative product illustration, not a dimensional drawing or proof of actual stock. Do not invent dimensions, tolerances, certifications, brands or material-grade markings.
If an approved image is supplied later, use it ONLY as a lighting, background and photographic-style reference. The product geometry and object count must follow this job, not the style-reference object.

Asset type: shared product listing and product-detail main image.
Product family: Precision Dowel Pins.
Catalog function (context only): Ground cylindrical pins locate mating parts for repeat assembly. Hardened and custom-length versions remain within the same locating-pin family.
Selected visible subject: Exactly three short solid precision dowel pins with straight constant-diameter ground cylinders, flat ends and small end chamfers. A modest progression in length and diameter, all silver steel.
Exact physical object count: 3.
Composition: A small same-family collection in a shallow staggered arrangement. Space silhouettes clearly; no intersections or occlusion of working ends. Long parts may rest in a shallow fan; keep all axes straight. Do not introduce other families or extra duplicates.
Text policy: No text, labels, dimensions, arrows, logos, watermarks or webpage UI anywhere in the image.
Avoid: No retaining heads, threads, hollow ends or conical pilot tips. Also avoid fused geometry, physically impossible intersections, duplicate extra parts and floating shadows.
Do not attempt to depict every available catalog material or variant; depict only the selected subject above.
```

### 螺纹与拔出式定位销 · threaded-dowel-pins

网站产品简介：定位圆柱面结合安装或拔出螺纹，螺纹服务于装拆，定位精度仍取决于磨削直径与孔的配合。

画面：2 根定位销，一根端面内螺纹拔出孔、一根短外螺纹端，定位圆柱面保持光滑。

重点检查：内螺纹孔不能是光孔；不要全杆螺纹或螺栓大头。

预定地址：`/images/products/catalog/threaded-dowel-pins.webp`

```text
Use case: product-mockup.
Create a realistic studio-style product illustration for a precision mold component catalog.
Use a seamless neutral off-white/light-gray background (#f5f6f7), a matte ground plane, soft diffused upper-left light and a restrained contact shadow to the lower right. Neutral white balance, no dramatic gradient or horizon line.
Camera: consistent mildly elevated three-quarter view, approximately 85 mm product-photography perspective, no wide-angle distortion. Keep every part sharp.
Framing: landscape 4:3. Center the complete product or set; occupy approximately 75–82% of the available frame, with at least 8% safe margin on every edge. Preserve all tips, heads and openings. No cropped parts.
Finish: credible fine machining and grinding texture, controlled metal highlights, clean new components without scratches, oil or rust. Preserve the distinct appearance of steel, bronze, graphite and painted springs.
This is a representative product illustration, not a dimensional drawing or proof of actual stock. Do not invent dimensions, tolerances, certifications, brands or material-grade markings.
If an approved image is supplied later, use it ONLY as a lighting, background and photographic-style reference. The product geometry and object count must follow this job, not the style-reference object.

Asset type: shared product listing and product-detail main image.
Product family: Threaded & Pull Dowel Pins.
Catalog function (context only): A cylindrical locating surface is combined with a thread for fitting or extraction. The thread supports handling; the ground diameter controls positioning.
Selected visible subject: Exactly two threaded locating dowel pins: one with a clearly visible internal extraction thread in one end face, and one with a short reduced external threaded end. Both retain a substantial smooth ground cylindrical locating body.
Exact physical object count: 2.
Composition: A small same-family collection in a shallow staggered arrangement. Space silhouettes clearly; no intersections or occlusion of working ends. Long parts may rest in a shallow fan; keep all axes straight. Do not introduce other families or extra duplicates.
Text policy: No text, labels, dimensions, arrows, logos, watermarks or webpage UI anywhere in the image.
Avoid: No smooth unthreaded extraction hole, fully threaded locating body or oversized bolt head. Also avoid fused geometry, physically impossible intersections, duplicate extra parts and floating shadows.
Do not attempt to depict every available catalog material or variant; depict only the selected subject above.
```

### 导正销 · pilot-pins

网站产品简介：引导端进入已冲孔位，在后续冲压工序前对条料进行定位。

画面：2 根导正销，圆形导入端和带削边导入端各一支，头部短而圆滑，后接定位段。

重点检查：不能成为长尖针或普通平头顶针；削边不能切断杆部。

预定地址：`/images/products/catalog/pilot-pins.webp`

```text
Use case: product-mockup.
Create a realistic studio-style product illustration for a precision mold component catalog.
Use a seamless neutral off-white/light-gray background (#f5f6f7), a matte ground plane, soft diffused upper-left light and a restrained contact shadow to the lower right. Neutral white balance, no dramatic gradient or horizon line.
Camera: consistent mildly elevated three-quarter view, approximately 85 mm product-photography perspective, no wide-angle distortion. Keep every part sharp.
Framing: landscape 4:3. Center the complete product or set; occupy approximately 75–82% of the available frame, with at least 8% safe margin on every edge. Preserve all tips, heads and openings. No cropped parts.
Finish: credible fine machining and grinding texture, controlled metal highlights, clean new components without scratches, oil or rust. Preserve the distinct appearance of steel, bronze, graphite and painted springs.
This is a representative product illustration, not a dimensional drawing or proof of actual stock. Do not invent dimensions, tolerances, certifications, brands or material-grade markings.
If an approved image is supplied later, use it ONLY as a lighting, background and photographic-style reference. The product geometry and object count must follow this job, not the style-reference object.

Asset type: shared product listing and product-detail main image.
Product family: Pilot Pins.
Catalog function (context only): A shaped lead-in enters a previously pierced hole to locate strip material before the next stamping operation.
Selected visible subject: Exactly two stamping pilot pins with supported locating bodies: one with a short gently tapered rounded lead-in nose, and one with a small relieved flat on the lead-in region. Show smooth transitions into the cylindrical locating diameters.
Exact physical object count: 2.
Composition: A small same-family collection in a shallow staggered arrangement. Space silhouettes clearly; no intersections or occlusion of working ends. Long parts may rest in a shallow fan; keep all axes straight. Do not introduce other families or extra duplicates.
Text policy: No text, labels, dimensions, arrows, logos, watermarks or webpage UI anywhere in the image.
Avoid: No long needle points, flat-ended ejector tips or broken shaft at the relieved area. Also avoid fused geometry, physically impossible intersections, duplicate extra parts and floating shadows.
Do not attempt to depict every available catalog material or variant; depict only the selected subject above.
```

### 浮升销与浮料销 · floating-pins

网站产品简介：在冲压工序间抬起或支撑条料，为送料提供所需间隙。

画面：1 个代表性浮升销，宽圆形承料头、台阶导向杆，展示承料面，不展示内部弹簧。

重点检查：具体浮料结构按图定制；不要生成外露弹簧、尖头或滚轮。

预定地址：`/images/products/catalog/floating-pins.webp`

```text
Use case: product-mockup.
Create a realistic studio-style product illustration for a precision mold component catalog.
Use a seamless neutral off-white/light-gray background (#f5f6f7), a matte ground plane, soft diffused upper-left light and a restrained contact shadow to the lower right. Neutral white balance, no dramatic gradient or horizon line.
Camera: consistent mildly elevated three-quarter view, approximately 85 mm product-photography perspective, no wide-angle distortion. Keep every part sharp.
Framing: landscape 4:3. Center the complete product or set; occupy approximately 75–82% of the available frame, with at least 8% safe margin on every edge. Preserve all tips, heads and openings. No cropped parts.
Finish: credible fine machining and grinding texture, controlled metal highlights, clean new components without scratches, oil or rust. Preserve the distinct appearance of steel, bronze, graphite and painted springs.
This is a representative product illustration, not a dimensional drawing or proof of actual stock. Do not invent dimensions, tolerances, certifications, brands or material-grade markings.
If an approved image is supplied later, use it ONLY as a lighting, background and photographic-style reference. The product geometry and object count must follow this job, not the style-reference object.

Asset type: shared product listing and product-detail main image.
Product family: Floating & Lifter Pins.
Catalog function (context only): Lifter pins raise or support strip material between stamping operations to provide clearance for feeding.
Selected visible subject: One representative stamping-strip lifter pin with a broad flat round stock-supporting head and a stepped cylindrical guide stem. Short robust proportions, flat support surface, exterior component only.
Exact physical object count: 1.
Composition: One complete component only. Use a diagonal resting pose for long slender parts; expose both working end and mounting end. Compact cylindrical parts may stand or rest with the bore facing the viewer.
Text policy: No text, labels, dimensions, arrows, logos, watermarks or webpage UI anywhere in the image.
Avoid: No exposed coil spring, piercing tip, wheel or invented internal actuation mechanism. Also avoid fused geometry, physically impossible intersections, duplicate extra parts and floating shadows.
Do not attempt to depict every available catalog material or variant; depict only the selected subject above.
```

