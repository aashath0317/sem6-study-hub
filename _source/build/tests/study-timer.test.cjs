const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const source=path.resolve(__dirname,'../study-plan.js');
const api=require(source);
let c=api.createFocusClock({now:0,enabled:true,idleMs:120000});
c.tick(150000);assert.equal(c.state(150000).totalMs,120000);assert.equal(c.state(150000).reason,'idle');
c.activity(300000);c.tick(301000);assert.equal(c.state(301000).totalMs,121000);assert.equal(c.state(301000).running,true);
c.availability(false,false,301500);c.tick(600000);assert.equal(c.state(600000).totalMs,121500);
c.availability(true,true,900000);c.tick(901000);assert.equal(c.state(901000).totalMs,122500);
c.pause(901000);c.activity(905000);c.availability(false,false,906000);c.availability(true,true,907000);c.tick(908000);assert.equal(c.state(908000).reason,'manual');assert.equal(c.state(908000).totalMs,122500);
c.start(909000);c.tick(910000);assert.equal(c.state(910000).totalMs,123500);
c.stop(910500);c.activity(930000);c.tick(950000);assert.equal(c.state(950000).totalMs,124000);
let split=[];api.splitStudyInterval(Date.parse('2026-11-02T18:29:59Z'),Date.parse('2026-11-02T18:30:01Z'),(day,ms)=>split.push([day,ms]));
assert.deepEqual(split,[['2026-11-02',1000],['2026-11-03',1000]]);

// Run the actual browser wiring against controlled browser events/time/storage.
// This verifies listeners and persistence, not just the pure clock helper.
function storage(map=new Map()){return {getItem:k=>map.has(k)?map.get(k):null,setItem:(k,v)=>map.set(k,String(v)),map};}
const base=Date.parse('2026-11-02T10:00:00+05:30'),local=storage(),session=storage();
function runtime(start,docFocus=true){
 let now=start,focused=docFocus,hidden=false;
 const events={},winEvents={},intervals=[];
 const children={};['.sp-home','.sp-timer','.sp-clock','.sp-end'].forEach(k=>children[k]={textContent:'',hidden:false,title:''});
 const msg={textContent:''};const dock={dataset:{},classList:{toggle(){}},setAttribute(){},querySelector:k=>children[k]};
 const catalog=[{key:'mkt',name:'Marketing',exam:['2026-11-22','14:45','17:45'],url:'Marketing/index.html',weeks:[{key:'mkt-Week01',label:'Week 01',url:'Marketing/w1.html',quiz:true,sections:[{id:'s1',title:'One'}]}]}];
 const document={get hidden(){return hidden;},hasFocus:()=>focused,body:{getAttribute:k=>k==='data-key'?'mkt-Week01':'../../hub.html',appendChild(){}},getElementById:k=>k==='study-data'?{textContent:JSON.stringify(catalog)}:k==='sp-dock-message'?msg:null,createElement:()=>dock,addEventListener:(k,f)=>(events[k]??=[]).push(f)};
 const FakeDate=class extends Date{constructor(...a){super(...(a.length?a:[now]));}static now(){return now;}};
 const window={document,addEventListener:(k,f)=>(winEvents[k]??=[]).push(f)};
 const context={window,document,localStorage:local,sessionStorage:session,Date:FakeDate,Intl,Math,Number,Object,JSON,Array,String,console,setInterval:f=>intervals.push(f),setTimeout(){}};
 vm.runInNewContext(fs.readFileSync(source,'utf8'),context,{filename:source});
 return {dock,children,msg,at(t){now=t;},tick(t){now=t;intervals[0]();},doc(k,t){now=t;(events[k]||[]).forEach(f=>f());},blur(t){now=t;focused=false;(winEvents.blur||[]).forEach(f=>f());},focus(t){now=t;focused=true;(winEvents.focus||[]).forEach(f=>f());},hide(t){now=t;hidden=true;focused=false;(events.visibilitychange||[]).forEach(f=>f());},show(t){now=t;hidden=false;focused=true;(events.visibilitychange||[]).forEach(f=>f());},cachedReturn(t){now=t;hidden=false;focused=true;(winEvents.pageshow||[]).forEach(f=>f());},navigate(t){now=t;(winEvents.pagehide||[]).forEach(f=>f());},click(t){now=t;children['.sp-timer'].onclick();}};
}
function milliseconds(){return JSON.parse(local.getItem('sg-plan-time')||'[]').reduce((a,l)=>a+l.milliseconds,0);}
let r=runtime(base);assert.equal(r.dock.dataset.focusState,'running');
r.tick(base+3000);r.blur(base+3000);assert.equal(milliseconds(),3000);assert.equal(r.dock.dataset.focusState,'away');
r.tick(base+60000);assert.equal(milliseconds(),3000);
r.focus(base+60000);assert.equal(r.dock.dataset.focusState,'running');r.tick(base+61000);r.hide(base+61000);assert.equal(milliseconds(),4000);
r.show(base+100000);assert.equal(r.dock.dataset.focusState,'running');r.tick(base+230000);assert.equal(r.dock.dataset.focusState,'idle');assert.equal(milliseconds(),124000);
r.doc('mousemove',base+300000);assert.equal(r.dock.dataset.focusState,'running');r.tick(base+301000);r.navigate(base+301000);assert.equal(milliseconds(),125000);
// New study page resumes automatically, keeps prior seconds, and flushes the same record idempotently.
r=runtime(base+302000);assert.equal(r.dock.dataset.focusState,'running');r.tick(base+312000);assert.equal(milliseconds(),135000);r.blur(base+312000);r.blur(base+312000);assert.equal(milliseconds(),135000);
r.focus(base+320000);r.click(base+321000);assert.equal(r.dock.dataset.focusState,'manual');assert.equal(milliseconds(),136000);
r.doc('mousemove',base+330000);r.hide(base+340000);r.show(base+350000);assert.equal(r.dock.dataset.focusState,'manual');assert.equal(milliseconds(),136000);
r.navigate(base+350000);r=runtime(base+351000);assert.equal(r.dock.dataset.focusState,'manual');r.click(base+352000);assert.equal(r.dock.dataset.focusState,'running');r.tick(base+355000);r.navigate(base+355000);assert.equal(milliseconds(),139000);
assert.ok(JSON.parse(local.getItem('sg-plan-time')).every(l=>l.minutes===l.milliseconds/60000));
assert.ok(r.children['.sp-clock'].textContent.startsWith('Today 2:19'));
const cached=r;let other=runtime(base+356000);other.click(base+357000);other.navigate(base+358000);cached.cachedReturn(base+360000);assert.equal(cached.dock.dataset.focusState,'manual');cached.doc('mousemove',base+361000);assert.equal(cached.dock.dataset.focusState,'manual');
console.log('PASS: automatic start, real mouse listener, exact idle cutoff, hidden/minimised/blur pause, automatic return, manual override, sub-six-second persistence, navigation, idempotent checkpoints and Sri Lanka midnight split');
