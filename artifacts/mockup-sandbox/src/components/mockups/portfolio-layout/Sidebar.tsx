export function Sidebar() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 font-['Outfit',sans-serif] flex">

      {/* LEFT — Sticky sidebar */}
      <aside className="w-72 shrink-0 border-r border-zinc-800 flex flex-col justify-between p-10 sticky top-0 h-screen">
        <div>
          <span className="font-mono font-bold text-xl tracking-tighter text-zinc-100 block mb-2">YB</span>
          <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest block mb-12">01 / available</span>

          <h1 className="font-['Playfair_Display',serif] text-4xl font-light leading-tight text-zinc-100 mb-3">
            Yashwanth<br /><span className="italic opacity-60">Booram</span>
          </h1>
          <p className="text-xs text-zinc-500 tracking-wider uppercase leading-relaxed mb-10">
            Machine Learning<br />Full-Stack Engineering
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
              B.Tech CSE student at Lovely Professional University, specialising in Machine Learning. My engineering is grounded in the belief that great AI isn't just accurate models — it's about deploying them into systems real people can use.
            </p>
            <p className="text-sm text-zinc-500 leading-relaxed">
              I've built deep learning models for satellite imagery and full-stack LLM-powered platforms. I thrive where data science meets product development.
            </p>
            <div className="mt-8 font-mono text-xs text-zinc-700 space-y-1.5 border-l border-zinc-800 pl-4">
              <p>location = <span className="text-zinc-500">"India"</span></p>
              <p>education = <span className="text-zinc-500">"B.Tech CSE"</span></p>
              <p>focus = [<span className="text-zinc-500">"ML"</span>, <span className="text-zinc-500">"Full-Stack"</span>]</p>
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
                <span className="text-xs font-mono text-zinc-600 border border-zinc-800 px-2 py-1 rounded">2024–2025</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-zinc-100 mb-1">Generative AI Trainer</h3>
                <p className="text-sm text-zinc-600 mb-4">Outlier · Freelance</p>
                <ul className="space-y-2 text-sm text-zinc-500">
                  <li className="flex gap-2"><span className="text-zinc-700 shrink-0">—</span> Evaluated and optimised LLM outputs for sensitive content detection across multiple programming languages.</li>
                  <li className="flex gap-2"><span className="text-zinc-700 shrink-0">—</span> Prompt engineering in Python, Java, C++, and JavaScript.</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {["LLMs","Prompt Engineering","Python"].map(t => (
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
                { label: "Full-Stack", title: "Movify", desc: "AI-Powered Movie Platform. Scalable RESTful API with LLM-driven recommendation engine and automatic review summarisation.", stack: ["React","Node.js","Express","MongoDB","LLM APIs"] },
                { label: "Deep Learning", title: "Ship Detection in Satellite Imagery", desc: "YOLOv3 CNN for high-accuracy ship localisation in maritime satellite imagery. ~95% training accuracy, ~92% validation accuracy.", stack: ["YOLOv3","OpenCV","CNN","Python"] },
                { label: "Data Analytics", title: "Customer Behaviour Analytics", desc: "RFM analysis and K-Means clustering to segment retail customers. Elbow method for optimal K, actionable marketing insights.", stack: ["K-Means","RFM Analysis","Pandas"] },
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
                  {["Python","Java","JavaScript","SQL"].map(s => <p key={s}>{s}</p>)}
                </div>
              </div>
              <div>
                <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-3">ML / AI</p>
                <div className="space-y-2 text-zinc-500">
                  {["PyTorch","TensorFlow","Scikit-Learn","Keras"].map(s => <p key={s}>{s}</p>)}
                </div>
              </div>
              <div>
                <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-3">Stack</p>
                <div className="space-y-2 text-zinc-500">
                  {["React","Node.js","MongoDB","AWS"].map(s => <p key={s}>{s}</p>)}
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
                  <p className="text-xs text-zinc-600">Lovely Professional University · Specialisation: ML</p>
                </div>
              </div>
              <div className="flex gap-8">
                <span className="text-xs font-mono text-zinc-600 border border-zinc-800 px-2 py-1 rounded h-fit shrink-0 opacity-0">2022</span>
                <div>
                  <h3 className="text-sm font-bold text-zinc-100 mb-0.5">Deep Learning A-Z — Udemy</h3>
                </div>
              </div>
              <div className="flex gap-8">
                <span className="text-xs font-mono text-zinc-600 border border-zinc-800 px-2 py-1 rounded h-fit shrink-0 opacity-0">2022</span>
                <div>
                  <h3 className="text-sm font-bold text-zinc-100 mb-0.5">Machine Learning Specialisation — Coursera</h3>
                  <p className="text-xs text-zinc-600">Stanford / DeepLearning.AI</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
