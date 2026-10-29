import sys,re,os
# chapters file: "@@ subj/wNN | video name" then "mm:ss label" lines
base='build/content/'
cur=None;blocks={}
for l in open(sys.argv[1],encoding='utf8'):
    l=l.rstrip('\n')
    if l.startswith('@@'):
        f,v=[x.strip() for x in l[2:].split('|',1)];cur=(f,v);blocks[cur]=[]
    elif l.strip() and cur: blocks[cur].append(l.strip())
for (f,v),ch in blocks.items():
    p=base+f+'.md';s=open(p,encoding='utf8').read()
    head,body=s.split('\n---',1) if s.startswith('---') is False else (None,None)
    lines=s.split('\n');out=[];i=0;done=False
    while i<len(lines):
        out.append(lines[i])
        if lines[i].startswith('video:') and lines[i][6:].split('|')[0].strip()==v:
            i+=1
            while i<len(lines) and lines[i].startswith('>'): out.append(lines[i]);i+=1
            while i<len(lines) and re.match(r'\d\d:\d\d ',lines[i]): i+=1   # replace existing
            out.extend(ch);done=True;continue
        i+=1
    if not done: print('NOT FOUND',f,v)
    open(p,'w',encoding='utf8').write('\n'.join(out))
print(len(blocks),'blocks')
