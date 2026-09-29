"""Check real generated pages, links, localized product names and migration output."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote
import json
root=Path(__file__).resolve().parents[1]
dist=root/'dist'
catalog=json.loads((root/'src/data/catalog.json').read_text())
class Page(HTMLParser):
    def __init__(self):
        super().__init__(); self.links=[]; self.images=[]; self.h1=0; self.canonical=None; self.product=None; self.redirect=False
    def handle_starttag(self,tag,attrs):
        a=dict(attrs)
        if tag=='a' and a.get('href'):self.links.append(a['href'])
        if tag=='img':self.images.append(a.get('src',''))
        if tag=='h1':self.h1+=1
        if tag=='link' and a.get('rel')=='canonical':self.canonical=a.get('href')
        if tag=='input' and a.get('name')=='product':self.product=a.get('value')
        if tag=='meta' and a.get('http-equiv','').lower()=='refresh':self.redirect=True
pages=0;links=0
for locale in ['en','zh','vi']:
    paths=[f'{locale}/',f'{locale}/products/']+[f'{locale}/products/{g["id"]}/' for g in catalog['groups']]+[f'{locale}/products/{p["group"]}/{p["id"]}/' for p in catalog['products']]
    for path in paths:
        html=(dist/path/'index.html').read_text();page=Page();page.feed(html)
        assert page.h1==1,(path,'H1 count',page.h1)
        assert not page.redirect,(path,'unexpected redirect')
        assert page.canonical=='https://yzxprecision.com/'+path,(path,'canonical',page.canonical)
        for src in page.images:
            if src.startswith('/'):assert (dist/src.lstrip('/')).is_file(),(path,'missing image',src)
        for href in page.links:
            url=urlsplit(href)
            if url.scheme or not url.path.startswith('/'):continue
            target=dist/unquote(url.path).lstrip('/')
            assert target.is_file() or (target/'index.html').is_file(),(path,'missing link',href)
            links+=1
        for p in catalog['products']:
            if path==f'{locale}/products/{p["group"]}/{p["id"]}/':assert page.product==p['name'][locale],(path,'missing product inquiry context')
        pages+=1
rules=[r.split() for r in (dist/'_redirects').read_text().splitlines() if r and not r.startswith('#')]
for old,new,status in rules:
    assert status=='301'
    assert (dist/new.lstrip('/')/'index.html').is_file(),(old,new)
    page=Page();page.feed((dist/old.lstrip('/')/'index.html').read_text())
    assert page.redirect,(old,'missing fallback redirect')
# Old category and SKU paths must not be advertised as canonical sitemap URLs.
sitemap=''.join(p.read_text() for p in dist.glob('sitemap-*.xml'))
for old,_,_ in rules:assert 'https://yzxprecision.com'+old+'</loc>' not in sitemap,('redirect indexed',old)
print(f'Built-site checks passed: {pages} pages, {links} internal links, {len(rules)} redirects and inquiry context in 108 localized product pages.')
