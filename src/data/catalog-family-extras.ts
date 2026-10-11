import data from './catalog-family-extras.json';
import type {LocalizedText} from './catalog';
import {detailUI} from './catalog-details';
import {familyFiguresFor} from './catalog-family-figures';

export interface FamilyHighlight {
  title: LocalizedText;
  body: LocalizedText;
}

/** HTX 风格「优势」节：左文案 + 右配图 + 询价链 */
export interface FamilyAdvantageSection {
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
  /** 材料节后续 `processFigure` 区块文案（如 HTX How to Choose） */
  processLead?: LocalizedText;
  /** 覆盖 process 区块标题（默认有 processLead 时为「如何选型」） */
  processSectionTitle?: LocalizedText;
  surfaceLead?: LocalizedText;
  gradeOptions?: string[];
  extraFaqs?: FamilyFaqItem[];
  /** 仅展示 extraFaqs，不拼接站内通用 FAQ */
  faqOnly?: boolean;
  /** 冲针长内容页不展示「结构与可选配置」区块 */
  hideConfigurations?: boolean;
  /** HTX 该品类页无独立材料/表面处理长内容节时隐藏（仍保留页头材料标签与 FAQ 中的材料说明） */
  hideMaterialSurfaceSections?: boolean;
  /** 长内容页不展示应用领域/工况整节（配置 + FAQ 仍保留） */
  hideApplicationSections?: boolean;
  advantageSection?: FamilyAdvantageSection;
  /** 与 catalog-family-figures.highlightIcons 按序对应（HTX 优势四宫格标题） */
  advantageTileCaptions?: LocalizedText[];
  /** HTX 无独立「表面处理」长内容节时隐藏（材料节仍可保留） */
  hideSurfaceSection?: boolean;
  /** 与 catalog-family-figures.applicationTiles 按序对应的场景说明（如 HTX 应用四宫格标题） */
  applicationTileCaptions?: LocalizedText[];
}

const extras = data as Record<string, FamilyPageExtras>;

export const familyExtrasFor = (productId: string): FamilyPageExtras | undefined => extras[productId];

export const familyHidesConfigurations = (productId: string) => Boolean(extras[productId]?.hideConfigurations);

/** HTX 对齐详情：长内容模板 + 页内锚点（按组逐步启用，需 catalog-family-extras 有条目） */
const HTX_LONGFORM_GROUPS = new Set([
  'punch-components',
  'ejector-components',
  'guide-components',
  'die-springs',
  'bronze-components',
  'dowel-pins',
]);

export const isHtxFamilyLongformProduct = (productId: string, groupId: string) =>
  HTX_LONGFORM_GROUPS.has(groupId) && Boolean(extras[productId]);

/** @deprecated 使用 isHtxFamilyLongformProduct */
export const isPunchLongformProduct = isHtxFamilyLongformProduct;

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
  const htxLongform = isHtxFamilyLongformProduct(productId, groupId);

  if (htxLongform) {
    const anchors: Array<[string, (typeof detailUI)[keyof typeof detailUI]]> = [];
    if (!e?.hideConfigurations) {
      anchors.push(['configurations', detailUI.range]);
    }
    if (!e?.hideApplicationSections) {
      if (split) {
        anchors.push(['application-areas', detailUI.applicationArea], ['application-scenarios', detailUI.applicationScenario]);
      } else {
        anchors.push(['applications', detailUI.application]);
      }
    }
    if (!e?.hideMaterialSurfaceSections) {
      anchors.push(['material-options', detailUI.material]);
      if (!e?.hideSurfaceSection) {
        anchors.push(['surface-options', detailUI.surface]);
      }
    }
    const fig = familyFiguresFor(productId);
    const showAdvantage =
      e?.advantageSection &&
      (fig?.figures.advantagesFigure ||
        (fig?.highlightIcons?.length && e.advantageTileCaptions?.length));
    if (showAdvantage) {
      anchors.push(['family-advantage', e.advantageSection.title]);
    }
    anchors.push(['family-faq', detailUI.faq]);
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
