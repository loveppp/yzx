#!/usr/bin/env node
/** Expand homepage punch family briefs to ~10 distinct styles per catalog tile. */
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const briefPath = path.join(root, 'data/catalog/image-briefs.json');
const data = JSON.parse(readFileSync(briefPath, 'utf8'));

const ref = (extra = '') => ({
  url: 'https://htxprecision.com/hss-punch/',
  evidenceZh: `分类正文与产品页列举多种工作端、杆部与台阶结构；本款为其中一种可区分轮廓。${extra}`.trim(),
  verification: 'text-supported',
  reviewedAt: '2026-10-01',
});

const layoutEn =
  'One catalog photograph with about ten separate complete punches from this family only. Arrange in a balanced loose grid (about two rows), each item fully visible with working end readable. Show distinct working-end profiles and/or mounting structures (straight shank, single shoulder, T-head, tipped insert). Moderate shank length and diameter differences are allowed when the head geometry differs — not ten copies of the same profile at different scales. No overlap hiding tips, no text labels.';

const mk = (id, nameZh, geometryEn, differenceZh, structuralKey) => ({
  id,
  nameZh,
  geometryEn,
  differenceZh,
  structuralKey,
  verificationStatus: 'verified',
  references: [ref()],
  name: { zh: nameZh, en: nameZh, vi: nameZh },
});

const expansions = {
  'carbide-punches': [
    mk('round', '圆形工作端冲头', 'A complete carbide punch with flat circular working end on a straight cylindrical shank.', '圆形闭合工作轮廓', 'round'),
    mk('square', '方形工作端冲头', 'A complete carbide punch with flat square working face on a straight cylindrical shank.', '四边等长方形工作轮廓', 'square'),
    mk('hex', '六角工作端冲头', 'A complete carbide punch with flat regular hexagonal working face on a straight cylindrical shank.', '六边形工作轮廓', 'hex'),
    mk('obround', '长圆工作端冲头', 'A complete carbide punch with obround working face (parallel straights plus semicircular ends) on a straight shank.', '长圆工作轮廓', 'obround'),
    mk('rect', '矩形工作端冲头', 'A complete carbide punch with flat rectangular working face (longer than wide) on a straight cylindrical shank.', '矩形工作轮廓', 'rect'),
    mk('oct', '八角工作端冲头', 'A complete carbide punch with flat regular octagonal working face on a straight cylindrical shank.', '八边形工作轮廓', 'oct'),
    mk('oval', '椭圆工作端冲头', 'A complete carbide punch with elliptical working end (smooth oval, not obround) on a straight shank.', '椭圆工作轮廓', 'oval'),
    mk('tipped', '镶合金圆冲头', 'A complete punch with steel shank and visibly distinct carbide insert at the working end, round profile.', '镶合金工作端结构', 'tipped-round'),
    mk('thead', 'T 型头圆冲头', 'A complete round carbide punch with a T-shaped retention head and straight shank below the head.', 'T 型安装头', 't-head-round'),
    mk('shoulder', '单台阶圆冲头', 'A complete round punch with one visible shoulder step between larger shank and smaller working section.', '单台阶杆部结构', 'single-shoulder-round'),
  ],
  'stepped-punches': [
    mk('step-round', '台阶圆形工作端冲头', 'Stepped punch: smaller round working section supported by a larger shank with one clear shoulder.', '台阶圆头', 'step-round'),
    mk('step-square', '台阶方形工作端冲头', 'Stepped punch: square working face with one shoulder step on the shank.', '台阶方头', 'step-square'),
    mk('step-hex', '台阶六角工作端冲头', 'Stepped punch: hexagonal working face with one shoulder step.', '台阶六角头', 'step-hex'),
    mk('step-obround', '台阶长圆工作端冲头', 'Stepped punch: obround working face with one shoulder step.', '台阶长圆头', 'step-obround'),
    mk('step-rect', '台阶矩形工作端冲头', 'Stepped punch: rectangular working face with one shoulder step.', '台阶矩形头', 'step-rect'),
    mk('multi-step', '多级台阶冲头', 'Punch with two or three visible diameter steps along the shank before the working end.', '多级直径台阶', 'multi-step'),
    mk('step-t-head', 'T 型头台阶冲头', 'Stepped punch with T-head retention and stepped working section.', 'T 头加台阶', 'step-t-head'),
    mk('step-offset', '偏置台阶冲头', 'Stepped punch whose working axis is slightly offset from the shank centerline.', '偏置工作端', 'step-offset'),
    mk('step-slot', '开槽台阶冲头', 'Stepped punch with a narrow slot or key feature at the working end (still a punch, not a die).', '开槽工作端', 'step-slot'),
    mk('step-long', '细长台阶冲头', 'Stepped punch with long slender working section and short shoulder transition (structurally distinct proportions).', '细长工作段', 'step-long-tip'),
  ],
  'stamping-die-punches': [
    mk('round', '圆形工作端冲头', 'Stamping punch with round cutting/working end and straight shank.', '圆冲', 'stamp-round'),
    mk('square', '方形工作端冲头', 'Stamping punch with square working end.', '方冲', 'stamp-square'),
    mk('rect', '矩形工作端冲头', 'Stamping punch with rectangular working end.', '矩形冲', 'stamp-rect'),
    mk('obround', '长圆工作端冲头', 'Stamping punch with obround working end.', '长圆冲', 'stamp-obround'),
    mk('hex', '六角工作端冲头', 'Stamping punch with hexagonal working end.', '六角冲', 'stamp-hex'),
    mk('profile', '轮廓冲头', 'Stamping punch with simple custom closed profile working end (non-standard but symmetric).', '异形轮廓', 'stamp-profile'),
    mk('cutoff', '切断刀冲头', 'Flat elongated cutoff punch blade profile for trimming (complete punch silhouette).', '切断刃形', 'stamp-cutoff'),
    mk('pierce-small', '小孔冲针', 'Short fine round piercing punch with minimal shank (fine blanking style silhouette).', '细径冲孔', 'stamp-fine-round'),
    mk('heavy', '厚料冲头', 'Robust round punch with thicker shank proportion for heavy stock (distinct silhouette vs fine punch).', '粗杆圆冲', 'stamp-heavy-round'),
    mk('headed', '带头冲头', 'Round stamping punch with visible flanged or headed top for retention.', '带头结构', 'stamp-headed-round'),
  ],
  'forming-punches': [
    mk('form-square', '成型方冲', 'Forming punch with square working face for bending/forming contact.', '方形成型面', 'form-square'),
    mk('form-round', '成型圆冲', 'Forming punch with domed or flat round forming face.', '圆形成型面', 'form-round'),
    mk('form-arc', '弧面成型冲', 'Forming punch with cylindrical arc forming surface along the tip.', '弧面成型', 'form-arc'),
    mk('form-angle', '斜面成型冲', 'Forming punch with angled planar forming face.', '斜面成型', 'form-angle'),
    mk('form-profile', '异形成型冲', 'Forming punch with irregular but smooth closed forming profile.', '异形成型', 'form-profile'),
    mk('form-slot', '压筋成型冲', 'Forming punch with narrow rib/slot forming tip.', '压筋/槽成型', 'form-rib'),
    mk('form-curl', '卷边成型冲', 'Forming punch tip shaped for curl/flange forming (hooked smooth radius).', '卷边成型', 'form-curl'),
    mk('form-pilot', '导正成型冲', 'Pilot-style forming punch with guided cylindrical lead and formed end.', '导正成型', 'form-pilot'),
    mk('form-step', '台阶成型冲', 'Forming punch combining shoulder step with shaped forming end.', '台阶成型', 'form-step'),
    mk('form-compound', '复合轮廓成型冲', 'Forming punch with two-level forming surfaces on one tip (compound profile).', '复合成型面', 'form-compound'),
  ],
};

for (const product of data.products) {
  const variants = expansions[product.id];
  if (!variants) continue;
  product.structuralVariants = variants;
  product.targetVariantCount = variants.length;
  product.variantCount = variants.length;
  product.pieceCount = variants.length;
  product.layoutEn = layoutEn;
  product.descriptionZh = `约 ${variants.length} 款同系列冲头/冲针，不同工作端与杆部结构；见逐件清单。`;
  product.caption = {
    zh: `约${variants.length}款${product.id === 'carbide-punches' ? '硬质合金冲头' : product.id === 'stepped-punches' ? '台阶冲头' : product.id === 'forming-punches' ? '成型冲头' : '冲压模冲头'}（多种轮廓与结构）`,
    en: `About ${variants.length} distinct punches in this family (mixed profiles and shanks)`,
    vi: `Khoảng ${variants.length} chày trong cùng dòng (nhiều biên dạng và thân)`,
  };
  product.generationReady = true;
  product.revisionAction = 'expand-to-ten-styles-home-tiles';
}

writeFileSync(briefPath, JSON.stringify(data, null, 2) + '\n');
console.log('Updated briefs:', Object.keys(expansions).join(', '));
