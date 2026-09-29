import assert from 'node:assert/strict';
import {readFileSync,existsSync,readdirSync} from 'node:fs';
const root=new URL('../',import.meta.url);
const read=path=>JSON.parse(readFileSync(new URL(path,root),'utf8'));
const {groups,products}=read('src/data/catalog.json');
const legacy=read('src/data/catalog-legacy.json');
const groupIds=new Set(groups.map(g=>g.id));
const productIds=new Set(products.map(p=>p.id));
assert.equal(groups.length,groupIds.size,'Duplicate group slug');
assert.equal(products.length,productIds.size,'Duplicate product slug');
for(const group of groups){assert(products.some(p=>p.group===group.id),`Empty category ${group.id}`);}
for(const item of [...groups,...products]){
  assert.match(item.id,/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
  for(const field of item.group?['name','summary','application','selection']:['name','intro','selection']){
    for(const locale of ['en','zh','vi'])assert(item[field][locale]?.trim(),`${item.id}: missing ${field}.${locale}`);
    assert(!/[\u4e00-\u9fff]/.test(item[field].en),`${item.id}: Chinese text in English ${field}`);
    assert(!/HTX|99\.8%|23\+|3-5X/.test(item[field].en),`${item.id}: copied supplier claim`);
  }
}
for(const p of products){
  assert(groupIds.has(p.group),`Invalid category ${p.id}`);
  assert(p.variants.length>0,`No configurations ${p.id}`);
  assert(p.materials.length>0,`Missing material guidance ${p.id}`);
  for(const locale of ['en','zh','vi'])assert(p.selection[locale].split(/[;；]/).length===3,`Incomplete selection checklist ${p.id}.${locale}`);
  assert(existsSync(new URL('public'+p.illustration,root)),`Missing illustration ${p.id}`);
  if(p.image)assert(existsSync(new URL('public'+p.image,root)),`Missing product image ${p.id}`);
}
for(const [from,target] of [...Object.entries(legacy.categories),...Object.entries(legacy.products)])assert(productIds.has(target)||groupIds.has(target),`Broken legacy target ${from}`);
for(const file of readdirSync(new URL('src/content/products/',root)).filter(f=>f.endsWith('.md'))){
  const content=readFileSync(new URL('src/content/products/'+file,root),'utf8');
  const category=content.match(/^category: (.+)$/m)?.[1];
  assert(legacy.products[`${category}/${file.slice(0,-3)}`],`Missing legacy migration ${file}`);
}
const references=read('data/catalog/reference-coverage.json');
for(const row of references.pages)assert(row.destinations.length>0,`Unmapped reference ${row.url}`);
assert(products.find(p=>p.id==='ball-cages').variants.length===3,'Ball cage material coverage');
assert(products.find(p=>p.id==='rectangular-die-springs').variants.length===5,'Spring color coverage');
assert.equal(legacy.products['guide-posts/nitrogen-guide-post'],'guide-posts','Nitrided guide post is not a nitrogen gas spring');
console.log(`Catalog checks passed: ${groups.length} groups, ${products.length} families, ${references.pages.length} reference pages, ${Object.keys(legacy.products).length} migrated products.`);
