# 冲针 HTX 选图对齐表

结构与 [HTX Punch Components](https://htxprecision.com/punch-components/) 各品类页 `pc3s4` / `pc3s5` 分类一一对应。发布：`node scripts/htx/publish-punch-from-retouch.mjs --htx`

## 冲针分组页 6 张主图（`/products/punch-components/`）

与 [HTX 冲针汇总页](https://htxprecision.com/punch-components/) 品类网格 `2026/07/*.png` 一一对应（`role: catalog-main`）。发布时 **只加水印、不改尺寸**；站点列表与详情主图以 **1:1** 展示（`object-contain`）。

| 产品 ID | HTX 源文件 |
| --- | --- |
| `carbide-punches` | `.../carbide-punches/source-42-Custom-Carbide-Punch-Pin-Supplier.png` |
| `hss-punches` | `.../hss-punches/source-25-HSS-Punch-Manufacturer.png` |
| `stepped-punches` | `.../stepped-punches/source-25-Stepped-Punch-Supplier.png` |
| `stamping-die-punches` | `.../stamping-die-punches/source-14-Stamping-Die-Punches-Manufacturer.png` |
| `tungsten-carbide-punches` | `.../forming-punches/source-06-Tungsten-Carbide-Punch-Manufacturer-1.png` |
| `tableting-punches` | `.../tableting-punches/source-22-Custom-Dies-and-Punches-for-Tableting-Manufacturer-1.png` |

## 硬质合金冲头（钨钢） (`carbide-punches`)

| 种类 ID | 中文名 | HTX 源文件 |
| --- | --- | --- |
| `type-a` | A 型圆柱直身冲针 | `output/htx-sources/punch-components/carbide-punches/source-02-Straight-Punch-Cylindrical-Type-A.jpg` |
| `type-t` | T 型圆柱直身冲针 | `output/htx-sources/punch-components/carbide-punches/source-03-Straight-Punch-Cylindrical-Type-T.jpg` |
| `profile` | 定制异形直身冲针 | `output/htx-sources/punch-components/carbide-punches/source-04-Custom-shaped-Punches.jpg` |
| `cutting` | 切断冲头 | `output/htx-sources/punch-components/carbide-punches/source-05-Cutting-Punch.jpg` |
| `precision` | 精密冲头 | `output/htx-sources/punch-components/carbide-punches/source-06-Precision-Punch.jpg` |
| `hexagonal` | 六角冲头 | `output/htx-sources/punch-components/carbide-punches/source-07-Hexagonal-Punch.jpg` |
| `pilot` | 引导冲头 / 导正冲 | `output/htx-sources/punch-components/carbide-punches/source-08-Pilot-Punch.jpg` |
| `oval` | 椭圆冲头 | `output/htx-sources/punch-components/carbide-punches/source-09-Oval-Punch.jpg` |

## 高速钢冲头 (`hss-punches`)

| 种类 ID | 中文名 | HTX 源文件 |
| --- | --- | --- |
| `ejector` | 带退料 HSS 冲头 | `output/htx-sources/punch-components/hss-punches/source-02-1-Ejector-punch.jpg` |
| `flat` | 扁形 HSS 冲头 | `output/htx-sources/punch-components/hss-punches/source-03-2-Flat-punch.jpg` |
| `square` | 方形 HSS 冲头 | `output/htx-sources/punch-components/hss-punches/source-04-3-Square-punch.jpg` |
| `rectangular` | 矩形 HSS 冲头 | `output/htx-sources/punch-components/hss-punches/source-05-4-Rectangular-punch.jpg` |
| `step` | 台阶 HSS 冲头 | `output/htx-sources/punch-components/hss-punches/source-06-5-Step-punch.jpg` |
| `special-shaped` | 异形 HSS 冲头 | `output/htx-sources/punch-components/hss-punches/source-07-6-Special-shaped-punch.jpg` |
| `round` | 圆形 HSS 冲头 | `output/htx-sources/punch-components/hss-punches/source-08-7-Round-punch.jpg` |
| `guide` | 引导 HSS 冲头 | `output/htx-sources/punch-components/hss-punches/source-09-8-Guide-punch.jpg` |

## 台阶与多级冲头 (`stepped-punches`)

| 种类 ID | 中文名 | HTX 源文件 |
| --- | --- | --- |
| `special-shaped` | 异形台阶冲头 | `output/htx-sources/punch-components/stepped-punches/source-03-1-Special-shaped-punches.jpg` |
| `stepped-round` | 台阶圆冲 | `output/htx-sources/punch-components/stepped-punches/source-04-2-Stepped-round-punches.jpg` |
| `stepped-square` | 台阶方冲 | `output/htx-sources/punch-components/stepped-punches/source-05-3-Stepped-square-punches.jpg` |
| `multi-diameter` | 多级缩径台阶冲头 | `output/htx-sources/punch-components/stepped-punches/source-06-4-Multi-diameter-step-punches.jpg` |
| `custom-shaped` | 来图定制台阶冲头 | `output/htx-sources/punch-components/stepped-punches/source-07-5-Custom-shaped-stepped-punches.jpg` |

## 冲压模冲头 (`stamping-die-punches`)

| 种类 ID | 中文名 | HTX 源文件 |
| --- | --- | --- |
| `custom-stamping` | 定制冲压模冲头 | `output/htx-sources/punch-components/stamping-die-punches/source-06-Custom-Stamping-Die-Punches-1.jpg` |
| `materials` | 冲压模冲头材料 | `output/htx-sources/punch-components/stamping-die-punches/source-07-Materials-for-Stamping-Die-Punches.jpg` |
| `manufacturer-range` | 冲压模冲头系列 | `output/htx-sources/punch-components/stamping-die-punches/source-14-Stamping-Die-Punches-Manufacturer.png` |

## 压片冲模 (`tableting-punches`)

| 种类 ID | 中文名 | HTX 源文件 |
| --- | --- | --- |
| `tablet-shapes` | 定制片形与冲模轮廓 | `output/htx-sources/punch-components/tableting-punches/source-03-1-Standard-Punches-and-Dies.png` |
| `engraved` | 刻字与标识冲模 | `output/htx-sources/punch-components/tableting-punches/source-04-2-Specialty-Punches-and-Dies.png` |
| `multi-tip` | 多冲尖压片工装 | `output/htx-sources/punch-components/tableting-punches/source-05-3-Multi-tip-Punches-and-Dies.png` |
| `press-specific` | 压机专用定制工装 | `output/htx-sources/punch-components/tableting-punches/source-06-Press-Specific-Custom-Tooling.png` |

## 钨钢冲头 (`tungsten-carbide-punches`)

| 种类 ID | 中文名 | HTX 源文件 |
| --- | --- | --- |
| `straight` | 直身钨钢冲头 | `output/htx-sources/punch-components/carbide-punches/source-27-1-Straight-Punch.png` |
| `step` | 台阶钨钢冲头 | `output/htx-sources/punch-components/carbide-punches/source-28-2-Step-punch.png` |
| `precision` | 精密钨钢冲头 | `output/htx-sources/punch-components/carbide-punches/source-29-3-Precision-punch.png` |
| `coated` | 涂层冲头系列 | `output/htx-sources/punch-components/carbide-punches/source-30-4-Coated-Punch-Series.png` |

## 冲针详情长内容（IA）

冲针 6 品详情页在「结构与可选配置」（1:1 配置图，不变）之后，由 [`PunchFamilyLongform.astro`](../src/components/PunchFamilyLongform.astro) 按 HTX 阅读顺序渲染：

1. 应用领域 / 应用场景（`PunchStorySplit` 左右分栏 + 交替；文案含立即询价；钨钢含行业 tile）
2. 材料 / 表面（分栏 + HTX 信息图 `chart`；文案含立即询价）
3. 品类 FAQ（页内唯一 FAQ；通用 FAQ/选型侧栏在 slug 页对冲针隐藏）

（关联冲压材料、为何选我们两节在冲针长内容模板中已关闭。）

冲针详情 typography：区块 H2 `text-2xl md:text-3xl`；正文统一 `text-base leading-relaxed text-slate-600`；FAQ/牌号标题 `text-base font-medium text-borui-navy`；辅助 `text-xs text-slate-500`。

长内容每段描述末尾：`立即询价`（`configurationInquiry`），`data-quote-product` 为 `系列名 · 区块名`，与配置卡一致写入 `#quote` 表单。

### 长内容版式

冲针长内容使用 [`PunchStorySplit.astro`](../src/components/PunchStorySplit.astro)：桌面端左右分栏；区块 **H2 与正文同列**（`FamilyDetailSection` `titlePlacement="inline"`）；应用 `scene`（4:3），材料 `chart`，表面 `chart` + `chartSize="large"`（图列更宽、不压 `max-height`）；文案列含 **立即询价**。材料节不展示「可选材料牌号（按图纸确认）」折叠块。

HTX 长图发布：`node scripts/htx/publish-family-section-images.mjs` → [`catalog-family-figures.json`](../src/data/catalog-family-figures.json)。映射规则见 [`data/catalog/htx-family-figure-rules.json`](../data/catalog/htx-family-figure-rules.json)。

## Phase 1：顶出组件（`ejector-components`）

7 品已接入 HTX 长内容模板（`isHtxFamilyLongformProduct` + `catalog-family-extras.json`）。选型发布：`data/catalog/ejector-htx-selection.json` → `node scripts/htx/publish-punch-from-retouch.mjs --htx --selection data/catalog/ejector-htx-selection.json`。

| 产品 ID | 配置区 | 备注 |
| --- | --- | --- |
| `straight-ejector-pins`、`square-ejector-pins`、`blade-ejector-pins` 等（HTX 有 Design/Types 三卡） | 显示 | 标准 / 定制 / 材料选项 → `catalog-detail-media.json` |
| `stepped-ejector-pins` 等 | 显示 | 按各 HTX 页 Types 对照 |
| `shoulder-ejector-pins` | **隐藏** | HTX 无「三种子型号」；页内为工程应用 / 表面处理 / 定制能力（几何·材料）→ `hideConfigurations: true` |
| `air-poppet-valves` | **隐藏** | `hideConfigurations: true` |

验收链接（zh）：

- `/zh/products/ejector-components/straight-ejector-pins/`
- `/zh/products/ejector-components/shoulder-ejector-pins/`
- `/zh/products/ejector-components/stepped-ejector-pins/`
- `/zh/products/ejector-components/blade-ejector-pins/`
- `/zh/products/ejector-components/square-ejector-pins/`
- `/zh/products/ejector-components/ejector-sleeves/`
- `/zh/products/ejector-components/air-poppet-valves/`

## Phase 2：导向 / 弹簧 / 轴套 / 定位销（14 品）

与顶出相同流程：**HTX 源图 → selection JSON → detail 发布 → `crop-catalog-main-4x3.mjs`（4:3 主图）→ `htx-family-figure-rules.json` + `publish-family-section-images.mjs`**。列表/分组主图 **4:3**（`catalogProductMediaFrame`）；配置区仍为 **1:1**。

| 分组 | selection 文件 | 品数 |
| --- | --- | --- |
| `guide-components` | `data/catalog/guide-htx-selection.json` | 6 |

`flanged-guide-bushings`、`guide-sets` 共用 [HTX Guide Pillar And Guide Bush](https://htxprecision.com/guide-pillar-and-guide-bush/)（**无**单独「组件套装」URL；`reference-coverage.json` 一站拆多品）。材料节对齐 **Heat Treatment / Precision & Surface**（非「Custom Solutions」营销图）；`hideApplicationSections` + `hideSurfaceSection`。配置三卡：`guide-htx-selection.json` → SRP 滑动 / TRP 滚珠 / 定制总成。

`ball-bearing-bushings` 对齐 [HTX Ball Bearing Bushing](https://htxprecision.com/Ball-bearing-bushing/)：`hideConfigurations`；`hideMaterialSurfaceSections`（长内容材料/选型块在 HTX 源图发布可靠前不展示，避免错图）；应用四宫格 + FAQ。参考页无独立「滚动导向单元」SKU。

`guide-posts` 对齐 [HTX Guide Pins](https://htxprecision.com/guide-pin/)：**3 配置**（卸料板 / 注塑模 / 模具导柱）→ 对应 HTX Types 三卡；`hideApplicationSections`；材料节 `materialsFigure` + 选型 `processFigure`；`hideSurfaceSection`；**不展示** HTX 优势四图标长内容节；FAQ 三问与 HTX 一致。滚珠导向见 `guide-sets` / `ball-cages`，勿作第四配置卡。
| `die-springs` | `data/catalog/die-springs-htx-selection.json` | 2 |

`rectangular-die-springs` 对齐 [HTX Die Springs / Mold Springs](https://htxprecision.com/die-springs-mold-springs/)（与 `nitrogen-gas-springs` 共用汇总页；矩形簧五色卡对应 HTX Types 前五项）。长内容：**应用**三宫格（注塑/冲压/工装）；**材料块**配 `source-02`「What Are Die Springs」矩形簧示意 + 载荷色标文案；**如何选型**配 `source-13` 四因素（勿把选型图挂在应用节）。配置区保留黄—棕五卡。
| `bronze-components` | `data/catalog/bronze-htx-selection.json` | 4 |

**青铜组件**（[Graphite Bronze Bushings](https://htxprecision.com/graphite-bronze-bushings/) 一页拆三品 + 导向页拆普通铜套）：

- `graphite-bronze-bushings` / `flanged-bronze-bushings` / `wear-plates`：应用 **五宫格**（注塑/压铸/冲压/重机/工程机械）；材料 `Material-Options-Performance`；**工作原理** `How-Graphite-Bronze-Bushings-Work`（勿把原理图当应用大图；耐磨板勿用 Custom Manufacturing 当材料图）。
- `bronze-bushings`：无独立 HTX 页，摘自 [Guide Pillar And Guide Bush](https://htxprecision.com/guide-pillar-and-guide-bush/) 青铜导套示意；`hideApplicationSections` + `hideMaterialSurfaceSections`（避免导柱页误配图标/营销图）；保留光孔/油槽两配置卡。
| `dowel-pins` | `data/catalog/dowel-htx-selection.json` | 2 |

**定位销**：`precision-dowel-pins` 对齐 [HTX Dowel Pins](https://htxprecision.com/dowel-pins/)：`hideMaterialSurfaceSections`；应用四宫格 + 精密/淬硬/定制三卡 + FAQ。`threaded-dowel-pins` 对齐 [Threaded Dowel Pins](https://htxprecision.com/threaded-dowel-pins/)：`hideConfigurations` + `hideMaterialSurfaceSections`（无 HTX 三卡 Types；勿把 Pull Dowel 与内/外螺纹/公英制三卡当子页）；应用四宫格 + FAQ 与 HTX 一致。HTX 菜单 **Pull Dowel Pins** 为独立品类，本站未单独建 slug。

重跑示例：

```bash
node scripts/htx/publish-punch-from-retouch.mjs --htx --detail-only --selection data/catalog/guide-htx-selection.json
node scripts/htx/crop-catalog-main-4x3.mjs --group guide-components --selection data/catalog/guide-htx-selection.json
node scripts/htx/publish-family-section-images.mjs
node scripts/prepare-catalog.mjs && node scripts/check-catalog.mjs
```

说明：`bronze-bushings` 无独立 HTX 品类页，主图/配置取自导向组件页中的青铜导套示意；`nitrogen-gas-springs` 配置图部分为 HTX 汇总页选型示意（无单独子页图时）。
