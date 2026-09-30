import { defineCollection, z } from 'astro:content';

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

export const collections = { blog };
