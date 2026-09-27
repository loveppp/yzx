import type { CategorySlug, Locale } from '@/i18n/utils';

/** 模具配件职能导航（对齐外贸站 7 栏，非 htx99 行业树） */
export type MegaMenuLinkDef = {
  labelKey: string;
  category?: CategorySlug;
  productSlug?: string;
};

export type MegaMenuColumnDef = {
  titleKey: string;
  links: MegaMenuLinkDef[];
};

export const productMegaMenuColumns: MegaMenuColumnDef[] = [
  {
    titleKey: 'punch',
    links: [
      { labelKey: 'carbidePunches', category: 'carbide-punches' },
      { labelKey: 'hssPunches', category: 'hss-punches' },
      { labelKey: 'steppedPunches', category: 'stepped-punches' },
      { labelKey: 'stampingDiePunch', category: 'stamping-die-punches' },
      { labelKey: 'tungstenCarbidePunch', category: 'carbide-punches' },
      { labelKey: 'tabletingPunches', category: 'custom-mold-components' },
    ],
  },
  {
    titleKey: 'ejector',
    links: [
      { labelKey: 'ejectorPins', category: 'ejector-components' },
      { labelKey: 'shoulderEjectorPins', category: 'ejector-components' },
      { labelKey: 'bladeEjectorPins', category: 'ejector-components', productSlug: 'skh51bdz' },
      { labelKey: 'squareEjectorPins', category: 'ejector-components' },
      { labelKey: 'stepEjectorPins', category: 'ejector-components', productSlug: 'skd61sjtz' },
      { labelKey: 'straightEjectorPins', category: 'ejector-components', productSlug: 'skd61dz' },
      { labelKey: 'nitridedEjectorPins', category: 'ejector-components', productSlug: 'skd61dzst' },
      { labelKey: 'skd61EjectorPins', category: 'ejector-components', productSlug: 'skd61dz' },
    ],
  },
  {
    titleKey: 'guide',
    links: [
      { labelKey: 'guidePosts', category: 'guide-posts' },
      { labelKey: 'guideBushings', category: 'guide-bushings' },
      { labelKey: 'guideSets', category: 'guide-posts' },
      { labelKey: 'ballCages', category: 'guide-bushings' },
      { labelKey: 'brassBallCage', category: 'guide-bushings', productSlug: 'bronze-guide-bushing' },
      { labelKey: 'aluminumBallCage', category: 'guide-bushings' },
      { labelKey: 'plasticBallCage', category: 'guide-bushings' },
      { labelKey: 'ballBearingBushing', category: 'guide-bushings' },
    ],
  },
  {
    titleKey: 'springs',
    links: [
      { labelKey: 'redDieSprings', category: 'die-springs' },
      { labelKey: 'blueDieSprings', category: 'die-springs' },
      { labelKey: 'greenDieSprings', category: 'die-springs' },
      { labelKey: 'yellowDieSprings', category: 'die-springs' },
      { labelKey: 'brownDieSprings', category: 'die-springs' },
      { labelKey: 'nitrogenSprings', category: 'guide-posts', productSlug: 'nitrogen-guide-post' },
    ],
  },
  {
    titleKey: 'plastic',
    links: [
      { labelKey: 'sprueBushings', category: 'sprue-bushings' },
      { labelKey: 'locatingRings', category: 'custom-mold-components' },
      { labelKey: 'moldDateStamp', category: 'custom-mold-components' },
      { labelKey: 'sideLocks', category: 'custom-mold-components' },
      { labelKey: 'stopperBolts', category: 'custom-mold-components' },
      { labelKey: 'pullRods', category: 'custom-mold-components' },
    ],
  },
  {
    titleKey: 'bronze',
    links: [
      { labelKey: 'graphiteBronze', category: 'guide-bushings', productSlug: 'bronze-guide-bushing' },
      { labelKey: 'bronzeBushings', category: 'guide-bushings', productSlug: 'bronze-guide-bushing' },
      { labelKey: 'flangedBronze', category: 'guide-bushings' },
      { labelKey: 'wearPlates', category: 'oilless-bushings' },
    ],
  },
  {
    titleKey: 'dowel',
    links: [
      { labelKey: 'precisionDowel', category: 'cylindrical-pins' },
      { labelKey: 'threadedDowel', category: 'cylindrical-pins' },
      { labelKey: 'customDowel', category: 'cylindrical-pins', productSlug: 'yzx' },
      { labelKey: 'pullDowel', category: 'cylindrical-pins' },
      { labelKey: 'hardenedDowel', category: 'cylindrical-pins', productSlug: 'xd' },
    ],
  },
];

export function megaMenuLinkHref(
  locale: Locale,
  link: MegaMenuLinkDef,
  localizedPath: (path: string, locale: Locale) => string,
): string {
  if (link.category && link.productSlug) {
    return localizedPath(`/products/${link.category}/${link.productSlug}/`, locale);
  }
  if (link.category) {
    return localizedPath(`/products/?category=${link.category}`, locale);
  }
  return localizedPath('/products/', locale);
}
