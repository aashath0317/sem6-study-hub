// Run with Node.js and jsdom available (npm install --no-save jsdom).
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { JSDOM, VirtualConsole } = require('jsdom');
const root = path.resolve(__dirname, '../../..');
const dataMining = process.env.STUDY_TRANSLATION_SUBJECT === 'dm';
const business = process.env.STUDY_TRANSLATION_SUBJECT === 'bpas';
const directory = path.join(root, dataMining ? 'Data Mining' : business ? 'Business Processes and Accounting Systems' : 'Human Computer Interaction');
function files(dir) { return fs.readdirSync(dir, {withFileTypes:true}).flatMap(e => e.isDirectory() ? files(path.join(dir,e.name)) : e.name.endsWith('.html') ? [path.join(dir,e.name)] : []); }
const tick = () => new Promise(resolve => setTimeout(resolve, 0));
(async () => {
  let totalSections=0, totalQuestions=0, totalTools=0;
  const untranslated = [];
  const pages = files(directory).filter(file => !dataMining || fs.readFileSync(file,"utf8").includes('id="hci-tamil-data"'));
  if (!dataMining) assert.equal(pages.length,business ? 17 : 15);
  else assert.ok(pages.length > 0);
  for (const file of pages) {
    const errors = [];
    const vc = new VirtualConsole();
    vc.on('jsdomError', e => errors.push(e.cause?.stack || e.message));
    const dom = new JSDOM(fs.readFileSync(file,'utf8'), {
      url:'https://offline-hci.test/' + encodeURI(path.relative(root,file)), runScripts:'dangerously', pretendToBeVisual:true, virtualConsole:vc,
      beforeParse(w) {
        w.matchMedia = () => ({matches:false,addListener(){},removeListener(){},addEventListener(){},removeEventListener(){}});
        w.HTMLElement.prototype.scrollIntoView = function(){};
        w.confirm = () => true;
        w.HTMLMediaElement.prototype.pause = function(){};
        w.HTMLMediaElement.prototype.play = function(){return Promise.resolve();};
      }
    });
    const {document:d} = dom.window;
    await tick();
    const button = d.querySelector('.hci-language');
    assert.ok(button, 'Missing Tamil floating button: ' + file);
    const sections = [...d.querySelectorAll('section[data-sec]')];
    totalSections+=sections.length;
    totalQuestions+=d.querySelectorAll('.qq').length;
    totalTools+=d.querySelectorAll('.tool').length;
    assert.equal(d.querySelectorAll('.native-toggle').length,sections.length,'Missing original explanation buttons');
    assert.equal(d.querySelectorAll('.tamil-native').length,sections.length,'Missing original explanations');
    const ids = [...d.querySelectorAll('[id]')].map(el=>el.id);
    assert.equal(new Set(ids).size, ids.length,'Duplicate IDs: '+file);
    const tools = [...d.querySelectorAll('.tool')];
    const input = d.querySelector('.quiz input[type=radio]');
    if(input) { input.checked=true; input.dispatchEvent(new dom.window.Event('change',{bubbles:true})); }
    const explanationButton = d.querySelector('.native-toggle');
    if(explanationButton) {
      explanationButton.click();
      assert.equal(d.querySelector('.tamil-native').hidden,false);
      assert.equal(d.querySelector('.section-english').hidden,true);
      d.querySelector('.native-reference').click();
      assert.equal(d.querySelector('.section-english').hidden,false);
    }
    button.click(); await tick();
    if(explanationButton) assert.equal(d.querySelector('.tamil-native').hidden,true);
    assert.equal(d.documentElement.lang,'ta');
    assert.equal(button.textContent,'English');
    const translationData = JSON.parse(d.querySelector('#hci-tamil-data').textContent);
    const plain = html => { const el=d.createElement('div');el.innerHTML=html;return el.textContent.trim(); };
    const expectedQuestions = new Set(Object.values(translationData.markup).map(plain));
    d.querySelectorAll('.qt').forEach(q => {
      const copy=q.cloneNode(true);copy.querySelector('b').remove();copy.querySelector('.qw')?.remove();
      assert.ok(expectedQuestions.has(copy.textContent.trim()),'Question not translated: '+copy.textContent);
    });
    sections.forEach(s => { assert.equal(s.querySelector('.hci-en').hidden,true); assert.equal(s.querySelector('.hci-ta').hidden,false); });
    tools.forEach(tool => assert.ok(tool.closest('.hci-ta'),'Live tool did not move to Tamil panel'));
    const pettyCategory = d.querySelector('#pcb .ct');
    if(pettyCategory) {
      pettyCategory.value='Postage';
      d.querySelector('#pcb .ad').click(); await tick();
      const row=d.querySelectorAll('#pcb .out tr')[2];
      assert.equal(row.children[6].textContent,'850','Translated category value broke petty-cash allocation');
      assert.equal(row.children[4].textContent,'');
      d.querySelector('#pcb .rs').click(); await tick();
    }
    const scan = () => {
      const walker=d.createTreeWalker(d.querySelector('main'),dom.window.NodeFilter.SHOW_TEXT);
      let node;
      while((node=walker.nextNode())) {
        if(node.parentElement.closest('script,style,.hci-en,svg') || node.parentElement.closest('[hidden]'))continue;
        const text=node.nodeValue.trim();
        if((text.match(/[a-zA-Z]{3,}/g)||[]).length>=5) untranslated.push({file:path.relative(directory,file),text});
      }
    };
    scan();
    // Exercise every tool's alternatives, including content created after the toggle.
    for(const tool of tools) {
      for(const select of tool.querySelectorAll('select')) {
        for(const option of [...select.options]) { select.value=option.value; select.dispatchEvent(new dom.window.Event('input',{bubbles:true})); select.dispatchEvent(new dom.window.Event('change',{bubbles:true})); await tick(); scan(); }
      }
      for(const checkbox of tool.querySelectorAll('input[type=checkbox]')) { checkbox.checked=!checkbox.checked; checkbox.dispatchEvent(new dom.window.Event('change',{bubbles:true})); await tick(); scan(); }
      for(const action of [...tool.querySelectorAll('button')]) { if(!action.isConnected) continue; action.click(); await tick(); scan(); }
    }
    // KDD is a multi-step demonstration: visit every stage, not just the next button once.
    if(dataMining && d.querySelector('#kdd')) {
      for(const stage of d.querySelectorAll('#kdd .row .pill')) { stage.click(); await tick(); scan(); }
    }
    if(dataMining) {
      for(const selector of ['#km .st','#ag .st']) {
        for(let step=0; step<25; step++) {
          const action=d.querySelector(selector);
          if(!action || action.disabled) break;
          const previous=action.closest('.tool').textContent;
          action.click(); await tick(); scan();
          if(action.closest('.tool').textContent===previous) break;
        }
      }
    }
    // Financial controls must keep their edited values and numeric results when labels change.
    const editedInputs = [...d.querySelectorAll('.tool input[type=number],.tool input[type=range]')];
    if(business) {
      for(const el of editedInputs) {
        const value=Number(el.value); if(!Number.isFinite(value)) continue;
        el.value=String(value===0 ? 1 : value*1.1);
        el.dispatchEvent(new dom.window.Event('input',{bubbles:true}));
        el.dispatchEvent(new dom.window.Event('change',{bubbles:true}));
      }
      await tick();
    }
    const editedValues=editedInputs.map(el=>el.value);
    const numericOutputs=()=>[...d.querySelectorAll('.tool .out')].map(el=>(el.textContent.match(/\d+(?:[,.]\d+)*/g)||[]).sort().join('|'));
    const tamilNumbers=business ? numericOutputs() : null;
    // A tool that reads a translated label must still retain its source-language state.
    const principle = d.querySelector('#pr .ps');
    let deletedLabel = null;
    if(principle) {
      principle.value='tol';
      d.querySelector('#pr .good').checked=true;
      principle.dispatchEvent(new dom.window.Event('change',{bubbles:true})); await tick();
      const item=d.querySelector('#pr .ml li');
      item.click(); await tick();
      deletedLabel='📧 Meeting notes';
    }
    // Toggle twice: selected answers, control objects and tool event handlers must survive.
    button.click(); await tick();
    assert.equal(d.documentElement.lang,'en');
    if(deletedLabel) assert.ok(d.querySelector('#pr .msg').textContent.includes(deletedLabel),'Tool captured translated label as source state');
    if(input) assert.equal(input.checked,true,'Quiz answer lost');
    assert.deepEqual(editedInputs.map(el=>el.value),editedValues,'Edited tool values lost');
    if(business) assert.deepEqual(numericOutputs(),tamilNumbers,'Language toggle changed financial results');
    tools.forEach(tool=> assert.ok(tool.closest('.hci-en'),'Live tool not returned'));
    for(const tool of tools) assert.ok(d.contains(tool),'Live tool replaced');
    assert.equal(d.querySelectorAll('.quiz input[type=radio]:checked').length,input?1:0);
    button.click(); await tick();
    const check = d.querySelector('.qcheck');
    if(check) { check.click(); await tick(); assert.ok(d.querySelector('.qres .qscore'),'Quiz grading failed'); }
    if(errors.length && process.env.HCI_TRANSLATION_REPORT) fs.writeFileSync(process.env.HCI_TRANSLATION_REPORT,JSON.stringify(untranslated,null,2));
    assert.deepEqual(errors,[],'Script errors: '+file);
    dom.window.close();
    console.log('PASS',path.relative(directory,file));
  }
  const report = [...new Map(untranslated.map(x=>[x.file+'|'+x.text,x])).values()];
  if(process.env.HCI_TRANSLATION_REPORT) fs.writeFileSync(process.env.HCI_TRANSLATION_REPORT,JSON.stringify(report,null,2));
  console.log(`PASS: ${pages.length} pages, ${totalSections} sections, ${totalQuestions} rendered questions, ${totalTools} live tools; toggles, tool branches, quiz selections and grading.`);
})().catch(e=>{console.error(e);process.exit(1);});
