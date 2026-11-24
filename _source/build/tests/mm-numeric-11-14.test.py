"""Independently recalculate every W11/W13 worked, practice, gp and numeric quiz answer.
Run from the task workspace: python3 work/verify-mm-11-14.py
No tests or published answer keys are changed by this audit.
"""
from pathlib import Path
from math import isclose
checks=[]
def eq(label,actual,expected):
    assert isclose(actual,expected,rel_tol=1e-12,abs_tol=1e-9),(label,actual,expected)
    checks.append(label)
def video(w,h,r,b,t):return w*h*r*b/8*t
def audio(c,s,b,t):return c*s*b/8*t
# W11 raw sizes and exact source correction.
eq('W11 source active lines',525-2*20,485)
eq('W11 source pixels',320*240,76800)
eq('W11 source video bytes',video(320,240,30,8,60),138240000)
eq('W11 source video MB',video(320,240,30,8,60)/1e6,138.24)
eq('W11 source audio bytes',audio(1,44100,8,60),2646000)
eq('W11 source audio MB',audio(1,44100,8,60)/1e6,2.646)
eq('W11 source exact total bytes',video(320,240,30,8,60)+audio(1,44100,8,60),140886000)
eq('W11 source exact total MB',(138240000+2646000)/1e6,140.886)
eq('W11 rounded total',round((138240000+2646000)/1e6,2),140.89)
eq('W11 source early-rounded total',138.24+2.6,140.84)
eq('W11 worked size B bytes',video(640,480,25,24,10),230400000)
eq('W11 worked size B MB',video(640,480,25,24,10)/1e6,230.4)
eq('W11 worked C video',video(1280,720,25,24,4),276480000)
eq('W11 worked C audio',audio(2,48000,16,4),768000)
eq('W11 worked C total',video(1280,720,25,24,4)+audio(2,48000,16,4),277248000)
eq('W11 worked C MB',277248000/1e6,277.248)
for label,args,expected in [('A',(320,240,12,8),7372800),('B',(640,480,25,24),184320000)]:
    w,h,r,b=args;eq('W11 bitrate '+label,w*h*r*b,expected);eq('W11 Mb/s '+label,w*h*r*b/1e6,expected/1e6)
eq('W11 average bitrate C',15000000*8/30,4000000)
for label,x,y,z in [('ratio A',120,12,10),('ratio B',300,25,12),('ratio C',120,8,15)]:eq('W11 '+label,x/y,z)
eq('W11 saved MB',120-12,108);eq('W11 saved percent',(120-12)/120*100,90);eq('W11 C raw',8*15,120)
for i,(args,e) in enumerate([((320,240,10,8,5),3840000),((640,480,20,24,2),36864000),((100,100,25,16,4),2000000),((1280,720,30,24,1),82944000)]):
 eq('W11 size practice '+str(i),video(*args),e);eq('W11 practice MB '+str(i),video(*args)/1e6,e/1e6)
eq('W11 size practice E audio',audio(1,48000,16,2),192000);eq('W11 size practice E total',2000000+audio(1,48000,16,2),2192000);eq('W11 size practice E MB',2192000/1e6,2.192)
for i,(a,e) in enumerate([(100*100*10*8,800000),(320*240*25*8,15360000),(640*480*30*24,221184000),(20000000*8/10,16000000),(6000000*8/12,4000000)]):eq('W11 bitrate practice '+str(i),a,e)
for i,(a,e) in enumerate([(50/5,10),(240/12,20),(90/15,6),(6*8,48),((80-20)/80*100,75)]):eq('W11 compression practice '+str(i),a,e)
eq('W11 gp pixels',320*240,76800);eq('W11 gp bit rate',320*240*12*8,7372800);eq('W11 gp ten seconds',7372800/8*10,9216000)
for b,e in [(1,2),(8,256),(16,65536),(24,16777216)]:eq('W11 colours '+str(b),2**b,e)
# W13 sampling/Nyquist examples, bit depth, capacities and all practice sets.
eq('W13 dynamic range',130-30,100)
for i,(a,e) in enumerate([(2*8,16),(44.1/2,22.05),(2*20,40),(8000*3,24000),(44100*60,2646000),(48000*2,96000),(1/48000*1e6,20.833333333333332)]):eq('W13 sampling worked '+str(i),a,e)
assert 22.05>2*8 and 48>2*20 and not 32>2*20
for b,e in [(8,256),(16,65536),(24,16777216)]:eq('W13 levels '+str(b),2**b,e);eq('W13 bytes/sample '+str(b),b/8,{8:1,16:2,24:3}[b])
for label,args,e in [('PDF',(2,44100,16,60),10584000),('Activity13.1',(1,44100,16,120),10584000),('C',(2,48000,24,10),2880000)]:eq('W13 size '+label,audio(*args),e);eq('W13 MB '+label,audio(*args)/1e6,e/1e6)
eq('W13 rounded PDF MB',round(10584000/1e6,1),10.6)
eq('W13 mono bitrate',1*8000*8,64000);eq('W13 mono kbps',64000/1000,64);eq('W13 stereo bitrate',2*44100*16,1411200);eq('W13 stereo Mbps',1411200/1e6,1.4112)
eq('W13 mono size',audio(1,48000,16,5),480000);eq('W13 stereo size',audio(2,48000,16,5),960000);eq('W13 channel ratio',960000/480000,2)
for i,(args,e) in enumerate([((1,8000,8,10),80000),((1,16000,16,5),160000),((2,44100,16,2),352800),((1,48000,24,3),432000),((2,48000,16,60),11520000)]):eq('W13 capacity practice '+str(i),audio(*args),e)
for i,(s,t,e) in enumerate([(8000,2,16000),(16000,3,48000),(44100,5,220500),(48000,10,480000)]):eq('W13 sample count practice '+str(i),s*t,e)
eq('W13 interval s',1/10000,.0001);eq('W13 interval microseconds',1/10000*1e6,100)
for s,e in [(8000,4000),(16000,8000),(48000,24000)]:eq('W13 boundary '+str(s),s/2,e)
eq('W13 minimum boundary for 6000',2*6000,12000);eq('W13 required boundary for 12000',2*12000,24000);assert 22050<2*12000
for b,e in [(4,16),(8,256),(16,65536)]:eq('W13 practice levels '+str(b),2**b,e)
eq('W13 practice bytes/sample',24/8,3);eq('W13 depth ratio',16/8,2)
for label,a,e in [('mono channels',1,1),('stereo channels',2,2),('ratio',2/1,2),('stereo size',3*2,6),('mono size',8/2,4)]:eq('W13 channels practice '+label,a,e)
eq('W13 gp seconds',2*60,120);eq('W13 gp bytes',16/8,2);eq('W13 gp capacity',audio(1,44100,16,120),10584000)
# Numeric quiz keys independently checked in order; theory quizzes contain no numeric answer keys.
expected={11:[2,25,65536,7372800,10],13:[256,2,24000,10584000]}
import re
for n,answers in expected.items():
 actual=[float(v) for v in re.findall(r'^# (\S+)',(Path(__file__).resolve().parents[1]/'content'/'mm'/f'w{n}.quiz').read_text(),re.M)]
 assert actual==answers,(n,actual,answers)
 checks.append(f'W{n} all numeric quiz keys')
for n in [12,14]:assert not re.search(r'^# ',(Path(__file__).resolve().parents[1]/'content'/'mm'/f'w{n}.quiz').read_text(),re.M)
# W12 duration tool default: one overlapping opening/main pair.
eq('W12 duration default',5+40+5-2,48)
print(f'PASS: {len(checks)} independent numeric checks; all W11/W13 worked examples, practice sets, gp steps and numeric quiz keys; W12 duration.')
