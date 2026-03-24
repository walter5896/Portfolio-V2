import {
  Shield,
  Vote,
  Settings,
  FileCode,
  Server,
  Database,
  CreditCard,
  Lock,
  Layers,
} from "lucide-react";

function Architecture() {
  const modules = [
    {
      icon: Shield,
      title: "Authentication Layer",
      file: "auth.js",
      description:
        "Handles login state, logout behavior, conditional UI rendering, and shared authentication checks across the site. This module acts as the foundation for gated features such as profile access, voting, and admin-only controls.",
      color: "purple",
    },
    {
      icon: Vote,
      title: "Voting & Business Logic",
      file: "vote.js",
      description:
        "Centralizes story loading, vote totals, user vote state, saved stories, and round/bonus vote handling. This became one of the most critical modules in the system because multiple pages depend on the same voting lifecycle rules.",
      color: "pink",
    },
    {
      icon: Settings,
      title: "Administrative Control Layer",
      file: "admin.js + admin/index.html",
      description:
        "Provides a CMS-style control panel for managing users, vote balances, products, stories, story pages, and round timing. This interface was designed so the client could operate the platform without needing direct database or code access.",
      color: "purple",
    },
    {
      icon: CreditCard,
      title: "Commerce Workflow",
      file: "shop.js + create-checkout-session.js",
      description:
        "Connects the storefront to Stripe checkout sessions and product-based bonus vote rewards. This layer ties together frontend purchase flows, protected backend session creation, and secure post-payment fulfillment behavior.",
      color: "pink",
    },
    {
      icon: Lock,
      title: "Database Security Model",
      file: "Supabase RLS Policies",
      description:
        "Row-Level Security policies were applied across major tables to enforce ownership rules, role restrictions, and controlled data visibility directly at the database layer. This reduced reliance on frontend-only protection.",
      color: "purple",
    },
    {
      icon: FileCode,
      title: "Page-Level Modules",
      file: "gallery.js, profile.js, story.js, shop.js, etc.",
      description:
        "Each major page uses its own script for rendering and interaction logic while importing shared functionality where needed. This kept the application easier to debug and prevented unrelated features from becoming tightly coupled.",
      color: "pink",
    },
    {
      icon: Server,
      title: "Serverless API Layer",
      file: "Netlify Functions",
      description:
        "Protected backend actions such as role changes, vote adjustments, story/product mutations, winner determination, and Stripe integration were routed through Netlify Functions. This preserved security by keeping sensitive operations off the client.",
      color: "purple",
    },
    {
      icon: Database,
      title: "Relational Backend",
      file: "Supabase + PostgreSQL",
      description:
        "Supabase provided authentication, storage, and PostgreSQL-backed relational data management. The schema connected users, votes, stories, products, orders, and voting periods into a system that could support both content workflows and transactional logic.",
      color: "pink",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Architecture & Modules
        </h1>

        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          A modular full-stack architecture designed to keep business logic
          maintainable, secure, and scalable as the platform expanded.
        </p>
      </div>

      {/* Architecture Overview */}
      <div className="bg-slate-900/50 border border-purple-500/20 rounded-2xl p-8 md:p-12 backdrop-blur-sm mb-12">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <Layers className="w-6 h-6 text-purple-400" />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-3">
              Architectural Approach
            </h2>
            <p className="text-slate-300 leading-relaxed">
              CelestialComics was structured as a modular multi-page application
              rather than a monolithic frontend. That decision became
              increasingly important as the project grew beyond static pages and
              into a system with authentication, timed voting rounds, client
              administration, product management, Stripe checkout flows, and
              protected backend operations. Organizing features into dedicated
              modules made the system easier to scale, easier to debug, and far
              more resilient during refactors.
            </p>
          </div>
        </div>
      </div>

      {/* Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {modules.map((module, index) => {
          const Icon = module.icon;

          const colorClasses = {
            purple: {
              border: "border-purple-500/30",
              text: "text-purple-400",
              icon: "bg-purple-500/20",
            },
            pink: {
              border: "border-pink-500/30",
              text: "text-pink-400",
              icon: "bg-pink-500/20",
            },
          };

          const colors =
            colorClasses[module.color as keyof typeof colorClasses];

          return (
            <div
              key={index}
              className={`bg-slate-900/50 border ${colors.border} rounded-xl p-6 backdrop-blur-sm hover:bg-slate-900/70 transition-all`}
            >
              <div
                className={`w-12 h-12 ${colors.icon} rounded-lg flex items-center justify-center mb-4`}
              >
                <Icon className={`w-6 h-6 ${colors.text}`} />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                {module.title}
              </h3>

              <p className={`text-sm ${colors.text} font-mono mb-3`}>
                {module.file}
              </p>

              <p className="text-slate-300 text-sm leading-relaxed">
                {module.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Separation of Concerns */}
      <div className="mt-12 bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
        <h2 className="text-2xl font-bold text-white mb-6">
          Separation of Concerns
        </h2>

        <div className="space-y-4 text-slate-200 leading-relaxed">
          <p>
            <span className="text-purple-300 font-medium">
              Authentication, page rendering, business logic, and protected
              backend actions
            </span>{" "}
            were intentionally separated instead of being mixed into
            page-specific scripts. This reduced duplication and made it easier
            to reason about failures when features became more interconnected.
          </p>

          <p>
            Shared modules handled reusable workflows such as voting state,
            balance calculations, saved stories, and session-based user checks,
            while page-level files were limited to rendering and interaction for
            a specific view.
          </p>

          <p>
            Administrative tools were isolated behind role-based permissions and
            routed through protected serverless functions, allowing sensitive
            actions like role changes, vote adjustments, and content management
            to stay secure.
          </p>

          <p>
            This structure made it possible to expand the app over time without
            rewriting everything. As new features were added—such as bonus vote
            logic, Stripe fulfillment, and content upload workflows—the modular
            architecture supported those additions without collapsing into
            tightly coupled code.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Architecture;