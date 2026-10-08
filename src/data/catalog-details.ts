import data from './catalog-details.json';
import type {LocalizedText} from './catalog';
const l=(text:string):LocalizedText=>{const [zh,en,vi]=text.split('|');return {zh,en,vi};};
export interface CatalogConfiguration {id:string;name:LocalizedText;description:LocalizedText;parameters:LocalizedText;}
export interface CatalogFamilyDetail {note:LocalizedText;variants:CatalogConfiguration[];}
export const catalogDetails:Record<string,CatalogFamilyDetail>=data;
export type DetailId=keyof typeof catalogDetails;
export const detailsFor=(id:string)=>catalogDetails[id as DetailId];
export const detailText=l;
export const detailUI={
 range:l('结构与可选配置|Designs and configurations|Kết cấu và cấu hình'),
 intro:l('按用途与结构选择，再确认材料、配合和处理要求。以下选项可组合，具体尺寸按确认图纸。|Select function and geometry, then confirm material, fits and treatment. Options may be combined; dimensions follow the agreed drawing.|Chọn chức năng và hình học, rồi xác nhận vật liệu, lắp ghép và xử lý. Có thể kết hợp tùy chọn; kích thước theo bản vẽ thống nhất.'),
 parameters:l('选型需确认|Specify when ordering|Cần xác nhận khi đặt'),
 choice:l('为什么选择这一系列|Why choose this family|Lý do chọn dòng này'),
 material:l('材料与处理选择|Materials and treatment options|Vật liệu và xử lý'),
 surface:l('表面处理与加工面|Surface treatments and finishes|Xử lý và hoàn thiện bề mặt'),
 application:l('应用领域与具体工况|Industries and operating scenarios|Ngành và điều kiện sử dụng'),
 faq:l('本系列常见问题|Family-specific questions|Câu hỏi riêng cho dòng'),
 overview:l('按系列查看具体款式|Explore configurations by family|Xem cấu hình theo dòng'),
 browse:l('查看款式与选型|View configurations and selection|Xem cấu hình và lựa chọn'),
 related:l('配套与关联系列|Mating and related families|Dòng đi kèm và liên quan'),
 configurationInquiry:l('立即询价|Send inquiry now|Gửi yêu cầu ngay'),
 relatedMaterials:l('可提供定制生产的冲压材料|Stamping materials for custom production|Vật liệu dập theo đơn'),
 gradeCatalog:l('可选材料牌号（按图纸确认）|Optional grades (confirmed on drawing)|Mác tùy chọn (theo bản vẽ)'),
 applicationArea:l('应用领域|Application areas|Lĩnh vực ứng dụng'),
 applicationScenario:l('应用场景|Application scenarios|Kịch bản sử dụng'),
 whyHighlights:l('系列优势要点|Family highlights|Điểm mạnh dòng'),
};
