"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const bar = document.getElementById("progress-bar");
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const total = document.body.scrollHeight - window.innerHeight;
      const pct = total > 0 ? Math.round((scrolled / total) * 100) : 0;
      if (bar) bar.style.width = pct + "%";
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', system-ui, sans-serif; background: #0a0a0f; color: #e8e8f0; line-height: 1.6; overflow-x: hidden; }
        a { text-decoration: none; color: inherit; }

        #progress-bar { position: fixed; top: 0; left: 0; height: 3px; width: 0%; background: linear-gradient(90deg, #7c3aed, #0ea5e9); z-index: 200; transition: width 0.1s linear; }

        nav { position: fixed; top: 3px; left: 0; right: 0; z-index: 100; display: flex; justify-content: space-between; align-items: center; padding: 1rem 2.5rem; background: rgba(10,10,15,0.88); backdrop-filter: blur(14px); border-bottom: 1px solid rgba(255,255,255,0.06); }
        .nav-logo { font-size: 1.1rem; font-weight: 700; background: linear-gradient(135deg, #a78bfa, #38bdf8); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .nav-links { display: flex; gap: 2rem; }
        .nav-links a { font-size: 0.82rem; color: #64748b; letter-spacing: 0.05em; text-transform: uppercase; transition: color 0.2s; }
        .nav-links a:hover { color: #a78bfa; }
        .nav-cta { background: linear-gradient(135deg, #7c3aed, #0ea5e9); padding: 0.45rem 1.25rem; border-radius: 8px; font-size: 0.82rem; font-weight: 700; color: #fff; transition: opacity 0.2s, transform 0.2s; }
        .nav-cta:hover { opacity: 0.85; transform: translateY(-1px); }

        .hero { min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 6rem 2rem 4rem; position: relative; overflow: hidden; }
        .hero::before { content: ''; position: absolute; top: -20%; left: -10%; width: 600px; height: 600px; background: radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%); pointer-events: none; }
        .hero::after { content: ''; position: absolute; bottom: -10%; right: -5%; width: 500px; height: 500px; background: radial-gradient(circle, rgba(14,165,233,0.1) 0%, transparent 70%); pointer-events: none; }
        .hero-inner { max-width: 900px; text-align: center; }

        .avatar { width: 100px; height: 100px; border-radius: 50%; background: linear-gradient(135deg, #7c3aed, #0ea5e9); display: flex; align-items: center; justify-content: center; font-size: 2rem; font-weight: 700; color: #fff; border: 3px solid rgba(124,58,237,0.4); box-shadow: 0 0 30px rgba(124,58,237,0.25); }
        .avatar-badge { display: inline-block; background: rgba(16,185,129,0.15); border: 1px solid rgba(16,185,129,0.35); border-radius: 20px; padding: 0.28rem 0.9rem; font-size: 0.75rem; color: #34d399; letter-spacing: 0.06em; margin-top: 0.7rem; }
        .avatar-badge::before { content: '● '; font-size: 0.6rem; }

        .hero h1 { font-size: clamp(2.5rem, 6vw, 4.5rem); font-weight: 800; line-height: 1.1; margin-bottom: 1rem; letter-spacing: -0.02em; }
        .grad { background: linear-gradient(135deg, #a78bfa 0%, #38bdf8 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .hero-role { font-size: 1.05rem; color: #94a3b8; margin-bottom: 1.5rem; }
        .hero-role span { color: #a78bfa; font-weight: 600; }
        .hero-desc { font-size: 1.02rem; color: #cbd5e1; max-width: 680px; margin: 0 auto 2.5rem; line-height: 1.85; }

        .hero-tags { display: flex; flex-wrap: wrap; justify-content: center; gap: 0.6rem; margin-bottom: 2.5rem; }
        .tag { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 6px; padding: 0.28rem 0.75rem; font-size: 0.76rem; color: #94a3b8; }

        .hero-btns { display: flex; flex-wrap: wrap; justify-content: center; gap: 1rem; }
        .btn-primary { background: linear-gradient(135deg, #7c3aed, #0ea5e9); padding: 0.75rem 2rem; border-radius: 10px; font-weight: 700; font-size: 0.95rem; color: #fff; transition: transform 0.2s, box-shadow 0.2s; }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(124,58,237,0.4); }
        .btn-outline { border: 1.5px solid rgba(255,255,255,0.18); padding: 0.75rem 2rem; border-radius: 10px; font-weight: 600; font-size: 0.95rem; color: #e2e8f0; transition: border-color 0.2s, background 0.2s; }
        .btn-outline:hover { border-color: #a78bfa; background: rgba(167,139,250,0.08); }

        .stats-bar { background: rgba(255,255,255,0.025); border-top: 1px solid rgba(255,255,255,0.06); border-bottom: 1px solid rgba(255,255,255,0.06); padding: 1.5rem 2rem; }
        .stats-inner { max-width: 900px; margin: 0 auto; display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; text-align: center; }
        .stat-num { font-size: 1.9rem; font-weight: 800; background: linear-gradient(135deg, #a78bfa, #38bdf8); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .stat-lbl { font-size: 0.75rem; color: #475569; text-transform: uppercase; letter-spacing: 0.06em; margin-top: 0.15rem; }

        .looking-banner { background: rgba(124,58,237,0.08); border: 1px solid rgba(124,58,237,0.2); border-radius: 14px; padding: 1.25rem 1.75rem; display: flex; align-items: center; gap: 1rem; max-width: 1000px; margin: 3rem auto 0; }
        .looking-dot { width: 10px; height: 10px; background: #a78bfa; border-radius: 50%; flex-shrink: 0; box-shadow: 0 0 8px rgba(167,139,250,0.6); }
        .looking-text { font-size: 0.9rem; color: #cbd5e1; }
        .looking-text strong { color: #a78bfa; }

        section { padding: 5rem 2rem; }
        .section-inner { max-width: 1000px; margin: 0 auto; }
        .section-tag { display: inline-block; background: rgba(124,58,237,0.15); border: 1px solid rgba(124,58,237,0.3); border-radius: 20px; padding: 0.25rem 0.9rem; font-size: 0.73rem; color: #a78bfa; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 0.8rem; }
        .section-title { font-size: clamp(1.8rem, 4vw, 2.4rem); font-weight: 800; margin-bottom: 0.4rem; letter-spacing: -0.02em; }
        .section-sub { color: #475569; font-size: 0.92rem; margin-bottom: 2.5rem; }
        .divider { width: 50px; height: 3px; background: linear-gradient(90deg, #7c3aed, #0ea5e9); border-radius: 2px; margin-bottom: 0.8rem; }

        .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 1.25rem; }
        .skill-cat { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); border-radius: 14px; padding: 1.5rem; transition: border-color 0.2s; }
        .skill-cat:hover { border-color: rgba(124,58,237,0.25); }
        .skill-cat-title { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: #a78bfa; margin-bottom: 0.9rem; font-weight: 600; }
        .skill-pills { display: flex; flex-wrap: wrap; gap: 0.45rem; }
        .pill { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.09); border-radius: 6px; padding: 0.22rem 0.6rem; font-size: 0.76rem; color: #cbd5e1; transition: background 0.18s, border-color 0.18s; }
        .pill:hover { background: rgba(167,139,250,0.14); border-color: rgba(167,139,250,0.35); }

        .projects-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(290px, 1fr)); gap: 1.4rem; }
        .project-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); border-radius: 16px; padding: 1.75rem; transition: transform 0.25s, border-color 0.25s, box-shadow 0.25s; cursor: pointer; position: relative; overflow: hidden; display: flex; flex-direction: column; }
        .project-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, #7c3aed, #0ea5e9); opacity: 0; transition: opacity 0.25s; }
        .project-card:hover { transform: translateY(-5px); border-color: rgba(167,139,250,0.3); box-shadow: 0 15px 40px rgba(124,58,237,0.12); }
        .project-card:hover::before { opacity: 1; }
        .project-icon { width: 42px; height: 42px; border-radius: 10px; background: rgba(124,58,237,0.15); border: 1px solid rgba(124,58,237,0.25); display: flex; align-items: center; justify-content: center; font-size: 1.1rem; margin-bottom: 1.1rem; }
        .project-title { font-size: 1.02rem; font-weight: 700; margin-bottom: 0.55rem; color: #f1f5f9; }
        .project-desc { font-size: 0.85rem; color: #64748b; line-height: 1.75; margin-bottom: 1.1rem; flex: 1; }
        .project-stack { display: flex; flex-wrap: wrap; gap: 0.38rem; margin-bottom: 1.1rem; }
        .stack-tag { background: rgba(14,165,233,0.1); border: 1px solid rgba(14,165,233,0.2); border-radius: 5px; padding: 0.18rem 0.52rem; font-size: 0.7rem; color: #38bdf8; }
        .project-link { font-size: 0.78rem; color: #a78bfa; font-weight: 600; }
        .project-link:hover { color: #c4b5fd; }

        .github-callout { background: rgba(255,255,255,0.025); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 1.75rem 2rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1.2rem; margin-top: 2rem; }
        .github-icon { width: 44px; height: 44px; border-radius: 12px; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center; }
        .github-text h4 { font-size: 0.95rem; font-weight: 700; color: #f1f5f9; margin-bottom: 0.2rem; }
        .github-text p { font-size: 0.82rem; color: #475569; }
        .github-btn { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 0.5rem 1.2rem; font-size: 0.82rem; color: #cbd5e1; font-weight: 600; transition: all 0.2s; }
        .github-btn:hover { background: rgba(167,139,250,0.15); border-color: rgba(167,139,250,0.35); color: #a78bfa; }

        .edu-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); border-radius: 16px; padding: 2rem; display: flex; gap: 1.5rem; align-items: flex-start; transition: border-color 0.2s; }
        .edu-card:hover { border-color: rgba(124,58,237,0.25); }
        .edu-icon { width: 52px; height: 52px; border-radius: 12px; background: rgba(124,58,237,0.15); border: 1px solid rgba(124,58,237,0.3); display: flex; align-items: center; justify-content: center; font-size: 1.4rem; flex-shrink: 0; }
        .edu-degree { font-size: 1.12rem; font-weight: 700; color: #f1f5f9; margin-bottom: 0.3rem; }
        .edu-school { font-size: 0.93rem; color: #a78bfa; font-weight: 600; margin-bottom: 0.3rem; }
        .edu-meta { font-size: 0.82rem; color: #475569; }
        .edu-badges { display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 0.7rem; }
        .badge-green { display: inline-block; background: rgba(16,185,129,0.13); border: 1px solid rgba(16,185,129,0.3); border-radius: 20px; padding: 0.2rem 0.7rem; font-size: 0.72rem; color: #34d399; }
        .badge-blue { display: inline-block; background: rgba(14,165,233,0.12); border: 1px solid rgba(14,165,233,0.25); border-radius: 20px; padding: 0.2rem 0.7rem; font-size: 0.72rem; color: #38bdf8; }

        .contact-wrap { background: rgba(124,58,237,0.06); border: 1px solid rgba(124,58,237,0.18); border-radius: 20px; padding: 3rem; text-align: center; }
        .contact-wrap h3 { font-size: 1.75rem; font-weight: 800; margin-bottom: 0.5rem; }
        .contact-wrap p { color: #475569; margin-bottom: 2rem; font-size: 0.95rem; }
        .contact-links { display: flex; flex-wrap: wrap; justify-content: center; gap: 1rem; }
        .contact-btn { display: flex; align-items: center; gap: 0.5rem; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 0.65rem 1.4rem; font-size: 0.87rem; color: #cbd5e1; transition: all 0.2s; font-weight: 500; }
        .contact-btn:hover { background: rgba(124,58,237,0.15); border-color: rgba(167,139,250,0.4); color: #a78bfa; }

        footer { text-align: center; padding: 2rem; color: #1e293b; font-size: 0.78rem; border-top: 1px solid rgba(255,255,255,0.04); }
      `}</style>

      <div id="progress-bar" />

      {/* NAV */}
      <nav>
        <div className="nav-logo">Manan Pal</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
        </div>
        <a href="mailto:mananpal27@gmail.com" className="nav-cta">Hire Me</a>
      </nav>

      {/* HERO */}
      <section className="hero" id="about">
        <div className="hero-inner">
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "2rem" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div className="avatar">MP</div>
              <span className="avatar-badge">Open to Opportunities</span>
            </div>
          </div>
          <h1>Hi, I&apos;m <span className="grad">Manan Pal</span></h1>
          <p className="hero-role">
            <span>Software Engineer</span> · Full-Stack Development · ML/AI Systems
          </p>
          <p className="hero-desc">
            Final-year CS student at KIIT University building intelligent systems and scalable
            applications — from graph neural networks for cybersecurity to end-to-end ML pipelines
            and full-stack products.
          </p>
          <div className="hero-tags">
            <span className="tag">🧠 Machine Learning</span>
            <span className="tag">🌐 Full-Stack Dev</span>
            <span className="tag">🔬 Graph Neural Networks</span>
            <span className="tag">⚡ PyTorch · TensorFlow</span>
            <span className="tag">🚀 React · Next.js</span>
            <span className="tag">📍 Bhubaneswar, India</span>
          </div>
          <div className="hero-btns">
            <a href="#projects" className="btn-primary">View My Work</a>
            <a href="mailto:mananpal27@gmail.com" className="btn-outline">Get In Touch</a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="stats-bar">
        <div className="stats-inner">
          <div><div className="stat-num">3+</div><div className="stat-lbl">ML Projects</div></div>
          <div><div className="stat-num">4th</div><div className="stat-lbl">Year · KIIT</div></div>
          <div><div className="stat-num">2025</div><div className="stat-lbl">Graduating</div></div>
        </div>
      </div>

      {/* LOOKING FOR BANNER */}
      <div className="looking-banner" style={{ padding: "0 2rem" }}>
        <div className="looking-dot" />
        <p className="looking-text">
          <strong>Currently looking for</strong> full-time SWE / ML Engineer roles and internships
          — available from mid-2025. Open to on-site, hybrid, or remote positions.
        </p>
      </div>

      {/* SKILLS */}
      <section id="skills">
        <div className="section-inner">
          <span className="section-tag">Tech Stack</span>
          <div className="divider" />
          <h2 className="section-title">Skills &amp; Technologies</h2>
          <p className="section-sub">Tools I work with across ML research, full-stack engineering, and systems design.</p>
          <div className="skills-grid">
            <div className="skill-cat">
              <div className="skill-cat-title">Languages</div>
              <div className="skill-pills">
                {["Python", "JavaScript", "TypeScript", "C++", "SQL"].map((s) => (
                  <span key={s} className="pill">{s}</span>
                ))}
              </div>
            </div>
            <div className="skill-cat">
              <div className="skill-cat-title">ML / AI</div>
              <div className="skill-pills">
                {["PyTorch", "TensorFlow", "Scikit-learn", "PyTorch Geometric", "Hugging Face", "Grad-CAM"].map((s) => (
                  <span key={s} className="pill">{s}</span>
                ))}
              </div>
            </div>
            <div className="skill-cat">
              <div className="skill-cat-title">Full-Stack</div>
              <div className="skill-pills">
                {["React", "Next.js", "Node.js", "Express", "REST APIs", "Tailwind CSS"].map((s) => (
                  <span key={s} className="pill">{s}</span>
                ))}
              </div>
            </div>
            <div className="skill-cat">
              <div className="skill-cat-title">Data &amp; Tools</div>
              <div className="skill-pills">
                {["NetworkX", "Pandas", "NumPy", "Matplotlib", "Git", "Docker", "MongoDB"].map((s) => (
                  <span key={s} className="pill">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ paddingTop: "1rem" }}>
        <div className="section-inner">
          <span className="section-tag">Portfolio</span>
          <div className="divider" />
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-sub">A selection of work spanning applied ML, computer vision, and NLP.</p>
          <div className="projects-grid">

            <a href="https://github.com/mananpal-dev/cybersecurity-attack-path-prediction-using-gnn" target="_blank" rel="noopener noreferrer" className="project-card">
              <div className="project-icon">🕸️</div>
              <div className="project-title">Cybersecurity Attack Path Prediction</div>
              <div className="project-desc">GNN system using GCN and GraphSAGE for node-level attack classification and real-time threat modeling on network topology graphs.</div>
              <div className="project-stack">
                {["Python", "PyTorch Geometric", "NetworkX", "GCN"].map((t) => <span key={t} className="stack-tag">{t}</span>)}
              </div>
              <div className="project-link">View on GitHub ↗</div>
            </a>

            <a href="https://github.com/mananpal-dev/brain-tumor-detection" target="_blank" rel="noopener noreferrer" className="project-card">
              <div className="project-icon">🧬</div>
              <div className="project-title">Brain Tumor Detection: CNN vs ViT</div>
              <div className="project-desc">Deep learning comparative study of CNN and Vision Transformers for medical imaging, with GAN data synthesis and Grad-CAM explainability.</div>
              <div className="project-stack">
                {["TensorFlow", "Vision Transformer", "GAN", "Grad-CAM"].map((t) => <span key={t} className="stack-tag">{t}</span>)}
              </div>
              <div className="project-link">View on GitHub ↗</div>
            </a>

            <a href="https://github.com/mananpal-dev/ResumeRanker" target="_blank" rel="noopener noreferrer" className="project-card">
              <div className="project-icon">📄</div>
              <div className="project-title">NLP Resume Ranking System</div>
              <div className="project-desc">TF-IDF based intelligent resume matching engine with automated skill-gap analysis, relevance scoring, and candidate ranking pipeline.</div>
              <div className="project-stack">
                {["Python", "Scikit-learn", "NLP", "TF-IDF"].map((t) => <span key={t} className="stack-tag">{t}</span>)}
              </div>
              <div className="project-link">View on GitHub ↗</div>
            </a>

          </div>

          {/* GITHUB CALLOUT */}
          <div className="github-callout">
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div className="github-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#a78bfa">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </div>
              <div className="github-text">
                <h4>More projects on GitHub</h4>
                <p>See all repositories, contributions, and open source work</p>
              </div>
            </div>
            <a href="https://github.com/mananpal-dev" target="_blank" rel="noopener noreferrer" className="github-btn">
              github.com/mananpal-dev ↗
            </a>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" style={{ paddingTop: "1rem" }}>
        <div className="section-inner">
          <span className="section-tag">Background</span>
          <div className="divider" />
          <h2 className="section-title">Education</h2>
          <p className="section-sub">Academic foundation in computer science and engineering.</p>
          <div className="edu-card">
            <div className="edu-icon">🎓</div>
            <div>
              <div className="edu-degree">B.Tech in Computer Science &amp; Engineering</div>
              <div className="edu-school">Kalinga Institute of Industrial Technology (KIIT), Bhubaneswar</div>
              <div className="edu-meta">2021 – 2025 &nbsp;·&nbsp; Bhubaneswar, Odisha, India</div>
              <div className="edu-badges">
                <span className="badge-green">Final Year · Graduating 2025</span>
                <span className="badge-blue">Computer Science</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section style={{ paddingTop: "1rem" }}>
        <div className="section-inner">
          <div className="contact-wrap">
            <h3>Let&apos;s Build Something Together</h3>
            <p>Open to full-time SWE / ML roles, internships, and research collaborations. I reply fast.</p>
            <div className="contact-links">
              <a href="mailto:mananpal27@gmail.com" className="contact-btn">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                mananpal27@gmail.com
              </a>
              <a href="https://linkedin.com/in/mananpal-dev" target="_blank" rel="noopener noreferrer" className="contact-btn">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
                </svg>
                LinkedIn
              </a>
              <a href="https://github.com/mananpal-dev" target="_blank" rel="noopener noreferrer" className="contact-btn">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>© 2025 Manan Pal · KIIT University, Bhubaneswar · Built with care</footer>
    </>
  );
}