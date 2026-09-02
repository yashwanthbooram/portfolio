export function Bento() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 p-8" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

      {/* Nav */}
      <nav className="flex justify-between items-center mb-12 pb-6 border-b border-zinc-800">
        <span className="font-mono font-bold text-lg tracking-tighter text-zinc-100">YB</span>
        <div className="flex gap-6 text-xs font-mono text-zinc-500 uppercase tracking-widest">
          <span>/ about</span><span>/ work</span><span>/ projects</span><span>/ skills</span>
        </div>
      </nav>

      {/* Hero row */}
      <div className="grid grid-cols-12 gap-4 mb-4">
        {/* Name — wide */}
        <div className="col-span-8 bg-zinc-900 border border-zinc-800 rounded-2xl p-10 flex flex-col justify-between min-h-[220px]">
          <span className="text-xs font-mono text-zinc-600 tracking-widest uppercase">01 / available for work</span>
          <div>
            <h1 className="text-6xl font-light leading-tight text-zinc-100" style={{ fontFamily: "'Fraunces', serif", fontVariationSettings: "'opsz' 60" }}>
              Yashwanth<br /><span className="italic opacity-70 pl-8">Booram</span>
            </h1>
          </div>
        </div>
        {/* Status card */}
        <div className="col-span-4 bg-zinc-900 border border-zinc-800 rounded-2xl p-8 flex flex-col justify-between min-h-[220px]">
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Role</span>
          <div>
            <p className="text-sm text-zinc-400 leading-relaxed mb-4">AI Application Security<br />& Machine Learning.</p>
            <p className="text-xs font-mono text-zinc-600">B.Tech CSE · LPU · 7.23</p>
          </div>
          <div className="flex gap-3 text-zinc-600">
            <span className="text-xs font-mono hover:text-zinc-200 cursor-pointer transition-colors">GitHub</span>
            <span className="text-xs font-mono">·</span>
            <span className="text-xs font-mono hover:text-zinc-200 cursor-pointer transition-colors">LinkedIn</span>
          </div>
        </div>
      </div>

      {/* Second row — projects bento */}
      <div className="grid grid-cols-12 gap-4 mb-4">
        {/* Big project */}
        <div className="col-span-7 bg-zinc-900 border border-zinc-800 rounded-2xl p-8 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent" />
          <span className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-4 block">Computer Vision · Featured</span>
          <h2 className="text-2xl font-bold text-zinc-100 mb-3">Smart Traffic Signals</h2>
          <p className="text-sm text-zinc-500 leading-relaxed mb-6">DQN reinforcement learning and YOLOv8n computer vision for adaptive traffic control. 35% less wait time, 22% higher throughput.</p>
          <div className="flex flex-wrap gap-2">
            {["PyTorch","DQN","YOLOv8n","FastAPI","Docker"].map(t => (
              <span key={t} className="text-[10px] font-mono text-zinc-500 border border-zinc-700 px-2 py-0.5 rounded">{t}</span>
            ))}
          </div>
        </div>
        {/* Two small projects stacked */}
        <div className="col-span-5 flex flex-col gap-4">
          <div className="flex-1 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <span className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-2 block">Deep Learning</span>
            <h3 className="text-base font-bold text-zinc-100 mb-2">Ship Detection</h3>
            <p className="text-xs text-zinc-500 leading-relaxed">YOLOv3 CNN · ~95% train acc · Satellite imagery</p>
          </div>
          <div className="flex-1 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <span className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-2 block">Full-Stack · AI</span>
            <h3 className="text-base font-bold text-zinc-100 mb-2">Movify</h3>
            <p className="text-xs text-zinc-500 leading-relaxed">Node.js · Express.js · LLM recommendations · Review summaries</p>
          </div>
        </div>
      </div>

      {/* Third row — skills + experience */}
      <div className="grid grid-cols-12 gap-4 mb-4">
        {/* Skills tag cloud */}
        <div className="col-span-5 bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <span className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-6 block">04 / Skills</span>
          <div className="flex flex-wrap gap-2">
            {["Python","PyTorch","YOLO","TensorFlow","OpenCV","FastAPI","PostgreSQL","AWS","Docker","Burp Suite","AI Red Teaming"].map(s => (
              <span key={s} className="text-xs font-mono text-zinc-400 border border-zinc-700 px-3 py-1 rounded-full">{s}</span>
            ))}
          </div>
        </div>
        {/* Experience */}
        <div className="col-span-7 bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <span className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-6 block">02 / Experience</span>
          <div className="flex gap-6">
            <div className="shrink-0">
              <span className="text-xs font-mono text-zinc-500 border border-zinc-700 px-2 py-1 rounded">May–Aug 2026</span>
            </div>
            <div>
              <h3 className="text-base font-bold text-zinc-100 mb-1">AI Application Security Engineer</h3>
              <p className="text-xs text-zinc-500 mb-3">Accenture · Trainee</p>
              <p className="text-sm text-zinc-500 leading-relaxed">Secured a Qwen2 enterprise GenAI application with a Python defense gateway, DevSecOps gates, and adversarial AI red teaming.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Fourth row — education wide */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
        <span className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-6 block">05 / Education</span>
        <div className="grid grid-cols-3 gap-8">
          <div>
            <h3 className="text-base font-bold text-zinc-100 mb-1">B.Tech CSE</h3>
            <p className="text-xs text-zinc-500">Lovely Professional University · 2022–2026 · CGPA 7.23</p>
          </div>
          <div>
            <h3 className="text-base font-bold text-zinc-100 mb-1">AI Security & DevSecOps</h3>
            <p className="text-xs text-zinc-500">Accenture · 360-hour training</p>
          </div>
          <div>
            <h3 className="text-base font-bold text-zinc-100 mb-1">Enterprise Technical Foundations</h3>
            <p className="text-xs text-zinc-500">Accenture / Tekstac</p>
          </div>
        </div>
      </div>

    </div>
  );
}
