/** Supported site locales — add JSON in src/i18n/messages/{code}.json */
export const localeConfig = {
  en: { nativeName: 'English', hreflang: 'en', dir: 'ltr' as const },
  zh: { nativeName: '中文', hreflang: 'zh-CN', dir: 'ltr' as const },
  vi: { nativeName: 'Tiếng Việt', hreflang: 'vi', dir: 'ltr' as const },
} as const;

export type Locale = keyof typeof localeConfig;

export const locales = Object.keys(localeConfig) as Locale[];

export const defaultLocale: Locale = 'en';

export function isLocale(value: string): value is Locale {
  return value in localeConfig;
}

export function getHtmlLang(locale: Locale): string {
  return localeConfig[locale].hreflang;
}

export function getTextDirection(locale: Locale): 'ltr' | 'rtl' {
  return localeConfig[locale].dir;
}
