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
