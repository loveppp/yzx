# HTX99 对标资料（本地）

## 优先看这些

| 文件 | 用途 |
| --- | --- |
| **`products-catalog.csv`** | Excel 打开：164 条 SKU，名称 / 三级分类 / 材质 / 缩略图 URL / 来源页 |
| **`产品类型与材质总结.md`** | 产品类型、材质分桶、**冲针 126 款** 形状/工艺归纳 |
| **`分类体系.md`** | 站点分类树 + 映射 `ProductFilter` |
| **`products-catalog.md`** | 按分类分组的 Markdown 表 |

## 原始数据

- `products.json` — 去重产品（含 `breadcrumbs`、`materials_inferred`、`source_pages`）
- `taxonomy.json` — 左侧导航分类 sid 树
- `products-list.json` — 旧版仅 product 分页（131 条），可忽略

## 抓取说明

```bash
PYTHONUNBUFFERED=1 python3 scripts/htx99_scrape.py --no-images --workers 16
```

- 56 个列表页并行；**不下载图片**（缩略图只保留 URL）
- 产品中心 30 页共 262 条展示位，URL 去重后 **164** 条
- 无 sid 的列表项会按 URL 前缀（如 `czctj`）推断分类，CSV 列「分类是否推断」
- 材质由标题关键词推断；未写牌号则为空

## 版权

对标与建目录用；上线请自有实拍图并确认版权。
