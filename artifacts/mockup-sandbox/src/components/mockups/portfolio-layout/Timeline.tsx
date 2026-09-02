export function Timeline() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

      {/* Nav */}
      <nav className="flex justify-between items-center px-12 py-6 border-b border-zinc-800/60">
        <span className="font-mono font-bold text-lg tracking-tighter text-zinc-100">YB</span>
        <div className="flex gap-8 text-xs font-mono text-zinc-500 uppercase tracking-widest">
          <span>/ about</span><span>/ work</span><span>/ projects</span>
        </div>
      </nav>

      {/* Hero — left-aligned editorial */}
      <div className="px-12 pt-20 pb-16 border-b border-zinc-800/60">
        <div className="max-w-3xl">
           <span className="text-xs font-mono text-zinc-600 tracking-widest uppercase block mb-8">AI Application Security Engineer · ML Engineer</span>
          <h1 className="text-8xl font-light leading-[1.05] text-zinc-100 mb-12" style={{ fontFamily: "'Fraunces', serif", fontVariationSettings: "'opsz' 72" }}>
            Yashwanth<br />
            <span className="italic opacity-60 pl-20">Booram</span>
          </h1>
          <p className="text-sm text-zinc-500 tracking-[0.15em] uppercase max-w-sm leading-relaxed">
             Building intelligent systems where machine learning, application security, and backend engineering meet.
          </p>
        </div>
      </div>

      {/* Timeline body */}
      <div className="relative px-12 py-16">
        {/* Center spine */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-zinc-800 -translate-x-px" />

        {/* About — right side */}
        <div className="grid grid-cols-2 gap-16 mb-20 items-start">
          <div className="text-right">
            <span className="text-xs font-mono text-zinc-600 uppercase tracking-widest">01</span>
          </div>
          <div className="pl-8 relative">
            <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-zinc-900 border-2 border-zinc-500" />
            <h2 className="text-xl font-bold text-zinc-100 mb-4">About Me</h2>
             <p className="text-sm text-zinc-500 leading-relaxed">Computer Science & Engineering graduate from LPU focused on Machine Learning and AI application security. I build systems from reinforcement-learning traffic control to secure LLM-powered platforms.</p>
            <div className="mt-4 font-mono text-xs text-zinc-700 space-y-1">
               <p>location = <span className="text-zinc-500">"Hyderabad, Telangana"</span></p>
              <p>status = <span className="text-zinc-500">"Open to roles"</span></p>
            </div>
          </div>
        </div>

        {/* Experience — left side */}
        <div className="grid grid-cols-2 gap-16 mb-20 items-start">
          <div className="text-right pr-8 relative">
            <div className="absolute right-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-zinc-900 border-2 border-zinc-500" />
             <span className="text-xs font-mono text-zinc-600 uppercase tracking-widest block mb-4">02 / May–Aug 2026</span>
             <h2 className="text-xl font-bold text-zinc-100 mb-1">AI Application Security Engineer</h2>
             <p className="text-sm text-zinc-600 mb-3">Accenture · Trainee</p>
             <p className="text-sm text-zinc-500 leading-relaxed">Secured a Qwen2 GenAI application with a Python defense gateway, DevSecOps security gates, and adversarial red teaming.</p>
          </div>
          <div />
        </div>

        {/* Projects — alternating */}
        <div className="grid grid-cols-2 gap-16 mb-16 items-start">
          <div />
          <div className="pl-8 relative">
            <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-zinc-900 border-2 border-zinc-400" />
            <span className="text-xs font-mono text-zinc-600 uppercase tracking-widest block mb-4">03 / Projects</span>
            <div className="space-y-6">
               <div className="border-l border-zinc-800 pl-4">
                 <h3 className="text-base font-bold text-zinc-100">Smart Traffic Signals</h3>
                 <p className="text-xs text-zinc-600 mb-1">Reinforcement Learning · 35% less wait time</p>
                 <p className="text-xs text-zinc-500">PyTorch · YOLOv8n · FastAPI · Docker</p>
               </div>
               <div className="border-l border-zinc-800 pl-4">
                <h3 className="text-base font-bold text-zinc-100">Movify</h3>
                 <p className="text-xs text-zinc-600 mb-1">Full-Stack · AI-Powered Movie Platform</p>
                 <p className="text-xs text-zinc-500">Node.js · Express.js · React.js · LLM APIs</p>
              </div>
              <div className="border-l border-zinc-800 pl-4">
                <h3 className="text-base font-bold text-zinc-100">Ship Detection</h3>
                <p className="text-xs text-zinc-600 mb-1">Deep Learning · YOLOv3 · ~95% accuracy</p>
                <p className="text-xs text-zinc-500">OpenCV · CNN · Python</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills — left side */}
        <div className="grid grid-cols-2 gap-16 mb-16 items-start">
          <div className="text-right pr-8 relative">
            <div className="absolute right-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-zinc-900 border-2 border-zinc-500" />
            <span className="text-xs font-mono text-zinc-600 uppercase tracking-widest block mb-4">04 / Skills</span>
            <div className="flex flex-wrap gap-2 justify-end">
               {["Python","PyTorch","YOLO","OpenCV","FastAPI","PostgreSQL","AWS","Docker","Burp Suite","AI Red Teaming"].map(s => (
                <span key={s} className="text-[10px] font-mono text-zinc-500 border border-zinc-800 px-2 py-0.5 rounded">{s}</span>
              ))}
            </div>
          </div>
          <div />
        </div>

        {/* Education — right side */}
        <div className="grid grid-cols-2 gap-16 items-start">
          <div />
          <div className="pl-8 relative">
            <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-zinc-900 border-2 border-zinc-500" />
            <span className="text-xs font-mono text-zinc-600 uppercase tracking-widest block mb-4">05 / Education</span>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-bold text-zinc-100">B.Tech CSE · LPU</h3>
                 <p className="text-xs text-zinc-600">2022 – 2026 · CGPA 7.23</p>
              </div>
              <div>
                 <h3 className="text-sm font-bold text-zinc-100">AI Security & DevSecOps · Accenture</h3>
              </div>
              <div>
                 <h3 className="text-sm font-bold text-zinc-100">Machine Learning · Stanford / DeepLearning.AI</h3>
                 <p className="text-xs text-zinc-600">Jul 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
