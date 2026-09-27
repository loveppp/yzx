import en from './messages/en.json';
import zh from './messages/zh.json';
import vi from './messages/vi.json';
import {
  defaultLocale,
  getHtmlLang,
  getTextDirection,
  isLocale,
  localeConfig,
  locales,
  type Locale,
} from './locales';

export { localeConfig, getHtmlLang, getTextDirection };

export type { Locale };
export { locales, defaultLocale, isLocale };
export type Dictionary = typeof en;

const dictionaries: Record<Locale, Dictionary> = {
  en,
  zh,
  vi,
};

export function getLocaleFromUrl(url: URL): Locale {
  const [, segment] = url.pathname.split('/');
  if (segment && isLocale(segment)) return segment;
  return defaultLocale;
}

export function useTranslations(locale: Locale): Dictionary {
  return dictionaries[locale] ?? en;
}

export function localizedPath(path: string, locale: Locale): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (clean === '/') return `/${locale}/`;
  return `/${locale}${clean}`;
}

export function switchLocalePath(currentPath: string, targetLocale: Locale): string {
  const localePattern = new RegExp(`^/(${locales.join('|')})`);
  const withoutLocale = currentPath.replace(localePattern, '') || '/';
  return localizedPath(withoutLocale, targetLocale);
}

/** Product/blog fields: {field}_{locale} with fallback en → zh */
export function getLocalizedField<T extends Record<string, unknown>>(
  item: T,
  field: string,
  locale: Locale,
): string {
  const candidates = [
    `${field}_${locale}`,
    `${field}_en`,
    `${field}_zh`,
  ];
  for (const key of candidates) {
    const value = item[key];
    if (typeof value === 'string' && value.length > 0) return value;
  }
  return '';
}

export const categorySlugs = [
  'punch-pins', 'floating-pins', 'pilot-pins', 'guide-posts', 'guide-bushings',
  'a-type-punches', 'special-shaped-punches', 'carbide-punches', 'hss-punches',
  'stepped-punches', 'stamping-die-punches', 'ejector-components', 'die-springs',
  'oilless-bushings', 'sprue-bushings', 'cylindrical-pins', 'custom-mold-components',
] as const;

export type CategorySlug = (typeof categorySlugs)[number];
