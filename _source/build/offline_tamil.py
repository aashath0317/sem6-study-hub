"""Embed authored Tamil translations; no translation service is used."""
import os, re, json, html, hashlib


def _json(path, fallback):
    if not os.path.isfile(path):
        return fallback
    with open(path, encoding='utf-8') as file:
        return json.load(file)


def _strings(path):
    result = {}
    if os.path.isfile(path):
        with open(path, encoding='utf-8') as file:
            for line in file:
                if line.strip():
                    en, ta = line.rstrip('\n').split('\t', 1)
                    result[en.strip()] = ta.strip()
    return result


def translated_body(body, key, here, render):
    match = re.fullmatch(r'hci-(?:Week(\d+)|(papers)|(index))', key)
    if not match:
        return body, False
    stem = 'w' + match[1] if match[1] else 'papers' if match[2] else 'index'
    directory = os.path.join(here, 'content', 'hci', 'ta')
    path = os.path.join(directory, stem + '.md')
    if stem != 'index' and not os.path.isfile(path):
        return body, False
    manifest = _json(os.path.join(directory, 'source-manifest.json'), {})
    for source_stem in (manifest if stem == 'index' else [stem]):
        for extension, expected in manifest.get(source_stem, {}).items():
            source = os.path.join(here, 'content', 'hci', source_stem + '.' + extension)
            with open(source, 'rb') as file:
                actual = hashlib.sha256(file.read()).hexdigest()
            if actual != expected:
                raise ValueError('English source changed; review its Tamil translation: ' + source)
    translations = []
    if stem != 'index':
        with open(path, encoding='utf-8') as file:
            parts = re.split(r'^## (.+)$', file.read(), flags=re.M)
        translations = [(parts[i], render(parts[i+1])) for i in range(1, len(parts), 2)]
        sections = re.findall(r'<section class="card" data-sec="s\d+">', body)
        if len(sections) != len(translations):
            raise ValueError('Tamil translation section count differs: ' + key)

    def replace(m):
        start, sid, english, end = m.groups()
        title, tamil = translations[int(sid[1:])-1]
        tamil = re.sub(r'(<h[3-6]) id="[^"]*"', r'\1', tamil)
        tamil = re.sub(r'\{\{tool:([\w-]+)\}\}', r'<div data-ta-tool="\1"></div>', tamil)
        expected = re.findall(r'data-ta-tool="([^"]+)"', tamil)
        if any(not re.search(r'id="' + re.escape(tool) + '"', english) for tool in expected):
            raise ValueError('Tamil tool is not in its English section: ' + key + '/' + sid)
        done = '<button class="done-btn"></button>'
        had_done = done in english
        english = english.replace(done, '')
        return (start + '<div class="hci-en">' + english + '</div><div class="hci-ta" lang="ta" hidden data-title="' +
                html.escape(title, quote=True) + '">' + tamil + '</div>' + (done if had_done else '') + end)

    strings = _strings(os.path.join(directory, 'common.strings.tsv'))
    strings.update(_strings(path.replace('.md', '.strings.tsv')))
    markup = _json(os.path.join(directory, 'common.markup.json'), {})
    markup.update(_json(path.replace('.md', '.markup.json'), {}))
    patterns = _json(os.path.join(directory, 'common.patterns.json'), [])
    patterns += _json(path.replace('.md', '.patterns.json'), [])
    # Navigation and week cards share the corresponding translated title/lead.
    for name in sorted(os.listdir(directory)):
        if not re.fullmatch(r'w\d+\.strings.tsv', name):
            continue
        week_stem = name.split('.')[0]
        source = os.path.join(here, 'content', 'hci', week_stem + '.md')
        with open(source, encoding='utf-8') as file:
            metadata = re.search(r'^---\n(.*?)\n---', file.read(), re.S).group(1)
        mapping = _strings(os.path.join(directory, name))
        for label in ('title', 'lead'):
            value = re.search(r'^' + label + r': (.+)$', metadata, re.M)
            if value and value[1] in mapping:
                strings[value[1]] = mapping[value[1]]
    # The mixed exam on the HCI index uses all the weekly translations.
    quiz_stems = ['w' + str(i).zfill(2) for i in range(1, 14)] if stem == 'index' else [stem]
    for quiz_stem in quiz_stems:
        quiz_path = os.path.join(directory, quiz_stem + '.quiz')
        if not os.path.isfile(quiz_path):
            continue
        original_quiz = os.path.join(here, 'content', 'hci', quiz_stem + '.quiz')
        with open(original_quiz, encoding='utf-8') as file:
            en_lines = [l.strip() for l in file if l[:1] in '?+-=#']
        with open(quiz_path, encoding='utf-8') as file:
            ta_lines = [l.strip() for l in file if l[:1] in '?+-=#']
        if len(en_lines) != len(ta_lines) or any(a[0] != b[0] or (a[0] == '#' and a != b) for a,b in zip(en_lines,ta_lines)):
            raise ValueError('Tamil quiz structure/answers differ: ' + key)
        for en, ta in zip(en_lines, ta_lines):
            if en[0] == '#':
                continue
            a = re.sub(r'^<p>|</p>$', '', render(en[1:].strip()).strip())
            b = re.sub(r'^<p>|</p>$', '', render(ta[1:].strip()).strip())
            markup[a] = b
            if '<' not in a:
                strings[a] = re.sub('<[^>]+>', '', b)
    data = json.dumps({'strings': strings, 'markup': markup, 'patterns': patterns}, ensure_ascii=False).replace('</', '<\\/')
    data_tag = '<script type="application/json" id="hci-tamil-data">' + data + '</script>'
    body = body.replace('</body>', data_tag + '</body>') if '</body>' in body else body + data_tag
    return re.sub(r'(<section class="card" data-sec="(s\d+)"><h2\b[^>]*>.*?</h2>)(.*?)(</section>)', replace, body, flags=re.S), True
