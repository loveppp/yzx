/** Prepare one inspected light-background candidate. No generation or publishing. */
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import sharp from 'sharp';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../..');
const argument=process.argv[2];
if(!argument)throw new Error('Provide a candidate directory with a visually verified empty upper-left margin.');
const dir=path.resolve(root,argument);
if(!dir.startsWith(path.join(root,'output/product-images/candidates')+path.sep))throw new Error('Not a candidate directory.');
const manifestPath=path.join(dir,'generation.json');
const record=JSON.parse(await fs.readFile(manifestPath,'utf8'));
if(record.status!=='generated-awaiting-review'||!record.file)throw new Error('Candidate generation is incomplete.');
const metadata=await sharp(record.file).metadata();
const patch={left:Math.round(metadata.width*.02),top:Math.round(metadata.height*.02),width:Math.round(metadata.width*.08),height:Math.round(metadata.height*.08)};
// stats() ignores queued extraction, so materialize the patch before measuring it.
const patchImage=await sharp(record.file).extract(patch).toColourspace('srgb').removeAlpha().png().toBuffer();
const stats=await sharp(patchImage).stats();
const sample=stats.channels.slice(0,3).map(c=>c.mean);
if(stats.channels.slice(0,3).some(c=>c.mean<220||c.stdev>8))throw new Error('Background patch is not a uniform light field; inspect it manually.');
const gain=sample.map((value,i)=>[245,246,247][i]/value);
const file=path.join(dir,'prepared.webp');
await sharp(record.file).toColourspace('srgb').linear(gain,[0,0,0]).resize(1600,1200,{fit:'contain',background:'#f5f6f7'}).webp({quality:94}).toFile(file);
record.preparedImage={file,source:record.file,operation:'Global RGB gain to neutralize the verified empty background; contain export; no geometry changes',samplePatch:patch,sampledRGB:sample,rgbGain:gain,targetBackground:'#f5f6f7',width:1600,height:1200};
await fs.writeFile(manifestPath,JSON.stringify(record,null,2)+'\n');
console.log(JSON.stringify({id:record.id,file,sampledRGB:sample,generationCalls:0,publication:'not-published'}));
