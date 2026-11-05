// Answer-it-yourself practice: one step at a time, with an explanation for each wrong answer.
(function(){
  var RULE = {Dr:'A debit records an asset, expense or drawings going up, or a liability, income or capital going down.',
              Cr:'A credit records a liability, income or capital going up, or an asset, expense or drawings going down.'};
  var TYPE = {asset:['an asset','debit'],expense:['an expense','debit'],drawings:['drawings','debit'],liability:['a liability','credit'],income:['income','credit'],capital:['capital','credit']};
  var NTH = ['1st','2nd','3rd','4th','5th'];
  function load(k){ try{ return JSON.parse(localStorage.getItem(k)); }catch(e){ return null; } }
  function save(k,v){ try{ localStorage.setItem(k, JSON.stringify(v)); }catch(e){} }
  function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
  function money(n){ return Number(n).toLocaleString('en-US',{maximumFractionDigits:2}); }
  function parse(s){ var v = parseFloat(String(s).replace(/[,\s]|Rs\.?/gi,'')); return isNaN(v) ? null : v; }

  document.querySelectorAll('.gp').forEach(function(root){
    var data = JSON.parse(root.querySelector('script').textContent), steps = [], key = 'sg-gp-' + root.id;
    data.steps.forEach(function(item){
      if (item.e) item.e.forEach(function(entry, i){ steps.push({type:'entry', tx:item, entry:entry, n:i}); });
      else steps.push(item);
    });
    var state = load(key) || {i:0, first:0}, tries = 0, picked = null;
    if (state.i > steps.length) state = {i:0, first:0};
    var box = document.createElement('div'); root.appendChild(box);

    function doneLine(s){
      if (s.type === 'entry') return (s.entry.s === 'Dr' ? 'Debit ' : 'Credit ') + esc(s.entry.a) + ' ' + money(s.entry.amt) + ' <span class="gp-muted">(' + esc(s.tx.tx) + ')</span>';
      if (s.type === 'num') return esc(s.q) + ' <b>' + money(s.a) + '</b>';
      return esc(s.q) + ' <b>' + esc(s.opts.filter(function(o){ return o.ok; })[0].t) + '</b>';
    }
    function advance(firstTry){
      if (firstTry) state.first++;
      state.i++; tries = 0; picked = null; save(key, state); render();
      var focus = box.querySelector('input,.gp-opt'); if (focus) focus.focus({preventScroll:true});
    }
    function feedback(kind, html, cont){
      var f = box.querySelector('.gp-fb');
      f.className = 'gp-fb ' + kind; f.innerHTML = html; f.hidden = false;
      if (cont) {
        var b = document.createElement('button'); b.type = 'button'; b.textContent = state.i + 1 < steps.length ? 'Next step →' : 'Finish';
        b.onclick = function(){ advance(cont.first); }; f.appendChild(b);
        box.querySelectorAll('.gp-cur input,.gp-cur .gp-opt,.gp-check').forEach(function(el){ el.disabled = true; });
        b.focus({preventScroll:true});
      } else if (tries >= 2) {
        var r = document.createElement('button'); r.type = 'button'; r.className = 'alt'; r.textContent = 'Show me the answer';
        r.onclick = reveal; f.appendChild(r);
      }
    }
    function reveal(){
      var s = steps[state.i], text;
      if (s.type === 'entry') text = (s.entry.s === 'Dr' ? 'Debit ' : 'Credit ') + '<b>' + esc(s.entry.a) + '</b> with <b>Rs. ' + money(s.entry.amt) + '</b>. ' + esc(s.entry.w);
      else if (s.type === 'num') text = 'The answer is <b>' + money(s.a) + '</b>. ' + esc(s.why || s.think);
      else text = 'The answer is <b>' + esc(s.opts.filter(function(o){ return o.ok; })[0].t) + '</b>. ' + esc(s.why || '');
      feedback('gp-show', text + ' <p class="gp-muted">Read why, then try this step type again on the next one.</p>', {first:false});
    }
    function checkEntry(s){
      var amount = parse(box.querySelector('.gp-amt').value), e = s.entry, side = e.s === 'Dr' ? 'debit' : 'credit';
      if (!picked) return feedback('gp-hint', 'First choose the account for this entry.');
      if (picked !== e.a) {
        tries++;
        var other = s.tx.e.filter(function(x){ return x.a === picked && x.s !== e.s; })[0], type = TYPE[data.accts[picked]], msg;
        if (other) msg = '<b>' + esc(picked) + '</b> is part of this transaction, but it belongs on the other side. ' + esc(other.w);
        else if (s.tx.e.some(function(x){ return x.a === picked; })) msg = '<b>' + esc(picked) + '</b> is on this side too, but it is a different line of this entry. Choose the one for this line.';
        else msg = '<b>' + esc(picked) + '</b> does not change in this transaction, so it gets no entry.' + (type ? ' It is ' + type[0] + ', which increases on the ' + type[1] + ' side.' : '');
        return feedback('gp-bad', '<b>Not quite.</b> ' + msg + '<p><b>How to think:</b> ' + esc(s.tx.think) + ' ' + RULE[e.s] + ' Which account fits the ' + side + ' side?</p>');
      }
      if (amount === null) return feedback('gp-hint', 'Good account. Now type the amount in rupees.');
      if (Math.abs(amount - e.amt) > 0.01) {
        tries++;
        return feedback('gp-bad', '<b>The account is right, but the amount is not.</b><p><b>How to think:</b> read the transaction again and find the rupee value of this one line. Do not add other transactions to it.' + (s.tx.e.length > 2 ? ' This transaction has several lines, so each line has its own amount.' : ' Debit and credit are always the same amount.') + '</p>');
      }
      feedback('gp-ok', '<b>Correct.</b> ' + esc(e.w), {first:tries === 0});
    }
    function checkNum(s){
      var v = parse(box.querySelector('.gp-amt').value);
      if (v === null) return feedback('gp-hint', 'Type a number first. Commas are fine.');
      if (Math.abs(v - s.a) <= (s.tol || 0.01)) return feedback('gp-ok', '<b>Correct.</b> ' + esc(s.why || ''), {first:tries === 0});
      tries++;
      var known = (s.mistakes || {})[String(v)];
      feedback('gp-bad', '<b>Not quite.</b> ' + (known ? esc(known) : 'You typed ' + money(v) + '.') + '<p><b>How to think:</b> ' + esc(s.think) + '</p>');
    }
    function render(){
      var pct = Math.round(state.i / steps.length * 100), html = '<div class="gp-bar"><span>' + (state.i < steps.length ? 'Step ' + (state.i + 1) + ' of ' + steps.length : 'Finished') + '</span><i><b style="width:' + pct + '%"></b></i><button type="button" class="alt gp-reset">Start again</button></div>';
      if (state.i) html += '<ol class="gp-done">' + steps.slice(0, state.i).map(function(s){ return '<li>' + doneLine(s) + '</li>'; }).join('') + '</ol>';
      var s = steps[state.i];
      if (!s) {
        html += '<div class="gp-fb gp-ok"><b>You finished this question.</b> ' + state.first + ' of ' + steps.length + ' steps were right on the first try. Open the full answer below to compare the layout.' + (data.end ? ' ' + esc(data.end) : '') + '</div>';
      } else if (s.type === 'entry') {
        var count = s.tx.e.length;
        html += '<div class="gp-cur"><p class="gp-tx">' + esc(s.tx.tx) + '</p><p><b>' + NTH[s.n] + ' entry of ' + count + ': which account is ' + (s.entry.s === 'Dr' ? 'debited' : 'credited') + '?</b></p><div class="gp-opts">' +
          Object.keys(data.accts).map(function(a){ return '<button type="button" class="alt gp-opt" data-a="' + esc(a) + '">' + esc(a) + '</button>'; }).join('') +
          '</div><label class="gp-label">Amount (Rs.) <input class="gp-amt" inputmode="decimal" autocomplete="off"></label> <button type="button" class="gp-check">Check</button><div class="gp-fb" aria-live="polite" hidden></div></div>';
      } else if (s.type === 'num') {
        html += '<div class="gp-cur">' + (s.tx ? '<p class="gp-tx">' + esc(s.tx) + '</p>' : '') + '<p><b>' + esc(s.q) + '</b></p><label class="gp-label">Your answer <input class="gp-amt" inputmode="decimal" autocomplete="off"></label> <button type="button" class="gp-check">Check</button><div class="gp-fb" aria-live="polite" hidden></div></div>';
      } else {
        html += '<div class="gp-cur">' + (s.tx ? '<p class="gp-tx">' + esc(s.tx) + '</p>' : '') + '<p><b>' + esc(s.q) + '</b></p><div class="gp-opts">' +
          s.opts.map(function(o, i){ return '<button type="button" class="alt gp-opt" data-i="' + i + '">' + esc(o.t) + '</button>'; }).join('') + '</div><div class="gp-fb" aria-live="polite" hidden></div></div>';
      }
      box.innerHTML = html;
      box.querySelector('.gp-reset').onclick = function(){ state = {i:0, first:0}; tries = 0; picked = null; save(key, state); render(); };
      box.querySelectorAll('.gp-opt').forEach(function(b){
        b.onclick = function(){
          if (s.type === 'entry') { picked = b.dataset.a; box.querySelectorAll('.gp-opt').forEach(function(x){ x.classList.toggle('on', x === b); x.setAttribute('aria-pressed', x === b); }); return; }
          var o = s.opts[+b.dataset.i];
          if (o.ok) return feedback('gp-ok', '<b>Correct.</b> ' + esc(s.why || o.why || ''), {first:tries === 0});
          tries++; feedback('gp-bad', '<b>Not quite.</b> ' + esc(o.why) + (s.think ? '<p><b>How to think:</b> ' + esc(s.think) + '</p>' : ''));
        };
      });
      var c = box.querySelector('.gp-check');
      if (c) c.onclick = function(){ s.type === 'entry' ? checkEntry(s) : checkNum(s); };
      var input = box.querySelector('.gp-amt');
      if (input) input.onkeydown = function(ev){ if (ev.key === 'Enter') { ev.preventDefault(); c.click(); } };
    }
    render();
  });
})();
