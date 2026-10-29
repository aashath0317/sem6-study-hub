(function(){
  var KEY = document.body.getAttribute('data-key');
  function load(k, d){ try{ var v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); }catch(e){ return d; } }
  function save(k, v){ try{ localStorage.setItem(k, JSON.stringify(v)); }catch(e){} }

  // theme + font size
  var root = document.documentElement;
  var theme = load('sg-theme', null); if (theme) root.setAttribute('data-theme', theme);
  var fs = load('sg-fs', 17); root.style.setProperty('--fs', fs + 'px');
  var tb = document.getElementById('themebtn');
  if (tb) tb.onclick = function(){
    var dark = root.getAttribute('data-theme') ? root.getAttribute('data-theme') === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches;
    var nt = dark ? 'light' : 'dark'; root.setAttribute('data-theme', nt); save('sg-theme', nt);
  };
  function setFs(d){ fs = Math.max(14, Math.min(22, fs + d)); root.style.setProperty('--fs', fs + 'px'); save('sg-fs', fs); }
  var a1 = document.getElementById('fsm'), a2 = document.getElementById('fsp');
  if (a1) a1.onclick = function(){ setFs(-1); };
  if (a2) a2.onclick = function(){ setFs(1); };

  // index-page progress bars
  document.querySelectorAll('.wk a[data-key]').forEach(function(a){
    var st = load('sg-done-' + a.getAttribute('data-key'), null), n = +a.getAttribute('data-n');
    if (st && n){ var c = Object.keys(st).filter(function(k){ return st[k]; }).length;
      a.querySelector('.pg i').style.width = Math.round(100 * c / n) + '%'; }
  });
  if (!KEY) return;

  // TOC
  var toc = document.getElementById('toc'), links = [];
  var heads = document.querySelectorAll('main h2[id], main h3[id]');
  heads.forEach(function(h){
    var a = document.createElement('a'); a.href = '#' + h.id;
    a.className = h.tagName === 'H3' ? 'h3' : 'h2';
    var ck = document.createElement('span'); ck.className = 'ck';
    var c = h.cloneNode(true); c.querySelectorAll('.ts,.num').forEach(function(x){ x.remove(); });
    var t = document.createElement('span'); t.textContent = h.getAttribute('data-t') || c.textContent.trim();
    a.appendChild(ck); a.appendChild(t); toc.appendChild(a); links.push([h, a, ck]);
    a.onclick = function(){ toc.classList.remove('open'); };
  });
  var tbtn = document.getElementById('tocbtn');
  if (tbtn) tbtn.onclick = function(){ toc.classList.toggle('open'); };

  // done state
  var done = load('sg-done-' + KEY, {});
  var secs = document.querySelectorAll('section.card[data-sec]');
  function paint(){
    var c = 0;
    secs.forEach(function(s){
      var id = s.getAttribute('data-sec'), on = !!done[id]; if (on) c++;
      var b = s.querySelector('.done-btn'); b.classList.toggle('on', on);
      b.textContent = on ? '✓ Understood — click to unmark' : 'Mark this section as understood';
    });
    links.forEach(function(l){ if (l[0].tagName === 'H2'){ l[2].textContent = done[l[0].id] ? '✓' : ''; } });
    var p = document.getElementById('donecount'); if (p) p.textContent = c + ' / ' + secs.length + ' sections understood';
  }
  secs.forEach(function(s){
    s.querySelector('.done-btn').onclick = function(){
      var id = s.getAttribute('data-sec'); done[id] = !done[id]; save('sg-done-' + KEY, done); paint();
    };
  });
  paint();

  // scroll spy + reading progress
  var bar = document.querySelector('.progress');
  function spy(){
    var y = window.scrollY + 90, cur = null;
    heads.forEach(function(h){ if (h.offsetTop <= y) cur = h; });
    links.forEach(function(l){ l[1].classList.toggle('on', l[0] === cur); });
    var max = document.documentElement.scrollHeight - window.innerHeight;
    if (bar) bar.style.width = (max > 0 ? 100 * window.scrollY / max : 0) + '%';
  }
  window.addEventListener('scroll', spy, {passive: true}); spy();

  // videos
  var vids = document.querySelectorAll('.vpane');
  var tabs = document.querySelectorAll('.vtabs button');
  var ONLINE = location.protocol.indexOf('http') === 0 && location.hostname.indexOf('github.io') > -1 || /[?&]online\b/.test(location.search);
  // online copy: swap the local <video> for the Google Drive player (loaded only while its tab is open)
  function drive(e){
    var id = e.getAttribute('data-drive'); if (!id) return false;
    var w = document.createElement('div');
    var f = document.createElement('iframe'); f.className = 'vdrive'; f.allow = 'autoplay; fullscreen'; f.allowFullscreen = true;
    f.setAttribute('data-src', 'https://drive.google.com/file/d/' + id + '/preview');
    var a = document.createElement('a'); a.className = 'vdlink'; a.target = '_blank'; a.rel = 'noopener';
    a.href = 'https://drive.google.com/file/d/' + id + '/view'; a.textContent = 'Open in Google Drive ↗';
    w.appendChild(f); w.appendChild(a); e.replaceWith(w);
    return true;
  }
  function show(i){
    vids.forEach(function(v, j){
      v.style.display = j === i ? '' : 'none';
      var e = v.querySelector('video'); if (j !== i && e) e.pause();
      var f = v.querySelector('iframe.vdrive');
      if (f){ if (j === i){ if (!f.getAttribute('src')) f.src = f.getAttribute('data-src'); } else f.removeAttribute('src'); }
    });
    tabs.forEach(function(b, j){ b.classList.toggle('on', j === i); });
  }
  tabs.forEach(function(b, i){ b.onclick = function(){ show(i); }; });
  if (ONLINE) vids.forEach(function(v){ var e = v.querySelector('video'); if (e) drive(e); });
  if (vids.length) show(0);
  vids.forEach(function(v){
    var e = v.querySelector('video'); if (!e) return;
    e.addEventListener('error', function(){
      if (drive(e)){ var k = [].indexOf.call(vids, v); if (v.style.display !== 'none') show(k); return; }
      var m = document.createElement('div'); m.className = 'vmissing';
      m.textContent = 'This video could not be played here. Keep this HTML file in the same folder as "' + e.getAttribute('data-file') + '". (.mkv files play in Chrome/Edge; if not, open the file in VLC.)';
      e.replaceWith(m);
    }, true);
    var pos = load('sg-vpos-' + KEY + '-' + e.getAttribute('data-file'), 0);
    e.addEventListener('loadedmetadata', function(){ if (pos > 5 && pos < e.duration - 5) e.currentTime = pos; });
    var last = 0;
    e.addEventListener('timeupdate', function(){ if (Math.abs(e.currentTime - last) > 5){ last = e.currentTime; save('sg-vpos-' + KEY + '-' + e.getAttribute('data-file'), last); } });
  });
  document.addEventListener('click', function(ev){
    var a = ev.target.closest('a[data-t]'); if (!a) return;
    ev.preventDefault();
    var i = +a.getAttribute('data-v'), t = +a.getAttribute('data-t');
    show(i);
    var f = vids[i] && vids[i].querySelector('iframe.vdrive');
    if (f){ f.src = f.getAttribute('data-src') + '?t=' + t; document.getElementById('videos').scrollIntoView({behavior: 'smooth'}); return; }
    var e = vids[i] && vids[i].querySelector('video'); if (!e) return;
    document.getElementById('videos').scrollIntoView({behavior: 'smooth'});
    e.currentTime = t; e.play();
  });
})();
