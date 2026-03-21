import { Code2, Database, Server, Zap, TrendingUp, Target } from "lucide-react";

function TechStack() {
  const technologies = [
    {
      category: "Frontend",
      icon: Code2,
      color: "purple",
      items: [
        { name: "HTML5", description: "Semantic markup and structure" },
        { name: "CSS3", description: "Modern styling and animations" },
        { name: "Vanilla JavaScript", description: "No frameworks, pure ES6+ code" },
      ],
    },
    {
      category: "Backend",
      icon: Database,
      color: "pink",
      items: [
        { name: "Supabase", description: "Authentication and database management" },
        { name: "PostgreSQL", description: "Relational data storage via Supabase" },
        { name: "Row-Level Security", description: "Comprehensive RLS policies on all tables" },
      ],
    },
    {
      category: "Hosting & Functions",
      icon: Server,
      color: "purple",
      items: [
        { name: "Netlify", description: "Static site hosting and CI/CD" },
        { name: "Serverless Functions", description: "Backend API endpoints via Netlify" },
        { name: "Stripe", description: "Secure payment processing for e-commerce" },
      ],
    },
  ];

  const futureExpansions = [
    "Refactor state management into centralized state.js module",
    "Implement Stripe webhooks for payment confirmations",
    "Add Supabase Edge Functions for real-time processing",
    "Dynamic fetching of team members from database",
    "Persistent save state on individual story pages",
    "UI improvements on profile and gallery pages",
    "Loading states and enhanced error handling",
    "Pagination and filtering on gallery",
    "Analytics dashboard for votes and saves",
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Technology Stack
        </h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          Built with modern web technologies and best practices
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {technologies.map((tech, index) => {
          const Icon = tech.icon;

          const colorClasses = {
            purple: {
              bg: "bg-purple-500/20",
              border: "border-purple-500/30",
              text: "text-purple-400",
              iconBg: "bg-purple-500/20",
            },
            pink: {
              bg: "bg-pink-500/20",
              border: "border-pink-500/30",
              text: "text-pink-400",
              iconBg: "bg-pink-500/20",
            },
          };

          const colors = colorClasses[tech.color as keyof typeof colorClasses];

          return (
            <div
              key={index}
              className={`bg-slate-900/50 border ${colors.border} rounded-2xl p-6 backdrop-blur-sm`}
            >
              <div className={`w-12 h-12 ${colors.iconBg} rounded-lg flex items-center justify-center mb-4`}>
                <Icon className={`w-6 h-6 ${colors.text}`} />
              </div>

              <h2 className="text-xl font-bold text-white mb-4">{tech.category}</h2>

              <div className="space-y-4">
                {tech.items.map((item, idx) => (
                  <div key={idx}>
                    <h3 className={`font-medium ${colors.text} mb-1`}>{item.name}</h3>
                    <p className="text-slate-400 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 border border-green-500/30 rounded-2xl p-8 md:p-12 backdrop-blur-sm mb-12">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <Zap className="w-6 h-6 text-green-400" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Current Status</h2>
            <p className="text-green-200">Production-ready with stable, modular architecture</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-950/50 rounded-xl p-4 border border-green-500/20">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <h3 className="font-medium text-white">Admin Panel</h3>
            </div>
            <p className="text-slate-300 text-sm">
              Fully functional user management with role-based access control
            </p>
          </div>

          <div className="bg-slate-950/50 rounded-xl p-4 border border-green-500/20">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <h3 className="font-medium text-white">Voting System</h3>
            </div>
            <p className="text-slate-300 text-sm">
              Stable voting and save functionality across all pages
            </p>
          </div>

          <div className="bg-slate-950/50 rounded-xl p-4 border border-green-500/20">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <h3 className="font-medium text-white">E-Commerce Platform</h3>
            </div>
            <p className="text-slate-300 text-sm">
              Stripe integration with serverless checkout sessions
            </p>
          </div>

          <div className="bg-slate-950/50 rounded-xl p-4 border border-green-500/20">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <h3 className="font-medium text-white">Row-Level Security</h3>
            </div>
            <p className="text-slate-300 text-sm">
              Comprehensive RLS policies on all database tables
            </p>
          </div>

          <div className="bg-slate-950/50 rounded-xl p-4 border border-green-500/20">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <h3 className="font-medium text-white">Authentication</h3>
            </div>
            <p className="text-slate-300 text-sm">
              Secure login/logout with event-driven UI updates
            </p>
          </div>

          <div className="bg-slate-950/50 rounded-xl p-4 border border-green-500/20">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <h3 className="font-medium text-white">Serverless Functions</h3>
            </div>
            <p className="text-slate-300 text-sm">
              Netlify functions for secure API endpoints
            </p>
          </div>
        </div>
      </div>

      <div className="bg-slate-900/50 border border-purple-500/20 rounded-2xl p-8 md:p-12 backdrop-blur-sm mb-12">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <TrendingUp className="w-6 h-6 text-purple-400" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Next Steps</h2>
            <p className="text-purple-200">Planned expansions and enhancements</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {futureExpansions.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 bg-slate-950/50 rounded-lg p-4 border border-purple-500/10"
            >
              <div className="w-6 h-6 bg-purple-500/20 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-purple-400 text-xs font-bold">{index + 1}</span>
              </div>
              <p className="text-slate-300 text-sm">{item}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-500/30 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
            <Target className="w-6 h-6 text-white" />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Project Summary</h2>
            <div className="space-y-4 text-slate-200 leading-relaxed">
              <p>
                CelestialComics exemplifies a hand-crafted web app refactor, transitioning from fragile,
                inconsistent features to a{" "}
                <span className="text-purple-300 font-medium">
                  clean, modular, production-ready architecture
                </span>.
              </p>

              <p>
                With a fully functioning admin panel, modular voting and save systems, and a scalable foundation,
                this project showcases{" "}
                <span className="text-pink-300 font-medium">
                  strong development discipline and thoughtful design
                </span>.
              </p>

              <p>
                The application now stands as a testament to the power of refactoring, demonstrating how careful
                architectural decisions can transform a fragile codebase into a{" "}
                <span className="text-purple-300 font-medium">
                  robust, maintainable platform
                </span>{" "}
                ready for future growth.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-purple-500/20">
          <h3 className="text-xl font-bold text-white mb-6 text-center">Key Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-2">
                100%
              </div>
              <p className="text-slate-300 text-sm">Error-free functionality across all pages</p>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-2">
                Modular
              </div>
              <p className="text-slate-300 text-sm">Clean separation of concerns throughout</p>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-2">
                Scalable
              </div>
              <p className="text-slate-300 text-sm">Foundation ready for team expansion</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechStack;