/**
 * Terrakinc image API client
 * @see https://api.terrakinc.com/docs/image-api-reference.html
 */

export type TerrakincConfig = {
  baseUrl: string;
  token: string;
  model: string;
};

export type GenerateImageOptions = {
  prompt: string;
  referenceInline?: { mimeType: string; data: string };
  referenceFileUri?: string;
  referenceMimeType?: string;
  aspectRatio?: string;
  imageSize?: '1K' | '2K' | '4K';
  outputMode?: 'url' | 'compact_url';
  responseFile?: string;
};

export type PresignResult = {
  upload_url: string;
  public_url: string;
};

export function loadConfig(): TerrakincConfig {
  const token = process.env.TERRAKINC_API_TOKEN?.trim();
  if (!token) {
    throw new Error(
      'Missing TERRAKINC_API_TOKEN. Copy .env.example to .env and set your sk-… token.',
    );
  }
  const baseUrl = (process.env.TERRAKINC_BASE_URL ?? 'https://api.terrakinc.com').replace(/\/$/, '');
  const model = process.env.TERRAKINC_IMAGE_MODEL ?? 'gemini-3.0-pro-image';
  return { baseUrl, token, model };
}

async function sleep(ms: number) {
  await new Promise((r) => setTimeout(r, ms));
}

async function fetchWithRetry(url: string, init: RequestInit, retries = 3): Promise<Response> {
  let lastError: unknown;
  for (let i = 0; i <= retries; i++) {
    try {
      const res = await fetch(url, init);
      if (res.status === 503 && i < retries) {
        await sleep(1000 * 2 ** i);
        continue;
      }
      return res;
    } catch (e) {
      lastError = e;
      if (i < retries) await sleep(1000 * 2 ** i);
    }
  }
  throw lastError;
}

export async function presignUpload(
  cfg: TerrakincConfig,
  contentType: string,
  size: number,
): Promise<PresignResult> {
  const res = await fetchWithRetry(`${cfg.baseUrl}/v1/uploads/presign`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${cfg.token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ content_type: contentType, size }),
  });
  if (!res.ok) {
    throw new Error(`presign failed ${res.status}: ${await res.text()}`);
  }
  return (await res.json()) as PresignResult;
}

export async function uploadFileToPresignedUrl(
  uploadUrl: string,
  body: Buffer,
  contentType: string,
): Promise<void> {
  const res = await fetch(uploadUrl, {
    method: 'PUT',
    headers: { 'Content-Type': contentType },
    body: new Uint8Array(body),
  });
  if (!res.ok) {
    throw new Error(`upload PUT failed ${res.status}: ${await res.text()}`);
  }
}

export async function uploadLocalImage(cfg: TerrakincConfig, filePath: string): Promise<string> {
  const fs = await import('node:fs/promises');
  const path = await import('node:path');
  const buf = await fs.readFile(filePath);
  const ext = path.extname(filePath).toLowerCase();
  const contentType =
    ext === '.png' ? 'image/png' : ext === '.webp' ? 'image/webp' : 'image/jpeg';
  const { upload_url, public_url } = await presignUpload(cfg, contentType, buf.length);
  await uploadFileToPresignedUrl(upload_url, buf, contentType);
  return public_url;
}

function extractImageUrlFromResponse(json: unknown): string | undefined {
  if (!json || typeof json !== 'object') return undefined;
  const candidates = (json as { candidates?: Array<{ content?: { parts?: unknown[] } }> })
    .candidates;
  const parts = candidates?.[0]?.content?.parts;
  if (!Array.isArray(parts)) return undefined;

  for (const part of parts) {
    if (!part || typeof part !== 'object') continue;
    const p = part as Record<string, unknown>;
    if (typeof p.url === 'string') return p.url;
    if (typeof p.fileUri === 'string') return p.fileUri;
    const fileData = p.fileData as { fileUri?: string } | undefined;
    if (fileData?.fileUri) return fileData.fileUri;
  }
  return undefined;
}

function extractInlineBase64(json: unknown): { mimeType: string; data: string } | undefined {
  const candidates = (json as { candidates?: Array<{ content?: { parts?: unknown[] } }> })
    .candidates;
  const parts = candidates?.[0]?.content?.parts;
  if (!Array.isArray(parts)) return undefined;
  for (const part of parts) {
    const inline = (part as { inlineData?: { mimeType?: string; data?: string } })?.inlineData;
    if (inline?.data) {
      return { mimeType: inline.mimeType ?? 'image/png', data: inline.data };
    }
  }
  return undefined;
}

export async function generateImage(
  cfg: TerrakincConfig,
  options: GenerateImageOptions,
): Promise<{ url?: string; inline?: { mimeType: string; data: string }; usage?: unknown }> {
  const parts: Array<Record<string, unknown>> = [];
  if (options.referenceInline) parts.push({ inlineData: options.referenceInline });
  if (options.referenceFileUri) {
    parts.push({
      fileData: {
        mimeType: options.referenceMimeType ?? 'image/jpeg',
        fileUri: options.referenceFileUri,
      },
    });
  }
  parts.push({ text: options.prompt });

  const body: Record<string, unknown> = {
    contents: [{ role: 'user', parts }],
    generationConfig: {
      imageConfig: {
        aspectRatio: options.aspectRatio ?? '1:1',
        imageSize: options.imageSize ?? '2K',
      },
    },
  };
  if (options.outputMode) {
    body.image_output_mode = options.outputMode;
  }

  const endpoint = `${cfg.baseUrl}/v1beta/models/${cfg.model}:generateContent`;
  // A generation timeout may already have incurred a charge. Never retry it automatically.
  const res = await fetch(
    endpoint,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${cfg.token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(360_000),
    },
  );

  const text = await res.text();
  if (!res.ok) {
    throw new Error(`generateContent failed HTTP ${res.status}; no automatic retry. Check the provider request log before retrying.`);
  }

  let json: unknown;
  try {
    json = JSON.parse(text);
  } catch {
    throw new Error('Invalid JSON response; no automatic retry. Check the provider request log.');
  }

  if (options.responseFile) {
    const fs = await import('node:fs/promises');
    await fs.writeFile(options.responseFile, text, {mode: 0o600, flag: 'wx'});
  }

  const imageUrl = extractImageUrlFromResponse(json);
  const usage = (json as { usageMetadata?: unknown }).usageMetadata;
  if (imageUrl) return { url: imageUrl, usage };

  const inline = extractInlineBase64(json);
  if (inline) return { inline, usage };

  // Some gateway URL conversions use OpenAI data[] or text-image parts.
  const converted = json as {data?: Array<{url?: string; b64_json?: string}>; candidates?: Array<{content?: {parts?: Array<{text?: string; image_url?: {url?: string}; inline_data?: {mime_type?: string; data?: string}}>}}>};
  const item = converted.data?.[0];
  if (item?.url) return {url: item.url, usage};
  if (item?.b64_json) return {inline: {mimeType: 'image/png', data: item.b64_json}, usage};
  for (const part of converted.candidates?.[0]?.content?.parts ?? []) {
    if (part.inline_data?.data) return {inline: {mimeType: part.inline_data.mime_type ?? 'image/png', data: part.inline_data.data}, usage};
    if (part.image_url?.url) return {url: part.image_url.url, usage};
    const linked = part.text?.match(/!\[[^\]]*\]\((https:\/\/[^\s)]+)\)/)?.[1];
    if (linked) return {url: linked, usage};
  }

  throw new Error('No image in response (check prompt or model finishReason).');
}

export async function downloadToFile(sourceUrl: string, destPath: string): Promise<void> {
  const fs = await import('node:fs/promises');
  const path = await import('node:path');
  await fs.mkdir(path.dirname(destPath), { recursive: true });
  const res = await fetch(sourceUrl);
  if (!res.ok) throw new Error(`download failed ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await fs.writeFile(destPath, buf);
}

export async function writeInlineToFile(
  inline: { mimeType: string; data: string },
  destPath: string,
): Promise<void> {
  const fs = await import('node:fs/promises');
  const path = await import('node:path');
  await fs.mkdir(path.dirname(destPath), { recursive: true });
  await fs.writeFile(destPath, Buffer.from(inline.data, 'base64'));
}
