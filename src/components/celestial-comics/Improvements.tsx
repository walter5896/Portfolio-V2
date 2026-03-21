import {
  CheckCircle2,
  Image,
  MousePointer,
  Users,
  FileText,
  CreditCard,
  Lock,
} from "lucide-react";

function Improvements() {
  const improvements = [
    {
      title: "Gallery & Story Pages",
      icon: Image,
      color: "purple",
      changes: [
        'Removed "save story" button from Gallery page to avoid confusion; Gallery is read-only browsing',
        "Decoupled rendering logic by page with dedicated functions",
        "Disabled/removed save event listeners on pages without save functionality",
      ],
      functions: [
        { name: "renderStoriesForHome()", desc: "Read-only, no saves" },
        { name: "renderStoriesForGallery()", desc: "Read-only, no saves" },
        { name: "renderStoriesForVote()", desc: "Voting-enabled" },
        { name: "renderStoriesForProfile()", desc: "Voted + saved stories" },
      ],
    },
    {
      title: "Voting Logic",
      icon: MousePointer,
      color: "pink",
      changes: [
        "Centralized vote functions: fetching stories and votes, updating vote button states, attaching event listeners",
        "Event delegation to handle dynamically re-rendered vote buttons",
        "Removed redundant initSaveButtons calls to prevent JS errors",
      ],
      file: "vote.js",
    },
    {
      title: "Shopping Platform",
      icon: CreditCard,
      color: "purple",
      changes: [
        "Full e-commerce integration with Stripe for secure payment processing",
        "Netlify serverless function (create-checkout-session.js) handles Stripe checkout sessions",
        "Success and cancel pages provide clear user feedback after transactions",
        "Shop page with dynamic product rendering and secure checkout flow",
      ],
      file: "shop.js + create-checkout-session.js",
    },
    {
      title: "Row-Level Security (RLS)",
      icon: Lock,
      color: "pink",
      changes: [
        "Comprehensive RLS policies written for every data table in Supabase",
        "Role-based access control ensures users can only access authorized data",
        "Policies cover all possible actions: SELECT, INSERT, UPDATE, DELETE",
        "Database-level security prevents unauthorized data access even if application logic fails",
      ],
      file: "Supabase Database Policies",
    },
    {
      title: "Admin Panel",
      icon: Users,
      color: "purple",
      changes: [
        "Created serverless Netlify function (get-users.js) to fetch all users and roles from Supabase",
        "Admin page renders user list with editable roles dynamically",
        "Dynamic admin link visibility in navigation based on logged-in user's role",
        "Kept auth session stable; added event dispatching in auth.js to update UI and admin nav reactively",
      ],
      file: "admin.js + admin/index.html",
    },
    {
      title: "Team Page",
      icon: Users,
      color: "pink",
      changes: [
        "Fully rewritten to show static team members with photo, name, role, bio, and social links",
        "Removed legacy story/vote/save code to avoid errors",
        "Future goal: fetch team members dynamically from Supabase",
      ],
      file: "team/index.html",
    },
    {
      title: "Profile Page",
      icon: FileText,
      color: "purple",
      changes: [
        "Separate grids for voted and saved stories with dynamic UI updates",
        "Support for recanting votes or unsaving stories",
        "Real-time updates when user interactions occur",
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
          Transforming fragile code into a robust, maintainable system
        </p>
      </div>

      <div className="space-y-8">
        {improvements.map((improvement, index) => {
          const Icon = improvement.icon;

          const colorClasses = {
            purple: {
              bg: "bg-purple-500/20",
              border: "border-purple-500/30",
              text: "text-purple-400",
              iconBg: "bg-purple-500/20",
              gradient: "from-purple-900/30 to-purple-900/10",
            },
            pink: {
              bg: "bg-pink-500/20",
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
                    <p className={`text-sm ${colors.text} font-mono`}>
                      {improvement.file}
                    </p>
                  )}
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
                    Rendering Functions
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
              Eliminated JS errors and broken functionality across all pages
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Modularity</h3>
            <p className="text-slate-300 text-sm">
              Clear separation of concerns with reusable, testable modules
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Scalability</h3>
            <p className="text-slate-300 text-sm">
              Foundation ready for future features and team expansion
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Improvements;