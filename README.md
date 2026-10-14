# 深圳市源智信模具配件有限公司 / YZX Precision

模具配件 B2B 外贸独立站 — **Astro 5** + Tailwind + **英 / 中 / 越** 三语。

**快速熟悉项目（怎么跑、目录、改哪）：[docs/项目快速入门.md](./docs/项目快速入门.md)**  
**完整说明与日常用法见：[docs/项目说明与使用指南.md](./docs/项目说明与使用指南.md)**

## 快速开始

需要 **Node.js >= 18.20.8**（推荐 20）。若本机仍是 Node 12，先把 Node 20 加入 `PATH`（见下方），再：

```bash
npm install
npm run dev
```

打开 http://localhost:4321（默认进入 `/en/`）。

可选：将下面一行写入 `~/.bash_profile` 或 `~/.zshrc` 后重开终端：

```bash
export PATH="$HOME/.local/node-v20.18.3-darwin-x64/bin:$PATH"
```

## 常用命令

```bash
npm run dev              # 本地开发
npm run catalog:check    # 校验 catalog 与图片文件
npm run build            # 生成 redirects、检查、构建 dist/
npm run preview          # 预览 dist/
npm run image-gen -- 帮助  # 产品图 CLI（可选）
```

## 改内容改哪里

| 需求 | 位置 |
|------|------|
| 产品系列、大类、主图路径 | `src/data/catalog.json` |
| 配置参数与详情文案 | `src/data/catalog-details.json` |
| 细节图 | `src/data/catalog-detail-media.json` + `public/images/products/details/` |
| 导航、联系、表单文案 | `src/i18n/messages/*.json` |
| 旧链接跳转 | `src/data/catalog-legacy.json`（构建写入 `public/_redirects`） |

## `catalog.json` 字段说明

产品数据源：`src/data/catalog.json` 含 **`groups`**（大类）与 **`products`**（系列）。多语言字段均为 **`{ "en", "zh", "vi" }`** 三语对象（下文称 LocalizedText）。

### `selection`（选型要点）

告诉采购/工程师 **询价前要确认哪几类信息**。每个语言写 **一段字符串**，用 **`;` 或 `；`** 拆成多条，在页面上显示为列表。

| 位置 | 展示页面 |
|------|----------|
| `groups[].selection` | 大类页 `/{locale}/products/{category}/` 右侧「选型要点」（段数不限） |
| `products[].selection` | 系列详情页「What to specify / 选型要点」编号列表；长文 FAQ 等也会引用 |

**系列（`products`）校验**：`npm run catalog:check` 要求每个语言的 `selection` **恰好 3 段**（两个分号）。大类无此条数限制。

写法建议：每段宜短、并列（例：`板材牌号与厚度；刃口轮廓与支撑；杆径与固定方式`）；`en` 不要写中文；避免夸张营销句（检查脚本会拦部分模式）。

### `groups[]`（产品大类）

| 字段 | 说明 |
|------|------|
| `id` | 大类 slug，URL：`/products/{id}/`，小写连字符，唯一 |
| `coverImage` | 可选，封面图路径（相对 `public`，如 `/images/catalog/...`） |
| `name` | LocalizedText，大类名称 |
| `intro` | LocalizedText，大类页导语；亦作该页 meta description |
| `selection` | 见上，大类页右侧选型列表 |

### `products[]`（产品系列）

| 字段 | 说明 |
|------|------|
| `group` | 所属大类 `id` |
| `id` | 系列 slug，URL：`/products/{group}/{id}/`，唯一 |
| `name` | LocalizedText，详情 H1、导航、卡片标题 |
| `summary` | LocalizedText，详情首段、SEO 描述、Product 结构化数据 |
| `application` | LocalizedText，主要用途/工况 |
| `selection` | 见上，**必须 3 段**分号分隔 |
| `materials` | 材质标签数组（如 `SKD61`），列表可筛选 |
| `variants` | LocalizedText 数组，系列下的结构/款式方向（非固定 SKU） |
| `sourceUrls` | 参考链接，内部维护，前台一般不展示 |
| `image` | 可选，主图 `/images/products/catalog/...`；无则用 `illustration` |
| `illustration` | 必填，SVG/备用图 `/images/catalog/...`，文件须存在 |
| `imageGenerated` | 可选，是否 AI/批量出图（影响水印展示） |
| `note` / `detailImage` / `imageCaption` | 可选，少数系列使用 |

### 与 `catalog.json` 配套的其它文件

| 文件 | 作用 |
|------|------|
| `catalog-details.json` | 键 = 系列 `id`；各 configuration 的名称、参数、说明 |
| `catalog-detail-media.json` | 配置细节图，`configurationIds` 对应 details 里 `variant.id` |
| `catalog-family-extras.json` | 系列长文：应用、优势、extraFaqs 等 |
| `catalog-family-figures.json` | 长文配图路径 |
| `catalog-legacy.json` | 旧 URL → 新系列，build 生成 301 |

## 部署

- **腾讯云 CVM**：`root@159.75.252.43` → `/var/www/yzx`，http://159.75.252.43/zh/ — 构建与上传命令见 [docs/DEPLOYMENT.md](./docs/DEPLOYMENT.md)
- **Cloudflare Pages**（可选，含询价 API）：`npm run build`，输出 `dist/`
