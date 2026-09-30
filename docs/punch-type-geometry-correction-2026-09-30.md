# A/T 冲针结构更正 · 2026-09-30

本记录取代此前“小圆头 A 型 / 加宽圆盘头 T 型”的解释与提示词。此前生成图的问题来自结构描述错误，不是通过换背景或提高质感可以解决。

## 参考依据和本项目命名

重新查看用户指定的 https://htxprecision.com/carbide-punch/ 中 A/T 两组图片：A 组可见粗支撑杆向较细工作端的台阶，T 组为正常安装头与直身杆。页面英文标题都含 Straight Punch，因此不能只根据标题推断几何，也不能擅自用头径大小定义 A/T。

按用户确认和本项目参考目录口径，采用：

- A 型台阶冲针：正常安装头、粗支撑杆、缩径工作端，明确台阶与过渡圆角。
- T 型单肩冲针：正常比例安装头与等径直杆构成一个肩位，杆部到工作端不再缩径。

这是本项目的目录定义；具体供应标准中的头部与肩位尺寸仍以对应图纸为准。参考页面截图保存在 `output/catalog-reference-review/carbide-types-reference.png`，仅用于内部核对，没有复制到网站产品图中。

## 提示词纠正

A 型旧提示词中的 long constant-diameter shank 错把工作段描述成等径直杆；新提示词明确 thick support shank → clear shoulder → reduced working tip。

T 型旧提示词中的 broad thin flat disk / twice the shaft width 夸大了安装头；新提示词明确 compact retaining head、single shoulder、constant-diameter shank、no reduced tip。

## 已接入的文件

- 新 A 图：`public/images/products/catalog/a-type-punches-2026-09-30T05-59-42-953Z.jpg`。同时用于 A 型系列主图和硬质合金 type-a 卡片。
- A 图完整提示词：`output/product-images/candidates/a-type-punches/2026-09-30T05-59-42-953Z/prompt.txt`。
- 生成记录：同目录 `generation.json`。本次仅新增生成一次，通过 Terrakinc 的 gemini-3.1-flash-image，返回后原图直接使用，没有二次图像加工。
- T 图复用：`public/images/products/catalog/a-type-punches-2026-09-29T15-47-10-821Z.webp`。保留历史文件名，当前仅按实际直身单肩几何标为 T 型，未再生成。
- 原夸张大圆盘 T 图保留历史文件，不再用于网站的 T 型卡片。

同步更正了中英越三语的 A/T 名称、说明、A 型系列摘要、图片说明、结构选型指引、主图/详情提示词和生成计划。其他历史执行记录保留，并注明已被本次结构更正取代。
