# Local workspace (gitignored)

AI 出图候选、审阅截图和批处理日志放在此目录，不会提交到 Git。

## 子目录

| 路径 | 内容 | 是否含水印 |
| --- | --- | --- |
| `htx-sources/` | 从 htxprecision.com 抓下的参考原图 + `manifest.json` | **无** |
| `watermark-backups/` | 跑 `npm run images:watermark` 或首次批量打水印前备份的 **public 原字节** | **无**（备份时点） |
| `htx-retouch/` | Terrakinc 修图输出与 manifest | 视流程而定 |
| `feishu-retouch/` | 飞书试修单张输出 | 视流程而定 |
| `product-images/` | AI 生图候选目录（`generation.json`） | 生成阶段通常无站点水印 |

线上站点用的是 `public/images/products/…`（发布脚本会 **写入带 YZX 水印** 的文件）。

发布流程见 `docs/product-image-production-plan.md` 与 `scripts/image-gen/publish-reviewed.mjs`。
