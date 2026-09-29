/**
 * 英文描述只给 Terrakinc / Gemini 看图模型用，保证出图质量。
 * 你日常只用中文命令 + catalog 里的种类/材料，不必打开本文件。
 */

export type PunchVariantInput = {
  categoryLabel: string;
  material: string;
  shapeNotes?: string;
};

const BACKGROUND_LOCK = `
Professional B2B mold component catalog photography.
Fixed scene: seamless light gray gradient background (#e8eaed to #f5f6f8),
soft diffused studio lighting from upper-left, subtle contact shadow under the part,
no props, no text, no watermark, no logo, no hands, no ruler.
Camera: 3/4 view, product centered, sharp focus on metal surfaces, high detail.
`.trim();

export function buildStyleInitPrompt(): string {
  return `${BACKGROUND_LOCK}
Subject: a single generic round punch pin sample, neutral steel finish, medium length,
placed horizontally in frame. Establish the reference scene for future variants.`;
}

export function buildPunchVariantPrompt(input: PunchVariantInput): string {
  const shape = input.shapeNotes ? ` Shape details: ${input.shapeNotes}.` : '';
  return `${BACKGROUND_LOCK}
Keep identical background, lighting direction, shadow softness, and camera angle as the reference image.
Replace only the product with: ${input.categoryLabel}, material ${input.material}.${shape}
Show one isolated component, catalog-ready, photorealistic.`;
}
