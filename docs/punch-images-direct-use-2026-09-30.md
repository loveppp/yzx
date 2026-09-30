> 历史记录：本文件中的款式与生成结论已由 [V4逐图清单](./product-image-production-plan.md) 取代，不作为本轮生成或验收依据。

# 冲头图片直接使用：2026-09-30 更新

> 后续结构更正：本记录中的 A/T 旧命名与配图已被修正。当前以 [A/T 结构更正记录](./punch-type-geometry-correction-2026-09-30.md) 为准。

用户最新要求优先于此前审核流程：图片生成后直接使用，不反复检查、校色或重新处理；仍按每批 2–3 张推进，避免一次生成所有产品。

本次调用 Terrakinc / gemini-3.0-pro-image 三次，无自动重试，全部原图直接复制到网站。每张使用已经确认的同一风格参考，以及该种类的独立产品提示词。

- 方形与矩形：`public/images/products/details/carbide-punches--profiles-2026-09-30T05-22-25-005Z.jpg`
  - 提示词：`output/product-images/candidates/carbide-punches--profiles/2026-09-30T05-22-25-005Z/prompt.txt`
- 台阶：`public/images/products/details/carbide-punches--stepped-2026-09-30T05-23-42-282Z.jpg`
  - 提示词：`output/product-images/candidates/carbide-punches--stepped/2026-09-30T05-23-42-282Z/prompt.txt`
- 切断：`public/images/products/details/carbide-punches--cutoff-2026-09-30T05-25-09-322Z.jpg`
  - 提示词：`output/product-images/candidates/carbide-punches--cutoff/2026-09-30T05-25-09-322Z/prompt.txt`

详情图片已从独立图库移到对应结构卡片。现有四张详情图覆盖 A 型、T 型、台阶、方形/矩形、切断五项配置；A/T 两项共用安装头对比图。六角、椭圆的详情配图和组合主图新版仍未完成；涂层是处理选项，使用文字说明。不同材料、几何与安装形式可以组合，不应将八个选型项宣称为八种互斥产品。

首页首屏继续使用四个冲头系列入口。定制区域移除原先无名称的旧图拼排（其中混有浮升销），改为方形/矩形、台阶、切断、异形成型四张有名称、有详情链接的卡片。前三张直接复用本次原图，三语同步，手机完整展示轮廓。

执行命令使用 `sample.ts --id <job-id> --style-reference <参考图> --publish`。发布模式记录为 `direct-original-user-requested`，不伪造已审图状态；原图、历史版本和提示词保留在内部。

构建成功（396 页）。完成页面加载和移动布局验证，没有额外图像处理；页面不出现 AI 效果图标签。截图位于 `output/catalog-revision-v3/home-direct-images-desktop.png` 与 `output/catalog-revision-v3/carbide-configuration-images-mobile.png`。
