"""Refresh authored offline translations, preserving published English and explanations.

Usage: python _source/build/refresh_hci_translations.py [hci|bpas|dm]
Requires the same `markdown` package as build.py.
"""
from pathlib import Path
import re, sys, json
from build import md, native_sections
from offline_tamil import translated_body

HERE = Path(__file__).resolve().parent
ROOT = HERE.parent.parent


def refresh(text, key):
    # Keep the already published explanation markup byte-for-byte. Markdown
    # versions can otherwise render emphasis in formulas differently.
    explanation_pattern = r'(<section class="card" data-sec="(s\d+)"><h2\b[^>]*>.*?</h2>)(.*?)(<div class="section-english" id="en-s\d+" lang="en">)'
    explanations = {m[2]: m[3] for m in re.finditer(explanation_pattern, text, re.S)
                    if 'class="tamil-native"' in m[3]}
    # Discard only the prior generated translation assets/panels.
    text = re.sub(r'<style>\s*\.hci-language\{.*?</style>', '', text, flags=re.S)
    text = re.sub(r'<script>// Authored, offline Tamil translations\..*?</script>', '', text, flags=re.S)
    text = re.sub(r'<script type="application/json" id="hci-tamil-data">.*?</script>', '', text, flags=re.S)
    text = re.sub(r'<div class="section-language">.*?<div class="section-english" id="en-(s\d+)" lang="en">',
                  r'<div class="section-english" id="en-\1" lang="en">', text, flags=re.S)
    # This section boundary keeps nested tool markup untouched.
    def english_section(match):
        start, contents, end = match.groups()
        if '<div class="hci-en">' in contents:
            contents = re.search(r'<div class="hci-en">(.*?)</div><div class="hci-ta".*', contents, re.S).group(1) + '<button class="done-btn"></button>'
        else:
            contents = re.sub(r'^<div class="section-english" id="en-s\d+" lang="en">(.*?)</div>(<button class="done-btn"></button>)?$',
                              lambda m: m[1] + (m[2] or ''), contents, flags=re.S)
        return start + contents + end
    text = re.sub(r'(<section class="card" data-sec="s\d+"><h2\b[^>]*>.*?</h2>)(.*?)(</section>)', english_section, text, flags=re.S)
    text = native_sections(text, key)
    text = re.sub(explanation_pattern,
                  lambda m: m[1] + explanations.get(m[2], m[3]) + m[4], text, flags=re.S)
    text, ready = translated_body(text, key, str(HERE), md)
    if not ready:
        raise ValueError('Missing complete authored Tamil translation: ' + key)
    assets = '<style>' + (HERE/'hci-translate.css').read_text() + '</style><script>' + (HERE/'hci-translate.js').read_text() + '</script>'
    return text.replace('</body>', assets + '</body>')


if __name__ == '__main__':
    subject = sys.argv[1] if len(sys.argv) > 1 else 'hci'
    folders = {'hci':'Human Computer Interaction', 'bpas':'Business Processes and Accounting Systems', 'dm':'Data Mining'}
    if subject not in folders:
        raise SystemExit('Supported subjects: hci, bpas, dm')
    files = sorted((ROOT/folders[subject]).rglob('*.html'))
    prepared = []
    for path in files:
        text = path.read_text(encoding='utf-8')
        key = re.search(r'<body data-key="([^"]*)"', text)[1]
        if subject in ('bpas', 'dm'):
            week = re.fullmatch(subject + r'-Week(\d+)', key)
            directory = HERE/'content'/subject/'ta'
            if week:
                if subject == 'dm' and 'w' + week[1] not in json.loads((directory/'source-manifest.json').read_text()):
                    continue
                if not all((directory/('w' + week[1] + '.' + ext)).exists() for ext in ('md', 'quiz', 'strings.tsv')):
                    continue
            elif key.endswith('-papers'):
                if not (directory/'papers.md').exists():
                    continue
            elif not key:
                if not all((directory/('w' + str(i).zfill(2) + '.quiz')).exists() for i in range(1,16)):
                    continue
            else:
                continue
        key = key or subject + '-index'
        prepared.append((path, refresh(text, key)))
    for path, text in prepared:
        path.write_text(text, encoding='utf-8')
    print('Updated', len(prepared), subject.upper(), 'pages; other subjects unchanged.')
