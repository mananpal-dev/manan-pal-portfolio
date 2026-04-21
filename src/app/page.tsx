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

      const nav = document.getElementById("main-nav");
      if (nav) {
        nav.style.borderBottomColor =
          scrolled > 10
            ? "rgba(124,58,237,0.25)"
            : "rgba(255,255,255,0.06)";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Syne:wght@500;600;700;800&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --bg: #07070d;
          --card: rgba(255,255,255,0.03);
          --border: rgba(255,255,255,0.07);
          --text: #e8e8f0;
          --muted: #94a3b8;
          --muted2: #64748b;
          --purple: #7c3aed;
          --cyan: #0ea5e9;
        }

        body {
          font-family: Inter, system-ui, sans-serif;
          background: var(--bg);
          color: var(--text);
          line-height: 1.65;
          overflow-x: hidden;
        }

        html {
          scroll-behavior: smooth;
        }

        #progress-bar {
          position: fixed;
          top: 0;
          left: 0;
          height: 2px;
          width: 0%;
          background: linear-gradient(90deg, var(--purple), var(--cyan));
          z-index: 999;
        }

        /* NAV */
        nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          background: rgba(7,7,13,0.85);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }

        .logo {
          font-family: Syne, sans-serif;
          font-weight: 800;
          background: linear-gradient(135deg, #a78bfa, #38bdf8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .nav-links a {
          margin-left: 1.5rem;
          font-size: 0.85rem;
          color: var(--muted);
          text-decoration: none;
          transition: 0.2s;
        }

        .nav-links a:hover {
          color: #a78bfa;
        }

        /* HERO */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 7rem 2rem 4rem;
        }

        .hero h1 {
          font-family: Syne, sans-serif;
          font-size: clamp(2.5rem, 6vw, 4.8rem);
          font-weight: 800;
          margin-bottom: 1rem;
        }

        .grad {
          background: linear-gradient(135deg, #a78bfa, #38bdf8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .sub {
          color: var(--muted);
          max-width: 700px;
          margin: auto;
        }

        .btn {
          display: inline-block;
          margin: 0.5rem;
          padding: 0.75rem 1.5rem;
          border-radius: 10px;
          font-weight: 600;
          text-decoration: none;
        }

        .primary {
          background: linear-gradient(135deg, var(--purple), var(--cyan));
          color: white;
        }

        .outline {
          border: 1px solid rgba(255,255,255,0.15);
          color: var(--text);
        }

        section {
          padding: 5rem 2rem;
          max-width: 1100px;
          margin: auto;
        }

        h2 {
          font-family: Syne;
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px,1fr));
          gap: 1.2rem;
        }

        .card {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 1.4rem;
          transition: 0.25s;
        }

        .card:hover {
          transform: translateY(-6px);
          border-color: rgba(167,139,250,0.4);
        }

        .tag {
          font-size: 0.7rem;
          padding: 0.2rem 0.5rem;
          background: rgba(255,255,255,0.06);
          border-radius: 6px;
          margin-right: 0.3rem;
        }

        footer {
          text-align: center;
          padding: 2rem;
          font-size: 0.75rem;
          color: rgba(255,255,255,0.3);
          border-top: 1px solid var(--border);
        }
      `}</style>

      <div id="progress-bar" />

      {/* NAV */}
      <nav id="main-nav">
        <div className="logo">Manan Pal</div>
        <div className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
          <a href="/resume.pdf" download>Resume</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div>
          <h1>
            Hi, I&apos;m <span className="grad">Manan Pal</span>
          </h1>

          <p className="sub">
            Software Engineer · ML Engineer · Full Stack Developer
          </p>

          <p className="sub" style={{ marginTop: "1rem" }}>
            Building AI systems, graph neural networks, and scalable full-stack applications
            with production-level engineering.
          </p>

          <div style={{ marginTop: "2rem" }}>
            <a href="/resume.pdf" className="btn primary" download>
              Download Resume
            </a>
            <a href="#projects" className="btn outline">
              View Projects
            </a>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <h2>Featured Projects</h2>

        <div className="grid">

          <div className="card">
            <h3>Cybersecurity Attack Path Prediction (GNN)</h3>
            <p>
              Graph Neural Network system using GCN + GraphSAGE for attack propagation detection.
            </p>
            <p style={{ color: "#94a3b8", fontSize: "0.85rem" }}>
              Impact: Learns structural attack patterns beyond traditional ML.
            </p>
            <div>
              <span className="tag">PyTorch Geometric</span>
              <span className="tag">NetworkX</span>
            </div>
          </div>

          <div className="card">
            <h3>Brain Tumor Detection</h3>
            <p>
              CNN (83.4%) vs Vision Transformer (99.8%) with GAN augmentation.
            </p>
            <p style={{ color: "#94a3b8", fontSize: "0.85rem" }}>
              Impact: ViT outperformed CNN by 16.4%.
            </p>
            <div>
              <span className="tag">TensorFlow</span>
              <span className="tag">ViT</span>
              <span className="tag">GAN</span>
            </div>
          </div>

          <div className="card">
            <h3>NLP Resume Ranking System</h3>
            <p>
              TF-IDF based resume-job matching with skill-gap analysis.
            </p>
            <p style={{ color: "#94a3b8", fontSize: "0.85rem" }}>
              Impact: Automated candidate ranking with explainability.
            </p>
            <div>
              <span className="tag">NLP</span>
              <span className="tag">Scikit-learn</span>
            </div>
          </div>

        </div>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <h2>Skills</h2>
        <div className="grid">
          <div className="card">Python · C++ · JS · TS</div>
          <div className="card">PyTorch · TensorFlow · GNNs</div>
          <div className="card">React · Next.js · Node.js</div>
          <div className="card">Git · Docker · MongoDB</div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <h2>Contact</h2>
        <div className="card">
          Open for SWE / ML Engineer roles.
          <br /><br />
          <a className="btn primary" href="mailto:mananpal27@gmail.com">
            Email Me
          </a>
        </div>
      </section>

      <footer>
        © 2027 Manan Pal · KIIT University (2023–2027)
      </footer>

      <Analytics />
    </>
  );
}