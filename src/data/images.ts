/** Site images — local assets under /public/images/ */

export const images = {
  hero: '/images/products/generated/hero-punches.png',
  factory: [
    {
      src: '/images/factory/cnc.png',
      captionKey: 'cnc' as const,
    },
    {
      src: '/images/factory/grinding.png',
      captionKey: 'grinding' as const,
    },
    {
      src: '/images/factory/edm.png',
      captionKey: 'edm' as const,
    },
    {
      src: '/images/factory/inspection.png',
      captionKey: 'inspection' as const,
    },
  ],
  categories: {
    'punch-pins': '/images/products/generated/custom-punches.png',
    'floating-pins': '/images/products/generated/float-lifter-pins.png',
    'pilot-pins': '/images/categories/guide-pins.png',
    'guide-posts': '/images/categories/guide-posts.png',
    'guide-bushings': '/images/categories/guide-bushings.png',
    'a-type-punches': '/images/products/generated/a-punch.png',
    'special-shaped-punches': '/images/products/generated/irregular-shaped-punches.png',
    'carbide-punches': '/images/products/generated/carbide-punch.png',
    'hss-punches': '/images/products/generated/hss-punch.png',
    'stepped-punches': '/images/products/generated/stepped-punch.png',
    'stamping-die-punches': '/images/products/generated/custom-punches.png',
    'ejector-components': '/images/products/generated/custom-punches.png',
    'die-springs': '/images/categories/guide-posts.png',
    'oilless-bushings': '/images/categories/guide-bushings.png',
    'sprue-bushings': '/images/categories/guide-bushings.png',
    'cylindrical-pins': '/images/categories/guide-pins.png',
    'custom-mold-components': '/images/products/generated/hero-punches.png',
  },
  specialShaped: [
    '/images/products/generated/irregular-shaped-punches.png',
    '/images/products/generated/stepped-punch.png',
    '/images/products/generated/custom-punches.png',
    '/images/products/generated/a-punch.png',
    '/images/products/generated/carbide-punch.png',
    '/images/products/generated/hss-punch.png',
    '/images/products/generated/float-lifter-pins.png',
  ],
  customProcess: [
    '/images/factory/inspection.png',
    '/images/factory/edm.png',
    '/images/factory/grinding.png',
    '/images/factory/cnc.png',
  ],
} as const;

export const factoryCaptions: Record<
  (typeof images.factory)[number]['captionKey'],
  Record<string, string>
> = {
  cnc: {
    en: 'CNC machining area',
    zh: 'CNC 加工区域',
    de: 'CNC-Bearbeitungsbereich',
    ja: 'CNC加工エリア',
    es: 'Área de mecanizado CNC',
  },
  grinding: {
    en: 'Precision grinding workshop',
    zh: '精密磨床加工车间',
    de: 'Präzisionsschleifwerkstatt',
    ja: '精密研削加工場',
    es: 'Taller de rectificado de precisión',
  },
  edm: {
    en: 'Wire EDM department',
    zh: '慢走丝线切割车间',
    de: 'Drahterodierabteilung',
    ja: 'ワイヤー放電加工室',
    es: 'Departamento de electroerosión por hilo',
  },
  inspection: {
    en: 'Dimensional inspection',
    zh: '尺寸检测',
    de: 'Maßprüfung',
    ja: '寸法検査',
    es: 'Inspección dimensional',
  },
};

export function getFactoryCaption(key: (typeof images.factory)[number]['captionKey'], locale: string): string {
  const row = factoryCaptions[key];
  return row[locale] ?? row.en;
}
