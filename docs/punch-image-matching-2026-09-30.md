# 硬质合金图文对应与产品动效 · 2026-09-30

> 后续结构更正：本记录中的 A/T 旧命名与配图已被修正。当前以 [A/T 结构更正记录](./punch-type-geometry-correction-2026-09-30.md) 为准。

## 已接入网站

八个选型卡片均有独立对应图片；A 型使用已有单件图，T 型使用加宽安装头的新单件图，不再将同一张 A/T 对比图重复显示。

- A 型直身圆冲 · 小圆头：`public/images/products/catalog/a-type-punches-2026-09-29T15-47-10-821Z.webp`；对应 `type-a`。
- 方形与矩形刃口：`public/images/products/details/carbide-punches--profiles-2026-09-30T05-22-25-005Z.jpg`；对应 `profile`。
- 硬质合金台阶结构：`public/images/products/details/carbide-punches--stepped-2026-09-30T05-23-42-282Z.jpg`；对应 `stepped`。
- 切断冲头工作端：`public/images/products/details/carbide-punches--cutoff-2026-09-30T05-25-09-322Z.jpg`；对应 `cutting`。
- T 型圆冲 · 加宽安装头：`public/images/products/details/carbide-punches--type-t-2026-09-30T05-45-07-835Z.jpg`；对应 `type-t`。
- 六角冲头 · 六边形工作端：`public/images/products/details/carbide-punches--hexagonal-2026-09-30T05-46-20-619Z.jpg`；对应 `hexagonal`。
- 椭圆与长圆 · 两种工作轮廓：`public/images/products/details/carbide-punches--oval-obround-2026-09-30T05-47-30-293Z.jpg`；对应 `oval`。
- 未涂层与涂层 · 外观对比：`public/images/products/details/carbide-punches--coated-2026-09-30T05-49-12-262Z.jpg`；对应 `coated`。

## 本次新增生成与提示词

同一 Terrakinc 服务商。原默认模型 gemini-3.0-pro-image 的上游额度限流（HTTP 429），一次按服务端建议间隔的恢复尝试仍失败。随后读取模型列表，临时使用同接口提供的 gemini-3.1-flash-image，未修改 .env 的默认模型。

共四张新图成功返回并直接使用原图，没有校色、裁切、重新编码或反复生成；另有三次原模型请求失败，没有返回图片。四张按两组、每组两张串行生成。

- carbide-punches--type-t：提示词 `output/product-images/candidates/carbide-punches--type-t/2026-09-30T05-45-07-835Z/prompt.txt`；来源与发布记录 `output/product-images/candidates/carbide-punches--type-t/2026-09-30T05-45-07-835Z/generation.json`。
- carbide-punches--hexagonal：提示词 `output/product-images/candidates/carbide-punches--hexagonal/2026-09-30T05-46-20-619Z/prompt.txt`；来源与发布记录 `output/product-images/candidates/carbide-punches--hexagonal/2026-09-30T05-46-20-619Z/generation.json`。
- carbide-punches--oval-obround：提示词 `output/product-images/candidates/carbide-punches--oval-obround/2026-09-30T05-47-30-293Z/prompt.txt`；来源与发布记录 `output/product-images/candidates/carbide-punches--oval-obround/2026-09-30T05-47-30-293Z/generation.json`。
- carbide-punches--coated：提示词 `output/product-images/candidates/carbide-punches--coated/2026-09-30T05-49-12-262Z/prompt.txt`；来源与发布记录 `output/product-images/candidates/carbide-punches--coated/2026-09-30T05-49-12-262Z/generation.json`。

## 首页、专区与交互

- 对七个冲头系列的现有主图逐一核对可见结构，保留与系列对应的图片，增加三语“图中结构”说明。异形成型系列明确区分图片中的非圆工作端与按图定制的成型轮廓。
- 首页首屏同步显示结构说明；定制区仍复用方形/矩形、台阶、切断和异形成型图片，名称及链接保持对应。
- 首页、专区、分类卡片与详情图片加入轻微放大（1.035 倍）、卡片上移（3px）和柔和阴影；键盘焦点也有反馈。触屏不强制悬停，减少动态效果设置下关闭位移。
- 涂层卡片采用同结构未涂层/涂层外观对比，文案明确按基体、被冲材料、刃口和重磨要求选方案。

## 验证

- 构建通过：396 页；目录检查包含八项图片覆盖及图片不重复的回归检查。
- 电脑端图片与配置对应；手机端无横向溢出；页面未出现 AI 效果图标签。
- 截图：`output/catalog-revision-v3/carbide-distinct-heads-desktop.png`、`output/catalog-revision-v3/carbide-filled-configurations-desktop.png`、`output/catalog-revision-v3/carbide-coating-mobile.png`。
