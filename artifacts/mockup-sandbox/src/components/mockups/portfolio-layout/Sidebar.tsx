export function Sidebar() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 flex" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

      {/* LEFT — Sticky sidebar */}
      <aside className="w-72 shrink-0 border-r border-zinc-800 flex flex-col justify-between p-10 sticky top-0 h-screen">
        <div>
          <span className="font-mono font-bold text-xl tracking-tighter text-zinc-100 block mb-2">YB</span>
          <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest block mb-12">01 / available</span>

          <h1 className="text-4xl font-light leading-tight text-zinc-100 mb-3" style={{ fontFamily: "'Fraunces', serif", fontVariationSettings: "'opsz' 40" }}>
            Yashwanth<br /><span className="italic opacity-60">Booram</span>
          </h1>
          <p className="text-xs text-zinc-500 tracking-wider uppercase leading-relaxed mb-10">
             AI Application Security<br />Machine Learning
          </p>

          <nav className="space-y-1">
            {[
              ["01", "About"],
              ["02", "Experience"],
              ["03", "Projects"],
              ["04", "Skills"],
              ["05", "Education"],
            ].map(([num, label]) => (
              <div key={num} className="flex items-center gap-3 py-2 text-zinc-600 hover:text-zinc-200 cursor-pointer transition-colors group">
                <span className="text-[10px] font-mono text-zinc-700 group-hover:text-zinc-500 w-6">{num}</span>
                <span className="text-xs font-mono uppercase tracking-widest">{label.toLowerCase()}</span>
              </div>
            ))}
          </nav>
        </div>

        <div className="space-y-3">
          <a href="#" className="flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest hover:text-zinc-200 transition-colors">
            <span className="w-3 h-px bg-zinc-700" /> GitHub
          </a>
          <a href="#" className="flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest hover:text-zinc-200 transition-colors">
            <span className="w-3 h-px bg-zinc-700" /> LinkedIn
          </a>
          <a href="#" className="flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest hover:text-zinc-200 transition-colors">
            <span className="w-3 h-px bg-zinc-700" /> Email
          </a>
        </div>
      </aside>

      {/* RIGHT — Scrollable content */}
      <main className="flex-1 overflow-y-auto">

        {/* About */}
        <section className="px-12 py-16 border-b border-zinc-800/60">
          <div className="max-w-2xl">
            <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest block mb-6">01 / About</span>
            <p className="text-base text-zinc-400 leading-relaxed mb-4">
               Computer Science & Engineering graduate from Lovely Professional University, focused on Machine Learning and AI application security. I build intelligent systems with the guardrails and deployment workflows needed to make them dependable.
            </p>
            <p className="text-sm text-zinc-500 leading-relaxed">
               I've worked across reinforcement-learning traffic control, computer vision, LLM-powered products, and adversarial AI red teaming. I thrive where model behavior meets secure, production-ready engineering.
            </p>
            <div className="mt-8 font-mono text-xs text-zinc-700 space-y-1.5 border-l border-zinc-800 pl-4">
               <p>location = <span className="text-zinc-500">"Hyderabad, Telangana"</span></p>
               <p>education = <span className="text-zinc-500">"B.Tech CSE · 7.23"</span></p>
               <p>focus = [<span className="text-zinc-500">"AI Security"</span>, <span className="text-zinc-500">"ML"</span>]</p>
              <p>status = <span className="text-zinc-500">"Open to roles"</span></p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="px-12 py-16 border-b border-zinc-800/60">
          <div className="max-w-2xl">
            <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest block mb-8">02 / Experience</span>
            <div className="flex gap-8">
              <div className="shrink-0 pt-0.5">
                 <span className="text-xs font-mono text-zinc-600 border border-zinc-800 px-2 py-1 rounded">May–Aug 2026</span>
              </div>
              <div>
                 <h3 className="text-lg font-bold text-zinc-100 mb-1">AI Application Security Engineer</h3>
                 <p className="text-sm text-zinc-600 mb-4">Accenture · Trainee</p>
                <ul className="space-y-2 text-sm text-zinc-500">
                   <li className="flex gap-2"><span className="text-zinc-700 shrink-0">—</span> Built a Python defense gateway for a Qwen2 enterprise GenAI application to mitigate prompt injection and credential leakage.</li>
                   <li className="flex gap-2"><span className="text-zinc-700 shrink-0">—</span> Added GitHub Actions, Bandit, Gitleaks, Burp Suite, and OWASP ZAP to security and red-team workflows.</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                   {["Qwen2","AI Red Teaming","GitHub Actions","Burp Suite"].map(t => (
                    <span key={t} className="text-[10px] font-mono text-zinc-600 border border-zinc-800 px-2 py-0.5 rounded">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="px-12 py-16 border-b border-zinc-800/60">
          <div className="max-w-2xl">
            <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest block mb-8">03 / Projects</span>
            <div className="space-y-8">
              {[
                 { label: "Reinforcement Learning", title: "Smart Adaptive Traffic Signals", desc: "PyTorch DQN agent with YOLOv8n and OpenCV vision pipeline. Reduced average wait time by 35% and increased throughput by 22%.", stack: ["PyTorch","YOLOv8n","FastAPI","Docker"] },
                 { label: "Full-Stack · AI", title: "Movify", desc: "AI-powered movie platform with a scalable Node.js and Express.js REST API, personalised recommendations, and automatic review summarisation.", stack: ["Node.js","Express.js","React.js","LLM APIs"] },
                { label: "Deep Learning", title: "Ship Detection in Satellite Imagery", desc: "YOLOv3 CNN for high-accuracy ship localisation in maritime satellite imagery. ~95% training accuracy, ~92% validation accuracy.", stack: ["YOLOv3","OpenCV","CNN","Python"] },
              ].map(p => (
                <div key={p.title} className="border-l border-zinc-800 pl-6 hover:border-zinc-600 transition-colors">
                  <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest block mb-1">{p.label}</span>
                  <h3 className="text-base font-bold text-zinc-100 mb-2">{p.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-3">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map(t => <span key={t} className="text-[10px] font-mono text-zinc-600 border border-zinc-800 px-2 py-0.5 rounded">{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="px-12 py-16 border-b border-zinc-800/60">
          <div className="max-w-2xl">
            <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest block mb-8">04 / Skills</span>
            <div className="grid grid-cols-3 gap-8 text-sm">
              <div>
                <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-3">Languages</p>
                <div className="space-y-2 text-zinc-500">
                   {["Python","SQL","Java"].map(s => <p key={s}>{s}</p>)}
                </div>
              </div>
              <div>
                 <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-3">Security & AI</p>
                <div className="space-y-2 text-zinc-500">
                   {["PyTorch","YOLO","TensorFlow","AI Red Teaming"].map(s => <p key={s}>{s}</p>)}
                </div>
              </div>
              <div>
                 <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-3">Backend & Cloud</p>
                <div className="space-y-2 text-zinc-500">
                   {["Node.js","FastAPI","PostgreSQL","Docker"].map(s => <p key={s}>{s}</p>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="px-12 py-16">
          <div className="max-w-2xl">
            <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest block mb-8">05 / Education</span>
            <div className="space-y-6">
              <div className="flex gap-8">
                 <span className="text-xs font-mono text-zinc-600 border border-zinc-800 px-2 py-1 rounded h-fit shrink-0">2022–2026</span>
                <div>
                  <h3 className="text-sm font-bold text-zinc-100 mb-0.5">B.Tech Computer Science</h3>
                   <p className="text-xs text-zinc-600">Lovely Professional University · CGPA 7.23</p>
                </div>
              </div>
              <div className="flex gap-8">
                <span className="text-xs font-mono text-zinc-600 border border-zinc-800 px-2 py-1 rounded h-fit shrink-0 opacity-0">2022</span>
                <div>
                   <h3 className="text-sm font-bold text-zinc-100 mb-0.5">AI Application Security & DevSecOps</h3>
                   <p className="text-xs text-zinc-600">Accenture · August 2026</p>
                </div>
              </div>
              <div className="flex gap-8">
                <span className="text-xs font-mono text-zinc-600 border border-zinc-800 px-2 py-1 rounded h-fit shrink-0 opacity-0">2022</span>
                <div>
                   <h3 className="text-sm font-bold text-zinc-100 mb-0.5">Enterprise Technical Foundations</h3>
                   <p className="text-xs text-zinc-600">Accenture / Tekstac · July 2026</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
