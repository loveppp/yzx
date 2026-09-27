#!/usr/bin/env python3
"""从 products-catalog.csv 精选条目生成 Astro 产品 stub（不下载图片）。"""

from __future__ import annotations

import csv
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CSV_PATH = ROOT / "data/htx99-reference/products-catalog.csv"
OUT_DIR = ROOT / "src/content/products"

# 每类上限（合计约 50）
QUOTA = {
    "a-type-punches": 4,
    "stepped-punches": 4,
    "carbide-punches": 6,
    "hss-punches": 8,
    "special-shaped-punches": 8,
    "stamping-die-punches": 6,
    "punch-pins": 8,
    "guide-posts": 5,
    "guide-bushings": 5,
    "floating-pins": 2,
    "pilot-pins": 3,
    "ejector-components": 6,
    "cylindrical-pins": 2,
    "custom-mold-components": 2,
    "sprue-bushings": 1,
    "oilless-bushings": 1,
    "die-springs": 0,
}

HERO_BY_CATEGORY = {
    "a-type-punches": "/images/products/generated/a-punch.png",
    "stepped-punches": "/images/products/generated/stepped-punch.png",
    "carbide-punches": "/images/products/generated/carbide-punch.png",
    "hss-punches": "/images/products/generated/hss-punch.png",
    "special-shaped-punches": "/images/products/generated/irregular-shaped-punches.png",
    "stamping-die-punches": "/images/products/generated/hero-punches.png",
    "punch-pins": "/images/products/generated/hero-punches.png",
    "guide-posts": "/images/categories/guide-posts.png",
    "guide-bushings": "/images/categories/guide-bushings.png",
    "floating-pins": "/images/categories/floating-pins.png",
    "pilot-pins": "/images/categories/guide-pins.png",
    "ejector-components": "/images/categories/ejector-pins.png",
    "cylindrical-pins": "/images/categories/guide-pins.png",
    "custom-mold-components": "/images/products/generated/custom-punches.png",
    "sprue-bushings": "/images/categories/guide-bushings.png",
    "oilless-bushings": "/images/categories/guide-bushings.png",
}

MATERIAL_MAP = {
    "SKD11": "SKD11",
    "SKD61": "SKD61",
    "SKH51": "SKH51",
    "SKH-9": "SKH-9",
    "SKH9": "SKH-9",
    "ASP60": "ASP60",
    "ASP23": "ASP23",
    "DC53": "DC53",
    "CR12MOV": "Cr12MoV",
    "Cr12MoV": "Cr12MoV",
    "钨钢": "Tungsten Carbide",
    "高速钢": "HSS",
    "白钢": "HSS",
    "不锈钢": "Stainless",
    "铜": "Bronze",
}


def path_prefix(url_path: str) -> str:
    p = url_path.strip("/")
    return p.split("/")[0] if p else ""


def map_category(name: str, url_path: str) -> str:
    prefix = path_prefix(url_path)
    n = name.upper()

    if prefix == "yzx":
        return "cylindrical-pins"
    if prefix == "dlfll":
        return "floating-pins" if "浮" in name else "pilot-pins"
    if prefix == "dzdtw":
        return "guide-bushings" if "导套" in name or "衬套" in name else "guide-posts"
    if prefix in ("dztzj", "stszj", "bdxzj"):
        return "ejector-components"
    if prefix == "fzqdw":
        return "custom-mold-components"
    if prefix in ("jzlgj",):
        return "sprue-bushings"

    if prefix == "czctj" or "冲" in name:
        if "A型" in name or "A 型" in name:
            return "a-type-punches"
        if "台阶" in name or "多级" in name or "T型" in name or "T 型" in name:
            return "stepped-punches"
        if "钨钢" in name or "硬质" in name:
            return "carbide-punches"
        if any(x in n for x in ("SKH", "ASP", "高速钢", "白钢", "HSS")):
            return "hss-punches"
        if any(k in name for k in ("异型", "不规则", "六角", "方", "椭圆", "斜", "成型", "翻边")):
            return "special-shaped-punches"
        if "引导" in name or "导" in name and "导套" not in name:
            return "pilot-pins"
        return "punch-pins"

    return "custom-mold-components"


def parse_materials(tag: str) -> list[str]:
    if not tag.strip():
        return ["SKD11"]
    parts = re.split(r"[、,，/]", tag)
    out: list[str] = []
    for p in parts:
        p = p.strip()
        if not p:
            continue
        out.append(MATERIAL_MAP.get(p, p))
    return out or ["SKD11"]


def mold_application(category: str) -> str:
    if category in (
        "punch-pins",
        "a-type-punches",
        "hss-punches",
        "carbide-punches",
        "stepped-punches",
        "special-shaped-punches",
        "stamping-die-punches",
        "guide-posts",
        "guide-bushings",
        "floating-pins",
        "pilot-pins",
        "cylindrical-pins",
    ):
        return "stamping"
    if category in ("ejector-components", "sprue-bushings", "oilless-bushings"):
        return "plastic"
    return "universal"


def slug_from_path(url_path: str) -> str:
    base = url_path.rstrip("/").split("/")[-1]
    return re.sub(r"\.html?$", "", base, flags=re.I)


def yaml_list(items: list[str]) -> str:
    return "[" + ", ".join(items) + "]"


def render_md(name_zh: str, category: str, materials: list[str], thumb_url: str, slug: str) -> str:
    name_en = f"{name_zh} (Custom)"
    hero = HERO_BY_CATEGORY.get(category, "/images/products/generated/hero-punches.png")
    mold = mold_application(category)
    desc_en = f"Custom {name_zh} — dimensions, material, and coating per your mold drawing. Reference listing."
    desc_zh = f"{name_zh}来图定制，尺寸、材质、表面处理按模具工况与图纸生产（本条为类型参考）。"
    return f"""---
name_en: {name_en}
name_zh: {name_zh}
category: {category}
moldApplication: {mold}
customAvailable: true
materials: {yaml_list(materials)}
heroImage: {hero}
referenceThumbUrl: "{thumb_url}"
seoTitle_en: {name_en} | YZX Precision
seoTitle_zh: {name_zh}定制 | 源智信
seoDescription_en: {desc_en}
seoDescription_zh: {desc_zh}
description_en: "{desc_en}"
description_zh: "{desc_zh}"
---
"""


def main() -> None:
    existing = {p.stem for p in OUT_DIR.glob("*.md")}
    counts = {k: 0 for k in QUOTA}
    created = 0
    skipped = 0

    with CSV_PATH.open(encoding="utf-8-sig") as f:
        rows = list(csv.DictReader(f))

    for row in rows:
        name = row["产品名称"].strip()
        url_path = row["URL路径"].strip()
        thumb = row["缩略图URL"].strip()
        slug = slug_from_path(url_path)
        if slug in existing:
            skipped += 1
            continue

        cat = map_category(name, url_path)
        if QUOTA.get(cat, 0) <= 0:
            continue
        if counts[cat] >= QUOTA[cat]:
            continue

        mats = parse_materials(row.get("材质标签", ""))
        content = render_md(name, cat, mats, thumb, slug)
        (OUT_DIR / f"{slug}.md").write_text(content, encoding="utf-8")
        existing.add(slug)
        counts[cat] += 1
        created += 1

        if created >= 50:
            break

    print(f"created={created} skipped_existing={skipped} counts={counts}")


if __name__ == "__main__":
    main()
