#!/usr/bin/env python3
"""
抓取 htx99.com 产品分类、列表与缩略图，并按分类目录下载图片。
仅用于内部对标与素材整理；商用请使用自有拍摄图并注意版权。
"""

from __future__ import annotations

import argparse
import json
import re
import ssl
import sys
import time
import urllib.error
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed
from html import unescape
from pathlib import Path
from urllib.parse import urljoin, urlparse

BASE = "https://www.htx99.com"
UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36"
CTX = ssl.create_default_context()

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "data" / "htx99-reference"
IMAGE_ROOT = OUT / "images"

CATEGORY_SHTML = [
    "/axyfl.shtml",
    "/cymjx.shtml",
    "/czctj.shtml",
    "/dzdtw.shtml",
    "/dlfll.shtml",
    "/sjmjx.shtml",
    "/bdxzj.shtml",
    "/stszj.shtml",
    "/dztzj.shtml",
    "/jzlgj.shtml",
    "/fzqdw.shtml",
    "/lsmjp.shtml",
    "/yzmjp.shtml",
    "/ajgbz.shtml",
    "/misum.shtml",
    "/hasco.shtml",
    "/dmebz.shtml",
    "/jisbz.shtml",
    "/mfyp.shtml",
    "/qxdj.shtml",
    "/sgzj.shtml",
    "/mjml.shtml",
    "/gjlj.shtml",
    "/sbdh.shtml",
    "/qtpj.shtml",
    "/yzx.shtml",
]

PRODUCT_PATH_PREFIXES = (
    "/czctj/",
    "/dzdtw/",
    "/stszj/",
    "/yzx/",
    "/dztzj/",
    "/bdxzj/",
    "/jzlgj/",
    "/dlfll/",
    "/fzqdw/",
    "/sjmjx/",
    "/cymjx/",
    "/lsmjp/",
    "/yzmjp/",
    "/misum/",
    "/hasco/",
    "/dmebz/",
    "/jisbz/",
    "/qxdj/",
    "/sgzj/",
    "/mjml/",
    "/gjlj/",
    "/sbdh/",
    "/qtpj/",
)

MATERIAL_KEYWORDS = [
    "SKD11",
    "SKD61",
    "SKH51",
    "SKH-9",
    "SKH9",
    "SUJ2",
    "CR12MOV",
    "Cr12MoV",
    "ASP60",
    "ASP23",
    "钨钢",
    "硬质合金",
    "白钢",
    "高速钢",
    "不锈钢",
    "铜",
    "bronze",
    "HSS",
    "DC53",
    "NAK80",
    "S136",
    "P20",
]


def fetch(path: str, retries: int = 2) -> str:
    url = path if path.startswith("http") else urljoin(BASE, path)
    last_err: Exception | None = None
    for _ in range(retries):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": UA})
            with urllib.request.urlopen(req, timeout=20, context=CTX) as resp:
                return resp.read().decode("utf-8", errors="ignore")
        except (urllib.error.URLError, TimeoutError) as e:
            last_err = e
            time.sleep(0.3)
    raise RuntimeError(f"fetch failed: {url} ({last_err})")


def download_file(url: str, dest: Path) -> None:
    dest.parent.mkdir(parents=True, exist_ok=True)
    if dest.exists() and dest.stat().st_size > 0:
        return
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=60, context=CTX) as resp:
        dest.write_bytes(resp.read())


def parse_taxonomy(html: str) -> list[dict]:
    items: list[dict] = []
    for m in re.finditer(
        r'<h([34]) sid="([^"]*)"><a[^>]*title="([^"]*)" href="([^"]*)"',
        html,
    ):
        items.append(
            {
                "level": int(m.group(1)),
                "sid": m.group(2),
                "title": unescape(m.group(3)),
                "href": m.group(4),
            }
        )
    for m in re.finditer(
        r'<li sid="([^"]*)"><a sid="[^"]*"[^>]*title="([^"]*)" href="([^"]*)"',
        html,
    ):
        sid = m.group(1)
        if not sid:
            continue
        items.append(
            {
                "level": 5,
                "sid": sid,
                "title": unescape(m.group(2)),
                "href": m.group(3),
            }
        )
    return items


def parse_product_cards(html: str) -> list[dict]:
    """解析 pd_list_dl 列表（产品中心与分类页两种 DOM）。"""
    cards: list[dict] = []
    for block in re.findall(r'<dl class="pd_list_dl"[^>]*>.*?</dl>', html, re.S):
        sid_m = re.search(r'sid="([^"]*)"', block)
        sid = sid_m.group(1) if sid_m else ""
        img_m = re.search(r'<img src="([^"]+)" alt="([^"]*)"', block)
        if not img_m:
            continue
        img = urljoin(BASE, img_m.group(1))
        name = unescape(img_m.group(2).strip())
        link_m = re.search(
            r'<dd[^>]*>\s*<a[^>]*href="([^"]+)"[^>]*title="([^"]*)"',
            block,
            re.S,
        )
        if not link_m:
            link_m = re.search(r'<a target="_blank" href="([^"]+)"\s*title="([^"]*)"', block)
        if not link_m:
            continue
        href = urljoin(BASE, link_m.group(1))
        title = unescape((link_m.group(2) or name).strip())
        cards.append(
            {
                "sid": sid,
                "name": title or name,
                "href": href,
                "thumb": img,
            }
        )
    return cards


def extract_internal_paths(html: str) -> set[str]:
    paths: set[str] = set()
    for href in re.findall(r'href="([^"]+)"', html):
        if href.startswith(("javascript", "#", "mailto:")):
            continue
        full = urljoin(BASE, href)
        p = urlparse(full)
        if p.netloc not in ("", "www.htx99.com", "htx99.com"):
            continue
        if re.search(r"\.(shtml|html)$", p.path, re.I):
            paths.add(p.path)
    return paths


PATH_CRUMBS: dict[str, list[str]] = {
    "czctj": ["按行业分类", "冲压模具配件", "冲针、冲头加工"],
    "dzdtw": ["按行业分类", "冲压模具配件", "导柱、导套、外导柱加工"],
    "dlfll": ["按行业分类", "冲压模具配件", "导料、浮料零件加工"],
    "bdxzj": ["按行业分类", "塑胶模具配件", "扁顶针、镶针加工"],
    "stszj": ["按行业分类", "塑胶模具配件", "司筒、司针加工"],
    "dztzj": ["按行业分类", "塑胶模具配件", "顶针、托针加工"],
    "jzlgj": ["按行业分类", "塑胶模具配件", "唧咀、拉杆加工"],
    "fzqdw": ["按行业分类", "塑胶模具配件", "辅助器、定位圈加工"],
    "misum": ["按加工标准分类", "MISUMI标准加工"],
    "hasco": ["按加工标准分类", "HASCO标准加工"],
    "dmebz": ["按加工标准分类", "DME标准加工"],
    "jisbz": ["按加工标准分类", "JIS标准加工"],
    "qxdj": ["模房用品", "切削刀具"],
    "sgzj": ["模房用品", "丝攻钻咀"],
    "mjml": ["模房用品", "磨具磨料"],
    "gjlj": ["模房用品", "工具量具"],
    "sbdh": ["模房用品", "山本弹簧"],
    "qtpj": ["模房用品", "其他配件"],
    "yzx": ["圆柱销", "圆柱销"],
}


def breadcrumb_from_href(href: str) -> list[str]:
    seg = urlparse(href).path.strip("/").split("/")[0]
    return list(PATH_CRUMBS.get(seg, []))


def sid_to_breadcrumb(sid: str, sid_map: dict[str, str]) -> list[str]:
    if not sid:
        return []
    parts = sid.split(",")
    crumbs: list[str] = []
    for i in range(1, len(parts) + 1):
        key = ",".join(parts[:i])
        if key in sid_map:
            crumbs.append(sid_map[key])
    return crumbs


def infer_materials(name: str) -> list[str]:
    upper = name.upper()
    found: list[str] = []
    for kw in MATERIAL_KEYWORDS:
        if kw.upper() in upper or kw in name:
            found.append(kw)
    return sorted(set(found))


def slugify(text: str) -> str:
    text = re.sub(r"[^\w\u4e00-\u9fff-]+", "-", text.strip())
    text = re.sub(r"-+", "-", text).strip("-")
    return text[:80] or "item"


def fetch_page_cards(path: str) -> tuple[str, list[dict]]:
    html = fetch(path)
    return path, parse_product_cards(html)


def download_thumb(entry: tuple[dict, Path]) -> dict:
    p, local_thumb = entry
    try:
        download_file(p["thumb"], local_thumb)
        status = "ok"
    except Exception as e:
        status = f"error: {e}"
    return {
        **p,
        "local_thumb": str(local_thumb.relative_to(OUT)),
        "download_status": status,
    }


def main() -> None:
    parser = argparse.ArgumentParser(description="抓取 htx99 产品分类与缩略图")
    parser.add_argument(
        "--no-images",
        action="store_true",
        help="只生成分类与 products.json，不下载图片（约 1 分钟内完成）",
    )
    parser.add_argument("--workers", type=int, default=12, help="并行请求数")
    args = parser.parse_args()

    OUT.mkdir(parents=True, exist_ok=True)
    t0 = time.time()

    hub_html = fetch("/product/1.shtml")
    taxonomy = parse_taxonomy(hub_html)
    sid_map = {t["sid"]: t["title"] for t in taxonomy if t.get("sid")}

    products: dict[str, dict] = {}
    list_pages = [f"/product/{i}.shtml" for i in range(1, 31)] + CATEGORY_SHTML

    print(f"抓取 {len(list_pages)} 个列表页（并行 {args.workers}）…", flush=True)
    with ThreadPoolExecutor(max_workers=args.workers) as pool:
        futures = {pool.submit(fetch_page_cards, path): path for path in list_pages}
        for fut in as_completed(futures):
            path = futures[fut]
            try:
                page_path, cards = fut.result()
            except Exception as e:
                print(f"  skip {path}: {e}", file=sys.stderr, flush=True)
                continue
            for card in cards:
                key = urlparse(card["href"]).path
                prev_pages = set(products.get(key, {}).get("source_pages", []))
                prev_pages.add(page_path)
                card["source_pages"] = sorted(prev_pages)
                card["breadcrumbs"] = sid_to_breadcrumb(card.get("sid", ""), sid_map)
                card["materials_inferred"] = infer_materials(card["name"])
                card["folder_segment"] = (
                    card["breadcrumbs"][-1]
                    if card["breadcrumbs"]
                    else urlparse(card["href"]).path.strip("/").split("/")[0]
                )
                products[key] = {**products.get(key, {}), **card}

    product_list = sorted(products.values(), key=lambda x: x["name"])
    print(f"列表页完成，去重产品 {len(product_list)} 条，用时 {time.time()-t0:.1f}s", flush=True)

    manifest: list[dict] = []
    if args.no_images:
        for p in product_list:
            seg = slugify(p.get("folder_segment") or "uncategorized")
            prod_slug = slugify(urlparse(p["href"]).path.rsplit("/", 1)[-1].replace(".html", ""))
            ext = Path(urlparse(p["thumb"]).path).suffix or ".jpg"
            rel = Path(seg) / prod_slug / f"thumb{ext}"
            manifest.append({**p, "local_thumb": str(rel), "download_status": "skipped"})
    else:
        print(f"下载缩略图（并行 {args.workers}）…", flush=True)
        jobs: list[tuple[dict, Path]] = []
        for p in product_list:
            seg = slugify(p.get("folder_segment") or "uncategorized")
            prod_slug = slugify(urlparse(p["href"]).path.rsplit("/", 1)[-1].replace(".html", ""))
            ext = Path(urlparse(p["thumb"]).path).suffix or ".jpg"
            local_thumb = IMAGE_ROOT / seg / prod_slug / f"thumb{ext}"
            jobs.append((p, local_thumb))
        with ThreadPoolExecutor(max_workers=args.workers) as pool:
            manifest = list(pool.map(download_thumb, jobs))
        ok = sum(1 for m in manifest if m.get("download_status") == "ok")
        print(f"图片 {ok}/{len(manifest)} 成功，总用时 {time.time()-t0:.1f}s", flush=True)

    (OUT / "taxonomy.json").write_text(
        json.dumps(taxonomy, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    (OUT / "products.json").write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    (OUT / "README.md").write_text(
        """# HTX99 对标资料（本地）

- `taxonomy.json`：站点左侧分类树（行业 / 标准 / 模房用品等）
- `products.json`：去重后的产品条目（名称、链接、分类 sid、推断材质）
- `images/`：按「分类目录 / 产品 slug / thumb.*」存放的列表缩略图

## 说明

- 产品中心 `/product/N.shtml` 共 30 页、262 条展示，但 URL 去重后约为 131+（热门款会重复出现在多页）。
- 完整 SKU 需以各分类页（如 `/czctj.shtml`）及详情页为准；本脚本会从分类 hub 继续发现链接。
- 材质字段 `materials_inferred` 由产品标题关键词推断，便于你站内的「按材质筛选」。
- 图片仅供内部对标；上线请换自有图并确认版权。
""",
        encoding="utf-8",
    )

    print(f"output: {OUT}", flush=True)


if __name__ == "__main__":
    main()
