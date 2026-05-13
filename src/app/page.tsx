"use client";

import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import Image from "next/image";

const featuredProjects = [
  {
    title: "Cybersecurity Attack Path Prediction",
    href: "https://github.com/mananpal-dev/cybersecurity-attack-path-prediction-using-gnn",
    badge: "Graph ML",
    outcome:
      "Built a graph-based security modeling system to predict attack propagation paths in enterprise-like networks using GNN architectures.",
    highlights: ["GCN + GraphSAGE", "PyTorch Geometric", "Neo4j Aura", "Streamlit demo"],
  },
  {
    title: "Brain Tumor Detection: CNN vs ViT",
    href: "https://github.com/mananpal-dev/brain-tumor-detection",
    badge: "Computer Vision",
    outcome:
      "Benchmarked CNNs against Vision Transformers on MRI scans and pushed model performance to 99.8% with explainability in the loop.",
    highlights: ["ViT: 99.8%", "TensorFlow", "GAN augmentation", "Grad-CAM"],
  },
  {
    title: "ResumeRanker",
    href: "https://github.com/mananpal-dev/ResumeRanker",
    badge: "Applied NLP",
    outcome:
      "Created a recruiter-facing ranking workflow that parses resumes, scores candidates, and explains gaps against a job description.",
    highlights: ["PDF parsing", "TF-IDF matching", "Scikit-learn", "Explainable scoring"],
  },
  {
    title: "Student Placement Readiness Prediction",
    href: "https://github.com/mananpal-dev",
    badge: "ML · Predictive",
    outcome:
      "Benchmarked four classifiers on student academic and extracurricular features. Random Forest achieved 89.5% accuracy with real-time predictions via a Tkinter GUI.",
    highlights: ["Random Forest 89.5%", "SVM · KNN · LR", "Feature importance viz", "Tkinter GUI"],
  },
];

const strengths = [
  "Strong at turning technical ideas into polished portfolio-ready products",
  "Comfortable across ML systems, APIs, and user-facing full-stack delivery",
  "Actively seeking SWE, ML engineering, and applied AI internship roles",
];

const skillGroups = [
  {
    label: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "C++", "SQL"],
  },
  {
    label: "ML / AI",
    items: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "PyTorch Geometric",
      "GraphSAGE",
      "Grad-CAM",
    ],
  },
  {
    label: "Product Engineering",
    items: ["React", "Next.js", "Node.js", "Express", "REST APIs", "MongoDB"],
  },
  {
    label: "Data / Tooling",
    items: ["Pandas", "NumPy", "NetworkX", "Neo4j Aura", "Docker", "Git"],
  },
];

const skillProficiency = [
  { name: "Python", pct: 92 },
  { name: "Machine Learning", pct: 88 },
  { name: "TypeScript / React", pct: 80 },
  { name: "PyTorch / TensorFlow", pct: 85 },
  { name: "Graph ML", pct: 82 },
  { name: "Node.js / APIs", pct: 78 },
];

const recruiterSignals = [
  { value: "4+", label: "Recruiter-ready projects" },
  { value: "99.8%", label: "Best benchmark result" },
  { value: "89.5%", label: "Placement model accuracy" },
  { value: "2027", label: "Graduation year" },
];

const recruiterReasons = [
  {
    title: "Comfortable across ML and product engineering",
    copy:
      "I can contribute across model development, backend APIs, and frontend delivery without losing sight of deadlines or usability.",
  },
  {
    title: "Builds with measurable outcomes",
    copy:
      "I present work through accuracy, scale, explainability, and practical impact so teams can understand the value quickly.",
  },
  {
    title: "Good fit for internships and early-career roles",
    copy:
      "I learn quickly, communicate clearly, and adapt well when a project moves from experimentation to implementation.",
  },
];

const internshipFit = [
  {
    label: "Best role fit",
    value: "SWE Intern, ML Engineer Intern, Applied AI Intern",
  },
  {
    label: "Environments I like",
    value: "Product teams, backend-heavy apps, intelligent tooling, AI-enabled workflows",
  },
  {
    label: "What I contribute quickly",
    value: "Prototype velocity, clean implementation, and strong technical communication",
  },
];

const certifications = [
  { name: "AWS Cloud Foundations", issuer: "AWS Academy" },
  { name: "ML Foundations", issuer: "AWS Academy" },
  { name: "Ethical Decision Making in Tech", issuer: "Univ. of Colorado Boulder" },
  { name: "Business for Good", issuer: "London Business School" },
];

const virtualInternships = [
  { domain: "AI / ML", org: "AWS Academy · AICTE EduSkills" },
  { domain: "Android Dev", org: "Google · AICTE EduSkills" },
  { domain: "Generative AI", org: "AICTE EduSkills 2025" },
];

type GithubStats = {
  repos: number | null;
  stars: number | null;
};

export default function Home() {
  const [githubStats, setGithubStats] = useState<GithubStats>({ repos: null, stars: null });
  const [barsVisible, setBarsVisible] = useState(false);

  useEffect(() => {
    fetch("https://api.github.com/users/mananpal-dev")
      .then((r) => r.json())
      .then((d: { public_repos?: number }) => {
        if (typeof d.public_repos === "number") {
          setGithubStats((prev) => ({ ...prev, repos: d.public_repos }));
        }
      })
      .catch(() => {});

    fetch("https://api.github.com/users/mananpal-dev/repos?per_page=100")
      .then((r) => r.json())
      .then((repos: Array<{ stargazers_count?: number }>) => {
        if (Array.isArray(repos)) {
          const stars = repos.reduce((acc, repo) => acc + (repo.stargazers_count || 0), 0);
          setGithubStats((prev) => ({ ...prev, stars }));
        }
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const previousScrollBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = "smooth";

    const nav = document.getElementById("main-nav") as HTMLElement | null;

    const handleScroll = () => {
      if (nav) {
        nav.style.borderBottomColor =
          window.scrollY > 12 ? "rgba(251, 191, 36, 0.22)" : "rgba(255,255,255,0.08)";
        nav.style.background =
          window.scrollY > 12 ? "rgba(8, 12, 24, 0.9)" : "rgba(8, 12, 24, 0.72)";
      }
    };

    const fades = document.querySelectorAll("[data-fade]");
    fades.forEach((element, index) => {
      if (element instanceof HTMLElement) {
        element.style.animationDelay = `${index * 0.08}s`;
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id === "skills-section") {
            setBarsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const skillsSection = document.getElementById("skills-section");
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      root.style.scrollBehavior = previousScrollBehavior;
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
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

        [data-fade] {
          opacity: 0;
          transform: translateY(24px);
          animation: rise 0.65s ease forwards;
        }

        @keyframes rise {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
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
          grid-template-columns: minmax(0, 1.35fr) minmax(300px, 0.95fr);
          gap: 1.5rem;
          align-items: stretch;
        }

        .hero-main,
        .hero-side,
        .section-card,
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
          max-width: 12ch;
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

        .hero-proof,
        .signal-grid,
        .reasons-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0.8rem;
        }

        .hero-proof {
          margin-top: 1.6rem;
        }

        .proof-card,
        .signal-card,
        .reason-card {
          padding: 1rem;
          border-radius: 18px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(148, 163, 184, 0.12);
          transition: border-color 0.2s ease;
        }

        .proof-card:hover,
        .signal-card:hover,
        .reason-card:hover {
          border-color: rgba(251, 191, 36, 0.28);
        }

        .proof-number,
        .signal-value {
          font-size: 1.6rem;
          color: var(--gold-soft);
          font-family: "Space Grotesk", sans-serif;
          font-weight: 700;
        }

        .proof-label,
        .signal-label {
          margin-top: 0.2rem;
          color: var(--muted);
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .reason-title {
          font-size: 1rem;
          color: var(--gold-soft);
          margin-bottom: 0.45rem;
        }

        .reason-copy {
          margin: 0;
          color: var(--muted-strong);
          line-height: 1.75;
          font-size: 0.92rem;
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

        /* ── PROFILE CHIP — bigger photo ── */
        .profile-chip {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 1.05rem;
          border-radius: 18px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(148, 163, 184, 0.14);
        }

        .profile-photo {
          width: 5.2rem;
          height: 5.2rem;
          border-radius: 1.1rem;
          object-fit: cover;
          object-position: center top;
          border: 2px solid rgba(251, 191, 36, 0.4);
          flex-shrink: 0;
        }

        .avatar {
          width: 5.2rem;
          height: 5.2rem;
          border-radius: 1.1rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(251, 191, 36, 0.22), rgba(56, 189, 248, 0.18));
          border: 1px solid rgba(251, 191, 36, 0.24);
          color: var(--gold-soft);
          font-family: "Space Grotesk", sans-serif;
          font-size: 1.4rem;
          font-weight: 700;
          flex-shrink: 0;
        }

        .profile-info strong {
          display: block;
          font-size: 1.08rem;
        }

        .profile-info span {
          color: var(--muted);
          font-size: 0.88rem;
          display: block;
          margin-top: 0.15rem;
        }

        /* Certification badges in sidebar */
        .cert-strip {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }

        .cert-pill {
          display: inline-flex;
          flex-direction: column;
          padding: 0.4rem 0.7rem;
          border-radius: 10px;
          background: rgba(251, 191, 36, 0.06);
          border: 1px solid rgba(251, 191, 36, 0.16);
          font-size: 0.72rem;
          line-height: 1.4;
        }

        .cert-pill strong {
          color: var(--gold-soft);
          font-weight: 700;
        }

        .cert-pill span {
          color: var(--muted);
        }

        /* Internship row */
        .intern-row {
          display: grid;
          gap: 0.5rem;
        }

        .intern-item {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          padding: 0.6rem 0.85rem;
          border-radius: 12px;
          background: rgba(52, 211, 153, 0.04);
          border: 1px solid rgba(52, 211, 153, 0.14);
          font-size: 0.82rem;
        }

        .intern-domain {
          color: #9ff0c9;
          font-weight: 700;
          white-space: nowrap;
        }

        .intern-org {
          color: var(--muted);
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

        .github-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.6rem;
        }

        .github-stat {
          padding: 0.75rem 0.9rem;
          border-radius: 14px;
          background: rgba(56, 189, 248, 0.05);
          border: 1px solid rgba(56, 189, 248, 0.14);
          text-align: center;
        }

        .github-stat-num {
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--sky);
          font-family: "Space Grotesk", sans-serif;
        }

        .github-stat-label {
          font-size: 0.72rem;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 0.07em;
          margin-top: 0.15rem;
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

        .section-card,
        .contact-card {
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

        .proficiency-section {
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--line);
        }

        .proficiency-title {
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--gold-soft);
          margin-bottom: 1rem;
        }

        .proficiency-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.9rem 2rem;
        }

        .prof-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.35rem;
          font-size: 0.85rem;
        }

        .prof-name { color: var(--muted-strong); }
        .prof-pct { color: var(--gold-soft); font-weight: 700; }

        .prof-track {
          height: 5px;
          background: rgba(255,255,255,0.06);
          border-radius: 999px;
          overflow: hidden;
        }

        .prof-bar {
          height: 100%;
          border-radius: 999px;
          background: linear-gradient(90deg, var(--sky), var(--mint));
          width: 0%;
          transition: width 1.1s cubic-bezier(0.22, 1, 0.36, 1);
        }

        /* 4-column project grid */
        .project-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 1rem;
        }

        .fit-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1rem;
        }

        .project-card,
        .fit-card {
          padding: 1.25rem;
          border-radius: 22px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(148, 163, 184, 0.12);
        }

        .project-card {
          display: flex;
          flex-direction: column;
          gap: 1rem;
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
          font-size: 1.05rem;
          letter-spacing: -0.03em;
        }

        .project-copy,
        .fit-copy {
          margin: 0;
          color: var(--muted-strong);
          line-height: 1.8;
          font-size: 0.9rem;
        }

        .highlight-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
          margin-top: auto;
        }

        .highlight {
          padding: 0.3rem 0.62rem;
          border-radius: 999px;
          border: 1px solid rgba(148, 163, 184, 0.15);
          background: rgba(255,255,255,0.025);
          color: var(--muted-strong);
          font-size: 0.76rem;
        }

        .fit-title {
          font-family: "Space Grotesk", sans-serif;
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 0.4rem;
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

        @media (max-width: 1080px) {
          .project-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 980px) {
          .hero-card,
          .skills-grid,
          .proficiency-grid,
          .signal-grid,
          .reasons-grid,
          .fit-grid {
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

          .project-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <nav id="main-nav">
        <div className="nav-mark">
          <span className="nav-badge">MP</span>
          <span>Manan Pal</span>
        </div>
        <div className="nav-links">
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#fit">Fit</a>
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
                  Building <strong>practical AI products</strong>
                </h1>

                <p data-fade className="hero-copy">
                  I&apos;m Manan Pal, a Computer Science student at KIIT graduating in 2027. I build
                  machine learning systems, graph-based security solutions, and full-stack
                  applications that turn strong technical ideas into usable products with clear,
                  recruiter-friendly proof of execution.
                </p>

                <div data-fade className="hero-proof">
                  <div className="proof-card">
                    <div className="proof-number">4+</div>
                    <div className="proof-label">Recruiter-ready projects</div>
                  </div>
                  <div className="proof-card">
                    <div className="proof-number">99.8%</div>
                    <div className="proof-label">Best benchmark result</div>
                  </div>
                  <div className="proof-card">
                    <div className="proof-number">89.5%</div>
                    <div className="proof-label">Placement model accuracy</div>
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
                {/* ── Profile chip with bigger photo ── */}
                <div data-fade className="profile-chip">
                  <Image
                    src="/profile.jpg"
                    alt="Manan Pal"
                    width={84}
                    height={84}
                    className="profile-photo"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      const fallback = e.currentTarget.nextElementSibling;
                      if (fallback instanceof HTMLElement) {
                        fallback.style.display = "inline-flex";
                      }
                    }}
                  />
                  <div className="avatar" style={{ display: "none" }}>
                    MP
                  </div>
                  <div className="profile-info">
                    <strong>Manan Pal</strong>
                    <span>KIIT University · Bhubaneswar</span>
                    <span style={{ marginTop: "0.3rem", color: "var(--mint)", fontSize: "0.78rem", fontWeight: 700 }}>
                      B.Tech CSE · Class of 2027
                    </span>
                  </div>
                </div>

                <div data-fade className="recruiter-box">
                  <h3>What a recruiter should know first</h3>
                  <p>
                    I&apos;m strongest where machine learning, clean engineering, and product
                    thinking overlap. I focus on measurable outcomes, practical implementation, and
                    work that can be explained clearly to both technical and non-technical teams.
                  </p>
                </div>

                {(githubStats.repos !== null || githubStats.stars !== null) && (
                  <div data-fade className="github-stats">
                    {githubStats.repos !== null && (
                      <div className="github-stat">
                        <div className="github-stat-num">{githubStats.repos}</div>
                        <div className="github-stat-label">Public Repos</div>
                      </div>
                    )}
                    {githubStats.stars !== null && (
                      <div className="github-stat">
                        <div className="github-stat-num">{githubStats.stars}</div>
                        <div className="github-stat-label">GitHub Stars</div>
                      </div>
                    )}
                  </div>
                )}

                {/* ── Virtual Internships ── */}
                <div data-fade>
                  <div style={{ fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--gold-soft)", marginBottom: "0.5rem" }}>
                    Virtual Internships · AICTE 2025
                  </div>
                  <div className="intern-row">
                    {virtualInternships.map((item) => (
                      <div className="intern-item" key={item.domain}>
                        <span className="intern-domain">{item.domain}</span>
                        <span className="intern-org">{item.org}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ── Certifications ── */}
                <div data-fade>
                  <div style={{ fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--gold-soft)", marginBottom: "0.5rem" }}>
                    Certifications
                  </div>
                  <div className="cert-strip">
                    {certifications.map((cert) => (
                      <div className="cert-pill" key={cert.name}>
                        <strong>{cert.name}</strong>
                        <span>{cert.issuer}</span>
                      </div>
                    ))}
                  </div>
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

        <section className="section" id="signals">
          <div className="shell">
            <div className="section-card">
              <div className="section-top">
                <div>
                  <div className="section-kicker">Fast Signal</div>
                  <h2 className="section-title">What stands out in 15 seconds</h2>
                </div>
                <p className="section-sub">
                  A quick recruiter scan of technical range, proof of work, and internship
                  readiness without forcing them to dig through every section.
                </p>
              </div>

              <div className="signal-grid">
                {recruiterSignals.map((signal) => (
                  <div className="signal-card" key={signal.label}>
                    <div className="signal-value">{signal.value}</div>
                    <div className="signal-label">{signal.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="skills-section">
          <div className="shell">
            <div className="section-card" id="skills">
              <div className="section-top">
                <div>
                  <div className="section-kicker">Core Stack</div>
                  <h2 className="section-title">Skills recruiters scan for</h2>
                </div>
                <p className="section-sub">
                  Grouped to make technical range easy to evaluate across languages, ML depth,
                  product engineering, and graph tooling including GraphSAGE and Neo4j Aura.
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

              <div className="proficiency-section">
                <div className="proficiency-title">Proficiency breakdown</div>
                <div className="proficiency-grid">
                  {skillProficiency.map((skill) => (
                    <div className="prof-item" key={skill.name}>
                      <div className="prof-header">
                        <span className="prof-name">{skill.name}</span>
                        <span className="prof-pct">{skill.pct}%</span>
                      </div>
                      <div className="prof-track">
                        <div
                          className="prof-bar"
                          style={{ width: barsVisible ? `${skill.pct}%` : "0%" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
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
                  Each project is framed around outcomes, technical decisions, and why the work is
                  relevant in a real engineering setting.
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

        <section className="section" id="fit">
          <div className="shell">
            <div className="section-card">
              <div className="section-top">
                <div>
                  <div className="section-kicker">Recruiter Fit</div>
                  <h2 className="section-title">Why I&apos;d be useful on a team</h2>
                </div>
                <p className="section-sub">
                  This section is designed to help a hiring team understand role fit and working
                  style quickly.
                </p>
              </div>

              <div className="reasons-grid">
                {recruiterReasons.map((reason) => (
                  <div className="reason-card" key={reason.title}>
                    <h3 className="reason-title">{reason.title}</h3>
                    <p className="reason-copy">{reason.copy}</p>
                  </div>
                ))}
              </div>

              <div className="proficiency-section">
                <div className="proficiency-title">Best internship fit</div>
                <div className="fit-grid">
                  {internshipFit.map((item) => (
                    <div className="fit-card" key={item.label}>
                      <div className="fit-title">{item.label}</div>
                      <p className="fit-copy">{item.value}</p>
                    </div>
                  ))}
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
                I&apos;d love to connect. The fastest way to reach me is by email or LinkedIn, and
                I&apos;m especially interested in internship opportunities where I can contribute
                quickly and keep learning from strong teams.
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
        Copyright 2027 Manan Pal | Portfolio focused on recruiter clarity, proof of work, and
        strong first impressions
      </footer>

      <Analytics />
    </>
  );
}
