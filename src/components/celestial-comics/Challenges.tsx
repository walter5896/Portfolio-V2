import { AlertCircle, CheckCircle2, ArrowRight } from "lucide-react";

function Challenges() {
  const challenges = [
    {
      challenge: "Netlify Deployment Configuration",
      solution: "Successfully configured build settings and environment variables for Netlify deployment",
      impact: "Site went live with working CI/CD pipeline for automatic deployments on push",
    },
    {
      challenge: "Supabase Environment Variable Errors",
      solution: "Added public-prefixed env vars (PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY) for frontend access",
      impact: "Fixed 'Cannot read properties of undefined (reading SUPABASE_URL)' errors and enabled database connectivity",
    },
    {
      challenge: "Authentication Flow Across Multiple Pages",
      solution: "Implemented consistent auth logic across login, signup, profile, and all content pages with centralized auth.js",
      impact: "Created seamless authentication experience with working login/signup/logout and dynamic UI updates",
    },
    {
      challenge: "Supabase Email Verification Configuration",
      solution: "Configured email verification redirect URLs in Supabase and tested signup verification flow",
      impact: "Users can now verify email addresses with proper redirect handling (email security warnings resolved)",
    },
    {
      challenge: "Stripe Test Mode Integration",
      solution: "Implemented Netlify serverless function for creating Stripe checkout sessions with test card support",
      impact: "Full e-commerce checkout flow with success/cancel pages and secure payment processing",
    },
    {
      challenge: "Row-Level Security Policy Implementation",
      solution: "Wrote comprehensive RLS policies for every database table covering all CRUD operations",
      impact: "Database-level security ensures role-based access control even if application logic fails",
    },
    {
      challenge: "Save buttons causing JS errors on pages without save functionality",
      solution: "Removed unused event listeners and created page-specific rendering functions",
      impact: "Eliminated console errors and improved code clarity",
    },
    {
      challenge: "Broken event listeners after re-renders",
      solution: "Implemented event delegation pattern for dynamically generated content",
      impact: "Vote and save buttons work reliably after UI updates",
    },
    {
      challenge: "Admin link visibility broken by hardcoded URLs",
      solution: "Implemented dynamic script in admin.js responding to auth events",
      impact: "Admin navigation now shows/hides based on user role automatically",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Challenges & Resolutions
        </h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          Overcoming technical debt and architectural issues
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/50 via-pink-500/50 to-purple-500/50 hidden md:block"></div>

        <div className="space-y-12">
          {challenges.map((item, index) => (
            <div key={index} className="relative">
              <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-slate-950 transform -translate-x-2 md:-translate-x-2 hidden md:block"></div>

              <div className={`md:grid md:grid-cols-2 md:gap-8 ${index % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
                <div className={`${index % 2 === 0 ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"}`}>
                  <div className="bg-slate-900/50 border border-red-500/30 rounded-xl p-6 backdrop-blur-sm mb-4 md:mb-0">
                    <div className="flex items-start gap-3 mb-3">
                      <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <h3 className="font-medium text-red-300 text-sm mb-1">Challenge</h3>
                        <p className="text-white text-sm leading-relaxed">{item.challenge}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`${index % 2 === 0 ? "md:col-start-2 md:pl-12" : "md:col-start-1 md:pr-12"}`}>
                  <div className="bg-slate-900/50 border border-green-500/30 rounded-xl p-6 backdrop-blur-sm mb-3">
                    <div className="flex items-start gap-3 mb-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <h3 className="font-medium text-green-300 text-sm mb-1">Solution</h3>
                        <p className="text-white text-sm leading-relaxed">{item.solution}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-900/20 border border-purple-500/20 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <ArrowRight className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                      <p className="text-purple-200 text-xs leading-relaxed">{item.impact}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-500/30 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
        <h2 className="text-3xl font-bold text-white mb-8">Key Learnings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-950/50 rounded-xl p-6">
            <h3 className="text-lg font-bold text-purple-300 mb-3">Event Delegation</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Using event delegation patterns prevents broken listeners when DOM elements are dynamically re-rendered,
              ensuring reliable user interactions.
            </p>
          </div>

          <div className="bg-slate-950/50 rounded-xl p-6">
            <h3 className="text-lg font-bold text-pink-300 mb-3">Separation of Concerns</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Creating page-specific rendering functions eliminates confusion and errors, making code more maintainable
              and reducing coupling.
            </p>
          </div>

          <div className="bg-slate-950/50 rounded-xl p-6">
            <h3 className="text-lg font-bold text-purple-300 mb-3">Environment Configuration</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Proper management of environment variables is critical for serverless functions to access backend services
              securely and reliably.
            </p>
          </div>

          <div className="bg-slate-950/50 rounded-xl p-6">
            <h3 className="text-lg font-bold text-pink-300 mb-3">Dynamic UI Updates</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Event-driven architecture enables reactive UI updates across modules without tight coupling, improving
              user experience and code quality.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-slate-900/50 border border-purple-500/20 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
        <h2 className="text-3xl font-bold text-white mb-6">Development Approach</h2>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-purple-400 font-bold">1</span>
            </div>
            <div>
              <h3 className="font-bold text-white mb-2">Incremental Refactoring</h3>
              <p className="text-slate-300 text-sm">
                Tackled one module at a time to avoid breaking existing functionality while making improvements
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-pink-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-pink-400 font-bold">2</span>
            </div>
            <div>
              <h3 className="font-bold text-white mb-2">Testing in Context</h3>
              <p className="text-slate-300 text-sm">
                Verified each change across all affected pages to ensure consistency and prevent regression
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-purple-400 font-bold">3</span>
            </div>
            <div>
              <h3 className="font-bold text-white mb-2">Documentation & Clarity</h3>
              <p className="text-slate-300 text-sm">
                Maintained clear code structure and naming conventions to support future development and onboarding
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Challenges;