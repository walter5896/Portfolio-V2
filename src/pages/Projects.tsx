import { Link } from "react-router-dom";

function Projects() {
  const projects = [
    {
      title: "CelestialComics",
      subtitle: "Freelance Full-Stack Project",
      description:
        "An interactive comic book voting platform and e-commerce experience built around storytelling, user engagement, and a custom full-stack workflow.",
      tags: ["Full-Stack", "Interactive UX", "E-Commerce", "Case Study"],
      path: "/projects/celestial-comics",
      accent: "from-fuchsia-500 to-violet-500",
    },
    {
      title: "Weather App",
      subtitle: "Front-End Development Project",
      description:
        "A responsive weather application that fetches live data through the OpenWeatherMap API, stores ZIP code preferences locally, and updates content dynamically.",
      tags: ["JavaScript", "API Integration", "Responsive Design", "Netlify"],
      path: "/projects/weather-app",
      accent: "from-sky-500 to-cyan-500",
    },
    {
      title: "Earthmark Studios",
      subtitle: "Web Design & Development Project",
      description:
        "A responsive architecture portfolio website focused on multimedia storytelling, art direction, accessibility, and polished front-end presentation.",
      tags: ["SCSS", "Accessibility", "Responsive Design", "Multimedia"],
      path: "/projects/earthmark",
      accent: "from-emerald-500 to-teal-500",
    },
    {
      title: "PivotPoint AI",
      subtitle: "Feasibility Analysis Case Study",
      description:
        "A business and product feasibility case study exploring AI coaching for small businesses through research, validation, strategy, and technical planning.",
      tags: ["Research", "Validation", "Business Model", "Strategy"],
      path: "/projects/pivot-point-ai",
      accent: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-3xl mb-14">
          <p className="inline-block text-sm uppercase tracking-[0.2em] text-violet-300 border border-violet-400/20 bg-violet-500/10 px-4 py-2 rounded-full mb-6">
            Selected Work
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Projects & Case Studies
          </h1>

          <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
            A collection of projects spanning full-stack development,
            front-end engineering, UX thinking, accessibility, and product
            strategy.
          </p>
        </div>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
            >
              <div
                className={`h-1 w-full bg-gradient-to-r ${project.accent}`}
              />

              <div className="p-8 md:p-9">
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="text-sm font-medium text-slate-400">
                    0{index + 1}
                  </span>

                  <span
                    className={`text-xs font-semibold uppercase tracking-[0.18em] bg-gradient-to-r ${project.accent} bg-clip-text text-transparent`}
                  >
                    {project.subtitle}
                  </span>
                </div>

                <h2 className="text-3xl font-bold mb-4 group-hover:text-white">
                  {project.title}
                </h2>

                <p className="text-slate-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  to={project.path}
                  className="inline-flex items-center gap-2 rounded-xl px-5 py-3 bg-white text-slate-950 font-semibold transition-all hover:scale-[1.02]"
                >
                  View Case Study
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </section>
      </section>
    </main>
  );
}

export default Projects;