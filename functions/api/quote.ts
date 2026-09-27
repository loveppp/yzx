interface Env {
  RESEND_API_KEY: string;
  QUOTE_TO_EMAIL: string;
  TURNSTILE_SECRET_KEY?: string;
}

const allowedExtensions = ['pdf', 'dwg', 'dxf', 'step', 'stp', 'iges', 'igs', 'jpg', 'jpeg', 'png'];

function text(value: FormDataEntryValue | null) {
  return typeof value === 'string' ? value.trim() : '';
}

function bytesToBase64(bytes: ArrayBuffer) {
  let binary = '';
  const data = new Uint8Array(bytes);
  for (let i = 0; i < data.length; i += 0x8000) binary += String.fromCharCode(...data.subarray(i, i + 0x8000));
  return btoa(binary);
}

export const onRequestPost = async ({ request, env }: { request: Request; env: Env }) => {
  const form = await request.formData();
  if (text(form.get('website'))) return new Response('ok');

  const email = text(form.get('email'));
  const name = text(form.get('name'));
  if (!name || !email) return new Response('Name and email are required', { status: 400 });
  if (!env.RESEND_API_KEY || !env.QUOTE_TO_EMAIL) return new Response('Email service is not configured', { status: 503 });

  const file = form.get('file');
  const attachments = [];
  if (file instanceof File && file.size > 0) {
    const filename = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
    const extension = filename.split('.').pop()?.toLowerCase();
    if (!extension || !allowedExtensions.includes(extension) || file.size > 8 * 1024 * 1024) {
      return new Response('Unsupported or oversized file', { status: 400 });
    }
    attachments.push({ filename, content: bytesToBase64(await file.arrayBuffer()) });
  }

  const fields = ['name', 'company', 'email', 'phone', 'whatsapp', 'category', 'message']
    .map((key) => `${key}: ${text(form.get(key))}`)
    .join('\n');
  const result = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: 'Website enquiry <noreply@yzxprecision.com>',
      to: [env.QUOTE_TO_EMAIL],
      reply_to: email,
      subject: `New mold component enquiry from ${name}`,
      text: fields,
      attachments,
    }),
  });
  if (!result.ok) return new Response('Email delivery failed', { status: 502 });
  return new Response('ok');
};
