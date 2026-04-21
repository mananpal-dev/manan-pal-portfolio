export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white">

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-5xl text-center">

          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            Manan{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
              Pal
            </span>
          </h1>

          <p className="text-2xl md:text-3xl text-emerald-300 mb-8">
            Software Engineer | Full-Stack Development | ML/AI Systems
          </p>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
            I build intelligent systems, scalable software, and end-to-end
            applications across machine learning, full-stack development,
            graph neural networks, and modern software engineering.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="bg-white text-black px-6 py-3 rounded-xl font-semibold"
            >
              View Projects
            </a>

            <a
              href="mailto:mananpal27@gmail.com"
              className="border border-white px-6 py-3 rounded-xl font-semibold"
            >
              Contact
            </a>
          </div>

        </div>
      </section>


      {/* PROJECTS */}
      <section id="projects" className="px-8 pb-24">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-5xl font-bold mb-12 text-center">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <a
              href="https://github.com/mananpal-dev/cybersecurity-attack-path-prediction-using-gnn"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-zinc-900 p-8 rounded-2xl border border-zinc-700 hover:border-emerald-400 hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4">
                Cybersecurity Attack Path Prediction
              </h3>

              <p className="text-gray-400 mb-6">
                Graph Neural Network system using GCN and GraphSAGE for
                node-level attack classification and threat modeling.
              </p>

              <p className="text-emerald-400">
                Python • PyTorch Geometric • NetworkX
              </p>
            </a>


            <a
              href="https://github.com/mananpal-dev/brain-tumor-detection"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-zinc-900 p-8 rounded-2xl border border-zinc-700 hover:border-emerald-400 hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4">
                Brain Tumor Detection: CNN vs ViT
              </h3>

              <p className="text-gray-400 mb-6">
                Deep learning system comparing CNN and Vision Transformers,
                including GAN synthesis and Grad-CAM explainability.
              </p>

              <p className="text-emerald-400">
                TensorFlow • Vision Transformer • GAN
              </p>
            </a>


            <a
              href="https://github.com/mananpal-dev/ResumeRanker"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-zinc-900 p-8 rounded-2xl border border-zinc-700 hover:border-emerald-400 hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4">
                NLP Resume Ranking System
              </h3>

              <p className="text-gray-400 mb-6">
                TF-IDF based resume matching system with ranking,
                skill-gap analysis, and candidate relevance scoring.
              </p>

              <p className="text-emerald-400">
                Python • Scikit-learn • NLP
              </p>
            </a>

          </div>
        </div>
      </section>


      {/* CONTACT */}
      <section className="pb-24 text-center">
        <h2 className="text-4xl font-bold mb-8">
          Connect With Me
        </h2>

        <div className="flex flex-wrap justify-center gap-6 text-lg">

          <a href="mailto:mananpal27@gmail.com">
            Email
          </a>

          <a
            href="https://linkedin.com/in/mananpal-dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/mananpal-dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

        </div>
      </section>

    </main>
  );
}