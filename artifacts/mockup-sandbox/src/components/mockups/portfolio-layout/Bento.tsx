export function Bento() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 font-['Outfit',sans-serif] p-8">

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
            <h1 className="font-['Playfair_Display',serif] text-6xl font-light leading-tight text-zinc-100">
              Yashwanth<br /><span className="italic opacity-70 pl-8">Booram</span>
            </h1>
          </div>
        </div>
        {/* Status card */}
        <div className="col-span-4 bg-zinc-900 border border-zinc-800 rounded-2xl p-8 flex flex-col justify-between min-h-[220px]">
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Role</span>
          <div>
            <p className="text-sm text-zinc-400 leading-relaxed mb-4">Machine Learning &<br />Full-Stack Engineering.</p>
            <p className="text-xs font-mono text-zinc-600">B.Tech CSE · LPU · India</p>
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
          <span className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-4 block">Full-Stack · Featured</span>
          <h2 className="text-2xl font-bold text-zinc-100 mb-3">Movify</h2>
          <p className="text-sm text-zinc-500 leading-relaxed mb-6">AI-Powered Movie Platform. RESTful API, LLM-driven recommendation engine, and automatic review summarisation.</p>
          <div className="flex flex-wrap gap-2">
            {["React","Node.js","MongoDB","LLM APIs"].map(t => (
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
            <span className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-2 block">Data Analytics</span>
            <h3 className="text-base font-bold text-zinc-100 mb-2">Customer Behaviour</h3>
            <p className="text-xs text-zinc-500 leading-relaxed">K-Means · RFM Analysis · Marketing ROI</p>
          </div>
        </div>
      </div>

      {/* Third row — skills + experience */}
      <div className="grid grid-cols-12 gap-4 mb-4">
        {/* Skills tag cloud */}
        <div className="col-span-5 bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <span className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-6 block">04 / Skills</span>
          <div className="flex flex-wrap gap-2">
            {["Python","PyTorch","TensorFlow","Scikit-Learn","Keras","React","Node.js","MongoDB","MySQL","AWS","Power BI","YOLOv3","LLMs"].map(s => (
              <span key={s} className="text-xs font-mono text-zinc-400 border border-zinc-700 px-3 py-1 rounded-full">{s}</span>
            ))}
          </div>
        </div>
        {/* Experience */}
        <div className="col-span-7 bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <span className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-6 block">02 / Experience</span>
          <div className="flex gap-6">
            <div className="shrink-0">
              <span className="text-xs font-mono text-zinc-500 border border-zinc-700 px-2 py-1 rounded">2024–2025</span>
            </div>
            <div>
              <h3 className="text-base font-bold text-zinc-100 mb-1">Generative AI Trainer</h3>
              <p className="text-xs text-zinc-500 mb-3">Outlier · Freelance</p>
              <p className="text-sm text-zinc-500 leading-relaxed">Evaluated and optimised LLM outputs for sensitive content detection. Python, Java, C++, and JavaScript prompt engineering.</p>
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
            <p className="text-xs text-zinc-500">Lovely Professional University · 2022–2026</p>
          </div>
          <div>
            <h3 className="text-base font-bold text-zinc-100 mb-1">Deep Learning A-Z</h3>
            <p className="text-xs text-zinc-500">Udemy Certification</p>
          </div>
          <div>
            <h3 className="text-base font-bold text-zinc-100 mb-1">Machine Learning</h3>
            <p className="text-xs text-zinc-500">Coursera · Stanford / DeepLearning.AI</p>
          </div>
        </div>
      </div>

    </div>
  );
}
