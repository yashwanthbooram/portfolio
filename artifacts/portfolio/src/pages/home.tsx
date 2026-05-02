import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight, ExternalLink } from "lucide-react";

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
    approach: "Engineered a scalable RESTful API with Node.js + Express for auth, movie data, and CRUD operations. Integrated an LLM for a personalised recommendation engine and automatic review summarisation. Built a dynamic React UI with component-based architecture and state management.",
    impact: "End-to-end AI-powered product shipped solo, demonstrating full ownership from data layer to UI.",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "LLM APIs"],
    href: "https://github.com/yashwanthbooram",
  },
  {
    title: "Ship Detection in Satellite Imagery",
    category: "Deep Learning · Computer Vision",
    period: "Mar – Apr 2025",
    problem: "Detect and localise ships in high-resolution maritime satellite images where manual review is impractical.",
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
    approach: "Applied RFM (Recency, Frequency, Monetary) analysis and K-Means clustering to segment customers into five groups. Used the elbow method (WCSS) to determine optimal K and visualised segments via scatter plots.",
    impact: "Actionable insights delivered to target high-value customers and improve marketing ROI.",
    stack: ["K-Means Clustering", "RFM Analysis", "Pandas", "Matplotlib"],
    href: "https://github.com/yashwanthbooram",
  },
];

const SKILLS = [
  {
    group: "Languages",
    items: ["Python", "Java", "JavaScript", "C++", "SQL"],
  },
  {
    group: "ML / AI",
    items: ["PyTorch", "TensorFlow", "Scikit-Learn", "Keras", "OpenCV", "Pandas", "NumPy"],
  },
  {
    group: "Full-Stack",
    items: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs"],
  },
  {
    group: "Data & Cloud",
    items: ["MySQL", "Power BI", "AWS", "Google Colab", "Matplotlib"],
  },
];

const CERTS = [
  { title: "Machine Learning Specialisation", issuer: "Stanford / DeepLearning.AI · Coursera", date: "Jul 2025" },
  { title: "Generative AI with Large Language Models", issuer: "Coursera", date: "Oct 2023" },
  { title: "Dynamic Programming & Greedy Algorithms", issuer: "University of Colorado Boulder", date: "Oct 2023" },
  { title: "Google Cybersecurity", issuer: "Google", date: "Aug 2022" },
];

const EDUCATION = [
  {
    degree: "B.Tech — Computer Science & Engineering",
    school: "Lovely Professional University",
    location: "Punjab, India",
    period: "Oct 2022 – Present",
    note: "CGPA 7 · Specialisation: Machine Learning",
  },
  {
    degree: "Intermediate (MPC)",
    school: "Narayana Junior College",
    location: "Hyderabad, Telangana",
    period: "Apr 2020 – Mar 2022",
    note: "78.9%",
  },
  {
    degree: "Matriculation",
    school: "Sri Chaitanya Techno School",
    location: "Hyderabad, Telangana",
    period: "Apr 2019 – Mar 2020",
    note: "100%",
  },
];

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center gap-4 mb-16">
      <span className="text-xs font-mono text-zinc-600">{number}</span>
      <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">{label}</span>
      <div className="flex-1 h-px bg-zinc-800" />
    </div>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    document.querySelectorAll("section[id]").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#080808] text-zinc-100 min-h-screen" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* ── NAV ── */}
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-zinc-800/70 bg-[#080808]/90 backdrop-blur-md" : "bg-transparent border-transparent"
      }`}>
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <button onClick={() => scrollTo("hero")} className="font-mono text-sm font-medium text-zinc-100 tracking-tight">
            yashwanth.
          </button>
          <nav className="hidden md:flex items-center gap-7">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className={`text-xs font-mono transition-colors ${
                  activeSection === n.id ? "text-zinc-100" : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                {n.label}
              </button>
            ))}
          </nav>
          <a
            href="mailto:booramyashwanth@gmail.com"
            className="hidden md:inline-flex items-center gap-2 text-xs font-mono border border-zinc-700 text-zinc-300 px-4 py-1.5 rounded hover:border-zinc-500 hover:text-zinc-100 transition-colors"
          >
            get in touch
          </a>
        </div>
      </header>

      {/* ── HERO ── */}
      <section id="hero" className="relative min-h-[100dvh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        {/* Subtle grid */}
        <div className="restraint-grid absolute inset-0 pointer-events-none opacity-60" />
        {/* Radial vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(255,255,255,0.02)_0%,transparent_100%)] pointer-events-none" />

        <motion.div
          className="relative z-10 max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.p
            className="text-xs font-mono text-zinc-600 uppercase tracking-[0.25em] mb-8"
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22,1,0.36,1] } } }}
          >
            ML Engineer · Full-Stack Developer
          </motion.p>

          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.08] text-zinc-50 mb-6"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22,1,0.36,1] } } }}
          >
            Yashwanth Booram
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed max-w-xl mx-auto mb-12"
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22,1,0.36,1] } } }}
          >
            Building intelligent systems with machine learning<br className="hidden sm:block" /> and full-stack engineering.
          </motion.p>

          <motion.div
            className="flex items-center justify-center gap-4 flex-wrap"
            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22,1,0.36,1] } } }}
          >
            <button
              onClick={() => scrollTo("projects")}
              className="inline-flex items-center gap-2 bg-zinc-100 text-zinc-900 text-sm font-medium px-5 py-2.5 rounded hover:bg-white transition-colors"
            >
              View Projects
            </button>
            <a
              href="https://github.com/yashwanthbooram"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-zinc-700 text-zinc-300 text-sm font-medium px-5 py-2.5 rounded hover:border-zinc-500 hover:text-zinc-100 transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <span className="text-[10px] font-mono text-zinc-700 uppercase tracking-[0.3em]">scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-zinc-700 to-transparent" />
        </motion.div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <main className="max-w-5xl mx-auto px-6 pb-32">

        {/* ABOUT */}
        <section id="about" className="py-28 border-t border-zinc-800/60">
          <FadeIn>
            <SectionLabel number="01" label="About" />
          </FadeIn>
          <div className="grid md:grid-cols-[1fr_1fr] gap-16">
            <FadeIn delay={0.05}>
              <div className="space-y-5 text-zinc-400 font-light leading-[1.75] text-[15px]">
                <p>
                  I'm a B.Tech Computer Science student at Lovely Professional University, specialising in Machine Learning. My engineering is grounded in the belief that great AI isn't just about accurate models — it's about deploying them into systems real people can use.
                </p>
                <p>
                  I've built systems ranging from high-accuracy deep learning models for satellite imagery to full-stack platforms powered by LLMs. I thrive in environments where data science meets product development.
                </p>
                <p className="text-zinc-500 text-sm">
                  Based in India · Open to full-time opportunities and meaningful collaborations.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="border border-zinc-800 rounded-lg p-6 font-mono text-sm bg-zinc-900/40">
                <div className="flex items-center gap-2 mb-5 pb-4 border-b border-zinc-800">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-zinc-700" />
                    <div className="w-3 h-3 rounded-full bg-zinc-700" />
                    <div className="w-3 h-3 rounded-full bg-zinc-700" />
                  </div>
                  <span className="text-zinc-600 text-xs ml-2">profile.ts</span>
                </div>
                <div className="space-y-1.5 text-zinc-500">
                  <p><span className="text-zinc-400">const</span> location <span className="text-zinc-600">=</span> <span className="text-zinc-300">"India"</span>;</p>
                  <p><span className="text-zinc-400">const</span> degree <span className="text-zinc-600">=</span> <span className="text-zinc-300">"B.Tech CSE"</span>;</p>
                  <p><span className="text-zinc-400">const</span> focus <span className="text-zinc-600">=</span> [</p>
                  <p className="pl-4"><span className="text-zinc-300">"Machine Learning"</span>,</p>
                  <p className="pl-4"><span className="text-zinc-300">"Full-Stack Dev"</span>,</p>
                  <p>];</p>
                  <p className="pt-1"><span className="text-zinc-400">const</span> status <span className="text-zinc-600">=</span> <span className="text-zinc-300">"Open to roles"</span>;</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-28 border-t border-zinc-800/60">
          <FadeIn>
            <SectionLabel number="02" label="Projects" />
          </FadeIn>
          <div className="space-y-6">
            {PROJECTS.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.06}>
                <div className="group border border-zinc-800 rounded-xl p-8 hover:border-zinc-600 transition-colors duration-300 bg-zinc-900/20 hover:bg-zinc-900/50">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <span className="text-xs font-mono text-zinc-600 uppercase tracking-widest block mb-2">{p.category} · {p.period}</span>
                      <h3 className="text-xl font-semibold text-zinc-50">{p.title}</h3>
                    </div>
                    <a href={p.href} target="_blank" rel="noreferrer" className="shrink-0 mt-1 text-zinc-600 hover:text-zinc-200 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 mb-6 text-sm text-zinc-500 leading-relaxed">
                    <div>
                      <p className="text-[10px] font-mono text-zinc-700 uppercase tracking-widest mb-1.5">Problem</p>
                      <p>{p.problem}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-zinc-700 uppercase tracking-widest mb-1.5">Approach</p>
                      <p>{p.approach}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-zinc-700 uppercase tracking-widest mb-1.5">Impact</p>
                      <p className="text-zinc-400">{p.impact}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((t) => (
                      <span key={t} className="text-[11px] font-mono text-zinc-500 border border-zinc-800 group-hover:border-zinc-700 px-2.5 py-1 rounded transition-colors">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="py-28 border-t border-zinc-800/60">
          <FadeIn>
            <SectionLabel number="03" label="Experience" />
          </FadeIn>
          <FadeIn delay={0.05}>
            <div className="group border border-zinc-800 rounded-xl p-8 hover:border-zinc-600 transition-colors duration-300 bg-zinc-900/20 hover:bg-zinc-900/50">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div>
                  <span className="text-xs font-mono text-zinc-600 uppercase tracking-widest block mb-2">Dec 2024 – Jun 2025 · Freelance</span>
                  <h3 className="text-xl font-semibold text-zinc-50">Generative AI Trainer</h3>
                  <p className="text-sm text-zinc-500 mt-1">Outlier</p>
                </div>
              </div>
              <ul className="space-y-3 text-sm text-zinc-400 leading-relaxed mb-6">
                <li className="flex gap-3">
                  <span className="text-zinc-700 shrink-0 mt-0.5">—</span>
                  Evaluated and optimised large language model outputs for sensitive content detection, improving consistency and contextual accuracy across multiple programming languages.
                </li>
                <li className="flex gap-3">
                  <span className="text-zinc-700 shrink-0 mt-0.5">—</span>
                  Utilised Python, Java, C++, and JavaScript for prompt creation, testing, and analysis.
                </li>
              </ul>
              <div className="flex flex-wrap gap-2">
                {["LLMs", "Prompt Engineering", "Python", "Java", "C++", "JavaScript"].map((t) => (
                  <span key={t} className="text-[11px] font-mono text-zinc-500 border border-zinc-800 group-hover:border-zinc-700 px-2.5 py-1 rounded transition-colors">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </section>

        {/* SKILLS */}
        <section id="skills" className="py-28 border-t border-zinc-800/60">
          <FadeIn>
            <SectionLabel number="04" label="Skills" />
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILLS.map((s, i) => (
              <FadeIn key={s.group} delay={i * 0.06}>
                <div className="border border-zinc-800 rounded-xl p-6 bg-zinc-900/20">
                  <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-5">{s.group}</p>
                  <ul className="space-y-2.5">
                    {s.items.map((item) => (
                      <li key={item} className="text-sm text-zinc-400 font-light flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-zinc-700 shrink-0" />
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
        <section id="education" className="py-28 border-t border-zinc-800/60">
          <FadeIn>
            <SectionLabel number="05" label="Education & Certifications" />
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-16">
            {/* Degrees */}
            <FadeIn delay={0.05}>
              <div>
                <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-8">Academic</p>
                <div className="space-y-8">
                  {EDUCATION.map((e) => (
                    <div key={e.degree} className="border-l border-zinc-800 pl-5 hover:border-zinc-600 transition-colors">
                      <p className="text-[10px] font-mono text-zinc-600 mb-1">{e.period}</p>
                      <h3 className="text-sm font-semibold text-zinc-100 mb-0.5">{e.degree}</h3>
                      <p className="text-sm text-zinc-500">{e.school}</p>
                      <p className="text-xs text-zinc-600 mt-0.5">{e.location} · {e.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
            {/* Certifications */}
            <FadeIn delay={0.1}>
              <div>
                <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-8">Certifications</p>
                <div className="space-y-6">
                  {CERTS.map((c) => (
                    <div key={c.title} className="border-l border-zinc-800 pl-5 hover:border-zinc-600 transition-colors">
                      <p className="text-[10px] font-mono text-zinc-600 mb-1">{c.date}</p>
                      <h3 className="text-sm font-semibold text-zinc-100 mb-0.5">{c.title}</h3>
                      <p className="text-sm text-zinc-500">{c.issuer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-28 border-t border-zinc-800/60">
          <FadeIn>
            <div className="text-center max-w-xl mx-auto">
              <p className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-6">06 / Contact</p>
              <h2 className="text-3xl sm:text-4xl font-semibold text-zinc-50 tracking-tight mb-5">
                Let's build something together.
              </h2>
              <p className="text-zinc-500 font-light leading-relaxed mb-10">
                Open to opportunities and meaningful collaborations.<br />
                Whether it's a full-time role, freelance work, or just a conversation — I'd love to hear from you.
              </p>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <a
                  href="mailto:booramyashwanth@gmail.com"
                  className="inline-flex items-center gap-2 bg-zinc-100 text-zinc-900 text-sm font-medium px-5 py-2.5 rounded hover:bg-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Send an email
                </a>
                <a
                  href="https://linkedin.com/in/yashwanthbooram"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-zinc-700 text-zinc-300 text-sm font-medium px-5 py-2.5 rounded hover:border-zinc-500 hover:text-zinc-100 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/yashwanthbooram"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-zinc-700 text-zinc-300 text-sm font-medium px-5 py-2.5 rounded hover:border-zinc-500 hover:text-zinc-100 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </div>
          </FadeIn>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800/60 py-8">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-mono text-xs text-zinc-700">yashwanth booram · {new Date().getFullYear()}</span>
          <div className="flex items-center gap-5">
            <a href="https://github.com/yashwanthbooram" target="_blank" rel="noreferrer" className="text-zinc-700 hover:text-zinc-400 transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com/in/yashwanthbooram" target="_blank" rel="noreferrer" className="text-zinc-700 hover:text-zinc-400 transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="mailto:booramyashwanth@gmail.com" className="text-zinc-700 hover:text-zinc-400 transition-colors">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
