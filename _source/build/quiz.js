(function(){
  function load(k, d){ try{ var v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); }catch(e){ return d; } }
  function save(k, v){ try{ localStorage.setItem(k, JSON.stringify(v)); }catch(e){} }
  function shuffle(a){ a = a.slice(); for (var i = a.length - 1; i > 0; i--){ var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function grade(p){ return p >= 85 ? ['Excellent — you know this well', 'ok'] : p >= 70 ? ['Good — revise the ones you missed', 'ok'] : p >= 50 ? ['Getting there — reread the weak sections', 'mid'] : ['Needs revision — go through the notes again', 'bad']; }
  function num(s){ return parseFloat(String(s).replace(/[,\s]/g, '').replace(/[^0-9.\-eE]/g, '')); }
  function fmtAgo(ts){ var d = (Date.now() - ts) / 864e5; return d < 1 ? 'today' : d < 2 ? 'yesterday' : Math.floor(d) + ' days ago'; }

  document.querySelectorAll('.quiz').forEach(function(Q){
    var all = JSON.parse(Q.querySelector('.qdata').textContent), qid = Q.getAttribute('data-qid'),
        pick = +Q.getAttribute('data-pick') || 0, head = Q.querySelector('.qhead'), body = Q.querySelector('.qbody'), cur = [];
    function header(){
      var st = load('sg-quiz-' + qid, null);
      head.innerHTML = st ? '<div class="qstat"><span>Best <b>' + st.best + '%</b></span><span>Last <b>' + st.last + '%</b> (' + fmtAgo(st.ts) + ')</span><span>Attempts <b>' + st.tries + '</b></span>' +
        (st.hist && st.hist.length > 1 ? '<span class="spark">' + st.hist.map(function(h){ return '<i style="height:' + Math.max(8, h) + '%" title="' + h + '%"></i>'; }).join('') + '</span>' : '') + '</div>' : '';
    }
    function start(){
      cur = (pick ? shuffle(all).slice(0, pick) : shuffle(all)).map(function(q){
        var c = Object.assign({}, q);
        if (q.o){ var idx = shuffle(q.o.map(function(_, i){ return i; })); c.order = idx; }
        return c;
      });
      body.innerHTML = cur.map(function(q, i){
        var h = '<div class="qq" data-i="' + i + '"><div class="qt"><b>' + (i + 1) + '.</b> ' + q.q + (q.w && pick ? ' <span class="qw">' + q.w + '</span>' : '') + '</div>';
        if (q.o) h += q.order.map(function(oi){ return '<label class="qo"><input type="radio" name="' + qid + '-' + i + '" value="' + oi + '"><span>' + q.o[oi] + '</span></label>'; }).join('');
        else h += '<div class="qn"><input type="text" inputmode="decimal" placeholder="Type a number"></div>';
        return h + '<div class="qe"></div></div>';
      }).join('') + '<div class="qact"><button class="qcheck">Check my answers</button><span class="qleft"></span></div><div class="qres"></div>';
      body.querySelector('.qcheck').onclick = check;
      body.addEventListener('change', left); left();
    }
    function answered(i){
      var el = body.querySelector('.qq[data-i="' + i + '"]');
      return cur[i].o ? !!el.querySelector('input:checked') : el.querySelector('.qn input').value.trim() !== '';
    }
    function left(){ var n = cur.filter(function(_, i){ return !answered(i); }).length; var s = body.querySelector('.qleft'); if (s) s.textContent = n ? n + ' unanswered' : 'All answered'; }
    function check(){
      var n = cur.filter(function(_, i){ return !answered(i); }).length;
      if (n && !confirm(n + ' question(s) unanswered — they will count as wrong. Check anyway?')) return;
      var right = 0, weak = {};
      cur.forEach(function(q, i){
        var el = body.querySelector('.qq[data-i="' + i + '"]'), ok;
        if (q.o){
          var sel = el.querySelector('input:checked'), v = sel ? +sel.value : -1; ok = v === q.a;
          el.querySelectorAll('.qo').forEach(function(l){ var iv = +l.querySelector('input').value; l.classList.toggle('right', iv === q.a); l.classList.toggle('wrong', iv === v && !ok); });
        } else {
          var inp = el.querySelector('.qn input'), x = num(inp.value), tol = q.t != null ? q.t : Math.max(0.01, Math.abs(q.n) * 0.005);
          ok = !isNaN(x) && Math.abs(x - q.n) <= tol + 1e-9;
          inp.insertAdjacentHTML('afterend', ok ? '' : '<span class="qcorr">Answer: <b>' + q.n.toLocaleString(undefined, {maximumFractionDigits: 4}) + '</b></span>');
          inp.classList.add(ok ? 'right' : 'wrong');
        }
        if (ok) right++; else if (q.w) weak[q.w] = (weak[q.w] || 0) + 1;
        el.classList.add(ok ? 'ok' : 'no');
        el.querySelector('.qe').innerHTML = '<b>' + (ok ? '✓ Correct.' : '✗ Not quite.') + '</b> ' + (q.e || '');
        el.querySelectorAll('input').forEach(function(x){ x.disabled = true; });
      });
      var p = Math.round(100 * right / cur.length), g = grade(p), st = load('sg-quiz-' + qid, {best: 0, tries: 0, hist: []});
      st.best = Math.max(st.best, p); st.last = p; st.tries++; st.ts = Date.now(); st.n = cur.length; st.hist = (st.hist || []).concat(p).slice(-12);
      save('sg-quiz-' + qid, st); header();
      var wk = Object.keys(weak).sort(function(a, b){ return weak[b] - weak[a]; });
      body.querySelector('.qact').innerHTML = '';
      body.querySelector('.qres').innerHTML = '<div class="qscore ' + g[1] + '"><div class="big">' + right + ' / ' + cur.length + ' <small>(' + p + '%)</small></div><div>' + g[0] + '</div>' +
        (pick && wk.length ? '<div class="qweak">Weakest weeks this time: ' + wk.slice(0, 4).map(function(w){ return w + ' (' + weak[w] + ' wrong)'; }).join(', ') + '</div>' : '') +
        '<button class="qagain">' + (pick ? 'New random exam' : 'Try again (new order)') + '</button></div>';
      body.querySelector('.qagain').onclick = function(){ start(); Q.scrollIntoView({behavior: 'smooth'}); };
      body.querySelector('.qres').scrollIntoView({behavior: 'smooth', block: 'center'});
    }
    header(); start();
  });

  // week-card badges on subject pages
  function badge(el, st, n){
    if (!st){ el.textContent = n ? 'Quiz: not tried (' + n + ' Qs)' : ''; el.className = el.className.replace(/ (ok|mid|bad)/g, ''); return; }
    el.textContent = 'Quiz best ' + st.best + '%'; el.classList.add(grade(st.best)[1]);
  }
  document.querySelectorAll('.qb[data-qid]').forEach(function(b){ badge(b, load('sg-quiz-' + b.getAttribute('data-qid'), null), +b.getAttribute('data-qn')); });

  // knowledge panels
  function summary(keys){
    var done = keys.map(function(k){ return load('sg-quiz-' + k, null); }).filter(Boolean);
    var avg = done.length ? Math.round(done.reduce(function(a, s){ return a + s.best; }, 0) / done.length) : 0;
    var cover = keys.length ? Math.round(100 * done.length / keys.length) : 0;
    return {done: done.length, total: keys.length, avg: avg, cover: cover, know: Math.round(avg * done.length / (keys.length || 1))};
  }
  function meter(label, v, sub){ return '<div class="km"><div class="kl">' + label + '</div><div class="kbar"><i style="width:' + v + '%"></i></div><div class="kv"><b>' + v + '%</b> ' + sub + '</div></div>'; }
  document.querySelectorAll('.kpanel[data-subj]').forEach(function(P){
    var sk = P.getAttribute('data-subj'), keys = [].map.call(document.querySelectorAll('.qb[data-qid]'), function(b){ return b.getAttribute('data-qid'); });
    if (!keys.length) return;
    var s = summary(keys), mx = load('sg-quiz-' + sk + '-mixed', null);
    P.innerHTML = '<div class="tt">📊 Your knowledge in this subject</div>' +
      meter('Overall knowledge', s.know, '— average best score × weeks covered') +
      meter('Weeks quizzed', s.cover, '(' + s.done + ' of ' + s.total + ')') +
      meter('Average best score', s.avg, 'on the weeks you tried') +
      (mx ? meter('Mixed exam best', mx.best, '(' + mx.tries + ' attempt' + (mx.tries > 1 ? 's' : '') + ')') : '<p class="note">Take the <a href="#exam">mixed practice exam</a> at the bottom when you have covered several weeks.</p>');
  });
  var hub = document.querySelector('.kpanel[data-hub]');
  if (hub){
    var rows = [], tot = 0, cnt = 0;
    document.querySelectorAll('.wk a[data-qkeys]').forEach(function(a){
      var keys = a.getAttribute('data-qkeys').split(',').filter(Boolean); if (!keys.length) return;
      var s = summary(keys), mx = load('sg-quiz-' + a.getAttribute('data-skey') + '-mixed', null);
      a.querySelector('.hq').textContent = s.done ? 'Knowledge ' + s.know + '% · ' + s.done + '/' + s.total + ' weeks quizzed' + (mx ? ' · exam best ' + mx.best + '%' : '') : 'Quizzes: not started';
      if (s.done) a.querySelector('.hq').classList.add(grade(s.know)[1]);
      rows.push(meter(a.querySelector('span').textContent, s.know, '(' + s.done + '/' + s.total + ' weeks)')); tot += s.know; cnt++;
    });
    if (cnt) hub.innerHTML = '<div class="tt">📊 Semester knowledge — ' + Math.round(tot / cnt) + '% overall</div>' + rows.join('') +
      '<p class="note">Knowledge = your average best quiz score × the share of weeks you have quizzed. Take each week\'s quiz, then the mixed exam on each subject page.</p>';
  }
})();
