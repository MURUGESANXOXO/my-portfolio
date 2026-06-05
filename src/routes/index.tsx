import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Cpu, Code2, Radio, Mail, Github, Linkedin, MessageCircle, Download,
  ChevronDown, Zap, CircuitBoard, Camera, Wrench, Award, GraduationCap,
  ArrowUpRight, Sparkles, FileText, BookOpen, Users, Briefcase, Eye,
  Activity, Shield, Music, Antenna, Car, QrCode, FlaskConical, HeartPulse, Target,
  ChevronLeft, ChevronRight, Menu, X,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profileImage from "@/assets/profile.png";
import traffic1 from "@/assets/projects/trafficimage1.png";
import traffic2 from "@/assets/projects/traffic image2.png";
import traffic3 from "@/assets/projects/trafficeimage3.png";
import iot1 from "@/assets/projects/iot1.png";
import iot2 from "@/assets/projects/iot2 (2).jpg";
import iot3 from "@/assets/projects/iot3.jpg";
import antenna1 from "@/assets/projects/antenna1.png";
import antenna2 from "@/assets/projects/antenna2.jpg";
import drowsy1 from "@/assets/projects/drowsy1.png";
import am1 from "@/assets/projects/am1.png";
import am2 from "@/assets/projects/am2 (2).png";
import abc from "@/assets/projects/abc.png";
import over1 from "@/assets/projects/over1.png";
import cap1 from "@/assets/projects/cap1.png";
import cap2 from "@/assets/projects/cap2.png";



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
  { year: "2024", title: "Embedded Systems & Hardware", desc: "Built hardware projects — Worked in various projects invloving signal and image processing , Iot and cloud networks, Analog circuits & design ,PCB Designing , Matlab Projects and more." },
  { year: "2025", title: "Leadership & Experience ", desc: "MEdia Specialaist @ QUANTUMIT_Club -Expert in Editing , Direction , Content Curation ,Media management ." },
  { year: "2026", title: "ME and @ARANERI", desc: "Digital Marketing & Media Specialist @ ARANERI #Startup driven by passionate engineering students ." },
];

type ProjectItem = {
  title: string; tag: string; desc: string;
  icon: typeof Car; accent: string; images?: string[];
};
const PROJECTS: ProjectItem[] = [
  { title: "Traffic Surveillance System", tag: "MATLAB · YOLOv8 · Kalman Filter", desc: "Real-time vehicle detection, lane analysis, tracking, and overspeed violation alerts.", icon: Car, accent: "from-cyan-500 to-blue-600", images: [traffic1,traffic2,traffic3] },
  { title: "IoT Digital Letter Tracking", tag: "ESP32 · Flask · PostgreSQL", desc: "QR-based workflow tracking with role-based dashboards and real-time document monitoring.", icon: QrCode, accent: "from-violet-500 to-purple-600", images: [iot1,iot2,iot3] },
  { title: "Driver Drowsiness Detection", tag: "Embedded Systems · IR Sensors", desc: "Eye-closure monitoring with alarms, braking control, and LED safety alerts.", icon: Eye, accent: "from-amber-500 to-orange-600", images: [drowsy1] },
  { title: "Wrist Pulse Classification", tag: "Arduino · Sensors · Python · ML", desc: "Wearable multi-sensor pulse acquisition with ML-based Vata, Pitta, Kapha dosha classification.", icon: Activity, accent: "from-rose-500 to-pink-600", images: [cap1,cap2] },
  { title: "Overvoltage Protection System", tag: "Hardware · Sensors · Relays", desc: "Surge detection, automatic recovery, temperature sensing, and fire hazard alerts.", icon: Shield, accent: "from-red-500 to-orange-600", images: [over1] },
  { title: "Multichannel Audio Streaming", tag: "Signal Processing", desc: "Audio multiplexing and companding for efficient transmission and reconstruction.", icon: Music, accent: "from-teal-500 to-emerald-600", images: [abc] },
  { title: "AM Modulation PCB Design", tag: "PCB Layout · FOSSEE eSim", desc: "Simulation, PCB design, and communication system implementation for base stations.", icon: CircuitBoard, accent: "from-indigo-500 to-blue-600", images: [am1,am2] },
  { title: "Vivaldi Antenna Design", tag: "Antenna Engineering · CST Studio", desc: "Design and analysis of high-frequency Vivaldi antenna — 5.22 dBi directivity at 45 GHz.", icon: Antenna, accent: "from-fuchsia-500 to-violet-600", images: [antenna1,antenna2] },
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
  { title: "RISC-V on FPGA: Application and Porting", issuer: "IEEE Student Branch MIT & Anna University" },
  { title: "Quantum Computing and Quantum Simulation Workshop", issuer: "QuantumIT, MIT Campus, Anna University" },
];

const RESEARCH_OBJECTIVES = [
  "Real-time pulse acquisition",
  "Multi-channel physiological signal analysis",
  "Machine learning based classification",
  "Wearable healthcare monitoring",
  "Dataset creation and validation",
  "Embedded healthcare technology development",
];

const RESEARCH_TECH = [
  "Arduino", "Python", "Machine Learning", "Signal Processing",
  "Optical Sensors", "Embedded Systems", "Data Analysis",
];

const RESEARCH_PROGRESS = [
  { phase: "Phase 01", title: "Hardware Prototyping", desc: "Arduino-based multi-sensor pulse acquisition circuit with optical sensors.", status: "completed" },
  { phase: "Phase 02", title: "Signal Acquisition", desc: "Real-time waveform capture and noise filtering across multiple channels.", status: "completed" },
  { phase: "Phase 03", title: "Dataset Building", desc: "Curating labeled Vata, Pitta, Kapha pulse datasets for ML training.", status: "active" },
  { phase: "Phase 04", title: "ML Classification", desc: "Training and tuning classification models for dosha identification.", status: "active" },
  { phase: "Phase 05", title: "Wearable Integration", desc: "Compact wearable form-factor with on-device inference and alerts.", status: "upcoming" },
];
const RESEARCH_IMAGES = [
  cap1,
  cap2,
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

function ProjectCarousel({ images, icon: Icon, accent, index, title }: { images: string[]; icon: any; accent: string; index: number; title: string }) {
  const [i, setI] = useState(0);
  const touchX = useRef<number | null>(null);
  const has = images.length > 0;
  const count = images.length;

  const go = (n: number) => setI((p) => (n + count) % count);
  const prev = () => go(i - 1);
  const next = () => go(i + 1);

  const onTouchStart = (e: React.TouchEvent) => { touchX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 40) (dx < 0 ? next : prev)();
    touchX.current = null;
  };

  return (
    
      <div
  className={`relative overflow-hidden ${has ? "h-72 sm:h-80 lg:h-96 bg-black/60" : `h-32 bg-gradient-to-br ${accent}`}`}
      onTouchStart={has ? onTouchStart : undefined}
      onTouchEnd={has ? onTouchEnd : undefined}
    >
      {has ? (
        <>
          <div
            className="flex h-full w-full transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${i * 100}%)` }}
          >
            {images.map((src, idx) => (
                <div key={idx} className="relative h-full w-full shrink-0 overflow-hidden bg-black">
                <img
                         src={src}
                                alt={`${title} — image ${idx + 1}`}
                                             loading="lazy"
                                    className="h-full w-full object-contain bg-black transition-transform duration-700 group-hover:scale-105"
/>
              </div>
            ))}
          </div>

          {count > 1 && (
            <>
              <button
                type="button"
                onClick={prev}
                aria-label="Previous image"
                className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-card/60 backdrop-blur-md border border-white/10 text-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-primary hover:text-primary-foreground transition"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next image"
                className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-card/60 backdrop-blur-md border border-white/10 text-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-primary hover:text-primary-foreground transition"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setI(idx)}
                    aria-label={`Go to image ${idx + 1}`}
                    className={`h-1.5 rounded-full transition-all ${idx === i ? "w-5 bg-primary" : "w-1.5 bg-white/40 hover:bg-white/70"}`}
                  />
                ))}
              </div>
            </>
          )}
        </>
      ) : (
        <>
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Icon className="w-16 h-16 text-white/90 group-hover:scale-110 transition-transform duration-500" />
          </div>
        </>
      )}
      <span className="absolute top-3 right-3 text-xs font-mono text-white/90 bg-black/40 backdrop-blur-md border border-white/10 px-2 py-1 rounded">
        0{index + 1}
      </span>
    </div>
  );
}


function ResearchCarousel() {
  const [current, setCurrent] = useState(0);

  const next = () =>
    setCurrent((prev) => (prev + 1) % RESEARCH_IMAGES.length);

  const prev = () =>
    setCurrent(
      (prev) => (prev - 1 + RESEARCH_IMAGES.length) % RESEARCH_IMAGES.length
    );

  return (
    <div className="relative h-[450px] rounded-2xl overflow-hidden border border-primary/30 bg-black">
      <img
        src={RESEARCH_IMAGES[current]}
        alt="Research Project"
        className="w-full h-full object-contain bg-black"
      />

      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur text-white"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur text-white"
      >
        <ChevronRight />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {RESEARCH_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full ${
              current === i
                ? "w-6 bg-cyan-400"
                : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}


function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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

  <button
    onClick={() => scrollTo("hero")}
    className="font-mono text-sm font-bold text-gradient"
  >
    &lt;MURUGESAN/&gt;
  </button>

  {/* Desktop Navigation */}
  <ul className="hidden md:flex items-center gap-7 text-sm">
    {NAV.map((n) => (
      <li key={n.id}>
        <button
          onClick={() => scrollTo(n.id)}
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          {n.label}
        </button>
      </li>
    ))}
  </ul>

  <div className="flex items-center gap-3">

    {/* Mobile Menu Button */}
    <button
      className="md:hidden"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      {menuOpen ? (
        <X className="w-6 h-6" />
      ) : (
        <Menu className="w-6 h-6" />
      )}
    </button>

    {/* Desktop Resume Button */}
    <a
      href="/resume.pdf"
      download
      className="hidden md:inline-flex items-center gap-2 text-sm bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full font-medium hover:opacity-90 transition"
    >
      Resume <Download className="w-4 h-4" />
    </a>

  </div>

</nav>

{menuOpen && (
  <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border">
    {NAV.map((n) => (
      <button
        key={n.id}
        onClick={() => {
          scrollTo(n.id);
          setMenuOpen(false);
        }}
        className="block w-full text-left px-6 py-4 hover:text-primary"
      >
        {n.label}
      </button>
    ))}

    <a
      href="/resume.pdf"
      download
      className="block px-6 py-4 text-primary font-medium"
    >
      Resume
    </a>
  </div>
)}
          
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
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 w-full grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-12 items-center">
          <div className="lg:col-start-1 lg:row-start-1 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/60 border border-border backdrop-blur-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-mono text-muted-foreground">AVAILABLE FOR OPPORTUNITIES</span>
            </div>
            <p className="font-mono text-sm text-primary mb-4">Hi, I'm</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[0.95]">
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
                { v: 6, suffix: "", l: "Certifications" },
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

          {/* Profile photo */}
          <div className="order-1 lg:order-2 lg:col-start-2 lg:row-start-1 flex justify-center lg:justify-end animate-float">
            <div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] lg:w-[360px] lg:h-[360px] xl:w-[400px] xl:h-[400px]">
              {/* Neon glow */}
              <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-primary/40 via-accent/30 to-primary/40 blur-3xl opacity-80" />
              {/* Glass card behind */}
              <div className="absolute -inset-4 rounded-full bg-card/30 backdrop-blur-xl border border-white/10 shadow-card" />
              {/* Rotating gradient ring */}
              <div className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-tr from-primary via-accent to-primary glow-primary">
                <div className="w-full h-full rounded-full overflow-hidden bg-card ring-1 ring-white/10">
                  <img
                      src={profileImage}
                        alt="Murugesan M"
                          className="w-full h-full object-cover"
                                        width={400}
                                 height={400}
                                 />
                </div>
              </div>
              {/* Floating accent dots */}
              <div className="absolute -top-2 right-6 w-3 h-3 rounded-full bg-primary glow-primary" />
              <div className="absolute bottom-4 -left-2 w-2 h-2 rounded-full bg-accent glow-accent" />
            </div>
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
                <GlassCard icon={Camera} title="Media & Marketing Specialist— @ Araneri">
                  <p className="text-sm text-muted-foreground">
                    End-to-end digital marketing, social media, video editing, and creative direction for clients.
                  </p>
                </GlassCard>
                <GlassCard icon={Users} title="Social Media Manager — QuantumIT Club">
                          <p className="text-sm text-muted-foreground">
                            Managing the club's social media presence, creating technical content, promoting events, designing campaigns, and increasing student engagement through digital platforms.
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
              <h2 className="text-4xl md:text-5xl font-bold">Project works.</h2>
              <p className="text-muted-foreground max-w-md">From embedded hardware to ML-driven systems — projects spanning detection, IoT, RF, antenna design, and signal processing.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {PROJECTS.map((p, i) => (
                <article key={p.title} className="group relative bg-card/60 backdrop-blur-sm border border-border rounded-2xl overflow-hidden shadow-card hover:border-primary/50 transition-all hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]">
                  <ProjectCarousel images={p.images ?? []} icon={p.icon} accent={p.accent} index={i} title={p.title} />
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
                <div className="font-bold">1. Runner-Up — Q-Debate, Chakravyuha'25</div>
                <div className="font-bold">2. Completed 5km marathon as a cleanliness awareness #SWATCH BHARAT</div>
          

              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* RESEARCH */}
      <Reveal>
        <section id="research" className="py-24 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <SectionLabel icon={BookOpen} label="05 / CAPSTONE PROJECT" />
            <div className="mt-8 flex flex-wrap items-end justify-between gap-4">
              <h2 className="text-4xl md:text-5xl font-bold">Capstone Research work.</h2>
              <p className="text-muted-foreground max-w-md">My most advanced ongoing project — bridging biomedical signal processing, embedded hardware, and machine learning.</p>
            </div>

            {/* Flagship Research Card */}
            <div className="relative mt-12 rounded-3xl overflow-hidden border border-primary/30 bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-xl shadow-[0_20px_80px_-20px_rgba(0,0,0,0.5)]">
              {/* Decorative bg */}
              <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
              <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-accent/20 blur-3xl pointer-events-none" />

              <div className="relative p-8 md:p-12">
                {/* Badges */}
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-primary text-primary-foreground text-xs font-mono font-semibold glow-primary">
                    <Sparkles className="w-3.5 h-3.5" /> CURRENT RESEARCH PROJECT
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/80 border border-primary/40 text-xs font-mono text-primary">
                    <span className="relative flex w-2 h-2">
                      <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                      <span className="relative rounded-full w-2 h-2 bg-primary" />
                    </span>
                    Ongoing R&amp;D
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/60 border border-border text-xs font-mono text-muted-foreground">
                    <FlaskConical className="w-3.5 h-3.5" /> FLAGSHIP
                  </span>
                </div>

                <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
                  <div className="lg:col-span-3 space-y-6">
                    <div>
                      <div className="text-xs font-mono text-primary mb-2 tracking-widest">PROJECT TITLE</div>
                      <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                        Wrist Pulse Signal Classification for{" "}
                        <span className="text-gradient">Vata, Pitta, Kapha</span> Detection
                      </h3>
                    </div>

                    <div>
                      <div className="text-xs font-mono text-primary mb-2 tracking-widest">DOMAIN</div>
                      <div className="flex flex-wrap gap-2">
                        {["Biomedical Signal Processing", "Embedded Systems", "Machine Learning", "Healthcare Technology"].map((d) => (
                          <span key={d} className="text-xs px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/30 text-primary font-mono">
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="text-xs font-mono text-primary mb-2 tracking-widest">DESCRIPTION</div>
                      <p className="text-base text-foreground/85 leading-relaxed">
                        Developing a wearable multi-sensor pulse acquisition system using Arduino, optical sensors, and machine learning techniques to classify Vata, Pitta, and Kapha characteristics from physiological pulse waveforms. The project combines embedded hardware, signal processing, sensor interfacing, and AI-based classification to create an intelligent healthcare monitoring solution.
                      </p>
                    </div>

                    <div>
                      <div className="text-xs font-mono text-primary mb-3 tracking-widest">TECHNOLOGIES</div>
                      <div className="flex flex-wrap gap-2">
                        {RESEARCH_TECH.map((t, i) => (
                          <span
                            key={t}
                            className="text-xs px-3 py-1.5 rounded-full bg-card/80 border border-border text-foreground/80 hover:border-primary hover:text-primary hover:-translate-y-0.5 transition-all backdrop-blur-sm"
                            style={{ animation: `float 4s ease-in-out ${i * 0.25}s infinite` }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-2 space-y-4">
                   <ResearchCarousel />
                

                    {/* Objectives */}
                    <div className="rounded-2xl bg-card/70 backdrop-blur-sm border border-border p-5">
                      <div className="text-xs font-mono text-primary mb-3 tracking-widest flex items-center gap-2">
                        <Target className="w-4 h-4" /> RESEARCH OBJECTIVES
                      </div>
                      <ul className="space-y-2">
                        {RESEARCH_OBJECTIVES.map((o) => (
                          <li key={o} className="flex items-start gap-2 text-sm text-foreground/80">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-primary shrink-0" />
                            <span>{o}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Research Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 pt-8 border-t border-border">
                  {[
                    { v: 3, suffix: "", l: "Dosha Classes", icon: Activity },
                    { v: 3, suffix: "+", l: "Sensor Channels", icon: CircuitBoard },
                    { v: 24, suffix: "/7", l: "Monitoring", icon: HeartPulse },
                  ].map((s) => (
                    <div key={s.l} className="text-center p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/40 transition-colors">
                      <s.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                      <div className="text-2xl md:text-3xl font-bold text-gradient">
                        <Counter end={s.v} suffix={s.suffix} />
                      </div>
                      <div className="text-[10px] font-mono text-muted-foreground mt-1 uppercase tracking-wider">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Research Progress Timeline */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="font-mono text-xs text-muted-foreground">RESEARCH PROGRESS</span>
                <span className="h-px flex-1 bg-border" />
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {RESEARCH_PROGRESS.map((p) => (
                  <div
                    key={p.phase}
                    className={`relative rounded-2xl p-5 border backdrop-blur-sm transition-all hover:-translate-y-1 ${
                      p.status === "completed"
                        ? "bg-primary/10 border-primary/40"
                        : p.status === "active"
                          ? "bg-gradient-to-br from-primary/15 to-accent/15 border-primary/60 glow-primary"
                          : "bg-card/50 border-border"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono text-primary tracking-widest">{p.phase}</span>
                      <span
                        className={`text-[9px] font-mono uppercase px-2 py-0.5 rounded-full ${
                          p.status === "completed"
                            ? "bg-primary/20 text-primary"
                            : p.status === "active"
                              ? "bg-accent/20 text-accent"
                              : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {p.status}
                      </span>
                    </div>
                    <h4 className="font-bold text-sm mb-2">{p.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                    {p.status === "active" && (
                      <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-accent animate-ping" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <h3 className="text-2xl font-bold mt-20 mb-8 flex items-center gap-3">
              <span className="font-mono text-xs text-muted-foreground">CERTIFICATIONS</span>
              <span className="h-px flex-1 bg-border" />
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
