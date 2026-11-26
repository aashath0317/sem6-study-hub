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
    match = re.fullmatch(r'(hci|bpas|dm|dmath|mkt)-(?:Week(\d+)|(papers|quizzes)|(index))', key)
    if not match:
        return body, False
    subject = match[1]
    stem = 'w' + match[2] if match[2] else match[3] if match[3] else 'index'
    directory = os.path.join(here, 'content', subject, 'ta')
    path = os.path.join(directory, stem + '.md')
    if stem != 'index' and not os.path.isfile(path):
        return body, False
    manifest = _json(os.path.join(directory, 'source-manifest.json'), {})
    for source_stem in (manifest if stem == 'index' else [stem]):
        for extension, expected in manifest.get(source_stem, {}).items():
            source = os.path.join(here, 'content', subject, source_stem + '.' + extension)
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
        explanation = ''
        native = re.match(r'(.*)<div class="section-english" id="(en-s\d+)" lang="en">(.*)</div>(<button class="done-btn"></button>)?$', english, re.S)
        if native:
            explanation = native[1]
            english = native[3] + (native[4] or '')
        tamil = re.sub(r'(<h[3-6]) id="[^"]*"', r'\1', tamil)
        tamil = re.sub(r'\{\{tool:([\w-]+)\}\}', r'<div data-ta-tool="\1"></div>', tamil)
        expected = re.findall(r'data-ta-tool="([^"]+)"', tamil)
        if any(not re.search(r'id="' + re.escape(tool) + '"', english) for tool in expected):
            raise ValueError('Tamil tool is not in its English section: ' + key + '/' + sid)
        done = '<button class="done-btn"></button>'
        had_done = done in english
        english = english.replace(done, '')
        return (start + explanation + '<div class="section-english" id="en-' + sid + '" lang="en"><div class="hci-en">' + english + '</div><div class="hci-ta" lang="ta" hidden data-title="' +
                html.escape(title, quote=True) + '">' + tamil + '</div></div>' + (done if had_done else '') + end)

    strings = _strings(os.path.join(directory, 'common.strings.tsv'))
    strings.update(_strings(path.replace('.md', '.strings.tsv')))
    markup = _json(os.path.join(directory, 'common.markup.json'), {})
    markup.update(_json(path.replace('.md', '.markup.json'), {}))
    patterns = _json(os.path.join(directory, 'common.patterns.json'), [])
    patterns += _json(path.replace('.md', '.patterns.json'), [])
    # Tool captions add a shared prefix around the authored title.
    for title in re.findall(r'<div class="tt">[^<]*?Try it [^<]*?</div>', body):
        label = html.unescape(re.sub('<[^>]+>', '', title)).strip()
        prefix = '\U0001f9ea Try it \u2014 '
        if label.startswith(prefix) and label[len(prefix):] in strings:
            strings[label] = '\U0001f9ea \u0bae\u0bc1\u0baf\u0ba9\u0bcd\u0bb1\u0bc1 \u0baa\u0bbe\u0bb0\u0bc1\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u2014 ' + strings[label[len(prefix):]]
    # Navigation and week cards share the corresponding translated title/lead.
    for name in sorted(os.listdir(directory)):
        if not re.fullmatch(r'w\d+\.strings.tsv', name):
            continue
        week_stem = name.split('.')[0]
        source = os.path.join(here, 'content', subject, week_stem + '.md')
        with open(source, encoding='utf-8') as file:
            metadata = re.search(r'^---\n(.*?)\n---', file.read(), re.S).group(1)
        mapping = _strings(os.path.join(directory, name))
        for label in ('title', 'lead'):
            value = re.search(r'^' + label + r': (.+)$', metadata, re.M)
            if value and value[1] in mapping:
                strings[value[1]] = mapping[value[1]]
    # Mixed practice exams use every translated weekly question for this subject.
    quiz_stems = sorted(name[:-5] for name in os.listdir(directory) if re.fullmatch(r'w\d+\.quiz', name)) if stem == 'index' else [stem]
    for quiz_stem in quiz_stems:
        quiz_path = os.path.join(directory, quiz_stem + '.quiz')
        if not os.path.isfile(quiz_path):
            continue
        original_quiz = os.path.join(here, 'content', subject, quiz_stem + '.quiz')
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
            # Published quiz banks keep fill-in-the-blank underscores literal.
            if re.search(r'_{2,}', en[1:]):
                literal = lambda value: re.sub(r'_{2,}', lambda m: '\\_' * len(m[0]), value)
                plain_en = re.sub(r'^<p>|</p>$', '', render(literal(en[1:].strip())).strip())
                plain_ta = re.sub(r'^<p>|</p>$', '', render(literal(ta[1:].strip())).strip())
                markup[plain_en] = plain_ta

    data = json.dumps({'strings': strings, 'markup': markup, 'patterns': patterns}, ensure_ascii=False).replace('</', '<\\/')
    data_tag = '<script type="application/json" id="hci-tamil-data">' + data + '</script>'
    body = body.replace('</body>', data_tag + '</body>') if '</body>' in body else body + data_tag
    return re.sub(r'(<section class="card" data-sec="(s\d+)"><h2\b[^>]*>.*?</h2>)(.*?)(</section>)', replace, body, flags=re.S), True
