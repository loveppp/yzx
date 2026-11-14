/**
 * Cloudflare Pages 全局中间件。
 *
 * 作用：把 www.yzxprecision.com 永久（301）重定向到裸域 yzxprecision.com。
 *
 * 原因：www 与裸域此前同时返回 200，同一份内容可通过两个主机名访问，
 * GSC 里已经出现 www.* 的 URL 被收录（重复内容信号）。虽然页面上的
 * canonical 已指向裸域，但 301 才是更干净、更明确的信号。
 *
 * 注意：
 * - 预览域名（*.yzx.pages.dev）等其它主机名一律放行，不做跳转。
 * - 不要在这里加业务逻辑，中间件会拦截每一个请求（含静态资源）。
 */

const CANONICAL_HOST = 'yzxprecision.com';
const CANONICAL_ORIGIN = `https://${CANONICAL_HOST}`;

interface MiddlewareContext {
  request: Request;
  next: () => Promise<Response>;
}

export const onRequest = async (context: MiddlewareContext): Promise<Response> => {
  const url = new URL(context.request.url);

  if (url.hostname === `www.${CANONICAL_HOST}`) {
    return Response.redirect(`${CANONICAL_ORIGIN}${url.pathname}${url.search}`, 301);
  }

  return context.next();
};
