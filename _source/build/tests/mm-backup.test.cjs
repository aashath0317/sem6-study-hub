const fs=require('node:fs'),assert=require('node:assert/strict');
const {JSDOM,VirtualConsole}=require('jsdom');
const root=require('node:path').resolve(__dirname,'../../..');let blob;
const errors=[],vc=new VirtualConsole();vc.on('jsdomError',e=>errors.push(e.message));
const dom=new JSDOM(fs.readFileSync(root+'/SEM 6 Study Hub.html','utf8'),{url:'http://mm-backup.test/hub',runScripts:'dangerously',pretendToBeVisual:true,virtualConsole:vc,beforeParse(w){w.matchMedia=()=>({matches:false,addListener(){},addEventListener(){}});w.HTMLElement.prototype.scrollIntoView=function(){};w.HTMLAnchorElement.prototype.click=function(){};w.URL.createObjectURL=b=>{blob=b;return 'blob:test'};w.URL.revokeObjectURL=()=>{};for(const [k,v] of Object.entries({'sg-done-mm-Week01':{s1:true},'sg-done-mm-revision':{s1:true},'sg-quiz-mm-Week01':{last:83,best:91,ts:100,tries:1},'sg-quiz-mm-mixed':{last:75,best:75,ts:100},'sg-done-mkt-Week01':{s1:true},'unrelated-private-key':{test:true}}))w.localStorage.setItem(k,JSON.stringify(v));}});
(async()=>{
const w=dom.window,d=w.document;d.querySelector('#sp-export').click();assert.ok(blob);
const output=await new Promise((resolve,reject)=>{const r=new w.FileReader();r.onload=()=>resolve(JSON.parse(r.result));r.onerror=reject;r.readAsText(blob)});
for(const k of ['sg-done-mm-Week01','sg-done-mm-revision','sg-quiz-mm-Week01','sg-quiz-mm-mixed','sg-done-mkt-Week01'])assert.ok(output.entries[k],k);
assert.ok(!output.entries['unrelated-private-key']);
const incoming={format:'sem6-progress',version:1,entries:{'sg-done-mm-Week01':{s2:true},'sg-done-mm-revision':{s2:true},'sg-quiz-mm-Week01':{last:72,best:80,ts:200,tries:2}}};
const input=d.querySelector('#sp-import');Object.defineProperty(input,'files',{value:[{size:1000,text:async()=>JSON.stringify(incoming)}]});await input.onchange({target:input});
assert.deepEqual(JSON.parse(w.localStorage.getItem('sg-done-mm-Week01')),{s1:true,s2:true});assert.deepEqual(JSON.parse(w.localStorage.getItem('sg-done-mm-revision')),{s1:true,s2:true});
const quiz=JSON.parse(w.localStorage.getItem('sg-quiz-mm-Week01'));assert.equal(quiz.last,72);assert.equal(quiz.best,91);assert.deepEqual(JSON.parse(w.localStorage.getItem('sg-done-mkt-Week01')),{s1:true});
assert.match(d.querySelector('#sp-message').textContent,/Backup merged/);assert.deepEqual(errors,[]);dom.window.close();console.log('PASS: Multimedia weekly/revision/mixed progress exports and merges; best scores and other subjects stay intact.');
})().catch(e=>{console.error(e);dom.window.close();process.exit(1)});
