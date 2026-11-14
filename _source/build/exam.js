// Exam-style quiz for the per-subject Quizzes pages: one question at a time, a question navigator,
// Finish attempt -> mark, grade and a full review with why each option is right or wrong.
(function(){
  var KEY = document.body.getAttribute('data-key') || '';
  if (!/-quizzes$/.test(KEY)) return;
  function load(k){ try{ return JSON.parse(localStorage.getItem(k)); }catch(e){ return null; } }
  function save(k, v){ try{ localStorage.setItem(k, JSON.stringify(v)); }catch(e){} }
  function esc(s){ return String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
  function clock(ms){ var s = Math.max(0, Math.round(ms / 1000)), m = Math.floor(s / 60); return (m >= 60 ? Math.floor(m / 60) + ':' + ('0' + m % 60).slice(-2) : m) + ':' + ('0' + s % 60).slice(-2); }
  function ago(ts){ var d = (Date.now() - ts) / 864e5; return d < 1 ? 'today' : d < 2 ? 'yesterday' : Math.floor(d) + ' days ago'; }
  function grade(p){ return p >= 85 ? ['Excellent — you know this well.', 'ok'] : p >= 70 ? ['Good — revise the ones you missed.', 'ok'] : p >= 50 ? ['Getting there — reread the weak topics.', 'mid'] : ['Needs revision — go through the notes again, then retake.', 'bad']; }
  var L = 'abcdefghij';

  window.SGExam = function(root, data){
    var Q = data.steps || [];
    if (!Q.length || Q.some(function(s){ return s.type !== 'choice'; })) return false;
    var tool = root.closest('.tool'), tt = tool && tool.querySelector(':scope > .tt');
    var name = tt ? tt.textContent.replace(/^.*?Try it\s*—\s*/, '').replace(/^Do the quiz first\s*—\s*/i, '').trim() : 'Quiz';
    if (tool) tool.classList.add('ex-tool');
    var key = 'sg-exam-' + root.id, st = load(key) || {}, tick = null;
    st.hist = st.hist || [];
    function fresh(){ st.a = {}; st.f = {}; st.i = 0; st.t0 = Date.now(); st.mode = 'q'; st.wrongOnly = false; }
    function persist(){ save(key, st); }
    function right(i){ return st.a[i] != null && Q[i].opts[st.a[i]] && Q[i].opts[st.a[i]].ok; }
    function nAns(){ return Object.keys(st.a).length; }
    var box = document.createElement('div'); box.className = 'ex';
    root.innerHTML = ''; root.appendChild(box);

    function head(sub){
      return '<div class="ex-head"><div><div class="ex-kicker">Quiz</div><div class="ex-name">' + esc(name) + '</div></div>' + (sub || '') + '</div>';
    }
    function intro(){
      var last = st.hist.length ? st.hist[st.hist.length - 1] : null, best = st.hist.length ? Math.max.apply(null, st.hist.map(function(h){ return h.p; })) : null;
      var going = st.mode === 'q' && st.a && nAns() > 0;
      box.innerHTML = head() +
        '<div class="ex-intro"><ul class="ex-facts"><li><b>' + Q.length + '</b> questions</li><li>Multiple choice · one answer each</li><li><b>1</b> mark per question</li><li>No time limit — the clock just shows how long you took</li></ul>' +
        (st.hist.length ? '<div class="ex-prev"><span>Best <b>' + best + '%</b></span><span>Last <b>' + last.p + '%</b> (' + last.s + '/' + Q.length + ', ' + ago(last.ts) + ')</span><span>Attempts <b>' + st.hist.length + '</b></span></div>' : '') +
        '<div class="ex-actions">' + (going ? '<button type="button" class="ex-go">Continue attempt (' + nAns() + ' of ' + Q.length + ' answered)</button><button type="button" class="alt ex-new">Start a new attempt</button>' : '<button type="button" class="ex-new">' + (st.hist.length ? 'Attempt quiz again' : 'Attempt quiz now') + '</button>') +
        (st.hist.length && st.last ? '<button type="button" class="alt ex-rev">Review last attempt</button>' : '') + '</div></div>';
      var go = box.querySelector('.ex-go'); if (go) go.onclick = function(){ st.mode = 'q'; persist(); question(); };
      box.querySelector('.ex-new').onclick = function(){ fresh(); persist(); question(); };
      var rv = box.querySelector('.ex-rev'); if (rv) rv.onclick = function(){ st.mode = 'review'; persist(); review(); };
    }
    function nav(){
      return '<div class="ex-nav" aria-label="Quiz navigation">' + Q.map(function(_, i){
        return '<button type="button" class="ex-n' + (st.a[i] != null ? ' ans' : '') + (st.f[i] ? ' flag' : '') + (i === st.i ? ' cur' : '') + '" data-i="' + i + '" title="Question ' + (i + 1) + (st.a[i] != null ? ' — answered' : ' — not answered') + (st.f[i] ? ', flagged' : '') + '">' + (i + 1) + '</button>';
      }).join('') + '</div>';
    }
    function question(){
      clearInterval(tick);
      var i = st.i, s = Q[i], a = st.a[i];
      box.innerHTML = head('<div class="ex-clock" title="Time taken">⏱ <span>' + clock(Date.now() - st.t0) + '</span></div>') +
        '<div class="ex-bar"><i><b style="width:' + Math.round(nAns() / Q.length * 100) + '%"></b></i><span>' + nAns() + ' / ' + Q.length + ' answered</span></div>' + nav() +
        '<div class="ex-q"><div class="ex-info"><div class="ex-qno">Question <b>' + (i + 1) + '</b> <span>of ' + Q.length + '</span></div><div class="ex-state">' + (a != null ? 'Answer saved' : 'Not yet answered') + ' · Marked out of 1</div>' +
        '<button type="button" class="alt ex-flag' + (st.f[i] ? ' on' : '') + '" aria-pressed="' + !!st.f[i] + '">⚑ ' + (st.f[i] ? 'Flagged' : 'Flag question') + '</button></div>' +
        '<div class="ex-body">' + (s.tx ? '<p class="ex-tx">' + esc(s.tx) + '</p>' : '') + '<p class="ex-text">' + esc(s.q) + '</p><div class="ex-sel">Select one:</div><div class="ex-opts" role="radiogroup">' +
        s.opts.map(function(o, k){ return '<label class="ex-o' + (a === k ? ' on' : '') + '"><input type="radio" name="' + root.id + '-q" value="' + k + '"' + (a === k ? ' checked' : '') + '><span class="ex-l">' + L[k] + '.</span><span class="ex-t">' + esc(o.t) + '</span></label>'; }).join('') +
        '</div>' + (a != null ? '<button type="button" class="alt ex-clear">Clear my choice</button>' : '') + '</div></div>' +
        '<div class="ex-move"><button type="button" class="alt ex-prev"' + (i ? '' : ' disabled') + '>← Previous</button>' +
        (i < Q.length - 1 ? '<button type="button" class="ex-next">Next →</button>' : '<button type="button" class="ex-fin">Finish attempt…</button>') + '</div>' +
        (i < Q.length - 1 ? '<div class="ex-finrow"><button type="button" class="alt ex-fin">Finish attempt…</button></div>' : '');
      box.querySelectorAll('.ex-o input').forEach(function(r){ r.onchange = function(){ st.a[i] = +r.value; persist(); question(); }; });
      var c = box.querySelector('.ex-clear'); if (c) c.onclick = function(){ delete st.a[i]; persist(); question(); };
      box.querySelector('.ex-flag').onclick = function(){ if (st.f[i]) delete st.f[i]; else st.f[i] = 1; persist(); question(); };
      box.querySelectorAll('.ex-n').forEach(function(b){ b.onclick = function(){ go(+b.dataset.i); }; });
      box.querySelector('.ex-prev').onclick = function(){ go(i - 1); };
      var nx = box.querySelector('.ex-next'); if (nx) nx.onclick = function(){ go(i + 1); };
      box.querySelectorAll('.ex-fin').forEach(function(b){ b.onclick = summary; });
      var span = box.querySelector('.ex-clock span');
      tick = setInterval(function(){ if (!document.body.contains(span)) return clearInterval(tick); span.textContent = clock(Date.now() - st.t0); }, 1000);
    }
    function go(i){ st.i = Math.max(0, Math.min(Q.length - 1, i)); persist(); question(); top(); }
    function top(){ var r = box.getBoundingClientRect(); if (r.top < 70 || r.top > window.innerHeight * .6) box.scrollIntoView({block:'start', behavior:'smooth'}); }
    function summary(){
      clearInterval(tick);
      var miss = Q.length - nAns(), flags = Object.keys(st.f).length;
      box.innerHTML = head() + '<div class="ex-sum"><h4>Summary of attempt</h4><div class="ex-sumgrid">' + Q.map(function(_, i){
          return '<button type="button" class="ex-srow' + (st.a[i] != null ? '' : ' miss') + '" data-i="' + i + '"><span>Q' + (i + 1) + (st.f[i] ? ' ⚑' : '') + '</span><span>' + (st.a[i] != null ? 'Answer saved (' + L[st.a[i]] + ')' : 'Not yet answered') + '</span></button>';
        }).join('') + '</div>' +
        (miss ? '<p class="ex-warn">' + miss + ' question' + (miss > 1 ? 's are' : ' is') + ' not answered. ' + (miss > 1 ? 'They' : 'It') + ' will count as wrong.</p>' : '<p class="ex-okmsg">All ' + Q.length + ' questions answered.</p>') +
        (flags ? '<p class="ex-note">You flagged ' + flags + ' question' + (flags > 1 ? 's' : '') + ' to check again.</p>' : '') +
        '<div class="ex-actions"><button type="button" class="alt ex-back">Return to attempt</button><button type="button" class="ex-submit">Submit all and finish</button></div></div>';
      box.querySelectorAll('.ex-srow').forEach(function(b){ b.onclick = function(){ go(+b.dataset.i); }; });
      box.querySelector('.ex-back').onclick = function(){ question(); };
      box.querySelector('.ex-submit').onclick = submit;
      top();
    }
    function submit(){
      var score = Q.filter(function(_, i){ return right(i); }).length, p = Math.round(score / Q.length * 100);
      st.last = {a: st.a, s: score, p: p, ms: Date.now() - st.t0, ts: Date.now()};
      st.hist = st.hist.concat({p: p, s: score, ts: Date.now()}).slice(-12);
      st.mode = 'review'; st.wrongOnly = false; persist();
      window.dispatchEvent(new CustomEvent('sg-progress', {detail:{kind:'quiz', key:root.id, score:p}}));
      review(); top();
    }
    function review(){
      clearInterval(tick);
      var R = st.last; if (!R) return intro();
      var g = grade(R.p), best = Math.max.apply(null, st.hist.map(function(h){ return h.p; }));
      var wrong = Q.filter(function(s, i){ return !(R.a[i] != null && s.opts[R.a[i]] && s.opts[R.a[i]].ok); }).length;
      box.innerHTML = head() +
        '<div class="ex-score ' + g[1] + '"><div class="ex-big">' + R.s + '<small> / ' + Q.length + '</small></div><div><div class="ex-pct">Grade <b>' + R.p + '%</b>' + (st.hist.length > 1 ? ' · best ' + best + '%' : '') + '</div><div>' + g[0] + '</div><div class="ex-meta">Time taken ' + clock(R.ms) + ' · attempt ' + st.hist.length + '</div></div></div>' +
        (st.hist.length > 1 ? '<div class="ex-spark" title="Your recent attempts">' + st.hist.map(function(h){ return '<i style="height:' + Math.max(6, h.p) + '%" title="' + h.p + '%"></i>'; }).join('') + '</div>' : '') +
        '<div class="ex-actions"><button type="button" class="ex-new">Retake quiz</button>' + (wrong ? '<button type="button" class="alt ex-wo' + (st.wrongOnly ? ' on' : '') + '">' + (st.wrongOnly ? 'Show all questions' : 'Show only the ' + wrong + ' I got wrong') + '</button>' : '') + '</div>' +
        '<div class="ex-review">' + Q.map(function(s, i){
          var a = R.a[i], ok = a != null && s.opts[a] && s.opts[a].ok, good = s.opts.filter(function(o){ return o.ok; })[0];
          if (st.wrongOnly && ok) return '';
          return '<div class="ex-rq ' + (ok ? 'ok' : a == null ? 'skip' : 'no') + '"><div class="ex-rh"><b>Question ' + (i + 1) + '</b><span>' + (ok ? '✓ Correct · 1 / 1' : a == null ? '— Not answered · 0 / 1' : '✗ Incorrect · 0 / 1') + '</span></div>' +
            (s.tx ? '<p class="ex-tx">' + esc(s.tx) + '</p>' : '') + '<p class="ex-text">' + esc(s.q) + '</p><div class="ex-opts">' +
            s.opts.map(function(o, k){ return '<div class="ex-o ro' + (o.ok ? ' right' : '') + (k === a && !o.ok ? ' wrong' : '') + (k === a ? ' mine' : '') + '"><span class="ex-l">' + L[k] + '.</span><span class="ex-t">' + esc(o.t) + '</span>' + (k === a ? '<em>' + (o.ok ? 'Your answer ✓' : 'Your answer ✗') + '</em>' : o.ok ? '<em>Correct answer</em>' : '') + '</div>'; }).join('') + '</div>' +
            '<div class="ex-fb">' + (a != null && !ok && s.opts[a].why ? '<p><b>Why your answer is wrong:</b> ' + esc(s.opts[a].why) + '</p>' : '') +
            '<p><b>The correct answer is:</b> ' + esc(good ? good.t : '') + '</p>' + (s.why || (good && good.why) ? '<p><b>Why:</b> ' + esc(s.why || good.why) + '</p>' : '') +
            (!ok && s.think ? '<p class="ex-think"><b>How to think:</b> ' + esc(s.think) + '</p>' : '') + '</div></div>';
        }).join('') + '</div>' +
        '<div class="ex-actions"><button type="button" class="ex-new">Retake quiz</button></div>';
      box.querySelectorAll('.ex-new').forEach(function(b){ b.onclick = function(){ fresh(); persist(); question(); top(); }; });
      var wo = box.querySelector('.ex-wo'); if (wo) wo.onclick = function(){ st.wrongOnly = !st.wrongOnly; persist(); review(); };
    }
    box.addEventListener('keydown', function(ev){
      if (st.mode !== 'q' || !box.querySelector('.ex-q') || ev.target.tagName === 'INPUT' && ev.target.type !== 'radio') return;
      var k = ev.key.toLowerCase(), n = L.indexOf(k);
      if (ev.key === 'ArrowRight' && st.i < Q.length - 1){ ev.preventDefault(); go(st.i + 1); }
      else if (ev.key === 'ArrowLeft' && st.i > 0){ ev.preventDefault(); go(st.i - 1); }
      else if (n > -1 && n < Q[st.i].opts.length && k.length === 1 && !ev.metaKey && !ev.ctrlKey){ st.a[st.i] = n; persist(); question(); var r = box.querySelector('.ex-o.on input'); if (r) r.focus({preventScroll:true}); }
    });
    if (st.mode === 'review' && st.last) review();
    else intro();
    return true;
  };
})();
