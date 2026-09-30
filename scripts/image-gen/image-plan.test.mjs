import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync, mkdtempSync, writeFileSync, rmSync} from 'node:fs';
import {execFileSync, spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {join} from 'node:path';
import {assessBrief, loadCurrentImagePlan, assertGenerationJob, compilePrompt} from '../product-image-plan.mjs';
const root = fileURLToPath(new URL('../../',import.meta.url));
const plan = loadCurrentImagePlan();
const all = [...plan.jobs,...plan.detailJobs];
const sample = all.find(j=>j.id==='a-type-punches');
const clone = value => structuredClone(value);

test('all 70 jobs are explicitly accounted for; readiness is derived and no legacy image is current',()=>{
  assert.equal(plan.jobs.length,36); assert.equal(plan.detailJobs.length,34); assert.equal(plan.compositeJobs.length,8);
  assert.equal(plan.totals.promptReady+plan.totals.needsVerification,70);
  for(const job of all) {
    assert.equal(job.generationReady,assessBrief(job).ready);
    if(job.generationReady) assertGenerationJob(job);
    else assert.match(job.prompt,/DRAFT ONLY/);
    assert(!job.prompt.includes('Configuration context:'));
    assert(!job.prompt.includes('Product function:'));
  }
  assert.equal(plan.totals.currentPublished,0);
});

test('size clones, missing sources, name-only evidence, unverified shapes and inconsistent counts cannot pass',()=>{
  const cases = [
    b=>{b.structuralVariants[1].structuralKey=b.structuralVariants[0].structuralKey;},
    b=>{b.structuralVariants[1].geometryEn=b.structuralVariants[0].geometryEn;},
    b=>{b.structuralVariants[0].references=[];},
    b=>{b.structuralVariants[0].references.forEach(r=>r.verification='name-only');},
    b=>{b.structuralVariants[0].verificationStatus='needs-evidence';},
    b=>{b.pieceCount++;},
    b=>{b.variantCount++;},
    b=>{delete b.generationReady;},
    b=>{b.composition='single';},
    b=>{b.missingEvidenceZh=['第二款未核实'];},
  ];
  for(const change of cases) {const b=clone(sample);change(b);assert.equal(assessBrief(b).ready,false);assert.throws(()=>assertGenerationJob(b),/No request sent/);}
});

test('mating parts are not styles; two sleeve styles must have two complete sets',()=>{
  const b=clone(all.find(j=>j.id==='ejector-sleeves--core-pair'));
  assert.equal(b.variantCount,2);assert.equal(b.pieceCount,4);assertGenerationJob(b);
  b.structuralVariants[1].members.pop();b.pieceCount--;
  assert.equal(assessBrief(b).ready,false);
});

test('T, hexagonal, coating and material reuse regressions',()=>{
  assert.equal(all.find(j=>j.id==='carbide-punches--type-t').generationReady,false);
  const hex=all.find(j=>j.id==='carbide-punches--hexagonal');
  assert.equal(hex.generationReady,false);assert.deepEqual(hex.structuralVariants.map(v=>v.id),['hex']);
  const coated=all.find(j=>j.id==='carbide-punches--coated');
  assert.equal(coated.variantCount,2);assert.equal(new Set(coated.structuralVariants.map(v=>v.structuralKey)).size,2);
  const carbideA=all.find(j=>j.id==='carbide-punches--type-a');
  assert.notEqual(sample.visualSignature,carbideA.visualSignature);
  for(const j of all.filter(j=>j.reuseOf)) assert.equal(j.visualSignature,all.find(k=>k.id===j.reuseOf).visualSignature);
  const altered=clone(sample);altered.prompt+='\nDraw three different sizes.';
  assert.throws(()=>assertGenerationJob(altered),/stale/);
  assert.equal(sample.prompt,compilePrompt(sample));
});

test('offline preview requires no credential and blocked generation exits before network/configuration',()=>{
  const env={...process.env,TERRAKINC_API_TOKEN:'',TERRAKINC_BASE_URL:'https://invalid.example'};
  const preview=execFileSync(process.execPath,['--import','tsx','scripts/image-gen/sample.ts','--id','a-type-punches','--dry-run'],{cwd:root,env,encoding:'utf8'});
  assert.equal(JSON.parse(preview).calls,0);
  const blocked=spawnSync(process.execPath,['--import','tsx','scripts/image-gen/sample.ts','--id','carbide-punches--type-t'],{cwd:root,env,encoding:'utf8'});
  assert.equal(blocked.status,1);assert.match(blocked.stderr,/No request sent/);assert.doesNotMatch(blocked.stderr,/Unexpected provider origin|fetch|HTTP/);
  const legacy=spawnSync(process.execPath,['--import','tsx','scripts/image-gen/cli.ts','batch','--file','unused.json'],{cwd:root,env,encoding:'utf8'});
  assert.equal(legacy.status,1);assert.match(legacy.stderr,/入口已停用/);
});

test('obsolete candidates cannot overwrite the website even through direct publication',()=>{
  const files=['src/data/catalog.json','src/data/catalog-detail-media.json'];
  const before=files.map(f=>readFileSync(join(root,f),'utf8'));
  const dir=mkdtempSync(join(root,'output/product-images/candidates/a-type-punches/test-stale-'));
  try {
    writeFileSync(join(dir,'generation.json'),JSON.stringify({id:sample.id,status:'generated-awaiting-review',file:join(dir,'original.png'),promptVersion:3,promptFingerprint:'obsolete'}));
    const result=spawnSync(process.execPath,['scripts/image-gen/publish-reviewed.mjs',dir,'--direct'],{cwd:root,encoding:'utf8'});
    assert.notEqual(result.status,0);assert.match(result.stderr,/obsolete prompt revision/);
    assert.deepEqual(files.map(f=>readFileSync(join(root,f),'utf8')),before);
  } finally {rmSync(dir,{recursive:true,force:true});}
});
