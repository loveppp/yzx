import type {Locale} from '@/i18n/locales';
const text = (zh:string,en:string,vi:string) => ({zh,en,vi});
export const punchCopy = {
  eyebrow:text('主营产品 · 精密冲头冲针','CORE RANGE · PRECISION PUNCHES','SẢN PHẨM CHỦ LỰC · CHÀY CHÍNH XÁC'),
  title:text('从圆冲到复杂异形，按工况与图纸选型','From round punches to custom working profiles','Từ chày tròn đến biên dạng theo bản vẽ'),
  intro:text('硬质合金、高速钢与工具钢冲头，覆盖直身、台阶、异形及成型结构。按材料、工作端轮廓和安装方式逐步确定方案。','Carbide, high-speed steel and tool-steel punches with straight, stepped, profiled and forming geometries. Define the material, working profile and mounting interface together.','Chày hợp kim cứng, thép gió và thép dụng cụ với thân thẳng, thân bậc và đầu tạo hình. Xác định vật liệu, biên dạng và kiểu lắp theo điều kiện làm việc.'),
  view:text('进入冲头冲针专区','Explore the punch range','Khám phá dòng chày'),
  browse:text('按材质与用途浏览','Browse materials & applications','Chọn theo vật liệu & ứng dụng'),
  profiles:text('按工作端形状选型','Select a working profile','Chọn biên dạng đầu làm việc'),
  structures:text('再确定杆部与安装结构','Define the shank & mounting geometry','Xác định thân & kiểu lắp'),
  note:text('同一形状可以采用不同材质和安装结构；下列是选型方向，不是固定库存型号。','One profile can use different materials and mounting geometries. These are selection options, not fixed stock models.','Một biên dạng có thể dùng nhiều vật liệu và kiểu lắp. Đây là hướng lựa chọn, không phải mã hàng tồn kho cố định.'),
  imageNote:text('产品系列展示 · 支持按图定制','Product range · Made to your drawing','Dòng sản phẩm · Gia công theo bản vẽ'),
  shapeNote:text('工作端轮廓示意 · 非尺寸图','Working-profile diagrams · not dimensioned drawings','Sơ đồ biên dạng · không phải bản vẽ kích thước'),
  specify:text('询价时需说明','What to specify','Thông tin cần cung cấp'),
  configure:text('按此结构询价','Inquire about this geometry','Hỏi về hình học này'),
  materialTitle:text('先选择材质路线','Start with the material','Bắt đầu từ vật liệu'),
  familyTitle:text('系列与专用工艺','Families & specialist tooling','Dòng sản phẩm & dụng cụ chuyên dụng'),
  carbideTitle:text('硬质合金冲头，不止一种圆冲','Carbide punches beyond a single round profile','Chày hợp kim cứng với nhiều biên dạng'),
  carbideIntro:text('圆形、矩形、六角及异形工作端，可结合直身、台阶和偏置结构。整体硬质合金或镶合金方案，需要同时考虑刃口支撑、冲裁材料与装配方式。','Round, rectangular, hexagonal and custom profiles can be combined with straight, stepped or offset constructions. Solid-carbide and carbide-tipped designs require joint review of edge support, workpiece material and mounting.','Đầu tròn, chữ nhật, lục giác hoặc tùy chỉnh có thể kết hợp với thân thẳng, bậc hoặc lệch tâm. Cần đánh giá độ đỡ lưỡi cắt, vật liệu phôi và kiểu lắp.'),
  materials:[
    {id:'carbide-punches',label:text('硬质合金 / 钨钢','Carbide / tungsten carbide','Hợp kim cứng'),desc:text('针对耐磨需求，结合崩刃风险与刃口支撑选择牌号及结构。','Select the grade and geometry for wear demands, edge support and chipping risk.','Chọn mác và hình học theo độ mòn, độ đỡ và nguy cơ mẻ cạnh.')},
    {id:'hss-punches',label:text('高速钢 / 粉末高速钢','HSS / powder HSS','Thép gió / thép gió bột'),desc:text('结合冲裁材料、冲击与修磨需求，在耐磨性和韧性之间匹配。','Balance wear resistance, toughness and resharpening needs for the cutting duty.','Cân bằng độ chịu mòn, độ dai và nhu cầu mài lại theo công việc.')},
    {id:'stamping-die-punches',label:text('工具钢冲裁件','Tool-steel cutting punches','Chày cắt bằng thép dụng cụ'),desc:text('常规冲孔、落料和修边，按轮廓、间隙与安装结构确定方案。','Specify the profile, die clearance and mounting for piercing, blanking and trimming.','Xác định biên dạng, khe hở và kiểu lắp cho đột lỗ, cắt phôi và cắt mép.')},
  ],
};
export const punchProfiles = [
 {id:'round',name:text('圆形工作端','Round profile','Đầu tròn'),desc:text('用于圆孔冲裁，直身或缩径结构按支撑条件确定。','For round-hole piercing; select a straight or reduced tip for the support conditions.','Đột lỗ tròn; chọn đầu thẳng hoặc giảm đường kính theo độ đỡ.'),spec:text('工作直径、有效长度、冲裁间隙','Working diameter, effective length, die clearance','Đường kính làm việc, chiều dài, khe hở')},
 {id:'square',name:text('方形工作端','Square profile','Đầu vuông'),desc:text('用于方孔与方形轮廓，需明确角部形式和安装方向。','For square openings; define corner form and orientation.','Dùng cho lỗ vuông; xác định dạng góc và hướng lắp.'),spec:text('边长、角部圆角、方向基准','Side length, corner radii, orientation datum','Cạnh, bán kính góc, chuẩn hướng')},
 {id:'rectangular',name:text('矩形 / 扁形工作端','Rectangular / flat profile','Đầu chữ nhật / dẹt'),desc:text('用于矩形孔与狭长槽口，薄弱方向的支撑需要单独核对。','For rectangular openings and narrow slots; check support across the thin section.','Cho lỗ chữ nhật và rãnh hẹp; kiểm tra độ đỡ theo chiều mỏng.'),spec:text('宽度、厚度、刃口长度、圆角','Width, thickness, cutting length, radii','Chiều rộng, chiều dày, chiều dài cắt, bán kính')},
 {id:'oblong',name:text('椭圆 / 长圆工作端','Oval / obround profile','Đầu ôvan / thuôn'),desc:text('椭圆与两端半圆的长圆并不相同，需以轮廓图确认。','An ellipse differs from a straight-sided obround; confirm the actual contour.','Ôvan khác với dạng hai đầu bán tròn; cần xác nhận biên dạng.'),spec:text('总长、总宽、端部半径或轮廓文件','Overall length, width, end radii or profile file','Chiều dài, rộng, bán kính đầu hoặc tệp biên dạng')},
 {id:'hexagonal',name:text('六角工作端','Hexagonal profile','Đầu lục giác'),desc:text('用于六角孔型，关注对边尺寸、角部及防转定位。','For hexagonal openings; define across-flats size, corners and rotational location.','Cho lỗ lục giác; xác định khoảng cách hai mặt, góc và định vị chống xoay.'),spec:text('对边尺寸、角部形式、安装方向','Across-flats size, corner form, orientation','Kích thước hai mặt đối diện, dạng góc, hướng lắp')},
 {id:'custom',name:text('异形 / 曲面成型端','Custom / forming profile','Đầu tùy chỉnh / tạo hình'),desc:text('非规则轮廓、斜面或成型曲面，按二维图或三维模型核对。','Irregular contours, angled faces and forming surfaces defined by 2D or 3D data.','Biên dạng bất quy tắc, mặt nghiêng và mặt tạo hình theo dữ liệu 2D/3D.'),spec:text('轮廓文件、方向基准、配套凹模','Profile file, orientation datum, mating die','Tệp biên dạng, chuẩn hướng, cối ghép')},
];
export const punchStructures = [
 {id:'straight',name:text('直身与带头直冲','Straight / headed punches','Chày thân thẳng / có đầu'),desc:text('T 型单肩冲针：正常安装头连接等径直身杆部；具体尺寸按参考系列或图纸确认。','Type T single-shoulder punches join a normally proportioned head to a constant-diameter shank; confirm dimensions against the reference series or drawing.','Chày T một vai nối mũ cân đối với thân có đường kính không đổi; xác nhận kích thước theo dòng hoặc bản vẽ.')},
 {id:'stepped',name:text('单台阶 / 缩径工作端','Single shoulder / reduced tip','Một bậc / đầu giảm đường kính'),desc:text('A 型等台阶冲针由较粗杆部支撑较细工作端，需明确台阶长度、过渡圆角和悬伸。','Stepped punches such as Type A use a larger shank to support a smaller tip; define shoulder length, transition radius and unsupported length.','Thân lớn đỡ đầu nhỏ; xác định chiều dài bậc, bán kính và chiều dài tự do.')},
 {id:'multi-step',name:text('多级台阶结构','Multi-step construction','Kết cấu nhiều bậc'),desc:text('多段直径服务于安装和工作要求，各段尺寸与同轴关系需一并确定。','Multiple diameters meet mounting and working needs; specify every section and their coaxial relationship.','Nhiều đường kính đáp ứng lắp đặt và làm việc; xác định từng đoạn và độ đồng trục.')},
 {id:'offset',name:text('偏置 / 偏心结构','Offset construction','Kết cấu lệch tâm'),desc:text('工作端相对杆部轴线偏置，需明确偏置量、方向及防转方式。','The working tip is offset from the shank axis; define the offset, direction and anti-rotation method.','Đầu làm việc lệch trục thân; xác định độ lệch, hướng và cách chống xoay.')},
];
export const punchText = (value:Record<Locale,string>,locale:Locale)=>value[locale];
