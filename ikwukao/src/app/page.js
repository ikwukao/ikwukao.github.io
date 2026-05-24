export const metadata = {
  openGraph: {
    title: "ikwukao",
    description: "Backend Engineer & AI Builder",
    images: ["./public/og-image.png"],
  },
};

export default function IkwukaoDev() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-linear-to-br from-zinc-900 via-black to-zinc-950 opacity-90"></div>

        <div className="relative max-w-6xl mx-auto px-6 py-28 lg:py-36">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="uppercase tracking-[0.3em] text-sm text-zinc-400 mb-4">
                Ikwuka Okoye
              </p>

              <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
                Backend Engineer
                <span className="block text-zinc-400">& AI Builder</span>
              </h1>

              <p className="text-lg text-zinc-300 leading-relaxed max-w-xl mb-10">
                I design scalable backend systems, build intelligent AI-powered
                applications, and create modern digital experiences using Python,
                Go, APIs, automation, and cloud technologies.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="px-6 py-3 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition"
                >
                  View Projects
                </a>

                <a
                  href="#contact"
                  className="px-6 py-3 rounded-2xl border border-white/20 hover:bg-white/10 transition"
                >
                  Contact Me
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl border border-white/10 bg-zinc-900 p-8 shadow-2xl">
                <div className="space-y-5">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="text-zinc-400">Primary Stack</span>
                    <span className="font-semibold">Python • Go • Linux • SQL • Docker</span>
                  </div>

                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="text-zinc-400">Specialization</span>
                    <span className="font-semibold">Backend Engineering</span>
                  </div>

                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="text-zinc-400">Focus</span>
                    <span className="font-semibold">AI Systems & APIs</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">Availability</span>
                    <span className="text-green-400 font-semibold">
                      Open to Remote Work
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-14 items-start">
          <div>
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-zinc-300 leading-relaxed text-lg mb-5">
              I am a Backend Engineer passionate about building reliable,
              scalable, and secure systems. My work focuses on APIs,
              automation, distributed systems, cloud infrastructure, and
              AI-driven applications.
            </p>

            <p className="text-zinc-400 leading-relaxed">
              I enjoy solving difficult engineering problems, learning emerging
              technologies, and creating impactful software products that help
              businesses and individuals operate more efficiently.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              'Python',
              'Go',
              'FastAPI',
              'Docker',
              'Linux',
              'PostgreSQL',
              'REST APIs',
              'AI Engineering',
            ].map((skill) => (
              <div
                key={skill}
                className="rounded-2xl border border-white/10 bg-zinc-900 p-5 text-center hover:border-white/30 transition"
              >
                <p className="font-medium">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-zinc-950 border-y border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="mb-14">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-zinc-400 max-w-2xl">
              A selection of projects focused on backend systems, APIs,
              automation, and AI-powered applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'AI Automation Platform',
                desc: 'Built an automation platform integrating AI agents, APIs, and workflow orchestration.',
              },
              {
                title: 'Scalable REST API',
                desc: 'Designed a production-ready backend service with authentication, caching, and database optimization.',
              },
              {
                title: 'Cloud Infrastructure Toolkit',
                desc: 'Created deployment and monitoring tools for scalable Linux-based cloud environments.',
              },
            ].map((project) => (
              <div
                key={project.title}
                className="rounded-3xl border border-white/10 bg-black p-7 hover:border-white/30 hover:-translate-y-1 transition"
              >
                <h3 className="text-2xl font-semibold mb-4">
                  {project.title}
                </h3>

                <p className="text-zinc-400 leading-relaxed">
                  {project.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl font-bold mb-6">Let’s Work Together</h2>

        <p className="text-zinc-400 text-lg leading-relaxed mb-10">
          Interested in Backend Engineering, AI Systems, Automation, or remote
          collaboration opportunities? Reach out and let’s build something
          impactful!
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:ikwukao@proton.me"
            className="px-6 py-3 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition"
          >
            ikwukao@proton.me
          </a>

          <a
            href="https://github.com/ikwukao"
            className="px-6 py-3 rounded-2xl border border-white/20 hover:bg-white/10 transition"
          >
            GitHub
          </a>

          <a
            href="https://x.com/ikwukao_"
            className="px-6 py-3 rounded-2xl border border-white/20 hover:bg-white/10 transition"
          >
            X/Twitter
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-zinc-500 text-sm">
        Ikwukao.dev © 2026 — Feel Free to Share My Information
      </footer>
    </div>
  );
}
