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
  // Independent Tamil reading panels. Keep the original DOM and tool state intact.
  (function(){
    try { localStorage.removeItem('sg-lang'); } catch(e){}
    ['',location.hostname,'.'+location.hostname].forEach(function(d){
      document.cookie='googtrans=;path=/;expires=Thu, 01 Jan 1970 00:00:00 GMT'+(d?';domain='+d:'');
    });
    document.querySelectorAll('section.card').forEach(function(section,index){
      var heading=section.querySelector('h2');
      if(!heading || section.querySelector('.quiz')) return;
      var button=document.createElement('button'); button.type='button'; button.className='section-tamil';
      button.textContent='தமிழில் படிக்க'; button.setAttribute('aria-expanded','false');
      var panel=document.createElement('div'); panel.className='tamil-panel'; panel.hidden=true;
      panel.id='tamil-section-'+index; button.setAttribute('aria-controls',panel.id);
      var note=document.createElement('p'); note.lang='ta';
      note.textContent='இந்தப் பகுதியை மட்டும் தமிழில் படிக்கலாம். இது தானியங்கி மொழிபெயர்ப்பு. முக்கியமான English சொற்களை மூலப் பகுதியில் ஒப்பிட்டுப் பாருங்கள். படித்த பிறகு, “இதன் முக்கிய கருத்து என்ன?” என்று உங்கள் சொந்த வார்த்தைகளில் சொல்லிப் பாருங்கள்.';
      panel.appendChild(note);
      heading.insertAdjacentElement('afterend',button); button.insertAdjacentElement('afterend',panel);
      button.onclick=function(){
        var open=panel.hidden; panel.hidden=!open; button.setAttribute('aria-expanded',String(open));
        button.textContent=open?'தமிழை மறைக்க · English':'தமிழில் படிக்க';
        if(!open || panel.querySelector('iframe')) return;
        if(!navigator.onLine){ note.textContent='தமிழ் மொழிபெயர்ப்பைப் பெற இணைய இணைப்பு தேவை. இணையம் வந்ததும் இந்தப் பொத்தானை மீண்டும் அழுத்துங்கள்.'; return; }
        var copy=section.cloneNode(true);
        copy.querySelectorAll('script,iframe,video,button,input,select,textarea,.section-tamil,.tamil-panel,.done-btn,svg').forEach(function(n){n.remove();});
        copy.querySelectorAll('[id]').forEach(function(n){n.removeAttribute('id');});
        copy.querySelectorAll('*').forEach(function(n){Array.from(n.attributes).forEach(function(a){if(/^on/i.test(a.name))n.removeAttribute(a.name);});});
        copy.querySelectorAll('pre,code,.formula,.ts').forEach(function(n){n.classList.add('notranslate');});
        var frame=document.createElement('iframe'); frame.title='Tamil reading: '+heading.textContent; frame.className='tamil-reader';
        // A separate document prevents Google Translate from changing other sections.
        var init="function initTamil(){new google.translate.TranslateElement({pageLanguage:'en',includedLanguages:'ta',autoDisplay:false},'translator');var n=0,t=setInterval(function(){var c=document.querySelector('.goog-te-combo');if(c&&c.options.length>1){c.value='ta';c.dispatchEvent(new Event('change'));clearInterval(t);}if(++n>75)clearInterval(t);},200);}";
        frame.srcdoc='<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>body{font:18px/1.85 system-ui,sans-serif;padding:12px;color:#182431;background:#fff;margin:0}table{border-collapse:collapse;width:100%;display:block;overflow:auto}td,th{border:1px solid #bbb;padding:8px}img{max-width:100%}pre{white-space:pre-wrap}#translator{margin-bottom:12px}h2{font-size:1.35em}</style><body><div id="translator"></div><p lang="ta" class="notranslate">தமிழ் வர சில வினாடிகள் ஆகலாம். மொழிபெயர்ப்பு வரவில்லை என்றால் மேலே Tamil என்பதைத் தேர்வு செய்யுங்கள்.</p>'+copy.innerHTML+'<script>'+init+'<\/script><script src="https://translate.google.com/translate_a/element.js?cb=initTamil"><\/script></body></html>';
        frame.srcdoc=frame.srcdoc.replace(/<\\\/script>/g,'<'+'/script>');
        panel.appendChild(frame);
      };
    });
  })();
})();
