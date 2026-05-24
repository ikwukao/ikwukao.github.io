import Image from "next/image";

export const metadata = {
  title: "ikwukao | Backend Engineer & AI Builder",
  description:
    "Backend Engineer specializing in Python, Go, APIs, Linux, Docker, and AI-powered systems.",

  openGraph: {
    title: "ikwukao",
    description: "Backend Engineer & AI Builder",
    images: ["/og-image.png"],
  },
};

export default function IkwukaoDev() {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="font-black tracking-widest text-lg">IKWUKAO</h1>

          <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
            <a href="#about" className="hover:text-white transition">
              About
            </a>

            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>

            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-linear-to-brrom-zinc-900 via-black to-zinc-950 opacity-95"></div>

        <div className="absolute inset-0 opacity-[0.03] bg-[url('/grid.svg')]"></div>

        <div className="relative max-w-6xl mx-auto px-6 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* LEFT CONTENT */}
            <div>
              <p className="uppercase tracking-[0.3em] text-sm text-zinc-500 mb-6">
                Backend Engineer • AI Builder
              </p>

              <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
                Ikwuka
                <span className="block text-zinc-400">Okoye</span>
              </h1>

              <p className="text-lg text-zinc-300 leading-relaxed max-w-xl mb-10">
                I design scalable backend systems, build intelligent AI-powered
                applications, and create modern digital experiences using
                Python, Go, APIs, automation, Linux, and cloud technologies.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <a
                  href="#projects"
                  className="px-6 py-3 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition duration-300"
                >
                  View Projects
                </a>

                <a
                  href="/resume.pdf"
                  className="px-6 py-3 rounded-2xl border border-white/20 hover:bg-white/10 transition duration-300"
                >
                  Download Resume
                </a>
              </div>

              {/* Terminal Block */}
              <div className="rounded-3xl border border-white/10 bg-zinc-950 p-6 shadow-2xl">
                <div className="flex gap-2 mb-5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>

                <div className="space-y-3 text-sm md:text-base font-mono text-zinc-300">
                  <p>
                    <span className="text-green-400">$</span> whoami
                  </p>

                  <p className="text-zinc-500">
                    Backend Engineer & AI Builder
                  </p>

                  <p>
                    <span className="text-green-400">$</span> skills
                  </p>

                  <p className="text-zinc-500">
                    Python • Go • Linux • Docker • SQL • APIs
                  </p>

                  <p>
                    <span className="text-green-400">$</span> current_focus
                  </p>

                  <p className="text-zinc-500">
                    Building scalable backend systems and AI-powered tools.
                  </p>
                </div>
              </div>
            </div>

            {/* PROFILE IMAGE */}
            <div className="relative flex justify-center">
              <div className="absolute inset-0 bg-emerald-500/10 blur-3xl rounded-full"></div>

              <Image
                src="/profile.png"
                alt="Ikwukao Backend Engineer Portrait"
                width={420}
                height={420}
                priority
                className="
                  relative
                  rounded-3xl
                  object-cover
                  border border-white/10
                  shadow-2xl
                  hover:scale-[1.02]
                  transition duration-500
                  w-full
                  max-w-sm
                "
              />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-bold mb-8">About Me</h2>

            <p className="text-zinc-300 leading-relaxed text-lg mb-6">
              I am a Backend Engineer passionate about building reliable,
              scalable, and secure systems. My work focuses on APIs,
              automation, distributed systems, Linux infrastructure, cloud
              technologies, and AI-driven applications.
            </p>

            <p className="text-zinc-400 leading-relaxed">
              I enjoy solving difficult engineering problems, learning emerging
              technologies, and creating impactful software products that help
              businesses and individuals operate more efficiently.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              "Python",
              "Go",
              "FastAPI",
              "Docker",
              "Linux",
              "PostgreSQL",
              "REST APIs",
              "AI Engineering",
            ].map((skill) => (
              <div
                key={skill}
                className="rounded-2xl border border-white/10 bg-zinc-900 p-5 text-center hover:border-emerald-400/40 hover:-translate-y-1 transition duration-300"
              >
                <p className="font-medium">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="bg-zinc-950 border-y border-white/10"
      >
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>

            <p className="text-zinc-400 max-w-2xl">
              A selection of projects focused on backend systems, APIs,
              automation, AI engineering, and scalable infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "AI Automation Platform",
                desc: "Built an automation platform integrating AI agents, APIs, and workflow orchestration.",
              },

              {
                title: "Scalable REST API",
                desc: "Designed a production-ready backend service with authentication, caching, and database optimization.",
              },

              {
                title: "Cloud Infrastructure Toolkit",
                desc: "Created deployment and monitoring tools for scalable Linux-based cloud environments.",
              },
            ].map((project) => (
              <div
                key={project.title}
                className="rounded-3xl border border-white/10 bg-black p-7 hover:border-emerald-400/40 hover:-translate-y-2 transition duration-300"
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
      <section
        id="contact"
        className="max-w-4xl mx-auto px-6 py-24 text-center"
      >
        <h2 className="text-4xl font-bold mb-6">Let’s Work Together</h2>

        <p className="text-zinc-400 text-lg leading-relaxed mb-10">
          Interested in Backend Engineering, AI Systems, Automation, or remote
          collaboration opportunities? Reach out and let’s build something
          impactful.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:ikwukao@proton.me"
            className="px-6 py-3 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition duration-300"
          >
            ikwukao@proton.me
          </a>

          <a
            href="https://github.com/ikwukao"
            target="_blank"
            className="px-6 py-3 rounded-2xl border border-white/20 hover:bg-white/10 transition duration-300"
          >
            GitHub
          </a>

          <a
            href="https://x.com/ikwukao_"
            target="_blank"
            className="px-6 py-3 rounded-2xl border border-white/20 hover:bg-white/10 transition duration-300"
          >
            X / Twitter
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-zinc-500 text-sm">
        © 2026 ikwukao.dev — Backend Engineer & AI Builder
      </footer>
    </div>
  );
}
