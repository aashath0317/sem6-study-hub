"""Check Business Tamil coverage independently of the generated pages.
Run: python _source/build/tests/tamil-source.test.py
"""
from pathlib import Path
from collections import Counter
import re, json, hashlib

BASE = Path(__file__).resolve().parents[1] / 'content' / 'bpas'
TA = BASE / 'ta'
manifest = json.loads((TA / 'source-manifest.json').read_text())
sections = questions = 0
for source in sorted(BASE.glob('*.md')):
    target = TA / source.name
    assert target.exists(), f'Missing translation: {source.name}'
    raw = source.read_text()
    metadata, english = re.match(r'^---\n(.*?)\n---\n(.*)$', raw, re.S).groups()
    tamil = target.read_text()
    tools = re.findall(r'^:::tool[^\n]*\n(.*?)^:::\s*$', english, re.M | re.S)
    tool_ids = [re.search(r'<div id="([^"]+)"', tool)[1] for tool in tools]
    assert tool_ids == re.findall(r'\{\{tool:([^}]+)\}\}', tamil), f'Tool mismatch: {source.name}'
    english = re.sub(r'^:::tool[^\n]*\n.*?^:::\s*$', '', english, flags=re.M | re.S)
    tamil = re.sub(r'^:::html\s*\n\{\{tool:[^}]+\}\}\s*\n:::\s*$', '', tamil, flags=re.M)
    en_sections = re.split(r'^## .+$', english, flags=re.M)[1:]
    ta_sections = re.split(r'^## .+$', tamil, flags=re.M)[1:]
    assert len(en_sections) == len(ta_sections), f'Section mismatch: {source.name}'
    sections += len(en_sections)
    for number, (en, ta) in enumerate(zip(en_sections, ta_sections), 1):
        # Numeric literals must not be lost or invented in translated worked examples.
        for pattern in [r'\d+(?:[,.]\d+)*', r'^### ', r'^\|', r'^- ', r'^\d+\. ']:
            a, b = Counter(re.findall(pattern,en,re.M)), Counter(re.findall(pattern,ta,re.M))
            assert a == b, (source.name, number, pattern, a-b, b-a)
        for pattern in [r'\[\[(?:v\d+\s+)?\d[^]]*\]\]', r'<img[^>]*src="([^"]+)"']:
            assert re.findall(pattern,en) == re.findall(pattern,ta), (source.name,number,pattern)
    dictionary = dict(line.split('\t',1) for line in target.with_suffix('.strings.tsv').read_text().splitlines() if line)
    captions = re.findall(r'^(?:title|lead): (.+)$',metadata,re.M)
    captions += re.findall(r'^video: .*? \| (.+)$',metadata,re.M)
    captions += re.findall(r'^> (.+)$',metadata,re.M)
    captions += re.findall(r'^\d{1,2}:\d{2}(?::\d{2})? (.+)$',metadata,re.M)
    assert all(caption in dictionary for caption in captions), f'Missing caption: {source.name}'
    for ext, expected in manifest[source.stem].items():
        assert hashlib.sha256(source.with_suffix('.'+ext).read_bytes()).hexdigest() == expected
    quiz = source.with_suffix('.quiz')
    if quiz.exists():
        en = [line.strip() for line in quiz.read_text().splitlines() if line and line[:1] in '?+-=#']
        ta = [line.strip() for line in target.with_suffix('.quiz').read_text().splitlines() if line and line[:1] in '?+-=#']
        assert [line[0] for line in en] == [line[0] for line in ta], f'Quiz order: {source.stem}'
        assert [line for line in en if line[0]=='#'] == [line for line in ta if line[0]=='#'], f'Numeric quiz answers: {source.stem}'
        questions += sum(line[0]=='?' for line in en)
print(f'PASS: {sections} Business sections, {questions} questions; numeric examples, structure, tools, images, timestamps and metadata coverage.')
