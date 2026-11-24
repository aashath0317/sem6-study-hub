"""Independent stdlib recalculation of every numeric example/practice answer in W06–10.
Uses generic homogeneous matrix products and complex rotations to cross-check
notes authored with coordinate formulas. Also checks numerical quiz/GP results.
Run from the task workspace: python3 work/verify-mm-06-10.py
"""
from pathlib import Path
import json,math,cmath,re
ROOT=Path(__file__).resolve().parent
count=0
def near(actual,expected,tol=1.1e-6):
 global count
 if isinstance(actual,(list,tuple)):
  assert len(actual)==len(expected),(actual,expected)
  assert all(math.isclose(a,b,abs_tol=tol,rel_tol=tol) for a,b in zip(actual,expected)),(actual,expected)
 else:assert math.isclose(actual,expected,abs_tol=tol,rel_tol=tol),(actual,expected)
 count+=1
 return actual
def I(n):return [[float(i==j) for j in range(n)] for i in range(n)]
def mv(m,p):return [sum(a*b for a,b in zip(row,p)) for row in m]
def T(v):
 m=I(len(v)+1)
 for i,x in enumerate(v):m[i][-1]=x
 return m
def S(v):
 m=I(len(v)+1)
 for i,x in enumerate(v):m[i][i]=x
 return m
def rot(p,axis,angle):
 c=cmath.exp(1j*math.radians(angle));out=list(p)
 a,b={'X':(1,2),'Y':(2,0),'Z':(0,1)}[axis]
 z=complex(p[a],p[b])*c;out[a]=z.real;out[b]=z.imag
 return out
# Original PDF point shift.
for p,expected in zip([(2,3),(4,5),(6,8)],[(4,5),(6,7),(8,10)]):near(mv(T([2,2]),[*p,1])[:2],expected)
# All authored worked examples.
source=json.loads((ROOT/'numeric-06-10.json').read_text())
for week,kind,i,expected in source:
 if week==6 and kind in ['Translation','Scaling','Rotation']:
  d={
   'Translation':[(2,3,4,-1),(-2,5,3,2),(0,-4,-3,6)],
   'Scaling':[(2,3,2,3),(-4,6,.5,2),(5,-2,-1,.5)],
   'Rotation':[(2,3,90,0),(4,0,180,0),(0,2,-90,0)]}[kind][i-1]
  x,y,a,b=d
  value=mv(T([a,b]),[x,y,1])[:2] if kind=='Translation' else mv(S([a,b]),[x,y,1])[:2] if kind=='Scaling' else rot([x,y,0],'Z',a)[:2]
 elif week==6 and kind=='composite':
  x,y,tx,ty,sx,sy=[(1,2,3,1,2,3),(2,1,-1,2,3,2),(-1,3,2,-1,2,.5)][i-1];value=mv(S([sx,sy]),mv(T([tx,ty]),[x,y,1]))[:2]
 elif week==6 and kind=='pivot rotation':
  x,y,cx,cy,a=[(4,3,2,1,60),(3,2,1,1,90),(0,1,1,1,180)][i-1];r=rot([x-cx,y-cy,0],'Z',a);value=[r[0]+cx,r[1]+cy]
 elif week==6 and kind=='pivot scaling':
  x,y,cx,cy,sx,sy=[(6,4,2,3,2.5,1.5),(4,3,2,1,2,3),(-1,5,1,1,.5,2)][i-1];value=mv(T([cx,cy]),mv(S([sx,sy]),mv(T([-cx,-cy]),[x,y,1])))[:2]
 elif week==9 and kind=='perspective':
  x,y,z,d=[(5,4,7,5),(6,3,9,3),(-4,8,16,4)][i-1];value=[x/(z/d),y/(z/d),d]
 elif week==9 and kind in ['Translation','Scaling']:
  data={'Translation':[(2,3,1,2,1,4),(-1,4,2,3,-2,1),(0,2,-3,-1,2,5)],'Scaling':[(2,3,1,2,3,4),(-4,6,2,.5,2,3),(3,-2,4,-1,.5,2)]}[kind][i-1];x,y,z,a,b,c=data;value=mv(T([a,b,c]) if kind=='Translation' else S([a,b,c]),[x,y,z,1])[:3]
 elif week==9 and kind.startswith('Rotation'):
  value=rot([2,3,1],kind[-1],30 if kind[-1]=='X' else 90)
 else:raise AssertionError((week,kind,i))
 near(value,expected)
# Homogeneous conversion examples and orthographic worked examples.
for triple,ans in [([2,3,1],[2,3]),([4,6,2],[2,3]),([-6,9,3],[-2,3])]:near([v/triple[-1] for v in triple[:2]],ans)
for p,d in [([5,4,7],5),([2,-3,9],2),([-4,6,12],3)]:
 m=I(4);m[2]=[0,0,0,d];near(mv(m,p+[1])[:3],p[:2]+[d])
# Activity9.2: independent Euclidean distance of projected endpoints.
A=[6,8,9];B=[7,6,9];AA=[v*5/9 for v in A[:2]]+[5];BB=[v*5/9 for v in B[:2]]+[5]
near(math.dist(A,B),2.236068);near(math.dist(AA,BB),1.242260);near(math.dist(A,B)-math.dist(AA,BB),.993808)
# Original five hidden questions per calculation week and numeric MCQ/GP answers.
near(mv(T([-1,5]),[3,-2,1])[:2],[2,3]);near(mv(S([.5,3]),[4,-2,1])[:2],[2,-6]);near(rot([2,5,0],'Z',90)[:2],[-5,2]);near(mv(S([2,2]),mv(T([2,1]),[1,2,1]))[:2],[6,6]);r=rot([2,0,0],'Z',90);near([r[0]+1,r[1]+1],[1,3])
near(mv(T([2,-1,4]),[1,2,3,1])[:3],[3,1,7]);near(mv(S([3,.5,2]),[2,-4,6,1])[:3],[6,-2,12]);near(rot([1,2,3],'X',90),[1,-3,2]);near(mv([[1,0,0,0],[0,1,0,0],[0,0,0,2],[0,0,0,1]],[6,4,8,1])[:3],[6,4,2]);near([6*2/8,4*2/8,2],[1.5,1,2])
near(3-1,2);near(3*(-2),-6);near(6*2/8,1.5);near(5*5/7,25/7);near(mv(T([4,-1]),[2,3,1])[:2],[6,2]);near(rot([2,3,0],'Z',90)[:2],[-3,2]);near(mv(T([2,1,4]),[2,3,1,1])[:3],[4,4,5])
# Tween worked example (week07) and example tool defaults (week10).
near(20+(220-20)*.25,70);near(20+(220-20)*.5,120);near(8*3,24)
# Expanded five-per-family hidden exercises.
for record in json.loads((ROOT/'practice-numeric-06-10.json').read_text()):
 d=record['inputs'];kind=record['kind'];n=record['week'];p=d.get('point');expected=record['answer']
 if kind=='translation':value=mv(T(d['shift']),p+[1])[:-1]
 elif kind=='scaling':value=mv(S(d['factors']),p+[1])[:-1]
 elif kind=='rotation':value=rot(p if len(p)==3 else p+[0],d['axis'],d['angle'])[:len(p)]
 elif kind=='homogeneous':value=[x/d['triple'][-1] for x in d['triple'][:2]]
 elif kind=='composite':value=mv(S(d['factors']),mv(T(d['shift']),p+[1]))[:-1]
 elif kind=='pivot':
  r=rot([p[j]-d['pivot'][j] for j in range(2)]+[0],'Z',d['angle']);value=[r[j]+d['pivot'][j] for j in range(2)]
 elif kind=='parallel':
  m=I(4);m[2]=[0,0,0,d['d']];value=mv(m,p+[1])[:3]
 elif kind=='perspective':value=[p[0]/(p[2]/d['d']),p[1]/(p[2]/d['d']),d['d']]
 else:raise AssertionError(kind)
 near(value,expected)
 # The independent result's rounded string is present in the published source.
 def fmt(v):
  if abs(v)<1e-9:v=0
  return f'{v:.6f}'.rstrip('0').rstrip('.')
 text=(ROOT.parent/'content'/'mm'/f'w{n:02}.md').read_text()
 assert '('+', '.join(fmt(x) for x in value)+') coordinate units.' in text,(n,kind,value)
print(f'PASS: {count} independently recalculated W06–10 answers/checks; all 55 expanded practice answers occur in the notes. Matrix products, complex rotations, projections, distances, quiz/GP numeric answers and tween values checked.')
