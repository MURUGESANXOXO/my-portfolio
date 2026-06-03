import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Cpu, Code2, Radio, Mail, Github, Linkedin, MessageCircle, Download,
  ChevronDown, Zap, CircuitBoard, Camera, Wrench, Award, GraduationCap,
  ArrowUpRight, Sparkles, FileText, BookOpen, Users, Briefcase, Eye,
  Activity, Shield, Music, Antenna, Car, QrCode,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Murugesan M — Electronics, Embedded Systems & AI Portfolio" },
      { name: "description", content: "Portfolio of Murugesan M — ECE student specializing in Embedded Systems, IoT, Computer Vision, AI, Signal Processing & PCB Design." },
      { property: "og:title", content: "Murugesan M — Portfolio" },
      { property: "og:description", content: "Building intelligent systems through electronics, AI & innovation." },
    ],
  }),
  component: Portfolio,
});

const NAV = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "research", label: "Research" },
  { id: "contact", label: "Contact" },
];

const TIMELINE = [
  { year: "2023", title: "Joined MIT Chennai", desc: "Began B.E. in Electronics & Communication Engineering at Madras Institute of Technology, Anna University." },
  { year: "2024", title: "Embedded Systems & Hardware", desc: "Built hardware projects — Overvoltage Protection, Driver Drowsiness Detection, and PCB design fundamentals." },
  { year: "2025", title: "AI, Computer Vision & Signal Processing", desc: "Traffic Surveillance with YOLOv8, Wrist Pulse ML classification, multichannel audio optimization." },
  { year: "2026", title: "IoT & Leadership", desc: "IoT Digital Letter Tracking System, Quantumit Club leadership, and Araneri digital media work." },
];

const PROJECTS = [
  { title: "Traffic Surveillance System", tag: "MATLAB · YOLOv8 · Kalman Filter", desc: "Real-time vehicle detection, lane analysis, tracking, and overspeed violation alerts.", icon: Car, accent: "from-cyan-500 to-blue-600" },
  { title: "IoT Digital Letter Tracking", tag: "ESP32 · Flask · PostgreSQL", desc: "QR-based workflow tracking with role-based dashboards and real-time document monitoring.", icon: QrCode, accent: "from-violet-500 to-purple-600" },
  { title: "Driver Drowsiness Detection", tag: "Embedded Systems · IR Sensors", desc: "Eye-closure monitoring with alarms, braking control, and LED safety alerts.", icon: Eye, accent: "from-amber-500 to-orange-600" },
  { title: "Wrist Pulse Classification", tag: "Arduino · Sensors · Python · ML", desc: "Wearable multi-sensor pulse acquisition with ML-based Vata, Pitta, Kapha dosha classification.", icon: Activity, accent: "from-rose-500 to-pink-600" },
  { title: "Overvoltage Protection System", tag: "Hardware · Sensors · Relays", desc: "Surge detection, automatic recovery, temperature sensing, and fire hazard alerts.", icon: Shield, accent: "from-red-500 to-orange-600" },
  { title: "Multichannel Audio Streaming", tag: "Signal Processing", desc: "Audio multiplexing and companding for efficient transmission and reconstruction.", icon: Music, accent: "from-teal-500 to-emerald-600" },
  { title: "AM Modulation PCB Design", tag: "PCB Layout · FOSSEE eSim", desc: "Simulation, PCB design, and communication system implementation for base stations.", icon: CircuitBoard, accent: "from-indigo-500 to-blue-600" },
  { title: "Vivaldi Antenna Design", tag: "Antenna Engineering · CST Studio", desc: "Design and analysis of high-frequency Vivaldi antenna — 5.22 dBi directivity at 45 GHz.", icon: Antenna, accent: "from-fuchsia-500 to-violet-600" },
];

const TECH_SKILLS = [
  "Embedded Systems", "IoT Development", "Circuit Design", "PCB Designing", "MATLAB",
  "Signal Processing", "Communication Systems", "Hardware-Software Integration",
  "Sensors & Interfacing", "Troubleshooting & Debugging",
];
const PROGRAMMING = ["C", "C++", "Python", "MATLAB", "Verilog"];
const TOOLS = [
  "MATLAB", "Simulink", "VS Code", "LTSpice", "Proteus", "Altium Designer",
  "Cisco Packet Tracer", "CST Studio", "Cadence", "Xilinx Vivado", "Arduino IDE", "Google Colab",
];
const NON_TECH = [
  "Digital Marketing", "Social Media Management", "Video Editing",
  "Content Creation", "Creative Direction", "Leadership", "Public Speaking",
];

const CERTS = [
  { title: "MATLAB Onramp", issuer: "MathWorks" },
  { title: "MATLAB Linear Algebra", issuer: "MathWorks" },
  { title: "FPGA-Based Sensing for IoT", issuer: "IEEE Webinar" },
  { title: "Python for Data Science", issuer: "NPTEL" },
];

const RESEARCH = [
  { title: "IoT Enabled Letter Tracking System", desc: "Research on QR-driven document workflow automation using ESP32, Flask, and PostgreSQL — role-based dashboards for institutional letter tracking." },
  { title: "Smart Water Quality Monitoring System", desc: "Sensor-based real-time water quality assessment with IoT telemetry for parameters like pH, turbidity, and TDS." },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function Counter({ end, suffix = "", duration = 1500 }: { end: number; suffix?: string; duration?: number }) {
  const { ref, visible } = useReveal();
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!visible) return;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setVal(end * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible, end, duration]);
  const display = end % 1 !== 0 ? val.toFixed(2) : Math.round(val).toString();
  return <span ref={ref}>{display}{suffix}</span>;
}

function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "backdrop-blur-xl bg-background/60 border-b border-border/60" : ""}`}>
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <button onClick={() => scrollTo("hero")} className="font-mono text-sm font-bold text-gradient">
            &lt;MURUGESAN/&gt;
          </button>
          <ul className="hidden md:flex items-center gap-7 text-sm">
            {NAV.map((n) => (
              <li key={n.id}>
                <button onClick={() => scrollTo(n.id)} className="text-muted-foreground hover:text-primary transition-colors">
                  {n.label}
                </button>
              </li>
            ))}
          </ul>
          <a href="/resume.pdf" download className="hidden md:inline-flex items-center gap-2 text-sm bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full font-medium hover:opacity-90 transition">
            Resume <Download className="w-4 h-4" />
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-12">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-25" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-hero opacity-80" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="absolute top-1/3 -left-20 w-72 h-72 rounded-full bg-primary/20 blur-3xl animate-float" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-accent/20 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 w-full">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/60 border border-border backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-mono text-muted-foreground">AVAILABLE FOR OPPORTUNITIES</span>
          </div>
          <p className="font-mono text-sm text-primary mb-4">Hi, I'm</p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95]">
            <span className="text-gradient">Murugesan M</span>
          </h1>
          <h2 className="mt-6 text-2xl md:text-4xl font-bold text-foreground/90 max-w-4xl leading-tight">
            Building Intelligent Systems Through <span className="text-gradient">Electronics, AI & Innovation</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-3xl">
            Final Year Electronics &amp; Communication Engineering Student · Embedded Systems Enthusiast · IoT Developer · Digital Media Specialist
          </p>
          <p className="mt-4 text-sm md:text-base text-foreground/70 max-w-2xl">
            Passionate about transforming engineering ideas into intelligent real-world solutions through electronics, embedded systems, AI, signal processing, and creative innovation.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="/resume.pdf" download className="bg-gradient-primary text-primary-foreground px-5 py-3 rounded-full font-medium inline-flex items-center gap-2 glow-primary hover:scale-105 transition-transform">
              <Download className="w-4 h-4" /> Download Resume
            </a>
            <button onClick={() => scrollTo("projects")} className="border border-border bg-card/50 backdrop-blur-sm px-5 py-3 rounded-full font-medium hover:bg-card transition inline-flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> View Projects
            </button>
            <a href="https://github.com/MURUGESANXOXO" target="_blank" rel="noreferrer" className="border border-border bg-card/50 backdrop-blur-sm px-5 py-3 rounded-full font-medium hover:bg-card transition inline-flex items-center gap-2">
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/murugesan-m01" target="_blank" rel="noreferrer" className="border border-border bg-card/50 backdrop-blur-sm px-5 py-3 rounded-full font-medium hover:bg-card transition inline-flex items-center gap-2">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            <button onClick={() => scrollTo("contact")} className="border border-border bg-card/50 backdrop-blur-sm px-5 py-3 rounded-full font-medium hover:bg-card transition inline-flex items-center gap-2">
              <Mail className="w-4 h-4" /> Contact Me
            </button>
          </div>
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
            {[
              { v: 8.16, suffix: "/10", l: "CGPA" },
              { v: 8, suffix: "+", l: "Projects" },
              { v: 12, suffix: "+", l: "Tools" },
              { v: 4, suffix: "", l: "Certifications" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-3xl md:text-4xl font-bold text-gradient">
                  <Counter end={s.v} suffix={s.suffix} />
                </div>
                <div className="text-xs font-mono text-muted-foreground mt-1 uppercase">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <ChevronDown className="absolute bottom-6 left-1/2 -translate-x-1/2 w-6 h-6 text-muted-foreground animate-bounce" />
      </section>

      {/* ABOUT */}
      <Reveal>
        <section id="about" className="py-24 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <SectionLabel icon={Cpu} label="01 / ABOUT" />
            <div className="grid lg:grid-cols-5 gap-12 mt-8">
              <div className="lg:col-span-3 space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  Bridging <span className="text-gradient">engineering</span> and <span className="text-gradient">innovation</span>.
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I am an Electronics and Communication Engineering student passionate about electronics, embedded systems, communication technologies, and innovation. I enjoy transforming theoretical engineering concepts into practical real-world solutions through IoT, AI, embedded systems, signal processing, and hardware-software integration.
                </p>
                <blockquote className="border-l-2 border-primary pl-6 italic text-foreground/90">
                  "Transforming engineering ideas into intelligent real-world impact through technology, creativity, and innovation."
                </blockquote>
              </div>
              <div className="lg:col-span-2 space-y-4">
                <GlassCard icon={GraduationCap} title="Education">
                  <div className="text-sm space-y-1">
                    <div className="font-semibold">B.E. Electronics &amp; Communication Engineering</div>
                    <div className="text-muted-foreground">Madras Institute of Technology, Anna University</div>
                    <div className="text-muted-foreground">Graduation Year: 2027</div>
                    <div className="mt-2 inline-flex items-center gap-2 text-primary font-mono text-sm">
                      <Award className="w-4 h-4" /> CGPA 8.16/10
                    </div>
                  </div>
                </GlassCard>
                <GlassCard icon={Camera} title="Digital Media — Araneri">
                  <p className="text-sm text-muted-foreground">
                    End-to-end digital marketing, social media, video editing, and creative direction for clients.
                  </p>
                </GlassCard>
              </div>
            </div>

            {/* Timeline */}
            <div className="mt-20">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="font-mono text-xs text-muted-foreground">JOURNEY</span>
                <span className="h-px flex-1 bg-border" />
              </h3>
              <div className="grid md:grid-cols-4 gap-4">
                {TIMELINE.map((t, i) => (
                  <div key={t.year} className="relative bg-card/60 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/50 transition-all hover:-translate-y-1">
                    <div className="absolute -top-3 left-6 font-mono text-xs bg-gradient-primary text-primary-foreground px-3 py-1 rounded-full">
                      {t.year}
                    </div>
                    <div className="text-xs font-mono text-primary mb-2">STEP 0{i + 1}</div>
                    <h4 className="font-bold mb-2">{t.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* SKILLS */}
      <Reveal>
        <section id="skills" className="py-24 px-4 sm:px-6 bg-card/30">
          <div className="max-w-6xl mx-auto">
            <SectionLabel icon={Code2} label="02 / SKILLS" />
            <h2 className="text-4xl md:text-5xl font-bold mt-8">My toolkit.</h2>
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <SkillBlock icon={CircuitBoard} title="Technical Skills" items={TECH_SKILLS} />
              <SkillBlock icon={Code2} title="Programming" items={PROGRAMMING} />
              <SkillBlock icon={Wrench} title="Tools & Software" items={TOOLS} />
              <SkillBlock icon={Sparkles} title="Non-Technical Skills" items={NON_TECH} />
            </div>
          </div>
        </section>
      </Reveal>

      {/* PROJECTS */}
      <Reveal>
        <section id="projects" className="py-24 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <SectionLabel icon={Zap} label="03 / PROJECTS" />
            <div className="flex flex-wrap items-end justify-between mt-8 gap-4">
              <h2 className="text-4xl md:text-5xl font-bold">Selected work.</h2>
              <p className="text-muted-foreground max-w-md">From embedded hardware to ML-driven systems — projects spanning detection, IoT, RF, antenna design, and signal processing.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {PROJECTS.map((p, i) => (
                <article key={p.title} className="group relative bg-card/60 backdrop-blur-sm border border-border rounded-2xl overflow-hidden shadow-card hover:border-primary/50 transition-all hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]">
                  <div className={`relative h-32 bg-gradient-to-br ${p.accent} overflow-hidden`}>
                    <div className="absolute inset-0 grid-bg opacity-30" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p.icon className="w-16 h-16 text-white/90 group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <span className="absolute top-3 right-3 text-xs font-mono text-white/80 bg-black/30 backdrop-blur-sm px-2 py-1 rounded">
                      0{i + 1}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2">{p.title}</h3>
                    <p className="text-xs font-mono text-primary mb-3">{p.tag}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* EXPERIENCE / LEADERSHIP */}
      <Reveal>
        <section id="experience" className="py-24 px-4 sm:px-6 bg-card/30">
          <div className="max-w-6xl mx-auto">
            <SectionLabel icon={Briefcase} label="04 / LEADERSHIP & EXPERIENCE" />
            <h2 className="text-4xl md:text-5xl font-bold mt-8">Where I've led.</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <GlassCard icon={Camera} title="Digital Media Specialist — Araneri">
                <ul className="text-sm text-muted-foreground space-y-1.5 mt-2">
                  <li>· Digital Marketing</li>
                  <li>· Social Media Management</li>
                  <li>· Video Editing</li>
                  <li>· Content Creation</li>
                  <li>· Creative Direction</li>
                  <li>· Campaign Analytics</li>
                </ul>
              </GlassCard>
              <GlassCard icon={Users} title="Quantumit Club — MIT Chennai">
                <p className="text-xs text-primary font-mono mb-2">Event Lead & Social Media Manager</p>
                <ul className="text-sm text-muted-foreground space-y-1.5">
                  <li>· Event planning</li>
                  <li>· Team management</li>
                  <li>· Public communication</li>
                  <li>· Technical event promotion</li>
                </ul>
              </GlassCard>
              <GlassCard icon={Award} title="National Service Scheme (NSS)">
                <p className="text-xs text-primary font-mono mb-2">Volunteer</p>
                <p className="text-sm text-muted-foreground">
                  Community outreach, awareness rallies, and social initiatives at MIT Chennai.
                </p>
              </GlassCard>
            </div>

            {/* Achievements */}
            <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 backdrop-blur-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0 glow-primary">
                <Award className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <div className="text-xs font-mono text-primary">ACHIEVEMENT</div>
                <div className="font-bold">Runner-Up — Q-Debate, Chakravyuha'25</div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* RESEARCH */}
      <Reveal>
        <section id="research" className="py-24 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <SectionLabel icon={BookOpen} label="05 / RESEARCH & PUBLICATIONS" />
            <h2 className="text-4xl md:text-5xl font-bold mt-8">Research showcase.</h2>
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              {RESEARCH.map((r) => (
                <div key={r.title} className="relative bg-card/60 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-primary/50 transition-all hover:-translate-y-1 group">
                  <FileText className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">{r.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                  <ArrowUpRight className="absolute top-6 right-6 w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:rotate-12 transition-all" />
                </div>
              ))}
            </div>

            {/* Certifications */}
            <h3 className="text-2xl font-bold mt-20 mb-8 flex items-center gap-3">
              <span className="font-mono text-xs text-muted-foreground">CERTIFICATIONS</span>
              <span className="h-px flex-1 bg-border" />
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {CERTS.map((c) => (
                <div key={c.title} className="bg-card/60 backdrop-blur-sm border border-border rounded-xl p-5 hover:border-primary/50 transition-all hover:-translate-y-1">
                  <GraduationCap className="w-6 h-6 text-primary mb-3" />
                  <div className="font-semibold text-sm">{c.title}</div>
                  <div className="text-xs text-muted-foreground font-mono mt-1">{c.issuer}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* CONTACT */}
      <Reveal>
        <section id="contact" className="py-24 px-4 sm:px-6 bg-card/30">
          <div className="max-w-4xl mx-auto text-center">
            <SectionLabel icon={Mail} label="06 / CONTACT" className="justify-center" />
            <h2 className="text-4xl md:text-6xl font-bold mt-8">
              Let's build something <span className="text-gradient">intelligent</span>.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Open to collaborations on embedded systems, IoT, AI projects, and creative content work. Drop a message.
            </p>
            <a
              href="mailto:murugesan2005sspl@gmail.com"
              className="mt-10 inline-flex items-center gap-3 bg-gradient-primary text-primary-foreground px-8 py-4 rounded-full font-medium glow-primary hover:scale-105 transition-transform"
            >
              <Mail className="w-5 h-5" />murugesan2005sspl@gmail.com
            </a>
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              <Social href="https://github.com/MURUGESANXOXO" icon={Github} label="MURUGESANXOXO" />
              <Social href="https://www.linkedin.com/in/murugesan-m01" icon={Linkedin} label="murugesan-m01" />
              <Social href="https://wa.me/916369249571" icon={MessageCircle} label="+91 6369249571" />
            </div>
          </div>
        </section>
      </Reveal>

      <footer className="border-t border-border py-8 px-6 text-center text-sm text-muted-foreground font-mono">
        © {new Date().getFullYear()} Murugesan M · Built with electrons &amp; curiosity.
      </footer>
    </div>
  );
}

function Reveal({ children }: { children: React.ReactNode }) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      {children}
    </div>
  );
}

function SectionLabel({ icon: Icon, label, className = "" }: { icon: any; label: string; className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="w-10 h-10 rounded-lg border border-primary/40 bg-primary/10 flex items-center justify-center backdrop-blur-sm">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <span className="font-mono text-xs tracking-widest text-muted-foreground">{label}</span>
    </div>
  );
}

function GlassCard({ icon: Icon, title, children }: { icon: any; title: string; children: React.ReactNode }) {
  return (
    <div className="bg-card/60 backdrop-blur-sm border border-border rounded-2xl p-6 shadow-card hover:border-primary/40 transition-colors">
      <div className="flex items-center gap-3 mb-3">
        <Icon className="w-5 h-5 text-primary" />
        <h3 className="font-semibold">{title}</h3>
      </div>
      {children}
    </div>
  );
}

function SkillBlock({ icon: Icon, title, items }: { icon: any; title: string; items: string[] }) {
  return (
    <div className="bg-card/60 backdrop-blur-sm border border-border rounded-2xl p-6 shadow-card h-full hover:border-primary/40 transition-colors">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
          <Icon className="w-5 h-5 text-primary-foreground" />
        </div>
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((it) => (
          <span key={it} className="text-xs px-3 py-1.5 rounded-full bg-muted/70 border border-border text-foreground/80 hover:border-primary/50 hover:text-primary transition-colors">
            {it}
          </span>
        ))}
      </div>
    </div>
  );
}

function Social({ href, icon: Icon, label }: { href: string; icon: any; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card/60 backdrop-blur-sm border border-border hover:border-primary hover:text-primary transition-all text-sm"
    >
      <Icon className="w-4 h-4" /> {label}
    </a>
  );
}
