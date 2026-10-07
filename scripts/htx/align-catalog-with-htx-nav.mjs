/**
 * Align product center with HTX top nav (https://htxprecision.com/):
 * - Remove plastic-mold-components group + products
 * - Remove a-type-punches, pilot-pins, floating-pins
 * - Rename forming-punches → tungsten-carbide-punches (HTX "Tungsten Carbide Punch")
 */
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const read = (rel) => JSON.parse(fs.readFileSync(path.join(root, rel), 'utf8'));
const write = (rel, data) => fs.writeFileSync(path.join(root, rel), JSON.stringify(data, null, 2) + '\n');

const REMOVE_GROUPS = new Set(['plastic-mold-components']);
const REMOVE_PRODUCTS = new Set([
  'a-type-punches',
  'pilot-pins',
  'floating-pins',
  'sprue-bushings',
  'locating-rings',
  'mold-date-stamps',
  'side-locks',
  'stopper-bolts',
  'pull-rods',
]);

const catalog = read('src/data/catalog.json');
catalog.groups = catalog.groups.filter((g) => !REMOVE_GROUPS.has(g.id));
catalog.products = catalog.products
  .filter((p) => !REMOVE_GROUPS.has(p.group) && !REMOVE_PRODUCTS.has(p.id))
  .map((p) => {
    if (p.id !== 'forming-punches') return p;
    return {
      ...p,
      id: 'tungsten-carbide-punches',
      name: {
        en: 'Tungsten Carbide Punches',
        zh: '钨钢冲头',
        vi: 'Chày hợp kim cứng (tungsten)',
      },
      summary: {
        en: 'High-precision tungsten carbide punches for stamping dies, including straight, stepped, precision and coated series.',
        zh: '用于冲压模具的高精度钨钢冲头，含直身、台阶、精密及涂层系列。',
        vi: 'Chày hợp kim cứng cho khuôn dập, gồm thẳng, bậc, chính xác và có lớp phủ.',
      },
      illustration: '/images/catalog/forming-punches.svg',
    };
  });
write('src/data/catalog.json', catalog);

const details = read('src/data/catalog-details.json');
delete details['a-type-punches'];
delete details['pilot-pins'];
delete details['floating-pins'];
for (const id of [
  'sprue-bushings',
  'locating-rings',
  'mold-date-stamps',
  'side-locks',
  'stopper-bolts',
  'pull-rods',
]) {
  delete details[id];
}
if (details['forming-punches']) {
  details['tungsten-carbide-punches'] = details['forming-punches'];
  delete details['forming-punches'];
}
write('src/data/catalog-details.json', details);

const media = read('src/data/catalog-detail-media.json');
const keepProductIds = new Set(catalog.products.map((p) => p.id));
media.assets = media.assets.filter((a) => keepProductIds.has(a.productId)).map((a) => {
  if (a.productId !== 'forming-punches') return a;
  return {
    ...a,
    id: a.id.replace(/^forming-punches--/, 'tungsten-carbide-punches--'),
    productId: 'tungsten-carbide-punches',
  };
});
write('src/data/catalog-detail-media.json', media);

const legacy = read('src/data/catalog-legacy.json');
legacy.categories['a-type-punches'] = 'carbide-punches';
legacy.categories['special-shaped-punches'] = 'tungsten-carbide-punches';
legacy.categories['floating-pins'] = 'precision-dowel-pins';
legacy.categories['pilot-pins'] = 'precision-dowel-pins';
legacy.categories['custom-mold-components'] = 'punch-components';
legacy.categories['sprue-bushings'] = 'guide-components';
for (const [key, target] of Object.entries({...legacy.products})) {
  if (target === 'a-type-punches') legacy.products[key] = 'carbide-punches';
  else if (target === 'forming-punches') legacy.products[key] = 'tungsten-carbide-punches';
  else if (target === 'pilot-pins' || target === 'floating-pins') legacy.products[key] = 'precision-dowel-pins';
  else if (
    REMOVE_PRODUCTS.has(target) ||
    ['sprue-bushings', 'locating-rings', 'mold-date-stamps', 'side-locks', 'stopper-bolts', 'pull-rods'].includes(target)
  ) {
    legacy.products[key] = 'guide-posts';
  }
}
write('src/data/catalog-legacy.json', legacy);

const taxPath = 'data/catalog/htx-punch-categories.json';
const tax = read(taxPath);
if (tax.products['forming-punches']) {
  tax.products['tungsten-carbide-punches'] = tax.products['forming-punches'];
  delete tax.products['forming-punches'];
}
delete tax.products['a-type-punches'];
write(taxPath, tax);

const briefs = read('data/catalog/detail-image-briefs.json');
briefs.assets = briefs.assets
  .filter((a) => keepProductIds.has(a.productId))
  .map((a) => {
    if (a.productId !== 'forming-punches') return a;
    return {
      ...a,
      productId: 'tungsten-carbide-punches',
      id: a.id.replace(/^forming-punches--/, 'tungsten-carbide-punches--'),
    };
  });
write('data/catalog/detail-image-briefs.json', briefs);

const imageBriefs = read('data/catalog/image-briefs.json');
imageBriefs.products = imageBriefs.products
  .map((a) => (a.id === 'forming-punches' ? {...a, id: 'tungsten-carbide-punches'} : a))
  .filter((a) => keepProductIds.has(a.id));
for (const comp of imageBriefs.categoryComposites ?? []) {
  if (REMOVE_GROUPS.has(comp.group)) {
    imageBriefs.categoryComposites = imageBriefs.categoryComposites.filter((c) => !REMOVE_GROUPS.has(c.group));
    break;
  }
}
imageBriefs.categoryComposites = (imageBriefs.categoryComposites ?? [])
  .filter((c) => !REMOVE_GROUPS.has(c.group))
  .map((c) => ({
    ...c,
    sourceProductIds: c.sourceProductIds
      .filter((id) => !REMOVE_PRODUCTS.has(id) && id !== 'forming-punches' && id !== 'a-type-punches')
      .map((id) => (id === 'forming-punches' ? 'tungsten-carbide-punches' : id)),
  }));
if (imageBriefs.hero?.sourceProductIds) {
  imageBriefs.hero.sourceProductIds = imageBriefs.hero.sourceProductIds
    .filter((id) => id !== 'a-type-punches' && id !== 'forming-punches')
    .concat(['tungsten-carbide-punches'])
    .filter((id, i, arr) => arr.indexOf(id) === i);
}
imageBriefs.sampleOrder = (imageBriefs.sampleOrder ?? []).map((id) =>
  id === 'forming-punches' ? 'tungsten-carbide-punches' : id === 'a-type-punches' ? 'carbide-punches--type-a' : id,
);
write('data/catalog/image-briefs.json', imageBriefs);

console.log(JSON.stringify({
  groups: catalog.groups.length,
  products: catalog.products.length,
  punch: catalog.products.filter((p) => p.group === 'punch-components').map((p) => p.id),
}));
