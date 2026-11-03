"""Verify published English, original explanations and quiz banks survive translation.
Needs beautifulsoup4. Run from the repository root with optional subject argument.
"""
from pathlib import Path
import re, subprocess, sys
from bs4 import BeautifulSoup

root = Path(__file__).resolve().parents[3]
subject = sys.argv[1] if len(sys.argv) > 1 else 'dm'
folder = {'dm': 'Data Mining', 'bpas': 'Business Processes and Accounting Systems',
          'hci': 'Human Computer Interaction'}[subject]
baseline = '4def5a9'
count = 0
for page in sorted((root / folder).rglob('*.html')):
    current = page.read_text()
    if 'id="hci-tamil-data"' not in current:
        continue
    relative = page.relative_to(root).as_posix()
    original = subprocess.check_output(['git', 'show', baseline + ':' + relative], cwd=root).decode()
    before, after = BeautifulSoup(original, 'html.parser'), BeautifulSoup(current, 'html.parser')
    a, b = before.select('section[data-sec]'), after.select('section[data-sec]')
    assert len(a) == len(b), relative
    for old, new in zip(a, b):
        old_english = old.select_one('.hci-en') or old.select_one('.section-english')
        new_english = new.select_one('.hci-en')
        # The done button lives outside the language panel after refresh.
        for fragment in [old_english, new_english]:
            if fragment:
                for button in fragment.select('.done-btn'):
                    button.decompose()
        assert old_english.decode_contents() == new_english.decode_contents(), (relative, old['data-sec'], 'English changed')
        assert str(old.select_one('.tamil-native')) == str(new.select_one('.tamil-native')), (relative, 'Explanation changed')
    # Application scripts include the untouched quiz banks and tool calculations.
    scripts = lambda soup: [s.get_text() for s in soup.select('script')
                            if s.get('type') != 'application/json'
                            and not s.get_text().startswith('// Authored, offline Tamil translations.')]
    assert scripts(before) == scripts(after), (relative, 'Application logic changed')
    count += 1
print('PASS:', count, subject.upper(), 'pages retain exact original English, Tamil explanations and application scripts.')
