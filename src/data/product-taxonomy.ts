import type { CategorySlug } from '@/i18n/utils';

/** 模具应用行业（对标 htx99「按行业分类」） */
export type MoldApplication = 'stamping' | 'plastic' | 'standard' | 'universal';

export type TaxonomyGroupId =
  | 'stamping-punches'
  | 'stamping-guides'
  | 'stamping-feed'
  | 'plastic-ejector'
  | 'plastic-sprue'
  | 'shop-supplies'
  | 'stamping-pins'
  | 'other';

export interface TaxonomyGroup {
  id: TaxonomyGroupId;
  moldApplication: MoldApplication;
  categorySlugs: CategorySlug[];
}

/**
 * 前台展示用分组：URL 仍用现有 category slug，避免改 15+ 页面路径。
 * 冲针类 7 个 slug 在 UI 上归到「冲压 · 冲针/冲头」一组，对标 htx99 /czctj/。
 */
export const taxonomyGroups: TaxonomyGroup[] = [
  {
    id: 'stamping-punches',
    moldApplication: 'stamping',
    categorySlugs: [
      'stamping-die-punches',
      'punch-pins',
      'a-type-punches',
      'hss-punches',
      'carbide-punches',
      'stepped-punches',
      'special-shaped-punches',
    ],
  },
  {
    id: 'stamping-guides',
    moldApplication: 'stamping',
    categorySlugs: ['guide-posts', 'guide-bushings'],
  },
  {
    id: 'stamping-feed',
    moldApplication: 'stamping',
    categorySlugs: ['floating-pins', 'pilot-pins'],
  },
  {
    id: 'plastic-ejector',
    moldApplication: 'plastic',
    categorySlugs: ['ejector-components'],
  },
  {
    id: 'plastic-sprue',
    moldApplication: 'plastic',
    categorySlugs: ['sprue-bushings', 'oilless-bushings'],
  },
  {
    id: 'shop-supplies',
    moldApplication: 'standard',
    categorySlugs: ['die-springs'],
  },
  {
    id: 'stamping-pins',
    moldApplication: 'stamping',
    categorySlugs: ['cylindrical-pins'],
  },
  {
    id: 'other',
    moldApplication: 'universal',
    categorySlugs: ['custom-mold-components'],
  },
];

export const moldApplicationOrder: MoldApplication[] = ['stamping', 'plastic', 'standard', 'universal'];

export function categoryToMoldApplication(category: CategorySlug): MoldApplication {
  for (const g of taxonomyGroups) {
    if (g.categorySlugs.includes(category)) return g.moldApplication;
  }
  return 'universal';
}

export function groupsForMoldApplication(app: MoldApplication | ''): TaxonomyGroup[] {
  if (!app) return taxonomyGroups;
  return taxonomyGroups.filter((g) => g.moldApplication === app);
}
