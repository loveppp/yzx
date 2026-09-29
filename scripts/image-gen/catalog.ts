/**
 * 冲针出图：种类 / 材料（中文给你看，英文 prompt 在 prompts.ts 里自动生成，不用你写）
 */

export type PunchCategory = {
  slug: string;
  nameZh: string;
  /** 仅 API 用，勿手改 */
  promptEn: string;
};

export const PUNCH_CATEGORIES: PunchCategory[] = [
  { slug: 'carbide-punches', nameZh: '硬质合金冲针', promptEn: 'carbide punch pin (tungsten carbide head)' },
  { slug: 'hss-punches', nameZh: '高速钢冲针', promptEn: 'HSS high-speed steel punch pin' },
  { slug: 'stepped-punches', nameZh: '台阶冲针', promptEn: 'stepped punch pin with shoulder step' },
  { slug: 'stamping-die-punches', nameZh: '冲压模冲头', promptEn: 'stamping die punch head' },
  { slug: 'a-type-punches', nameZh: 'A 冲（标准圆冲）', promptEn: 'A-type standard round punch pin' },
  { slug: 'special-shaped-punches', nameZh: '异型冲针', promptEn: 'special-shaped custom punch (hex key profile)' },
  { slug: 'punch-pins', nameZh: '通用圆冲针', promptEn: 'general round punch pin' },
];

export type PunchMaterial = {
  code: string;
  nameZh: string;
};

export const PUNCH_MATERIALS: PunchMaterial[] = [
  { code: 'SKD11', nameZh: 'SKD11 模具钢' },
  { code: 'SKD61', nameZh: 'SKD61 热作钢' },
  { code: 'SKH51', nameZh: 'SKH51 高速钢' },
  { code: 'Cr12MoV', nameZh: 'Cr12MoV' },
  { code: 'DC53', nameZh: 'DC53' },
  { code: 'HSS M2', nameZh: 'HSS M2 高速钢' },
  { code: 'Tungsten Carbide', nameZh: '硬质合金（钨钢）' },
];

export type BatchJob = {
  id: string;
  /** 种类 slug，或中文名（见 清单） */
  categorySlug: string;
  /** 材料代号，如 SKD61 */
  material: string;
  /** 可选：异型说明，中文或英文均可 */
  shapeNotes?: string;
  outFile?: string;
  /** 仅备注，给 batch 文件里写给自己看 */
  noteZh?: string;
};

export type BatchFile = {
  jobs: BatchJob[];
};

/** 按 slug、中文名、模糊中文解析种类 */
export function resolveCategorySlug(input: string): string {
  const t = input.trim();
  const bySlug = PUNCH_CATEGORIES.find((c) => c.slug === t);
  if (bySlug) return bySlug.slug;
  const byZh = PUNCH_CATEGORIES.find((c) => c.nameZh === t || c.nameZh.includes(t));
  if (byZh) return byZh.slug;
  const alias: Record<string, string> = {
    钨钢冲针: 'carbide-punches',
    硬质合金: 'carbide-punches',
    A冲: 'a-type-punches',
    'A-type': 'a-type-punches',
  };
  if (alias[t]) return alias[t];
  throw new Error(
    `不认识种类「${input}」。请先运行：npm run image-gen -- 清单`,
  );
}

export function resolveMaterialCode(input: string): string {
  const t = input.trim();
  const byCode = PUNCH_MATERIALS.find((m) => m.code.toLowerCase() === t.toLowerCase());
  if (byCode) return byCode.code;
  const byZh = PUNCH_MATERIALS.find((m) => m.nameZh.includes(t));
  if (byZh) return byZh.code;
  return t;
}

export function categoryLabelForSlug(slug: string): string {
  const row = PUNCH_CATEGORIES.find((c) => c.slug === slug);
  if (!row) throw new Error(`未知种类 slug: ${slug}。运行 npm run image-gen -- 清单`);
  return row.promptEn;
}

export function categoryNameZh(slug: string): string {
  return PUNCH_CATEGORIES.find((c) => c.slug === slug)?.nameZh ?? slug;
}

export function materialSlug(material: string): string {
  return material.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

export function defaultOutFile(job: BatchJob): string {
  if (job.outFile) return job.outFile;
  const slug = resolveCategorySlug(job.categorySlug);
  const mat = resolveMaterialCode(job.material);
  return `public/images/products/generated/punches/${slug}-${materialSlug(mat)}.jpg`;
}

export function printCatalogZh(): void {
  console.log('\n【冲针种类】生成时用 --种类 后面跟「中文名」或 slug 均可：\n');
  for (const c of PUNCH_CATEGORIES) {
    console.log(`  ${c.nameZh.padEnd(16)}  slug: ${c.slug}`);
  }
  console.log('\n【常用材料】--材料 后面跟代号即可（如 SKD61）：\n');
  for (const m of PUNCH_MATERIALS) {
    console.log(`  ${m.code.padEnd(18)}  ${m.nameZh}`);
  }
  console.log('');
}
