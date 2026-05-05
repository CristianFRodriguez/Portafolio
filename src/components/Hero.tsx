import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { GraduationCap, Linkedin, Mail, Menu } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

// ─── Navbar ───────────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: "Career",   href: "#timeline",     id: "timeline"    },
  { label: "Research", href: "#publications", id: "publications" },
  { label: "Contact",  href: "#contact",      id: "contact"     },
] as const;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section via IntersectionObserver
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    NAV_LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(id); },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-10 lg:px-14 py-3.5 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-transparent"
      }`}
      aria-label="Main navigation"
    >
      {/* Logo + Name */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-700 to-cyan-500 flex items-center justify-center shadow-sm shrink-0">
          <span className="text-white font-black text-sm tracking-tight">CR</span>
        </div>
        <div className="hidden sm:block leading-tight">
          <p className="text-sm font-bold text-slate-900">Cristian F. Rodríguez</p>
          <p className="text-[10px] text-slate-500 uppercase tracking-wider">Biomedical Engineer · Researcher</p>
        </div>
      </div>

      {/* Nav links — desktop */}
      <div className="hidden md:flex items-center gap-7">
        {NAV_LINKS.map(({ label, href, id }) => (
          <a
            key={label}
            href={href}
            className={`text-sm font-medium transition-colors relative ${
              activeId === id
                ? "text-blue-700"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            {label}
            {activeId === id && (
              <span
                className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                style={{ background: "linear-gradient(to right, #1d4ed8, #0891b2)" }}
              />
            )}
          </a>
        ))}
        <Button
          size="sm"
          className="bg-slate-900 hover:bg-slate-700 text-white text-xs px-5 rounded-full h-8 ml-2"
          onClick={() => {
            const link = document.createElement("a");
            link.href = "/CV_Cristian_Rodriguez_2025.docx";
            link.download = "CV_Cristian_Rodriguez_2025.docx";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
        >
          Download CV
        </Button>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden p-2 text-slate-600"
        aria-label="Open menu"
        onClick={() => setMenuOpen((o) => !o)}
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-lg md:hidden">
          <div className="flex flex-col px-6 py-4 gap-4">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-sm font-medium text-slate-700 hover:text-blue-700 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <button
              className="text-left text-sm font-medium bg-slate-900 text-white rounded-full px-5 py-2 w-fit"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/CV_Cristian_Rodriguez_2025.docx";
                link.download = "CV_Cristian_Rodriguez_2025.docx";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                setMenuOpen(false);
              }}
            >
              Download CV
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

// ─── Social Icon Button ───────────────────────────────────────────────────────
const SocialIcon = ({
  icon: Icon,
  href,
  label,
}: {
  icon: React.ElementType;
  href: string;
  label: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="w-9 h-9 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-200"
  >
    <Icon className="w-4 h-4" />
  </a>
);

// ─── Dot Grid ────────────────────────────────────────────────────────────────
const DotGrid = () => (
  <div
    className="absolute inset-0 pointer-events-none"
    aria-hidden="true"
    style={{
      backgroundImage: "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
      backgroundSize: "28px 28px",
      opacity: 0.4,
    }}
  />
);

// ─── Terminal Widget (floating over photo) ────────────────────────────────────
const TERMINAL_LINES = [
  { type: "cmd", text: "./loading_data.sh" },
  { type: "out", text: "Loading dataset... ██████████████████ 100%" },
  { type: "cmd", text: "python train_model.py" },
  { type: "out", text: "Training model... ██████████████████ 100%" },
  { type: "cmd", text: "python discover_patterns.py" },
  { type: "out", text: "Discovering patterns... done" },
  { type: "cmd", text: "decision_engine --run" },
  { type: "out", text: "Better decisions enabled" },
  { type: "cmd", text: "" },
] as const;

const TerminalWidget = () => {
  const [visible, setVisible] = useState(1);

  useEffect(() => {
    if (visible >= TERMINAL_LINES.length) return;
    const t = setTimeout(() => setVisible((v) => v + 1), 600);
    return () => clearTimeout(t);
  }, [visible]);

  return (
    <div
      className="rounded-xl overflow-hidden max-w-sm"
      style={{ border: "1px solid rgba(148,163,184,0.2)", boxShadow: "0 4px 24px rgba(0,0,0,0.10)" }}
      aria-hidden="true"
    >
      {/* Title bar */}
      <div className="flex items-center gap-1.5 px-3 py-2 bg-slate-800">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
        <span className="ml-auto font-mono text-[10px] text-slate-400 tracking-wide">
          research.py
        </span>
      </div>

      {/* Body */}
      <div className="bg-slate-950 px-4 py-3 font-mono text-[11px] leading-relaxed space-y-[3px]">
        {TERMINAL_LINES.slice(0, visible).map((line, i) =>
          line.type === "cmd" ? (
            <div key={i} className="text-slate-100">
              <span className="text-cyan-400 select-none">$ </span>
              {line.text}
            </div>
          ) : (
            <div key={i} className="text-green-400 pl-2">
              {line.text}
            </div>
          )
        )}
        {visible < TERMINAL_LINES.length && (
          <span className="inline-block w-[7px] h-[13px] bg-slate-300 animate-pulse align-middle" />
        )}
      </div>
    </div>
  );
};

// ─── Hero ─────────────────────────────────────────────────────────────────────
export const Hero = () => {
  return (
    <>
      <Navbar />

      <section
        className="hero-section bg-white"
        style={{ padding: 0, minHeight: "100dvh", display: "grid" }}
        aria-label="Hero section"
      >
        <div className="w-full grid lg:grid-cols-2 items-stretch" style={{ minHeight: "100dvh" }}>

          {/* ── Left: Photo — full bleed to viewport edge ─────────────────── */}
          <div className="order-2 lg:order-1 relative overflow-hidden h-[55vw] sm:h-[45vw] lg:h-auto lg:min-h-screen">
            <img
              src={profilePhoto}
              alt="Cristian Felipe Rodríguez Ospino — Instructor Professor in Biomedical Engineering"
              loading="eager"
              className="absolute inset-0 w-full h-full object-cover object-[62%_10%]"
            />
            {/* Right fade into white */}
            <div
              className="absolute inset-y-0 right-0 w-36 hidden lg:block"
              style={{ background: "linear-gradient(to right, transparent, white)" }}
              aria-hidden="true"
            />
            {/* Bottom fade — hides lab coat text */}
            <div
              className="absolute bottom-0 left-0 right-0 h-[28%]"
              style={{ background: "linear-gradient(to bottom, transparent 0%, white 90%)" }}
              aria-hidden="true"
            />
          </div>

          {/* ── Right: Content ────────────────────────────────────────────── */}
          <div className="order-1 lg:order-2 relative flex flex-col justify-center px-10 sm:px-14 lg:px-16 xl:px-24 pt-20 pb-8 lg:pt-14 lg:pb-8 overflow-hidden">

            <DotGrid />

            <div className="relative z-10 space-y-5">

              {/* Headline */}
              <h1
                style={{ fontSize: "clamp(2.4rem, 4.2vw, 3.8rem)" }}
                className="font-black text-slate-900 leading-[1.04] tracking-tight"
              >
                Shaping a<br />
                Better Future<br />
                <span
                  style={{
                    background: "linear-gradient(135deg, #1d4ed8 0%, #0891b2 60%, #0e7490 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Through Data
                </span>
              </h1>

              {/* Single belief statement */}
              <p className="text-[15px] text-slate-500 leading-relaxed max-w-[480px]">
                I believe data, artificial intelligence and computational modeling can help us
                discover patterns, generate insight and make better decisions that shape the future.
              </p>

              {/* Signature + social icons */}
              <div className="flex items-center gap-3 flex-wrap pt-1">
                <p
                  className="text-slate-800 select-none"
                  style={{
                    fontFamily: "'Dancing Script', cursive",
                    fontSize: "clamp(2rem, 3.4vw, 2.8rem)",
                    lineHeight: 1,
                  }}
                  aria-label="Cristian F. Rodríguez"
                >
                  Cristian F. Rodríguez
                </p>
                <div className="flex items-center gap-2">
                  <SocialIcon
                    icon={GraduationCap}
                    href="https://scholar.google.com/citations?user=ZtjgHeMAAAAJ&hl=en"
                    label="Google Scholar"
                  />
                  <SocialIcon
                    icon={Linkedin}
                    href="https://www.linkedin.com/in/cristian-felipe-rodriguez-ospino/"
                    label="LinkedIn"
                  />
                  <SocialIcon
                    icon={Mail}
                    href="mailto:cf.rodriguez@uniandes.edu.co"
                    label="Email"
                  />
                </div>
              </div>

              {/* Credential strip */}
              <div className="border-t border-slate-200 pt-4 flex flex-wrap items-center gap-x-4 gap-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Biomedical Engineer
                </span>
                <span className="text-slate-300 text-xs">·</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Universidad de los Andes QS #212
                </span>
                <span className="text-slate-300 text-xs">·</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  13 Papers · 224 Citations · h-index 9
                </span>
              </div>

              {/* Terminal widget */}
              <TerminalWidget />

            </div>
          </div>

        </div>
      </section>
    </>
  );
};
