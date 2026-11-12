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
    var CB = data.cashbook || null, PC = data.pettycash || null;
    function pcSteps(list){
      // A petty cash book has one row per transaction: money in goes under Received; money out goes under Total paid and one analysis column.
      return list.filter(function(item){ return item.e; }).map(function(item){
        var rec = item.e.filter(function(x){ return x.a === 'Petty cash' && x.s === 'Dr'; })[0];
        var pay = item.e.filter(function(x){ return x.a !== 'Petty cash' && x.s === 'Dr'; })[0];
        var m = /Pay (.+?) Rs\./.exec(item.tx), details = rec ? (/restore/i.test(item.tx) ? 'Cash (restore imprest)' : 'Cash (float)') : m ? m[1].charAt(0).toUpperCase() + m[1].slice(1) : pay.a;
        return {type:'pc', tx:item, kind:rec ? 'rec' : 'pay', entry:rec || pay, amt:(rec || pay).amt, col:rec ? null : pay.a, details:details};
      });
    }
    var PRIOR = [];
    if (PC && PC.prior) { var pe = document.getElementById(PC.prior); if (pe) PRIOR = pcSteps(JSON.parse(pe.querySelector('script').textContent).steps); }
    function pcLabel(a){ var c = PC.cols.filter(function(x){ return x[0] === a; })[0]; return c ? c[1] : a; }
    function isCB(a){ return a === 'Cash' || a === 'Bank'; }
    function isDisc(a){ return /^Discount (allowed|received)$/.test(a); }
    data.steps.forEach(function(item){
      if (item.e && PC) steps.push(pcSteps([item])[0]);
      else if (item.e && CB) {
        // A cash book records only the Cash/Bank half of each entry; the other account is named in Particulars.
        var lines = item.e.filter(function(x){ return isCB(x.a); }), contra = lines.length > 1;
        var others = item.e.filter(function(x){ return !isCB(x.a) && !isDisc(x.a); });
        lines.forEach(function(entry, i){
          var disc = item.e.filter(function(x){ return isDisc(x.a) && x.s === entry.s; })[0];
          var part = contra ? lines.filter(function(x){ return x !== entry; })[0].a : (others[0] ? others[0].a : '');
          steps.push({type:'cb', tx:item, entry:entry, n:i, count:lines.length, side:entry.s, col:entry.a, part:part, contra:contra, disc:disc ? disc.amt : 0, ledger:contra ? [] : others.concat(item.e.filter(isDiscEntry))});
        });
      }
      else if (item.e) item.e.forEach(function(entry, i){ steps.push({type:'entry', tx:item, entry:entry, n:i}); });
      else steps.push(item);
    });
    function isDiscEntry(x){ return isDisc(x.a); }
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
      var focus = box.querySelector('.gp-acct,.gp-amt,.gp-opt');
      if (focus) { focus.focus({preventScroll:true}); focus.scrollIntoView({block:'nearest'}); }
      else if (box.querySelector('.gp-fb')) box.querySelector('.gp-fb').scrollIntoView({block:'nearest'});
    }
    function feedback(kind, html, cont){
      var f = box.querySelector('.gp-fb');
      f.className = 'gp-fb ' + kind; f.innerHTML = html; f.hidden = false;
      if (cont) {
        var b = document.createElement('button'); b.type = 'button'; b.textContent = state.i + 1 < steps.length ? 'Next →' : 'Finish';
        b.onclick = function(){ advance(cont.first); }; f.appendChild(b);
        box.querySelectorAll('.gp-now input,.gp-opt,.gp-check').forEach(function(el){ el.disabled = true; });
        box.querySelectorAll('.gp-list').forEach(function(list){ list.hidden = true; });
        b.focus({preventScroll:true});
      } else if (tries >= 2) {
        var r = document.createElement('button'); r.type = 'button'; r.className = 'alt'; r.textContent = 'Show me the answer';
        r.onclick = reveal; f.appendChild(r);
      }
      f.scrollIntoView({block:'nearest'});
    }
    function reveal(){
      var s = steps[state.i], text;
      if (s.type === 'pc') text = s.kind === 'rec' ? 'Write Rs. <b>' + money(s.amt) + '</b> in the <b>Received</b> column only. Money is coming into petty cash from the main cash book.' : 'Write Rs. <b>' + money(s.amt) + '</b> in <b>Total paid</b> and the same Rs. <b>' + money(s.amt) + '</b> in the <b>' + esc(pcLabel(s.col)) + '</b> analysis column. Leave Received empty.';
      else if (s.type === 'cb') text = 'Write it on the <b>' + (s.side === 'Dr' ? 'Receipts (Dr)' : 'Payments (Cr)') + '</b> side: Particulars <b>' + esc(s.part + (s.contra ? ' (C)' : '')) + '</b>, <b>' + s.col + '</b> column Rs. <b>' + money(s.entry.amt) + '</b>' + (s.disc ? ', discount column Rs. <b>' + money(s.disc) + '</b>' : '') + '. ' + esc(s.entry.w);
      else if (s.type === 'entry') text = 'Write <b>' + esc(s.entry.a) + '</b> with <b>Rs. ' + money(s.entry.amt) + '</b> in the <b>' + (s.entry.s === 'Dr' ? 'Debit' : 'Credit') + '</b> column. ' + esc(s.entry.w);
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
    function checkPc(s){
      var tr = box.querySelector('tr.gp-now'), rec = tr.querySelector('.gp-rec').value.trim(), tot = tr.querySelector('.gp-tot').value.trim(), cols = [];
      tr.querySelectorAll('.gp-ana').forEach(function(x){ if (x.value.trim()) cols.push([x.dataset.a, x.value.trim()]); });
      if (s.kind === 'rec') {
        if (tot || cols.length) { tries++; return feedback('gp-bad', '<b>Not quite.</b> This money is coming <b>into</b> petty cash, so it goes in the <b>Received</b> column only. Total paid and the analysis columns are for money paid out.'); }
        if (!rec) return feedback('gp-hint', 'Type the amount in the Received column.');
        var r = parse(rec); if (r === null) return feedback('gp-hint', 'The amount must be a number. Commas are fine.');
        if (Math.abs(r - s.amt) > 0.01) { tries++; return feedback('gp-bad', '<b>The column is right, but the amount is not.</b> Read the transaction again for the rupee value received.'); }
        return feedback('gp-ok', '<b>Correct.</b> ' + (/restore/i.test(s.tx.tx) ? 'Under the imprest system the top-up equals the amount spent, which brings petty cash back to the full float.' : 'The float comes from the main cash book (Cr Cash there), so it is entered as money received here.'), {first:tries === 0});
      }
      if (rec) { tries++; return feedback('gp-bad', '<b>Not quite.</b> This is a payment <b>out</b> of petty cash, so the Received column stays empty. Use Total paid and one analysis column.'); }
      if (!tot) return feedback('gp-hint', 'Type the amount paid in the <b>Total paid</b> column first.');
      var t = parse(tot); if (t === null) return feedback('gp-hint', 'The amount must be a number. Commas are fine.');
      if (Math.abs(t - s.amt) > 0.01) { tries++; return feedback('gp-bad', '<b>Total paid is wrong.</b> Write the rupee value of this one payment.'); }
      if (!cols.length) return feedback('gp-hint', 'Now type the same amount in the <b>analysis column</b> that describes what the money was spent on.');
      if (cols.length > 1) return feedback('gp-hint', 'One payment goes in one analysis column only. Clear the others.');
      if (cols[0][0] !== s.col) { tries++; return feedback('gp-bad', '<b>Wrong analysis column.</b> ' + esc(s.details) + ' is not a ' + esc(pcLabel(cols[0][0])) + ' item. Ask what the money was spent on, and choose the column with that heading.' + (s.col !== 'Creditor X' ? '' : ' A payment to a supplier we owe goes in the Ledger a/c column, because it reduces a debt instead of being an expense.')); }
      var v = parse(cols[0][1]);
      if (v === null || Math.abs(v - t) > 0.01) { tries++; return feedback('gp-bad', '<b>The analysis amount must equal Total paid.</b> The analysis column just sorts the same payment by type.'); }
      feedback('gp-ok', '<b>Correct.</b> Total paid shows the money leaving petty cash; the <b>' + esc(pcLabel(s.col)) + '</b> column shows what it was for. At month end the column total is posted to the debit of the ' + esc(s.col) + ' account in the ledger.', {first:tries === 0});
    }
    function pcbook(s){
      var final = state.i >= steps.length, done = PRIOR.concat(steps.slice(0, state.i).filter(function(x){ return x.type === 'pc'; }));
      var tot = {rec:0, paid:0}, colTot = {};
      PC.cols.forEach(function(c){ colTot[c[0]] = 0; });
      function cell(v){ return '<td class="r">' + (v === '' || v === undefined ? '' : money(v)) + '</td>'; }
      var head = '<tr><th class="r gp-col-amt">Received</th><th class="gp-col-date">Date</th><th>Details</th><th class="r gp-col-amt">Total paid</th>' + PC.cols.map(function(c){ return '<th class="r gp-col-amt">' + esc(c[1]) + '</th>'; }).join('') + '</tr>';
      var rows = done.map(function(x){
        if (x.kind === 'rec') tot.rec += x.amt; else { tot.paid += x.amt; colTot[x.col] += x.amt; }
        return '<tr class="gp-row-done">' + cell(x.kind === 'rec' ? x.amt : '') + '<td>' + esc(dateOf(x.tx)) + '</td><td>' + esc(x.details) + '</td>' + cell(x.kind === 'pay' ? x.amt : '') + PC.cols.map(function(c){ return cell(x.col === c[0] ? x.amt : ''); }).join('') + '</tr>';
      }).join('');
      if (s && s.type === 'pc') rows += '<tr class="gp-now"><td><input class="gp-rec gp-pc" inputmode="decimal" autocomplete="off" aria-label="Received"></td><td>' + esc(dateOf(s.tx)) + '</td><td>' + esc(s.details) + '</td><td><input class="gp-tot gp-pc" inputmode="decimal" autocomplete="off" aria-label="Total paid"></td>' + PC.cols.map(function(c){ return '<td><input class="gp-ana gp-pc" data-a="' + esc(c[0]) + '" inputmode="decimal" autocomplete="off" aria-label="' + esc(c[1]) + '"></td>'; }).join('') + '</tr>';
      var blank = PC.cols.map(function(){ return '<td></td>'; }).join(''), foot = '';
      if (done.length && !(s && s.type === 'pc')) {
        foot = '<tr>' + cell(tot.rec) + '<td></td><td>' + (final && PC.prior ? 'Totals' : 'Totals so far') + '</td>' + cell(tot.paid) + PC.cols.map(function(c){ return cell(colTot[c[0]]); }).join('') + '</tr>';
        var last = done[done.length - 1];
        if (final && PC.prior && last.kind === 'rec') {
          var bal = tot.rec - tot.paid, d = dateOf(last.tx);
          foot += '<tr><td></td><td>' + esc(d) + '</td><td>Balance c/d</td>' + cell(bal) + blank + '</tr>' +
            '<tr>' + cell(tot.rec) + '<td></td><td></td>' + cell(tot.paid + bal) + blank + '</tr>' +
            '<tr>' + cell(bal) + '<td></td><td>Balance b/d (next month)</td><td></td>' + blank + '</tr>';
        }
      }
      return '<p class="gp-cb-label"><b>Petty cash book' + (PRIOR.length ? ' — continued from Part 1' : '') + '</b></p><div class="gp-tablewrap gp-scroll"><table class="gp-table"><thead>' + head + '</thead><tbody>' + rows + '</tbody>' + (foot ? '<tfoot>' + foot + '</tfoot>' : '') + '</table></div>';
    }
    function checkCb(s){
      var rows = {}, filled = [];
      box.querySelectorAll('tr.gp-now[data-side]').forEach(function(tr){
        var r = {acct:tr.querySelector('.gp-acct').value.trim(), cash:tr.querySelector('.gp-cash').value.trim(), bank:tr.querySelector('.gp-bank').value.trim(), disc:tr.querySelector('.gp-disc') ? tr.querySelector('.gp-disc').value.trim() : ''};
        rows[tr.dataset.side] = r; if (r.acct || r.cash || r.bank || r.disc) filled.push(tr.dataset.side);
      });
      var sideName = {Dr:'Receipts (Dr)', Cr:'Payments (Cr)'};
      if (!filled.length) return feedback('gp-hint', 'First decide the side. Money coming in goes on the <b>Receipts (Dr)</b> side; money going out goes on the <b>Payments (Cr)</b> side. Fill the row on that side.');
      if (filled.length > 1) return feedback('gp-hint', 'This line goes on one side only. Clear the row on the other side.');
      var side = filled[0], r = rows[side];
      if (side !== s.side) {
        tries++;
        return feedback('gp-bad', '<b>Wrong side.</b> ' + (s.side === 'Dr' ? s.col + ' increases here, so this line belongs on the Receipts (Dr) side.' : s.col + ' decreases here, so this line belongs on the Payments (Cr) side.') + (s.contra ? ' A contra entry appears on both sides: first the side where money arrives, then the side it leaves.' : '') + '<p><b>How to think:</b> ' + esc(s.tx.think) + '</p>');
      }
      var pick = accounts.filter(function(a){ return a.toLowerCase() === r.acct.toLowerCase().replace(/\s*\(c\)$/, ''); })[0];
      if (!r.acct) return feedback('gp-hint', 'Fill in Particulars. Click the cell and choose the <b>other</b> account in this transaction.');
      if (!pick) return feedback('gp-hint', '"' + esc(r.acct) + '" is not one of the accounts here. Click the Particulars cell and choose from the list.');
      if (pick !== s.part) {
        tries++;
        var msg = pick === s.col ? 'In a cash book you do not write ' + s.col + ' in Particulars: the ' + s.col + ' column already says that. Particulars names the <b>other</b> account in the double entry.'
          : '<b>' + esc(pick) + '</b> is not the other account in this transaction.';
        return feedback('gp-bad', '<b>Not quite.</b> ' + msg + (s.contra ? ' This is a contra entry, so the other account is the other of Cash and Bank.' : '') + '<p><b>How to think:</b> ' + esc(s.tx.think) + '</p>');
      }
      if (r.cash && r.bank) return feedback('gp-hint', 'Type the amount in one column only: Cash or Bank.');
      if (!r.cash && !r.bank) return feedback('gp-hint', 'Now type the amount in the Cash or the Bank column.');
      var col = r.cash ? 'Cash' : 'Bank', amount = parse(r.cash || r.bank);
      if (amount === null) return feedback('gp-hint', 'The amount must be a number. Commas are fine.');
      if (col !== s.col) {
        tries++;
        return feedback('gp-bad', '<b>Right side, wrong column.</b> This amount belongs in the <b>' + s.col + '</b> column. ' + (s.col === 'Cash' ? 'Notes, coins and cheques we are still holding (not yet deposited) are in the Cash column.' : 'Cheques paid in, cheques we write and bank transfers are in the Bank column.') + '<p><b>How to think:</b> ' + esc(s.tx.think) + '</p>');
      }
      if (Math.abs(amount - s.entry.amt) > 0.01) {
        tries++;
        return feedback('gp-bad', '<b>The side, Particulars and column are right, but the amount is not.</b><p><b>How to think:</b> write the money that actually moved.' + (CB.disc ? ' Any discount goes in its own column, not in the Cash or Bank amount.' : '') + '</p>');
      }
      if (CB.disc) {
        var d = r.disc ? parse(r.disc) : 0;
        if (d === null || Math.abs(d - s.disc) > 0.01) {
          tries++;
          return feedback('gp-bad', s.disc ? '<b>The discount is missing or wrong.</b> The debt cleared is bigger than the money that moved. Put the difference in the discount column: ' + (s.side === 'Dr' ? 'discount allowed (we gave it to a debtor).' : 'discount received (a creditor gave it to us).') : '<b>No discount here.</b> Leave the discount column empty for this line.');
        }
      }
      var post = s.ledger.length ? ' <span class="gp-muted">The other half of the double entry (' + s.ledger.map(function(x){ return (x.s === 'Dr' ? 'Dr ' : 'Cr ') + esc(x.a) + ' ' + money(x.amt); }).join(', ') + ') is posted to the ledger, not written in the cash book.</span>' : (s.contra && s.n === 0 ? ' <span class="gp-muted">A contra entry: the next line is the same money on the other side.</span>' : '');
      feedback('gp-ok', '<b>Correct.</b> ' + esc(s.entry.w) + post, {first:tries === 0});
    }
    function cashbook(s){
      var final = state.i >= steps.length, open = CB.open || {}, done = steps.slice(0, state.i).filter(function(x){ return x.type === 'cb'; });
      var sides = {Dr:[], Cr:[]}, tot = {Dr:{Cash:0, Bank:0, d:0}, Cr:{Cash:0, Bank:0, d:0}};
      if (open.Cash || open.Bank) { sides.Dr.push([CB.openDate || '', 'Balance b/d', '', open.Cash || 0, open.Bank || 0]); tot.Dr.Cash += open.Cash || 0; tot.Dr.Bank += open.Bank || 0; }
      done.forEach(function(x){
        sides[x.side].push([dateOf(x.tx), x.part + (x.contra ? ' (C)' : ''), x.disc || '', x.col === 'Cash' ? x.entry.amt : '', x.col === 'Bank' ? x.entry.amt : '']);
        tot[x.side][x.col] += x.entry.amt; tot[x.side].d += x.disc || 0;
      });
      var bd = {Dr:[], Cr:[]};
      if (final) ['Cash', 'Bank'].forEach(function(c){
        var diff = tot.Dr[c] - tot.Cr[c]; if (!diff) return;
        var cd = diff > 0 ? 'Cr' : 'Dr', row = function(side, label){ var list = label === 'Balance c/d' ? sides[side] : bd[side], r = list.filter(function(x){ return x[1] === label; })[0]; if (!r) { r = [label === 'Balance c/d' ? (CB.end || '') : (CB.next || ''), label, '', '', '']; list.push(r); } return r; };
        row(cd, 'Balance c/d')[c === 'Cash' ? 3 : 4] = Math.abs(diff);
        row(cd === 'Cr' ? 'Dr' : 'Cr', 'Balance b/d')[c === 'Cash' ? 3 : 4] = Math.abs(diff);
        tot[cd][c] += Math.abs(diff);
      });
      function cell(v){ return '<td class="r">' + (v === '' ? '' : money(v)) + '</td>'; }
      function table(side){
        var label = side === 'Dr' ? 'Receipts side (Dr) — money in' : 'Payments side (Cr) — money out';
        var head = '<tr><th class="gp-col-date">Date</th><th>Particulars</th>' + (CB.disc ? '<th class="r gp-col-amt">' + (side === 'Dr' ? 'Discount allowed' : 'Discount received') + '</th>' : '') + '<th class="r gp-col-amt">Cash</th><th class="r gp-col-amt">Bank</th></tr>';
        var rows = sides[side].map(function(r){ return '<tr class="gp-row-done"><td>' + esc(r[0]) + '</td><td>' + esc(r[1]) + '</td>' + (CB.disc ? cell(r[2]) : '') + cell(r[3]) + cell(r[4]) + '</tr>'; }).join('');
        if (s && s.type === 'cb') rows += '<tr class="gp-now" data-side="' + side + '"><td>' + esc(dateOf(s.tx)) + '</td><td class="gp-cell-acct"><input class="gp-acct" placeholder="Click to choose" autocomplete="off" role="combobox" aria-expanded="false" aria-label="Particulars, ' + label + '"><div class="gp-list" role="listbox" hidden></div></td>' + (CB.disc ? '<td><input class="gp-disc" inputmode="decimal" autocomplete="off" aria-label="Discount"></td>' : '') + '<td><input class="gp-cash" inputmode="decimal" autocomplete="off" aria-label="Cash"></td><td><input class="gp-bank" inputmode="decimal" autocomplete="off" aria-label="Bank"></td></tr>';
        var foot = final ? '<tr><td></td><td>Total</td>' + (CB.disc ? cell(tot[side].d) : '') + cell(tot[side].Cash) + cell(tot[side].Bank) + '</tr>' + bd[side].map(function(r){ return '<tr><td>' + esc(r[0]) + '</td><td>' + esc(r[1]) + '</td>' + (CB.disc ? '<td></td>' : '') + cell(r[3]) + cell(r[4]) + '</tr>'; }).join('') : '';
        return '<p class="gp-cb-label"><b>' + label + '</b></p><div class="gp-tablewrap gp-scroll"><table class="gp-table"><thead>' + head + '</thead><tbody>' + rows + '</tbody>' + (foot ? '<tfoot>' + foot + '</tfoot>' : '') + '</table></div>';
      }
      return table('Dr') + table('Cr');
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
      if (PC) return pcbook(s);
      if (CB) return cashbook(s);
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
      if (!rows) return '';
      return '<div class="gp-tablewrap"><table class="gp-table"><thead><tr><th class="gp-col-date">Date</th><th>Account</th><th class="r gp-col-amt">Debit (Rs.)</th><th class="r gp-col-amt">Credit (Rs.)</th></tr></thead><tbody>' + rows + '</tbody>' +
        (done.length ? '<tfoot><tr><td></td><td>Total so far</td><td class="r">' + money(dr) + '</td><td class="r">' + money(cr) + '</td></tr></tfoot>' : '') + '</table></div>';
    }
    function grid(s){
      if (!data.table) return '';
      var values = {};
      var moneyCols = data.table.moneyCols || [], dp = data.table.decimals;
      // A held cell stays blank until no remaining step has that value as its answer.
      var waiting = {};
      steps.slice(state.i).forEach(function(x){
        if (x.fill) waiting[Math.abs(x.a).toFixed(2)] = true;
        if (x.type === 'entry') waiting[Math.abs(x.entry.amt).toFixed(2)] = true;
      });
      var held = {};
      (data.table.hold || []).forEach(function(h){ held[h.join()] = true; });
      function shown(value, c){
        var n = moneyCols.indexOf(c) > -1 && /^-?[\d,]+(\.\d+)?$/.test(String(value)) ? parse(value) : null;
        return n === null ? String(value) : n.toLocaleString('en-US', {minimumFractionDigits:dp, maximumFractionDigits:dp});
      }
      steps.slice(0, state.i).forEach(function(x){ if (x.fill) values[x.fill.join()] = x.a; });
      var head = data.table.cols.map(function(c){ return '<th>' + esc(c) + '</th>'; }).join('');
      var actionRow = s && s.fill ? '<tr class="gp-action-row"><td colspan="' + data.table.cols.length + '"><button type="button" class="gp-check">Check</button><div class="gp-fb" aria-live="polite" hidden></div></td></tr>' : '';
      var body = data.table.rows.map(function(row, r){
        return '<tr' + (row.total ? ' class="gp-row-total"' : '') + '>' + (row.cells || row).map(function(cell, c){
          var id = r + ',' + c;
          if (s && s.fill && s.fill.join() === id) return '<td class="gp-now"><input class="gp-amt" inputmode="decimal" autocomplete="off" aria-label="' + esc(data.table.cols[c]) + '"></td>';
          if (held[id] && values[id] === undefined && waiting[Math.abs(parse(cell)).toFixed(2)]) return '<td></td>';
          return '<td>' + esc(values[id] !== undefined ? (moneyCols.indexOf(c) > -1 ? shown(values[id], c) : money(values[id])) : shown(cell, c)) + '</td>';
        }).join('') + '</tr>' + (s && s.fill && s.fill[0] === r ? actionRow : '');
      }).join('');
      return '<div class="gp-tablewrap gp-scroll"><table class="gp-table"><thead><tr>' + head + '</tr></thead><tbody>' + body + '</tbody></table></div>';
    }
    function render(){
      var pct = Math.round(state.i / steps.length * 100), s = steps[state.i], html = '<div class="gp-bar"><span>' + (s ? 'Step ' + (state.i + 1) + ' of ' + steps.length : 'Finished') + '</span><i><b style="width:' + pct + '%"></b></i><button type="button" class="alt gp-reset">Start again</button></div>';
      var notes = steps.slice(0, state.i).filter(function(x){ return x.type !== 'entry' && x.type !== 'cb' && x.type !== 'pc' && !x.fill; });
      if (notes.length) html += '<ol class="gp-done">' + notes.map(function(x){ return '<li>' + doneLine(x) + '</li>'; }).join('') + '</ol>';
      if (!s) {
        html += journal() + grid() + '<div class="gp-fb gp-ok"><b>You finished this question.</b> ' + state.first + ' of ' + steps.length + ' steps were right on the first try. Open the full answer below to compare.' + (data.end ? ' ' + esc(data.end) : '') + '</div>';
      } else if (s.type === 'pc') {
        html += '<p class="gp-tx">' + esc(s.tx.tx) + '</p><p class="gp-howto"><b>Petty cash book line.</b> Money coming in goes in <b>Received</b>. A payment goes in <b>Total paid</b> and again in the one <b>analysis column</b> that says what it was for.</p>' + pcbook(s) + '<button type="button" class="gp-check">Check this line</button><div class="gp-fb" aria-live="polite" hidden></div>';
      } else if (s.type === 'cb') {
        html += '<p class="gp-tx">' + esc(s.tx.tx) + '</p><p class="gp-howto"><b>Cash-book line' + (s.count > 1 ? ' ' + (s.n + 1) + ' of ' + s.count + ' (contra entry)' : '') + '.</b> Money in goes on the <b>Receipts (Dr)</b> side and money out on the <b>Payments (Cr)</b> side. In Particulars, choose the <b>other</b> account, then type the amount in the Cash or Bank column.' + (CB.disc ? ' Put any cash discount in the discount column.' : '') + '</p>' + cashbook(s) + '<button type="button" class="gp-check">Check this line</button><div class="gp-fb" aria-live="polite" hidden></div>';
      } else if (s.type === 'entry') {
        html += '<p class="gp-tx">' + esc(s.tx.tx) + '</p><p class="gp-howto"><b>Line ' + (s.n + 1) + ' of ' + s.tx.e.length + ' for this transaction.</b> Click the Account cell and choose an account. Then type the amount in the Debit or the Credit column. Debit lines come first.</p>' + journal(s) + '<button type="button" class="gp-check">Check this line</button><div class="gp-fb" aria-live="polite" hidden></div>';
      } else if (s.type === 'num') {
        html += journal() + (s.tx ? '<p class="gp-tx">' + esc(s.tx) + '</p>' : '') + '<p class="gp-q"><b>' + esc(s.q) + '</b>' + (s.fill ? ' <span class="gp-muted">Type it in the highlighted cell.</span>' : '') + '</p>' + grid(s) +
          (s.fill ? '' : '<label class="gp-label">Your answer <input class="gp-amt gp-amt-free gp-now-input" inputmode="decimal" autocomplete="off"></label> <button type="button" class="gp-check">Check</button><div class="gp-fb" aria-live="polite" hidden></div>');
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
      if (check) check.onclick = function(){ s.type === 'entry' ? checkEntry(s) : s.type === 'cb' ? checkCb(s) : s.type === 'pc' ? checkPc(s) : checkNum(s); };
      box.querySelectorAll('.gp-amt,.gp-dr,.gp-cr,.gp-disc,.gp-cash,.gp-bank,.gp-pc').forEach(function(input){
        input.onkeydown = function(ev){ if (ev.key === 'Enter') { ev.preventDefault(); check.click(); } };
      });
      if (s && (s.type === 'entry' || s.type === 'cb')) box.querySelectorAll('.gp-acct').forEach(accountPicker);
    }
    function accountPicker(input){
      var list = input.parentNode.querySelector('.gp-list'), active = -1;
      function show(all){
        var q = input.value.trim().toLowerCase();
        var match = accounts.filter(function(a){ return all || a.toLowerCase().indexOf(q) > -1; });
        list.innerHTML = match.length ? match.map(function(a){ return '<div class="gp-item" role="option" data-a="' + esc(a) + '">' + esc(a) + '</div>'; }).join('') : '<div class="gp-none">No account with that name</div>';
        list.hidden = false; active = -1; input.setAttribute('aria-expanded', 'true');
      }
      function hide(){ list.hidden = true; input.setAttribute('aria-expanded', 'false'); }
      function choose(a){ input.value = a; hide(); var next = input.closest('tr').querySelector('.gp-dr,.gp-disc,.gp-cash'); if (next) next.focus({preventScroll:true}); }
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
