# YZX Precision deployment notes

## Local

```bash
npm install
npm run dev
```

浏览器默认：http://localhost:4321（局域网预览可用本机 IP，例如 `http://192.168.x.x:4321`，与腾讯云无关）。

---

## 腾讯云 CVM（当前静态站）

此前部署使用的 **轻量 / CVM** 信息如下（SSH 密钥：`~/.ssh/id_rsa`，用户 `root`）。

| 项目 | 值 |
|------|-----|
| 公网 IP | **159.75.252.43** |
| SSH | `ssh root@159.75.252.43` |
| 主机名（曾测） | `VM-20-7-debian` |
| Web 根目录 | **`/var/www/yzx`** |
| HTTP | **80**（Nginx，`/etc/nginx/sites-available/yzx`） |

### 访问地址

| 页面 | URL |
|------|-----|
| 根路径 | http://159.75.252.43/ |
| 英文首页 | http://159.75.252.43/en/ |
| 中文首页 | http://159.75.252.43/zh/ |
| 越南语 | http://159.75.252.43/vi/ |

若域名 **yzxprecision.com** 已做 A 记录指向 `159.75.252.43`，也可用 https://yzxprecision.com/（需 DNS + 可选 Certbot 证书；以你控制台实际解析为准）。

### 更新站点（本机执行）

在项目根目录：

```bash
cd /Users/zhanghaitao/projects/foreignTrade

# 推荐：与 package.json 一致（需 Node 20）
bash -lc 'source scripts/use-node20.sh && npm run build'

# 若 prepare-catalog 报错、仅需先上线静态页，可临时：
# bash -lc 'source scripts/use-node20.sh && node scripts/prepare-catalog.mjs && node scripts/check-catalog.mjs && npx astro build'
```

上传 **整个 `dist/`** 到服务器（二选一）：

**方式 A — tar + SSH（此前常用）**

```bash
tar czf - dist | ssh -o BatchMode=yes root@159.75.252.43 \
  "rm -rf /var/www/yzx/* && tar xzf - && mv dist/* /var/www/yzx/ 2>/dev/null; rm -rf dist; chown -R www-data:www-data /var/www/yzx"
```

**方式 B — rsync**

```bash
rsync -avz --delete -e "ssh -o BatchMode=yes" \
  dist/ root@159.75.252.43:/var/www/yzx/
ssh -o BatchMode=yes root@159.75.252.43 "chown -R www-data:www-data /var/www/yzx"
```

验证：

```bash
curl -sI http://159.75.252.43/zh/ | head -5
```

### 腾讯云上的限制（与 Cloudflare 方案不同）

1. **询价表单** `/api/quote` 依赖 Cloudflare Functions + Resend；纯 Nginx 静态部署 **不会处理 POST**，表单提交会失败。
2. **`public/_redirects`** 为 Cloudflare 规则；Nginx 需单独配 `return 301` 才能承接旧 URL。
3. **HTTPS**：IP 访问为 HTTP；正式域名建议在腾讯云 DNS 解析后配置证书（如 Certbot）。

---

## Cloudflare Pages（备选 / 询价 API）

Build command: `npm run build`  
Output directory: `dist`

Add these encrypted environment variables in the Cloudflare Pages project:

- `RESEND_API_KEY`: Resend API key
- `QUOTE_TO_EMAIL`: the real receiving mailbox, for example `sales@your-domain.com`

The form endpoint is `functions/api/quote.ts`. It sends enquiry text and an optional drawing attachment through Resend. Attachments are restricted to approved drawing/image formats and 8 MB.

Before production, replace `noreply@yzxprecision.com` in the function with a domain verified in Resend. Do not commit API keys. Add Cloudflare Turnstile after the domain is connected if spam becomes a problem.
