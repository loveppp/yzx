import { defineConfig } from 'astro/config';
import { readFileSync } from 'node:fs';
const catalog = JSON.parse(readFileSync(new URL('./src/data/catalog.json', import.meta.url), 'utf8'));
const canonicalCatalogPaths = new Set([
  'products',
  ...catalog.groups.map(g => `products/${g.id}`),
  ...catalog.products.map(p => `products/${p.group}/${p.id}`),
]);
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

const localeList = ['en', 'zh', 'vi'];

const sitemapLocales = {
  en: 'en',
  zh: 'zh-CN',
  vi: 'vi',
};

export default defineConfig({
  site: 'https://yzxprecision.com',
  integrations: [
    tailwind(),
    react(),
    sitemap({
      filter: (page) => {
        const segments = new URL(page).pathname.split('/').filter(Boolean);
        if (segments[1] !== 'products') return true;
        return canonicalCatalogPaths.has(segments.slice(1).join('/'));
      },
      i18n: {
        defaultLocale: 'en',
        locales: sitemapLocales,
      },
    }),
  ],
  i18n: {
    defaultLocale: 'en',
    locales: localeList,
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
