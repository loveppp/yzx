import {detailText as l} from './catalog-details';
import type {LocalizedText,CatalogProduct} from './catalog';

export const materialGuidance:Record<string,LocalizedText>={
'Tungsten carbide':l('耐磨需求较高时可评估；牌号、结合相与刃口支撑一起决定抗崩刃表现，不能仅凭硬度选料。|Consider for demanding wear conditions; grade, binder and edge support influence chipping resistance, so hardness alone is insufficient.|Cân nhắc khi mài mòn cao; mác, chất kết dính và đỡ lưỡi ảnh hưởng sứt cạnh, không chỉ độ cứng.'),
'SKH51':l('高速钢选项，结合耐磨、韧性与热处理状态确认；替代牌号需按标准核对。|An HSS option; balance wear, toughness and heat treatment, and verify standards before substitution.|Lựa chọn HSS; cân bằng mòn, độ dai và nhiệt luyện, đối chiếu tiêu chuẩn khi thay.'),
'M2':l('常规高速钢选项，按冲裁负荷、刃口磨损与热处理要求评估。|A conventional HSS option assessed against cutting load, edge wear and heat treatment.|HSS thông thường, đánh giá theo tải cắt, mòn lưỡi và nhiệt luyện.'),
'ASP23':l('粉末高速钢选项；结合刃口尺寸、磨损形式与重磨要求确认具体供料标准。|A powder HSS option; confirm supply specification for edge size, wear mode and regrinding.|Lựa chọn HSS bột; xác nhận quy cách theo kích thước lưỡi, dạng mòn và mài lại.'),
'ASP30':l('粉末高速钢选项，适用性需结合冲裁材料、热处理与抗崩刃需求评估。|A powder HSS option evaluated for the work material, heat treatment and chipping resistance.|Lựa chọn HSS bột, đánh giá theo phôi, nhiệt luyện và chống sứt.'),
'ASP60':l('用于评估较高耐磨需求的粉末高速钢选项，仍需兼顾薄刃与冲击工况。|A powder HSS option for high wear demands, with additional review for thin edges and impact.|HSS bột cho yêu cầu chống mòn cao, vẫn cần xét lưỡi mỏng và va đập.'),
'SKD11':l('冷作工具钢选项，关注耐磨与热处理后的尺寸稳定性；复杂薄刃需校核韧性。|A cold-work tool steel option; review wear and heat-treatment stability, and toughness for thin profiles.|Thép khuôn nguội; xét mòn và ổn định sau nhiệt luyện, độ dai cho biên dạng mỏng.'),
'D2':l('冷作工具钢选项，按材料标准、热处理状态和实际受力确认，不仅比较牌号近似性。|A cold-work steel option; verify the material standard, heat treatment and load rather than assuming grade equivalence.|Thép khuôn nguội; kiểm tra tiêu chuẩn, nhiệt luyện và tải, không mặc định tương đương mác.'),
'DC53':l('冷作工具钢选项，按刃口形状、韧性和尺寸保持要求评估热处理方案。|A cold-work steel option; select heat treatment for edge geometry, toughness and dimensional stability.|Thép khuôn nguội; chọn nhiệt luyện theo hình lưỡi, độ dai và ổn định kích thước.'),
'Cr12MoV':l('冷作模具钢选项，按工作面磨损、截面与热处理要求确认。|A cold-work die steel option specified for wear, section size and heat treatment.|Thép khuôn nguội, xác định theo mòn, tiết diện và nhiệt luyện.'),
'SKD61':l('热作工具钢选项，适合结合模温和韧性进行评估；氮化需单独指定。|A hot-work steel option assessed for mold temperature and toughness; specify nitriding separately.|Thép khuôn nóng, xét theo nhiệt khuôn và độ dai; quy định thấm nitơ riêng.'),
'H13':l('热作工具钢选项，核对对应材料标准、热处理与热循环工况。|A hot-work steel option; verify the material standard, heat treatment and thermal cycling.|Thép khuôn nóng; kiểm tra tiêu chuẩn, nhiệt luyện và chu kỳ nhiệt.'),
'SUJ2':l('轴承钢选项，用于评估硬化导向表面的耐磨与精磨需求。|A bearing steel option for hardened guide surfaces and precision grinding.|Thép ổ bi cho mặt dẫn cứng và mài chính xác.'),
'20Cr':l('合金钢选项，需明确表层硬化路线及芯部要求，不能直接套用整体淬硬参数。|An alloy steel option; specify surface-hardening route and core requirements separately from through-hardening.|Thép hợp kim; xác định cứng hóa bề mặt và yêu cầu lõi, khác tôi toàn bộ.'),
'Bearing steel':l('用于评估硬化耐磨面，材料牌号、硬度与配套件表面状态共同确认。|For hardened wear surfaces; agree grade and hardness with the mating surface condition.|Cho mặt chống mòn cứng; xác nhận mác và độ cứng cùng mặt chi tiết ghép.'),
'Tool steel':l('根据磨损、受力、温度和耐腐蚀需求进一步选定牌号及热处理；不是一个固定钢号。|Specify grade and heat treatment for wear, load, temperature and corrosion; tool steel is a family, not a single grade.|Chọn mác và nhiệt luyện theo mòn, tải, nhiệt và ăn mòn; thép dụng cụ là nhóm, không phải một mác.'),
'Stainless steel':l('在耐腐蚀或清洁要求较高时评估，具体牌号和硬化能力仍需确认。|Consider for corrosion or cleaning demands; confirm the exact grade and hardening capability.|Cân nhắc chống ăn mòn hoặc vệ sinh; xác nhận mác và khả năng hóa cứng.'),
'Alloy steel':l('按强度、韧性、螺纹或配合面要求选择具体牌号与处理状态。|Choose a grade and condition for strength, toughness, threads and fit surfaces.|Chọn mác và trạng thái theo bền, dai, ren và mặt lắp.'),
'Steel':l('根据安装受力与使用环境确认具体钢号、防锈及尺寸要求。|Specify grade, corrosion protection and dimensions for installation loads and environment.|Chọn mác, chống gỉ và kích thước theo tải lắp và môi trường.'),
'Spring steel':l('材料与弹簧系列一起确认，以对应的力—行程曲线和允许压缩量为选型依据。|Confirm material with the spring series; use its force–travel curve and compression limit for selection.|Xác nhận vật liệu với dòng lò xo; chọn theo đường lực–hành trình và giới hạn nén.'),
'Per selected model':l('内部材料、密封和表面处理按选定型号确认，不把外壳材料当作整件性能依据。|Internal materials, seals and finishes follow the selected model; housing material alone does not define performance.|Vật liệu trong, phớt và xử lý theo model; vật liệu vỏ không quyết định toàn bộ hiệu năng.'),
'Brass':l('保持架用黄铜按温度、运动质量与钢球保持结构评估；钢球材料另行指定。|Assess cage brass for temperature, moving mass and ball retention; specify ball material separately.|Đánh giá đồng thau lồng theo nhiệt, khối lượng động và giữ bi; chọn vật liệu bi riêng.'),
'Aluminum':l('轻量化架体选项，需确认合金、球窝强度及运行环境。|A lightweight cage option; confirm alloy, pocket strength and operating environment.|Lựa chọn lồng nhẹ; xác nhận hợp kim, bền ổ bi và môi trường.'),
'Engineering polymer':l('按温度、润滑剂相容性与尺寸稳定性选择具体树脂，不笼统承诺耐热范围。|Select resin for temperature, lubricant compatibility and stability; avoid a generic temperature rating.|Chọn nhựa theo nhiệt, tương thích dầu và ổn định; không dùng mức nhiệt chung.'),
'Bronze':l('铜合金滑动材料，按负载、速度及配套轴选择牌号，并明确供油或固体润滑。|A sliding-bearing material; select grade for load, speed and shaft, and define oil or solid lubrication.|Vật liệu bạc trượt; chọn mác theo tải, tốc độ và trục, xác định dầu hoặc bôi trơn rắn.'),
'Copper alloy':l('具体合金需结合承载、摩擦副和加工形式确认，不能只按颜色判断材料。|Confirm the alloy for load, mating surfaces and manufacture; color does not identify the grade.|Xác nhận hợp kim theo tải, mặt ghép và gia công; màu không xác định mác.'),
'Copper alloy with solid lubricant':l('基体和固体润滑剂共同选型，需核对负载、速度、温度及工作面布点。|Select matrix and solid lubricant together for load, speed, temperature and plug layout.|Chọn nền và chất bôi trơn cùng tải, tốc độ, nhiệt và bố trí nút.'),
};
const scenarios:Record<string,string>={
'carbide-punches':'连接器端子、电子五金及精密板材冲裁：连续生产中刃口磨损成为主要问题时，评估硬质合金及工作端支撑。|Connector terminals, electronic hardware and precision sheet piercing: evaluate carbide and tip support when edge wear limits repeated production.|Chân đầu nối, linh kiện điện tử và đột tấm chính xác: xét carbide và đỡ đầu khi mòn lưỡi giới hạn sản xuất.',
'hss-punches':'五金件与汽车冲压件的连续模：当磨损与间歇冲击并存时，比较高速钢牌号和工作端结构。|Progressive dies for hardware and automotive stampings: compare HSS grades and tip geometry when wear and intermittent impact coexist.|Khuôn liên hoàn linh kiện và ô tô: so mác HSS và đầu khi đồng thời có mòn và va đập.',
'stepped-punches':'电子端子与小孔冲裁工位：细小工作端需要更粗支撑杆，或安装板位要求多段直径时使用。|Electronic terminals and small-hole stations: for reduced tips needing a larger support body or several plate-fit diameters.|Đầu nối và trạm lỗ nhỏ: đầu nhỏ cần thân đỡ lớn hoặc nhiều đường kính lắp tấm.',
'stamping-die-punches':'汽车钣金、金属外壳与五金件：按冲孔、修边或切断工位替换冲头，同时核对原凹模间隙。|Automotive sheet metal, metal housings and hardware: replace piercing, trimming or cut-off punches while checking the existing die clearance.|Tấm ô tô, vỏ kim loại và cơ khí: thay chày đột, sửa mép hoặc cắt, kiểm tra khe hở cối cũ.',
'tungsten-carbide-punches':'高硬度钨钢冲头用于精密冲裁与耐磨工位：按直身、台阶、精密或涂层系列确认工作端与安装接口。|Tungsten carbide punches for precision piercing and wear-critical stations: confirm tip and mounting by straight, stepped, precision or coated series.|Chày hợp kim cứng cho đột chính xác và chịu mòn: xác nhận đầu và lắp theo dòng thẳng, bậc, chính xác hoặc phủ.',
'tableting-punches':'制药、营养品及工业粉末压片工装：按粉料、片型和压机接口定义成套工具，相关材料与清洁要求另行确认。|Pharmaceutical, nutraceutical and industrial powder tooling: define the set by powder, tablet shape and press interface, with material and cleaning requirements separately agreed.|Dụng cụ nén bột dược, dinh dưỡng và công nghiệp: xác định bộ theo bột, hình viên và máy; thống nhất vật liệu và vệ sinh.',
'straight-ejector-pins':'家电外壳、汽车内饰及普通注塑件：在允许圆形顶出痕迹的位置分布顶出力，并检查长杆导向。|Appliance housings, automotive trim and molded parts: distribute ejection where round witness marks are acceptable and check long-pin guidance.|Vỏ gia dụng, nội thất ô tô và nhựa: phân bố lực tại nơi cho phép dấu tròn, kiểm tra dẫn ty dài.',
'shoulder-ejector-pins':'多板模与需要明确轴向定位的顶出机构：通过肩部配合固定位置，同时检查顶针板空间。|Multi-plate molds and axially located ejectors: use the shoulder to establish position while checking ejector-plate space.|Khuôn nhiều tấm và hệ đẩy cần định vị trục: dùng vai định vị, kiểm tra không gian tấm đẩy.',
'stepped-ejector-pins':'小柱位与局部薄壁注塑件：接触面受限而后部空间允许粗杆支撑时，采用缩径顶出段。|Small bosses and locally thin moldings: use a reduced tip where contact is limited but a larger supporting shaft fits behind it.|Trụ nhỏ và nhựa mỏng cục bộ: dùng đầu nhỏ khi tiếp xúc hạn chế nhưng đủ chỗ thân lớn phía sau.',
'blade-ejector-pins':'连接器、电子外壳与深窄筋位：圆顶针难以布置时，用扁位接触面沿筋方向顶出。|Connectors, electronic housings and narrow ribs: use a blade along the rib where round ejectors cannot fit.|Đầu nối, vỏ điện tử và gân hẹp: dùng đầu dẹt dọc gân khi ty tròn không vừa.',
'square-ejector-pins':'方柱、非圆支撑面与定向顶出位置：使用方形接触面，同时由安装结构维持方向。|Square bosses, non-round supports and oriented ejection sites: use a square face with orientation retained by the mounting.|Trụ vuông, mặt đỡ không tròn và đẩy định hướng: dùng mặt vuông, giữ hướng bằng kết cấu lắp.',
'ejector-sleeves':'管状注塑件、螺丝柱与环形筋位：围绕芯针均匀顶出，避免将全部载荷集中在单个顶针点。|Tubular moldings, screw bosses and annular ribs: eject around the core rather than concentrating load at one pin contact.|Chi tiết ống, trụ vít và gân vành: đẩy quanh lõi thay vì tập trung lực tại một điểm ty.',
'air-poppet-valves':'深腔容器、薄壁壳体与大面积贴模面：脱模时引入空气辅助解除真空吸附，配合机械顶出。|Deep containers, thin shells and broad cavity contact: admit air during release to relieve vacuum alongside mechanical ejection.|Hộp sâu, vỏ mỏng và tiếp xúc lớn: cấp khí khi tháo để giảm chân không cùng đẩy cơ khí.',
'guide-posts':'注塑模、冲压模与卸料板：按各运动板的开合方向和行程布置导向，检查偏载和配套导套。|Injection molds, stamping dies and strippers: arrange guides for each plate motion and check side loads and mating bushings.|Khuôn nhựa, dập và tấm gạt: bố trí dẫn theo chuyển động từng tấm, kiểm tra lệch tải và bạc.',
'guide-bushings':'模架和顶出板的可更换导向位置：将磨损集中在可维护的配合件，同时明确润滑路径。|Replaceable guides in mold bases and ejector plates: provide serviceable wear surfaces and a defined lubrication path.|Dẫn thay được ở đế khuôn và tấm đẩy: tạo mặt mòn bảo trì được và đường dầu rõ ràng.',
'flanged-guide-bushings':'需要轴向保持或便于维护的导向孔位：法兰或肩部固定导套，避免仅靠外圆配合确定深度。|Guide positions needing axial retention or service access: a flange or shoulder establishes position and retention.|Vị trí dẫn cần giữ trục hoặc bảo trì: bích hay vai xác định vị trí và giữ.',
'guide-sets':'新模架装配或整套导向副更换：同时匹配安装孔、导柱和导套，减少分开选配产生的接口冲突。|New mold-base assemblies or complete guide replacements: match bores, posts and bushings together to avoid interface conflicts.|Lắp đế mới hoặc thay cả bộ: khớp lỗ, trụ và bạc cùng nhau để tránh xung đột giao diện.',
'ball-cages':'重复往复的滚珠导向模具：按保持架往复运动、行程和温度，比较黄铜、铝和工程塑料。|Reciprocating ball-guided dies: compare brass, aluminum and polymers for cage motion, stroke and temperature.|Khuôn dẫn bi qua lại: so đồng thau, nhôm và nhựa theo chuyển động lồng, hành trình và nhiệt.',
'ball-bearing-bushings':'需要降低滑动摩擦的导向机构：配合导柱与滚动元件选型，并核对污染防护和润滑。|Guides needing reduced sliding friction: select posts and rolling elements together and check contamination protection and lubrication.|Cơ cấu cần giảm ma sát trượt: chọn trụ cùng bi, kiểm tra chống bẩn và bôi trơn.',
'rectangular-die-springs':'卸料板、压料机构及模具复位：先计算安装预压和工作压缩量，再确定相应载荷系列。|Strippers, pressure pads and mold returns: establish installed preload and working compression before choosing the load series.|Tấm gạt, ép phôi và hồi khuôn: xác định nén trước và nén làm việc trước khi chọn dòng tải.',
'nitrogen-gas-springs':'冲压压料与紧凑复位机构：当力和空间要求指向气弹簧时，按额定参数与安装条件逐项匹配。|Stamping pressure pads and compact return systems: match rated force, stroke and mounting when space and force favor gas springs.|Ép phôi và hồi gọn: khớp lực định mức, hành trình và lắp khi yêu cầu phù hợp lò xo khí.',
'sprue-bushings':'冷流道注塑模与特定加热进料方案：核对机台喷嘴球面、模具厚度及主流道衔接。|Cold-runner molds and specified heated-feed designs: check nozzle seating radius, mold thickness and runner transition.|Khuôn kênh nguội và cấp liệu gia nhiệt: kiểm tra bán kính vòi, dày khuôn và nối kênh.',
'locating-rings':'模具在不同注塑机之间换装：先核对机台定位孔与喷嘴中心，再确认圈体外径和伸出高度。|Mold transfers between injection machines: verify locating bore and nozzle center before ring diameter and projection.|Chuyển khuôn giữa máy ép: kiểm tra lỗ định vị và tâm vòi trước đường kính vòng và độ nhô.',
'mold-date-stamps':'汽车塑件、包装件与批次追溯制品：按模腔位置设置生产年月或识别码，并明确换码操作空间。|Automotive moldings, packaging and traceable parts: place date or ID marks per cavity and allow access for code changes.|Nhựa ô tô, bao bì và truy xuất: bố trí dấu ngày hoặc mã theo lòng khuôn, chừa chỗ đổi mã.',
'side-locks':'对合模错位敏感的精密注塑模：在最终闭合阶段辅助定位，和主导柱及热膨胀方向协调。|Precision molds sensitive to mismatch: assist final closing alignment in coordination with main guides and thermal expansion.|Khuôn nhạy lệch đóng: hỗ trợ định vị cuối, phối hợp trụ chính và giãn nhiệt.',
'stopper-bolts':'卸料板、顶出板或分型机构限位：根据最大开距与冲击情况确定承靠和限位长度。|Stripper, ejector or parting mechanisms: define seats and stop length from maximum opening and impact conditions.|Chặn tấm gạt, đẩy hoặc phân khuôn: xác định mặt tựa và dài chặn theo độ mở và va đập.',
'pull-rods':'多板模顺序开模与模板牵引：按机构动作顺序核对连接位置、受拉长度与限位关系。|Sequential opening and plate pulling in multi-plate molds: verify connections, loaded length and stops against the motion sequence.|Mở tuần tự và kéo tấm: kiểm tra nối, dài chịu kéo và chặn theo trình tự.',
'graphite-bronze-bushings':'模具导向、抽芯与补充润滑不便的滑动位置：按负载和行程确认内孔或平面上的润滑点。|Mold guides, core pulls and hard-to-lubricate slides: define lubricant plugs on the bore or flat face for load and travel.|Dẫn khuôn, kéo lõi và trượt khó bôi trơn: xác định nút trên lỗ hay mặt phẳng theo tải và hành trình.',
'bronze-bushings':'有稳定供油条件的机械轴套与模具导向：通过可更换铜套承担滑动接触，并匹配轴表面。|Machine bearings and mold guides with oil supply: use replaceable bronze sliding surfaces matched to the shaft.|Bạc máy và dẫn khuôn có cấp dầu: dùng mặt đồng thay được, khớp mặt trục.',
'flanged-bronze-bushings':'同时需要径向导向与轴向定位的关节或模具组件：区分孔内滑动负载和法兰端面负载。|Joints and mold units needing radial guidance and axial location: separate bore loads from flange thrust loads.|Khớp và cụm khuôn cần dẫn kính và định vị trục: phân tải lỗ với tải dọc trên bích.',
'wear-plates':'模具滑块、斜楔与抽芯滑动面：采用可更换平面耐磨件，并在装配图上标明摩擦副和润滑路径。|Mold slides, wedges and core pulls: use replaceable wear faces and identify the mating pair and lubrication path.|Con trượt, nêm và kéo lõi: dùng mặt mòn thay được, ghi cặp ma sát và đường bôi trơn.',
'precision-dowel-pins':'模具、夹具和机械部件的重复拆装定位：选定固定侧与可拆侧配合，保留合适拆卸方式。|Repeated mold, fixture and machine assembly: define fixed and removable fits and a practical removal method.|Lắp tháo khuôn, đồ gá và máy: chọn phía cố định/tháo được và cách tháo phù hợp.',
'threaded-dowel-pins':'盲孔定位与维护频繁的模具装配：通过拔出螺纹拆卸，同时保持光杆定位面的配合要求。|Blind-hole location and serviced mold assemblies: use extraction threads for removal while preserving the plain locating fit.|Định vị lỗ mù và lắp bảo trì: dùng ren rút để tháo, giữ yêu cầu lắp đoạn trơn.',
'pilot-pins':'连续冲压模的料带导正：前工位已经冲孔，后工位导正销在冲裁前修正送料位置。|Strip alignment in progressive dies: pilots enter holes from an earlier station to correct feed before cutting.|Dẫn băng khuôn liên hoàn: chốt vào lỗ đột trước để chỉnh cấp trước cắt.',
'floating-pins':'连续模中的送料支撑与浮料：模具打开时抬升料带，使其避开下模局部结构并进入下一工位。|Strip support in progressive dies: lift the strip during opening to clear lower-die features for the next feed.|Đỡ băng khuôn liên hoàn: nâng khi mở để vượt chi tiết khuôn dưới và cấp tới trạm sau.',
};
const questions:Record<string,string>={
'carbide-punches':'硬质合金冲头和钨钢冲头要分开选吗？|Are carbide and tungsten carbide separate families?|Carbide và hợp kim cứng có là hai dòng riêng không?',
'hss-punches':'选高速钢时先看牌号还是刃口？|Should HSS selection start with grade or geometry?|Chọn HSS bắt đầu từ mác hay hình học?',
'stepped-punches':'只提供总长和刃径能确定台阶冲头吗？|Are overall length and tip diameter enough for a stepped punch?|Tổng dài và đường kính đầu đủ cho chày bậc không?',
'stamping-die-punches':'不同冲压工位能共用同一种冲头吗？|Can different stamping stations use the same punch?|Các trạm dập có dùng chung một chày không?',
'tungsten-carbide-punches':'钨钢冲头的涂层方案如何与基体一起确认？|How are coating options confirmed with the carbide substrate?|Lớp phủ chày hợp kim được xác nhận cùng nền như thế nào?',
'tableting-punches':'压片冲模可以仅按外观配套吗？|Can tablet tooling be matched by appearance?|Có thể ghép dụng cụ dập viên theo hình dáng không?',
'straight-ejector-pins':'SKD61 顶针与氮化顶针是两种结构吗？|Are SKD61 and nitrided pins different structures?|Ty SKD61 và ty thấm nitơ có khác kết cấu không?',
'shoulder-ejector-pins':'带肩顶针的肩部主要起什么作用？|What does the shoulder do on an ejector pin?|Vai ty đẩy có chức năng gì?',
'stepped-ejector-pins':'带台阶是否一定能提高顶针承载？|Does a step always increase ejector capacity?|Bậc luôn tăng khả năng chịu tải ty đẩy không?',
'blade-ejector-pins':'扁顶针是否越薄越适合窄筋？|Is a thinner blade always better for narrow ribs?|Ty dẹt càng mỏng càng tốt cho gân hẹp không?',
'square-ejector-pins':'方形工作端能自动保持方向吗？|Does a square tip automatically retain orientation?|Đầu vuông tự giữ hướng không?',
'ejector-sleeves':'司筒可以不核对芯针单独选吗？|Can a sleeve be selected without checking the core pin?|Có thể chọn ống mà không kiểm tra ty lõi không?',
'air-poppet-valves':'气顶阀能直接替代机械顶出吗？|Can an air poppet replace mechanical ejection?|Van khí thay đẩy cơ khí được không?',
'guide-posts':'导柱是否只按直径匹配即可？|Is diameter enough to select a guide post?|Chỉ đường kính đủ chọn trụ dẫn không?',
'guide-bushings':'滑动导套与滚珠导套能直接互换吗？|Are plain and ball guide bushings interchangeable?|Bạc trượt và bạc bi thay trực tiếp được không?',
'flanged-guide-bushings':'法兰是否决定导套的导向方式？|Does the flange determine the guiding method?|Bích quyết định cách dẫn hướng không?',
'guide-sets':'成套导向需要一起核对哪些关系？|What must be matched in a guide set?|Bộ dẫn cần kiểm tra quan hệ nào?',
'ball-cages':'滚珠保持架和普通铜套有什么区别？|How does a ball cage differ from a plain bronze bushing?|Lồng bi khác bạc đồng trượt thế nào?',
'ball-bearing-bushings':'外径相同就能替换滚珠导套吗？|Does matching outside diameter ensure a ball-bushing replacement?|Cùng đường kính ngoài là thay bạc bi được không?',
'rectangular-die-springs':'同一种颜色的弹簧载荷一定相同吗？|Do springs of the same color always have the same load?|Lò xo cùng màu luôn cùng tải không?',
'nitrogen-gas-springs':'外形相似的气弹簧能直接替换吗？|Are similar-looking gas springs interchangeable?|Lò xo khí giống hình có thay được không?',
'sprue-bushings':'A/B/C 型浇口套的接口是否通用？|Are A/B/C sprue interfaces universal?|Giao diện bạc cuống A/B/C dùng chung không?',
'locating-rings':'定位圈能否替代模具夹紧结构？|Can a locating ring replace mold clamping?|Vòng định vị thay cơ cấu kẹp khuôn không?',
'mold-date-stamps':'日期章按哪一面的读向确定刻字？|Which reading direction defines date-stamp engraving?|Hướng đọc nào quyết định khắc dấu ngày?',
'side-locks':'侧锁能否替代主导柱？|Can side locks replace the main guide posts?|Khóa bên thay trụ dẫn chính không?',
'stopper-bolts':'普通螺栓能直接用作限位螺栓吗？|Can an ordinary bolt substitute for a stopper bolt?|Bu lông thường thay bu lông chặn không?',
'pull-rods':'拉杆只确认螺纹和总长就够吗？|Are thread and overall length enough for a pull rod?|Ren và tổng dài đủ cho thanh kéo không?',
'graphite-bronze-bushings':'石墨铜套与含油烧结轴套相同吗？|Are graphite bushings the same as oil-impregnated bearings?|Bạc graphite giống bạc thiêu kết ngậm dầu không?',
'bronze-bushings':'普通铜套是否自带自润滑能力？|Is a plain bronze bushing inherently self-lubricating?|Bạc đồng thường tự bôi trơn không?',
'flanged-bronze-bushings':'法兰铜套需要同时核对哪些载荷？|Which loads matter for a flanged bronze bushing?|Bạc đồng bích cần kiểm tra tải nào?',
'wear-plates':'耐磨板只按长宽厚选型可以吗？|Are length, width and thickness enough for a wear plate?|Dài, rộng, dày đủ chọn tấm mòn không?',
'precision-dowel-pins':'定位销是否同时承担夹紧功能？|Does a dowel pin also provide clamping?|Chốt định vị có kẹp chặt không?',
'threaded-dowel-pins':'螺纹是不是定位销的主要定位面？|Is the thread the main locating surface?|Ren có phải mặt định vị chính không?',
'pilot-pins':'导正销是不是先冲出一个导正孔？|Does a pilot punch the pilot hole?|Chốt dẫn có đột lỗ dẫn không?',
'floating-pins':'浮升销与导正销的作用相同吗？|Do lifter pins and pilots serve the same purpose?|Chốt nâng và dẫn có cùng chức năng không?',
};
export const scenarioFor=(id:string)=>l(scenarios[id]);
export const questionFor=(id:string)=>l(questions[id]);
const s=(name:string,description:string)=>({name:l(name),description:l(description)});
const finishes={
 punch:[
 s('精磨与刃口处理|Precision grinding and edge preparation|Mài chính xác và xử lý lưỡi','按刃口尺寸、粗糙度与角部要求定义精磨及抛光范围；不能将成型圆角照搬到冲裁刃口。|Specify grinding and polishing from tip size, roughness and corner requirements; forming radii do not automatically suit cutting edges.|Xác định mài và đánh bóng theo đầu, nhám và góc; bán kính tạo hình không áp dụng tự động cho lưỡi cắt.'),
 s('PVD 涂层评估|PVD coating assessment|Đánh giá phủ PVD','TiN、TiCN、TiAlN 等需结合基体、被加工材料及工作温度评估；涂层厚度计入成品配合。|Evaluate TiN, TiCN or TiAlN against substrate, work material and temperature; include coating thickness in the finished fit.|Đánh giá TiN, TiCN hoặc TiAlN theo nền, phôi và nhiệt; tính dày phủ vào lắp ghép cuối.'),
 s('重磨与尺寸保持|Regrinding and size control|Mài lại và giữ kích thước','确认可重磨部位、工作长度与涂层去除或重涂要求，避免仅改善外观而改变有效刃口。|Define regrind areas, working length and coating removal or renewal without compromising the cutting geometry.|Xác định vùng mài lại, dài làm việc và bỏ/phủ lại lớp mà không hỏng hình cắt.')],
 ejector:[
 s('滑动面磨削与抛光|Grinding and polishing sliding surfaces|Mài và đánh bóng mặt trượt','分别指定滑动段和塑件接触端的粗糙度，保留头部与防转基准。|Specify roughness separately for sliding sections and part-contact tips while preserving head and orientation datums.|Quy định nhám riêng đoạn trượt và đầu tiếp xúc, giữ chuẩn mũ và hướng.'),
 s('氮化选项|Nitriding option|Tùy chọn thấm nitơ','按所选钢材确认氮化可行性、处理区域和层深，成品直径及薄截面变形须复核。|Confirm suitability, treated areas and case depth for the chosen steel; recheck diameter and thin-section distortion.|Xác nhận phù hợp, vùng và sâu lớp theo thép; kiểm tra đường kính và biến dạng đoạn mỏng.')],
 guide:[
 s('配合面精磨|Precision-ground fits|Mài chính xác mặt lắp','导向面与安装面分别给出公差和粗糙度，装入孔内后的实际配合也要确认。|Specify guide and mounting tolerances separately and check the fit after installation.|Quy định dung sai mặt dẫn/lắp riêng và kiểm tra sau lắp.'),
 s('硬化与表层处理|Hardening and surface treatment|Hóa cứng và xử lý bề mặt','根据材料及滑动或滚动接触形式选择热处理；氮化仅在基体和配套系统适合时评估。|Select heat treatment for material and sliding or rolling contact; consider nitriding only for a compatible substrate and system.|Chọn nhiệt luyện theo vật liệu và tiếp xúc trượt/lăn; chỉ xét thấm nitơ khi nền và hệ phù hợp.')],
 bronze:[
 s('内孔与工作面精加工|Bore and working-face finishing|Gia công lỗ và mặt làm việc','重点控制内孔、平面、法兰端面及油槽的几何关系；粗糙度与配套轴一起确认。|Control bore, flat, flange and groove geometry; agree roughness with the mating shaft.|Kiểm soát lỗ, mặt phẳng, bích và rãnh; xác nhận nhám cùng trục ghép.'),
 s('润滑面处理|Lubrication-surface preparation|Chuẩn bị mặt bôi trơn','油槽或固体润滑点依工作面布置，不用装饰性镀层遮盖摩擦面或石墨润滑点。|Position grooves or solid lubricant at working faces; decorative plating must not obstruct sliding faces or plugs.|Bố trí rãnh hoặc nút tại mặt làm việc; mạ trang trí không được che mặt trượt hoặc nút.')],
 hardware:[
 s('承靠面与配合面精加工|Seat and fit finishing|Gia công mặt tựa và lắp','分别控制安装基准、工作面与螺纹，处理后检查尺寸和装配关系。|Control mounting datums, working faces and threads separately; verify size and assembly after treatment.|Kiểm soát chuẩn lắp, mặt làm việc và ren riêng; kiểm tra kích thước và lắp sau xử lý.'),
 s('防锈与硬化按工况确认|Duty-specific protection and hardening|Bảo vệ và hóa cứng theo điều kiện','防锈处理、发黑或其他表面方案按材料、环境及配合要求确认，不默认全部采用同一涂层。|Agree corrosion protection, black oxide or other finishes for the material, environment and fit rather than prescribing one coating for every part.|Thống nhất chống gỉ, oxy hóa đen hoặc xử lý khác theo vật liệu, môi trường và lắp, không dùng một lớp cho mọi chi tiết.')],
};
const overrides:Record<string,ReturnType<typeof s>[]>={
 'tableting-punches':[
 s('冲面与中模孔抛光|Cup and die-bore polishing|Đánh bóng mặt chày và lỗ cối','保持片型、分割线与刻字边缘，按粉料脱模和清洁要求确定表面状态。|Preserve tablet profile, score lines and engraving; define finish for powder release and cleaning.|Giữ hình viên, rãnh chia và khắc; chọn hoàn thiện theo tháo bột và vệ sinh.'),
 s('防粘与耐磨涂层评估|Anti-sticking and wear coatings|Đánh giá phủ chống dính và mòn','根据粉料性质、清洁介质与材料相容性评估，不以涂层名称代替压片验证或合规文件。|Assess powder, cleaning media and material compatibility; coating names do not replace compression validation or required documentation.|Đánh giá bột, chất vệ sinh và tương thích; tên lớp phủ không thay xác minh nén hoặc hồ sơ yêu cầu.')],
 'air-poppet-valves':[
 s('阀面与滑动配合面|Valve face and sliding fits|Mặt van và lắp trượt','阀面齐平度、导向与复位动作需共同检查，避免打磨改变密封或行程。|Check flushness, guidance and return together; finishing must not alter sealing or travel.|Kiểm tra phẳng mặt, dẫn và hồi cùng nhau; gia công không đổi kín hay hành trình.'),
 s('清洁与防腐蚀|Cleaning and corrosion protection|Vệ sinh và chống ăn mòn','按阀体材质选择清洁或钝化方案，并核对密封件与弹簧的介质相容性。|Choose cleaning or passivation for the body material and verify media compatibility with seals and springs.|Chọn vệ sinh hoặc thụ động hóa theo thân, kiểm tra môi chất với phớt và lò xo.')],
 'ball-cages':[
 s('球窝去毛刺与保持检查|Pocket deburring and retention checks|Tẩy ba via ổ và kiểm tra giữ bi','球窝边缘应平整，处理不得改变钢球保持关系或留有磨料。|Finish pocket edges without changing ball retention or leaving abrasive residue.|Hoàn thiện mép ổ không đổi giữ bi hoặc để lại hạt mài.'),
 s('按架体材料选择表面方案|Material-specific cage finishes|Hoàn thiện theo vật liệu lồng','金属与塑料保持架的处理路线不同，不能默认都氮化、镀层或抛光。|Metal and polymer cages need different processes; nitriding, plating or polishing is not universal.|Lồng kim loại và nhựa cần quy trình khác; không mặc định thấm nitơ, mạ hay đánh bóng.')],
 'rectangular-die-springs':[
 s('系列色标与防护涂装|Series color and protective finish|Màu dòng và sơn bảo vệ','颜色用于选定系列内识别载荷，不能由重新喷色改变弹簧额定能力。|Color identifies load within a selected series; repainting does not change the spring rating.|Màu nhận diện tải trong dòng; sơn lại không đổi định mức.'),
 s('端面与疲劳相关处理|End faces and fatigue-related processing|Mặt đầu và xử lý liên quan mỏi','端面、喷丸等要求应来自所选系列技术规范，避免后加工损伤弹簧表面。|End-face and shot-peening requirements follow the selected series specification; avoid surface damage from later processing.|Yêu cầu mặt đầu và phun bi theo quy cách dòng; tránh hỏng mặt do gia công sau.')],
 'nitrogen-gas-springs':[
 s('按型号保持原表面系统|Preserve the model-specific finish|Giữ hoàn thiện theo model','活塞杆、密封工作面和外壳处理均随型号确认，不自行改变涂层或进行磨削。|Rod, seal-contact and housing finishes follow the model; do not alter coatings or grind them independently.|Mặt ty, tiếp xúc phớt và vỏ theo model; không tự đổi phủ hoặc mài.'),
 s('装配与维护检查|Installation and service checks|Kiểm tra lắp và bảo trì','按供应型号说明核对安装面、污染防护和维护要求，不能通过外观翻新确认性能。|Follow model instructions for mounting faces, contamination protection and service; appearance does not verify performance.|Theo hướng dẫn model về mặt lắp, chống bẩn và bảo trì; bề ngoài không chứng minh hiệu năng.')],
 'sprue-bushings':[
 s('流道孔抛光|Runner-bore polishing|Đánh bóng lỗ kênh','围绕料流和脱料方向控制锥度与粗糙度，不能改变入口、出口及有效长度。|Control taper and roughness for flow and release without changing inlet, outlet or effective length.|Kiểm soát côn và nhám theo dòng và tháo, không đổi lỗ vào/ra hoặc dài hữu hiệu.'),
 s('喷嘴接触面与耐磨方案|Nozzle seat and wear options|Mặt tựa vòi và chống mòn','喷嘴球面、硬化或涂层按树脂、接触条件和基体确认，并复核最终贴合。|Confirm seat radius, hardening or coating for resin, contact and substrate, then check final seating.|Xác nhận bán kính tựa, cứng hóa hoặc phủ theo nhựa, tiếp xúc và nền, rồi kiểm tra khớp cuối.')],
 'mold-date-stamps':[
 s('刻字与成型面精加工|Engraving and molding-face finish|Khắc và gia công mặt tạo hình','字符深度、镜像方向与箭头需逐一校核，避免抛光磨掉可读性。|Check depth, mirrored direction and arrows individually; polishing must preserve legibility.|Kiểm tra sâu, hướng gương và mũi tên; đánh bóng phải giữ rõ chữ.'),
 s('可调部位防腐与配合|Adjustable-part protection and fit|Bảo vệ và lắp phần chỉnh','依据材料选择防腐方案，处理后检查转动、锁定与更换操作。|Choose protection for the material and check rotation, locking and replacement afterward.|Chọn bảo vệ theo vật liệu, kiểm tra xoay, khóa và thay sau xử lý.')],
};
export const finishesFor=(p:CatalogProduct)=>overrides[p.id]??finishes[p.group==='punch-components'?'punch':p.group==='ejector-components'?'ejector':p.group==='guide-components'?'guide':p.group==='bronze-components'?'bronze':'hardware'];
const reasons:Record<string,string>={
'carbide-punches':'当刃口磨损影响连续生产的一致性时，可优先评估硬质合金；圆形与异形工作端可按同一安装接口分别设计。|Consider carbide when edge wear affects consistency in repeated production; round and custom tips can be designed around the required mounting interface.|Cân nhắc carbide khi mòn lưỡi ảnh hưởng tính ổn định; đầu tròn và tùy chỉnh có thể thiết kế theo giao diện lắp yêu cầu.',
'hss-punches':'适合需要同时考虑耐磨、韧性和重磨维护的冲裁任务，便于按被冲材料调整牌号与工作端。|For piercing duties balancing wear, toughness and regrinding, HSS offers grade and tip choices suited to the work material.|Cho đột cần cân bằng mòn, dai và mài lại, HSS có nhiều lựa chọn mác và đầu theo phôi.',
'stepped-punches':'将细小工作端与较粗支撑段组合，便于同时满足孔型、支撑和多板安装需求。|A reduced working tip with a larger support body accommodates hole geometry, stiffness and multi-plate mounting needs.|Đầu nhỏ cùng thân đỡ lớn đáp ứng hình lỗ, độ cứng và lắp nhiều tấm.',
'stamping-die-punches':'围绕实际工位选择冲孔、切断或修边结构，有助于把工作端、凹模间隙和替换接口一起确定。|Choosing for the actual piercing, cut-off or trimming station coordinates the working end, die clearance and replacement interface.|Chọn theo trạm đột, cắt hoặc sửa mép giúp phối hợp đầu, khe hở cối và giao diện thay.',
'tungsten-carbide-punches':'按耐磨、公差与重磨要求选择直身、台阶、精密或涂层系列，并与凹模间隙一起核对。|Select straight, stepped, precision or coated series for wear, tolerance and regrinding, and verify clearance with the die.|Chọn dòng thẳng, bậc, chính xác hoặc phủ theo mòn, dung sai và mài lại, đồng thời kiểm khe hở cối.',
'tableting-punches':'成套核对上下冲与中模，可以把片形、冲面、压机接口和脱模需求放在同一套设计中处理。|Reviewing upper punch, lower punch and die together coordinates tablet shape, cups, press interfaces and release requirements.|Kiểm tra chày trên/dưới cùng cối giúp phối hợp hình viên, mặt chày, giao diện máy và tháo.',
'straight-ejector-pins':'等径圆杆适合常规顶出点的布置，便于结合接触面积、导向孔与顶针板统一选型。|A uniform round shaft suits conventional ejection points and simplifies matching contact area, guide holes and ejector plates.|Thân tròn đều phù hợp điểm đẩy thường, dễ khớp diện tích tiếp xúc, lỗ dẫn và tấm đẩy.',
'shoulder-ejector-pins':'明确的肩部承靠面便于控制轴向安装位置，适合需要独立定位段的顶出结构。|A defined shoulder seat controls axial mounting position where the ejector needs a separate locating section.|Mặt tựa vai rõ kiểm soát vị trí lắp trục khi ty cần đoạn định vị riêng.',
'stepped-ejector-pins':'较小的顶出接触点与较粗杆身可以同时保留，便于利用后方空间支撑细顶出端。|A small contact tip and a larger body preserve local access while using space behind the tip for support.|Đầu tiếp xúc nhỏ và thân lớn giữ khả năng tiếp cận, tận dụng chỗ phía sau để đỡ.',
'blade-ejector-pins':'窄扁工作段可进入圆顶针难以布置的筋位，以适合塑件形状的接触面传递顶出力。|A narrow blade reaches ribs inaccessible to round pins and transfers ejection force through a shape-appropriate face.|Phần dẹt hẹp vào gân ty tròn khó tới và truyền lực qua mặt phù hợp sản phẩm.',
'square-ejector-pins':'方形接触面更容易匹配方柱或非圆支撑区域，可结合防转安装保持一致的顶出方向。|A square face matches square bosses or non-round supports, with keyed mounting maintaining ejection orientation.|Mặt vuông khớp trụ vuông hoặc vùng đỡ không tròn, lắp chống xoay giữ hướng đẩy.',
'ejector-sleeves':'环形顶出面围绕芯针作用于柱位或管状部位，可分散单点顶出带来的局部受力。|An annular face acts around the core on bosses or tubular features, distributing force beyond a single pin contact.|Mặt vành tác động quanh lõi trên trụ hoặc ống, phân bố lực hơn một điểm ty.',
'air-poppet-valves':'在深腔或大面积贴模面上，空气辅助脱模可针对真空吸附原因减轻机械顶出的负担。|On deep cavities or broad contact surfaces, air-assisted release addresses vacuum adhesion alongside mechanical ejection.|Ở lòng sâu hoặc tiếp xúc lớn, khí hỗ trợ tháo xử lý bám chân không cùng đẩy cơ khí.',
'guide-posts':'与导套配套建立明确的直线运动基准，便于不同模板在开合过程中保持预定位置关系。|Matched posts and bushings establish a linear motion datum to maintain the intended plate relationship through opening and closing.|Trụ và bạc đồng bộ tạo chuẩn chuyển động thẳng, giữ quan hệ tấm khi đóng mở.',
'guide-bushings':'可更换导套提供独立的滑动配合面，便于维护导向系统并单独管理磨损和润滑。|A replaceable bushing provides a serviceable sliding surface with independently managed wear and lubrication.|Bạc thay được tạo mặt trượt bảo trì được, quản lý mòn và bôi trơn riêng.',
'flanged-guide-bushings':'法兰或肩部提供直观的轴向定位与固定界面，便于控制安装深度和维护拆装。|A flange or shoulder provides axial location and retention, simplifying depth control and servicing.|Bích hoặc vai định vị và giữ trục, thuận tiện kiểm soát sâu lắp và bảo trì.',
'guide-sets':'将配套件作为总成选型，便于统一配合、行程和安装基准，减少分开订购时的接口遗漏。|Selecting a complete set aligns fits, travel and mounting datums and reduces interface omissions between separately ordered parts.|Chọn cả bộ thống nhất lắp ghép, hành trình và chuẩn, giảm thiếu giao diện khi đặt riêng.',
'ball-cages':'按既有滚珠导向系统选配保持架，可以有针对性地调整架体材料、钢球排布与运动质量。|A cage matched to the ball-guiding system allows targeted choices of body material, ball layout and moving mass.|Lồng khớp hệ dẫn bi cho phép chọn vật liệu thân, bố trí bi và khối lượng chuyển động.',
'ball-bearing-bushings':'适合需要滚动接触导向的机构，便于把导柱、滚动元件和润滑条件一起匹配。|For mechanisms requiring rolling guidance, match the post, rolling elements and lubrication as a coordinated unit.|Cho cơ cấu cần dẫn lăn, khớp trụ, phần tử lăn và bôi trơn thành một hệ.',
'rectangular-die-springs':'在模具安装空间内按载荷曲线选择复位或压料力，多个负荷系列便于匹配不同压缩行程。|Choose return or holding force from a load curve within the mold space, with load series suited to different compression travels.|Chọn lực hồi/giữ theo đường tải trong không gian khuôn, các dòng tải phù hợp hành trình nén khác nhau.',
'nitrogen-gas-springs':'当设计需要在特定空间内获得规定的压料或复位力时，可按初始力和工作行程评估气弹簧方案。|Evaluate gas springs by initial force and stroke when the design requires a specified holding or return force within a defined space.|Đánh giá lò xo khí theo lực đầu và hành trình khi cần lực giữ/hồi trong không gian xác định.',
'sprue-bushings':'通过独立的喷嘴接触面和流道结构，把机台接口、熔料进入与主流道衔接集中在可更换部件上。|A replaceable bushing combines nozzle contact, melt entry and runner transition in one defined interface.|Bạc thay được kết hợp tiếp xúc vòi, nhựa vào và nối kênh trong một giao diện.',
'locating-rings':'为换模提供明确的机台对中界面，便于核对定位孔、喷嘴中心和安装高度。|Provide a defined machine-centering interface for mold changes, with locating bore, nozzle center and height checks.|Tạo giao diện căn tâm máy rõ khi đổi khuôn, kiểm tra lỗ định vị, tâm vòi và cao.',
'mold-date-stamps':'将年月或识别信息直接成型在制品上，便于按模腔和生产批次组织追溯标记。|Mold dates or identification into the part to organize traceability by cavity and production batch.|Tạo ngày hoặc mã trực tiếp trên sản phẩm để truy xuất theo lòng khuôn và lô.',
'side-locks':'在接近合模的位置增加配套定位面，适合需要关注分型面错位的精密模具。|Matched alignment faces act near final closure for precision molds sensitive to parting-line mismatch.|Mặt định vị ghép hoạt động gần đóng cuối cho khuôn nhạy lệch mặt phân khuôn.',
'stopper-bolts':'以明确的肩长与承靠面控制机构最大行程，便于将限位关系纳入装配尺寸链。|A defined shoulder length and seat control maximum travel and make the stop part of the assembly dimension chain.|Dài vai và mặt tựa xác định kiểm soát hành trình tối đa, đưa chặn vào chuỗi kích thước lắp.',
'pull-rods':'将模板连接与动作顺序结合在拉杆结构中，便于按开模距离定义端部连接和有效长度。|Coordinate plate connection and motion sequence through rod ends and effective length selected for opening travel.|Phối hợp nối tấm và trình tự chuyển động qua đầu thanh và dài hữu hiệu theo độ mở.',
'graphite-bronze-bushings':'当持续供油不便时，可评估铜合金承载面与固体润滑点组合，围绕实际工作面安排润滑。|Where continuous oil supply is difficult, evaluate a load-bearing copper alloy with solid lubricant at the actual sliding surfaces.|Khi khó cấp dầu liên tục, xét hợp kim đồng chịu tải cùng chất bôi trơn rắn trên mặt trượt thực.',
'bronze-bushings':'为已有润滑系统提供可更换的滑动配合件，可按轴径、载荷和供油方式定制孔面与油槽。|Provide a replaceable sliding member for an existing lubrication system, with bore and grooves suited to shaft, load and oil supply.|Cung cấp chi tiết trượt thay được cho hệ dầu sẵn, lỗ/rãnh theo trục, tải và cấp dầu.',
'flanged-bronze-bushings':'在同一零件上组合径向支承与轴向定位界面，适合需要明确肩部承靠的滑动结构。|Combine radial support and axial location in one component for sliding designs needing a defined shoulder seat.|Kết hợp đỡ kính và định vị trục trong một chi tiết cho kết cấu trượt cần tựa vai rõ.',
'wear-plates':'把滑动磨损面设计成可更换板件，便于围绕滑块、斜楔和抽芯机构独立安排维护。|A replaceable plate localizes the sliding wear face for service of slides, wedges and core-pull mechanisms.|Tấm thay được tách mặt mòn trượt để bảo trì con trượt, nêm và kéo lõi.',
'precision-dowel-pins':'在重复装配中建立明确的位置基准，适合模具、夹具与机械部件的固定侧和可拆侧定位。|Establish a position datum for repeat assembly, with fixed and removable locating fits in molds, fixtures and machinery.|Tạo chuẩn vị trí lắp lại, với phía cố định và tháo được trong khuôn, đồ gá và máy.',
'threaded-dowel-pins':'在保持圆柱面定位的同时增加装拆接口，适合盲孔或维护时难以从背面推出的定位位置。|Add removal or installation access while retaining cylindrical location, useful for blind holes without rear push-out access.|Thêm giao diện tháo/lắp vẫn giữ định vị trụ, hữu ích lỗ mù không đẩy được từ sau.',
'pilot-pins':'利用已有导正孔修正料带位置，有助于把后续冲裁工位的定位与送料动作协调起来。|Use an existing pilot hole to correct strip position and coordinate feed with subsequent cutting stations.|Dùng lỗ dẫn sẵn chỉnh băng, phối hợp cấp với trạm cắt sau.',
'floating-pins':'在开模时提供送料所需抬升和支撑，使料带能以规划的高度越过下模结构。|Provide lift and support during opening so the strip clears lower-die features at the intended feed height.|Cung cấp nâng và đỡ khi mở để băng vượt khuôn dưới tại cao cấp dự kiến.',
};
export const reasonFor=(id:string)=>l(reasons[id]);
export function materialGuidanceFor(product:CatalogProduct,material:string):LocalizedText {
  if(product.id==='tableting-punches'){
    if(material==='Tungsten carbide')return l('针对磨蚀性粉料评估硬质合金中模或工作部位，结合压制载荷、支撑和抗崩裂要求确认结构。|Evaluate carbide dies or working sections for abrasive powders, considering compression load, support and fracture resistance.|Đánh giá cối hoặc vùng làm việc carbide cho bột mài mòn, xét tải nén, đỡ và chống nứt.');
    if(material==='Stainless steel')return l('针对粉料腐蚀性和清洁要求选择可用牌号，并确认硬度、表面状态与介质相容性。|Select a suitable grade for powder corrosion and cleaning, then confirm hardness, finish and media compatibility.|Chọn mác theo ăn mòn bột và vệ sinh, xác nhận độ cứng, hoàn thiện và tương thích môi chất.');
  }
  return materialGuidance[material];
}
