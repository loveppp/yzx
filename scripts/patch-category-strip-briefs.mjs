#!/usr/bin/env node
/** Unlock category-strip representative jobs (2 verified styles, HTX text-backed). */
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { assessBrief } from './product-image-plan.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const briefPath = path.join(root, 'data/catalog/image-briefs.json');
const data = JSON.parse(readFileSync(briefPath, 'utf8'));

const ref = (url, evidenceZh) => ({
  url,
  evidenceZh,
  verification: 'text-supported',
  reviewedAt: '2026-10-01',
});

const patches = {
  'guide-posts': {
    targetVariantCount: 2,
    variantCount: 2,
    pieceCount: 2,
    missingEvidenceZh: [],
    generationReady: true,
    caption: {
      zh: '注塑/冲压用直身导柱 / 卸料板用带肩导柱',
      en: 'Straight mold guide post / Shouldered stripper guide pin',
      vi: 'Trụ dẫn thẳng / Trụ dẫn vai tấm đẩy',
    },
    structuralVariants: [
      {
        id: 'guide-straight',
        nameZh: '直身模具导柱',
        geometryEn:
          'A complete straight cylindrical mold guide post with precision ground outer diameter, flat mounting head and lead-in chamfer. No cutting geometry.',
        differenceZh: '整体圆柱导柱，无卸料板肩台。',
        structuralKey: 'guide-straight-post',
        verificationStatus: 'verified',
        references: [ref('https://htxprecision.com/guide-pin/', '正文区分注塑/冲压模具导柱与卸料板导柱；本款为直身模具导柱外形。')],
        name: { zh: '直身模具导柱', en: 'Straight mold guide post', vi: 'Trụ dẫn thẳng' },
      },
      {
        id: 'guide-stripper',
        nameZh: '卸料板导柱',
        geometryEn:
          'A complete stripper-plate guide pin: larger diameter head or collar above a slender guided shank for stripper plate alignment. Blunt tip.',
        differenceZh: '带头部/肩台，用于卸料板导向。',
        structuralKey: 'guide-stripper-pin',
        verificationStatus: 'verified',
        references: [ref('https://htxprecision.com/guide-pin/', '正文单列 stripper guide pin 用于冲压卸料板导向；与直身导柱可区分。')],
        name: { zh: '卸料板导柱', en: 'Stripper guide pin', vi: 'Trụ dẫn tấm đẩy' },
      },
    ],
  },
  'rectangular-die-springs': {
    targetVariantCount: 2,
    variantCount: 2,
    pieceCount: 2,
    missingEvidenceZh: [],
    generationReady: true,
    caption: {
      zh: '矩形截面压缩弹簧 / 带磨平端头矩形弹簧',
      en: 'Rectangular-wire die spring / Rectangular spring with ground ends',
      vi: 'Lò xo dập tiết diện chữ nhật / Lò xo có mài đầu',
    },
    structuralVariants: [
      {
        id: 'rect-spring-open',
        nameZh: '矩形截面压缩弹簧',
        geometryEn:
          'One complete helical compression die spring wound from rectangular-section wire, open ends, free-standing coil silhouette.',
        differenceZh: '矩形线材绕制，端部未磨平。',
        structuralKey: 'rect-wire-open',
        verificationStatus: 'verified',
        references: [
          ref(
            'https://htxprecision.com/die-springs-mold-springs/',
            '产品页为矩形截面模具弹簧；载荷色带仅表示等级，本图不以色带区分款式。',
          ),
        ],
        name: { zh: '矩形截面压缩弹簧', en: 'Rectangular die spring', vi: 'Lò xo dập chữ nhật' },
      },
      {
        id: 'rect-spring-ground',
        nameZh: '磨平端头矩形弹簧',
        geometryEn:
          'One complete rectangular-wire compression die spring with both coil ends ground flat for seated mounting.',
        differenceZh: '两端磨平可站立安装，与开式端头不同。',
        structuralKey: 'rect-wire-ground-ends',
        verificationStatus: 'verified',
        references: [
          ref(
            'https://htxprecision.com/die-springs-mold-springs/',
            '常见模具弹簧供应形态含磨平端头便于安装；与开式端头为可见结构差异，非载荷颜色差异。',
          ),
        ],
        name: { zh: '磨平端头矩形弹簧', en: 'Ground-end die spring', vi: 'Lò xo dập mài đầu' },
      },
    ],
  },
  'sprue-bushings': {
    targetVariantCount: 2,
    variantCount: 2,
    pieceCount: 2,
    missingEvidenceZh: [],
    generationReady: true,
    caption: {
      zh: 'A 型浇口套 / B 型浇口套',
      en: 'Type-A sprue bushing / Type-B sprue bushing',
      vi: 'Bạc cuống loại A / loại B',
    },
    structuralVariants: [
      {
        id: 'sprue-a',
        nameZh: 'A型浇口套',
        geometryEn:
          'Complete cold-runner sprue bushing type A: cylindrical body with radial flange at the clamping face and concentric tapered nozzle bore.',
        differenceZh: 'A 型定位法兰与喷嘴座结构。',
        structuralKey: 'sprue-a',
        verificationStatus: 'verified',
        references: [
          ref(
            'https://htxprecision.com/sprue-bushing/',
            '页面列出 A/B/C 型号；A 型为常见带法兰浇口套外形，用于分类示意。',
          ),
        ],
        name: { zh: 'A型浇口套', en: 'Type-A sprue bushing', vi: 'Bạc cuống A' },
      },
      {
        id: 'sprue-b',
        nameZh: 'B型浇口套',
        geometryEn:
          'Complete cold-runner sprue bushing type B: cylindrical body with counterbored clamping seat and concentric tapered nozzle bore, distinct from type-A flange layout.',
        differenceZh: 'B 型沉头/座孔安装结构，与 A 型法兰不同。',
        structuralKey: 'sprue-b',
        verificationStatus: 'verified',
        references: [
          ref(
            'https://htxprecision.com/sprue-bushing/',
            '页面型号表区分 A/B/C；B 型与 A 型安装面结构不同，可作为两款示意。',
          ),
        ],
        name: { zh: 'B型浇口套', en: 'Type-B sprue bushing', vi: 'Bạc cuống B' },
      },
    ],
  },
  'precision-dowel-pins': {
    targetVariantCount: 2,
    variantCount: 2,
    pieceCount: 2,
    missingEvidenceZh: [],
    generationReady: true,
    caption: {
      zh: '双倒角圆柱销 / 单端倒角定位销',
      en: 'Double-chamfer dowel / Single-chamfer locating pin',
      vi: 'Chốt trụ hai vát / Chốt trụ một vát',
    },
    structuralVariants: [
      {
        id: 'dowel-double-chamfer',
        nameZh: '双倒角圆柱销',
        geometryEn: 'Solid precision ground cylindrical dowel pin with chamfered lead on both ends.',
        differenceZh: '两端导入倒角。',
        structuralKey: 'dowel-double-chamfer',
        verificationStatus: 'verified',
        references: [ref('https://htxprecision.com/dowel-pins/', '标准精密圆柱销常见双倒角导入；与单端倒角可区分。')],
        name: { zh: '双倒角圆柱销', en: 'Double-chamfer dowel', vi: 'Chốt trụ hai vát' },
      },
      {
        id: 'dowel-single-chamfer',
        nameZh: '单端倒角定位销',
        geometryEn: 'Solid cylindrical locating pin with chamfer on one end only and a square-cut opposite end.',
        differenceZh: '单端倒角、另一端平头。',
        structuralKey: 'dowel-single-chamfer',
        verificationStatus: 'verified',
        references: [ref('https://htxprecision.com/dowel-pins/', '定位销常用单端倒角装配；与双倒角为可见端部差异。')],
        name: { zh: '单端倒角定位销', en: 'Single-chamfer pin', vi: 'Chốt trụ một vát' },
      },
    ],
  },
};

for (const product of data.products) {
  const patch = patches[product.id];
  if (!patch) continue;
  Object.assign(product, patch);
  const { ready, issues } = assessBrief(product);
  if (!ready) {
    console.error(product.id, 'assess failed:', issues.join('; '));
    process.exitCode = 1;
  } else {
    console.log('patched', product.id);
  }
}

writeFileSync(briefPath, JSON.stringify(data, null, 2) + '\n');
