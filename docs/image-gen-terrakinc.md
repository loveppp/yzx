# 冲针出图工具 — 怎么玩（中文）

> **当前流程（2026-09-30 用户更新）：生成后直接接入，不反复审图或加工。** 先看 [冲头图片计划](./punch-image-production-plan.md)。使用 `source scripts/use-node20.sh` 后运行 `npx tsx scripts/image-gen/sample.ts --id <job-id> --style-reference <已确认风格图路径> --publish`。每次 1 张，每批 2–3 张，无自动重试；保留并直接复制原图，不校色、不裁切、不重新编码。图片、提示词和来源记录在 `output/product-images/candidates`，详情图片通过 `src/data/catalog-detail-media.json` 自动显示到对应配置卡片，主图通过 `src/data/catalog.json` 更新。不要输出或覆盖已有 `.env` 密钥。
>
> 以下是旧版工具说明，包含 1:1、批量重试和旧 Markdown 路径，**不用于当前目录**。不要用下方“初始化”或“批量”命令执行当前图片计划。

API 文档：[Terrakinc 图片生成](https://api.terrakinc.com/docs/image-api-reference.html)

**你不需要写英文。** 英文描述在 `scripts/image-gen/prompts.ts` 里由程序自动拼好，是给 AI 模型看的。

---

## 三步开始

### 第 1 步：填密钥

```bash
cd /Users/zhanghaitao/projects/foreignTrade   # 项目根目录
cp .env.example .env
```

用编辑器打开 **`.env`**，只改这一行：

```env
TERRAKINC_API_TOKEN=sk-这里粘贴你的令牌
```

保存。不要把 `.env` 提交到 git。

### 第 2 步：初始化背景（只做一次）

建议先开 Node 20（项目里有脚本）：

```bash
source scripts/use-node20.sh
npm run image-gen -- 初始化
```

成功后会看到：

- `data/image-gen/style-reference.jpg` — 统一灰色棚拍背景样板
- `data/image-gen/style-ref-uri.txt` — 后续批量都会参考这张图，保证背景差不多一致

### 第 3 步：出图

**单张：**

```bash
npm run image-gen -- 生成 --种类 台阶冲针 --材料 SKD61
```

**多张（推荐）：** 复制并修改 `data/image-gen/batches/冲针-示例.json`，然后：

```bash
npm run image-gen -- 批量 --任务单 data/image-gen/batches/冲针-示例.json
```

**不知道种类/材料写什么？**

```bash
npm run image-gen -- 清单
```

---

## 生成完怎么用到网站上？

1. 打开文件夹 `public/images/products/generated/punches/`，看 JPG 是否满意。  
2. 打开对应产品的 `src/content/products/某slug.md`。  
3. 改一行，例如：  
   `heroImage: /images/products/generated/punches/stepped-punches-skd61.jpg`  
4. `npm run dev` 刷新产品页查看。

**程序不会自动改 md**，避免你不满意也被覆盖。

---

## 和顶栏「产品中心」菜单的关系

| 菜单里看到的（中文） | 出图时 --种类 可写 | 对应 slug |
|---------------------|-------------------|-----------|
| 硬质合金冲针 / 钨钢冲针 | 硬质合金冲针 | carbide-punches |
| 高速钢冲针 | 高速钢冲针 | hss-punches |
| 台阶冲针 | 台阶冲针 | stepped-punches |
| 冲压模冲头 | 冲压模冲头 | stamping-die-punches |
| （A 冲等） | A 冲（标准圆冲） | a-type-punches |
| 异型 | 异型冲针 | special-shaped-punches |

**顶针、导柱、弹簧等其它栏** 目前还没做进出图工具，只有 **冲针** 这一栏。以后要加会再扩展 `catalog.ts`。

---

## 常用命令速查

| 你输入的 | 作用 |
|---------|------|
| `npm run image-gen -- 帮助` | 说明 |
| `npm run image-gen -- 清单` | 种类 + 材料列表 |
| `npm run image-gen -- 初始化` | 第一次建背景样板 |
| `npm run image-gen -- 生成 --种类 … --材料 …` | 出一张 |
| `npm run image-gen -- 批量 --任务单 …json` | 按 JSON 批量出 |
| 加 `--试跑` | 不调用 API，只看会生成啥路径 |

记录与错误：`data/image-gen/manifest.json`

---

## 出错怎么办？

| 提示 | 处理 |
|------|------|
| Missing TERRAKINC_API_TOKEN | 检查 `.env` 是否在项目根、token 是否正确 |
| 请先运行：初始化 | 先执行第 2 步 |
| 499 / 超时 | 网络或图太大，稍后重试 |
| 不认识种类 | 运行 `清单`，用里面的中文名 |
