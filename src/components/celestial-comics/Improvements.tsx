import {
  CheckCircle2,
  Image,
  MousePointer,
  Users,
  FileText,
  CreditCard,
  Lock,
  Wrench,
} from "lucide-react";

function Improvements() {
  const improvements = [
    {
      title: "Gallery & Story Page Refactor",
      icon: Image,
      color: "purple",
      summary:
        "The story browsing experience originally carried overlapping behaviors across pages. Refactoring page-specific rendering reduced UI confusion and made each page responsible for only the interactions it actually supported.",
      changes: [
        'Removed the "save story" action from read-only browsing contexts to keep Gallery behavior clear and intentional',
        "Split rendering responsibilities by page so each view could support its own interaction model without reusing the wrong UI patterns",
        "Removed save-related listeners from pages where save functionality was not part of the user flow",
      ],
      functions: [
        { name: "renderStoriesForHome()", desc: "Read-only promotional browsing" },
        { name: "renderStoriesForGallery()", desc: "Read-only story discovery" },
        { name: "renderStoriesForVote()", desc: "Voting-enabled story grid" },
        { name: "renderStoriesForProfile()", desc: "User-specific voted and saved views" },
      ],
    },
    {
      title: "Voting Logic Consolidation",
      icon: MousePointer,
      color: "pink",
      summary:
        "Voting became one of the most sensitive areas of the app because multiple pages depended on the same round state, button behavior, and user vote data. Centralizing this logic reduced inconsistencies and made future changes safer.",
      changes: [
        "Centralized story, vote, and balance workflows into a shared voting layer instead of scattering logic across multiple pages",
        "Used event delegation so vote controls continued working even after dynamic re-renders",
        "Removed redundant initialization patterns that were causing frontend instability and unnecessary errors",
      ],
      file: "vote.js",
    },
    {
      title: "Stripe Commerce Integration",
      icon: CreditCard,
      color: "purple",
      summary:
        "The storefront was expanded from a placeholder experience into a real transaction workflow tied to application state. This made purchases meaningful inside the product by connecting merchandise sales directly to bonus vote rewards.",
      changes: [
        "Implemented Stripe checkout for secure payment processing",
        "Created protected Netlify functions to generate checkout sessions without exposing sensitive credentials to the client",
        "Added success and cancel flows so users receive clear post-transaction feedback",
        "Connected successful purchases to bonus-vote fulfillment logic through webhook-driven backend processing",
      ],
      file: "shop.js + create-checkout-session.js + stripe-webhook.js",
    },
    {
      title: "Database Security Hardening",
      icon: Lock,
      color: "pink",
      summary:
        "Because the application manages user accounts, saved content, votes, and admin-only workflows, security needed to exist at more than the UI layer. Row-Level Security became a core part of the architecture rather than an afterthought.",
      changes: [
        "Wrote Row-Level Security policies across the major Supabase tables",
        "Enforced role-based access so users could only read or mutate data they were actually authorized to interact with",
        "Defined policies for SELECT, INSERT, UPDATE, and DELETE actions rather than relying on frontend assumptions",
        "Moved critical trust boundaries into the database layer for stronger protection against misuse",
      ],
      file: "Supabase RLS Policies",
    },
    {
      title: "Admin Panel Expansion",
      icon: Users,
      color: "purple",
      summary:
        "One of the biggest improvements was shifting the project from a developer-managed app into a client-manageable platform. The admin panel became the bridge between the technical system and the client’s day-to-day operational needs.",
      changes: [
        "Built protected serverless functions to load users, manage roles, and adjust vote balances",
        "Created a CMS-style admin interface for stories, products, users, and voting periods",
        "Added conditional admin navigation so elevated tools only appear for authorized users",
        "Improved auth-driven UI updates so administrative state changes are reflected more consistently across the app",
      ],
      file: "admin.js + admin/index.html + get-users.js + update-user-votes.js",
    },
    {
      title: "Team Page Cleanup",
      icon: Users,
      color: "pink",
      summary:
        "The team page had inherited logic from parts of the application where it no longer belonged. Simplifying that page reduced noise and removed fragile code that did not support the actual content strategy.",
      changes: [
        "Rebuilt the page as a clean static team presentation with role, bio, photo, and social links",
        "Removed legacy story, vote, and save logic that was producing unnecessary errors",
        "Left the structure open for future database-driven rendering if the client later wants to manage team content dynamically",
      ],
      file: "team/index.html",
    },
    {
      title: "Profile Experience Improvements",
      icon: FileText,
      color: "purple",
      summary:
        "The profile page was improved to better reflect user activity and make account-level interactions feel more useful. This turned the page into more than a static profile—it became a history and control surface for participation.",
      changes: [
        "Separated voted stories and saved stories into distinct content areas for better clarity",
        "Added support for recanting votes and unsaving stories directly from the profile view",
        "Improved UI refresh behavior so user actions feel more immediate and consistent",
      ],
      file: "profile.js",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Key Improvements & Features
        </h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          A focused effort to transform an unstable early build into a more
          maintainable, secure, and production-ready platform.
        </p>
      </div>

      <div className="bg-slate-900/50 border border-purple-500/20 rounded-2xl p-8 md:p-12 backdrop-blur-sm mb-12">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <Wrench className="w-6 h-6 text-purple-400" />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-3">
              Improvement Strategy
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Rather than treating the project as a collection of isolated pages,
              the improvement process focused on strengthening the platform as a
              system. That meant reducing duplicated logic, clarifying page
              responsibilities, improving data security, and building workflows
              that could support both public users and client-side administration.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        {improvements.map((improvement, index) => {
          const Icon = improvement.icon;

          const colorClasses = {
            purple: {
              border: "border-purple-500/30",
              text: "text-purple-400",
              iconBg: "bg-purple-500/20",
              gradient: "from-purple-900/30 to-purple-900/10",
            },
            pink: {
              border: "border-pink-500/30",
              text: "text-pink-400",
              iconBg: "bg-pink-500/20",
              gradient: "from-pink-900/30 to-pink-900/10",
            },
          };

          const colors =
            colorClasses[improvement.color as keyof typeof colorClasses];

          return (
            <div
              key={index}
              className={`bg-slate-900/50 border ${colors.border} rounded-2xl p-8 backdrop-blur-sm`}
            >
              <div className="flex items-start gap-4 mb-6">
                <div
                  className={`w-12 h-12 ${colors.iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}
                >
                  <Icon className={`w-6 h-6 ${colors.text}`} />
                </div>

                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {improvement.title}
                  </h2>

                  {improvement.file && (
                    <p className={`text-sm ${colors.text} font-mono mb-3`}>
                      {improvement.file}
                    </p>
                  )}

                  <p className="text-slate-300 leading-relaxed">
                    {improvement.summary}
                  </p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {improvement.changes.map((change, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2
                      className={`w-5 h-5 ${colors.text} flex-shrink-0 mt-0.5`}
                    />
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {change}
                    </p>
                  </div>
                ))}
              </div>

              {improvement.functions && (
                <div
                  className={`bg-gradient-to-br ${colors.gradient} border ${colors.border} rounded-xl p-6`}
                >
                  <h3 className="text-sm font-medium text-white mb-4">
                    Page-Specific Rendering Functions
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {improvement.functions.map((func, idx) => (
                      <div key={idx} className="bg-slate-950/50 rounded-lg p-3">
                        <p className={`text-sm font-mono ${colors.text} mb-1`}>
                          {func.name}
                        </p>
                        <p className="text-xs text-slate-400">{func.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-16 bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-500/30 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Impact Summary
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Stability</h3>
            <p className="text-slate-300 text-sm">
              Reduced broken interactions, removed fragile page logic, and made
              core workflows more predictable across the application.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Maintainability</h3>
            <p className="text-slate-300 text-sm">
              Improved separation of concerns through shared modules, page-level
              responsibilities, and protected backend operations.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Scalability</h3>
            <p className="text-slate-300 text-sm">
              Established a stronger foundation for future client ownership,
              additional features, and long-term platform growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Improvements;