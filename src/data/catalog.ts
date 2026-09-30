import data from './catalog.json';
import legacy from './catalog-legacy.json';
import type { Locale } from '@/i18n/locales';

export type LocalizedText = Record<Locale, string>;
export interface CatalogGroup {
  id: string;
  name: LocalizedText;
  intro: LocalizedText;
  selection: LocalizedText;
}
export interface CatalogProduct {
  id: string;
  group: string;
  name: LocalizedText;
  summary: LocalizedText;
  application: LocalizedText;
  selection: LocalizedText;
  materials: string[];
  variants: LocalizedText[];
  sourceUrls: string[];
  image: string | null;
  imageGenerated?: boolean;
  imageCaption?: LocalizedText;
  illustration: string;
  note?: LocalizedText;
}

export const catalogGroups: CatalogGroup[] = data.groups;
export const catalogProducts: CatalogProduct[] = data.products;
export const legacyCategories: Record<string, string> = legacy.categories;
export const legacyProducts: Record<string, string> = legacy.products;
export const catalogText = (value: LocalizedText, locale: Locale) => value[locale] || value.en;
export const groupProducts = (group: string) => catalogProducts.filter((p) => p.group === group);
export const productPath = (p: CatalogProduct, locale: Locale) => `/${locale}/products/${p.group}/${p.id}/`;
export const groupPath = (g: CatalogGroup, locale: Locale) => `/${locale}/products/${g.id}/`;
export const productById = (id: string) => catalogProducts.find((p) => p.id === id);
export function legacyDestination(target: string, locale: Locale) {
  const product = productById(target);
  return product ? productPath(product, locale) : `/${locale}/products/${target}/`;
}

const materialNames: Record<string, LocalizedText> = {
  'Tungsten carbide': {en:'Tungsten carbide',zh:'硬质合金（钨钢）',vi:'Hợp kim cứng'},
  'Alloy steel': {en:'Alloy steel',zh:'合金钢',vi:'Thép hợp kim'},
  'Bearing steel': {en:'Bearing steel',zh:'轴承钢',vi:'Thép ổ bi'},
  'Tool steel': {en:'Tool steel',zh:'工具钢',vi:'Thép dụng cụ'},
  'Steel': {en:'Steel',zh:'钢',vi:'Thép'},
  'Stainless steel': {en:'Stainless steel',zh:'不锈钢',vi:'Thép không gỉ'},
  'Spring steel': {en:'Spring steel',zh:'弹簧钢',vi:'Thép lò xo'},
  'Brass': {en:'Brass',zh:'黄铜',vi:'Đồng thau'},
  'Bronze': {en:'Bronze',zh:'青铜',vi:'Đồng thanh'},
  'Copper alloy': {en:'Copper alloy',zh:'铜合金',vi:'Hợp kim đồng'},
  'Copper alloy with solid lubricant': {en:'Copper alloy with solid lubricant',zh:'镶固体润滑铜合金',vi:'Hợp kim đồng có chất bôi trơn rắn'},
  'Aluminum': {en:'Aluminum',zh:'铝合金',vi:'Nhôm'},
  'Engineering polymer': {en:'Engineering polymer',zh:'工程塑料',vi:'Nhựa kỹ thuật'},
  'Per selected model': {en:'Confirmed for the selected model',zh:'按选定型号确认',vi:'Xác nhận theo model'},
};
export const materialLabel = (material: string, locale: Locale) => materialNames[material]?.[locale] || material;
