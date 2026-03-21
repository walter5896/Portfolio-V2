import { Link } from "react-router-dom";

function About() {
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
        "Modular JavaScript Architecture",
        "DOM Manipulation",
        "Dynamic UI Rendering",
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
      title: "Payments & E-Commerce",
      skills: [
        "Stripe API Integration",
        "Webhook Fulfillment",
        "Payment Workflow Design",
        "Transaction Handling",
        "Bonus Reward Systems",
      ],
    },
    {
      title: "Deployment & Hosting",
      skills: [
        "Netlify Deployment",
        "Environment Variables",
        "Secure API Keys",
        "Production Deployment",
        "Client Handoff Planning",
      ],
    },
    {
      title: "Development Tools",
      skills: [
        "Git / Version Control",
        "Debugging & Troubleshooting",
        "Performance Optimization",
        "Chrome DevTools",
        "Code Refactoring",
      ],
    },
  ];

  const technicalStrengths = [
    "Full-Stack Development",
    "CMS Development",
    "Voting System Architecture",
    "Admin Panel Development",
    "E-Commerce Integration",
    "Real-Time Voting Systems",
  ];

  const currentlyLearning = [
    "React",
    "TypeScript",
    "WebSockets",
    "Advanced State Management",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-12">
        <div className="max-w-4xl">
          <p className="inline-block text-sm uppercase tracking-[0.2em] text-violet-300 border border-violet-400/20 bg-violet-500/10 px-4 py-2 rounded-full mb-6">
            About Me
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Developer, designer, and first-generation student building toward
            professional-level web work.
          </h1>

          <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
            I’m a first-generation student at Utah Valley University pursuing a
            bachelor’s in Web Design &amp; App Development with an emphasis on
            development work. My path has been shaped by building projects that
            combine interface design, front-end engineering, data-backed logic,
            and practical user experience.
          </p>

          <p className="text-lg text-slate-400 leading-relaxed">
            I earned my general Associate of Science in April 2025, completed my
            Associate of Applied Science in April 2026, and I’m currently a
            junior expected to graduate in 2028.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 shadow-2xl">
            <h2 className="text-2xl font-bold mb-5">Education</h2>

            <div className="space-y-5 text-slate-300">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm text-slate-400 mb-2">Current Program</p>
                <p className="text-lg font-semibold text-white">
                  Bachelor’s in Web Design &amp; App Development
                </p>
                <p className="text-slate-300 mt-1">
                  Emphasis on development work
                </p>
                <p className="text-slate-400 mt-2">Utah Valley University</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm text-slate-400 mb-2">Completed</p>
                <p className="text-lg font-semibold text-white">
                  Associate of Applied Science
                </p>
                <p className="text-slate-400 mt-2">Completed April 2026</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm text-slate-400 mb-2">Completed</p>
                <p className="text-lg font-semibold text-white">
                  General Associate of Science
                </p>
                <p className="text-slate-400 mt-2">Completed April 2025</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm text-slate-400 mb-2">Standing</p>
                <p className="text-lg font-semibold text-white">
                  Junior — expected graduation 2028
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 shadow-2xl">
            <h2 className="text-2xl font-bold mb-5">How I Work</h2>

            <div className="space-y-5 text-slate-300 leading-relaxed">
              <p>
                I’m most interested in building projects that prove actual
                capability — not just concept work. That means solving real UI
                and logic problems, integrating APIs, handling authentication,
                structuring data, and deploying projects in a way that feels
                production-aware.
              </p>

              <p>
                My strongest work lives where design and development overlap:
                building interfaces that look polished, feel intuitive, and are
                backed by solid implementation.
              </p>

              <p>
                I’ve built projects involving payment workflows, admin systems,
                database rules, voting logic, API integration, responsive
                layouts, and accessible front-end experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400 mb-3">
            Full Skillset
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Technical capabilities
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-7 shadow-2xl">
            <h3 className="text-xl font-bold mb-5">Technical Strengths</h3>

            <div className="flex flex-wrap gap-3">
              {technicalStrengths.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full border border-fuchsia-400/15 bg-gradient-to-r from-fuchsia-500/10 to-violet-500/10 text-slate-100 text-sm shadow-[0_0_18px_rgba(217,70,239,0.08)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-7 shadow-2xl">
            <h3 className="text-xl font-bold mb-5">Currently Learning</h3>

            <div className="flex flex-wrap gap-3">
              {currentlyLearning.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full border border-cyan-400/15 bg-gradient-to-r from-cyan-500/10 to-sky-500/10 text-slate-100 text-sm shadow-[0_0_18px_rgba(34,211,238,0.08)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 p-8 md:p-12 shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The goal is simple: keep building stronger work
          </h2>

          <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mb-8">
            I’m continuing to grow through hands-on projects that strengthen my
            front-end architecture, system thinking, and real-world development
            skills.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3 bg-white text-slate-950 font-semibold transition-all hover:scale-[1.02]"
            >
              View Projects
              <span aria-hidden="true">→</span>
            </Link>

            <a
              href="/Walter-Blundell-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3 border border-violet-400/20 bg-gradient-to-r from-violet-500/15 to-cyan-500/10 text-white font-semibold transition-all hover:bg-white/10"
            >
              Download Resume
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3 border border-white/15 bg-white/5 text-white font-semibold transition-all hover:bg-white/10"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;