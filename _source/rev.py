import re,sys
sys.stdout.reconfigure(encoding='utf-8')
for p in sys.argv[1:]:
    s=open(p,encoding='utf8').read()
    print('=====',p.split('/')[-2:],re.search(r'^title: (.*)',s,re.M).group(1))
    body=s.split('\n---',1)[1]
    ex=re.findall(r':::exam[^\n]*\n(.*?)\n:::',body,re.S)
    for e in ex: print('EXAM:',re.sub(r'\s+',' ',e)[:600])
    i=body.find('## Quick revision')
    print(re.sub(r'\n\|---\|---\|\n','\n',body[i+24:i+3200]) if i>=0 else '(no revision sheet) '+' | '.join(re.findall(r'^##+ (.+)',body,re.M)))
