import sys,os,re
d,pat=sys.argv[1],sys.argv[2]; gap=int(sys.argv[3]) if len(sys.argv)>3 else 25; w=int(sys.argv[4]) if len(sys.argv)>4 else 95
R=re.compile(r"\b(next|move (on )?to|moving on|let'?s (see|look|move|discuss|talk|take)|first(ly)?|second(ly)?|third(ly)?|finally|example|what is|what are|definition|today|introduc|summary|conclu|now we)\b",re.I)
for f in sorted(os.listdir(d)):
    if pat not in f: continue
    print('#####',f.split('__')[-1][:-4]); last=-99
    for l in open(os.path.join(d,f),encoding='utf8'):
        m=re.match(r'\[(\d+):(\d+)\] (.*)',l)
        if m and R.search(m[3]):
            t=int(m[1])*60+int(m[2])
            if t-last>=gap: print(f'{m[1]}:{m[2]} {m[3][:w]}'); last=t
