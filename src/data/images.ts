/** Site images — local assets under /public/images/ */

export const images = {
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
