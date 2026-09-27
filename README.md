# 深圳市源智信模具配件有限公司 / YZX Precision

模具配件 B2B 外贸独立站 — Astro 5 + Tailwind + 中英 i18n。

## 本地预览

**需要 Node.js >= 18.20.8**（Astro 5 不支持 Node 12）。

本项目已配置脚本自动使用 `~/.local/node-v20.18.3-darwin-x64`（无需 sudo）。若你终端里 `node -v` 仍是 12，请先把下面一行加入 `~/.bash_profile` 或 `~/.zshrc` 后 **重新打开终端**：

```bash
export PATH="$HOME/.local/node-v20.18.3-darwin-x64/bin:$PATH"
```

然后：

```bash
npm install
npm run dev
```

浏览器打开 http://localhost:4321 （默认跳转 `/en/`）

### 彻底替换系统旧 Node（可选，需输入密码）

旧版 `/usr/local/bin/node`（v12）是独立二进制，需手动删除后链接 Homebrew：

```bash
sudo rm /usr/local/bin/node
brew link --overwrite node
node -v   # 应显示 v20+
```

## 构建

```bash
npm run build
npm run preview
```

## 替换占位内容

1. **图片**：将实拍图放入 `public/images/`，并更新 `src/data/images.ts` 或各产品 MDX 的 `heroImage`
2. **联系方式**：编辑 `src/i18n/en.json` 与 `src/i18n/zh.json` 中的 `contact.*`
3. **工厂数据**：编辑 `src/data/materials.ts` 中 `[待填]` 设备数量
4. **产品**：在 `src/content/products/` 添加或修改 MDX

## 部署（Cloudflare Pages）

- Build command: `npm run build`
- Output directory: `dist`
