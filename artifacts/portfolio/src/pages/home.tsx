import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, Sun, Moon } from "lucide-react";

const SANS = "'Plus Jakarta Sans', sans-serif";
const SERIF = "'Fraunces', serif";
const MONO = "'JetBrains Mono', monospace";

const NAV = [
  { label: "about", id: "about" },
  { label: "projects", id: "projects" },
  { label: "experience", id: "experience" },
  { label: "skills", id: "skills" },
  { label: "education", id: "education" },
];

const PROJECTS = [
  {
    title: "Movify",
    category: "Full-Stack · AI Platform",
    period: "Jun – Aug 2025",
    problem: "Build a movie platform where users get personalised recommendations and readable review summaries without wading through raw text.",
    approach: "Scalable RESTful API with Node.js + Express for auth and CRUD. Integrated an LLM for a personalised recommendation engine and automatic review summarisation. Dynamic React UI with component-based architecture.",
    impact: "End-to-end AI-powered product shipped solo, demonstrating full ownership from data layer to UI.",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "LLM APIs"],
    href: "https://github.com/yashwanthbooram",
  },
  {
    title: "Ship Detection in Satellite Imagery",
    category: "Deep Learning · Computer Vision",
    period: "Mar – Apr 2025",
    problem: "Detect and localise ships in high-resolution maritime satellite images where manual review is impractical at scale.",
    approach: "Pre-processed images with normalisation and bounding-box extraction. Developed a YOLOv3 CNN model fine-tuned for maritime scenarios.",
    impact: "~95% training accuracy · ~92% validation accuracy",
    stack: ["YOLOv3", "CNN", "OpenCV", "Python"],
    href: "https://github.com/yashwanthbooram",
  },
  {
    title: "Customer Behaviour Analytics",
    category: "Data Analytics · Machine Learning",
    period: "Jun – Jul 2024",
    problem: "Help a retail business move from gut-feel marketing to data-driven customer targeting.",
    approach: "RFM (Recency, Frequency, Monetary) analysis + K-Means clustering to segment customers into five groups. Elbow method (WCSS) for optimal K, scatter-plot visualisations.",
    impact: "Actionable insights to target high-value customers and improve marketing ROI.",
    stack: ["K-Means Clustering", "RFM Analysis", "Pandas", "Matplotlib"],
    href: "https://github.com/yashwanthbooram",
  },
];

const SKILLS = [
  { group: "Languages", items: ["Python", "Java", "JavaScript", "C++", "SQL"] },
  { group: "ML / AI", items: ["PyTorch", "TensorFlow", "Scikit-Learn", "Keras", "OpenCV", "Pandas", "NumPy"] },
  { group: "Full-Stack", items: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs"] },
  { group: "Data & Cloud", items: ["MySQL", "Power BI", "AWS", "Google Colab", "Matplotlib"] },
];

const CERTS = [
  { title: "Machine Learning Specialisation", issuer: "Stanford / DeepLearning.AI · Coursera", date: "Jul 2025" },
  { title: "Generative AI with Large Language Models", issuer: "Coursera", date: "Oct 2023" },
  { title: "Dynamic Programming & Greedy Algorithms", issuer: "University of Colorado Boulder", date: "Oct 2023" },
  { title: "Google Cybersecurity", issuer: "Google", date: "Aug 2022" },
];

const EDUCATION = [
  { degree: "B.Tech — Computer Science & Engineering", school: "Lovely Professional University", location: "Punjab, India · Based in Hyderabad, Telangana", period: "Oct 2022 – Present", note: "CGPA 7 · Specialisation: Machine Learning" },
  { degree: "Intermediate (MPC)", school: "Narayana Junior College", location: "Hyderabad, Telangana", period: "Apr 2020 – Mar 2022", note: "78.9%" },
  { degree: "Matriculation", school: "Sri Chaitanya Techno School", location: "Hyderabad, Telangana", period: "Apr 2019 – Mar 2020", note: "100%" },
];

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div className={className}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ number, label, dark }: { number: string; label: string; dark: boolean }) {
  return (
    <div className="flex items-center gap-4 mb-16">
      <span className={`text-xs ${dark ? "text-zinc-700" : "text-zinc-400"}`} style={{ fontFamily: MONO }}>{number}</span>
      <span className={`text-xs uppercase tracking-widest ${dark ? "text-zinc-600" : "text-zinc-400"}`} style={{ fontFamily: MONO }}>{label}</span>
      <div className={`flex-1 h-px ${dark ? "bg-zinc-800" : "bg-zinc-200"}`} />
    </div>
  );
}

export default function Home() {
  const [dark, setDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); }); },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    document.querySelectorAll("section[id]").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const bg = dark ? "bg-[#080808]" : "bg-[#fafafa]";
  const text = dark ? "text-zinc-100" : "text-zinc-900";
  const textMuted = dark ? "text-zinc-300" : "text-zinc-600";
  const textDim = dark ? "text-zinc-500" : "text-zinc-400";
  const border = dark ? "border-zinc-800" : "border-zinc-200";
  const cardBg = dark ? "bg-zinc-900/30" : "bg-white";
  const cardHover = dark ? "hover:border-zinc-600" : "hover:border-zinc-400";
  const tagBorder = dark ? "border-zinc-700 text-zinc-400 group-hover:border-zinc-500" : "border-zinc-200 text-zinc-500 group-hover:border-zinc-300";
  const navBg = scrolled ? (dark ? "border-b border-zinc-800/70 bg-[#080808]/90 backdrop-blur-md" : "border-b border-zinc-200/70 bg-[#fafafa]/90 backdrop-blur-md") : "bg-transparent border-transparent";
  const monoColor = dark ? "text-zinc-400" : "text-zinc-600";
  const monoValue = dark ? "text-zinc-300" : "text-zinc-700";
  const monoComment = dark ? "text-zinc-600" : "text-zinc-400";
  const codeBg = dark ? "border-zinc-800 bg-zinc-900/40" : "border-zinc-200 bg-zinc-50";
  const dividerLine = dark ? "border-zinc-800/60" : "border-zinc-200/80";
  const heroGrid = dark ? "restraint-grid opacity-50" : "restraint-grid opacity-[0.25]";

  return (
    <div className={`${bg} ${text} min-h-screen transition-colors duration-300`} style={{ fontFamily: SANS }}>

      {/* ── NAV ── */}
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${navBg}`}>
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <button onClick={() => scrollTo("hero")} className={`text-sm font-medium tracking-tight ${text}`} style={{ fontFamily: MONO }}>
            yashwanth.
          </button>
          <nav className="hidden md:flex items-center gap-7">
            {NAV.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)}
                className={`text-xs transition-colors ${activeSection === n.id ? text : `${textDim} hover:${text}`}`}
                style={{ fontFamily: MONO }}
              >
                {n.label}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setDark((d) => !d)}
              className={`w-8 h-8 flex items-center justify-center rounded transition-colors ${dark ? "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800" : "text-zinc-400 hover:text-zinc-600 hover:bg-zinc-100"}`}
              aria-label="Toggle theme"
            >
              {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <a href="mailto:booramyashwanth@gmail.com"
              className={`hidden md:inline-flex items-center gap-2 text-xs border px-4 py-1.5 rounded transition-colors ${dark ? "border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-zinc-100" : "border-zinc-300 text-zinc-600 hover:border-zinc-400 hover:text-zinc-900"}`}
              style={{ fontFamily: MONO }}
            >
              get in touch
            </a>
          </div>
        </div>
      </header>

      {/* ── HERO ── */}
      <section id="hero" className="relative min-h-[100dvh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div className={`absolute inset-0 pointer-events-none ${heroGrid}`} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_50%,rgba(128,128,128,0.04)_0%,transparent_100%)] pointer-events-none" />

        <motion.div className="relative z-10 max-w-3xl"
          initial="hidden" animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p
            className={`text-xs uppercase tracking-[0.28em] mb-8 ${textDim}`}
            style={{ fontFamily: MONO }}
            variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22,1,0.36,1] } } }}
          >
            ML Engineer · Full-Stack Developer
          </motion.p>

          <motion.h1
            className={`text-[clamp(3rem,10vw,7rem)] font-light leading-[1.05] tracking-tight mb-3 ${text}`}
            style={{ fontFamily: SERIF, fontVariationSettings: "'opsz' 72" }}
            variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22,1,0.36,1] } } }}
          >
            Yashwanth
          </motion.h1>
          <motion.h1
            className={`text-[clamp(3rem,10vw,7rem)] font-light leading-[1.05] tracking-tight mb-12 ${dark ? "text-zinc-400" : "text-zinc-500"}`}
            style={{ fontFamily: SERIF, fontStyle: "italic", fontVariationSettings: "'opsz' 72" }}
            variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.05, ease: [0.22,1,0.36,1] } } }}
          >
            Booram.
          </motion.h1>

          <motion.p
            className={`text-base sm:text-lg font-light leading-relaxed max-w-lg mx-auto ${textMuted}`}
            variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22,1,0.36,1] } } }}
          >
            Building intelligent systems with machine learning<br className="hidden sm:block" /> and full-stack engineering.
          </motion.p>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.8 }}
        >
          <span className={`text-[10px] uppercase tracking-[0.3em] ${textDim}`} style={{ fontFamily: MONO }}>scroll</span>
          <div className={`w-px h-10 bg-gradient-to-b ${dark ? "from-zinc-700" : "from-zinc-300"} to-transparent`} />
        </motion.div>
      </section>

      {/* ── MAIN ── */}
      <main className="max-w-5xl mx-auto px-6 pb-32">

        {/* ABOUT */}
        <section id="about" className={`py-28 border-t ${dividerLine}`}>
          <FadeIn><SectionLabel number="01" label="About" dark={dark} /></FadeIn>
          <div className="grid md:grid-cols-2 gap-16">
            <FadeIn delay={0.05}>
              <div className={`space-y-5 leading-[1.8] text-[17px] ${textMuted}`}>
                <p>I'm a B.Tech Computer Science student at Lovely Professional University, specialising in Machine Learning. My engineering is grounded in the belief that great AI isn't just about accurate models — it's about deploying them into systems real people can use.</p>
                <p>I've built systems ranging from high-accuracy deep learning models for satellite imagery to full-stack platforms powered by LLMs. I thrive where data science meets product development.</p>
                <p className={`text-sm ${textDim}`}>Based in Hyderabad, Telangana · Open to full-time opportunities and meaningful collaborations.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className={`border rounded-xl p-6 text-sm ${codeBg}`} style={{ fontFamily: MONO }}>
                <div className="flex items-center gap-2 mb-5 pb-4" style={{ borderBottom: `1px solid ${dark ? "#27272a" : "#e4e4e7"}` }}>
                  <div className="flex gap-1.5">
                    {[0,1,2].map(i => <div key={i} className={`w-3 h-3 rounded-full ${dark ? "bg-zinc-700" : "bg-zinc-200"}`} />)}
                  </div>
                  <span className={`text-xs ml-2 ${textDim}`}>profile.ts</span>
                </div>
                <div className="space-y-1.5">
                  <p><span className={monoColor}>const</span> <span className={monoValue}>location</span> <span className={monoComment}>=</span> <span className={dark ? "text-zinc-300" : "text-zinc-700"}>"Hyderabad, Telangana"</span>;</p>
                  <p><span className={monoColor}>const</span> <span className={monoValue}>degree</span> <span className={monoComment}>=</span> <span className={dark ? "text-zinc-300" : "text-zinc-700"}>"B.Tech CSE"</span>;</p>
                  <p><span className={monoColor}>const</span> <span className={monoValue}>focus</span> <span className={monoComment}>=</span> [</p>
                  <p className="pl-4"><span className={dark ? "text-zinc-300" : "text-zinc-700"}>"Machine Learning"</span>,</p>
                  <p className="pl-4"><span className={dark ? "text-zinc-300" : "text-zinc-700"}>"Full-Stack Dev"</span>,</p>
                  <p>];</p>
                  <p className="pt-1"><span className={monoColor}>const</span> <span className={monoValue}>status</span> <span className={monoComment}>=</span> <span className={dark ? "text-zinc-300" : "text-zinc-700"}>"Open to roles"</span>;</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className={`py-28 border-t ${dividerLine}`}>
          <FadeIn><SectionLabel number="02" label="Projects" dark={dark} /></FadeIn>
          <div className="space-y-5">
            {PROJECTS.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.06}>
                <div className={`group border rounded-xl p-8 transition-colors duration-300 ${border} ${cardBg} ${cardHover}`}>
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <span className={`text-xs uppercase tracking-widest block mb-2 ${textDim}`} style={{ fontFamily: MONO }}>{p.category} · {p.period}</span>
                      <h3 className={`text-xl font-semibold ${text}`} style={{ fontFamily: SERIF, fontVariationSettings: "'opsz' 20" }}>{p.title}</h3>
                    </div>
                    <a href={p.href} target="_blank" rel="noreferrer" className={`shrink-0 mt-1 transition-colors ${dark ? "text-zinc-600 hover:text-zinc-200" : "text-zinc-400 hover:text-zinc-700"}`}>
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6 mb-6 text-[15px] leading-relaxed">
                    {[["Problem", p.problem], ["Approach", p.approach], ["Impact", p.impact]].map(([label, val]) => (
                      <div key={label}>
                        <p className={`text-[10px] uppercase tracking-widest mb-1.5 ${dark ? "text-zinc-700" : "text-zinc-400"}`} style={{ fontFamily: MONO }}>{label}</p>
                        <p className={label === "Impact" ? (dark ? "text-zinc-300" : "text-zinc-700") : textMuted}>{val}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((t) => (
                      <span key={t} className={`text-[11px] border px-2.5 py-1 rounded transition-colors ${tagBorder}`} style={{ fontFamily: MONO }}>{t}</span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className={`py-28 border-t ${dividerLine}`}>
          <FadeIn><SectionLabel number="03" label="Experience" dark={dark} /></FadeIn>
          <FadeIn delay={0.05}>
            <div className={`group border rounded-xl p-8 transition-colors duration-300 ${border} ${cardBg} ${cardHover}`}>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div>
                  <span className={`text-xs uppercase tracking-widest block mb-2 ${textDim}`} style={{ fontFamily: MONO }}>Dec 2024 – Jun 2025 · Freelance</span>
                  <h3 className={`text-xl font-semibold ${text}`} style={{ fontFamily: SERIF, fontVariationSettings: "'opsz' 20" }}>Generative AI Trainer</h3>
                  <p className={`text-sm mt-1 ${textMuted}`}>Outlier</p>
                </div>
              </div>
              <ul className={`space-y-3 text-[16px] leading-relaxed mb-6 ${textMuted}`}>
                {[
                  "Evaluated and optimised large language model outputs for sensitive content detection, improving consistency and contextual accuracy across multiple programming languages.",
                  "Utilised Python, Java, C++, and JavaScript for prompt creation, testing, and analysis.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className={`shrink-0 mt-0.5 ${textDim}`}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {["LLMs", "Prompt Engineering", "Python", "Java", "C++", "JavaScript"].map((t) => (
                  <span key={t} className={`text-[11px] border px-2.5 py-1 rounded transition-colors ${tagBorder}`} style={{ fontFamily: MONO }}>{t}</span>
                ))}
              </div>
            </div>
          </FadeIn>
        </section>

        {/* SKILLS */}
        <section id="skills" className={`py-28 border-t ${dividerLine}`}>
          <FadeIn><SectionLabel number="04" label="Skills" dark={dark} /></FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SKILLS.map((s, i) => (
              <FadeIn key={s.group} delay={i * 0.06}>
                <div className={`border rounded-xl p-6 ${border} ${cardBg}`}>
                  <p className={`text-[10px] uppercase tracking-widest mb-5 ${textDim}`} style={{ fontFamily: MONO }}>{s.group}</p>
                  <ul className="space-y-2.5">
                    {s.items.map((item) => (
                      <li key={item} className={`text-[15px] flex items-center gap-2.5 ${textMuted}`}>
                        <span className={`w-1 h-1 rounded-full shrink-0 ${dark ? "bg-zinc-700" : "bg-zinc-300"}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className={`py-28 border-t ${dividerLine}`}>
          <FadeIn><SectionLabel number="05" label="Education & Certifications" dark={dark} /></FadeIn>
          <div className="grid md:grid-cols-2 gap-16">
            <FadeIn delay={0.05}>
              <p className={`text-[10px] uppercase tracking-widest mb-8 ${textDim}`} style={{ fontFamily: MONO }}>Academic</p>
              <div className="space-y-8">
                {EDUCATION.map((e) => (
                  <div key={e.degree} className={`border-l pl-5 transition-colors ${dark ? "border-zinc-800 hover:border-zinc-600" : "border-zinc-200 hover:border-zinc-400"}`}>
                    <p className={`text-[10px] mb-1 ${textDim}`} style={{ fontFamily: MONO }}>{e.period}</p>
                    <h3 className={`text-[15px] font-semibold mb-0.5 ${text}`}>{e.degree}</h3>
                    <p className={`text-[15px] ${textMuted}`}>{e.school}</p>
                    <p className={`text-sm mt-0.5 ${textDim}`}>{e.location} · {e.note}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className={`text-[10px] uppercase tracking-widest mb-8 ${textDim}`} style={{ fontFamily: MONO }}>Certifications</p>
              <div className="space-y-6">
                {CERTS.map((c) => (
                  <div key={c.title} className={`border-l pl-5 transition-colors ${dark ? "border-zinc-800 hover:border-zinc-600" : "border-zinc-200 hover:border-zinc-400"}`}>
                    <p className={`text-[10px] mb-1 ${textDim}`} style={{ fontFamily: MONO }}>{c.date}</p>
                    <h3 className={`text-[15px] font-semibold mb-0.5 ${text}`}>{c.title}</h3>
                    <p className={`text-[15px] ${textMuted}`}>{c.issuer}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className={`py-28 border-t ${dividerLine}`}>
          <FadeIn>
            <div className="text-center max-w-xl mx-auto">
              <p className={`text-xs uppercase tracking-widest mb-6 ${textDim}`} style={{ fontFamily: MONO }}>06 / Contact</p>
              <h2 className={`text-4xl sm:text-5xl font-light tracking-tight mb-5 ${text}`} style={{ fontFamily: SERIF, fontVariationSettings: "'opsz' 48" }}>
                Let's build something<br /><em>together.</em>
              </h2>
              <p className={`font-light leading-relaxed mb-10 ${textMuted}`}>
                Open to opportunities and meaningful collaborations.<br />
                Whether it's a full-time role, freelance work, or just a conversation.
              </p>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <a href="mailto:booramyashwanth@gmail.com"
                  className={`inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded transition-colors ${dark ? "bg-zinc-100 text-zinc-900 hover:bg-white" : "bg-zinc-900 text-zinc-100 hover:bg-zinc-700"}`}
                >
                  <Mail className="w-4 h-4" /> Send an email
                </a>
                <a href="https://linkedin.com/in/yashwanthbooram" target="_blank" rel="noreferrer"
                  className={`inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded border transition-colors ${dark ? "border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-zinc-100" : "border-zinc-300 text-zinc-600 hover:border-zinc-400 hover:text-zinc-900"}`}
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
                <a href="https://github.com/yashwanthbooram" target="_blank" rel="noreferrer"
                  className={`inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded border transition-colors ${dark ? "border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-zinc-100" : "border-zinc-300 text-zinc-600 hover:border-zinc-400 hover:text-zinc-900"}`}
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>
              </div>
            </div>
          </FadeIn>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className={`border-t py-8 ${dividerLine}`}>
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className={`text-xs ${textDim}`} style={{ fontFamily: MONO }}>yashwanth booram · {new Date().getFullYear()}</span>
          <div className="flex items-center gap-5">
            {[
              { href: "https://github.com/yashwanthbooram", icon: <Github className="w-4 h-4" /> },
              { href: "https://linkedin.com/in/yashwanthbooram", icon: <Linkedin className="w-4 h-4" /> },
              { href: "mailto:booramyashwanth@gmail.com", icon: <Mail className="w-4 h-4" /> },
            ].map(({ href, icon }) => (
              <a key={href} href={href} target={href.startsWith("mailto") ? undefined : "_blank"} rel="noreferrer"
                className={`transition-colors ${dark ? "text-zinc-700 hover:text-zinc-400" : "text-zinc-400 hover:text-zinc-600"}`}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
