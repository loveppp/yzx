import data from './catalog-family-extras.json';
import type {LocalizedText} from './catalog';
import {detailUI} from './catalog-details';
import {familyFiguresFor} from './catalog-family-figures';

export interface FamilyHighlight {
  title: LocalizedText;
  body: LocalizedText;
}

export interface FamilyRelatedMaterial {
  productId: string;
  blurb: LocalizedText;
}

export interface FamilyFaqItem {
  q: LocalizedText;
  a: LocalizedText;
}

export interface FamilyPageExtras {
  relatedMaterials?: FamilyRelatedMaterial[];
  highlights?: FamilyHighlight[];
  applicationArea?: LocalizedText;
  applicationScenario?: LocalizedText;
  materialLead?: LocalizedText;
  surfaceLead?: LocalizedText;
  gradeOptions?: string[];
  extraFaqs?: FamilyFaqItem[];
  /** 冲针长内容页不展示「结构与可选配置」区块 */
  hideConfigurations?: boolean;
}

const extras = data as Record<string, FamilyPageExtras>;

export const familyExtrasFor = (productId: string): FamilyPageExtras | undefined => extras[productId];

export const familyHidesConfigurations = (productId: string) => Boolean(extras[productId]?.hideConfigurations);

const PUNCH_LONGFORM_IDS = new Set([
  'carbide-punches',
  'hss-punches',
  'stepped-punches',
  'stamping-die-punches',
  'tungsten-carbide-punches',
  'tableting-punches',
]);

/** 冲针 6 品：HTX 长内容模板（配置区仍由 CatalogFamilyDetails 渲染） */
export const isPunchLongformProduct = (productId: string, groupId: string) =>
  groupId === 'punch-components' && PUNCH_LONGFORM_IDS.has(productId);

export const familyHasSplitApplications = (productId: string) => {
  const e = extras[productId];
  const f = familyFiguresFor(productId)?.figures;
  return Boolean(
    (e?.applicationArea && e?.applicationScenario) ||
      (f?.applicationArea && f?.applicationScenario),
  );
};

/** Anchor ids + detailUI labels for in-page nav on family detail pages. */
export function familySectionAnchors(productId: string, groupId = '') {
  const e = extras[productId];
  const split = familyHasSplitApplications(productId);
  const punchLongform = isPunchLongformProduct(productId, groupId);

  if (punchLongform) {
    const anchors: Array<[string, (typeof detailUI)[keyof typeof detailUI]]> = [];
    if (!e?.hideConfigurations) {
      anchors.push(['configurations', detailUI.range]);
    }
    if (split) {
      anchors.push(['application-areas', detailUI.applicationArea], ['application-scenarios', detailUI.applicationScenario]);
    } else {
      anchors.push(['applications', detailUI.application]);
    }
    anchors.push(['material-options', detailUI.material], ['surface-options', detailUI.surface], ['family-faq', detailUI.faq]);
    return anchors;
  }

  const anchors: Array<[string, (typeof detailUI)[keyof typeof detailUI]]> = [
    ['configurations', detailUI.range],
    ['why-this-family', detailUI.choice],
    ['material-options', detailUI.material],
    ['surface-options', detailUI.surface],
  ];
  if (split) {
    anchors.push(['application-areas', detailUI.applicationArea], ['application-scenarios', detailUI.applicationScenario]);
  } else {
    anchors.push(['applications', detailUI.application]);
  }
  if (e?.relatedMaterials?.length) {
    anchors.push(['related-stamping-materials', detailUI.relatedMaterials]);
  }
  anchors.push(['family-faq', detailUI.faq]);
  return anchors;
}
