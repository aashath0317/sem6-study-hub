// Authored, offline Tamil translations. No network requests or external translator.
(function () {
  'use strict';
  var sections = Array.from(document.querySelectorAll('section[data-sec]'));
  if (!document.getElementById('hci-tamil-data') || sections.some(function (s) { return !s.querySelector('.hci-ta'); })) return;
  var button = document.createElement('button');
  button.type = 'button'; button.className = 'hci-language'; button.lang = 'ta';
  button.textContent = 'தமிழ்'; button.setAttribute('aria-label', 'Read the Tamil translation');
  button.setAttribute('aria-pressed', 'false'); document.body.appendChild(button);
  var tamil = false;
  var tools = [];
  sections.forEach(function (section) {
    var heading = section.querySelector('h2');
    heading.dataset.english = heading.innerHTML;
    var englishHeads = section.querySelectorAll('.hci-en h3[id]');
    section.querySelectorAll('.hci-ta h3').forEach(function (h, index) {
      var english = englishHeads[index];
      if (!english) return;
      h.id = 'ta-' + english.id;
      h.dataset.englishId = english.id;
      h.dataset.englishText = english.textContent;
    });
    section.querySelectorAll('[data-ta-tool]').forEach(function (slot) {
      var live = document.getElementById(slot.dataset.taTool);
      if (!live) throw new Error('Missing shared tool: ' + slot.dataset.taTool);
      var tool = live.closest('.tool');
      var home = document.createElement('span');
      tool.before(home); tools.push({tool:tool, home:home, slot:slot});
    });
  });
  var data = JSON.parse(document.getElementById('hci-tamil-data').textContent);
  var patterns = (data.patterns || []).map(function (p) { return {regex:new RegExp(p.pattern, p.flags || ''), replacement:p.replacement}; });
  var textState = new WeakMap(), htmlState = new WeakMap(), attributeState = new WeakMap();
  function fitTamilDiagrams() {
    document.querySelectorAll('.tool svg:has(foreignObject)').forEach(function (svg) {
      if (!svg.dataset.hciViewbox) svg.dataset.hciViewbox = svg.getAttribute('viewBox');
      var box = svg.dataset.hciViewbox.split(/\s+/).map(Number);
      svg.setAttribute('viewBox', tamil ? [box[0],box[1],box[2],box[3]*2].join(' ') : svg.dataset.hciViewbox);
      svg.querySelectorAll('[y],[y1],[y2],[cy],[height]').forEach(function (el) {
        ['y','y1','y2','cy','height'].forEach(function (attr) {
          if (!el.hasAttribute(attr)) return;
          var saved = 'data-hci-' + attr;
          if (!el.hasAttribute(saved)) el.setAttribute(saved, el.getAttribute(attr));
          var original = el.getAttribute(saved);
          if (!isNaN(Number(original))) el.setAttribute(attr, tamil ? Number(original)*2 : original);
        });
      });
    });
  }
  function translateLiveContent() {
    fitTamilDiagrams();
    document.querySelectorAll('.qt,.qe,.qo span,.tool p,.tool h4,.tool td,.tool th,.tool text,.tool foreignObject div').forEach(function (el) {
      var current = el.innerHTML, saved = htmlState.get(el);
      if (saved && !tamil) { el.innerHTML = saved.en; return; }
      if (saved && current === saved.ta) return;
      if (!tamil) return;
      var prefix = '', suffix = '', content = current.trim();
      if (el.matches('.qt')) {
        var week = content.match(/(\s*<span class="qw">[\s\S]*?<\/span>)$/);
        if (week) { suffix = week[1]; content = content.slice(0, -suffix.length).trim(); }
      }
      if (el.matches('.qt,.qe')) {
        var parts = content.match(/^(<b>.*?<\/b>\s*)([\s\S]*)$/);
        if (parts) { prefix = parts[1]; content = parts[2].trim(); }
      }
      if (Object.prototype.hasOwnProperty.call(data.markup, content)) {
        var translated = prefix + data.markup[content] + suffix;
        htmlState.set(el, {en:current, ta:translated}); el.innerHTML = translated;
      }
    });
    document.querySelectorAll('[placeholder],[title],[aria-label]').forEach(function (el) {
      if (el === button) return;
      var saved = attributeState.get(el) || {};
      ['placeholder','title','aria-label'].forEach(function (attr) {
        var current = el.getAttribute(attr); if (!current) return;
        if (saved[attr] && current === saved[attr].ta) {
          if (!tamil) el.setAttribute(attr, saved[attr].en);
          return;
        }
        if (tamil && data.strings[current]) {
          saved[attr] = {en:current, ta:data.strings[current]}; el.setAttribute(attr, saved[attr].ta);
        }
      });
      attributeState.set(el, saved);
    });
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    var node;
    while ((node = walker.nextNode())) {
      if (!node.parentElement || node.parentElement.closest('script,style,.hci-language')) continue;
      var value = node.nodeValue, saved = textState.get(node);
      if (saved && value === saved.ta) {
        if (!tamil) node.nodeValue = saved.en;
        continue;
      }
      if (!tamil) continue;
      var key = value.trim(), translated = data.strings[key];
      if (!translated && /^\d+ unanswered$/.test(key)) translated = key.split(' ')[0] + ' விடையளிக்கப்படவில்லை';
      if (!translated) {
        var numbered = key.match(/^(\d+\.\s+)(.*)$/);
        if (numbered && data.strings[numbered[2]]) translated = numbered[1] + data.strings[numbered[2]];
      }
      if (!translated) {
        var video = key.match(/^(\d+\.\s+)(.*?) · (\d+) min$/);
        if (video && data.strings[video[2]]) translated = video[1] + data.strings[video[2]] + ' · ' + video[3] + ' நிமிடம்';
      }
      var patterned = translated || key;
      patterns.forEach(function (p) { p.regex.lastIndex = 0; patterned = patterned.replace(p.regex, p.replacement); });
      if (patterned !== key) translated = patterned;
      if (!translated) continue;
      var output = value.replace(key, translated);
      if (output !== value) { textState.set(node, {en:value, ta:output}); node.nodeValue = output; }
    }
  }
  document.addEventListener('click', function (event) {
    var item = event.target.closest('.tool .ml li');
    if (!tamil || !item) return;
    var walker = document.createTreeWalker(item, NodeFilter.SHOW_TEXT), node;
    while ((node = walker.nextNode())) {
      var saved = textState.get(node);
      if (saved && node.nodeValue === saved.ta) node.nodeValue = saved.en;
    }
  }, true);
  var observer = new MutationObserver(function () { if (tamil) translateLiveContent(); });
  observer.observe(document.body, {subtree:true, childList:true, characterData:true});
  button.onclick = function () {
    tamil = !tamil;
    tools.forEach(function (item) {
      if (tamil) item.slot.appendChild(item.tool);
      else item.home.after(item.tool);
    });
    sections.forEach(function (section) {
      var en = section.querySelector('.hci-en'), ta = section.querySelector('.hci-ta');
      en.hidden = tamil; ta.hidden = !tamil;
      var h = section.querySelector('h2'), number = h.querySelector('.num').outerHTML;
      if (tamil) { h.innerHTML = number; h.appendChild(document.createTextNode(ta.dataset.title)); }
      else h.innerHTML = h.dataset.english;
      section.querySelectorAll('.hci-ta h3[data-english-id]').forEach(function (subheading) {
        var target = tamil ? subheading.dataset.englishId : subheading.id;
        var link = document.querySelector('#toc a[href="#' + target + '"]');
        if (link) {
          link.href = '#' + (tamil ? subheading.id : subheading.dataset.englishId);
          link.lastElementChild.textContent = tamil ? subheading.textContent : subheading.dataset.englishText;
        }
      });
      var toc = document.querySelector('#toc a[href="#' + h.id + '"]');
      if (toc && toc.lastElementChild) toc.lastElementChild.textContent = tamil ? ta.dataset.title : h.dataset.t;
    });
    document.documentElement.lang = tamil ? 'ta' : 'en';
    button.textContent = tamil ? 'English' : 'தமிழ்'; button.lang = tamil ? 'en' : 'ta';
    button.setAttribute('aria-label', tamil ? 'Read original English' : 'Read the Tamil translation');
    button.setAttribute('aria-pressed', String(tamil));
    translateLiveContent();
    window.dispatchEvent(new Event('resize'));
  };
})();
