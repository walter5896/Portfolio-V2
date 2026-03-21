import {
  Shield,
  Vote,
  Settings,
  FileCode,
  Server,
  Database,
  CreditCard,
  Lock,
} from "lucide-react";

function Architecture() {
  const modules = [
    {
      icon: Shield,
      title: "Authentication Layer",
      file: "auth.js",
      description:
        "Secure user login/logout flow with UI updates and event dispatching for cross-script communication.",
      color: "purple",
    },
    {
      icon: Vote,
      title: "Voting & Data Layer",
      file: "vote.js",
      description:
        "Core functions for fetching stories with votes, submitting votes, and rendering UI consistently across pages.",
      color: "pink",
    },
    {
      icon: Settings,
      title: "Admin Module",
      file: "admin.js + admin/index.html",
      description:
        "Manages fetching users via Netlify serverless functions, rendering editable user role tables, and dynamic navigation.",
      color: "purple",
    },
    {
      icon: CreditCard,
      title: "Shopping Platform",
      file: "shop.js + create-checkout-session.js",
      description:
        "Full e-commerce integration with Stripe for secure payment processing via Netlify serverless functions.",
      color: "pink",
    },
    {
      icon: Lock,
      title: "Row-Level Security",
      file: "Supabase RLS Policies",
      description:
        "Comprehensive RLS policies written for every data table ensuring secure, role-based data access control.",
      color: "purple",
    },
    {
      icon: FileCode,
      title: "Page-Level Scripts",
      file: "gallery.js, profile.js, story.js, etc.",
      description:
        "Dedicated JS modules for each page that import shared logic and handle page-specific rendering and events.",
      color: "pink",
    },
    {
      icon: Server,
      title: "Netlify Functions",
      file: "functions/*.js",
      description:
        "Serverless backend functions handle secure data fetching, user management, and Stripe checkout sessions.",
      color: "purple",
    },
    {
      icon: Database,
      title: "Supabase Backend",
      file: "supabase.js",
      description:
        "Centralized configuration for authentication, real-time database, and storage management with full RLS.",
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
          A modular system designed for scalability and maintainability
        </p>
      </div>

      {/* Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {modules.map((module, index) => {
          const Icon = module.icon;

          const colorClasses = {
            purple: {
              bg: "bg-purple-500/20",
              border: "border-purple-500/30",
              text: "text-purple-400",
              icon: "bg-purple-500/20",
            },
            pink: {
              bg: "bg-pink-500/20",
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

        <div className="space-y-4">

          <p className="text-slate-200">
            Authentication logic is fully separated from page-specific UI logic.
          </p>

          <p className="text-slate-200">
            Shared modules handle reusable business logic across pages.
          </p>

          <p className="text-slate-200">
            Admin tools are isolated with role-based permissions.
          </p>

          <p className="text-slate-200">
            Event-driven patterns allow reactive UI updates.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Architecture;