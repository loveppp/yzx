import { defineConfig } from 'astro/config';
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
