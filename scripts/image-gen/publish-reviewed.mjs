/** Publish one generated candidate, preserving versions; --direct copies the original unchanged. */
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const [relativeDir, reviewNote] = process.argv.slice(2);
const direct = reviewNote === '--direct';
if (!relativeDir || !reviewNote) throw new Error('Provide a candidate directory and a visual review note.');
const dir = path.resolve(root, relativeDir);
if (!dir.startsWith(path.join(root, 'output/product-images/candidates') + path.sep)) throw new Error('Not a candidate directory.');
const manifestPath = path.join(dir, 'generation.json');
const record = JSON.parse(await fs.readFile(manifestPath, 'utf8'));
if (record.visualReview?.publicationDecision === 'do-not-publish') throw new Error('Candidate has an unresolved visual review; use a corrected candidate.');
if (record.status !== 'generated-awaiting-review' || !record.file) throw new Error('Candidate has not completed generation.');
const catalogPath = path.join(root, 'src/data/catalog.json');
const catalog = JSON.parse(await fs.readFile(catalogPath, 'utf8'));
const plan = JSON.parse(await fs.readFile(path.join(root, 'data/catalog/image-plan.json'), 'utf8'));
const detailJob = plan.detailJobs?.find(j => j.id === record.id);
const product = catalog.products.find(p => p.id === (detailJob?.productId ?? record.id));
if (!product) throw new Error('Unknown product or detail image job.');
const mediaPath = path.join(root, 'src/data/catalog-detail-media.json');
const media = detailJob ? JSON.parse(await fs.readFile(mediaPath, 'utf8')) : null;
const version = path.basename(dir).replaceAll(/[^0-9TZ-]/g, '');
const extension = direct ? path.extname(record.file).slice(1) : 'webp';
if (!['jpg','jpeg','png','webp'].includes(extension)) throw new Error('Unsupported image extension.');
const publicPath = `/images/products/${detailJob ? 'details' : 'catalog'}/${record.id}-${version}.${extension}`;
const dest = path.join(root, 'public', publicPath);
await fs.mkdir(path.dirname(dest), {recursive: true});
const imageSource = direct ? record.file : record.preparedImage?.file ?? record.file;
if (!path.resolve(imageSource).startsWith(dir + path.sep)) throw new Error('Image source must remain inside its candidate directory.');
const image = direct ? await fs.readFile(imageSource) : await sharp(imageSource).rotate().resize(1600,1200,{fit:'contain',background:'#f5f6f7'}).webp({quality:88}).toBuffer();
await fs.writeFile(dest,image,{flag:'wx'});
const previousImage = detailJob ? media.assets.find(a => a.id === record.id)?.image ?? null : product.image;
if (detailJob) {
  const asset = {id:record.id, productId:product.id, configurationIds:detailJob.configurationIds, image:publicPath, name:detailJob.name};
  const existing = media.assets.findIndex(a => a.id === record.id);
  if (existing < 0) media.assets.push(asset); else media.assets[existing] = asset;
  await fs.writeFile(mediaPath, JSON.stringify(media,null,2)+'\n');
} else {
  product.image = publicPath;
  product.imageGenerated = true;
  await fs.writeFile(catalogPath, JSON.stringify(catalog,null,2)+'\n');
}
await fs.writeFile(manifestPath, JSON.stringify({...record, publication:'local-website', publishedAt:new Date().toISOString(), publicPath, previousImage, ...(direct ? {publicationMode:'direct-original-user-requested',visualReview:{status:'not-performed',note:'User requested direct use without iterative inspection or image processing.'}} : {visualReview:{status:'accepted-as-representative-illustration',note:reviewNote}})},null,2)+'\n');
console.log(JSON.stringify({id:product.id, image:publicPath, bytes:image.length, website:`http://localhost:4321/zh/products/${product.group}/${product.id}/`}));
