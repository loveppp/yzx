/** Publish one current-recipe candidate unchanged, updating every compatible reuse destination. */
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {loadCurrentImagePlan, assertGenerationJob, prepareProductImagePlan} from '../product-image-plan.mjs';
import {readWatermarkSvg, watermarkImageBytes} from '../watermark/lib.mjs';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const [relativeDir, mode] = process.argv.slice(2);
if (!relativeDir || mode !== '--direct') throw new Error('Provide a candidate directory and --direct; original files are published without processing.');
const dir = path.resolve(root,relativeDir);
if (!dir.startsWith(path.join(root,'output/product-images/candidates')+path.sep)) throw new Error('Not a candidate directory.');
const manifestPath = path.join(dir,'generation.json');
const record = JSON.parse(await fs.readFile(manifestPath,'utf8'));
if (record.visualReview?.publicationDecision === 'do-not-publish') throw new Error('Candidate has a known image failure; old website image retained.');
if (record.status !== 'generated-awaiting-review' || !record.file) throw new Error('Candidate has not completed generation.');
const plan = loadCurrentImagePlan();
const all = [...plan.jobs,...plan.detailJobs];
const job = all.find(j=>j.id===record.id);
if (!job) throw new Error('Unknown image job.');
assertGenerationJob(job);
if (job.reuseOf) throw new Error(`Publish the shared source ${job.reuseOf}, not a separate duplicate.`);
if (record.promptVersion !== 4 || record.promptFingerprint !== job.promptFingerprint || record.visualSignature !== job.visualSignature) throw new Error('Candidate belongs to an obsolete prompt revision. Website image retained.');
if (record.publication === 'local-website') throw new Error('Candidate already published; no duplicate copy required.');
const targets = [job,...all.filter(j=>j.reuseOf===job.id)];
for (const target of targets) assertGenerationJob(target);
if (!path.resolve(record.file).startsWith(dir+path.sep)) throw new Error('Image source must remain in candidate directory.');
const extension = path.extname(record.file).slice(1).toLowerCase();
if (!['jpg','jpeg','png','webp'].includes(extension)) throw new Error('Unsupported original format.');
const bytes = await fs.readFile(record.file);
const format = bytes.subarray(0,8).equals(Buffer.from([137,80,78,71,13,10,26,10]))?'png':bytes[0]===255 && bytes[1]===216 && bytes[2]===255?'jpg':bytes.toString('ascii',0,4)==='RIFF' && bytes.toString('ascii',8,12)==='WEBP'?'webp':null;
if (!format || (extension==='jpeg'?'jpg':extension)!==format) throw new Error('Invalid original image; website image retained.');
const version = path.basename(dir).replaceAll(/[^0-9TZ-]/g,'');
if (!version) throw new Error('Missing candidate version.');
const publicPath = `/images/products/${job.kind==='detail'?'details':'catalog'}/${job.id}-${version}.${extension}`;
const catalogPath = path.join(root,'src/data/catalog.json');
const mediaPath = path.join(root,'src/data/catalog-detail-media.json');
const catalogBefore = await fs.readFile(catalogPath,'utf8');
const mediaBefore = await fs.readFile(mediaPath,'utf8');
const catalog = JSON.parse(catalogBefore), media = JSON.parse(mediaBefore);
const previousImages = {};
for (const target of targets) {
  previousImages[target.id] = target.currentImage;
  if (target.kind === 'main') {
    const product = catalog.products.find(p=>p.id===target.productId);
    Object.assign(product,{image:publicPath,imageGenerated:true,imageCaption:target.caption});
  } else {
    const asset = {id:target.id,productId:target.productId,configurationIds:target.configurationIds,image:publicPath,name:target.caption,promptFingerprint:target.promptFingerprint,visualSignature:target.visualSignature};
    const index = media.assets.findIndex(a=>a.id===target.id);
    if (index < 0) media.assets.push(asset); else media.assets[index] = asset;
  }
}
const dest = path.join(root,'public',publicPath);
await fs.mkdir(path.dirname(dest),{recursive:true});
const watermarkSvgBytes = await readWatermarkSvg(root);
const watermarked = await watermarkImageBytes(bytes, watermarkSvgBytes);
const backupPath = path.join(root,'output/watermark-backups',publicPath.replace(/^\//,''));
await fs.mkdir(path.dirname(backupPath),{recursive:true});
await fs.writeFile(backupPath,bytes);
await fs.writeFile(dest,watermarked,{flag:'wx'});
const atomicWrite = async (file,text) => {const temporary=file+`.${process.pid}.tmp`;await fs.writeFile(temporary,text);await fs.rename(temporary,file);};
try {
  await atomicWrite(catalogPath,JSON.stringify(catalog,null,2)+'\n');
  await atomicWrite(mediaPath,JSON.stringify(media,null,2)+'\n');
  await atomicWrite(manifestPath,JSON.stringify({...record,publication:'local-website',publicationMode:'direct-original-user-requested',publishedAt:new Date().toISOString(),publicPath,previousImages,publishedJobIds:targets.map(j=>j.id),visualReview:{status:'not-performed',note:'Direct original publication requested; no iterative inspection or processing.'}},null,2)+'\n');
} catch (error) {
  await atomicWrite(catalogPath,catalogBefore); await atomicWrite(mediaPath,mediaBefore);
  throw error;
}
prepareProductImagePlan(catalog);
console.log(JSON.stringify({id:job.id,publishedJobIds:targets.map(j=>j.id),image:publicPath,bytes:watermarked.length,processing:'watermark'}));
