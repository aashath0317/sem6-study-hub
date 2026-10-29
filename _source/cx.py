import sys,os,re
# condensed transcript: one line per ~N seconds, truncated
d=sys.argv[1]; pat=sys.argv[2]; gap=int(sys.argv[3]) if len(sys.argv)>3 else 50; w=int(sys.argv[4]) if len(sys.argv)>4 else 110
for f in sorted(os.listdir(d)):
    if pat not in f: continue
    print('#####',f.split('__')[-1][:-4])
    last=-999
    for l in open(os.path.join(d,f),encoding='utf8'):
        m=re.match(r'\[(\d+):(\d+)\] (.*)',l)
        if not m: continue
        t=int(m[1])*60+int(m[2])
        if t-last>=gap: print(f'{m[1]}:{m[2]} {m[3][:w]}'); last=t
