import type {LocalizedText} from './catalog';
import data from './catalog.json';

/** Describes the visible structures in the current family image, not every available option. */
const legacyVisuals:Record<string,LocalizedText>={
 'carbide-punches':{zh:'圆形、缩径与方形工作端',en:'Round, reduced and square working ends',vi:'Đầu tròn, giảm đường kính và vuông'},
 'hss-punches':{zh:'带头圆冲与缩径工作端',en:'Headed round punches with reduced tips',vi:'Chày tròn có mũ và đầu giảm đường kính'},
 'stepped-punches':{zh:'不同杆径与台阶组合',en:'Shank diameters and stepped designs',vi:'Đường kính thân và kết cấu bậc'},
 'stamping-die-punches':{zh:'圆形、矩形与长圆冲裁端',en:'Round, rectangular and obround cutting ends',vi:'Đầu cắt tròn, chữ nhật và thuôn'},
 'tungsten-carbide-punches':{zh:'钨钢直身 · 台阶 · 精密 · 涂层系列',en:'Straight, stepped, precision and coated tungsten carbide punches',vi:'Chày hợp kim thẳng, bậc, chính xác và có lớp phủ'},
 'tableting-punches':{zh:'上冲、下冲与中模组合',en:'Upper punch, lower punch and die set',vi:'Bộ chày trên, chày dưới và cối'},
};

/** Publication updates the image and its caption together; drafts never label an old image. */
export const catalogVisuals:Record<string,LocalizedText> = {...legacyVisuals};
for (const product of data.products) {
  const caption = (product as typeof product & {imageCaption?:LocalizedText}).imageCaption;
  if (!caption) continue;
  const zh = caption.zh?.trim() ?? '';
  if (/HTX/i.test(zh)) continue;
  catalogVisuals[product.id] = caption;
}
