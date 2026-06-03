import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Cpu, Code2, Radio, Mail, Github, Linkedin, Instagram, MessageCircle,
  ChevronDown, Zap, CircuitBoard, Camera, Wrench, Award, GraduationCap,
  ArrowUpRight, Sparkles,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Murugesan M — Electronics Engineer & Embedded Systems Enthusiast" },
      { name: "description", content: "Portfolio of Murugesan M — Electronics & Communication Engineer, Embedded Systems, IoT, and Media & Marketing Specialist." },
      { property: "og:title", content: "Murugesan M — Portfolio" },
      { property: "og:description", content: "Bridging engineering and creativity through electronics, design, and digital innovation." },
    ],
  }),
  component: Portfolio,
});

const NAV = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const PROJECTS = [
  { title: "Traffic Surveillance System", tag: "MATLAB · YOLOv8", desc: "Real-time vehicle detection, lane analysis, and overspeed violation alerts using YOLOv8 and Kalman Filter.", icon: Radio },
  { title: "IoT Digital Letter Tracking", tag: "Flask · ESP32 · PostgreSQL", desc: "QR-based IoT workflow tracking with role-based dashboards and real-time document status monitoring.", icon: CircuitBoard },
  { title: "Driver Drowsiness Detection", tag: "IR Sensors · Embedded C", desc: "Driver safety system using IR sensors for eye-closure monitoring with alarms, braking control, and LED alerts.", icon: Zap },
  { title: "Wrist Pulse Classification", tag: "Arduino · ML · Python", desc: "Wearable multi-sensor pulse acquisition with ML-based Vata, Pitta, Kapha dosha classification.", icon: Cpu },
  { title: "Overvoltage Protection System", tag: "Hardware · Sensors", desc: "Automatic surge protection and recovery with temperature sensing, relays, and fire hazard alert mechanisms.", icon: Zap },
  { title: "Multichannel Audio Streaming", tag: "Signal Processing", desc: "Audio multiplexing and companding techniques for efficient multi-signal transmission and reconstruction.", icon: Radio },
  { title: "AM Modulation PCB", tag: "FOSSEE eSim · PCB", desc: "Designed and simulated an AM modulation PCB used in base station communication systems.", icon: CircuitBoard },
  { title: "Vivaldi Antenna Design", tag: "CST Studio · RF", desc: "Vivaldi antenna with farfield directivity of 5.22 dBi at 45 GHz for high-frequency applications.", icon: Radio },
];

const TECH_SKILLS = [
  "Embedded Systems", "IoT Development", "PCB Design", "MATLAB", "Arduino / ESP32",
  "Signal Processing", "Communication Systems", "Python", "C / C++", "Verilog",
  "Sensors & Interfacing", "Hardware-Software Integration",
];

const CREATIVE_SKILLS = [
  "Digital Marketing", "Social Media", "Video Editing", "Content Creation",
  "Creative Direction", "Brand Strategy", "Leadership", "Public Speaking",
];

const TOOLS = [
  "VS Code", "MATLAB", "Simulink", "LTSpice", "Proteus", "Altium Designer",
  "Cisco Packet Tracer", "CST Studio", "Xilinx Vivado", "Cadence",
  "FOSSEE eSim", "Arduino IDE", "Canva Pro", "CapCut",
];

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
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border" : ""}`}>
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <button onClick={() => scrollTo("hero")} className="font-mono text-sm font-bold text-gradient">
            &lt;MURUGESAN/&gt;
          </button>
          <ul className="hidden md:flex items-center gap-8 text-sm">
            {NAV.map((n) => (
              <li key={n.id}>
                <button onClick={() => scrollTo(n.id)} className="text-muted-foreground hover:text-primary transition-colors">
                  {n.label}
                </button>
              </li>
            ))}
          </ul>
          <a href="mailto:murugesan2005sspl@gmail.com" className="hidden md:inline-flex items-center gap-2 text-sm bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full font-medium hover:opacity-90 transition">
            Hire Me <ArrowUpRight className="w-4 h-4" />
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-25" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-hero opacity-80" />
          <div className="absolute inset-0 grid-bg opacity-40" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 py-20 w-full">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/60 border border-border backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-mono text-muted-foreground">AVAILABLE FOR OPPORTUNITIES</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95]">
            Hi, I'm <span className="text-gradient">Murugesan M</span>
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-muted-foreground max-w-3xl">
            Aspiring Electronics Engineer · Embedded Systems Enthusiast · Media & Marketing Specialist
          </p>
          <p className="mt-4 text-base md:text-lg text-foreground/70 max-w-2xl">
            Electronics enthusiast turning ideas into intelligent engineering solutions with a creative edge in media, marketing, and content creation.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <button onClick={() => scrollTo("projects")} className="bg-gradient-primary text-primary-foreground px-6 py-3 rounded-full font-medium inline-flex items-center gap-2 glow-primary hover:scale-105 transition-transform">
              <Sparkles className="w-4 h-4" /> View My Work
            </button>
            <button onClick={() => scrollTo("contact")} className="border border-border bg-card/40 backdrop-blur-sm px-6 py-3 rounded-full font-medium hover:bg-card/80 transition">
              Get in Touch
            </button>
          </div>
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { v: "8.16", l: "CGPA" },
              { v: "8+", l: "Projects" },
              { v: "12+", l: "Tools" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-3xl md:text-4xl font-bold text-gradient">{s.v}</div>
                <div className="text-xs font-mono text-muted-foreground mt-1 uppercase">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <ChevronDown className="absolute bottom-8 left-1/2 -translate-x-1/2 w-6 h-6 text-muted-foreground animate-bounce" />
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionLabel icon={Cpu} label="01 / ABOUT" />
          <div className="grid lg:grid-cols-5 gap-12 mt-8">
            <div className="lg:col-span-3 space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Bridging <span className="text-gradient">engineering</span> and <span className="text-gradient">creativity</span>.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm an Electronics and Communication Engineering student at Madras Institute of Technology, Anna University, passionate about embedded systems, IoT, signal processing, and hardware-software integration.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I transform theoretical engineering concepts into practical, real-world solutions — driven by curiosity, continuous learning, and emerging technologies.
              </p>
              <blockquote className="border-l-2 border-primary pl-6 italic text-foreground/90">
                "Transforming engineering ideas into intelligent real-world impact through technology, creativity, and innovation."
              </blockquote>
            </div>
            <div className="lg:col-span-2 space-y-4">
              <Card icon={GraduationCap} title="Education">
                <div className="text-sm">
                  <div className="font-semibold">B.E. Electronics & Communication</div>
                  <div className="text-muted-foreground">Madras Institute of Technology, Anna University</div>
                  <div className="text-muted-foreground mt-1">2023 – 2027 · CGPA 8.16</div>
                </div>
              </Card>
              <Card icon={Camera} title="Araneri">
                <p className="text-sm text-muted-foreground">
                  Digital Media Specialist — social media, video editing, content creation, creative direction & client management end-to-end.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24 px-6 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <SectionLabel icon={Code2} label="02 / SKILLS" />
          <h2 className="text-4xl md:text-5xl font-bold mt-8">My toolkit.</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <SkillBlock icon={CircuitBoard} title="Technical" items={TECH_SKILLS} />
            <SkillBlock icon={Sparkles} title="Creative" items={CREATIVE_SKILLS} />
            <SkillBlock icon={Wrench} title="Tools & Software" items={TOOLS} />
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionLabel icon={Zap} label="03 / PROJECTS" />
          <div className="flex flex-wrap items-end justify-between mt-8 gap-4">
            <h2 className="text-4xl md:text-5xl font-bold">Selected work.</h2>
            <p className="text-muted-foreground max-w-md">From embedded hardware to ML-driven systems — projects spanning detection, IoT, RF, and signal processing.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {PROJECTS.map((p, i) => (
              <article key={p.title} className="group relative bg-card border border-border rounded-2xl p-6 shadow-card hover:border-primary/50 transition-all hover:-translate-y-1">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center glow-primary">
                    <p.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">0{i + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-xs font-mono text-primary mb-3">{p.tag}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-24 px-6 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <SectionLabel icon={Award} label="04 / EXPERIENCE" />
          <h2 className="text-4xl md:text-5xl font-bold mt-8">Journey so far.</h2>
          <div className="mt-12 space-y-6">
            <TimelineItem
              date="Aug 2025"
              title="Event Lead & Social Media Manager"
              org="Quantumit Club · Chakravyuha'25, MIT Chennai"
              desc="Lead planning, coordination, logistics, team management, and public communication. Managing social media posts, videos, edits, publishing, and advertising."
            />
            <TimelineItem
              date="Present"
              title="Digital Media Specialist"
              org="Araneri"
              desc="Owning work end-to-end from cold outreach and client onboarding to content calendars, monthly reports, and campaign analytics."
            />
            <TimelineItem
              date="Present"
              title="Volunteer — National Service Scheme (NSS)"
              org="MIT, Chennai"
              desc="Community outreach, awareness rallies, and social initiatives."
            />
            <TimelineItem
              date="Workshops"
              title="RISC-V on FPGA · Embedded Validation · IIT Madras Lab Visit"
              org="RUSA · IEEE · MNNIT Allahabad"
              desc="Exposure to RISC-V architecture on VIVADO/FPGA, embedded systems calibration & validation for RADAR, Power control, Edge AI. PCB fabrication & modern testing equipment."
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-16">
            <Card icon={Award} title="Runner-Up — Q-Debate, Chakravyuha'25">
              <p className="text-sm text-muted-foreground">2nd place in technical debate: Classical vs Quantum Computing.</p>
            </Card>
            <Card icon={GraduationCap} title="Certifications">
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>· MATLAB Onramp & Linear Algebra — MathWorks</li>
                <li>· IEEE Webinar: FPGA-Based Sensing for IoT</li>
                <li>· NPTEL — Python for Data Science</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <SectionLabel icon={Mail} label="05 / CONTACT" className="justify-center" />
          <h2 className="text-4xl md:text-6xl font-bold mt-8">
            Let's build something <span className="text-gradient">intelligent</span>.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Open to collaborations on embedded systems, IoT projects, and creative content work. Drop a message.
          </p>
          <a
            href="mailto:murugesan2005sspl@gmail.com"
            className="mt-10 inline-flex items-center gap-3 bg-gradient-primary text-primary-foreground px-8 py-4 rounded-full font-medium glow-primary hover:scale-105 transition-transform"
          >
            <Mail className="w-5 h-5" /> murugesan2005sspl@gmail.com
          </a>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Social href="https://github.com/MURUGESANXOXO" icon={Github} label="GitHub" />
            <Social href="https://www.linkedin.com/in/murugesan-m01" icon={Linkedin} label="LinkedIn" />
            <Social href="https://www.instagram.com/muru_gesh_007" icon={Instagram} label="Instagram" />
            <Social href="https://wa.me/916369249571" icon={MessageCircle} label="WhatsApp" />
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8 px-6 text-center text-sm text-muted-foreground font-mono">
        © {new Date().getFullYear()} Murugesan M · Built with electrons & curiosity.
      </footer>
    </div>
  );
}

function SectionLabel({ icon: Icon, label, className = "" }: { icon: any; label: string; className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="w-10 h-10 rounded-lg border border-primary/40 bg-primary/10 flex items-center justify-center">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <span className="font-mono text-xs tracking-widest text-muted-foreground">{label}</span>
    </div>
  );
}

function Card({ icon: Icon, title, children }: { icon: any; title: string; children: React.ReactNode }) {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 shadow-card">
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
    <div className="bg-card border border-border rounded-2xl p-6 shadow-card h-full">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
          <Icon className="w-5 h-5 text-primary-foreground" />
        </div>
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((it) => (
          <span key={it} className="text-xs px-3 py-1.5 rounded-full bg-muted border border-border text-foreground/80 hover:border-primary/50 transition-colors">
            {it}
          </span>
        ))}
      </div>
    </div>
  );
}

function TimelineItem({ date, title, org, desc }: { date: string; title: string; org: string; desc: string }) {
  return (
    <div className="grid md:grid-cols-[140px_1fr] gap-4 md:gap-8 group">
      <div className="font-mono text-xs text-primary pt-1">{date}</div>
      <div className="border-l border-border pl-6 pb-6 relative">
        <span className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-gradient-primary glow-primary" />
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm text-primary mb-2">{org}</p>
        <p className="text-sm text-muted-foreground">{desc}</p>
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
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-all text-sm"
    >
      <Icon className="w-4 h-4" /> {label}
    </a>
  );
}
