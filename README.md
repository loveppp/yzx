# 深圳市源智信模具配件有限公司 / YZX Precision

模具配件 B2B 外贸独立站 — **Astro 5** + Tailwind + **英 / 中 / 越** 三语。

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

## 部署（Cloudflare Pages）

- Build command: `npm run build`
- Output directory: `dist`
- 询价邮件环境变量见 [docs/DEPLOYMENT.md](./docs/DEPLOYMENT.md)
