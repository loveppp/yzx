/** Site images — local assets under /public/images/ */

export const images = {
  /** 车间能力一览：视频截帧 2×2 */
  factoryWorkshop: [
    '/images/factory/punch-workshop-1.jpg',
    '/images/factory/punch-workshop-2.jpg',
    '/images/factory/punch-workshop-3.jpg',
    '/images/factory/punch-workshop-4.jpg',
  ],
  factoryAbout: {
    /** 与能力区第 3 张同源 */
    hero: '/images/factory/punch-workshop-3.jpg',
    inspection: '/images/factory/inspection-workshop.jpg',
  },
  customProcess: [
    '/images/factory/punch-workshop-1.jpg',
    '/images/factory/punch-workshop-3.jpg',
    '/images/factory/punch-workshop-2.jpg',
    '/images/factory/punch-workshop-4.jpg',
  ],
} as const;
