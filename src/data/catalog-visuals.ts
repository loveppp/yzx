import type {LocalizedText} from './catalog';

/** Describes the visible structures in the current family image, not every available option. */
export const catalogVisuals:Record<string,LocalizedText>={
 'carbide-punches':{zh:'圆形、缩径与方形工作端',en:'Round, reduced and square working ends',vi:'Đầu tròn, giảm đường kính và vuông'},
 'hss-punches':{zh:'带头圆冲与缩径工作端',en:'Headed round punches with reduced tips',vi:'Chày tròn có mũ và đầu giảm đường kính'},
 'stepped-punches':{zh:'不同杆径与台阶组合',en:'Shank diameters and stepped designs',vi:'Đường kính thân và kết cấu bậc'},
 'stamping-die-punches':{zh:'圆形、矩形与长圆冲裁端',en:'Round, rectangular and obround cutting ends',vi:'Đầu cắt tròn, chữ nhật và thuôn'},
 'forming-punches':{zh:'非圆工作端组合 · 成型轮廓另按图定制',en:'Non-round cutting profiles · forming contours made to drawing',vi:'Đầu cắt không tròn · biên dạng tạo hình theo bản vẽ'},
 'a-type-punches':{zh:'单台阶、多级阶梯与锥肩缩径款式',en:'Single-step, multi-stage and tapered-shoulder styles',vi:'Kiểu một bậc, nhiều bậc và vai côn'},
 'tableting-punches':{zh:'上冲、下冲与中模组合',en:'Upper punch, lower punch and die set',vi:'Bộ chày trên, chày dưới và cối'},
};
