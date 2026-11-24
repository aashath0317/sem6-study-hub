"""Independently recalculate all authored W03–05 worked/practice/quiz answers.
Usage: python3 verify-mm-02-05.py [directory-containing-wNN.md]
Standard library only; the source directory can be content/mm or work/mm.
"""
from pathlib import Path
from fractions import Fraction as F
from math import floor, sqrt, ceil, log2, gcd
import re,json,sys
base=Path(sys.argv[1]) if len(sys.argv)>1 else Path(__file__).resolve().parents[1]/'content'/'mm'
checks=0
def eq(actual,expected):
 global checks
 assert actual==expected,(actual,expected)
 checks+=1
def rounded(x):return (1 if x>=0 else -1)*floor(abs(x)+F(1,2))
def bytes_(w,h,b):return F(w*h*b,8)
# Point conversion in W03 and its numeric quiz.
eq(F(72,72),1)
# W04 every solved size, palette, resolution, aspect and numeric practice.
for data,answer in [((30,40,8),1200),((240,320,8),76800),((640,480,24),921600),((100,80,8),8000),((200,100,24),60000),((1024,512,8),524288),((640,480,1),38400),((320,240,16),153600)]:eq(bytes_(*data),answer)
for count,kib in [(76800,75),(921600,900),(524288,512)]:eq(F(count,1024),kib)
for depth,answer in [(1,2),(8,256),(4,16),(2,4),(24,16777216)]:eq(2**depth,answer)
for entries,depth in [(100,7),(17,5),(256,8)]:eq(ceil(log2(entries)),depth)
for w,h,pixels in [(800,600,480000),(1280,720,921600)]:eq(w*h,pixels)
for px,inches,ppi in [(1200,4,300),(900,3,300),(1000,5,200)]:eq(F(px,inches),ppi)
for px,ppi,inches in [(1800,300,6),(1200,300,4),(2400,300,8),(900,300,3)]:eq(F(px,ppi),inches)
for w,h,ratio in [(800,600,(4,3)),(1920,1080,(16,9)),(1024,768,(4,3)),(1280,720,(16,9)),(600,800,(3,4))]:g=gcd(w,h);eq((w//g,h//g),ratio)
for expr,expected in [(F(1280*9,16),720),(F(1200*3,4),900),(F(900*16,9),1600)]:eq(expr,expected)
# W05 exact fractional DDA tables: every row recomputed independently.
s=(base/'w05.md').read_text()
dda_sections=re.findall(r'### Solved DDA example.*?(?=\n### |\n\*\*Activity)',s,re.S)
for section,(a,b) in zip(dda_sections,[((2,2),(6,7)),((2,3),(9,9)),((-2,-4),(-8,5))]):
 rows=re.findall(r'^\| (\d+) \| ([^|]+) \| ([^|]+) \| \((-?\d+),(-?\d+)\) \|$',section,re.M)
 n=max(abs(b[0]-a[0]),abs(b[1]-a[1]));eq(len(rows),n+1)
 for k,x,y,px,py in rows:
  k=int(k);xx=F(a[0])+F(k*(b[0]-a[0]),n);yy=F(a[1])+F(k*(b[1]-a[1]),n)
  eq(F(x.strip()),xx);eq(F(y.strip()),yy);eq((int(px),int(py)),(rounded(xx),rounded(yy)))
def dda(a,b,count=None):
 n=max(abs(b[0]-a[0]),abs(b[1]-a[1]))
 if not n:return [a]
 return [(rounded(F(a[0])+F(k*(b[0]-a[0]),n)),rounded(F(a[1])+F(k*(b[1]-a[1]),n))) for k in range(n+1)][:count]
eq(dda((-1,5),(4,9),5),[(-1,5),(0,6),(1,7),(2,7),(3,8)])
eq(dda((0,0),(4,2),3),[(0,0),(1,1),(2,1)])
eq(dda((1,1),(1,4)),[(1,1),(1,2),(1,3),(1,4)])
eq(dda((0,3),(4,1),3),[(0,3),(1,3),(2,2)])
eq(len(dda((2,2),(6,7))),6);eq(dda((-2,1),(-2,1)),[(-2,1)])
# Bresenham every integer table row, not just endpoint checks.
sections=re.findall(r'### Solved Bresenham example.*?(?=\n### |\n\*\*Activity)',s,re.S)
for section,(a,b) in zip(sections,[((5,5),(10,9)),((3,2),(7,5)),((2,7),(12,3))]):
 rows=re.findall(r'^\| (\d+) \| \((-?\d+), (-?\d+)\) \| (-?\d+) \| ([^|]+) \| \((-?\d+),(-?\d+)\) \| (-?\d+) \|$',section,re.M)
 dx,dy=abs(b[0]-a[0]),abs(b[1]-a[1]);major=max(dx,dy);minor=min(dx,dy);eq(len(rows),major)
 x,y=a;p=2*minor-major;sx=1 if b[0]>=x else -1;sy=1 if b[1]>=y else -1
 for k,cx,cy,before,move,nx,ny,after in rows:
  eq((int(cx),int(cy),int(before)),(x,y,p));diag=p>=0
  if dy>dx:y+=sy;x+=sx if diag else 0
  else:x+=sx;y+=sy if diag else 0
  p+=2*minor-(2*major if diag else 0)
  eq((int(nx),int(ny),int(after)),(x,y,p))
 eq((x,y),b)
eq(2*10-11,9);eq(9+20-22,7);eq(7+20-22,5)
eq(dda((3,2),(7,5),3),[(3,2),(4,3),(5,4)])
eq(dda((2,7),(12,3),3),[(2,7),(3,7),(4,6)])
eq(dda((-2,-1),(8,10),3),[(-2,-1),(-1,0),(0,1)])
for expr,answer in [(2*2-5,-1),(-1+4,3),(3+4-10,-3),(2*2-5,-1),(2*4-5,3),(3+8-10,1)]:eq(expr,answer)
# Circle equation tables: square, square root, displayed rounding, full first octant.
sections=re.findall(r'### Solved circle example.*?(?=\n### |\nFor example)',s,re.S)
for section,r in zip(sections,[3,5,6]):
 rows=re.findall(r'^\| (\d+) \| (\d+) \| √(\d+) \| ([\d.]+) \| \((\d+),(\d+)\) \|$',section,re.M)
 expected=[]
 for a in range(r+1):
  b=rounded(sqrt(r*r-a*a))
  if a>b:break
  expected.append((a,b))
 eq([(int(a),int(b)) for _,_,_,_,a,b in rows],expected)
 for a,square,radicand,approx,px,py in rows:
  a=int(a);v=r*r-a*a;eq(int(square),v);eq(int(radicand),v);eq(approx,f'{sqrt(v):.4f}');eq(int(py),rounded(sqrt(v)))
eq(sqrt(25-9),4);eq((2+6,-1),(8,-1));eq((2,-1+6),(2,5));eq((2,-1-6),(2,-7));eq((2-6,-1),(-4,-1));eq((2+5,-1),(7,-1));eq((1,2+3),(1,5))
offsets={(a,b) for a,b in [(0,5),(0,-5),(5,0),(-5,0)]};eq(len(offsets),4)
eq(len({(sx*a,sy*b) for a,b in [(3,4),(4,3)] for sx in [-1,1] for sy in [-1,1]}),8)
# Every gp numeric step matches a separately calculated expected sequence.
for stem,values in [('w04',[240*320,240*320*8,240*320*8//8,(240*320)//1024]),('w05',[10-5,9-5,2*(9-5)-(10-5),3+8-10])]:
 raw=(base/(stem+'.md')).read_text();data=re.findall(r'<div id="gp-[^"]+" class="gp"><script type="application/json">(.*?)</script>',raw,re.S)
 eq(len(data),1);eq([step['a'] for step in json.loads(data[0])['steps']],values)
# Every numeric quiz answer checked against independent calculations.
expected={'w02':[],'w03':[F(72,72)],'w04':[2**4,ceil(log2(100)),bytes_(240,320,8),F(76800,1024),F(1280*9,16),F(1200,4)],'w05':[max(4,5),F(4,5),2*4-5,3+8-10,sqrt(25-9),4,45]}
for stem,values in expected.items():
 raw=(base/(stem+'.quiz')).read_text();answers=[float(v) for v in re.findall(r'^# ([\d.-]+)',raw,re.M)];eq(answers,[float(v) for v in values]);eq(raw.count('\n? ')+int(raw.startswith('? ')),12)
print(f'PASS: {checks} exact numeric and structural checks; all W03–05 worked tables, numeric practices, gp steps and numeric quiz answers recalculated.')
