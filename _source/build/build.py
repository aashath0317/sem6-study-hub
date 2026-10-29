import os, re, sys, html, json, struct
from urllib.parse import quote
import markdown

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = "D:/Study/SEM 6"
# Google Drive file IDs of the uploaded videos ("Folder/Week NN/file" -> id), used by the online copy
_dp = os.path.join(HERE, "drive_ids.json")
DRIVE = json.load(open(_dp, encoding="utf-8")) if os.path.exists(_dp) else {}
CSS = open(os.path.join(HERE, "template.css"), encoding="utf-8").read()
JS = open(os.path.join(HERE, "template.js"), encoding="utf-8").read() + ";\n" + open(os.path.join(HERE, "quiz.js"), encoding="utf-8").read()
OUTNAME = "{week} - Study Guide.html"
SUBJECTS = [
    ("bpas", "Business Processes and Accounting Systems", "ITE3622", "Business Processes & Accounting Systems"),
    ("dm", "Data Mining", "ITE3432", "Data Mining"),
    ("dmath", "Discrete Mathematics", "ITE3822", "Discrete Mathematics"),
    ("hci", "Human Computer Interaction", "ITE3752", "Human Computer Interaction"),
    ("mkt", "Marketing", "ITE3642", "Marketing"),
]
SUBJ = {s[0]: s for s in SUBJECTS}
CALLS = {"tip": "Tip", "exam": "Exam focus", "warn": "Common mistake", "example": "Worked example",
         "key": "Key idea", "video": "From the lecture video"}


def mp4dur(p):
    try:
        size = os.path.getsize(p)
        with open(p, "rb") as f:
            pos = 0
            while pos < size:
                f.seek(pos); h = f.read(16)
                if len(h) < 8: return None
                s, t = struct.unpack(">I4s", h[:8])
                if s == 1: s = struct.unpack(">Q", h[8:16])[0]
                if s == 0: s = size - pos
                if t == b"moov":
                    f.seek(pos); data = f.read(s)
                    i = data.find(b"mvhd"); v = data[i + 4]
                    ts, d = struct.unpack(">IQ", data[i + 24:i + 36]) if v == 1 else struct.unpack(">II", data[i + 16:i + 24])
                    return d / ts
                pos += s
    except Exception:
        return None


def secs(ts):
    p = [int(x) for x in ts.split(":")]
    return p[0] * 3600 + p[1] * 60 + p[2] if len(p) == 3 else p[0] * 60 + p[1]


def ts_links(text):
    def rep(m):
        v = int(m.group(1) or 1) - 1
        return f'<a class="ts" href="#" data-v="{v}" data-t="{secs(m.group(2))}">{m.group(2)}</a>'
    def mx(m):
        rows = [r.split() for r in m.group(1).split(";")]
        n = max(len(r) for r in rows)
        return f'<span class="mxs" style="grid-template-columns:repeat({n},auto)">' + "".join(f"<span>{c}</span>" for r in rows for c in r) + "</span>"
    text = re.sub(r"\[\[m:\s*(.*?)\]\]", mx, text)
    return re.sub(r"\[\[(?:v(\d+)\s+)?(\d{1,2}:\d{2}(?::\d{2})?)\]\]", rep, text)


MD_EXT = ["tables", "fenced_code", "attr_list", "md_in_html", "sane_lists", "def_list", "toc"]


def md(text):
    """Markdown with ::: blocks (nestable)."""
    out, stack, ph = [], [], {}
    lines = text.split("\n")
    buf = out
    for line in lines:
        m = re.match(r"^:::\s*(\w+)\s*(.*)$", line)
        if m:
            stack.append((m.group(1), m.group(2).strip(), buf)); buf = []
            continue
        if line.strip() == ":::" and stack:
            kind, title, parent = stack.pop()
            inner = "\n".join(buf)
            if kind == "html":
                h = inner
            elif kind == "tool":
                h = f'<div class="tool"><div class="tt">🧪 Try it — {md_inline(title or "Interactive")}</div>{inner}</div>'
            elif kind == "formula":
                h = '<div class="formula">' + md_inline(inner).replace("\n", "<br>") + "</div>"
            elif kind == "flow":
                h = '<div class="flow">' + "".join(f"<span>{md_inline(l.strip().lstrip('-').strip())}</span>" for l in inner.split("\n") if l.strip()) + "</div>"
            elif kind == "grid":
                parts = re.split(r"^\+\+\+\s*$", inner, flags=re.M)
                h = '<div class="grid2">' + "".join(f"<div>{md(p)}</div>" for p in parts) + "</div>"
            else:
                t = title or CALLS.get(kind, kind.title())
                h = f'<div class="call {kind}"><div class="ct">{md_inline(t)}</div>{md(inner)}</div>'
            k = f"PHX{len(ph)}_{id(ph)}XHP"; ph[k] = h
            buf = parent; buf.extend(["", k, ""])
            continue
        buf.append(line)
    while stack:  # unclosed
        kind, title, parent = stack.pop(); parent.extend(buf); buf = parent
    src = ts_links("\n".join(buf))
    res = markdown.markdown(src, extensions=MD_EXT, extension_configs={"toc": {"permalink": False}})
    for k, v in ph.items():
        res = res.replace(f"<p>{k}</p>", v).replace(k, v)
    return res


def md_inline(t):
    h = markdown.markdown(ts_links(t), extensions=MD_EXT)
    return re.sub(r"^<p>(.*)</p>$", r"\1", h.strip(), flags=re.S)


def parse(path):
    raw = open(path, encoding="utf-8").read().replace("\r\n", "\n")
    m = re.match(r"^---\n(.*?)\n---\n(.*)$", raw, re.S)
    fm, body = m.group(1), m.group(2)
    meta = {"videos": [], "sources": [], "tags": []}
    cur = None
    for line in fm.split("\n"):
        if not line.strip(): continue
        mv = re.match(r"^video:\s*(.+?)\s*\|\s*(.+)$", line)
        if mv:
            cur = {"file": mv.group(1), "title": mv.group(2), "summary": "", "chapters": []}
            meta["videos"].append(cur); continue
        if cur is not None and line.startswith(">"):
            cur["summary"] += line[1:].strip() + " "; continue
        mc = re.match(r"^(\d{1,2}:\d{2}(?::\d{2})?)\s+(.+)$", line)
        if cur is not None and mc:
            cur["chapters"].append((mc.group(1), mc.group(2))); continue
        k, _, v = line.partition(":")
        k = k.strip()
        if k in ("sources", "tags"): meta[k] = [x.strip() for x in v.split(";") if x.strip()]
        else: meta[k] = v.strip()
    return meta, body


def parse_quiz(path):
    """? question / - wrong / + right / # number [~tol] / = explanation ; blank line between questions."""
    if not os.path.exists(path): return []
    qs, cur = [], None
    for line in open(path, encoding="utf-8").read().replace("\r\n", "\n").split("\n"):
        if line.startswith("? "):
            cur = {"q": md_inline(line[2:].strip()), "o": [], "e": ""}; qs.append(cur)
        elif cur is None or not line.strip():
            continue
        elif line[:2] in ("- ", "+ "):
            if line[0] == "+": cur["a"] = len(cur["o"])
            cur["o"].append(md_inline(line[2:].strip()))
        elif line.startswith("# "):
            v = line[2:].split("~"); cur["n"] = float(v[0].replace(",", "").strip())
            if len(v) > 1: cur["t"] = float(v[1])
        elif line.startswith("= "):
            cur["e"] += md_inline(line[2:].strip()) + " "
        elif cur["e"]:
            cur["e"] += md_inline(line.strip()) + " "
        else:
            cur["q"] += "<br>" + md_inline(line.strip())
    for q in qs:
        if "n" not in q and "a" not in q: raise ValueError(f"{path}: no answer for {q['q'][:60]}")
        if not q["o"]: del q["o"]
    return qs


def quiz_block(qid, qs, pick=0, intro=""):
    data = json.dumps(qs, ensure_ascii=False).replace("</", "<\\/")
    return (f'<div class="quiz" data-qid="{qid}" data-pick="{pick}">{intro}<script type="application/json" class="qdata">{data}</script>'
            f'<div class="qhead"></div><div class="qbody"></div></div>')


def page(title, body, key="", crumbs=""):
    return f"""<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>{html.escape(title)}</title><style>{CSS}</style></head>
<body data-key="{key}">
<div class="topbar"><button id="tocbtn" aria-label="Contents">☰</button><div class="crumb">{crumbs}</div>
<button id="fsm" title="Smaller text">A−</button><button id="fsp" title="Larger text">A+</button><button id="themebtn" title="Dark / light">◐</button><div class="progress"></div></div>
{body}
<script>{JS}</script></body></html>"""


def build_week(skey, wfile, prev, nxt):
    _, folder, code, sname = SUBJ[skey]
    week = "Week " + re.search(r"(\d+)", wfile).group(1).zfill(2)
    meta, body = parse(os.path.join(HERE, "content", skey, wfile))
    wdir = os.path.join(ROOT, folder, week)
    # videos
    vt, vp, total = [], [], 0
    for i, v in enumerate(meta["videos"]):
        fp = os.path.join(wdir, v["file"])
        d = mp4dur(fp) if v["file"].lower().endswith(".mp4") else None
        if not d:  # mkv etc.: estimate from the transcript's last timestamp
            tp = os.path.join(HERE, "..", "tx", f'{folder}__{week}__{v["file"]}.txt')
            if os.path.exists(tp):
                ts = re.findall(r"^\[(\d+):(\d+)\]", open(tp, encoding="utf-8").read(), re.M)
                if ts: d = int(ts[-1][0]) * 60 + int(ts[-1][1]) + 10
        if d: total += d
        exists = os.path.exists(fp)
        vt.append(f'<button>{i+1}. {html.escape(v["title"])}{" · " + str(round(d/60)) + " min" if d else ""}</button>')
        chap = "".join(f'<a href="#" data-v="{i}" data-t="{secs(t)}"><b>{t}</b><span>{md_inline(l)}</span></a>' for t, l in v["chapters"])
        did = DRIVE.get(f'{folder}/{week}/{v["file"]}', "")
        player = (f'<video controls preload="metadata" data-file="{html.escape(v["file"])}" data-drive="{did}"><source src="{quote(v["file"])}"></video>'
                  if exists or did else f'<div class="vmissing">Video file not found next to this page: {html.escape(v["file"])}</div>')
        vp.append(f'<div class="vpane"><div class="vgrid"><div>{player}</div><div class="chap"><p class="vt">{html.escape(v["title"])}</p>'
                  f'<p class="vs">{md_inline(v["summary"].strip())}</p>{chap}</div></div></div>')
    vhtml = ""
    if vt:
        vhtml = (f'<div class="vwrap" id="videos"><h2 id="videos-h" data-t="Lecture videos"><span class="num">▶</span>Lecture videos</h2>'
                 f'<p style="color:var(--muted);margin-top:0">Click any timestamp — here or inside the notes — to jump the video to that moment. Your position is remembered.</p>'
                 f'<div class="vtabs">{"".join(vt)}</div>{"".join(vp)}</div>')
    # sections
    parts = re.split(r"^## (.+)$", body, flags=re.M)
    secs_html = []
    intro = parts[0].strip()
    n = 0
    for i in range(1, len(parts), 2):
        n += 1
        h = parts[i].strip(); sid = f"s{n}"
        secs_html.append(f'<section class="card" data-sec="{sid}"><h2 id="{sid}" data-t="{html.escape(re.sub(r"[*`]", "", h))}"><span class="num">{n}</span>{md_inline(h)}</h2>'
                         f'{md(parts[i+1])}<button class="done-btn"></button></section>')
    qs = parse_quiz(os.path.join(HERE, "content", skey, wfile[:-3] + ".quiz"))
    for q in qs: q["w"] = week
    if qs:
        secs_html.append(f'<section class="card quizcard"><h2 id="quiz" data-t="Self-check quiz"><span class="num">?</span>Self-check quiz</h2>'
                         f'<p style="color:var(--muted)">{len(qs)} questions on this week. Answer them all, then press <b>Check my answers</b>. '
                         f'Your best and latest scores are saved and shown on the subject page.</p>'
                         + quiz_block(f"{skey}-{week.replace(' ', '')}", qs) + '</section>')
    chips = [f'<span class="chip">{code}</span>']
    if meta["videos"]: chips.append(f'<span class="chip">{len(meta["videos"])} video{"s" if len(meta["videos"])>1 else ""}{" · " + str(round(total/60)) + " min" if total else ""}</span>')
    chips += [f'<span class="chip">📄 {html.escape(s)}</span>' for s in meta["sources"]]
    chips.append('<span class="chip" id="donecount"></span>')
    hero = (f'<div class="hero"><div class="sub">{html.escape(sname)} · {week}</div><h1>{md_inline(meta["title"])}</h1>'
            f'<p>{md_inline(meta.get("lead", ""))}</p>{md(intro) if intro else ""}<div class="meta">{"".join(chips)}</div></div>')
    navf = '<div class="navfoot">'
    navf += f'<a href="../{quote(prev[0])}/{quote(OUTNAME.format(week=prev[0]))}"><small>← Previous</small>{html.escape(prev[1])}</a>' if prev else "<span></span>"
    navf += f'<a class="nx" href="../{quote(nxt[0])}/{quote(OUTNAME.format(week=nxt[0]))}"><small>Next →</small>{html.escape(nxt[1])}</a>' if nxt else "<span></span>"
    navf += "</div>"
    toc = '<nav class="toc" id="toc"><p class="tt">On this page</p></nav>'
    crumbs = (f'<a href="../../SEM 6 Study Hub.html">SEM 6</a> › <a href="../{quote("Study Guide - Index.html")}">{html.escape(sname)}</a> › {week}')
    bodyh = f'<div class="layout">{toc}<main>{hero}{vhtml}{"".join(secs_html)}{navf}</main></div>'
    out = page(f"{week} · {re.sub(r'[*`]', '', meta['title'])} — {sname}", bodyh, key=f"{skey}-{week.replace(' ', '')}", crumbs=crumbs)
    open(os.path.join(wdir, OUTNAME.format(week=week)), "w", encoding="utf-8").write(out)
    return week, meta, n, qs


def weeks_of(skey):
    d = os.path.join(HERE, "content", skey)
    return sorted([f for f in os.listdir(d) if f.endswith(".md")]) if os.path.isdir(d) else []


def build_subject(skey):
    _, folder, code, sname = SUBJ[skey]
    files = weeks_of(skey)
    info = []
    for f in files:
        _, meta_peek = None, parse(os.path.join(HERE, "content", skey, f))[0]
        info.append(("Week " + re.search(r"(\d+)", f).group(1).zfill(2), re.sub(r"[*`]", "", meta_peek["title"])))
    cards, allq = [], []
    for i, f in enumerate(files):
        week, meta, n, qs = build_week(skey, f, info[i-1] if i > 0 else None, info[i+1] if i + 1 < len(info) else None)
        cards.append(f'<a href="{quote(week)}/{quote(OUTNAME.format(week=week))}" data-key="{skey}-{week.replace(" ", "")}" data-n="{n}"><small>{week}</small>'
                     f'<span>{html.escape(info[i][1])}</span><em>{html.escape(meta.get("lead", ""))}</em><div class="pg"><i></i></div>'
                     + (f'<b class="qb" data-qid="{skey}-{week.replace(" ", "")}" data-qn="{len(qs)}"></b>' if qs else "") + '</a>')
        allq += qs
    body = (f'<div class="layout" style="display:block;max-width:1100px"><main><div class="hero"><div class="sub">{code} · SEM 6</div><h1>{html.escape(sname)}</h1>'
            f'<p>Offline study guides — one per week, built from the lecture notes and lecture videos. Green bar = sections you marked as understood.</p></div>'
            f'<div class="kpanel" data-subj="{skey}"></div>'
            f'<div class="wk">{"".join(cards)}</div>'
            + (f'<section class="card quizcard" style="margin-top:28px"><h2 id="exam"><span class="num">★</span>Mixed practice exam</h2>'
               f'<p style="color:var(--muted)">20 random questions drawn from all {len(files)} weeks ({len(allq)} in the bank). Every attempt is a new mix — '
               f'a good way to test whole-subject knowledge before the exam.</p>' + quiz_block(f"{skey}-mixed", allq, pick=20) + '</section>' if allq else "")
            + '</main></div>')
    open(os.path.join(ROOT, folder, "Study Guide - Index.html"), "w", encoding="utf-8").write(
        page(f"{sname} — Study Guides", body, crumbs=f'<a href="../SEM 6 Study Hub.html">SEM 6</a> › {html.escape(sname)}'))
    return len(files), sum(1 for f in files if os.path.exists(os.path.join(HERE, "content", skey, f[:-3] + ".quiz")))


def build_hub():
    cards = []
    for skey, folder, code, sname in SUBJECTS:
        n = len(weeks_of(skey))
        if not n: continue
        keys = ",".join(f"{skey}-Week{re.search(r'(\d+)', f).group(1).zfill(2)}" for f in weeks_of(skey) if os.path.exists(os.path.join(HERE, "content", skey, f[:-3] + ".quiz")))
        cards.append(f'<a href="{quote(folder)}/{quote("Study Guide - Index.html")}" data-qkeys="{keys}" data-skey="{skey}"><small>{code}</small><span>{html.escape(sname)}</span><em>{n} weekly study guides</em>'
                     f'<b class="hq"></b></a>')
    body = (f'<div class="layout" style="display:block;max-width:1100px"><main><div class="hero"><div class="sub">Semester 6</div><h1>SEM 6 Study Hub</h1>'
            f'<p>Every subject, every week — complete notes that replace the PDFs and videos. Works fully offline.</p></div><div class="kpanel" data-hub="1"></div><div class="wk">{"".join(cards)}</div></main></div>')
    open(os.path.join(ROOT, "SEM 6 Study Hub.html"), "w", encoding="utf-8").write(page("SEM 6 Study Hub", body, crumbs="SEM 6 Study Hub"))
    open(os.path.join(ROOT, "index.html"), "w", encoding="utf-8").write(
        '<!doctype html><meta charset="utf-8"><title>SEM 6 Study Hub</title>'
        '<meta http-equiv="refresh" content="0; url=SEM%206%20Study%20Hub.html"><a href="SEM%206%20Study%20Hub.html">Open the SEM 6 Study Hub</a>')


if __name__ == "__main__":
    keys = sys.argv[1:] or [s[0] for s in SUBJECTS]
    for k in keys:
        if weeks_of(k): print(k, "weeks/quizzes:", *build_subject(k))
    build_hub()
