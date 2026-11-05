"""Keep authored Tamil pages building after English BPAS sections change.

Sections listed here have no Tamil translation yet. In Tamil mode they show the
English text under a visible notice, and never a stale translation.
Usage: python _source/build/tamil_english_fallback.py   (then rebuild)
Add a week to REWRITTEN after rewriting its course-paper practice section.
"""
from pathlib import Path
import hashlib, json, re

BASE = Path(__file__).resolve().parent / "content" / "bpas"
TA = BASE / "ta"
NOTE = "**இந்தப் பகுதி இன்னும் தமிழில் மொழிபெயர்க்கப்படவில்லை; தற்போது ஆங்கிலத்தில் மட்டும் உள்ளது.**"
BEGINNER = "Beginner practice — questions and step-by-step answers"
BEGINNER_TA = "தொடக்கநிலைப் பயிற்சி — கேள்விகளும் படிப்படியான விடைகளும்"
PRACTICE = "Practice questions (course paper)"
REWRITTEN = {"w02", "w03", "w05", "w09"}


def split(text):
    parts = re.split(r"^## (.+)$", text, flags=re.M)
    return parts[0], [[parts[i], parts[i + 1]] for i in range(1, len(parts), 2)]


manifest = json.loads((TA / "source-manifest.json").read_text(encoding="utf-8"))
for source in sorted(BASE.glob("w*.md")):
    english = source.read_text(encoding="utf-8")
    body = re.match(r"^---\n.*?\n---\n(.*)$", english, re.S)[1]
    _, en = split(body)
    target = TA / source.name
    head, ta = split(target.read_text(encoding="utf-8"))
    positions = {name: i for i, (name, _) in enumerate(en)}
    if BEGINNER in positions and len(ta) == len(en) - 1:
        ta.append([BEGINNER_TA, ""])
    if len(ta) != len(en):
        raise SystemExit(f"Section count differs: {source.name}")
    wanted = [BEGINNER] + ([PRACTICE] if source.stem in REWRITTEN else [])
    for name in wanted:
        if name in positions:
            i = positions[name]
            text = re.sub(r'^:::tool[^\n]*\n<div id="([^"]+)".*?^:::\s*$', r":::html\n{{tool:\1}}\n:::", en[i][1], flags=re.M | re.S)
            ta[i][1] = "\n\n" + NOTE + "\n\n" + text.strip() + "\n\n"
    target.write_text(head + "".join(f"## {a}{b}" for a, b in ta), encoding="utf-8")
    manifest[source.stem]["md"] = hashlib.sha256(source.read_bytes()).hexdigest()
(TA / "source-manifest.json").write_text(json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
