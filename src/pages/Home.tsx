import { Link } from "react-router-dom";

function Home() {
  const featuredProjects = [
    {
      title: "CelestialComics",
      description:
        "A freelance full-stack interactive comic voting platform and e-commerce experience built around storytelling, user engagement, and custom functionality.",
      path: "/projects/celestial-comics",
      accent: "from-fuchsia-500 to-violet-500",
    },
    {
      title: "Weather App",
      description:
        "A responsive weather application using live API data, dynamic DOM updates, and local storage for a clean user-focused experience.",
      path: "/projects/weather-app",
      accent: "from-sky-500 to-cyan-500",
    },
    {
      title: "Earthmark Studios",
      description:
        "A polished case study in front-end development, accessibility, multimedia storytelling, and responsive design.",
      path: "/projects/earthmark",
      accent: "from-emerald-500 to-teal-500",
    },
  ];

  const coreFocus = [
    "Front-End Development",
    "Responsive Web Design",
    "JavaScript",
    "UI / UX Thinking",
    "Accessibility",
    "Modular JavaScript",
    "API Integration",
    "Database Design",
    "Stripe Integration",
    "Deployment & Hosting",
  ];

  const skillGroups = [
    {
      title: "Front-End Development",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript (Vanilla JS)",
        "Responsive Web Design",
        "UI / UX Thinking",
        "Accessibility (WCAG Awareness)",
        "Modular JavaScript",
        "Dynamic UI Rendering",
        "DOM Manipulation",
        "State Management Concepts",
      ],
    },
    {
      title: "Backend & APIs",
      skills: [
        "REST APIs",
        "API Integration",
        "Serverless Functions",
        "Netlify Functions",
        "Authentication Flows",
        "Webhooks",
        "Role-Based Access Control",
      ],
    },
    {
      title: "Databases",
      skills: [
        "PostgreSQL",
        "Supabase",
        "Relational Database Design",
        "Data Modeling",
        "Query Optimization",
        "Row-Level Security (RLS)",
      ],
    },
    {
      title: "Payments & Commerce",
      skills: [
        "Stripe API Integration",
        "Webhook Fulfillment",
        "Payment Workflow Design",
        "Transaction Handling",
        "Bonus Reward Systems",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
          <div>
            <p className="inline-block text-sm uppercase tracking-[0.2em] text-violet-300 border border-violet-400/20 bg-violet-500/10 px-4 py-2 rounded-full mb-6">
              Walter Blundell
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-6">
              I build modern web experiences with sharp front-end execution and
              real system logic.
            </h1>

            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mb-8">
              My work blends interface design, front-end engineering, API
              integration, database-backed logic, and deployment workflows to
              create polished digital products that actually function in the
              real world.
            </p>

            <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-3xl mb-10">
              I’m a first-generation student at UVU pursuing a bachelor’s in Web
              Design &amp; App Development with an emphasis on development work.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 bg-white text-slate-950 font-semibold transition-all hover:scale-[1.02]"
              >
                View Projects
                <span aria-hidden="true">→</span>
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 border border-white/15 bg-white/5 text-white font-semibold transition-all hover:bg-white/10"
              >
                About Me
              </Link>

              <a
                href="/Walter-Blundell-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 border border-violet-400/20 bg-gradient-to-r from-violet-500/15 to-cyan-500/10 text-white font-semibold transition-all hover:bg-white/10"
              >
                View Resume
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 shadow-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400 mb-6">
              Core Focus
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {coreFocus.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full border border-violet-400/15 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 text-slate-100 text-sm shadow-[0_0_18px_rgba(139,92,246,0.08)]"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="space-y-5">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm text-slate-400 mb-2">Current Direction</p>
                <p className="text-lg font-semibold">
                  Web Design &amp; App Development
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm text-slate-400 mb-2">Emphasis</p>
                <p className="text-lg font-semibold">Development Work</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm text-slate-400 mb-2">Approach</p>
                <p className="text-lg font-semibold">
                  Clean code, sharp visuals, practical UX
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400 mb-3">
            Skills & Capabilities
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Built from actual project work
          </h2>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-7 shadow-2xl"
            >
              <h3 className="text-xl font-bold mb-5">{group.title}</h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full border border-white/10 bg-gradient-to-r from-slate-800 to-slate-900 text-slate-200 text-sm shadow-[0_0_18px_rgba(56,189,248,0.06)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400 mb-3">
              Featured Work
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Selected Projects
            </h2>
          </div>

          <Link
            to="/projects"
            className="hidden md:inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
          >
            See all projects
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl"
            >
              <div className={`h-1 w-full bg-gradient-to-r ${project.accent}`} />

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

                <p className="text-slate-300 leading-relaxed mb-6">
                  {project.description}
                </p>

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
        </div>
      </section>
    </main>
  );
}

export default Home;