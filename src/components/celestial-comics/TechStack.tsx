import {
  Code2,
  Database,
  Server,
  Zap,
  TrendingUp,
  Target,
  ShieldCheck,
  CreditCard,
  LayoutDashboard,
} from "lucide-react";

function TechStack() {
  const technologies = [
    {
      category: "Frontend",
      icon: Code2,
      color: "purple",
      items: [
        {
          name: "HTML5",
          description:
            "Semantic page structure across a multi-page application architecture",
        },
        {
          name: "CSS3",
          description:
            "Custom styling, layout systems, responsive behavior, and UI polish",
        },
        {
          name: "Vanilla JavaScript (ES6+)",
          description:
            "Modular client-side logic without a frontend framework, giving full control over rendering and behavior",
        },
      ],
    },
    {
      category: "Backend & Data",
      icon: Database,
      color: "pink",
      items: [
        {
          name: "Supabase",
          description:
            "Authentication, storage, and backend services for application data and user workflows",
        },
        {
          name: "PostgreSQL",
          description:
            "Relational schema connecting users, votes, stories, products, orders, and voting periods",
        },
        {
          name: "Row-Level Security",
          description:
            "Database-level permission control used to protect user data and enforce role-based access",
        },
      ],
    },
    {
      category: "Hosting & Protected Logic",
      icon: Server,
      color: "purple",
      items: [
        {
          name: "Netlify",
          description:
            "Hosting, deployment workflow, and production delivery for the platform",
        },
        {
          name: "Netlify Functions",
          description:
            "Serverless API layer for protected operations such as admin actions, voting logic, and checkout creation",
        },
        {
          name: "Environment Variables",
          description:
            "Secure handling of service keys, Stripe credentials, and production configuration",
        },
      ],
    },
    {
      category: "Commerce & Payments",
      icon: CreditCard,
      color: "pink",
      items: [
        {
          name: "Stripe Checkout",
          description:
            "Secure hosted checkout flow for merchandise purchases",
        },
        {
          name: "Stripe Webhooks",
          description:
            "Post-payment fulfillment logic used to award bonus votes after successful purchases",
        },
        {
          name: "Order Workflow Logic",
          description:
            "Backend coordination between products, checkout sessions, orders, and vote rewards",
        },
      ],
    },
  ];

  const currentStatus = [
    {
      title: "Admin Panel",
      description:
        "Client-manageable interface for stories, products, vote balances, roles, and voting periods",
    },
    {
      title: "Voting Lifecycle",
      description:
        "Open, closed, and finalized round logic with protected winner-determination workflows",
    },
    {
      title: "Commerce Integration",
      description:
        "Stripe purchases successfully connect merchandise sales to bonus vote rewards",
    },
    {
      title: "Authentication",
      description:
        "Session-aware login/logout state with conditional rendering across public and protected views",
    },
    {
      title: "Database Security",
      description:
        "RLS policies protect access patterns at the database layer instead of relying on frontend checks",
    },
    {
      title: "Serverless Backend",
      description:
        "Protected Netlify functions handle sensitive actions outside of public client code",
    },
  ];

  const nextPhase = [
    "Refine UI/UX polish across public-facing pages",
    "Expand order fulfillment planning for physical merchandise delivery",
    "Create stronger client handoff documentation and admin training materials",
    "Add more robust reporting for platform activity and voting behavior",
    "Improve loading, messaging, and edge-case error states across the app",
    "Continue simplifying cross-page state behavior as the system grows",
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Technology Stack
        </h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          A full-stack implementation built with modular frontend architecture,
          protected serverless workflows, relational data modeling, and secure
          payment integration.
        </p>
      </div>

      {/* Stack Overview */}
      <div className="bg-slate-900/50 border border-purple-500/20 rounded-2xl p-8 md:p-12 backdrop-blur-sm mb-12">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <LayoutDashboard className="w-6 h-6 text-purple-400" />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-3">
              Technical Approach
            </h2>
            <p className="text-slate-300 leading-relaxed">
              CelestialComics was developed as a modular multi-page application
              using a lightweight but powerful stack. Rather than relying on a
              frontend framework, the project uses hand-written HTML, CSS, and
              JavaScript to keep rendering logic transparent and maintain tight
              control over behavior. That frontend is paired with Supabase for
              relational data and authentication, Netlify Functions for
              protected backend workflows, and Stripe for commerce. Together,
              the stack supports a real product workflow rather than a static
              demo.
            </p>
          </div>
        </div>
      </div>

      {/* Technology Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {technologies.map((tech, index) => {
          const Icon = tech.icon;

          const colorClasses = {
            purple: {
              border: "border-purple-500/30",
              text: "text-purple-400",
              iconBg: "bg-purple-500/20",
            },
            pink: {
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
              <div
                className={`w-12 h-12 ${colors.iconBg} rounded-lg flex items-center justify-center mb-4`}
              >
                <Icon className={`w-6 h-6 ${colors.text}`} />
              </div>

              <h2 className="text-xl font-bold text-white mb-5">
                {tech.category}
              </h2>

              <div className="space-y-5">
                {tech.items.map((item, idx) => (
                  <div key={idx}>
                    <h3 className={`font-medium ${colors.text} mb-1`}>
                      {item.name}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Current Status */}
      <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 border border-green-500/30 rounded-2xl p-8 md:p-12 backdrop-blur-sm mb-12">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <Zap className="w-6 h-6 text-green-400" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">
              Current Status
            </h2>
            <p className="text-green-200">
              Core systems are functional, connected, and production-oriented
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentStatus.map((item, index) => (
            <div
              key={index}
              className="bg-slate-950/50 rounded-xl p-4 border border-green-500/20"
            >
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="w-4 h-4 text-green-400" />
                <h3 className="font-medium text-white">{item.title}</h3>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Next Phase */}
      <div className="bg-slate-900/50 border border-purple-500/20 rounded-2xl p-8 md:p-12 backdrop-blur-sm mb-12">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <TrendingUp className="w-6 h-6 text-purple-400" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">
              Next Phase
            </h2>
            <p className="text-purple-200">
              Future-facing refinements beyond the core implementation
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {nextPhase.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 bg-slate-950/50 rounded-lg p-4 border border-purple-500/10"
            >
              <div className="w-6 h-6 bg-purple-500/20 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-purple-400 text-xs font-bold">
                  {index + 1}
                </span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Summary */}
      <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-500/30 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
            <Target className="w-6 h-6 text-white" />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Stack Summary
            </h2>
            <div className="space-y-4 text-slate-200 leading-relaxed">
              <p>
                CelestialComics demonstrates how a{" "}
                <span className="text-purple-300 font-medium">
                  lightweight but intentional stack
                </span>{" "}
                can support a fairly sophisticated product workflow. Even
                without a frontend framework, the application coordinates user
                authentication, timed voting rounds, administrative tools,
                content management, and commerce behavior across multiple views.
              </p>

              <p>
                The combination of{" "}
                <span className="text-pink-300 font-medium">
                  vanilla JavaScript, Supabase, Netlify Functions, PostgreSQL,
                  and Stripe
                </span>{" "}
                created a system that is not just visually functional, but
                operationally realistic. The stack supports secure workflows,
                modular development, and future client ownership.
              </p>

              <p>
                More importantly, the technologies were selected not just
                because they were available, but because they supported the
                project’s actual needs: structured voting logic, role-based
                permissions, secure checkout processing, and a maintainable path
                toward launch and handoff.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-purple-500/20">
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            Key Characteristics
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-2">
                Modular
              </div>
              <p className="text-slate-300 text-sm">
                Feature responsibilities are split cleanly across dedicated
                files and protected backend workflows
              </p>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-2">
                Secure
              </div>
              <p className="text-slate-300 text-sm">
                Authentication, RLS policies, serverless functions, and
                environment variables protect sensitive operations
              </p>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-2">
                Scalable
              </div>
              <p className="text-slate-300 text-sm">
                The foundation supports future polish, client handoff, and
                operational expansion without rebuilding the core system
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechStack;