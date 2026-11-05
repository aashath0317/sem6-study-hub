const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const p=require('../study-plan.js');
const now=Date.parse('2026-11-02T10:00:00+05:30');
function subject(key,date,sections=2){return {key,name:key,exam:[date,'08:30','11:30'],url:key+'.html',weeks:[{key:key+'-Week01',label:'Week 01',url:key+'/w1.html',quiz:true,sections:Array.from({length:sections},(_,i)=>({id:'s'+(i+1),title:'Section '+i}))}]};}
function model(cat,state={},cfg={}){return p.calculate(cat,(k,d)=>Object.hasOwn(state,k)?state[k]:d,cfg,now);}
assert.equal(p.dayKey(Date.parse('2026-11-01T20:00:00Z')),'2026-11-02');
assert.equal(p.addDay('2026-11-02',-2),'2026-10-31');
const one=[subject('a','2026-11-05')];
let m=model(one,{}, {hours:1,sectionMinutes:20,quizMinutes:15,reviewMinutes:10,buffer:1,mixed:false});
assert.equal(m.remaining,55);assert.equal(m.subjects[0].studyDays,3);assert.equal(m.shortfalls.length,0);
assert.equal(m.todayPlan.minutes,55);assert.equal(m.todayPlan.blocks.reduce((a,b)=>a+b.minutes,0),55);
assert.ok(m.todayPlan.blocks.every(b=>b.minutes<=25));
// An old best cannot hide a more recent weak result; future work grows after a poor retry.
m=model(one,{'sg-done-a-Week01':{s1:true,s2:true},'sg-quiz-a-Week01':{best:100,last:40,ts:now}}, {mixed:false});
assert.equal(m.subjects[0].passed,0);assert.equal(m.remaining,25);assert.equal(m.subjects[0].progress<100,true);
m=model(one,{'sg-done-a-Week01':{s1:true,s2:true,unrelated:true},'sg-quiz-a-Week01':{last:80,ts:now}},{mixed:false});
assert.equal(m.remaining,0);assert.equal(m.subjects[0].progress,100);assert.equal(m.subjects[0].complete,2);
m=model(one,{'sg-quiz-a-Week01':{last:90,ts:Date.parse('2026-10-01T00:00Z')}},{mixed:false});
assert.equal(m.remaining,34); // 2 unread * 12 + 10 stale refresh
// Cumulative capacity catches two individually feasible subjects sharing one deadline.
m=model([subject('a','2026-11-04',3),subject('b','2026-11-04',3)],{}, {hours:1,sectionMinutes:20,quizMinutes:15,mixed:false,buffer:1});
assert.equal(m.subjects[0].studyDays,2);assert.equal(m.shortfalls.length,1);assert.equal(m.shortfalls[0].minutes,30);assert.equal(m.minHours,1.25);
// An earlier exam date consumes the whole day; it is not counted for later-subject work.
m=model([subject('a','2026-11-03'),subject('b','2026-11-05')],{}, {mixed:false,buffer:0});
assert.equal(m.subjects.find(s=>s.key==='b').studyDays,2);assert.ok(!m.schedule.some(d=>d.day==='2026-11-03'));
// A logged completed hour uses today's capacity, but never makes a negative schedule block.
m=model(one,{'sg-plan-time':[{day:'2026-11-02',minutes:60,id:'x'}]}, {hours:1,mixed:false});
assert.equal(m.todayPlan.minutes,0);assert.ok(m.schedule.every(d=>d.minutes>0));
// Missing a finish target warns even before the actual exam; no finite falsely reassuring pace.
m=model([subject('a','2026-11-03')],{}, {buffer:2,mixed:false});assert.equal(m.minHours,Infinity);assert.equal(m.subjects[0].behind,true);
// Past exams do not create an endless impossible remaining-work requirement.
m=model([subject('a','2026-11-01')]);assert.equal(m.remaining,0);assert.equal(m.active.length,0);
// The real site's catalog covers 70 weeks, plus the three available past-paper pages.
const html=fs.readFileSync(path.resolve(__dirname,'../../..','SEM 6 Study Hub.html'),'utf8');
const cat=JSON.parse(html.match(/<script type="application\/json" id="study-data">([\s\S]*?)<\/script>/)[1]);
assert.equal(cat.length,5);assert.equal(cat.flatMap(s=>s.weeks).filter(w=>!w.paper).length,70);assert.equal(cat.flatMap(s=>s.weeks).filter(w=>w.paper).length,3);
m=model(cat);assert.equal(m.subjects.reduce((a,s)=>a+s.total,0),538);assert.ok(m.remaining>0);assert.ok(m.todayPlan.blocks.length);
// Every BPAS week includes a new practice section without removing existing sections.
const bpas=cat.find(s=>s.key==='bpas').weeks.filter(w=>!w.paper);
assert.equal(bpas.length,15);
assert.ok(bpas.every(w=>w.sections.filter(s=>s.title==='Beginner practice — questions and step-by-step answers').length===1));
let all={};cat.forEach(s=>{s.weeks.forEach(w=>{all['sg-done-'+w.key]=Object.fromEntries(w.sections.map(x=>[x.id,true]));if(w.quiz)all['sg-quiz-'+w.key]={last:90,best:90,ts:now};});all['sg-quiz-'+s.key+'-mixed']={last:90,ts:now};});
m=model(cat,all);assert.equal(m.remaining,0);assert.equal(m.shortfalls.length,0);assert.ok(m.subjects.every(s=>s.ready));
// Focus history is only called observed pace once there is enough new evidence.
m=model(one,{'sg-plan-time':[{day:'2026-11-02',minutes:30}], 'sg-plan-events':[{kind:'section',day:'2026-11-02',on:true}]});assert.equal(m.observed,null);
console.log('PASS: Sri Lanka dates, deadlines, cumulative overload, exam-day exclusion, weak latest scores, stale review, logs, 70-week catalog and all-complete state');
