# 产品图片制作计划 · V3

> 2026-09-30：基于全部目录与详情重整后的方案。由 scripts/prepare-catalog.mjs 生成；此脚本不调用生图 API。主图修改 image-briefs.json，详情图修改 detail-image-briefs.json，款式内容修改 src/data/catalog-details.json。

## 总量与当前状态

36 个系列、122 个可组合选项，规划 78 个成品构图：36 张系列主图 + 34 张结构/款式详情图 + 7 张分类合成图 + 1 张横幅。三种语言复用，同一张图内的零件数不是图片数。
已有 7 张冲头主图在线：A 型按台阶结构重做并在硬质合金详情中复用；T 型单肩使用独立的三支规格组合图。其他系列按各自任务逐项更新。另有 29 张主图尚待制作。
若执行完整方案且全部首稿通过，待生成目标为 29 张新主图 + 6 张主图新版 + 33 张详情图，共 68 张（另有详情素材复用）；8 张合成图不额外生图。这是分阶段内容目标，不是一次提交 68 次请求，也不是费用上限。
70 张主图和详情图中：21 张单件构图、43 张同系列组合、6 张配套组件。横幅手机端另导出一份，不增加构图数量。

## 为什么这样分配

- 主图回答“这一系列能做什么”：冲头主业务优先采用多件组合，工作端与安装端都要清楚；其他系列依产品结构采用单件、组合或配套组件。
- 详情图只用于需要看清的形状和配合区别。钢材牌号、氮化层深、涂层性能、尺寸公差及设备兼容不靠图片证明，也不为每个材料标签重复生图。
- 122 个选项均有图文安排。部分共享代表性主图，部分链接独立详情图，材质/处理选项使用文字说明；共享主图不表示图中同时呈现所有选项。
- 材料、适用理由、应用工况、表面处理及 FAQ 使用本次写好的三语内容，不生成虚构工厂、认证、客户案例或性能对比图片。

## 分步生成与直接接入

1. 风格已确认，沿用相同背景和光线参考。先补齐硬质合金详情中的不同结构，不继续围绕主图反复审图和加工。
2. 每次生成 1 张，每批 2–3 张，生成成功后直接接入网站。原图不反复审查、校色或导出，旧版本保留。
3. 按硬质合金 → 高速钢 → 台阶 → 冲压模 → 异形成型 → A 型 → 压片，分批制作各系列冲头详情图。双冲尖、分割线等复杂图使用各自的结构提示词。
4. 依顶出、导向、弹簧、模具辅助件、铜套耐磨件、定位销顺序处理剩余 29 张主图与 9 张详情图。之前不合格的扁顶针/石墨铜套草稿不直接发布。
5. 各类素材审核后再合成 7 张分类图，最后完成 1 张横幅及手机版。当前冲头入口仍使用已通过的 4 图拼版。
6. 最后统一检查手机端两列卡片、单列详情、头部与工作端是否被裁切，以及色温和明暗一致性。

## 风格与验收

浅灰白 #f5f6f7 背景、左上柔光、右下轻接触阴影、中性白平衡、轻俯视斜侧视角；主图和详情图统一 4:3。保留至少 8% 留白，长杆可斜放。风格统一不等于所有部件都变成同样长短或颜色。
优先检查真实可解释的形状：直线轴、合理台阶、孔是否贯通、钢球是否被保持、内孔石墨点、六角/八角边数、椭圆与长圆区别。AI 图仅作产品示意，具体尺寸和型号按确认图纸。没有工程图时不生成精确剖面、公差图或内部机制证明。
当前优先执行冲头冲针专项计划，其他类别暂不生成。页面仅展示产品名称和必要的图纸规格说明，不显示 AI 效果图等标记；生成来源保留在内部。
提示词已逐张编写。使用用户确认的风格参考，生成后直接上图，不反复审图和处理图片；不自动重试，保留旧版本和提示词。

## 每类数量与具体图片

### 冲针与冲头：7 张主图 + 25 张详情图 + 1 张分类合成图 = 33 张

- **硬质合金冲头（钨钢）**：主图 1 张，画面 5 件，同系列组合图。5 支细长硬质合金冲头组合：圆形、方形、六角、长圆及台阶圆冲各一支，展示安装头和工作端。 状态：计划新版，旧图保留。
  - 详情图：A 冲款式 · 单台阶 / 多级阶梯 / 锥肩，3 件，同系列组合图。检查：三件的台阶数量、肩部形状及轮廓明确不同，不能只改变尺寸。
  - 详情图：T 型单肩冲针系列，3 件，同系列组合图。检查：先明确每件不同的结构款式，再生成；不使用同款缩放组合。
  - 详情图：六角冲头 · 六边形工作端系列，3 件，同系列组合图。检查：先明确每件不同的结构款式，再生成；不使用同款缩放组合。
  - 详情图：椭圆与长圆 · 两种工作轮廓，2 件，同系列组合图。检查：图片与该卡片的结构名称对应，直接使用生成原图。
  - 详情图：未涂层与涂层 · 外观对比，2 件，同系列组合图。检查：图片与该卡片的结构名称对应，直接使用生成原图。
  - 详情图：方形与矩形刃口，2 件，同系列组合图。检查：方形与矩形可辨，刃口不能变为螺丝刀或钻头。
  - 详情图：硬质合金台阶结构系列，3 件，同系列组合图。检查：先明确每件不同的结构款式，再生成；不使用同款缩放组合。
  - 详情图：切断冲头工作端系列，3 件，同系列组合图。检查：先明确每件不同的结构款式，再生成；不使用同款缩放组合。
- **高速钢冲头**：主图 1 张，画面 4 件，同系列组合图。4 支高速钢冲头：直身圆冲、台阶圆冲、矩形冲、六角冲，均为银灰色细长结构。 状态：计划新版，旧图保留。
  - 详情图：高速钢方形与矩形冲头，2 件，同系列组合图。检查：两种截面清楚，不通过颜色表示不同钢号。
  - 详情图：窄扁冲裁工作段系列，3 件，同系列组合图。检查：先明确每件不同的结构款式，再生成；不使用同款缩放组合。
  - 详情图：高速钢单台阶冲头系列，3 件，同系列组合图。检查：先明确每件不同的结构款式，再生成；不使用同款缩放组合。
  - 详情图：高速钢六角与八角冲头，2 件，同系列组合图。检查：逐一核对六边和八边；边数不对即不发布。
- **台阶与多级冲头**：主图 1 张，画面 4 件，同系列组合图。4 支台阶冲头：单台阶圆冲、多级圆冲、台阶方冲、T 头缩径冲，完整呈现肩位。 状态：计划新版，旧图保留。
  - 详情图：台阶方冲系列，3 件，同系列组合图。检查：先明确每件不同的结构款式，再生成；不使用同款缩放组合。
  - 详情图：台阶异形与长圆冲头，2 件，同系列组合图。检查：长圆直边与半圆端清晰，不能混成椭圆。
  - 详情图：多级台阶结构系列，3 件，同系列组合图。检查：先明确每件不同的结构款式，再生成；不使用同款缩放组合。
- **冲压模冲头**：主图 1 张，画面 4 件，同系列组合图。4 件冲压模冲头组合：圆孔、矩形、长圆及切断工作端，安装端完整。 状态：计划新版，旧图保留。
  - 详情图：冲压切断件系列，3 件，同系列组合图。检查：先明确每件不同的结构款式，再生成；不使用同款缩放组合。
  - 详情图：可更换冲裁件安装端系列，3 件，同系列组合图。检查：先明确每件不同的结构款式，再生成；不使用同款缩放组合。
  - 详情图：长圆槽冲头系列，3 件，同系列组合图。检查：先明确每件不同的结构款式，再生成；不使用同款缩放组合。
- **异形与成型冲头**：主图 1 张，画面 4 件，同系列组合图。4 支异形与成型冲头：六角、椭圆、长圆、圆弧成型端，突出不同工作面。 状态：计划新版，旧图保留。
  - 详情图：方形与六角轮廓，2 件，同系列组合图。检查：几何边数与直线度正确。
  - 详情图：椭圆与长圆对比，2 件，同系列组合图。检查：两种轮廓必须确实不同。
  - 详情图：曲面成型与斜面工作端，2 件，同系列组合图。检查：圆弧成型端不应生成锋利尖刺，斜面件不能弯曲。
- **A 型台阶冲针**：主图 1 张，画面 3 件，同系列组合图。A 冲不同款式组合：单台阶圆冲、多级阶梯圆冲、锥肩缩径细针，各 1 支。 状态：计划新版，旧图保留。
  - 详情图：带削边安装位的圆冲系列，3 件，同系列组合图。检查：先明确每件不同的结构款式，再生成；不使用同款缩放组合。
- **压片冲模**：主图 1 张，画面 3 件，配套组件图。1 套压片冲模：上冲、下冲、中模共 3 件，平行分开摆放，展示圆形浅凹冲面与中模通孔。 状态：复用已审核主图。
  - 详情图：三种压片冲面系列，3 件，同系列组合图。检查：冲面是浅凹面，不是实心平冲裁刃；不虚构压机型号。
  - 详情图：分割线冲面系列，3 件，同系列组合图。检查：先明确每件不同的结构款式，再生成；不使用同款缩放组合。
  - 详情图：双冲尖代表结构系列，3 件，同系列组合图。检查：先明确每件不同的结构款式，再生成；不使用同款缩放组合。

### 顶出组件：7 张主图 + 3 张详情图 + 1 张分类合成图 = 11 张

- **直身顶针**：主图 1 张，画面 3 件，同系列组合图。3 支直身顶针，长度适度变化，圆杆直径均匀、尾部扁圆头，顶出端平整。 状态：待制作。
- **带肩顶针**：主图 1 张，画面 1 件，单件图。1 支带肩顶针，头部附近有清晰加粗定位肩，后接长直顶出杆。 状态：待制作。
- **台阶顶针**：主图 1 张，画面 2 件，同系列组合图。2 支台阶顶针，粗支撑杆连接细顶出端，展示不同缩径长度。 状态：待制作。
- **扁顶针**：主图 1 张，画面 1 件，单件图。1 支细长扁顶针，较长圆杆平顺过渡到窄薄矩形扁位；扁位宽度接近杆径，斜向摆放，同时看见宽面与厚度。 状态：待制作。
  - 详情图：扁顶针过渡与厚度，1 件，单件图。检查：圆杆明显长于扁位，不能是宽铲，工作端平钝。
- **方顶针**：主图 1 张，画面 1 件，单件图。1 支方顶针，方形工作段的两个侧面和端面可见，后接圆杆及安装头。 状态：待制作。
  - 详情图：方顶针的圆方过渡，1 件，单件图。检查：与锋利方冲区别开，不能添加切削槽。
- **司筒与顶出套筒**：主图 1 张，画面 2 件，同系列组合图。2 支司筒，一支直身、一支台阶，均展示贯通内孔与合理壁厚。 状态：待制作。
  - 详情图：司筒与芯针配套关系，2 件，配套组件图。检查：2 件分开，司筒必须空心，避免合并成实心杆。
- **气顶阀**：主图 1 张，画面 1 件，单件图。1 个闭合状态气顶阀，紧凑圆柱阀体及齐平圆阀面，展示模具安装件外形。 状态：待制作。

### 导向组件：6 张主图 + 2 张详情图 + 1 张分类合成图 = 9 张

- **导柱**：主图 1 张，画面 2 件，同系列组合图。2 根导柱，长圆柱磨削导向段，后端安装肩部，展示不同长度。 状态：待制作。
- **滑动导套与钢导套**：主图 1 张，画面 1 件，单件图。1 个直身钢导套，厚壁圆筒，斜视可见通孔和端面倒角。 状态：待制作。
- **法兰导套**：主图 1 张，画面 1 件，单件图。1 个法兰钢导套，筒体与法兰一体，突出法兰定位面及贯通内孔。 状态：待制作。
  - 详情图：法兰安装面与通孔，1 件，单件图。检查：安装孔不穿透内孔，具体孔位为代表结构。
- **导柱导套组件**：主图 1 张，画面 2 件，配套组件图。1 套滑动导向组件：配套导柱与导套共 2 件，分开且同轴对应。 状态：待制作。
  - 详情图：导柱、滚珠保持架、导套，3 件，配套组件图。检查：保持架钢球不可悬浮，三个件不得融合；不画爆炸箭头。
- **滚珠保持架**：主图 1 张，画面 1 件，单件图。1 个铜质滚珠保持架，薄壁圆筒架体、规则孔位中的独立钢球，中央贯通。 状态：待制作。
- **滚珠导套**：主图 1 张，画面 1 件，单件图。1 个滚珠导套单元，外部厚壁钢套，开口处露出少量内部滚动元件。 状态：待制作。

### 模具弹簧：2 张主图 + 1 张详情图 + 1 张分类合成图 = 4 张

- **矩形模具弹簧**：主图 1 张，画面 5 件，同系列组合图。5 个矩形线材模具弹簧，黄、蓝、红、绿、棕各一个，分开站立，清晰展示矩形线材。 状态：待制作。
- **氮气弹簧**：主图 1 张，画面 1 件，单件图。1 个紧凑氮气弹簧，黑色圆柱壳体、顶部导向密封圈和伸出的银色活塞杆。 状态：待制作。
  - 详情图：气弹簧与安装法兰，2 件，配套组件图。检查：不展示未经确认的内部结构、充气步骤或压力数值。

### 浇注与模具辅助件：6 张主图 + 1 张详情图 + 1 张分类合成图 = 8 张

- **浇口套（唧咀）**：主图 1 张，画面 1 件，单件图。1 个浇口套，带头部法兰和筒身，喷嘴侧凹球面入口及中心浇口可见。 状态：待制作。
  - 详情图：喷嘴接触面与进料孔，1 件，单件图。检查：喷嘴座是凹面且有贯通孔，不按示意宣称 A/B/C 尺寸。
- **定位圈**：主图 1 张，画面 2 件，同系列组合图。2 个定位圈，平面型和台阶型各一件，中央大孔、环形定位面清楚。 状态：待制作。
- **模具日期章**：主图 1 张，画面 1 件，单件图。1 个日期章，圆柱外套与可调中心镶件，正面能看清月份刻度及指向关系。 状态：待制作。
- **侧锁与精定位块**：主图 1 张，画面 2 件，配套组件图。1 对侧锁，公块与母块共 2 件，分开展示可相互配合的凸台和凹槽。 状态：待制作。
- **限位螺栓**：主图 1 张，画面 1 件，单件图。1 支带肩限位螺栓，圆头内六角、光滑定位肩与较短外螺纹端。 状态：待制作。
- **拉杆**：主图 1 张，画面 2 件，同系列组合图。2 支模具拉杆，一支螺纹端式、一支带肩端式，长直杆与连接端清楚可见。 状态：待制作。

### 自润滑轴套与耐磨件：4 张主图 + 1 张详情图 + 1 张分类合成图 = 6 张

- **石墨铜套**：主图 1 张，画面 2 件，同系列组合图。2 个石墨铜套，直筒与法兰各一个；内孔轴承工作面清晰可见规则深灰石墨嵌块，两件之间留有明显间距。 状态：待制作。
  - 详情图：内孔石墨润滑点，1 件，单件图。检查：石墨必须在实际内孔滑动面可见，不能只布置在外圆。
- **普通铜套**：主图 1 张，画面 1 件，单件图。1 个普通铜套，光孔厚壁圆筒，暖铜色机加工纹理，无石墨点。 状态：待制作。
- **法兰铜套**：主图 1 张，画面 1 件，单件图。1 个普通法兰铜套，突出法兰环面、筒体和中央贯通孔，采用无石墨代表款。 状态：待制作。
- **耐磨板与滑板**：主图 1 张，画面 2 件，同系列组合图。2 块铜合金耐磨板：一块镶石墨、一块带浅油槽，倾斜展示平面和厚度。 状态：待制作。

### 定位与送料销件：4 张主图 + 1 张详情图 + 1 张分类合成图 = 6 张

- **精密圆柱销**：主图 1 张，画面 3 件，同系列组合图。3 根精密圆柱销，短实心圆柱、两端轻倒角，长度和直径适度变化。 状态：待制作。
- **螺纹与拔出式定位销**：主图 1 张，画面 2 件，同系列组合图。2 根定位销，一根端面内螺纹拔出孔、一根短外螺纹端，定位圆柱面保持光滑。 状态：待制作。
  - 详情图：拔出式定位销内螺纹，1 件，单件图。检查：内孔是螺纹孔，外圆应保持光滑；不画普通全螺纹螺钉。
- **导正销**：主图 1 张，画面 2 件，同系列组合图。2 根导正销，圆形导入端和带削边导入端各一支，头部短而圆滑，后接定位段。 状态：待制作。
- **浮升销与浮料销**：主图 1 张，画面 1 件，单件图。1 个代表性浮升销，宽圆形承料头、台阶导向杆，展示承料面，不展示内部弹簧。 状态：待制作。

另加全系列横幅 1 张；冲头为主视觉，其他系列作为配套展示。

## 122 个配置的图文对应

### 硬质合金冲头（钨钢）

- A 型台阶冲针：使用详情图 carbide-punches--type-a。
- T 型单肩冲针：使用详情图 carbide-punches--type-t。
- 台阶与镶合金结构：使用详情图 carbide-punches--stepped。
- 方形、矩形与定制异形：使用详情图 carbide-punches--profiles。
- 六角冲头：使用详情图 carbide-punches--hexagonal。
- 椭圆与长圆冲头：使用详情图 carbide-punches--oval-obround。
- 切断与精密冲裁：使用详情图 carbide-punches--cutoff。
- 涂层与耐磨方案：使用详情图 carbide-punches--coated。

### 高速钢冲头

- 圆形与 T 型圆冲：共享本系列代表性主图；不单独生成。
- 扁形与矩形冲头：使用详情图 hss-punches--square-rectangle、hss-punches--blade。
- 方形冲头：使用详情图 hss-punches--square-rectangle。
- 台阶高速钢冲头：使用详情图 hss-punches--stepped。
- 六角与特殊轮廓：使用详情图 hss-punches--special。
- 带退料结构的冲头：共享本系列代表性主图；不单独生成。

### 台阶与多级冲头

- 单台阶圆冲：共享本系列代表性主图；不单独生成。
- 多级缩径冲头：使用详情图 stepped-punches--multi。
- 台阶方冲：使用详情图 stepped-punches--square。
- 台阶异形与开槽冲头：使用详情图 stepped-punches--special。
- T 头与定制安装端：共享本系列代表性主图；不单独生成。

### 冲压模冲头

- 圆孔冲裁件：共享本系列代表性主图；不单独生成。
- 轮廓与槽孔冲头：使用详情图 stamping-die-punches--slot。
- 切断与修边冲头：使用详情图 stamping-die-punches--cutoff。
- 连续模替换冲头：使用详情图 stamping-die-punches--mount。

### 异形与成型冲头

- 六角、方形与多边形：使用详情图 forming-punches--polygon。
- 椭圆与长圆轮廓：使用详情图 forming-punches--oval-obround。
- 斜面与偏置工作端：使用详情图 forming-punches--contour。
- 曲面与圆弧成型头：使用详情图 forming-punches--contour。

### A 型台阶冲针

- A 型台阶冲针：共享本系列代表性主图；不单独生成。
- 带削边或防转位：使用详情图 a-type-punches--flat。
- 非标长度与安装配合：文字说明，无额外图片。

### 压片冲模

- 上冲：使用详情图 tableting-punches--cup-shapes。
- 下冲：使用详情图 tableting-punches--cup-shapes。
- 配套中模：共享本系列代表性主图；不单独生成。
- 圆形、椭圆与定制片型：使用详情图 tableting-punches--cup-shapes。
- 刻字、标识与分割线：使用详情图 tableting-punches--score。
- 多冲尖与压机专用配置：使用详情图 tableting-punches--multi。

### 直身顶针

- 直身平端顶针：共享本系列代表性主图；不单独生成。
- SKD61 / H13 材质方案：文字说明，无额外图片。
- 氮化直身顶针：文字说明，无额外图片。
- 公英制与成型端部：共享本系列代表性主图；不单独生成。

### 带肩顶针

- 定位肩结构：共享本系列代表性主图；不单独生成。
- 定制头部与止转位：共享本系列代表性主图；不单独生成。
- 氮化滑动段：文字说明，无额外图片。

### 台阶顶针

- 单台阶顶针：共享本系列代表性主图；不单独生成。
- 多台阶顶针：共享本系列代表性主图；不单独生成。
- 成型顶出端与氮化选项：共享本系列代表性主图；不单独生成。

### 扁顶针

- 平端扁顶针：使用详情图 blade-ejector-pins--transition。
- 成型端面扁顶针：共享本系列代表性主图；不单独生成。
- 非标截面与处理：使用详情图 blade-ejector-pins--transition。

### 方顶针

- 方形工作段：使用详情图 square-ejector-pins--square-tip。
- 圆杆转方端：使用详情图 square-ejector-pins--square-tip。
- 定制端面与耐磨处理：共享本系列代表性主图；不单独生成。

### 司筒与顶出套筒

- 薄壁与微型司筒：使用详情图 ejector-sleeves--core-pair。
- 加长司筒：使用详情图 ejector-sleeves--core-pair。
- 台阶与定制司筒：共享本系列代表性主图；不单独生成。
- 直身精磨司筒：共享本系列代表性主图；不单独生成。
- 一体式带头司筒：共享本系列代表性主图；不单独生成。

### 气顶阀

- 弹簧复位气顶阀：共享本系列代表性主图；不单独生成。
- 定制安装与气路接口：共享本系列代表性主图；不单独生成。

### 导柱

- 模架与注塑模导柱：共享本系列代表性主图；不单独生成。
- 卸料板导柱：共享本系列代表性主图；不单独生成。
- 滚珠导向用导柱：共享本系列代表性主图；不单独生成。
- 氮化与表面强化导柱：文字说明，无额外图片。

### 滑动导套与钢导套

- 直身滑动导套：共享本系列代表性主图；不单独生成。
- 卸料板导套：共享本系列代表性主图；不单独生成。
- 顶出系统导套：共享本系列代表性主图；不单独生成。

### 法兰导套

- 带肩导套：使用详情图 flanged-guide-bushings--mount。
- 法兰固定导套：使用详情图 flanged-guide-bushings--mount。
- 定制内孔与润滑：共享本系列代表性主图；不单独生成。

### 导柱导套组件

- 滑动导向组件：共享本系列代表性主图；不单独生成。
- 滚珠导向组件：使用详情图 guide-sets--ball-set。
- 定制安装总成：共享本系列代表性主图；不单独生成。

### 滚珠保持架

- 黄铜滚珠保持架：共享本系列代表性主图；不单独生成。
- 铝合金滚珠保持架：共享本系列代表性主图；不单独生成。
- 工程塑料滚珠保持架：共享本系列代表性主图；不单独生成。

### 滚珠导套

- 滚动导向单元：共享本系列代表性主图；不单独生成。
- 配套导柱与总成：共享本系列代表性主图；不单独生成。

### 矩形模具弹簧

- 黄色 · 超轻载：共享本系列代表性主图；不单独生成。
- 蓝色 · 轻载：共享本系列代表性主图；不单独生成。
- 红色 · 中载：共享本系列代表性主图；不单独生成。
- 绿色 · 重载：共享本系列代表性主图；不单独生成。
- 棕色 · 超重载：共享本系列代表性主图；不单独生成。

### 氮气弹簧

- 紧凑型氮气弹簧：共享本系列代表性主图；不单独生成。
- 安装附件与固定方式：使用详情图 nitrogen-gas-springs--mount。
- 按型号替换：共享本系列代表性主图；不单独生成。

### 浇口套（唧咀）

- A 型参考结构：使用详情图 sprue-bushings--nozzle-seat。
- B 型参考结构：使用详情图 sprue-bushings--nozzle-seat。
- C 型参考结构：使用详情图 sprue-bushings--nozzle-seat。
- 冷流道浇口套：使用详情图 sprue-bushings--nozzle-seat。
- 加热浇口套方案：共享本系列代表性主图；不单独生成。
- U 系列与紧凑定制：共享本系列代表性主图；不单独生成。

### 定位圈

- 平面定位圈：共享本系列代表性主图；不单独生成。
- 台阶定位圈：共享本系列代表性主图；不单独生成。

### 模具日期章

- 年月与月份标记：共享本系列代表性主图；不单独生成。
- 定制识别与批次标记：共享本系列代表性主图；不单独生成。

### 侧锁与精定位块

- 侧面精定位结构：共享本系列代表性主图；不单独生成。
- 公母配套定位块：共享本系列代表性主图；不单独生成。

### 限位螺栓

- 带肩限位螺栓：共享本系列代表性主图；不单独生成。
- 定制限位行程：共享本系列代表性主图；不单独生成。

### 拉杆

- 螺纹端拉杆：共享本系列代表性主图；不单独生成。
- 带肩与限位端拉杆：共享本系列代表性主图；不单独生成。

### 石墨铜套

- 圆筒石墨铜套：使用详情图 graphite-bronze-bushings--working-bore。
- 法兰石墨铜套：共享本系列代表性主图；不单独生成。
- 方形与定制石墨导向块：共享本系列代表性主图；不单独生成。

### 普通铜套

- 光孔铜套：共享本系列代表性主图；不单独生成。
- 带油槽铜套：共享本系列代表性主图；不单独生成。

### 法兰铜套

- 普通法兰铜套：共享本系列代表性主图；不单独生成。
- 镶固体润滑法兰铜套：共享本系列代表性主图；不单独生成。

### 耐磨板与滑板

- 镶石墨耐磨板：共享本系列代表性主图；不单独生成。
- 油槽滑板：共享本系列代表性主图；不单独生成。

### 精密圆柱销

- 精密磨削圆柱销：共享本系列代表性主图；不单独生成。
- 淬硬圆柱销：共享本系列代表性主图；不单独生成。
- 定制长度与端部：共享本系列代表性主图；不单独生成。

### 螺纹与拔出式定位销

- 内螺纹拔出销：使用详情图 threaded-dowel-pins--pull-thread。
- 外螺纹段定位销：共享本系列代表性主图；不单独生成。
- 公英制替换与定制：文字说明，无额外图片。

### 导正销

- 圆形导正销：共享本系列代表性主图；不单独生成。
- 切口与让位导正销：共享本系列代表性主图；不单独生成。
- 定制引导端：共享本系列代表性主图；不单独生成。

### 浮升销与浮料销

- 圆形浮升销：共享本系列代表性主图；不单独生成。
- 成型支撑端浮料销：共享本系列代表性主图；不单独生成。
- 弹簧配套与限位结构：共享本系列代表性主图；不单独生成。

## 每张主图与详情图的完整提示词

### carbide-punches · 硬质合金冲头（钨钢）

用途：系列主图；5 件；同系列组合图。
画面：5 支细长硬质合金冲头组合：圆形、方形、六角、长圆及台阶圆冲各一支，展示安装头和工作端。
提示词状态：已逐项编写
审图重点：5 件必须对应圆、方、六角、长圆、台阶圆；刃口为平整端面，六角数边、长圆检查两直边加两半圆；异形仅在短工作段，后部为圆柱支撑杆。背景按 #f5f6f7 校正。首稿圆端偏圆钝、长圆近似磨平圆头，未通过结构审核。
位置：/zh/products/punch-components/carbide-punches/

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

用途：系列主图；4 件；同系列组合图。
画面：4 支高速钢冲头：直身圆冲、台阶圆冲、矩形冲、六角冲，均为银灰色细长结构。
提示词状态：已逐项编写
审图重点：不靠颜色区分 SKH51、M2 或粉末钢牌号。 完整细长杆身，重点确认所有工作端轮廓和安装头，不满意则减少同图件数分步重做。
位置：/zh/products/punch-components/hss-punches/

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

用途：系列主图；4 件；同系列组合图。
画面：4 支台阶冲头：单台阶圆冲、多级圆冲、台阶方冲、T 头缩径冲，完整呈现肩位。
提示词状态：已逐项编写
审图重点：不要生成锥形针尖；台阶不能融化或轴线偏移。 完整细长杆身，重点确认所有工作端轮廓和安装头，不满意则减少同图件数分步重做。
位置：/zh/products/punch-components/stepped-punches/

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

用途：系列主图；4 件；同系列组合图。
画面：4 件冲压模冲头组合：圆孔、矩形、长圆及切断工作端，安装端完整。
提示词状态：已逐项编写
审图重点：不混入顶针、弹簧或整副模具。 完整细长杆身，重点确认所有工作端轮廓和安装头，不满意则减少同图件数分步重做。
位置：/zh/products/punch-components/stamping-die-punches/

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

用途：系列主图；4 件；同系列组合图。
画面：4 支异形与成型冲头：六角、椭圆、长圆、圆弧成型端，突出不同工作面。
提示词状态：已逐项编写
审图重点：不要用任意尖刺表示异形；不要合并六角与圆形轮廓。 完整细长杆身，重点确认所有工作端轮廓和安装头，不满意则减少同图件数分步重做。
位置：/zh/products/punch-components/forming-punches/

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

用途：系列主图；3 件；同系列组合图。
画面：A 冲不同款式组合：单台阶圆冲、多级阶梯圆冲、锥肩缩径细针，各 1 支。
提示词状态：已逐项编写
审图重点：三件的台阶数量、肩部形状及轮廓明确不同，不能只改变尺寸。
位置：/zh/products/punch-components/a-type-punches/

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

用途：系列主图；3 件；配套组件图。
画面：1 套压片冲模：上冲、下冲、中模共 3 件，平行分开摆放，展示圆形浅凹冲面与中模通孔。
提示词状态：已逐项编写
审图重点：不生成药片、刻字或未验证的压机接口；不把中模画成封闭实心块。
位置：/zh/products/punch-components/tableting-punches/

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

### straight-ejector-pins · 直身顶针

用途：系列主图；3 件；同系列组合图。
画面：3 支直身顶针，长度适度变化，圆杆直径均匀、尾部扁圆头，顶出端平整。
提示词状态：已逐项编写
审图重点：不加冲裁刃口、针尖或钻头纹路。
位置：/zh/products/ejector-components/straight-ejector-pins/

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
Product family: Straight Ejector Pins.
Product function: Round pins transfer ejector-plate movement to the molded part. SKD61 and nitrided configurations are options within this family, not different functions.
Configuration context: Straight flat-end pin: A constant-diameter shaft provides local ejection. SKD61 / H13 material options: Select hot-work steel for temperature and toughness; verify standards before grade substitution. Nitrided straight pin: Surface hardening addresses sliding wear; fit and lubrication still require review. Metric, inch and shaped ends: Verify units for replacements; define shaped tips by the part contact surface.
Selected visible subject (takes priority over context): Exactly three straight round ejector pins in a small length progression, each with a constant-diameter slender shaft, a flat disk retaining head at the rear and a flat working end. Continuous straight axes, silver polished steel.
Exact physical object count: 3.
Composition: A separated same-family collection, shallow staggered layout, no overlap or hidden working ends. Long axes stay straight.
Text policy: No text, labels, dimensions, arrows, logos, grade numbers or watermarks.
Avoid: No piercing tips, drill flutes, cutting edges or arbitrary shaft steps. Also avoid fused geometry, cropped tips, floating shadows or extra objects.
Show only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.
```

### shoulder-ejector-pins · 带肩顶针

用途：系列主图；1 件；单件图。
画面：1 支带肩顶针，头部附近有清晰加粗定位肩，后接长直顶出杆。
提示词状态：已逐项编写
审图重点：不要将定位肩放到细长工作端中间；不要生成针尖。
位置：/zh/products/ejector-components/shoulder-ejector-pins/

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
Product family: Shoulder Ejector Pins.
Product function: An enlarged shoulder provides a defined mounting or guiding interface. Shoulder position and mating geometry must match the ejector assembly.
Configuration context: Locating shoulder: An enlarged shoulder fits the seat to establish axial position. Custom head and orientation: Match head thickness and orientation features to the ejector plate space. Nitrided sliding section: Specify treated areas and verify the finished fit at mounting datums.
Selected visible subject (takes priority over context): One shoulder ejector pin with a flat retaining head, an enlarged locating shoulder immediately beside the head, and a long straight reduced-diameter ejector shaft ending in a flat face. Clearly distinguish the locating shoulder from the head.
Exact physical object count: 1.
Composition: One complete part only, with a diagonal pose for long components and visible working and mounting ends.
Text policy: No text, labels, dimensions, arrows, logos, grade numbers or watermarks.
Avoid: No pointed tip or enlarged locating collar halfway along the working tip. Also avoid fused geometry, cropped tips, floating shadows or extra objects.
Show only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.
```

### stepped-ejector-pins · 台阶顶针

用途：系列主图；2 件；同系列组合图。
画面：2 支台阶顶针，粗支撑杆连接细顶出端，展示不同缩径长度。
提示词状态：已逐项编写
审图重点：要与带肩顶针区分；不画冲裁尖刃。
位置：/zh/products/ejector-components/stepped-ejector-pins/

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
Product family: Stepped Ejector Pins.
Product function: A reduced ejection tip joins a larger support shaft. Step dimensions are selected to suit the available contact area and mold support.
Configuration context: Single-step ejector: A small contact tip is supported by a larger shaft. Multi-step ejector: Several diameters fit different plate bores and support zones. Shaped ends and nitriding: The end may follow the molded surface; choose material and treatment separately.
Selected visible subject (takes priority over context): Exactly two stepped ejector pins with rear retaining heads, thicker support shafts and long thinner round ejection ends. Use different step positions and reduced-tip lengths; both working ends flat and blunt.
Exact physical object count: 2.
Composition: A separated same-family collection, shallow staggered layout, no overlap or hidden working ends. Long axes stay straight.
Text policy: No text, labels, dimensions, arrows, logos, grade numbers or watermarks.
Avoid: No needle points or cutting bevels; emphasize the long reduced ejection end rather than a locating collar near the head. Also avoid fused geometry, cropped tips, floating shadows or extra objects.
Show only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.
```

### blade-ejector-pins · 扁顶针

用途：系列主图；1 件；单件图。
画面：1 支细长扁顶针，较长圆杆平顺过渡到窄薄矩形扁位；扁位宽度接近杆径，斜向摆放，同时看见宽面与厚度。
提示词状态：已逐项编写
审图重点：避免初版样图的宽铲状比例：扁位宽度接近杆径，圆杆明显长于扁位；工作端不能是刀刃。
位置：/zh/products/ejector-components/blade-ejector-pins/

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
Product family: Blade Ejector Pins.
Product function: A thin rectangular working end reaches narrow ribs and restricted ejection areas. Blade orientation and the transition to the shank require close attention.
Configuration context: Flat-ended blade ejector: A thin rectangular section reaches narrow ribs, supported by a round shank. Contoured blade end: The end matches the molded contact surface with fixed orientation. Custom section and treatment: Adapt the blade to mold space; consider thin-section distortion during treatment.
Selected visible subject (takes priority over context): One slender blade ejector pin resting diagonally, with a round retaining head, a long cylindrical support shank and a smooth transition into a narrow thin rectangular blade. Blade width should be approximately equal to the support-shaft diameter, and the cylindrical support section visibly longer than the flat blade section; these are illustrative proportions, not manufacturing dimensions. Both the broad blade face and narrow thickness edge are visible. Flat blunt working end.
Exact physical object count: 1.
Composition: One complete part only, with a diagonal pose for long components and visible working and mounting ends.
Text policy: No text, labels, dimensions, arrows, logos, grade numbers or watermarks.
Avoid: No sharpened knife edge, screwdriver tip, twisted blade or all-square shaft. Also avoid fused geometry, cropped tips, floating shadows or extra objects.
Show only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.
```

### square-ejector-pins · 方顶针

用途：系列主图；1 件；单件图。
画面：1 支方顶针，方形工作段的两个侧面和端面可见，后接圆杆及安装头。
提示词状态：已逐项编写
审图重点：不要画成薄片扁顶针；方形段不扭转。
位置：/zh/products/ejector-components/square-ejector-pins/

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
Product family: Square Ejector Pins.
Product function: A square working section provides a non-round contact surface. Its orientation must be maintained by the corresponding mold guide geometry.
Configuration context: Square working section: Match both side directions to the part and guide opening. Round-to-square transition: A round shank supports mounting while the square end provides oriented ejection. Custom face and wear treatment: Define the contact face and treatment zones from the molded part and sliding surfaces.
Selected visible subject (takes priority over context): One square ejector pin with a visibly square-section working segment, a supporting round shank and a retaining head. Show two perpendicular flat sides and the square blunt end face, with a plausible transition to the round support.
Exact physical object count: 1.
Composition: One complete part only, with a diagonal pose for long components and visible working and mounting ends.
Text policy: No text, labels, dimensions, arrows, logos, grade numbers or watermarks.
Avoid: No thin blade geometry, twisting square shaft or pointed tip. Also avoid fused geometry, cropped tips, floating shadows or extra objects.
Show only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.
```

### ejector-sleeves · 司筒与顶出套筒

用途：系列主图；2 件；同系列组合图。
画面：2 支司筒，一支直身、一支台阶，均展示贯通内孔与合理壁厚。
提示词状态：已逐项编写
审图重点：司筒不能是实心顶针；内外孔须同轴。
位置：/zh/products/ejector-components/ejector-sleeves/

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
Product family: Ejector Sleeves.
Product function: A hollow sleeve moves around a core pin to eject a boss or tubular feature. Concentricity and wall thickness are reviewed with the mating core.
Configuration context: Thin-wall and miniature sleeves: For small bosses, focus on wall thickness and annular contact area. Long sleeves: Long sliding bores require straightness, guidance and cleanliness checks. Stepped and custom sleeves: External steps and heads adapt to ejector plates and mounting space. Straight precision-ground sleeve: A cylindrical sleeve serves conventional annular ejection, finished to specified inner and outer fits, coaxiality and end-face requirements. Integral-head ejector sleeve: The retaining head and sleeve body form one piece; verify the head seat, mounting plate and core pin.
Selected visible subject (takes priority over context): Exactly two hollow ejector sleeves: one straight-body and one stepped-body sleeve, both with rear mounting shoulders. Tilt their open ends toward the camera so concentric through-bores and credible wall thicknesses are visible. Separate parts, no core pin inserted.
Exact physical object count: 2.
Composition: A separated same-family collection, shallow staggered layout, no overlap or hidden working ends. Long axes stay straight.
Text policy: No text, labels, dimensions, arrows, logos, grade numbers or watermarks.
Avoid: No solid pins, blind bores, paper-thin walls or eccentric openings. Also avoid fused geometry, cropped tips, floating shadows or extra objects.
Show only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.
```

### air-poppet-valves · 气顶阀

用途：系列主图；1 件；单件图。
画面：1 个闭合状态气顶阀，紧凑圆柱阀体及齐平圆阀面，展示模具安装件外形。
提示词状态：已逐项编写
审图重点：不凭空展示内部气路、外露弹簧或高压气瓶。
位置：/zh/products/ejector-components/air-poppet-valves/

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
Product family: Air Poppet Valves.
Product function: A spring-loaded valve admits air at the mold surface during release to help break a vacuum. It assists demolding without replacing the mechanical ejector design.
Configuration context: Spring-return air poppet: Air opens the valve face; a spring returns it when supply stops. Custom mounting and air interface: Coordinate the cavity surface, air route and cooling channels.
Selected visible subject (takes priority over context): One compact mold air poppet valve in its closed state: a short cylindrical insert body with a circular flush poppet face and a fine annular separation line around the poppet. Silver machined steel, exterior view only.
Exact physical object count: 1.
Composition: One complete part only, with a diagonal pose for long components and visible working and mounting ends.
Text policy: No text, labels, dimensions, arrows, logos, grade numbers or watermarks.
Avoid: No internal cutaway, exposed spring, pressure cylinder, invented ports or hoses. Also avoid fused geometry, cropped tips, floating shadows or extra objects.
Show only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.
```

### guide-posts · 导柱

用途：系列主图；2 件；同系列组合图。
画面：2 根导柱，长圆柱磨削导向段，后端安装肩部，展示不同长度。
提示词状态：已逐项编写
审图重点：导柱不能细如顶针；不混入空心导套。
位置：/zh/products/guide-components/guide-posts/

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
Product family: Guide Posts & Pillars.
Product function: Ground posts align moving mold plates through a mating bushing. Plain and nitrided versions are selected with the complete guide system.
Configuration context: Mold-base guide posts: Align mold halves and define mounting versus guiding sections. Stripper guide posts: Guide stripper motion and check travel and interference. Posts for ball guidance: Match to the ball cage and bushing, not a plain sliding fit. Nitrided and surface-hardened posts: Consider treatment for sliding wear; nitriding is unrelated to nitrogen gas springs.
Selected visible subject (takes priority over context): Exactly two mold guide posts with substantial cylindrical ground guide surfaces, modest mounting shoulders and gently chamfered ends, in two lengths. Robust proportions, larger shaft diameter relative to length than ejector pins.
Exact physical object count: 2.
Composition: A separated same-family collection, shallow staggered layout, no overlap or hidden working ends. Long axes stay straight.
Text policy: No text, labels, dimensions, arrows, logos, grade numbers or watermarks.
Avoid: No needle-like shafts, hollow tubes, screw threads on the guide surface or arbitrary grooves. Also avoid fused geometry, cropped tips, floating shadows or extra objects.
Show only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.
```

### guide-bushings · 滑动导套与钢导套

用途：系列主图；1 件；单件图。
画面：1 个直身钢导套，厚壁圆筒，斜视可见通孔和端面倒角。
提示词状态：已逐项编写
审图重点：不加法兰、石墨点或滚珠。
位置：/zh/products/guide-components/guide-bushings/

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
Product family: Plain & Steel Guide Bushings.
Product function: A replaceable sliding sleeve guides the post and takes wear at the mating interface. Bore finish and installed fit matter together.
Configuration context: Straight plain bushing: A cylindrical body fits a mounting bore; specify inner and outer fits separately. Stripper guide bushing: Pairs with stripper posts; check plate thickness and contact length. Ejector-system guide bushing: Guides ejector plates; it is not a sleeve that directly ejects the molded part.
Selected visible subject (takes priority over context): One straight cylindrical steel guide bushing with a thick wall, concentric open through-bore, ground external cylinder and small end chamfers. Angle the bore toward the viewer.
Exact physical object count: 1.
Composition: One complete part only, with a diagonal pose for long components and visible working and mounting ends.
Text policy: No text, labels, dimensions, arrows, logos, grade numbers or watermarks.
Avoid: No flange, graphite inserts, visible balls or sealed bore. Also avoid fused geometry, cropped tips, floating shadows or extra objects.
Show only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.
```

### flanged-guide-bushings · 法兰导套

用途：系列主图；1 件；单件图。
画面：1 个法兰钢导套，筒体与法兰一体，突出法兰定位面及贯通内孔。
提示词状态：已逐项编写
审图重点：不混淆铜套；不随意增加螺孔或滚珠。
位置：/zh/products/guide-components/flanged-guide-bushings/

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
Product family: Flanged Guide Bushings.
Product function: A flange provides an axial locating face for the guide bushing. The mounting face and bore must share the specified alignment.
Configuration context: Shouldered bushing: A shoulder seats against the plate to set mounting depth. Flange-mounted bushing: A flange accommodates screws or clamps; check mounting-hole interference. Custom bore and lubrication: Lay out fit sections and grooves for the guiding travel.
Selected visible subject (takes priority over context): One steel guide bushing with an integral circular locating flange at one end, a cylindrical sleeve body and a concentric through-bore. Show the flange thickness, bore and mounting face clearly.
Exact physical object count: 1.
Composition: One complete part only, with a diagonal pose for long components and visible working and mounting ends.
Text policy: No text, labels, dimensions, arrows, logos, grade numbers or watermarks.
Avoid: No bronze coloration, graphite dots, arbitrary flange bolt holes or rolling elements. Also avoid fused geometry, cropped tips, floating shadows or extra objects.
Show only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.
```

### guide-sets · 导柱导套组件

用途：系列主图；2 件；配套组件图。
画面：1 套滑动导向组件：配套导柱与导套共 2 件，分开且同轴对应。
提示词状态：已逐项编写
审图重点：此图仅表现滑动式，不混入滚珠保持架或暗示所有组合可互换。
位置：/zh/products/guide-components/guide-sets/

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
Product family: Guide Post & Bushing Sets.
Product function: Posts and bushings specified as a mating set simplify fit coordination. Sliding and rolling systems use different clearances and assembly requirements.
Configuration context: Plain guide set: Post and plain bushing are matched to mounting bores and lubrication. Ball guide set: Check post, cage and bushing together for preload and cage travel. Custom guide assembly: Coordinate mounting datums and component heights with the mold layout.
Selected visible subject (takes priority over context): One matched sliding guide set comprising exactly two separate pieces: one ground steel guide post and one flanged steel guide bushing. Align the components on a shared diagonal axis with a visible gap. Post guide diameter must visually fit the bushing bore.
Exact physical object count: 2.
Composition: A separated matched set, consistent mating proportions, no fusion or exploded-view arrows.
Text policy: No text, labels, dimensions, arrows, logos, grade numbers or watermarks.
Avoid: No ball cage, mismatched bore diameter, impossible assembly or overlap hiding the fit surfaces. Also avoid fused geometry, cropped tips, floating shadows or extra objects.
Show only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.
```

### ball-cages · 滚珠保持架

用途：系列主图；1 件；单件图。
画面：1 个铜质滚珠保持架，薄壁圆筒架体、规则孔位中的独立钢球，中央贯通。
提示词状态：已逐项编写
审图重点：钢球不能变成黑色石墨点；不得出现漂浮钢球或封闭实心筒。
位置：/zh/products/guide-components/ball-cages/

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
Product family: Ball Cages & Retainers.
Product function: The cage spaces and retains bearing balls between a post and bushing. Brass, aluminum and polymer bodies are alternatives selected for mass, temperature and duty.
Configuration context: Brass ball cage: A metal cage for repeated guidance, matched to actual temperature and load. Aluminum ball cage: For designs sensitive to moving mass; weight reduction still requires retention-strength checks. Polymer ball cage: For suitable light-load and temperature conditions; verify resin, lubricant and dimensional stability.
Selected visible subject (takes priority over context): One brass ball cage for a mold guide system: an open thin-walled cylindrical brass retainer holding separate polished steel balls in evenly spaced rows. Balls are seated in individual pockets and protrude slightly from inner and outer surfaces. The central cylindrical passage is open.
Exact physical object count: 1.
Composition: One complete part only, with a diagonal pose for long components and visible working and mounting ends.
Text policy: No text, labels, dimensions, arrows, logos, grade numbers or watermarks.
Avoid: No black graphite dots, floating balls, solid closed cylinder or fused steel beads. Also avoid fused geometry, cropped tips, floating shadows or extra objects.
Show only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.
```

### ball-bearing-bushings · 滚珠导套

用途：系列主图；1 件；单件图。
画面：1 个滚珠导套单元，外部厚壁钢套，开口处露出少量内部滚动元件。
提示词状态：已逐项编写
审图重点：区别于裸露保持架；不做未经验证的剖面和复杂滚珠回流结构。
位置：/zh/products/guide-components/ball-bearing-bushings/

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
Product family: Ball Bearing Bushings.
Product function: A rolling guide unit combines a bushing body and bearing elements around the post. Confirm whether the order includes the cage and mating post.
Configuration context: Rolling guide unit: An internal rolling structure guides axial travel; confirm mounting for the selected series. Matched post and assembly: Review preload, travel and end stops as system parameters.
Selected visible subject (takes priority over context): One complete ball-bearing guide bushing unit with a substantial cylindrical steel outer sleeve and a visible open inner passage. Show only the accessible internal retainer and a few seated steel balls near the opening, with most of the mechanism enclosed by the outer sleeve.
Exact physical object count: 1.
Composition: One complete part only, with a diagonal pose for long components and visible working and mounting ends.
Text policy: No text, labels, dimensions, arrows, logos, grade numbers or watermarks.
Avoid: No bare standalone cage, cutaway, exposed external ball rows or invented recirculating mechanism. Also avoid fused geometry, cropped tips, floating shadows or extra objects.
Show only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.
```

### rectangular-die-springs · 矩形模具弹簧

用途：系列主图；5 件；同系列组合图。
画面：5 个矩形线材模具弹簧，黄、蓝、红、绿、棕各一个，分开站立，清晰展示矩形线材。
提示词状态：已逐项编写
审图重点：不能变成圆线弹簧；颜色仅示系列外观，不通过文字或比例声称负荷标准。
位置：/zh/products/die-springs/rectangular-die-springs/

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
Product family: Rectangular Die Springs.
Product function: Rectangular-wire compression springs provide force in a compact mold space. Choose the load curve and permitted stroke before choosing the color code.
Configuration context: Yellow · extra light load: For lighter return duties; verify preload and allowable compression. Blue · light load: For light-load mechanisms; choose compression travel with the life target. Red · medium load: Balance return force and space; compare loads only for specified sizes. Green · heavy load: Higher loads require checks on compression ratio, heat and guidance. Brown · extra heavy load: High-rate options must stay within the selected series travel limits.
Selected visible subject (takes priority over context): Exactly five separate compression die springs made from rectangular-section wire, one each yellow, blue, red, green and brown. Upright side-by-side arrangement, modest size variation, visible rectangular wire faces, open helix gaps and finished end coils. Realistic satin painted surfaces.
Exact physical object count: 5.
Composition: A separated same-family collection, shallow staggered layout, no overlap or hidden working ends. Long axes stay straight.
Text policy: No text, labels, dimensions, arrows, logos, grade numbers or watermarks.
Avoid: No round-wire springs, fused coils, load-rating labels, standardized force claims or arbitrary numeric markings. Also avoid fused geometry, cropped tips, floating shadows or extra objects.
Show only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.
```

### nitrogen-gas-springs · 氮气弹簧

用途：系列主图；1 件；单件图。
画面：1 个紧凑氮气弹簧，黑色圆柱壳体、顶部导向密封圈和伸出的银色活塞杆。
提示词状态：已逐项编写
审图重点：不出现外绕螺旋弹簧、气管、压力数值或品牌。
位置：/zh/products/die-springs/nitrogen-gas-springs/

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
Product family: Nitrogen Gas Springs.
Product function: A sealed gas spring produces return or holding force through compressed nitrogen. Select a rated unit and mounting arrangement for the intended tool duty.
Configuration context: Compact gas spring: Provides compressive force in limited height; check closed height and rod stroke. Mounting accessories: Flanges or base mounts retain position while avoiding side loads. Model-based replacement: Check original force, stroke and interface before substitution.
Selected visible subject (takes priority over context): One compact nitrogen die gas spring, with a short robust black cylindrical body, a top rod guide/seal collar and one centered polished steel piston rod partially extended. Closed exterior product view.
Exact physical object count: 1.
Composition: One complete part only, with a diagonal pose for long components and visible working and mounting ends.
Text policy: No text, labels, dimensions, arrows, logos, grade numbers or watermarks.
Avoid: No external helical coil, hoses, pressure values, brand marks or exposed internals. Also avoid fused geometry, cropped tips, floating shadows or extra objects.
Show only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.
```

### sprue-bushings · 浇口套（唧咀）

用途：系列主图；1 件；单件图。
画面：1 个浇口套，带头部法兰和筒身，喷嘴侧凹球面入口及中心浇口可见。
提示词状态：已逐项编写
审图重点：不画成实心螺栓；不虚构透明剖面或内部锥度尺寸。
位置：/zh/products/plastic-mold-components/sprue-bushings/

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
Product family: Sprue Bushings.
Product function: The sprue bushing connects the machine nozzle to the mold runner. Nozzle-seat geometry and the internal taper must suit the injection system.
Configuration context: Type A configuration: Check head and mounting geometry against the selected catalog. Type B configuration: Match dimensions when replacing a bushing rather than ordering by type name alone. Type C configuration: Confirm the combination of head, runner and installation length. Cold-runner sprue bushing: Check nozzle contact, release taper and runner transition. Heated sprue configuration: Heating requires review of temperature control, wiring space and thermal isolation. U-series and compact designs: Compact molds require interface drawings and space checks.
Selected visible subject (takes priority over context): One steel injection-mold sprue bushing with a broad head flange, a cylindrical shank and a centered sprue opening in a shallow concave nozzle-contact face. Show the head opening and shank in the same three-quarter view.
Exact physical object count: 1.
Composition: One complete part only, with a diagonal pose for long components and visible working and mounting ends.
Text policy: No text, labels, dimensions, arrows, logos, grade numbers or watermarks.
Avoid: No solid closed inlet, bolt threads, transparent cutaway or taper dimensions. Also avoid fused geometry, cropped tips, floating shadows or extra objects.
Show only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.
```

### locating-rings · 定位圈

用途：系列主图；2 件；同系列组合图。
画面：2 个定位圈，平面型和台阶型各一件，中央大孔、环形定位面清楚。
提示词状态：已逐项编写
审图重点：不生成齿轮或滚动轴承；不增加无依据的孔阵列。
位置：/zh/products/plastic-mold-components/locating-rings/

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
Product family: Locating Rings.
Product function: A locating ring aligns the mold with the machine platen opening. Ring diameter and projection are matched to the press interface.
Configuration context: Flat locating ring: For flat mounting faces; check the center opening and nozzle path. Stepped locating ring: A step adapts to mounting height and locating depth.
Selected visible subject (takes priority over context): Exactly two steel mold locating rings: one plain annular ring and one stepped annular ring with a raised locating shoulder. Broad circular central openings and machined annular faces. Keep both openings unobstructed.
Exact physical object count: 2.
Composition: A separated same-family collection, shallow staggered layout, no overlap or hidden working ends. Long axes stay straight.
Text policy: No text, labels, dimensions, arrows, logos, grade numbers or watermarks.
Avoid: No gear teeth, bearing balls or arbitrary arrays of mounting holes. Also avoid fused geometry, cropped tips, floating shadows or extra objects.
Show only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.
```

### mold-date-stamps · 模具日期章

用途：系列主图；1 件；单件图。
画面：1 个日期章，圆柱外套与可调中心镶件，正面能看清月份刻度及指向关系。
提示词状态：已逐项编写
审图重点：仅此产品允许功能性数字；数字错误不得上架，不用整图标语或品牌遮盖。
位置：/zh/products/plastic-mold-components/mold-date-stamps/

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
Product family: Mold Date Stamps.
Product function: A replaceable marking insert places date or identification information on molded parts. The marking layout and adjustment method are specified together.
Configuration context: Year and month markings: Choose the numeral ring and center indicator for the traceability cycle. Custom identification marks: Define artwork and changeover method for IDs, shifts or batch codes.
Selected visible subject (takes priority over context): One cylindrical mold date stamp viewed toward its marking face: a circular steel outer insert with exactly twelve evenly spaced small engraved month numerals 1 through 12, and a separate flush central adjustable insert carrying one simple arrow pointing to a single numeral. Crisp concentric construction.
Exact physical object count: 1.
Composition: One complete part only, with a diagonal pose for long components and visible working and mounting ends.
Text policy: Only the specified functional month numerals and center arrow may appear. Flag incorrect engraving rather than publishing it. No other text.
Avoid: No repeated or missing month numerals, impossible arrow, fake year, decorative text, branding or surrounding captions. Also avoid fused geometry, cropped tips, floating shadows or extra objects.
Show only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.
```

### side-locks · 侧锁与精定位块

用途：系列主图；2 件；配套组件图。
画面：1 对侧锁，公块与母块共 2 件，分开展示可相互配合的凸台和凹槽。
提示词状态：已逐项编写
审图重点：不要两块都做成凸块；不凭空悬浮拼装。
位置：/zh/products/plastic-mold-components/side-locks/

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
Product family: Side Locks & Interlocks.
Product function: Interlocking mating faces help locate mold halves at closure. Their mounting datums should be coordinated with the main guide system.
Configuration context: Side alignment lock: Mounted at the mold side to control final closing alignment. Matched male/female blocks: Match contact faces as a pair, considering thermal expansion and contact area.
Selected visible subject (takes priority over context): One two-piece mold side-lock pair: a steel male locating block with a straight raised locating tongue and a matching female block with a complementary open recess. Show both mating surfaces separately at the same scale and alignment.
Exact physical object count: 2.
Composition: A separated matched set, consistent mating proportions, no fusion or exploded-view arrows.
Text policy: No text, labels, dimensions, arrows, logos, grade numbers or watermarks.
Avoid: No two male halves, incompatible mating shapes, floating assembled parts or unnecessary decorative features. Also avoid fused geometry, cropped tips, floating shadows or extra objects.
Show only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.
```

### stopper-bolts · 限位螺栓

用途：系列主图；1 件；单件图。
画面：1 支带肩限位螺栓，圆头内六角、光滑定位肩与较短外螺纹端。
提示词状态：已逐项编写
审图重点：不能全长带螺纹；螺纹不得沿错误方向或融化。
位置：/zh/products/plastic-mold-components/stopper-bolts/

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
Product family: Stopper Bolts.
Product function: A shoulder or stop face limits plate travel in the designed assembly. Strength and engagement must be checked for the actual load.
Configuration context: Shoulder stopper bolt: The plain shoulder sets the sliding section and stop position. Custom travel stop: Match opening travel by effective length and review cushioning and impact load.
Selected visible subject (takes priority over context): One mold stopper shoulder bolt with a cylindrical socket head, a long smooth precision shoulder and a shorter reduced-diameter external threaded end. Show the shoulder-to-thread transition and socket clearly.
Exact physical object count: 1.
Composition: One complete part only, with a diagonal pose for long components and visible working and mounting ends.
Text policy: No text, labels, dimensions, arrows, logos, grade numbers or watermarks.
Avoid: No fully threaded shoulder, malformed thread, bent axis or mismatched socket geometry. Also avoid fused geometry, cropped tips, floating shadows or extra objects.
Show only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.
```

### pull-rods · 拉杆

用途：系列主图；2 件；同系列组合图。
画面：2 支模具拉杆，一支螺纹端式、一支带肩端式，长直杆与连接端清楚可见。
提示词状态：已逐项编写
审图重点：不要拉伸成钢丝，不添加螺旋弹簧或不明机构。
位置：/zh/products/plastic-mold-components/pull-rods/

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
Product family: Pull Rods.
Product function: Pull rods connect or sequence mold plates according to the opening arrangement. End connections and effective travel are defined by the assembly.
Configuration context: Threaded-end pull rod: End threads connect the mechanism; specify engagement and locking. Shouldered pull rod: Shoulders provide seats or stops, positioned for the motion sequence.
Selected visible subject (takes priority over context): Exactly two straight mold pull rods, one with a short external threaded connection end and one with a distinct integral shoulder end. Long sturdy cylindrical bodies, clearly visible end connections, silver machined steel.
Exact physical object count: 2.
Composition: A separated same-family collection, shallow staggered layout, no overlap or hidden working ends. Long axes stay straight.
Text policy: No text, labels, dimensions, arrows, logos, grade numbers or watermarks.
Avoid: No flexible wire, spring coils, hooks or invented linked mechanism. Also avoid fused geometry, cropped tips, floating shadows or extra objects.
Show only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.
```

### graphite-bronze-bushings · 石墨铜套

用途：系列主图；2 件；同系列组合图。
画面：2 个石墨铜套，直筒与法兰各一个；内孔轴承工作面清晰可见规则深灰石墨嵌块，两件之间留有明显间距。
提示词状态：已逐项编写
审图重点：不能像初稿只在外壁有石墨点；核对内孔工作面的嵌块，石墨不能成为通孔或凸起钢球。
位置：/zh/products/bronze-components/graphite-bronze-bushings/

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
Product family: Graphite Bronze Bushings.
Product function: Solid-lubricant plugs in a copper-alloy body support sliding applications where continuous lubrication is difficult. Suitability depends on load, speed and temperature.
Configuration context: Cylindrical graphite bushing: Place lubricant plugs on the sliding bore for the actual motion. Flanged graphite bushing: For radial guidance and axial location, confirm the loaded flange face. Square and custom graphite blocks: For non-round mounting or guide faces, place plugs at the actual sliding surfaces.
Selected visible subject (takes priority over context): Exactly two graphite-plugged bronze inner-diameter sliding bushings: one straight sleeve and one integral-flange sleeve. Warm muted bronze matrix, concentric open through-bores, and separate flush dark circular solid-lubricant plugs clearly visible in orderly staggered positions on the INNER bore bearing surface. Do not place all plugs exclusively on the outer cylinder. Orient both openings toward the camera; preserve a visible air gap between the two parts.
Exact physical object count: 2.
Composition: A separated same-family collection, shallow staggered layout, no overlap or hidden working ends. Long axes stay straight.
Text policy: No text, labels, dimensions, arrows, logos, grade numbers or watermarks.
Avoid: No drilled-through graphite holes, raised steel balls, random black smears or mirror-gold jewelry finish. Also avoid fused geometry, cropped tips, floating shadows or extra objects.
Show only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.
```

### bronze-bushings · 普通铜套

用途：系列主图；1 件；单件图。
画面：1 个普通铜套，光孔厚壁圆筒，暖铜色机加工纹理，无石墨点。
提示词状态：已逐项编写
审图重点：不得出现黑色石墨点；不要暗示普通铜套天然自润滑。
位置：/zh/products/bronze-components/bronze-bushings/

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
Product family: Plain Bronze Bushings.
Product function: Machined bronze sleeves provide a replaceable sliding bearing surface. Plain bronze is not automatically self-lubricating; specify the lubrication arrangement.
Configuration context: Plain-bore bronze bushing: A continuous bore forms the sliding contact; specify fit and lubrication. Oil-grooved bronze bushing: Grooves distribute lubricant; align their paths and outlets with mounting.
Selected visible subject (takes priority over context): One plain bronze sleeve bushing with a smooth open concentric bore, thick cylindrical wall, small chamfers and subtle machining marks. Muted warm bronze tone without inserted lubricant plugs.
Exact physical object count: 1.
Composition: One complete part only, with a diagonal pose for long components and visible working and mounting ends.
Text policy: No text, labels, dimensions, arrows, logos, grade numbers or watermarks.
Avoid: No graphite plugs, ball elements, gold plating or added self-lubricating labels. Also avoid fused geometry, cropped tips, floating shadows or extra objects.
Show only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.
```

### flanged-bronze-bushings · 法兰铜套

用途：系列主图；1 件；单件图。
画面：1 个普通法兰铜套，突出法兰环面、筒体和中央贯通孔，采用无石墨代表款。
提示词状态：已逐项编写
审图重点：法兰与筒体须一体；不添加石墨点、螺栓或钢轴。
位置：/zh/products/bronze-components/flanged-bronze-bushings/

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
Product family: Flanged Bronze Bushings.
Product function: A bronze sleeve with an integral flange adds an axial locating or thrust face. Radial and axial working conditions should both be specified.
Configuration context: Plain flanged bronze bushing: The flange locates the bushing; sliding faces require a lubrication plan. Solid-lubricant flanged bushing: Locate plugs on the bore and thrust face according to actual contact.
Selected visible subject (takes priority over context): One plain bronze flanged bushing with an integral annular flange at one end of a cylindrical sleeve, an open concentric bore, restrained edge chamfers and a warm machined bronze finish. No solid-lubricant inserts in this selected variant.
Exact physical object count: 1.
Composition: One complete part only, with a diagonal pose for long components and visible working and mounting ends.
Text policy: No text, labels, dimensions, arrows, logos, grade numbers or watermarks.
Avoid: No separate loose flange, graphite dots, bolts or inserted steel shaft. Also avoid fused geometry, cropped tips, floating shadows or extra objects.
Show only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.
```

### wear-plates · 耐磨板与滑板

用途：系列主图；2 件；同系列组合图。
画面：2 块铜合金耐磨板：一块镶石墨、一块带浅油槽，倾斜展示平面和厚度。
提示词状态：已逐项编写
审图重点：石墨点不可成为通孔；油槽不可变成贯穿裂缝。
位置：/zh/products/bronze-components/wear-plates/

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
Product family: Wear & Slide Plates.
Product function: Replaceable plates form a controlled wear surface on mold slides and other moving interfaces. Specify the sliding pair and lubrication requirements.
Configuration context: Graphite-plugged wear plate: Place solid-lubricant plugs in the working zone where oil supply is difficult. Oil-grooved slide plate: Grooves and oil supply maintain lubrication; connect groove paths to the inlet.
Selected visible subject (takes priority over context): Exactly two rectangular bronze-alloy wear plates resting separately: one with orderly flush circular graphite plugs on its broad bearing face, the other with shallow machined lubrication grooves. Flat parallel surfaces, modest plate thickness, subtle chamfered edges.
Exact physical object count: 2.
Composition: A separated same-family collection, shallow staggered layout, no overlap or hidden working ends. Long axes stay straight.
Text policy: No text, labels, dimensions, arrows, logos, grade numbers or watermarks.
Avoid: No graphite through-holes, deep cracks, warped plates or jewelry-gold reflections. Also avoid fused geometry, cropped tips, floating shadows or extra objects.
Show only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.
```

### precision-dowel-pins · 精密圆柱销

用途：系列主图；3 件；同系列组合图。
画面：3 根精密圆柱销，短实心圆柱、两端轻倒角，长度和直径适度变化。
提示词状态：已逐项编写
审图重点：不添加安装头、螺纹、孔或锥形针尖。
位置：/zh/products/dowel-pins/precision-dowel-pins/

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
Product family: Precision Dowel Pins.
Product function: Ground cylindrical pins locate mating parts for repeat assembly. Hardened and custom-length versions remain within the same locating-pin family.
Configuration context: Precision-ground dowel: A ground diameter fits locating holes for repeatable assembly datums. Hardened dowel: Select hardening for wear duty, with hardness matched to material and mating holes. Custom length and ends: Define chamfers, rounded ends and custom lengths for insertion and assembly.
Selected visible subject (takes priority over context): Exactly three short solid precision dowel pins with straight constant-diameter ground cylinders, flat ends and small end chamfers. A modest progression in length and diameter, all silver steel.
Exact physical object count: 3.
Composition: A separated same-family collection, shallow staggered layout, no overlap or hidden working ends. Long axes stay straight.
Text policy: No text, labels, dimensions, arrows, logos, grade numbers or watermarks.
Avoid: No retaining heads, threads, hollow ends or conical pilot tips. Also avoid fused geometry, cropped tips, floating shadows or extra objects.
Show only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.
```

### threaded-dowel-pins · 螺纹与拔出式定位销

用途：系列主图；2 件；同系列组合图。
画面：2 根定位销，一根端面内螺纹拔出孔、一根短外螺纹端，定位圆柱面保持光滑。
提示词状态：已逐项编写
审图重点：内螺纹孔不能是光孔；不要全杆螺纹或螺栓大头。
位置：/zh/products/dowel-pins/threaded-dowel-pins/

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
Product family: Threaded & Pull Dowel Pins.
Product function: A cylindrical locating surface is combined with a thread for fitting or extraction. The thread supports handling; the ground diameter controls positioning.
Configuration context: Internally threaded pull dowel: Internal threads enable blind-hole removal; allow clearance below the pin. Externally threaded dowel: The threaded end retains or installs; the plain section locates. Metric, inch and custom replacements: Check thread system and cylindrical fit independently to avoid near-size substitutions.
Selected visible subject (takes priority over context): Exactly two threaded locating dowel pins: one with a clearly visible internal extraction thread in one end face, and one with a short reduced external threaded end. Both retain a substantial smooth ground cylindrical locating body.
Exact physical object count: 2.
Composition: A separated same-family collection, shallow staggered layout, no overlap or hidden working ends. Long axes stay straight.
Text policy: No text, labels, dimensions, arrows, logos, grade numbers or watermarks.
Avoid: No smooth unthreaded extraction hole, fully threaded locating body or oversized bolt head. Also avoid fused geometry, cropped tips, floating shadows or extra objects.
Show only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.
```

### pilot-pins · 导正销

用途：系列主图；2 件；同系列组合图。
画面：2 根导正销，圆形导入端和带削边导入端各一支，头部短而圆滑，后接定位段。
提示词状态：已逐项编写
审图重点：不能成为长尖针或普通平头顶针；削边不能切断杆部。
位置：/zh/products/dowel-pins/pilot-pins/

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
Product family: Pilot Pins.
Product function: A shaped lead-in enters a previously pierced hole to locate strip material before the next stamping operation.
Configuration context: Round pilot: The lead-in and cylindrical locating section bring the strip into position. Relieved pilot: Define relief for locating freedom and feed conditions to avoid overconstraint. Custom pilot entry: Choose tapered or radiused entry for available height and engagement motion.
Selected visible subject (takes priority over context): Exactly two stamping pilot pins with supported locating bodies: one with a short gently tapered rounded lead-in nose, and one with a small relieved flat on the lead-in region. Show smooth transitions into the cylindrical locating diameters.
Exact physical object count: 2.
Composition: A separated same-family collection, shallow staggered layout, no overlap or hidden working ends. Long axes stay straight.
Text policy: No text, labels, dimensions, arrows, logos, grade numbers or watermarks.
Avoid: No long needle points, flat-ended ejector tips or broken shaft at the relieved area. Also avoid fused geometry, cropped tips, floating shadows or extra objects.
Show only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.
```

### floating-pins · 浮升销与浮料销

用途：系列主图；1 件；单件图。
画面：1 个代表性浮升销，宽圆形承料头、台阶导向杆，展示承料面，不展示内部弹簧。
提示词状态：已逐项编写
审图重点：具体浮料结构按图定制；不要生成外露弹簧、尖头或滚轮。
位置：/zh/products/dowel-pins/floating-pins/

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
Product family: Floating & Lifter Pins.
Product function: Lifter pins raise or support strip material between stamping operations to provide clearance for feeding.
Configuration context: Round strip lifter: A round support raises the strip without interfering with cutting stations. Profiled strip lifter: Grooved or shaped ends suit strip edges and local profiles. Spring and travel-stop arrangement: Return force, preload and maximum projection define operation.
Selected visible subject (takes priority over context): One representative stamping-strip lifter pin with a broad flat round stock-supporting head and a stepped cylindrical guide stem. Short robust proportions, flat support surface, exterior component only.
Exact physical object count: 1.
Composition: One complete part only, with a diagonal pose for long components and visible working and mounting ends.
Text policy: No text, labels, dimensions, arrows, logos, grade numbers or watermarks.
Avoid: No exposed coil spring, piercing tip, wheel or invented internal actuation mechanism. Also avoid fused geometry, cropped tips, floating shadows or extra objects.
Show only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.
```

### carbide-punches--type-a · A 冲款式 · 单台阶 / 多级阶梯 / 锥肩

用途：结构/款式详情图；3 件；同系列组合图。
画面：A 冲不同款式组合：单台阶圆冲、多级阶梯圆冲、锥肩缩径细针，各 1 支。
提示词状态：已逐项编写
审图重点：三件的台阶数量、肩部形状及轮廓明确不同，不能只改变尺寸。
位置：/zh/products/punch-components/carbide-punches/#configuration-type-a

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

用途：结构/款式详情图；3 件；同系列组合图。
画面：系列图的具体款式待逐件定义；不能以同款长短粗细变化代替不同产品。
提示词状态：待补充不同结构款式；禁止以尺寸变化替代
审图重点：先明确每件不同的结构款式，再生成；不使用同款缩放组合。
位置：/zh/products/punch-components/carbide-punches/#configuration-type-t

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

用途：结构/款式详情图；3 件；同系列组合图。
画面：系列图的具体款式待逐件定义；不能以同款长短粗细变化代替不同产品。
提示词状态：待补充不同结构款式；禁止以尺寸变化替代
审图重点：先明确每件不同的结构款式，再生成；不使用同款缩放组合。
位置：/zh/products/punch-components/carbide-punches/#configuration-hexagonal

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

用途：结构/款式详情图；2 件；同系列组合图。
画面：椭圆与长圆 · 两种工作轮廓，独立对应结构配图。
提示词状态：已逐项编写
审图重点：图片与该卡片的结构名称对应，直接使用生成原图。
位置：/zh/products/punch-components/carbide-punches/#configuration-oval

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

用途：结构/款式详情图；2 件；同系列组合图。
画面：未涂层与涂层 · 外观对比，独立对应结构配图。
提示词状态：已逐项编写
审图重点：图片与该卡片的结构名称对应，直接使用生成原图。
位置：/zh/products/punch-components/carbide-punches/#configuration-coated

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

用途：结构/款式详情图；2 件；同系列组合图。
画面：方形与矩形刃口，2 件代表性结构。
提示词状态：已逐项编写
审图重点：方形与矩形可辨，刃口不能变为螺丝刀或钻头。
位置：/zh/products/punch-components/carbide-punches/#configuration-profile

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

用途：结构/款式详情图；3 件；同系列组合图。
画面：系列图的具体款式待逐件定义；不能以同款长短粗细变化代替不同产品。
提示词状态：待补充不同结构款式；禁止以尺寸变化替代
审图重点：先明确每件不同的结构款式，再生成；不使用同款缩放组合。
位置：/zh/products/punch-components/carbide-punches/#configuration-stepped

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

用途：结构/款式详情图；3 件；同系列组合图。
画面：系列图的具体款式待逐件定义；不能以同款长短粗细变化代替不同产品。
提示词状态：待补充不同结构款式；禁止以尺寸变化替代
审图重点：先明确每件不同的结构款式，再生成；不使用同款缩放组合。
位置：/zh/products/punch-components/carbide-punches/#configuration-cutting

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

用途：结构/款式详情图；2 件；同系列组合图。
画面：高速钢方形与矩形冲头，2 件代表性结构。
提示词状态：已逐项编写
审图重点：两种截面清楚，不通过颜色表示不同钢号。
位置：/zh/products/punch-components/hss-punches/#configuration-flat

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

用途：结构/款式详情图；3 件；同系列组合图。
画面：系列图的具体款式待逐件定义；不能以同款长短粗细变化代替不同产品。
提示词状态：待补充不同结构款式；禁止以尺寸变化替代
审图重点：先明确每件不同的结构款式，再生成；不使用同款缩放组合。
位置：/zh/products/punch-components/hss-punches/#configuration-flat

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

用途：结构/款式详情图；3 件；同系列组合图。
画面：系列图的具体款式待逐件定义；不能以同款长短粗细变化代替不同产品。
提示词状态：待补充不同结构款式；禁止以尺寸变化替代
审图重点：先明确每件不同的结构款式，再生成；不使用同款缩放组合。
位置：/zh/products/punch-components/hss-punches/#configuration-stepped

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

用途：结构/款式详情图；2 件；同系列组合图。
画面：高速钢六角与八角冲头，2 件代表性结构。
提示词状态：已逐项编写
审图重点：逐一核对六边和八边；边数不对即不发布。
位置：/zh/products/punch-components/hss-punches/#configuration-profile

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

用途：结构/款式详情图；3 件；同系列组合图。
画面：系列图的具体款式待逐件定义；不能以同款长短粗细变化代替不同产品。
提示词状态：待补充不同结构款式；禁止以尺寸变化替代
审图重点：先明确每件不同的结构款式，再生成；不使用同款缩放组合。
位置：/zh/products/punch-components/stepped-punches/#configuration-square

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

用途：结构/款式详情图；2 件；同系列组合图。
画面：台阶异形与长圆冲头，2 件代表性结构。
提示词状态：已逐项编写
审图重点：长圆直边与半圆端清晰，不能混成椭圆。
位置：/zh/products/punch-components/stepped-punches/#configuration-custom

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

用途：结构/款式详情图；3 件；同系列组合图。
画面：系列图的具体款式待逐件定义；不能以同款长短粗细变化代替不同产品。
提示词状态：待补充不同结构款式；禁止以尺寸变化替代
审图重点：先明确每件不同的结构款式，再生成；不使用同款缩放组合。
位置：/zh/products/punch-components/stepped-punches/#configuration-multiple

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

用途：结构/款式详情图；3 件；同系列组合图。
画面：系列图的具体款式待逐件定义；不能以同款长短粗细变化代替不同产品。
提示词状态：待补充不同结构款式；禁止以尺寸变化替代
审图重点：先明确每件不同的结构款式，再生成；不使用同款缩放组合。
位置：/zh/products/punch-components/stamping-die-punches/#configuration-cutoff

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

用途：结构/款式详情图；3 件；同系列组合图。
画面：系列图的具体款式待逐件定义；不能以同款长短粗细变化代替不同产品。
提示词状态：待补充不同结构款式；禁止以尺寸变化替代
审图重点：先明确每件不同的结构款式，再生成；不使用同款缩放组合。
位置：/zh/products/punch-components/stamping-die-punches/#configuration-replacement

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

用途：结构/款式详情图；3 件；同系列组合图。
画面：系列图的具体款式待逐件定义；不能以同款长短粗细变化代替不同产品。
提示词状态：待补充不同结构款式；禁止以尺寸变化替代
审图重点：先明确每件不同的结构款式，再生成；不使用同款缩放组合。
位置：/zh/products/punch-components/stamping-die-punches/#configuration-profile

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

用途：结构/款式详情图；2 件；同系列组合图。
画面：方形与六角轮廓，2 件代表性结构。
提示词状态：已逐项编写
审图重点：几何边数与直线度正确。
位置：/zh/products/punch-components/forming-punches/#configuration-polygon

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

用途：结构/款式详情图；2 件；同系列组合图。
画面：椭圆与长圆对比，2 件代表性结构。
提示词状态：已逐项编写
审图重点：两种轮廓必须确实不同。
位置：/zh/products/punch-components/forming-punches/#configuration-obround

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

用途：结构/款式详情图；2 件；同系列组合图。
画面：曲面成型与斜面工作端，2 件代表性结构。
提示词状态：已逐项编写
审图重点：圆弧成型端不应生成锋利尖刺，斜面件不能弯曲。
位置：/zh/products/punch-components/forming-punches/#configuration-angled

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

用途：结构/款式详情图；3 件；同系列组合图。
画面：系列图的具体款式待逐件定义；不能以同款长短粗细变化代替不同产品。
提示词状态：待补充不同结构款式；禁止以尺寸变化替代
审图重点：先明确每件不同的结构款式，再生成；不使用同款缩放组合。
位置：/zh/products/punch-components/a-type-punches/#configuration-flat

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

用途：结构/款式详情图；3 件；同系列组合图。
画面：三种压片冲面，3 件代表性结构。
提示词状态：已逐项编写
审图重点：冲面是浅凹面，不是实心平冲裁刃；不虚构压机型号。
位置：/zh/products/punch-components/tableting-punches/#configuration-upper

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

用途：结构/款式详情图；3 件；同系列组合图。
画面：系列图的具体款式待逐件定义；不能以同款长短粗细变化代替不同产品。
提示词状态：待补充不同结构款式；禁止以尺寸变化替代
审图重点：先明确每件不同的结构款式，再生成；不使用同款缩放组合。
位置：/zh/products/punch-components/tableting-punches/#configuration-engraved

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

用途：结构/款式详情图；3 件；同系列组合图。
画面：系列图的具体款式待逐件定义；不能以同款长短粗细变化代替不同产品。
提示词状态：待补充不同结构款式；禁止以尺寸变化替代
审图重点：先明确每件不同的结构款式，再生成；不使用同款缩放组合。
位置：/zh/products/punch-components/tableting-punches/#configuration-multi-tip

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

### blade-ejector-pins--transition · 扁顶针过渡与厚度

用途：结构/款式详情图；1 件；单件图。
画面：扁顶针过渡与厚度，1 件代表性结构。
提示词状态：已逐项编写
审图重点：圆杆明显长于扁位，不能是宽铲，工作端平钝。
位置：/zh/products/ejector-components/blade-ejector-pins/#configuration-flat

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
Product family: Blade Ejector Pins.
Product function: A thin rectangular working end reaches narrow ribs and restricted ejection areas. Blade orientation and the transition to the shank require close attention.
Configuration context: Flat-ended blade ejector: A thin rectangular section reaches narrow ribs, supported by a round shank. Custom section and treatment: Adapt the blade to mold space; consider thin-section distortion during treatment.
Selected visible subject (takes priority over context): One complete long blade ejector with a disk head, round support shank and narrow rectangular blade approximately as wide as the shank diameter. Side-biased three-quarter view shows blade thickness and smooth root transition.
Exact physical object count: 1.
Composition: One complete part only, with a diagonal pose for long components and visible working and mounting ends.
Text policy: No text, labels, dimensions, arrows, logos, grade numbers or watermarks.
Avoid: No text, dimensions, logos, grade markings, impossible intersections, decorative grooves or invented internal mechanisms. Also avoid fused geometry, cropped tips, floating shadows or extra objects.
Show only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.
```

### square-ejector-pins--square-tip · 方顶针的圆方过渡

用途：结构/款式详情图；1 件；单件图。
画面：方顶针的圆方过渡，1 件代表性结构。
提示词状态：已逐项编写
审图重点：与锋利方冲区别开，不能添加切削槽。
位置：/zh/products/ejector-components/square-ejector-pins/#configuration-square

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
Product family: Square Ejector Pins.
Product function: A square working section provides a non-round contact surface. Its orientation must be maintained by the corresponding mold guide geometry.
Configuration context: Square working section: Match both side directions to the part and guide opening. Round-to-square transition: A round shank supports mounting while the square end provides oriented ejection.
Selected visible subject (takes priority over context): One complete square ejector pin with a long round support shank, disk head and a square working section with a blunt flat end. Two square side faces visible, smooth supported transition.
Exact physical object count: 1.
Composition: One complete part only, with a diagonal pose for long components and visible working and mounting ends.
Text policy: No text, labels, dimensions, arrows, logos, grade numbers or watermarks.
Avoid: No text, dimensions, logos, grade markings, impossible intersections, decorative grooves or invented internal mechanisms. Also avoid fused geometry, cropped tips, floating shadows or extra objects.
Show only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.
```

### ejector-sleeves--core-pair · 司筒与芯针配套关系

用途：结构/款式详情图；2 件；配套组件图。
画面：司筒与芯针配套关系，2 件代表性结构。
提示词状态：已逐项编写
审图重点：2 件分开，司筒必须空心，避免合并成实心杆。
位置：/zh/products/ejector-components/ejector-sleeves/#configuration-thin

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
Product family: Ejector Sleeves.
Product function: A hollow sleeve moves around a core pin to eject a boss or tubular feature. Concentricity and wall thickness are reviewed with the mating core.
Configuration context: Thin-wall and miniature sleeves: For small bosses, focus on wall thickness and annular contact area. Long sleeves: Long sliding bores require straightness, guidance and cleanliness checks.
Selected visible subject (takes priority over context): One separated ejector sleeve and its slender matching core pin. Sleeve has a clearly open through-bore visible at both ends by perspective, a modest retaining head and plausible wall thickness. Pin lies parallel beside it.
Exact physical object count: 2.
Composition: A separated matched set, consistent mating proportions, no fusion or exploded-view arrows.
Text policy: No text, labels, dimensions, arrows, logos, grade numbers or watermarks.
Avoid: No text, dimensions, logos, grade markings, impossible intersections, decorative grooves or invented internal mechanisms. Also avoid fused geometry, cropped tips, floating shadows or extra objects.
Show only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.
```

### flanged-guide-bushings--mount · 法兰安装面与通孔

用途：结构/款式详情图；1 件；单件图。
画面：法兰安装面与通孔，1 件代表性结构。
提示词状态：已逐项编写
审图重点：安装孔不穿透内孔，具体孔位为代表结构。
位置：/zh/products/guide-components/flanged-guide-bushings/#configuration-shoulder

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
Product family: Flanged Guide Bushings.
Product function: A flange provides an axial locating face for the guide bushing. The mounting face and bore must share the specified alignment.
Configuration context: Shouldered bushing: A shoulder seats against the plate to set mounting depth. Flange-mounted bushing: A flange accommodates screws or clamps; check mounting-hole interference.
Selected visible subject (takes priority over context): One flanged steel guide bushing with a clearly open cylindrical bore, a substantial mounting flange and a simple regular bolt-hole arrangement. Show flange face and body length.
Exact physical object count: 1.
Composition: One complete part only, with a diagonal pose for long components and visible working and mounting ends.
Text policy: No text, labels, dimensions, arrows, logos, grade numbers or watermarks.
Avoid: No text, dimensions, logos, grade markings, impossible intersections, decorative grooves or invented internal mechanisms. Also avoid fused geometry, cropped tips, floating shadows or extra objects.
Show only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.
```

### guide-sets--ball-set · 导柱、滚珠保持架、导套

用途：结构/款式详情图；3 件；配套组件图。
画面：导柱、滚珠保持架、导套，3 件代表性结构。
提示词状态：已逐项编写
审图重点：保持架钢球不可悬浮，三个件不得融合；不画爆炸箭头。
位置：/zh/products/guide-components/guide-sets/#configuration-ball

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
Product family: Guide Post & Bushing Sets.
Product function: Posts and bushings specified as a mating set simplify fit coordination. Sliding and rolling systems use different clearances and assembly requirements.
Configuration context: Ball guide set: Check post, cage and bushing together for preload and cage travel.
Selected visible subject (takes priority over context): Exactly three separated parts of a representative mold ball guide: one polished guide post, one brass cylindrical cage with clearly retained steel balls, and one open steel guide bushing. Side-by-side with coherent mating proportions.
Exact physical object count: 3.
Composition: A separated matched set, consistent mating proportions, no fusion or exploded-view arrows.
Text policy: No text, labels, dimensions, arrows, logos, grade numbers or watermarks.
Avoid: No text, dimensions, logos, grade markings, impossible intersections, decorative grooves or invented internal mechanisms. Also avoid fused geometry, cropped tips, floating shadows or extra objects.
Show only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.
```

### nitrogen-gas-springs--mount · 气弹簧与安装法兰

用途：结构/款式详情图；2 件；配套组件图。
画面：气弹簧与安装法兰，2 件代表性结构。
提示词状态：已逐项编写
审图重点：不展示未经确认的内部结构、充气步骤或压力数值。
位置：/zh/products/die-springs/nitrogen-gas-springs/#configuration-mounting

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
Product family: Nitrogen Gas Springs.
Product function: A sealed gas spring produces return or holding force through compressed nitrogen. Select a rated unit and mounting arrangement for the intended tool duty.
Configuration context: Mounting accessories: Flanges or base mounts retain position while avoiding side loads.
Selected visible subject (takes priority over context): One sealed compact gas spring with a polished piston rod and one separate matching mounting flange ring. Neutral industrial finish without labels, ports hidden if uncertain; no section view.
Exact physical object count: 2.
Composition: A separated matched set, consistent mating proportions, no fusion or exploded-view arrows.
Text policy: No text, labels, dimensions, arrows, logos, grade numbers or watermarks.
Avoid: No text, dimensions, logos, grade markings, impossible intersections, decorative grooves or invented internal mechanisms. Also avoid fused geometry, cropped tips, floating shadows or extra objects.
Show only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.
```

### sprue-bushings--nozzle-seat · 喷嘴接触面与进料孔

用途：结构/款式详情图；1 件；单件图。
画面：喷嘴接触面与进料孔，1 件代表性结构。
提示词状态：已逐项编写
审图重点：喷嘴座是凹面且有贯通孔，不按示意宣称 A/B/C 尺寸。
位置：/zh/products/plastic-mold-components/sprue-bushings/#configuration-type-a

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
Product family: Sprue Bushings.
Product function: The sprue bushing connects the machine nozzle to the mold runner. Nozzle-seat geometry and the internal taper must suit the injection system.
Configuration context: Type A configuration: Check head and mounting geometry against the selected catalog. Type B configuration: Match dimensions when replacing a bushing rather than ordering by type name alone. Type C configuration: Confirm the combination of head, runner and installation length. Cold-runner sprue bushing: Check nozzle contact, release taper and runner transition.
Selected visible subject (takes priority over context): One cold-runner steel sprue bushing with a broad head, shallow spherical nozzle seat and a visible central inlet opening. Show the complete cylindrical body and open outlet at a plausible angle, no cutaway.
Exact physical object count: 1.
Composition: One complete part only, with a diagonal pose for long components and visible working and mounting ends.
Text policy: No text, labels, dimensions, arrows, logos, grade numbers or watermarks.
Avoid: No text, dimensions, logos, grade markings, impossible intersections, decorative grooves or invented internal mechanisms. Also avoid fused geometry, cropped tips, floating shadows or extra objects.
Show only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.
```

### graphite-bronze-bushings--working-bore · 内孔石墨润滑点

用途：结构/款式详情图；1 件；单件图。
画面：内孔石墨润滑点，1 件代表性结构。
提示词状态：已逐项编写
审图重点：石墨必须在实际内孔滑动面可见，不能只布置在外圆。
位置：/zh/products/bronze-components/graphite-bronze-bushings/#configuration-cylindrical

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
Product family: Graphite Bronze Bushings.
Product function: Solid-lubricant plugs in a copper-alloy body support sliding applications where continuous lubrication is difficult. Suitability depends on load, speed and temperature.
Configuration context: Cylindrical graphite bushing: Place lubricant plugs on the sliding bore for the actual motion.
Selected visible subject (takes priority over context): One cylindrical warm-bronze bushing with solid dark graphite plugs distributed visibly on the inner sliding bore. Large open bore faces the camera; complete outside silhouette and realistic wall thickness.
Exact physical object count: 1.
Composition: One complete part only, with a diagonal pose for long components and visible working and mounting ends.
Text policy: No text, labels, dimensions, arrows, logos, grade numbers or watermarks.
Avoid: No text, dimensions, logos, grade markings, impossible intersections, decorative grooves or invented internal mechanisms. Also avoid fused geometry, cropped tips, floating shadows or extra objects.
Show only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.
```

### threaded-dowel-pins--pull-thread · 拔出式定位销内螺纹

用途：结构/款式详情图；1 件；单件图。
画面：拔出式定位销内螺纹，1 件代表性结构。
提示词状态：已逐项编写
审图重点：内孔是螺纹孔，外圆应保持光滑；不画普通全螺纹螺钉。
位置：/zh/products/dowel-pins/threaded-dowel-pins/#configuration-pull

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
Product family: Threaded & Pull Dowel Pins.
Product function: A cylindrical locating surface is combined with a thread for fitting or extraction. The thread supports handling; the ground diameter controls positioning.
Configuration context: Internally threaded pull dowel: Internal threads enable blind-hole removal; allow clearance below the pin.
Selected visible subject (takes priority over context): One precision cylindrical steel dowel pin with an axial internally threaded extraction hole on the visible end and a smooth ground outer locating surface. Complete short cylindrical pin, subtle end chamfer.
Exact physical object count: 1.
Composition: One complete part only, with a diagonal pose for long components and visible working and mounting ends.
Text policy: No text, labels, dimensions, arrows, logos, grade numbers or watermarks.
Avoid: No text, dimensions, logos, grade markings, impossible intersections, decorative grooves or invented internal mechanisms. Also avoid fused geometry, cropped tips, floating shadows or extra objects.
Show only the selected visible subject; context does not authorize additional parts, material colors or mechanisms.
```

