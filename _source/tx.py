import os,sys,time,json
# CUDA DLLs from the nvidia-cublas-cu12 / nvidia-cudnn-cu12 pip packages
try:
    import nvidia.cublas,nvidia.cudnn
    for m in (nvidia.cublas,nvidia.cudnn):
        b=os.path.join(m.__path__[0],'bin'); os.add_dll_directory(b); os.environ['PATH']=b+os.pathsep+os.environ['PATH']
except ImportError: pass
from faster_whisper import WhisperModel
root="D:/Study/SEM 6"; out=sys.argv[1]; dev=sys.argv[2]; only=sys.argv[3] if len(sys.argv)>3 else None
os.makedirs(out,exist_ok=True)
m=WhisperModel("small",device=dev,compute_type="int8_float16" if dev=="cuda" else "int8")
vids=[]
for r,ds,fs in os.walk(root):
    if 'Level 3' in r or os.sep+'Print' in r or '/Print' in r: continue
    for f in fs:
        if f.lower().endswith(('.mp4','.mkv')): vids.append(os.path.join(r,f))
vids.sort(key=lambda p: os.path.getsize(p))
for p in vids:
    if only and only not in p: continue
    rel=os.path.relpath(p,root).replace(os.sep,'__')
    o=os.path.join(out,rel+'.txt')
    if os.path.exists(o): continue
    t=time.time()
    try:
        segs,info=m.transcribe(p,language="en",vad_filter=True,beam_size=1)
        lines=[f"[{int(s.start//60):02d}:{int(s.start%60):02d}] {s.text.strip()}" for s in segs]
    except Exception as e:
        print("FAIL",p,e,flush=True); continue
    open(o+'.tmp','w',encoding='utf-8').write("\n".join(lines)); os.replace(o+'.tmp',o)
    print(f"done {time.time()-t:6.0f}s dur={info.duration/60:.1f}m {rel}",flush=True)
