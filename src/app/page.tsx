"use client";

import { useEffect, useRef } from "react";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    const bar = document.getElementById("progress-bar");
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const total = document.body.scrollHeight - window.innerHeight;
      const pct = total > 0 ? (scrolled / total) * 100 : 0;
      if (bar) bar.style.width = pct + "%";

      // nav shadow on scroll
      const nav = document.getElementById("main-nav");
      if (nav) nav.style.borderBottomColor = scrolled > 10 ? "rgba(124,58,237,0.2)" : "rgba(255,255,255,0.06)";
    };
    window.addEventListener("scroll", handleScroll);

    // stagger fade-in on mount
    const els = document.querySelectorAll(".fade-in");
    els.forEach((el, i) => {
      (el as HTMLElement).style.animationDelay = `${i * 0.08}s`;
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap');

        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

        :root {
          --purple: #7c3aed;
          --purple-light: #a78bfa;
          --cyan: #0ea5e9;
          --cyan-light: #38bdf8;
          --bg: #07070d;
          --surface: rgba(255,255,255,0.03);
          --border: rgba(255,255,255,0.07);
          --border-hover: rgba(167,139,250,0.35);
          --text: #e8e8f0;
          --muted: #64748b;
          --muted2: #475569;
        }

        html { scroll-behavior: smooth; }

        body {
          font-family: 'Inter', system-ui, sans-serif;
          background: var(--bg);
          color: var(--text);
          line-height: 1.6;
          overflow-x: hidden;
        }

        /* grid dot background */
        body::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: radial-gradient(rgba(124,58,237,0.08) 1px, transparent 1px);
          background-size: 32px 32px;
          pointer-events: none;
          z-index: 0;
        }

        #progress-bar {
          position: fixed; top: 0; left: 0; height: 2px; width: 0%;
          background: linear-gradient(90deg, var(--purple), var(--cyan));
          z-index: 999; transition: width 0.08s linear;
        }

        /* ─── NAV ─── */
        nav {
          position: fixed; top: 2px; left: 0; right: 0; z-index: 100;
          display: flex; justify-content: space-between; align-items: center;
          padding: 0.9rem 2.5rem;
          background: rgba(7,7,13,0.82);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          transition: border-bottom-color 0.3s;
        }
        .nav-logo {
          font-family: 'Syne', sans-serif; font-weight: 800; font-size: 1.15rem;
          background: linear-gradient(135deg, var(--purple-light), var(--cyan-light));
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          letter-spacing: -0.01em;
        }
        .nav-links { display: flex; gap: 2rem; align-items: center; }
        .nav-links a {
          font-size: 0.8rem; color: var(--muted); letter-spacing: 0.06em;
          text-transform: uppercase; text-decoration: none;
          transition: color 0.2s;
        }
        .nav-links a:hover { color: var(--purple-light); }
        .nav-hire {
          background: linear-gradient(135deg, var(--purple), var(--cyan));
          padding: 0.42rem 1.2rem; border-radius: 8px;
          font-size: 0.8rem; font-weight: 600; color: #fff; text-decoration: none;
          transition: opacity 0.2s, transform 0.2s;
        }
        .nav-hire:hover { opacity: 0.85; transform: translateY(-1px); }

        /* ─── FADE IN ─── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-in {
          opacity: 0;
          animation: fadeUp 0.55s ease forwards;
        }

        /* ─── HERO ─── */
        .hero {
          min-height: 100vh; display: flex; align-items: center;
          justify-content: center; text-align: center;
          padding: 7rem 2rem 5rem; position: relative; z-index: 1;
        }
        .hero-glow-1 {
          position: absolute; top: 10%; left: 15%; width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(124,58,237,0.14) 0%, transparent 70%);
          pointer-events: none; filter: blur(1px);
        }
        .hero-glow-2 {
          position: absolute; bottom: 5%; right: 10%; width: 420px; height: 420px;
          background: radial-gradient(circle, rgba(14,165,233,0.11) 0%, transparent 70%);
          pointer-events: none; filter: blur(1px);
        }
        .hero-inner { max-width: 860px; position: relative; z-index: 2; }

        /* avatar */
        .avatar {
          width: 88px; height: 88px; border-radius: 50%;
          background: linear-gradient(135deg, var(--purple), var(--cyan));
          display: flex; align-items: center; justify-content: center;
          font-family: 'Syne', sans-serif; font-size: 1.7rem; font-weight: 800; color: #fff;
          border: 2px solid rgba(124,58,237,0.5);
          box-shadow: 0 0 0 6px rgba(124,58,237,0.08), 0 0 40px rgba(124,58,237,0.2);
          margin: 0 auto 0.85rem;
        }
        .avail-badge {
          display: inline-flex; align-items: center; gap: 0.4rem;
          background: rgba(16,185,129,0.1); border: 1px solid rgba(16,185,129,0.3);
          border-radius: 20px; padding: 0.25rem 0.8rem;
          font-size: 0.72rem; color: #34d399; letter-spacing: 0.05em;
          margin-bottom: 1.5rem;
        }
        .avail-dot {
          width: 6px; height: 6px; border-radius: 50%; background: #34d399;
          box-shadow: 0 0 6px #34d399;
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; } 50% { opacity: 0.4; }
        }

        .hero h1 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.8rem, 7vw, 5rem);
          font-weight: 800; line-height: 1.05;
          letter-spacing: -0.03em; margin-bottom: 1rem;
        }
        .grad {
          background: linear-gradient(135deg, var(--purple-light), var(--cyan-light));
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        .hero-sub {
          font-size: 1rem; color: #94a3b8; margin-bottom: 1.2rem; font-weight: 400;
        }
        .hero-sub .accent { color: var(--purple-light); font-weight: 500; }
        .hero-desc {
          font-size: 1rem; color: #94a3b8; max-width: 640px;
          margin: 0 auto 2rem; line-height: 1.8;
        }

        /* hero chips */
        .chip-row { display: flex; flex-wrap: wrap; justify-content: center; gap: 0.5rem; margin-bottom: 2rem; }
        .chip {
          background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.09);
          border-radius: 6px; padding: 0.22rem 0.7rem;
          font-size: 0.73rem; color: #94a3b8;
        }

        /* buttons */
        .btn-row { display: flex; flex-wrap: wrap; justify-content: center; gap: 0.8rem; margin-bottom: 2.5rem; }
        .btn-p {
          background: linear-gradient(135deg, var(--purple), var(--cyan));
          padding: 0.72rem 1.8rem; border-radius: 10px;
          font-weight: 600; font-size: 0.9rem; color: #fff; text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s; display: inline-block;
        }
        .btn-p:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(124,58,237,0.4); }
        .btn-o {
          border: 1px solid rgba(255,255,255,0.16);
          padding: 0.72rem 1.8rem; border-radius: 10px;
          font-weight: 500; font-size: 0.9rem; color: #cbd5e1; text-decoration: none;
          transition: border-color 0.2s, background 0.2s; display: inline-block;
        }
        .btn-o:hover { border-color: var(--purple-light); background: rgba(167,139,250,0.07); }

        /* what I bring */
        .bring-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem; margin-top: 1.2rem;
        }
        .bring-card {
          background: rgba(124,58,237,0.07);
          border: 1px solid rgba(124,58,237,0.18);
          border-radius: 12px; padding: 1rem 1.1rem;
          font-size: 0.85rem; color: #cbd5e1;
          display: flex; align-items: center; gap: 0.6rem;
        }
        .bring-icon { font-size: 1.1rem; flex-shrink: 0; }

        /* ─── STATS ─── */
        .stats-strip {
          position: relative; z-index: 1;
          background: rgba(255,255,255,0.02);
          border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
          padding: 1.4rem 2rem;
        }
        .stats-inner {
          max-width: 860px; margin: 0 auto;
          display: grid; grid-template-columns: repeat(3, 1fr);
          text-align: center;
        }
        .stat-num {
          font-family: 'Syne', sans-serif; font-size: 2rem; font-weight: 800;
          background: linear-gradient(135deg, var(--purple-light), var(--cyan-light));
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        .stat-lbl { font-size: 0.72rem; color: var(--muted2); text-transform: uppercase; letter-spacing: 0.07em; }

        /* looking banner */
        .looking {
          position: relative; z-index: 1;
          max-width: 1000px; margin: 2.5rem auto 0;
          padding: 0 2rem;
        }
        .looking-inner {
          background: rgba(124,58,237,0.07);
          border: 1px solid rgba(124,58,237,0.2);
          border-radius: 12px; padding: 1.1rem 1.5rem;
          display: flex; align-items: center; gap: 1rem;
          font-size: 0.87rem; color: #cbd5e1;
        }
        .looking-inner strong { color: var(--purple-light); }
        .ldot { width: 8px; height: 8px; border-radius: 50%; background: var(--purple-light); flex-shrink: 0; box-shadow: 0 0 8px rgba(167,139,250,0.7); animation: pulse 2s ease-in-out infinite; }

        /* ─── SECTIONS ─── */
        .sec { padding: 5rem 2rem; position: relative; z-index: 1; }
        .sec-inner { max-width: 1000px; margin: 0 auto; }
        .sec-eyebrow {
          display: inline-block;
          background: rgba(124,58,237,0.12); border: 1px solid rgba(124,58,237,0.28);
          border-radius: 20px; padding: 0.22rem 0.85rem;
          font-size: 0.7rem; color: var(--purple-light);
          letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 0.7rem;
        }
        .sec-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.7rem, 4vw, 2.3rem);
          font-weight: 800; letter-spacing: -0.02em; margin-bottom: 0.35rem;
        }
        .sec-sub { color: var(--muted2); font-size: 0.88rem; margin-bottom: 2.2rem; }
        .bar { width: 44px; height: 2px; background: linear-gradient(90deg, var(--purple), var(--cyan)); border-radius: 2px; margin-bottom: 0.7rem; }

        /* ─── SKILLS ─── */
        .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 1.1rem; }
        .skill-cat {
          background: var(--surface); border: 1px solid var(--border);
          border-radius: 14px; padding: 1.4rem;
          transition: border-color 0.2s;
        }
        .skill-cat:hover { border-color: rgba(124,58,237,0.3); }
        .skill-cat-label { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--purple-light); font-weight: 600; margin-bottom: 0.8rem; }
        .pills { display: flex; flex-wrap: wrap; gap: 0.4rem; }
        .pill {
          background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08);
          border-radius: 6px; padding: 0.2rem 0.55rem;
          font-size: 0.74rem; color: #cbd5e1;
          transition: background 0.15s, border-color 0.15s;
        }
        .pill:hover { background: rgba(167,139,250,0.12); border-color: rgba(167,139,250,0.3); }

        /* ─── PROJECTS ─── */
        .proj-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(295px, 1fr)); gap: 1.3rem; }
        .proj-card {
          background: var(--surface); border: 1px solid var(--border);
          border-radius: 16px; padding: 1.6rem;
          transition: transform 0.25s, border-color 0.25s, box-shadow 0.25s;
          text-decoration: none; color: inherit; display: flex; flex-direction: column;
          position: relative; overflow: hidden;
        }
        .proj-card::after {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, var(--purple), var(--cyan));
          opacity: 0; transition: opacity 0.25s;
        }
        .proj-card:hover { transform: translateY(-5px); border-color: var(--border-hover); box-shadow: 0 16px 40px rgba(124,58,237,0.13); }
        .proj-card:hover::after { opacity: 1; }
        .proj-icon {
          width: 40px; height: 40px; border-radius: 10px;
          background: rgba(124,58,237,0.14); border: 1px solid rgba(124,58,237,0.25);
          display: flex; align-items: center; justify-content: center;
          font-size: 1rem; margin-bottom: 1rem;
        }
        .proj-title { font-family: 'Syne', sans-serif; font-size: 1rem; font-weight: 700; margin-bottom: 0.5rem; color: #f1f5f9; }
        .proj-badges { display: flex; flex-wrap: wrap; gap: 0.35rem; margin-bottom: 0.7rem; }
        .b-green { font-size: 0.68rem; padding: 0.18rem 0.55rem; border-radius: 20px; background: rgba(16,185,129,0.12); color: #34d399; border: 1px solid rgba(16,185,129,0.25); }
        .b-purple { font-size: 0.68rem; padding: 0.18rem 0.55rem; border-radius: 20px; background: rgba(124,58,237,0.15); color: var(--purple-light); border: 1px solid rgba(124,58,237,0.25); }
        .proj-desc { font-size: 0.84rem; color: var(--muted); line-height: 1.75; margin-bottom: 0.6rem; flex: 1; }
        .proj-impact { font-size: 0.8rem; color: #94a3b8; font-style: italic; margin-bottom: 0.9rem; border-left: 2px solid rgba(124,58,237,0.4); padding-left: 0.6rem; }
        .proj-stack { display: flex; flex-wrap: wrap; gap: 0.35rem; margin-bottom: 0.9rem; }
        .stag { font-size: 0.68rem; padding: 0.16rem 0.5rem; border-radius: 5px; background: rgba(14,165,233,0.09); border: 1px solid rgba(14,165,233,0.2); color: var(--cyan-light); }
        .proj-link { font-size: 0.77rem; color: var(--purple-light); font-weight: 600; }

        /* github callout */
        .gh-callout {
          margin-top: 1.8rem;
          background: rgba(255,255,255,0.025); border: 1px solid var(--border);
          border-radius: 14px; padding: 1.5rem 1.75rem;
          display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;
        }
        .gh-left { display: flex; align-items: center; gap: 0.9rem; }
        .gh-ico { width: 40px; height: 40px; border-radius: 10px; background: rgba(255,255,255,0.05); border: 1px solid var(--border); display: flex; align-items: center; justify-content: center; }
        .gh-txt h4 { font-size: 0.9rem; font-weight: 700; color: #f1f5f9; margin-bottom: 0.15rem; }
        .gh-txt p { font-size: 0.78rem; color: var(--muted2); }
        .gh-btn { font-size: 0.8rem; font-weight: 600; color: #cbd5e1; padding: 0.45rem 1.1rem; border-radius: 8px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); text-decoration: none; transition: all 0.2s; }
        .gh-btn:hover { background: rgba(167,139,250,0.12); border-color: rgba(167,139,250,0.35); color: var(--purple-light); }

        /* ─── EDUCATION ─── */
        .edu-card {
          background: var(--surface); border: 1px solid var(--border);
          border-radius: 16px; padding: 1.8rem;
          display: flex; gap: 1.4rem; align-items: flex-start;
          transition: border-color 0.2s;
        }
        .edu-card:hover { border-color: rgba(124,58,237,0.28); }
        .edu-ico { width: 50px; height: 50px; border-radius: 12px; background: rgba(124,58,237,0.14); border: 1px solid rgba(124,58,237,0.28); display: flex; align-items: center; justify-content: center; font-size: 1.3rem; flex-shrink: 0; }
        .edu-degree { font-family: 'Syne', sans-serif; font-size: 1.08rem; font-weight: 700; color: #f1f5f9; margin-bottom: 0.25rem; }
        .edu-school { font-size: 0.9rem; color: var(--purple-light); font-weight: 600; margin-bottom: 0.25rem; }
        .edu-meta { font-size: 0.8rem; color: var(--muted2); }
        .edu-badges { display: flex; flex-wrap: wrap; gap: 0.45rem; margin-top: 0.6rem; }
        .eb-green { font-size: 0.7rem; padding: 0.2rem 0.65rem; border-radius: 20px; background: rgba(16,185,129,0.1); color: #34d399; border: 1px solid rgba(16,185,129,0.25); }
        .eb-blue { font-size: 0.7rem; padding: 0.2rem 0.65rem; border-radius: 20px; background: rgba(14,165,233,0.1); color: var(--cyan-light); border: 1px solid rgba(14,165,233,0.22); }

        /* ─── CONTACT ─── */
        .contact-box {
          background: rgba(124,58,237,0.06); border: 1px solid rgba(124,58,237,0.18);
          border-radius: 20px; padding: 3rem 2rem; text-align: center;
        }
        .contact-box h3 { font-family: 'Syne', sans-serif; font-size: 1.7rem; font-weight: 800; margin-bottom: 0.5rem; }
        .contact-box p { color: var(--muted2); font-size: 0.92rem; margin-bottom: 1.8rem; }
        .clinks { display: flex; flex-wrap: wrap; justify-content: center; gap: 0.9rem; }
        .clink {
          display: flex; align-items: center; gap: 0.45rem;
          background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px; padding: 0.6rem 1.35rem;
          font-size: 0.85rem; color: #cbd5e1; text-decoration: none;
          font-weight: 500; transition: all 0.2s;
        }
        .clink:hover { background: rgba(124,58,237,0.14); border-color: rgba(167,139,250,0.38); color: var(--purple-light); }

        footer {
          text-align: center; padding: 2rem;
          color: rgba(255,255,255,0.12); font-size: 0.76rem;
          border-top: 1px solid var(--border); position: relative; z-index: 1;
        }

        @media (max-width: 640px) {
          nav { padding: 0.8rem 1.2rem; }
          .nav-links { display: none; }
          .hero h1 { font-size: 2.4rem; }
        }
      `}</style>

      <div id="progress-bar" />

      {/* ── NAV ── */}
      <nav id="main-nav">
        <div className="nav-logo">Manan Pal</div>
        <div className="nav-links">
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
          <a href="/resume.pdf" download className="nav-hire">Download CV</a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="hero" id="about">
        <div className="hero-glow-1" />
        <div className="hero-glow-2" />
        <div className="hero-inner">

          <div className="fade-in">
            <div className="avatar">MP</div>
          </div>

          <div className="fade-in">
            <span className="avail-badge">
              <span className="avail-dot" />
              Open to Opportunities — Graduating 2027
            </span>
          </div>

          <div className="fade-in">
            <h1>Hi, I&apos;m <span className="grad">Manan Pal</span></h1>
          </div>

          <div className="fade-in">
            <p className="hero-sub">
              <span className="accent">Software Engineer</span> &nbsp;·&nbsp; ML/AI Systems &nbsp;·&nbsp; Full-Stack Development
            </p>
          </div>

          <div className="fade-in">
            <p className="hero-desc">
              Final-year CS student at KIIT University building intelligent systems and scalable
              applications — from graph neural networks for cybersecurity to deep learning for
              medical imaging and end-to-end full-stack products.
            </p>
          </div>

          <div className="fade-in chip-row">
            <span className="chip">🧠 GNNs · CNNs · Transformers</span>
            <span className="chip">🌐 React · Next.js · Node.js</span>
            <span className="chip">⚡ PyTorch · TensorFlow</span>
            <span className="chip">📍 Bhubaneswar, India</span>
          </div>

          <div className="fade-in btn-row">
            <a
              href="/resume.pdf"
              download="Manan_Pal_Resume.pdf"
              className="btn-p"
            >
              ⬇ Download Resume
            </a>
            <a href="#projects" className="btn-o">View Projects</a>
            <a href="mailto:mananpal27@gmail.com" className="btn-o">Get In Touch</a>
          </div>

          <div className="fade-in">
            <p style={{ fontSize: "0.78rem", color: "var(--muted2)", marginBottom: "0.8rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>What I Bring</p>
            <div className="bring-grid">
              <div className="bring-card"><span className="bring-icon">🕸️</span>ML Systems — GNNs, CNNs, Transformers</div>
              <div className="bring-card"><span className="bring-icon">🚀</span>Full-Stack — Next.js, APIs, Deployment</div>
              <div className="bring-card"><span className="bring-icon">🔬</span>AI Product Thinking &amp; Research Execution</div>
            </div>
          </div>

        </div>
      </section>

      {/* ── STATS ── */}
      <div className="stats-strip">
        <div className="stats-inner">
          <div><div className="stat-num">3+</div><div className="stat-lbl">ML Projects</div></div>
          <div><div className="stat-num">4th</div><div className="stat-lbl">Year · KIIT</div></div>
          <div><div className="stat-num">2027</div><div className="stat-lbl">Graduating</div></div>
        </div>
      </div>

      {/* ── LOOKING BANNER ── */}
      <div className="looking">
        <div className="looking-inner">
          <span className="ldot" />
          <span>
            <strong>Currently looking for</strong> full-time SWE / ML Engineer roles and internships
            — available from mid-2027. Open to on-site, hybrid, or remote.
          </span>
        </div>
      </div>

      {/* ── SKILLS ── */}
      <section className="sec" id="skills">
        <div className="sec-inner">
          <span className="sec-eyebrow">Tech Stack</span>
          <div className="bar" />
          <h2 className="sec-title">Skills &amp; Technologies</h2>
          <p className="sec-sub">Tools across ML research, full-stack engineering, and systems design.</p>
          <div className="skills-grid">
            {[
              { label: "Languages", items: ["Python", "C++", "JavaScript", "TypeScript", "SQL"] },
              { label: "ML / AI", items: ["PyTorch", "TensorFlow", "Scikit-learn", "PyTorch Geometric", "Hugging Face", "Grad-CAM"] },
              { label: "Full-Stack", items: ["React", "Next.js", "Node.js", "Express", "REST APIs", "Tailwind CSS"] },
              { label: "Data & Tools", items: ["NetworkX", "Pandas", "NumPy", "Git", "Docker", "MongoDB", "Streamlit"] },
            ].map((cat) => (
              <div className="skill-cat" key={cat.label}>
                <div className="skill-cat-label">{cat.label}</div>
                <div className="pills">
                  {cat.items.map((s) => <span className="pill" key={s}>{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section className="sec" id="projects" style={{ paddingTop: "1rem" }}>
        <div className="sec-inner">
          <span className="sec-eyebrow">Portfolio</span>
          <div className="bar" />
          <h2 className="sec-title">Featured Projects</h2>
          <p className="sec-sub">Applied ML, computer vision, and NLP — with real results.</p>

          <div className="proj-grid">

            <a href="https://github.com/mananpal-dev/cybersecurity-attack-path-prediction-using-gnn" target="_blank" rel="noopener noreferrer" className="proj-card">
              <div className="proj-icon">🕸️</div>
              <div className="proj-title">Cybersecurity Attack Path Prediction</div>
              <div className="proj-badges">
                <span className="b-green">Graph Dataset · 418 nodes</span>
                <span className="b-purple">GCN + GraphSAGE</span>
              </div>
              <p className="proj-desc">Graph-based attack prediction system modeling enterprise network topology using relational learning to detect attack propagation patterns.</p>
              <p className="proj-impact">Detects structural threats beyond traditional ML — finds paths no rule-based system can.</p>
              <div className="proj-stack">
                <span className="stag">PyTorch Geometric</span>
                <span className="stag">NetworkX</span>
                <span className="stag">Streamlit</span>
              </div>
              <div className="proj-link">View on GitHub ↗</div>
            </a>

            <a href="https://github.com/mananpal-dev/brain-tumor-detection" target="_blank" rel="noopener noreferrer" className="proj-card">
              <div className="proj-icon">🧬</div>
              <div className="proj-title">Brain Tumor Detection: CNN vs ViT</div>
              <div className="proj-badges">
                <span className="b-green">CNN: 83.4%</span>
                <span className="b-purple">ViT: 99.8%</span>
              </div>
              <p className="proj-desc">Compared CNN vs Vision Transformer on MRI scans with GAN-based synthetic augmentation and Grad-CAM explainability for medical imaging.</p>
              <p className="proj-impact">ViT improved accuracy by 16.4% — global attention beats local convolution on this task.</p>
              <div className="proj-stack">
                <span className="stag">TensorFlow</span>
                <span className="stag">GAN</span>
                <span className="stag">ViT</span>
                <span className="stag">Grad-CAM</span>
              </div>
              <div className="proj-link">View on GitHub ↗</div>
            </a>

            <a href="https://github.com/mananpal-dev/ResumeRanker" target="_blank" rel="noopener noreferrer" className="proj-card">
              <div className="proj-icon">📄</div>
              <div className="proj-title">NLP Resume Ranking System</div>
              <div className="proj-badges">
                <span className="b-green">PDF Parsing</span>
                <span className="b-purple">TF-IDF Matching</span>
              </div>
              <p className="proj-desc">Parses PDFs, matches against job descriptions, and generates explainable skill-gap insights with ranked candidate scoring.</p>
              <p className="proj-impact">Automates candidate shortlisting with transparent, explainable scoring — no black box.</p>
              <div className="proj-stack">
                <span className="stag">Python</span>
                <span className="stag">Scikit-learn</span>
                <span className="stag">NLP</span>
                <span className="stag">TF-IDF</span>
              </div>
              <div className="proj-link">View on GitHub ↗</div>
            </a>

          </div>

          <div className="gh-callout">
            <div className="gh-left">
              <div className="gh-ico">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#a78bfa">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
              </div>
              <div className="gh-txt">
                <h4>More projects on GitHub</h4>
                <p>All repositories, contributions &amp; open source work</p>
              </div>
            </div>
            <a href="https://github.com/mananpal-dev" target="_blank" rel="noopener noreferrer" className="gh-btn">github.com/mananpal-dev ↗</a>
          </div>
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section className="sec" id="education" style={{ paddingTop: "1rem" }}>
        <div className="sec-inner">
          <span className="sec-eyebrow">Background</span>
          <div className="bar" />
          <h2 className="sec-title">Education</h2>
          <p className="sec-sub">Academic foundation in computer science and engineering.</p>
          <div className="edu-card">
            <div className="edu-ico">🎓</div>
            <div>
              <div className="edu-degree">B.Tech in Computer Science &amp; Engineering</div>
              <div className="edu-school">Kalinga Institute of Industrial Technology (KIIT), Bhubaneswar</div>
              <div className="edu-meta">2023 – 2027 &nbsp;·&nbsp; Bhubaneswar, Odisha, India</div>
              <div className="edu-badges">
                <span className="eb-green">Final Year · Graduating 2027</span>
                <span className="eb-blue">Computer Science</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="sec" id="contact" style={{ paddingTop: "1rem" }}>
        <div className="sec-inner">
          <div className="contact-box">
            <h3>Let&apos;s Build Something Together</h3>
            <p>Open to full-time SWE / ML roles, internships, and research collaborations. I reply fast.</p>
            <div className="clinks">
              <a href="mailto:mananpal27@gmail.com" className="clink">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                mananpal27@gmail.com
              </a>
              <a href="https://linkedin.com/in/mananpal-dev" target="_blank" rel="noopener noreferrer" className="clink">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                </svg>
                LinkedIn
              </a>
              <a href="https://github.com/mananpal-dev" target="_blank" rel="noopener noreferrer" className="clink">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
                GitHub
              </a>
              <a href="/resume.pdf" download className="clink btn-p" style={{ background: "linear-gradient(135deg,#7c3aed,#0ea5e9)", color: "#fff", border: "none" }}>
                ⬇ Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>© 2027 Manan Pal · KIIT University, Bhubaneswar · Built for production-level engineering roles</footer>

      <Analytics />
    </>
  );
}
