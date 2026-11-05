// Answer-it-yourself practice: fill in a real table one line at a time, with an explanation for each wrong answer.
(function(){
  var RULE = {Dr:'A debit records an asset, expense or drawings going up, or a liability, income or capital going down.',
              Cr:'A credit records a liability, income or capital going up, or an asset, expense or drawings going down.'};
  var TYPE = {asset:['an asset','debit'],expense:['an expense','debit'],drawings:['drawings','debit'],liability:['a liability','credit'],income:['income','credit'],capital:['capital','credit']};
  function load(k){ try{ return JSON.parse(localStorage.getItem(k)); }catch(e){ return null; } }
  function save(k,v){ try{ localStorage.setItem(k, JSON.stringify(v)); }catch(e){} }
  function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
  function money(n){ return Number(n).toLocaleString('en-US',{maximumFractionDigits:2}); }
  function parse(s){ var v = parseFloat(String(s).replace(/[,\s]|Rs\.?/gi,'')); return isNaN(v) ? null : v; }
  function dateOf(tx){ var m = /^([^:]{1,12}):/.exec(tx.tx); return m ? m[1] : ''; }

  document.querySelectorAll('.gp').forEach(function(root){
    var data = JSON.parse(root.querySelector('script').textContent), steps = [], key = 'sg-gp-' + root.id, accounts = Object.keys(data.accts || {});
    data.steps.forEach(function(item){
      if (item.e) item.e.forEach(function(entry, i){ steps.push({type:'entry', tx:item, entry:entry, n:i}); });
      else steps.push(item);
    });
    var state = load(key) || {i:0, first:0}, tries = 0;
    if (state.i > steps.length) state = {i:0, first:0};
    var box = document.createElement('div'); root.appendChild(box);

    function doneLine(s){
      if (s.type === 'num') return esc(s.q) + ' <b>' + money(s.a) + '</b>';
      return esc(s.q) + ' <b>' + esc(s.opts.filter(function(o){ return o.ok; })[0].t) + '</b>';
    }
    function advance(firstTry){
      if (firstTry) state.first++;
      state.i++; tries = 0; save(key, state); render();
      var focus = box.querySelector('.gp-acct,.gp-amt,.gp-opt'); if (focus) focus.focus({preventScroll:true});
    }
    function feedback(kind, html, cont){
      var f = box.querySelector('.gp-fb');
      f.className = 'gp-fb ' + kind; f.innerHTML = html; f.hidden = false;
      if (cont) {
        var b = document.createElement('button'); b.type = 'button'; b.textContent = state.i + 1 < steps.length ? 'Next →' : 'Finish';
        b.onclick = function(){ advance(cont.first); }; f.appendChild(b);
        box.querySelectorAll('.gp-now input,.gp-opt,.gp-check').forEach(function(el){ el.disabled = true; });
        var list = box.querySelector('.gp-list'); if (list) list.hidden = true;
        b.focus({preventScroll:true});
      } else if (tries >= 2) {
        var r = document.createElement('button'); r.type = 'button'; r.className = 'alt'; r.textContent = 'Show me the answer';
        r.onclick = reveal; f.appendChild(r);
      }
    }
    function reveal(){
      var s = steps[state.i], text;
      if (s.type === 'entry') text = 'Write <b>' + esc(s.entry.a) + '</b> with <b>Rs. ' + money(s.entry.amt) + '</b> in the <b>' + (s.entry.s === 'Dr' ? 'Debit' : 'Credit') + '</b> column. ' + esc(s.entry.w);
      else if (s.type === 'num') text = 'The answer is <b>' + money(s.a) + '</b>. ' + esc(s.why || s.think);
      else text = 'The answer is <b>' + esc(s.opts.filter(function(o){ return o.ok; })[0].t) + '</b>. ' + esc(s.why || '');
      feedback('gp-show', text + '<p class="gp-muted">Read the reason. It will help on the next line.</p>', {first:false});
    }
    function checkEntry(s){
      var typed = box.querySelector('.gp-acct').value.trim(), e = s.entry, sideName = e.s === 'Dr' ? 'Debit' : 'Credit';
      var dr = box.querySelector('.gp-dr').value.trim(), cr = box.querySelector('.gp-cr').value.trim();
      var pick = accounts.filter(function(a){ return a.toLowerCase() === typed.toLowerCase(); })[0];
      if (!typed) return feedback('gp-hint', 'Start with the Account cell. Click it to see the available accounts.');
      if (!pick) return feedback('gp-hint', '"' + esc(typed) + '" is not one of the accounts here. Click the Account cell and choose from the list.');
      if (!dr && !cr) return feedback('gp-hint', 'Now type the amount in the column you think is right: Debit or Credit.');
      if (dr && cr) return feedback('gp-hint', 'One line has only one amount. Keep it in one column and clear the other.');
      var side = dr ? 'Dr' : 'Cr', amount = parse(dr || cr);
      if (amount === null) return feedback('gp-hint', 'The amount must be a number. Commas are fine.');
      var other = s.tx.e.filter(function(x){ return x.a === pick && x.a !== e.a; })[0];
      if (pick !== e.a) {
        if (other && other.s === side && s.tx.e.indexOf(other) > s.n) return feedback('gp-hint', '<b>Good thinking.</b> ' + esc(pick) + ' does go in the ' + (side === 'Dr' ? 'Debit' : 'Credit') + ' column here. But a journal entry lists debits before credits, and this line comes first. Enter it on its own line next.');
        tries++;
        var type = TYPE[data.accts[pick]], msg;
        if (other && other.s !== side) msg = '<b>' + esc(pick) + '</b> is part of this transaction, but not in the ' + (side === 'Dr' ? 'Debit' : 'Credit') + ' column. ' + esc(other.w);
        else if (other) msg = '<b>' + esc(pick) + '</b> is part of this transaction, but this line is for a different account.';
        else msg = '<b>' + esc(pick) + '</b> does not change in this transaction, so it gets no entry.' + (type ? ' It is ' + type[0] + ', which increases on the ' + type[1] + ' side.' : '');
        return feedback('gp-bad', '<b>Not quite.</b> ' + msg + '<p><b>How to think:</b> ' + esc(s.tx.think) + ' ' + RULE[e.s] + ' Which account fits this ' + sideName.toLowerCase() + ' line?</p>');
      }
      if (side !== e.s) {
        tries++;
        return feedback('gp-bad', '<b>Right account, wrong column.</b> ' + esc(pick) + ' belongs in the ' + sideName + ' column, not ' + (side === 'Dr' ? 'Debit' : 'Credit') + '. ' + esc(e.w) + '<p><b>How to think:</b> did this account go up or down? ' + RULE[e.s] + '</p>');
      }
      if (Math.abs(amount - e.amt) > 0.01) {
        tries++;
        return feedback('gp-bad', '<b>The account and column are right, but the amount is not.</b><p><b>How to think:</b> read the transaction again and find the rupee value of this one line. Do not add other transactions to it.' + (s.tx.e.length > 2 ? ' This transaction has several lines, so each line has its own amount, and total debits must equal total credits.' : ' The debit and credit of a transaction are always the same amount.') + '</p>');
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
    function journal(s){
      var entries = steps.filter(function(x){ return x.type === 'entry'; });
      if (!entries.length) return '';
      var done = steps.slice(0, state.i).filter(function(x){ return x.type === 'entry'; }), dr = 0, cr = 0, last = null, rows = '';
      done.forEach(function(x){
        var isDr = x.entry.s === 'Dr'; if (isDr) dr += x.entry.amt; else cr += x.entry.amt;
        rows += '<tr class="gp-row-done"><td>' + (x.tx !== last ? esc(dateOf(x.tx)) : '') + '</td><td' + (isDr ? '' : ' class="gp-credit"') + '>' + esc(x.entry.a) + '</td><td class="r">' + (isDr ? money(x.entry.amt) : '') + '</td><td class="r">' + (isDr ? '' : money(x.entry.amt)) + '</td></tr>';
        last = x.tx;
      });
      if (s && s.type === 'entry') {
        rows += '<tr class="gp-now"><td>' + (s.tx !== last ? esc(dateOf(s.tx)) : '') + '</td><td class="gp-cell-acct"><input class="gp-acct" placeholder="Click to choose" autocomplete="off" role="combobox" aria-expanded="false" aria-label="Account"><div class="gp-list" role="listbox" hidden></div></td><td><input class="gp-dr" inputmode="decimal" autocomplete="off" aria-label="Debit amount"></td><td><input class="gp-cr" inputmode="decimal" autocomplete="off" aria-label="Credit amount"></td></tr>';
        s.tx.e.slice(s.n + 1).forEach(function(){ rows += '<tr class="gp-row-next"><td></td><td></td><td></td><td></td></tr>'; });
      }
      return '<div class="gp-tablewrap"><table class="gp-table"><thead><tr><th class="gp-col-date">Date</th><th>Account</th><th class="r gp-col-amt">Debit (Rs.)</th><th class="r gp-col-amt">Credit (Rs.)</th></tr></thead><tbody>' + rows + '</tbody>' +
        (done.length ? '<tfoot><tr><td></td><td>Total so far</td><td class="r">' + money(dr) + '</td><td class="r">' + money(cr) + '</td></tr></tfoot>' : '') + '</table></div>';
    }
    function grid(s){
      if (!data.table) return '';
      var values = {};
      steps.slice(0, state.i).forEach(function(x){ if (x.fill) values[x.fill.join()] = money(x.a); });
      var head = data.table.cols.map(function(c){ return '<th>' + esc(c) + '</th>'; }).join('');
      var body = data.table.rows.map(function(row, r){
        return '<tr' + (row.total ? ' class="gp-row-total"' : '') + '>' + (row.cells || row).map(function(cell, c){
          var id = r + ',' + c;
          if (s && s.fill && s.fill.join() === id) return '<td class="gp-now"><input class="gp-amt" inputmode="decimal" autocomplete="off" aria-label="' + esc(data.table.cols[c]) + '"></td>';
          return '<td>' + esc(values[id] !== undefined ? values[id] : cell) + '</td>';
        }).join('') + '</tr>';
      }).join('');
      return '<div class="gp-tablewrap gp-scroll"><table class="gp-table"><thead><tr>' + head + '</tr></thead><tbody>' + body + '</tbody></table></div>';
    }
    function render(){
      var pct = Math.round(state.i / steps.length * 100), s = steps[state.i], html = '<div class="gp-bar"><span>' + (s ? 'Step ' + (state.i + 1) + ' of ' + steps.length : 'Finished') + '</span><i><b style="width:' + pct + '%"></b></i><button type="button" class="alt gp-reset">Start again</button></div>';
      var notes = steps.slice(0, state.i).filter(function(x){ return x.type !== 'entry' && !x.fill; });
      if (notes.length) html += '<ol class="gp-done">' + notes.map(function(x){ return '<li>' + doneLine(x) + '</li>'; }).join('') + '</ol>';
      if (!s) {
        html += journal() + grid() + '<div class="gp-fb gp-ok"><b>You finished this question.</b> ' + state.first + ' of ' + steps.length + ' steps were right on the first try. Open the full answer below to compare.' + (data.end ? ' ' + esc(data.end) : '') + '</div>';
      } else if (s.type === 'entry') {
        html += '<p class="gp-tx">' + esc(s.tx.tx) + '</p><p class="gp-howto"><b>Line ' + (s.n + 1) + ' of ' + s.tx.e.length + ' for this transaction.</b> Click the Account cell and choose an account. Then type the amount in the Debit or the Credit column. Debit lines come first.</p>' + journal(s) + '<button type="button" class="gp-check">Check this line</button><div class="gp-fb" aria-live="polite" hidden></div>';
      } else if (s.type === 'num') {
        html += journal() + (s.tx ? '<p class="gp-tx">' + esc(s.tx) + '</p>' : '') + '<p class="gp-q"><b>' + esc(s.q) + '</b>' + (s.fill ? ' <span class="gp-muted">Type it in the highlighted cell.</span>' : '') + '</p>' + grid(s) +
          (s.fill ? '' : '<label class="gp-label">Your answer <input class="gp-amt gp-amt-free gp-now-input" inputmode="decimal" autocomplete="off"></label> ') + '<button type="button" class="gp-check">Check</button><div class="gp-fb" aria-live="polite" hidden></div>';
      } else {
        html += journal() + grid(s) + (s.tx ? '<p class="gp-tx">' + esc(s.tx) + '</p>' : '') + '<p class="gp-q"><b>' + esc(s.q) + '</b></p><div class="gp-opts">' +
          s.opts.map(function(o, i){ return '<button type="button" class="alt gp-opt" data-i="' + i + '">' + esc(o.t) + '</button>'; }).join('') + '</div><div class="gp-fb" aria-live="polite" hidden></div>';
      }
      box.innerHTML = html;
      box.querySelector('.gp-reset').onclick = function(){ state = {i:0, first:0}; tries = 0; save(key, state); render(); };
      box.querySelectorAll('.gp-opt').forEach(function(b){
        b.onclick = function(){
          var o = s.opts[+b.dataset.i];
          if (o.ok) return feedback('gp-ok', '<b>Correct.</b> ' + esc(s.why || o.why || ''), {first:tries === 0});
          tries++; feedback('gp-bad', '<b>Not quite.</b> ' + esc(o.why) + (s.think ? '<p><b>How to think:</b> ' + esc(s.think) + '</p>' : ''));
        };
      });
      var check = box.querySelector('.gp-check');
      if (check) check.onclick = function(){ s.type === 'entry' ? checkEntry(s) : checkNum(s); };
      box.querySelectorAll('.gp-amt,.gp-dr,.gp-cr').forEach(function(input){
        input.onkeydown = function(ev){ if (ev.key === 'Enter') { ev.preventDefault(); check.click(); } };
      });
      if (s && s.type === 'entry') accountPicker();
    }
    function accountPicker(){
      var input = box.querySelector('.gp-acct'), list = box.querySelector('.gp-list'), active = -1;
      function show(all){
        var q = input.value.trim().toLowerCase();
        var match = accounts.filter(function(a){ return all || a.toLowerCase().indexOf(q) > -1; });
        list.innerHTML = match.length ? match.map(function(a){ return '<div class="gp-item" role="option" data-a="' + esc(a) + '">' + esc(a) + '</div>'; }).join('') : '<div class="gp-none">No account with that name</div>';
        list.hidden = false; active = -1; input.setAttribute('aria-expanded', 'true');
      }
      function hide(){ list.hidden = true; input.setAttribute('aria-expanded', 'false'); }
      function choose(a){ input.value = a; hide(); box.querySelector('.gp-dr').focus({preventScroll:true}); }
      input.onfocus = function(){ show(true); };
      input.onclick = function(){ show(true); };
      input.oninput = function(){ show(false); };
      input.onblur = function(){ setTimeout(hide, 120); };
      list.onmousedown = function(ev){ var item = ev.target.closest('.gp-item'); if (item) { ev.preventDefault(); choose(item.dataset.a); } };
      input.onkeydown = function(ev){
        var items = list.querySelectorAll('.gp-item');
        if (ev.key === 'ArrowDown' || ev.key === 'ArrowUp') {
          ev.preventDefault(); if (list.hidden) show(true);
          items = list.querySelectorAll('.gp-item'); if (!items.length) return;
          active = (active + (ev.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length;
          items.forEach(function(x, i){ x.classList.toggle('on', i === active); });
          items[active].scrollIntoView({block:'nearest'});
        } else if (ev.key === 'Enter') {
          ev.preventDefault();
          if (!list.hidden && active > -1) choose(items[active].dataset.a);
          else if (!list.hidden && items.length === 1) choose(items[0].dataset.a);
          else box.querySelector('.gp-check').click();
        } else if (ev.key === 'Escape') hide();
      };
    }
    render();
  });
})();
