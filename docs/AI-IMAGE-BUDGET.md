# 源智信独立站 — 图片与 AI 工具预算建议

## 当前站点已具备

- **Logo**：`/public/images/brand/logo.svg`（矢量，可无限放大）
- **产品/工厂图**：已用 AI 生成并替换 Unsplash 占位，带 **YZX 水印层**（`BrandedImage` 组件）
- **后续换实拍**：只需替换 `public/images/` 下同名文件，水印仍会自动叠加

---

## 若要用 AI 批量生图（推荐组合）

### 方案 A：性价比（月 ¥100–300）

| 工具 | 用途 | 参考价 |
|------|------|--------|
| **Midjourney** | 产品白底图、工厂氛围图 | ~$10/月 |
| **Canva Pro** | 叠 Logo、裁尺寸、导出 WebP | ~$13/月 |
| **Remove.bg** | 抠图、白底 | 按量或 ~$9/月 |

**工作流**：Midjourney 生图 → Canva 叠 `logo-watermark.svg` → 导出 WebP 800–1200px → 放入 `public/images/`

### 方案 B：更可控产品图（月 ¥300–800）

| 工具 | 用途 |
|------|------|
| **Flux / SDXL（本地或 Replicate）** | 同一产品多角度、同一光影 |
| **Photoshop Generative Fill** | 在实拍基础上扩展背景 |
| **TinyPNG / Squoosh** | 压缩，单张 <200KB |

适合：异形冲针 12+ 张要**风格统一**时用。

### 方案 C：有实拍后只做增强（一次性 ¥0–200）

| 工具 | 用途 |
|------|------|
| **Topaz Photo AI** | 模糊实拍变清晰 |
| **Lightroom** | 统一色调、裁剪 |
| **Canva** | 加水印、多语言图注 |

**最推荐**：P0 清单拍实机图（见 README），AI 只补工厂外景或暂时没有的品类。

---

## 不建议

- 纯 AI 假工厂流水线冒充实拍（B2B 客户会视频验厂）
- 每个品类各买一套 SaaS（成本叠加、风格不统一）
- 在图里 **烧录** 大 Logo（难换图）；用站点 `BrandedImage` 水印即可

---

## 图片清单与路径

| 类型 | 路径 | 建议尺寸 |
|------|------|----------|
| Hero / 工厂 | `public/images/factory/` | 1920×1080 |
| 品类封面 | `public/images/categories/` | 1200×900 |
| 产品详情 | `public/images/products/` | 1200×1200 白底 |
| 异形合集 | `public/images/products/special-shaped*.png` | 多张 800+ 宽 |
| Logo | `public/images/brand/` | SVG 为主 |

---

## 预算小结（首年）

| 档位 | 预算 | 适合 |
|------|------|------|
| 最低 | ¥0 | 用现成 AI 图 + 后期换实拍 |
| 标准 | ¥1500–3000/年 | Midjourney + Canva + 一次实拍 |
| 专业 | ¥5000+ | 摄影棚 + Topaz + 多语言图注外包 |

实拍 1 天（工厂 + 产品白底）通常比任何 AI 订阅都更促转化。
