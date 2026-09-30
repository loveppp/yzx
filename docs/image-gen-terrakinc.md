# 产品图片生成入口 · V4

当前阶段仅重编提示词，不调用生图接口。逐图清单见 [全站计划](./product-image-production-plan.md)。本地候选图放在 gitignore 的 `output/`，见 `output/README.md`。

## 规则

每张至少两种同类、不同结构的款式；不以尺寸、颜色、材料或角度凑数量。成套产品至少两种完整套装。来源不足的任务保留明确缺口并禁止调用接口。提示词完成不等于图片结构已正确，更不等于有库存或符合工程公差。

`data/catalog/image-briefs.json` 和 `detail-image-briefs.json` 是权威来源。完整英文结构提示词由逐件清单生成，不手工修改派生的 `image-plan.json`。构建、检查、清单和 dry-run 都不联网、不读取密钥。

## 离线查看

```bash
source scripts/use-node20.sh
npm run image-gen -- 清单
npm run image-gen -- 生成 --id a-type-punches --dry-run
node --test scripts/image-gen/image-plan.test.mjs
```

重新整理计划运行 `node scripts/prepare-catalog.mjs`。旧的 `--种类`、`--材料`、批量任务单和风格初始化入口已停用，不能绕过新版款式清单。

## 后续逐张生成

仅在进入生成阶段后执行，每次1张，每批2–3张。首批目标为A冲与T冲；T冲在第二种真实结构核实之前保持拦截，不用同款尺寸变化代替。

```bash
npm run image-gen -- 生成 --id <清单ID> --style-reference <已确认风格图路径> --publish
```

使用项目原有 `.env` 中的 `TERRAKINC_API_TOKEN`、`TERRAKINC_BASE_URL`、`TERRAKINC_IMAGE_MODEL`，不输出或覆盖密钥。服务地址只允许 `https://api.terrakinc.com`。不自动切换模型或自动重试。

`sample.ts` 每次重新读取原始清单，先验证款式证据、结构差异、数量、三语说明，再读取凭据。候选保存完整款式清单和提示词指纹。发布前再次对比当前版本，拒绝旧提示词产物。

## 图片接入与复用

原图直接复制，不校色、不裁切、不重编码。发布同时更新图片及三语说明；旧图和旧记录保留。完全相同的款式、材料、类别边界和构图可通过 `reuseOf` 复用，发布来源后同步目标页面。钢制A冲和硬质合金A冲不自动共用。

失败不覆盖旧图；已生成但发布失败的候选保留，不重新调用生图。可用以下命令重新发布当前版本的候选：

```bash
node scripts/image-gen/publish-reviewed.mjs <候选目录> --direct
```

当前清单准确区分“待核实、提示词完成、已生成、已接入”。已有旧图片不算新版完成。来源证据的文字核对不是自动识图检测，也不能保证生成模型每次正确。
