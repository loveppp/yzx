# 源智信精密 (YZX Precision) 独立站全周期项目档案与运营记忆备忘录

> 本文件是本项目的**核心长久记忆库**。无论是未来的你查阅，还是后续更换任何 AI 助手进行对话，只要让它阅读本文件，即可 100% 掌握本站的所有技术架构、账号关联、运营规范与历史决策。

---

## 一、企业基本信息与业务定位

* **公司全称**：深圳市源智信模具配件有限公司（YZX Precision Tooling Co., Ltd.）
* **核心业务**：高精度冲压模具冲针（HSS/钨钢/异型冲头）、注塑模具顶针（SKD61/SKH51/扁顶针）、精密导柱导套、自润滑耐磨块等模具配件来图定制出海。
* **目标客群**：欧美、东南亚（尤其是越南）、墨西哥等海外五金冲压厂、注塑模具制造厂（Tool & Die Maker）及外贸采购商。
* **官方域名**：
  * 主域：`https://yzxprecision.com`
  * 子域：`https://www.yzxprecision.com`
* **官方业务邮箱**：`inquiry@yzxprecision.com`

---

## 二、全站技术架构与部署基础设施

```
海外客户访问 yzxprecision.com
   │
   ▼
Cloudflare Pages（全球免费边缘分发 / SSL自动续期）
   │
   ├─ 静态资源（Astro 5 SSG / 127个中英越落地页）
   │
   └─ 询盘后端 Functions: functions/api/quote.ts
         │
         ▼ 携带 CAD 附件 / 图纸（最大8MB）
      Resend 自动化邮件服务（发件人: noreply@yzxprecision.com）
         │ (DKIM & SPF 绿标认证)
         ▼
      腾讯企业邮箱 (inquiry@yzxprecision.com)
         │ (管理员 + 成员 inquiry 账号已登录激活)
         ▼
      业务员点击【回复】，自动通过 Reply-To 填入客户真实邮箱
```

### 1. 部署平台：Cloudflare Pages
* **项目名称**：`yzx`
* **绑定的 GitHub 仓库**：`git@github.com:loveppp/yzx.git`（分支 `main`）
* **自动化触发**：只要 `git push origin main`，Cloudflare 会在 1~2 分钟内自动打包上线。
* **环境变量（Settings -> Environment variables）**：
  * `RESEND_API_KEY`：Resend 发信秘钥
  * `QUOTE_TO_EMAIL`：`inquiry@yzxprecision.com`

### 2. 企业邮箱配置（腾讯企业邮 / 企业微信）
* **绑定的主域名**：`yzxprecision.com`（DNS MX 解析：`mxbiz1.qq.com`, `mxbiz2.qq.com`）
* **已激活成员**：`张海涛 <inquiry@yzxprecision.com>`
* **日常查信登录地址**：[https://exmail.qq.com/login](https://exmail.qq.com/login) 或企业微信 App。

### 3. 邮件发送引擎：Resend
* **发信域名**：`yzxprecision.com`（DKIM / SPF 全绿已验证）
* **发信发件人**：`Website enquiry <noreply@yzxprecision.com>`
* **收信人**：`inquiry@yzxprecision.com`
* **关键机制**：配置了 `reply_to: customer_email`。收件人收到信后直接点“回复”，收件人一栏自动填充客户填写的真实邮箱。
* **注意事项**：若被退信，地址会被放进 [Resend Suppressions](https://resend.com/suppressions) 列表，移除（Remove）即可解封。

---

## 三、SEO 与 Google Search Console 状态

* **已验证资源**：`yzxprecision.com`（网域级资源，通过 Cloudflare DNS TXT 记录全自动授权验证）。
* **已提交站点地图**：
  * `https://yzxprecision.com/sitemap-0.xml`（**状态：成功，已收录 127 个页面**）
  * `https://yzxprecision.com/sitemap-index.xml`（总索引）
* **127 个页面构成**：
  * 根路径跳转页（1 个）
  * 英文页面（42 个）
  * 中文页面（42 个）
  * 越南语页面（42 个）
  * 涵盖：首页、产品大类、产品细类落地页、工厂介绍、非标定制、博客深度指南等。
* **核心 SEO 标签规范**：全站配备 `canonical`、`hreflang`（en/zh/vi 多语言定向）、OpenGraph 以及 Schema.org `Organization`、`BlogPosting` 和 `Product`（含 `AggregateOffer` 与 `AggregateRating`）结构化数据，确保 GSC 0 错误并激活谷歌商品富媒体（Rich Snippets）展示。

---

## 四、技术文章（Blog）与内容体系

* **文章存放位置**：`src/content/blog/*.md`
* **线上展现页面**：
  * 英文列表：`https://yzxprecision.com/en/blog/`
  * 中文列表：`https://yzxprecision.com/zh/blog/`
* **当前文章与配图规范（必须使用实物图，禁止农田无人机等虚假图片）**：
  1. `custom-punch-drawing-tips.md`（异型冲压冲针定制要点）：配图为高精度异型冲裁冲头与模具实物，包含 R 角防断裂、SKD11/SKH51/钨钢选型表。
  2. `ejector-pin-material-guide.md`（注塑模顶针材质深度解析）：配图为精密直顶针与台阶托针实拍，包含 SKD61 氮化 vs SKH51 高速钢性能对照表与托针防弯曲方案。
  3. `guide-post-bushing-fit.md`（导柱导套配合公差与间隙标准）：配图为精密导柱导套实拍，包含 Ø16~Ø50mm ISO H7/g6 理论配合间隙表与滚珠预压套说明。
* **转化机制**：每篇文章底部统一嵌入金色 **【非标图纸定制 · 极速核算】** 行动召唤卡片（CTA），支持一键直达传图纸询价。

---

## 五、产品图与工业级 AI 生成管线

* **生成脚本目录**：`scripts/image-gen/`
* **生成模型**：Google Gemini 3.0 Pro Image（通过 Terrakinc API）
* **摄影棚提示词锁（Prompt Lock）**：
  * 浅灰色无缝工业影棚渐变底（`#e8eaed` 到 `#f5f6f8`）
  * 左上方柔光漫射布光，金属微距接触阴影
  * 3/4 视角特写，强化车削磨削反光与表面渗氮质感
  * 严禁杂物、手指、文字、水印
* **工厂介绍实拍视频**：已锁定默认 YouTube 链接 `https://www.youtube.com/watch?v=UEfZsKnCsBg`。

---

## 六、日常运营与维护 SOP（操作标准）

### 1. 收到询盘如何回复？
1. 手机微信/企业邮箱收到来自 `Website enquiry <noreply@yzxprecision.com>` 的邮件。
2. 查看信件正文（客户姓名、公司、电话、WhatsApp、留言）与 CAD 图纸附件。
3. **直接点击邮件界面的【回复】按钮**，写上报价方案（材质、单价、交期、FOB 价格），点击发送即可。

### 2. 如何发布一篇新的技术博客？
向 AI 助手发出指令：
> *“请帮我在源智信独立站发布一篇新文章，主题是《......》，包含中英文对照、技术参数表与图纸询价引导，配图选自本地产品库。”*
AI 将自动在 `src/content/blog/` 新建 `.md` 文件并 `git push origin main`，1 分钟全自动上线。

### 3. 如何修改产品参数或添加新分类？
* 产品大类与系列基础信息：编辑 `src/data/catalog.json`。
* 选型要点与参数文案：编辑 `src/data/catalog-details.json`。
* 细节图配置：编辑 `src/data/catalog-detail-media.json`。
* 校验命令：运行 `npm run catalog:check` 确保 0 报错。
