# YZX Precision deployment notes

## Local

```bash
npm install
npm run dev
```

## Cloudflare Pages

Build command: `npm run build`  
Output directory: `dist`

Add these encrypted environment variables in the Cloudflare Pages project:

- `RESEND_API_KEY`: Resend API key
- `QUOTE_TO_EMAIL`: the real receiving mailbox, for example `sales@your-domain.com`

The form endpoint is `functions/api/quote.ts`. It sends enquiry text and an optional drawing attachment through Resend. Attachments are restricted to approved drawing/image formats and 8 MB.

Before production, replace `noreply@yzxprecision.com` in the function with a domain verified in Resend. Do not commit API keys. Add Cloudflare Turnstile after the domain is connected if spam becomes a problem.
