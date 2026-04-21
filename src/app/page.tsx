"use client";

import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";

const featuredProjects = [
  {
    title: "Cybersecurity Attack Path Prediction",
    href: "https://github.com/mananpal-dev/cybersecurity-attack-path-prediction-using-gnn",
    badge: "Graph ML",
    outcome: "Built a graph-based security modeling system over 418 nodes to predict attack propagation paths in enterprise-like networks.",
    highlights: ["GCN + GraphSAGE", "PyTorch Geometric", "NetworkX", "Streamlit demo"],
  },
  {
    title: "Brain Tumor Detection: CNN vs ViT",
    href: "https://github.com/mananpal-dev/brain-tumor-detection",
    badge: "Computer Vision",
    outcome: "Benchmarked CNNs against Vision Transformers on MRI scans and pushed model performance to 99.8% with explainability in the loop.",
    highlights: ["ViT: 99.8%", "TensorFlow", "GAN augmentation", "Grad-CAM"],
  },
  {
    title: "ResumeRanker",
    href: "https://github.com/mananpal-dev/ResumeRanker",
    badge: "Applied NLP",
    outcome: "Created a recruiter-facing ranking workflow that parses resumes, scores candidates, and explains gaps against a job description.",
    highlights: ["PDF parsing", "TF-IDF matching", "Scikit-learn", "Explainable scoring"],
  },
];

const strengths = [
  "Fast-moving engineer with a strong ML + product mindset",
  "Comfortable shipping full-stack apps, APIs, and data workflows",
  "Interested in SWE, ML engineering, and applied AI roles",
];

const skillGroups = [
  {
    label: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "C++", "SQL"],
  },
  {
    label: "ML / AI",
    items: ["PyTorch", "TensorFlow", "Scikit-learn", "PyTorch Geometric", "Transformers", "Grad-CAM"],
  },
  {
    label: "Product Engineering",
    items: ["React", "Next.js", "Node.js", "Express", "REST APIs", "MongoDB"],
  },
  {
    label: "Data / Tooling",
    items: ["Pandas", "NumPy", "NetworkX", "Docker", "Git", "Streamlit"],
  },
];

export default function Home() {
  useEffect(() => {
    const root = document.documentElement;
    const previousScrollBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = "smooth";

    const progressBar = document.getElementById("progress-bar");
    const nav = document.getElementById("main-nav");

    const handleScroll = () => {
      const totalScrollable = document.body.scrollHeight - window.innerHeight;
      const progress = totalScrollable > 0 ? (window.scrollY / totalScrollable) * 100 : 0;

      if (progressBar) {
        progressBar.style.width = `${progress}%`;
      }

      if (nav) {
        nav.style.borderBottomColor =
          window.scrollY > 12 ? "rgba(251, 191, 36, 0.22)" : "rgba(255,255,255,0.08)";
        nav.style.background =
          window.scrollY > 12 ? "rgba(8, 12, 24, 0.9)" : "rgba(8, 12, 24, 0.72)";
      }
    };

    const fades = document.querySelectorAll<HTMLElement>("[data-fade]");
    fades.forEach((element, index) => {
      element.style.animationDelay = `${index * 0.08}s`;
    });

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      root.style.scrollBehavior = previousScrollBehavior;
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;700&display=swap");

        * { box-sizing: border-box; }
        html, body { margin: 0; padding: 0; }

        :root {
          --bg: #08101f;
          --bg-soft: #0f1a31;
          --panel: rgba(15, 23, 42, 0.82);
          --panel-strong: rgba(17, 25, 45, 0.96);
          --line: rgba(148, 163, 184, 0.18);
          --line-strong: rgba(251, 191, 36, 0.25);
          --text: #edf2ff;
          --muted: #98a6c3;
          --muted-strong: #c6d0e3;
          --gold: #fbbf24;
          --gold-soft: #fde68a;
          --sky: #38bdf8;
          --mint: #34d399;
          --danger: #f87171;
          --shadow: 0 30px 80px rgba(2, 6, 23, 0.45);
        }

        html { scroll-behavior: smooth; }

        body {
          font-family: "Manrope", sans-serif;
          background:
            radial-gradient(circle at top left, rgba(56, 189, 248, 0.12), transparent 28%),
            radial-gradient(circle at top right, rgba(251, 191, 36, 0.14), transparent 30%),
            linear-gradient(180deg, #08101f 0%, #09111f 45%, #060b16 100%);
          color: var(--text);
          overflow-x: hidden;
        }

        body::before {
          content: "";
          position: fixed;
          inset: 0;
          background-image:
            linear-gradient(rgba(148, 163, 184, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148, 163, 184, 0.05) 1px, transparent 1px);
          background-size: 42px 42px;
          mask-image: linear-gradient(180deg, rgba(0,0,0,0.55), transparent 88%);
          pointer-events: none;
          z-index: 0;
        }

        a { color: inherit; }

        #progress-bar {
          position: fixed;
          top: 0;
          left: 0;
          width: 0;
          height: 3px;
          z-index: 999;
          background: linear-gradient(90deg, var(--gold), var(--sky));
          box-shadow: 0 0 18px rgba(251, 191, 36, 0.5);
          transition: width 0.08s linear;
        }

        [data-fade] {
          opacity: 0;
          transform: translateY(24px);
          animation: rise 0.65s ease forwards;
        }

        @keyframes rise {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(0.9); opacity: 0.55; }
        }

        nav {
          position: sticky;
          top: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 2rem;
          background: rgba(8, 12, 24, 0.72);
          border-bottom: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(18px);
          transition: background 0.25s ease, border-color 0.25s ease;
        }

        .nav-mark {
          display: inline-flex;
          align-items: center;
          gap: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.04em;
        }

        .nav-badge {
          width: 2.15rem;
          height: 2.15rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 0.8rem;
          background: linear-gradient(135deg, rgba(251, 191, 36, 0.18), rgba(56, 189, 248, 0.16));
          border: 1px solid rgba(251, 191, 36, 0.3);
          color: var(--gold-soft);
          font-family: "Space Grotesk", sans-serif;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 1.3rem;
          color: var(--muted);
          font-size: 0.83rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .nav-links a {
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .nav-links a:hover { color: var(--gold-soft); }

        .nav-cta {
          padding: 0.75rem 1.1rem;
          border-radius: 999px;
          background: linear-gradient(135deg, var(--gold), #f59e0b);
          color: #111827;
          font-weight: 800;
        }

        main, footer {
          position: relative;
          z-index: 1;
        }

        .shell {
          width: min(1120px, calc(100% - 2rem));
          margin: 0 auto;
        }

        .hero {
          padding: 4.8rem 0 2.2rem;
        }

        .hero-card {
          display: grid;
          grid-template-columns: minmax(0, 1.35fr) minmax(280px, 0.95fr);
          gap: 1.5rem;
          align-items: stretch;
        }

        .hero-main,
        .hero-side,
        .section-card,
        .timeline-card,
        .contact-card {
          background: linear-gradient(180deg, rgba(15, 23, 42, 0.86), rgba(11, 18, 34, 0.92));
          border: 1px solid var(--line);
          box-shadow: var(--shadow);
        }

        .hero-main {
          border-radius: 28px;
          padding: 2.2rem;
          position: relative;
          overflow: hidden;
        }

        .hero-main::after {
          content: "";
          position: absolute;
          inset: auto -20% -35% auto;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(251, 191, 36, 0.16), transparent 70%);
          pointer-events: none;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.45rem 0.8rem;
          border-radius: 999px;
          background: rgba(52, 211, 153, 0.08);
          border: 1px solid rgba(52, 211, 153, 0.22);
          color: #9ff0c9;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .eyebrow-dot {
          width: 0.5rem;
          height: 0.5rem;
          border-radius: 999px;
          background: var(--mint);
          animation: pulse 2s ease-in-out infinite;
          box-shadow: 0 0 14px rgba(52, 211, 153, 0.55);
        }

        h1, h2, h3, .section-title, .project-title {
          font-family: "Space Grotesk", sans-serif;
          margin: 0;
        }

        .hero-title {
          margin-top: 1.1rem;
          font-size: clamp(2.9rem, 5vw, 4.8rem);
          line-height: 0.98;
          letter-spacing: -0.05em;
          max-width: 10ch;
        }

        .hero-title strong {
          display: block;
          color: var(--gold-soft);
        }

        .hero-copy {
          margin-top: 1rem;
          max-width: 60ch;
          color: var(--muted-strong);
          font-size: 1.04rem;
          line-height: 1.85;
        }

        .hero-proof {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0.8rem;
          margin-top: 1.6rem;
        }

        .proof-card {
          padding: 1rem;
          border-radius: 18px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(148, 163, 184, 0.12);
        }

        .proof-number {
          font-size: 1.6rem;
          color: var(--gold-soft);
          font-family: "Space Grotesk", sans-serif;
          font-weight: 700;
        }

        .proof-label {
          margin-top: 0.2rem;
          color: var(--muted);
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .action-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
          margin-top: 1.6rem;
        }

        .button-primary,
        .button-secondary,
        .button-ghost {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.55rem;
          padding: 0.92rem 1.25rem;
          border-radius: 999px;
          text-decoration: none;
          font-weight: 800;
          transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
        }

        .button-primary {
          background: linear-gradient(135deg, var(--gold), #f59e0b);
          color: #111827;
          box-shadow: 0 18px 40px rgba(245, 158, 11, 0.18);
        }

        .button-secondary {
          background: rgba(56, 189, 248, 0.08);
          border: 1px solid rgba(56, 189, 248, 0.26);
          color: #c9eeff;
        }

        .button-ghost {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(148, 163, 184, 0.18);
          color: var(--text);
        }

        .button-primary:hover,
        .button-secondary:hover,
        .button-ghost:hover {
          transform: translateY(-2px);
        }

        .hero-side {
          border-radius: 28px;
          padding: 1.6rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .profile-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          padding: 0.9rem 1rem;
          border-radius: 18px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(148, 163, 184, 0.14);
        }

        .avatar {
          width: 3rem;
          height: 3rem;
          border-radius: 1rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(251, 191, 36, 0.22), rgba(56, 189, 248, 0.18));
          border: 1px solid rgba(251, 191, 36, 0.24);
          color: var(--gold-soft);
          font-family: "Space Grotesk", sans-serif;
          font-size: 1.15rem;
          font-weight: 700;
        }

        .profile-chip strong {
          display: block;
          font-size: 1rem;
        }

        .profile-chip span {
          color: var(--muted);
          font-size: 0.85rem;
        }

        .recruiter-box {
          padding: 1rem;
          border-radius: 20px;
          background: linear-gradient(180deg, rgba(251, 191, 36, 0.08), rgba(56, 189, 248, 0.04));
          border: 1px solid var(--line-strong);
        }

        .recruiter-box h3 {
          font-size: 1rem;
          margin-bottom: 0.45rem;
        }

        .recruiter-box p {
          margin: 0;
          color: var(--muted-strong);
          line-height: 1.75;
          font-size: 0.92rem;
        }

        .mini-list {
          display: grid;
          gap: 0.75rem;
        }

        .mini-item {
          padding: 0.9rem 1rem;
          border-radius: 18px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(148, 163, 184, 0.12);
          color: var(--muted-strong);
          line-height: 1.7;
          font-size: 0.9rem;
        }

        .section {
          padding: 1.3rem 0 0;
        }

        .section-card {
          border-radius: 28px;
          padding: 1.8rem;
        }

        .section-top {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          align-items: end;
          margin-bottom: 1.3rem;
        }

        .section-kicker {
          color: var(--gold-soft);
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .section-title {
          margin-top: 0.35rem;
          font-size: clamp(1.8rem, 3vw, 2.4rem);
          letter-spacing: -0.04em;
        }

        .section-sub {
          color: var(--muted);
          margin: 0;
          max-width: 52ch;
          line-height: 1.75;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 1rem;
        }

        .skill-card {
          padding: 1.15rem;
          border-radius: 20px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(148, 163, 184, 0.12);
        }

        .skill-card h3 {
          font-size: 0.92rem;
          margin-bottom: 0.8rem;
          color: var(--gold-soft);
        }

        .pill-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
        }

        .pill {
          padding: 0.35rem 0.7rem;
          border-radius: 999px;
          background: rgba(56, 189, 248, 0.06);
          border: 1px solid rgba(56, 189, 248, 0.12);
          color: #d9f4ff;
          font-size: 0.78rem;
        }

        .project-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1rem;
        }

        .project-card {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: 1.25rem;
          border-radius: 22px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(148, 163, 184, 0.12);
          text-decoration: none;
          transition: transform 0.22s ease, border-color 0.22s ease, background 0.22s ease;
        }

        .project-card:hover {
          transform: translateY(-5px);
          border-color: rgba(251, 191, 36, 0.26);
          background: rgba(255,255,255,0.045);
        }

        .project-meta {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          align-items: center;
        }

        .project-badge {
          display: inline-flex;
          align-items: center;
          padding: 0.35rem 0.7rem;
          border-radius: 999px;
          background: rgba(251, 191, 36, 0.12);
          border: 1px solid rgba(251, 191, 36, 0.18);
          color: var(--gold-soft);
          font-size: 0.75rem;
          font-weight: 700;
        }

        .project-link {
          color: var(--sky);
          font-size: 0.78rem;
          font-weight: 700;
        }

        .project-title {
          font-size: 1.15rem;
          letter-spacing: -0.03em;
        }

        .project-copy {
          margin: 0;
          color: var(--muted-strong);
          line-height: 1.8;
          font-size: 0.92rem;
          flex: 1;
        }

        .highlight-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
        }

        .highlight {
          padding: 0.3rem 0.62rem;
          border-radius: 999px;
          border: 1px solid rgba(148, 163, 184, 0.15);
          background: rgba(255,255,255,0.025);
          color: var(--muted-strong);
          font-size: 0.76rem;
        }

        .timeline-card,
        .contact-card {
          border-radius: 28px;
          padding: 1.8rem;
        }

        .timeline-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 1rem;
        }

        .timeline-item {
          padding: 1.1rem 0;
          border-bottom: 1px solid rgba(148, 163, 184, 0.12);
        }

        .timeline-item:last-child {
          border-bottom: 0;
          padding-bottom: 0;
        }

        .timeline-item:first-child {
          padding-top: 0;
        }

        .timeline-year {
          color: var(--gold-soft);
          font-weight: 800;
          font-size: 0.82rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .timeline-role {
          font-size: 1rem;
          font-weight: 700;
          margin-top: 0.2rem;
        }

        .timeline-note {
          margin: 0.35rem 0 0;
          color: var(--muted);
          line-height: 1.7;
        }

        .contact-card {
          margin: 1rem 0 2.5rem;
          text-align: center;
          background:
            radial-gradient(circle at top, rgba(251, 191, 36, 0.12), transparent 40%),
            linear-gradient(180deg, rgba(15, 23, 42, 0.94), rgba(10, 15, 27, 0.96));
        }

        .contact-title {
          font-size: clamp(1.9rem, 3vw, 2.6rem);
          letter-spacing: -0.04em;
        }

        .contact-copy {
          max-width: 52ch;
          margin: 0.9rem auto 0;
          color: var(--muted-strong);
          line-height: 1.8;
        }

        .contact-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.8rem;
          margin-top: 1.5rem;
        }

        footer {
          padding: 0 0 2rem;
          text-align: center;
          color: rgba(198, 208, 227, 0.56);
          font-size: 0.82rem;
        }

        @media (max-width: 980px) {
          .hero-card,
          .skills-grid,
          .project-grid,
          .timeline-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 720px) {
          nav {
            padding: 0.9rem 1rem;
          }

          .nav-links a:not(.nav-cta) {
            display: none;
          }

          .shell {
            width: min(100% - 1rem, 1120px);
          }

          .hero {
            padding-top: 2.8rem;
          }

          .hero-main,
          .hero-side,
          .section-card,
          .timeline-card,
          .contact-card {
            border-radius: 22px;
            padding: 1.2rem;
          }

          .hero-proof {
            grid-template-columns: 1fr;
          }

          .section-top {
            align-items: start;
            flex-direction: column;
          }
        }
      `}</style>

      <div id="progress-bar" />

      <nav id="main-nav">
        <div className="nav-mark">
          <span className="nav-badge">MP</span>
          <span>Manan Pal</span>
        </div>
        <div className="nav-links">
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
          <a href="/Manan_Pal_Resume.pdf" download className="nav-cta">
            Download Resume
          </a>
        </div>
      </nav>

      <main>
        <section className="hero">
          <div className="shell">
            <div className="hero-card">
              <div className="hero-main">
                <div data-fade className="eyebrow">
                  <span className="eyebrow-dot" />
                  Open to SWE, ML Engineering, and Applied AI roles
                </div>

                <h1 data-fade className="hero-title">
                  Building <strong>practical AI products</strong> recruiters can trust.
                </h1>

                <p data-fade className="hero-copy">
                  I&apos;m Manan Pal, a Computer Science student at KIIT graduating in 2027. I build
                  machine learning systems, full-stack applications, and production-minded prototypes
                  that turn research ideas into usable products.
                </p>

                <div data-fade className="hero-proof">
                  <div className="proof-card">
                    <div className="proof-number">3+</div>
                    <div className="proof-label">Featured ML Projects</div>
                  </div>
                  <div className="proof-card">
                    <div className="proof-number">99.8%</div>
                    <div className="proof-label">Best Model Accuracy</div>
                  </div>
                  <div className="proof-card">
                    <div className="proof-number">2027</div>
                    <div className="proof-label">Graduation Year</div>
                  </div>
                </div>

                <div data-fade className="action-row">
                  <a
                    className="button-primary"
                    href="/Manan_Pal_Resume.pdf"
                    download="Manan_Pal_Resume.pdf"
                  >
                    Download Resume
                  </a>
                  <a className="button-secondary" href="#projects">
                    View Projects
                  </a>
                  <a className="button-ghost" href="mailto:mananpal27@gmail.com">
                    Email Me
                  </a>
                </div>
              </div>

              <aside className="hero-side">
                <div data-fade className="profile-chip">
                  <div className="avatar">MP</div>
                  <div>
                    <strong>Manan Pal</strong>
                    <span>KIIT University | Bhubaneswar, India</span>
                  </div>
                </div>

                <div data-fade className="recruiter-box">
                  <h3>What a recruiter should know first</h3>
                  <p>
                    I&apos;m strongest where machine learning, clean engineering, and product thinking
                    meet. I care about measurable outcomes, explainability, and building work that can
                    be presented clearly to both technical and non-technical teams.
                  </p>
                </div>

                <div className="mini-list">
                  {strengths.map((item) => (
                    <div data-fade className="mini-item" key={item}>
                      {item}
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="shell">
            <div className="section-card">
              <div className="section-top">
                <div>
                  <div className="section-kicker">Core Stack</div>
                  <h2 className="section-title">Skills recruiters scan for</h2>
                </div>
                <p className="section-sub">
                  Grouped to make technical range easy to evaluate: language fluency, ML depth,
                  product engineering, and practical tooling.
                </p>
              </div>

              <div className="skills-grid">
                {skillGroups.map((group) => (
                  <div className="skill-card" key={group.label}>
                    <h3>{group.label}</h3>
                    <div className="pill-row">
                      {group.items.map((item) => (
                        <span className="pill" key={item}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="shell">
            <div className="section-card">
              <div className="section-top">
                <div>
                  <div className="section-kicker">Selected Work</div>
                  <h2 className="section-title">Projects with clear outcomes</h2>
                </div>
                <p className="section-sub">
                  Each project is framed around the result and the stack, because recruiters care
                  about proof, relevance, and execution.
                </p>
              </div>

              <div className="project-grid">
                {featuredProjects.map((project) => (
                  <a
                    key={project.title}
                    className="project-card"
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="project-meta">
                      <span className="project-badge">{project.badge}</span>
                      <span className="project-link">GitHub -&gt;</span>
                    </div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-copy">{project.outcome}</p>
                    <div className="highlight-list">
                      {project.highlights.map((highlight) => (
                        <span className="highlight" key={highlight}>
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="education">
          <div className="shell">
            <div className="timeline-grid">
              <div className="timeline-card">
                <div className="section-kicker">Education</div>
                <h2 className="section-title">Academic foundation</h2>
                <div className="timeline-item">
                  <div className="timeline-year">2023 - 2027</div>
                  <div className="timeline-role">B.Tech in Computer Science & Engineering</div>
                  <p className="timeline-note">
                    Kalinga Institute of Industrial Technology (KIIT), Bhubaneswar. Focused on
                    machine learning, software engineering, and system design.
                  </p>
                </div>
              </div>

              <div className="timeline-card">
                <div className="section-kicker">Recruiter Fit</div>
                <h2 className="section-title">Where I can add value</h2>
                <div className="timeline-item">
                  <div className="timeline-year">Best fit</div>
                  <div className="timeline-role">SWE, ML Engineer, Applied AI Intern / New Grad</div>
                  <p className="timeline-note">
                    Teams building AI-enabled products, backend-heavy applications, intelligent
                    tooling, or data-driven user experiences.
                  </p>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">Working style</div>
                  <div className="timeline-role">Hands-on, curious, product-aware</div>
                  <p className="timeline-note">
                    I enjoy shipping fast, learning quickly, and turning ambiguous ideas into
                    concrete demos, experiments, and production-ready features.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="shell">
            <div className="contact-card">
              <div className="section-kicker">Let&apos;s Talk</div>
              <h2 className="contact-title">Interested in interviewing or collaborating?</h2>
              <p className="contact-copy">
                If you&apos;re hiring for software engineering, ML engineering, or applied AI roles,
                I&apos;d love to connect. The fastest way to reach me is by email or LinkedIn.
              </p>

              <div className="contact-actions">
                <a className="button-primary" href="mailto:mananpal27@gmail.com">
                  mananpal27@gmail.com
                </a>
                <a
                  className="button-secondary"
                  href="https://linkedin.com/in/mananpal-dev"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  className="button-ghost"
                  href="https://github.com/mananpal-dev"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        (c) 2027 Manan Pal | Portfolio focused on recruiter clarity, proof of work, and strong first
        impressions
      </footer>

      <Analytics />
    </>
  );
}
