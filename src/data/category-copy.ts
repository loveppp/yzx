import type { CategorySlug } from '@/i18n/utils';

export const categoryCopy: Record<
  CategorySlug,
  { intro_zh: string; intro_en: string }
> = {
  'punch-pins': {
    intro_zh:
      '圆棒冲针、冲头及通用冲压用冲裁件，材质与刃口几何按图纸定制，适用于各类冲压模。',
    intro_en:
      'Round punch pins and general stamping punches — material and tip geometry per your die drawing.',
  },
  'a-type-punches': {
    intro_zh: 'A 型冲头结构，头径、杆长、材质可选 SKD11、高速钢等，适用于标准与半标准冲压模。',
    intro_en: 'A-type punch heads with customizable head diameter, shank length, and tool steel grade.',
  },
  'hss-punches': {
    intro_zh: '高速钢 / SKH / ASP 等冲针，兼顾硬度与韧性，适合较高冲次或较厚板。',
    intro_en: 'HSS and powder HSS punches for higher stroke counts or tougher sheet materials.',
  },
  'carbide-punches': {
    intro_zh: '钨钢（硬质合金）冲针，耐磨性优异，适用于不锈钢、硅钢及高产量工况。',
    intro_en: 'Tungsten carbide punches for stainless, silicon steel, and high-volume stamping.',
  },
  'stepped-punches': {
    intro_zh: '台阶冲、多级冲针，一次成形多级孔位或沉头结构，公差按图纸控制。',
    intro_en: 'Stepped and multi-diameter punches for multi-level holes or formed sections in one stroke.',
  },
  'special-shaped-punches': {
    intro_zh: '异型、方冲、六角、椭圆、斜度等非圆冲针，慢走丝与精磨配合加工。',
    intro_en: 'Non-round and formed punches — hex, square, oblique, oval — via wire EDM and precision grinding.',
  },
  'stamping-die-punches': {
    intro_zh: '冲压模专用冲头总成类零件，可与引导针、成型冲等组合定制。',
    intro_en: 'Stamping-die punch assemblies including form and guide combinations to your layout.',
  },
  'guide-posts': {
    intro_zh: '导柱、外导柱及相关导向件，SUJ2、氮化导柱等，平行度与配合间隙按标准或图纸。',
    intro_en: 'Guide posts and leader pins — bearing steel or nitrided — fit and parallelism to spec.',
  },
  'guide-bushings': {
    intro_zh: '导套、滚珠导套、铜导套等，与导柱配研，保证模架导向精度。',
    intro_en: 'Guide bushings including ball cages and bronze types, matched to your guide posts.',
  },
  'floating-pins': {
    intro_zh: '浮料销、浮升销等浮料零件，用于条料或工序间浮料控制。',
    intro_en: 'Lifter and floating pins for strip control between stamping operations.',
  },
  'pilot-pins': {
    intro_zh: '引导针、定位针，用于条料送进与孔位引导，与冲头配作一套。',
    intro_en: 'Pilot and guide pins for strip feeding and hole alignment with your punch set.',
  },
  'ejector-components': {
    intro_zh: '顶针、司筒、扁顶针等塑胶模顶出零件，SKD61、SKH51 等，表面可氮化或抛光。',
    intro_en: 'Ejector pins, sleeves, and blade ejectors for plastic molds — hot-work steels, polished or nitrided.',
  },
  'sprue-bushings': {
    intro_zh: '浇口套、唧咀相关零件，按注塑机与模架规格定制。',
    intro_en: 'Sprue bushings and nozzle-related inserts sized to your press and mold plate.',
  },
  'oilless-bushings': {
    intro_zh: '自润滑、无油衬套等耐磨件，用于模架或滑块导向辅助。',
    intro_en: 'Oilless and self-lubricating bushings for mold plates and sliding cores.',
  },
  'die-springs': {
    intro_zh: '模具弹簧（含标准系列定制加工），行程与刚度按模架要求选配。',
    intro_en: 'Die springs supplied or machined to your stroke and load requirements.',
  },
  'cylindrical-pins': {
    intro_zh: '圆柱销、销钉等定位紧固件，直径与长度按国标或图纸加工。',
    intro_en: 'Cylindrical dowel pins and locating pins to drawing or standard tolerances.',
  },
  'custom-mold-components': {
    intro_zh: '定位圈、辅助器及其他非标模具配件，来图来样单件或小批量。',
    intro_en: 'Locating rings, retainers, and other custom mold parts from your drawing or sample.',
  },
};
