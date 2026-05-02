import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ChevronRight, 
  Code2, 
  Database, 
  Cpu, 
  LineChart, 
  Terminal, 
  ExternalLink,
  MapPin,
  GraduationCap,
  Award,
  BarChart2,
  Cloud
} from "lucide-react";
import { SiPython, SiPytorch, SiReact, SiNodedotjs, SiMongodb, SiTensorflow, SiScikitlearn, SiKeras, SiMysql } from "react-icons/si";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen selection:bg-primary/30 selection:text-primary-foreground">
      <div className="noise-bg" />
      <div className="glow-point fixed w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -top-40 -left-40 mix-blend-screen" />
      <div className="glow-point fixed w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] pointer-events-none bottom-0 right-0 mix-blend-screen" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 border-b border-border/40 bg-background/50 backdrop-blur-xl supports-[backdrop-filter]:bg-background/20">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-mono font-bold text-lg tracking-tighter text-primary">YB</span>
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollTo(item.href.substring(1))}
                className={`text-sm font-mono transition-colors hover:text-primary ${
                  activeSection === item.href.substring(1) ? "text-primary" : "text-muted-foreground"
                }`}
                data-testid={`nav-${item.name.toLowerCase()}`}
              >
                <span className="text-primary/50 mr-2">/</span>
                {item.name.toLowerCase()}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 pt-32 pb-24 max-w-5xl relative z-10">
        
        {/* HERO */}
        <section id="hero" className="min-h-[80vh] flex flex-col justify-center mb-32 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-xs mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for opportunities
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight text-foreground">
              Yashwanth Booram
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-light mb-8 max-w-2xl">
              Machine Learning Researcher <span className="text-primary">&</span> Full-Stack Product Engineer.
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mb-12 font-light leading-relaxed">
              Bridging the gap between cutting-edge AI models and robust, scalable applications. Currently exploring deep learning architectures and engineering intelligent systems.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <Button onClick={() => scrollTo('projects')} className="font-mono h-12 px-8 group border border-primary bg-primary/10 hover:bg-primary/20 text-primary">
                View Work
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <div className="flex items-center gap-4 ml-4">
                <a href="https://github.com/yashwanthbooram" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2" data-testid="link-github">
                  <Github className="w-6 h-6" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a href="https://linkedin.com/in/yashwanthbooram" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2" data-testid="link-linkedin">
                  <Linkedin className="w-6 h-6" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a href="mailto:booramyashwanth@gmail.com" className="text-muted-foreground hover:text-primary transition-colors p-2" data-testid="link-email">
                  <Mail className="w-6 h-6" />
                  <span className="sr-only">Email</span>
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-24 border-t border-border/30">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-12">
              <span className="text-primary font-mono text-xl">01.</span>
              <h2 className="text-3xl font-bold">About Me</h2>
              <div className="h-px bg-border flex-1 ml-4" />
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 text-lg text-muted-foreground font-light leading-relaxed">
              <div>
                <p className="mb-6">
                  I'm a B.Tech Computer Science student at Lovely Professional University, specializing in Machine Learning. My approach to engineering is grounded in the belief that great AI isn't just about training accurate models—it's about deploying them into systems that real people can use.
                </p>
                <p>
                  I've built systems ranging from high-accuracy deep learning models for satellite imagery to full-stack platforms powered by LLMs. I thrive in environments where data science meets product development.
                </p>
              </div>
              <div className="bg-card border border-border/50 p-6 rounded-lg font-mono text-sm relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border/50">
                  <Terminal className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">yashwanth.config</span>
                </div>
                <div className="space-y-2 text-muted-foreground">
                  <p><span className="text-primary">const</span> location <span className="text-primary">=</span> <span className="text-accent">"India"</span>;</p>
                  <p><span className="text-primary">const</span> education <span className="text-primary">=</span> <span className="text-accent">"B.Tech CSE"</span>;</p>
                  <p><span className="text-primary">const</span> focus <span className="text-primary">=</span> [<span className="text-accent">"Machine Learning"</span>, <span className="text-accent">"Full-Stack"</span>];</p>
                  <p><span className="text-primary">const</span> status <span className="text-primary">=</span> <span className="text-accent">"Open to new roles"</span>;</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="py-24 border-t border-border/30">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-12">
              <span className="text-primary font-mono text-xl">02.</span>
              <h2 className="text-3xl font-bold">Experience</h2>
              <div className="h-px bg-border flex-1 ml-4" />
            </div>

            <div className="relative pl-8 md:pl-0">
              <div className="hidden md:block absolute left-[8.5rem] top-0 bottom-0 w-px bg-border/50" />
              
              <div className="relative flex flex-col md:flex-row gap-8 md:gap-16 group">
                <div className="md:w-32 flex-shrink-0 pt-1">
                  <span className="font-mono text-sm text-primary bg-primary/10 px-3 py-1 rounded border border-primary/20">
                    2024 - 2025
                  </span>
                </div>
                
                <div className="hidden md:block absolute left-[8.5rem] top-3 w-3 h-3 rounded-full bg-background border-2 border-primary -translate-x-[7px] group-hover:bg-primary transition-colors z-10" />
                
                <div className="bg-card border border-border/50 p-8 rounded-lg flex-1 hover:border-primary/30 transition-colors">
                  <h3 className="text-xl font-bold text-foreground mb-1">Generative AI Trainer</h3>
                  <div className="text-muted-foreground font-medium mb-4 flex items-center gap-2">
                    Outlier <span className="text-border">•</span> Freelance
                  </div>
                  <ul className="space-y-3 text-muted-foreground font-light mb-6">
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-primary shrink-0 mr-2 mt-0.5" />
                      <span>Evaluated and optimized large language model outputs for sensitive content detection, improving consistency and contextual accuracy across multiple programming languages.</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-primary shrink-0 mr-2 mt-0.5" />
                      <span>Used Python, Java, C++, and JavaScript for prompt creation, testing, and analysis.</span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="font-mono text-xs text-primary border-primary/20 bg-primary/5">LLMs</Badge>
                    <Badge variant="outline" className="font-mono text-xs text-primary border-primary/20 bg-primary/5">Python</Badge>
                    <Badge variant="outline" className="font-mono text-xs text-primary border-primary/20 bg-primary/5">Prompt Engineering</Badge>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-24 border-t border-border/30">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-12">
              <span className="text-primary font-mono text-xl">03.</span>
              <h2 className="text-3xl font-bold">Featured Projects</h2>
              <div className="h-px bg-border flex-1 ml-4" />
            </div>

            <div className="grid gap-12">
              {/* Project 1 */}
              <Card className="bg-card border-border/50 overflow-hidden group hover:border-primary/30 transition-colors">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-[2fr_3fr] gap-0">
                    <div className="bg-muted/30 p-8 flex items-center justify-center border-r border-border/50 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50" />
                      <Code2 className="w-24 h-24 text-primary/30 group-hover:text-primary/50 transition-colors group-hover:scale-110 duration-500" />
                    </div>
                    <div className="p-8 md:p-10 flex flex-col justify-center">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <span className="text-primary font-mono text-sm mb-2 block">Full-Stack Application</span>
                          <h3 className="text-2xl font-bold">Movify</h3>
                        </div>
                        <a href="https://github.com/yashwanthbooram" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                          <Github className="w-6 h-6" />
                        </a>
                      </div>
                      <p className="text-muted-foreground font-light mb-6 leading-relaxed">
                        AI-Powered Full-Stack Movie Platform. Engineered a scalable RESTful API for user authentication and CRUD operations. Integrated an LLM to deliver intelligent features including a personalized recommendation engine and automatic review summarization.
                      </p>
                      <div className="flex flex-wrap gap-3 mt-auto">
                        <span className="font-mono text-xs text-primary/70">React</span>
                        <span className="font-mono text-xs text-primary/70">Node.js</span>
                        <span className="font-mono text-xs text-primary/70">Express</span>
                        <span className="font-mono text-xs text-primary/70">MongoDB</span>
                        <span className="font-mono text-xs text-primary/70">LLM APIs</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Project 2 */}
              <Card className="bg-card border-border/50 overflow-hidden group hover:border-accent/30 transition-colors">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-[3fr_2fr] gap-0">
                    <div className="p-8 md:p-10 flex flex-col justify-center order-2 md:order-1">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <span className="text-accent font-mono text-sm mb-2 block">Deep Learning</span>
                          <h3 className="text-2xl font-bold">Ship Detection in Satellite Imagery</h3>
                        </div>
                        <a href="https://github.com/yashwanthbooram" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                          <Github className="w-6 h-6" />
                        </a>
                      </div>
                      <p className="text-muted-foreground font-light mb-6 leading-relaxed">
                        Developed a YOLOv3 CNN model for high-accuracy ship localization in maritime satellite imagery. Pre-processed images with normalization and bounding box extraction, achieving ~95% Training Accuracy and ~92% Validation Accuracy.
                      </p>
                      <div className="flex flex-wrap gap-3 mt-auto">
                        <span className="font-mono text-xs text-accent/70">YOLOv3</span>
                        <span className="font-mono text-xs text-accent/70">OpenCV</span>
                        <span className="font-mono text-xs text-accent/70">CNN</span>
                        <span className="font-mono text-xs text-accent/70">Python</span>
                      </div>
                    </div>
                    <div className="bg-muted/30 p-8 flex items-center justify-center border-l border-border/50 relative overflow-hidden order-1 md:order-2">
                      <div className="absolute inset-0 bg-gradient-to-bl from-accent/10 to-transparent opacity-50" />
                      <Cpu className="w-24 h-24 text-accent/30 group-hover:text-accent/50 transition-colors group-hover:scale-110 duration-500" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Project 3 */}
              <Card className="bg-card border-border/50 overflow-hidden group hover:border-primary/30 transition-colors">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-[2fr_3fr] gap-0">
                    <div className="bg-muted/30 p-8 flex items-center justify-center border-r border-border/50 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50" />
                      <Database className="w-24 h-24 text-primary/30 group-hover:text-primary/50 transition-colors group-hover:scale-110 duration-500" />
                    </div>
                    <div className="p-8 md:p-10 flex flex-col justify-center">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <span className="text-primary font-mono text-sm mb-2 block">Data Analytics</span>
                          <h3 className="text-2xl font-bold">Customer Behavior Analytics</h3>
                        </div>
                        <a href="https://github.com/yashwanthbooram" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                          <Github className="w-6 h-6" />
                        </a>
                      </div>
                      <p className="text-muted-foreground font-light mb-6 leading-relaxed">
                        Applied RFM analysis and K-Means clustering to segment retail customers into distinct groups. Determined optimal K using elbow method and visualized segments to generate actionable business insights for improving marketing ROI.
                      </p>
                      <div className="flex flex-wrap gap-3 mt-auto">
                        <span className="font-mono text-xs text-primary/70">K-Means Clustering</span>
                        <span className="font-mono text-xs text-primary/70">RFM Analysis</span>
                        <span className="font-mono text-xs text-primary/70">Pandas</span>
                        <span className="font-mono text-xs text-primary/70">Data Visualization</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="py-24 border-t border-border/30">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-12">
              <span className="text-primary font-mono text-xl">04.</span>
              <h2 className="text-3xl font-bold">Technical Arsenal</h2>
              <div className="h-px bg-border flex-1 ml-4" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-card border border-border/50 p-6 rounded-lg hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/50">
                  <Code2 className="w-6 h-6 text-primary" />
                  <h3 className="text-lg font-bold">Languages & Core</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-muted-foreground"><SiPython className="text-primary"/> Python</div>
                  <div className="flex items-center gap-2 text-muted-foreground"><Terminal className="w-4 h-4 text-primary"/> Java</div>
                  <div className="flex items-center gap-2 text-muted-foreground"><SiReact className="text-primary"/> React</div>
                  <div className="flex items-center gap-2 text-muted-foreground"><SiNodedotjs className="text-primary"/> Node.js</div>
                </div>
              </div>

              <div className="bg-card border border-border/50 p-6 rounded-lg hover:border-accent/30 transition-colors">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/50">
                  <Cpu className="w-6 h-6 text-accent" />
                  <h3 className="text-lg font-bold">ML & Frameworks</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-muted-foreground"><SiPytorch className="text-accent"/> PyTorch</div>
                  <div className="flex items-center gap-2 text-muted-foreground"><SiTensorflow className="text-accent"/> TensorFlow</div>
                  <div className="flex items-center gap-2 text-muted-foreground"><SiScikitlearn className="text-accent"/> Scikit-Learn</div>
                  <div className="flex items-center gap-2 text-muted-foreground"><SiKeras className="text-accent"/> Keras</div>
                </div>
              </div>

              <div className="bg-card border border-border/50 p-6 rounded-lg hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/50">
                  <Database className="w-6 h-6 text-primary" />
                  <h3 className="text-lg font-bold">Data & Cloud</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-muted-foreground"><SiMongodb className="text-primary"/> MongoDB</div>
                  <div className="flex items-center gap-2 text-muted-foreground"><SiMysql className="text-primary"/> MySQL</div>
                  <div className="flex items-center gap-2 text-muted-foreground"><BarChart2 className="w-4 h-4 text-primary"/> Power BI</div>
                  <div className="flex items-center gap-2 text-muted-foreground"><Cloud className="w-4 h-4 text-primary"/> AWS</div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* EDUCATION & CERTIFICATIONS */}
        <section id="education" className="py-24 border-t border-border/30">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-12">
              <span className="text-primary font-mono text-xl">05.</span>
              <h2 className="text-3xl font-bold">Education & Certifications</h2>
              <div className="h-px bg-border flex-1 ml-4" />
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold mb-8 flex items-center gap-2 text-foreground">
                  <GraduationCap className="w-6 h-6 text-primary" />
                  Academic Background
                </h3>
                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
                  
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-primary bg-background text-primary shrink-0 z-10 relative shadow-[0_0_15px_rgba(var(--primary),0.5)]">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-border/50 bg-card hover:border-primary/50 transition-colors ml-4 md:ml-0 md:mr-4">
                      <div className="font-mono text-xs text-primary mb-1">Oct 2022 - Present</div>
                      <h4 className="font-bold text-foreground">B.Tech in Computer Science</h4>
                      <p className="text-sm text-muted-foreground mb-2">Lovely Professional University</p>
                      <p className="text-sm font-mono bg-primary/10 text-primary inline-block px-2 py-0.5 rounded">CGPA: 7.0</p>
                    </div>
                  </div>

                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-border bg-background text-muted-foreground shrink-0 z-10 relative group-hover:border-primary group-hover:text-primary transition-colors">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-border/50 bg-card hover:border-primary/50 transition-colors ml-4 md:ml-0 md:ml-4">
                      <div className="font-mono text-xs text-muted-foreground mb-1">2020 - 2022</div>
                      <h4 className="font-bold text-foreground">Intermediate</h4>
                      <p className="text-sm text-muted-foreground mb-2">Narayana Junior College</p>
                      <p className="text-sm font-mono bg-muted text-muted-foreground inline-block px-2 py-0.5 rounded">78.9%</p>
                    </div>
                  </div>

                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-8 flex items-center gap-2 text-foreground">
                  <Award className="w-6 h-6 text-accent" />
                  Certifications
                </h3>
                <div className="space-y-4">
                  {[
                    { title: "Machine Learning Specialization", org: "Stanford / DeepLearning.AI", date: "July 2025" },
                    { title: "Generative AI with LLMs", org: "Coursera", date: "October 2023" },
                    { title: "Dynamic Programming, Greedy Algorithms", org: "Univ. of Colorado Boulder", date: "October 2023" },
                    { title: "Google Cybersecurity", org: "Google", date: "August 2022" }
                  ].map((cert, i) => (
                    <div key={i} className="p-5 border border-border/50 rounded bg-card hover:border-accent/40 transition-colors flex gap-4 items-start">
                      <Award className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-foreground">{cert.title}</h4>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1"><span className="text-accent/50">@</span> {cert.org}</span>
                          <span className="font-mono text-xs self-center bg-muted px-2 py-0.5 rounded">{cert.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* FOOTER / CONTACT */}
        <section className="py-24 border-t border-border/30 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsla(var(--primary)/0.05)_0%,transparent_70%)] pointer-events-none" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <div className="font-mono text-primary mb-4">06. What's Next?</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-10 text-lg font-light">
              I'm currently looking for new opportunities in Machine Learning and Full-Stack development. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <a 
              href="mailto:booramyashwanth@gmail.com" 
              className="inline-flex items-center justify-center h-14 px-8 font-mono border border-primary text-primary hover:bg-primary/10 transition-colors rounded-md"
              data-testid="btn-contact"
            >
              Say Hello
            </a>

            <div className="mt-32 pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground font-mono">
              <div className="flex gap-6">
                <a href="https://github.com/yashwanthbooram" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">GitHub</a>
                <a href="https://linkedin.com/in/yashwanthbooram" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
              </div>
              <div>
                Designed & Built by Yashwanth Booram
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
