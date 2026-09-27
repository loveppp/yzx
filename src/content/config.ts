import { defineCollection, z } from 'astro:content';

const products = defineCollection({
  type: 'content',
  schema: z.object({
    name_en: z.string(),
    name_zh: z.string(),
    category: z.enum([
      'punch-pins', 'floating-pins', 'pilot-pins', 'guide-posts', 'guide-bushings',
      'a-type-punches', 'special-shaped-punches', 'carbide-punches', 'hss-punches',
      'stepped-punches', 'stamping-die-punches', 'ejector-components', 'die-springs',
      'oilless-bushings', 'sprue-bushings', 'custom-mold-components',
    ]),
    /** 对标 htx99 行业维度；未填则按 category 自动推断 */
    moldApplication: z
      .enum(['stamping', 'plastic', 'standard', 'universal'])
      .optional(),
    customAvailable: z.literal(true).default(true),
    materials: z.array(z.string()),
    diameterRange: z.string().optional(),
    hardness: z.string().optional(),
    tolerance: z.string().optional(),
    leadTime: z.string().optional(),
    description_en: z.string(),
    description_zh: z.string(),
    heroImage: z.string(),
    gallery: z.array(z.string()).optional(),
    seoTitle_en: z.string(),
    seoTitle_zh: z.string(),
    seoDescription_en: z.string(),
    seoDescription_zh: z.string(),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title_en: z.string(),
    title_zh: z.string(),
    description_en: z.string(),
    description_zh: z.string(),
    body_en: z.string(),
    body_zh: z.string(),
    pubDate: z.coerce.date(),
    heroImage: z.string().optional(),
  }),
});

export const collections = { products, blog };
