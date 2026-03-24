import { AlertCircle, CheckCircle2, ArrowRight, Wrench } from "lucide-react";

function Challenges() {
  const challenges = [
    {
      challenge: "Deployment and environment setup were fragile early on",
      solution:
        "Stabilized the Netlify deployment pipeline by correcting build settings, environment variable usage, and frontend/backend configuration boundaries so the application could reliably access Supabase and serverless functions.",
      impact:
        "Established a dependable production deployment workflow and eliminated configuration errors that were blocking authentication, database connectivity, and checkout logic.",
    },
    {
      challenge: "Authentication behavior needed to remain consistent across a multi-page app",
      solution:
        "Centralized auth-dependent UI behavior in shared modules so login state, protected links, and user-specific rendering could behave consistently across profile, voting, navigation, and admin views.",
      impact:
        "Created a more coherent user experience and reduced duplicated auth logic across pages that would have become harder to maintain over time.",
    },
    {
      challenge: "The voting system became increasingly complex as the product evolved",
      solution:
        "Refactored voting behavior into a more centralized logic layer that could account for voting period state, user vote history, remaining balances, and page-specific button behavior without scattering those rules throughout the frontend.",
      impact:
        "Reduced inconsistencies between views and made the voting lifecycle easier to reason about as additional features such as recanting, bonus votes, and round finalization were introduced.",
    },
    {
      challenge: "Round votes and bonus votes required different long-term behavior",
      solution:
        "Separated standard round vote balances from purchased bonus vote balances so each could be managed independently. Round votes reset per cycle, while bonus votes persist and can be awarded through commerce workflows.",
      impact:
        "Prevented vote hoarding issues, improved fairness across voting periods, and created a cleaner system for integrating purchases into platform behavior.",
    },
    {
      challenge: "Natural round closure and manual round closure were not always interpreted the same way",
      solution:
        "Aligned the frontend and backend around the idea of an effectively closed round by accounting for end-time expiration, manual closing, and finalized state rather than relying on only one database field.",
      impact:
        "Made winner determination more reliable and prevented broken workflows when a round ended naturally without a manual admin action.",
    },
    {
      challenge: "Dynamic DOM updates caused event listeners to fail after re-renders",
      solution:
        "Used event delegation and cleaner page-level rendering boundaries so interactions remained stable even when content was regenerated or updated dynamically.",
      impact:
        "Improved reliability for voting, saving, unsaving, and admin interactions without requiring brittle listener reattachment patterns everywhere.",
    },
    {
      challenge: "Administrative controls needed to be safe, usable, and client-manageable",
      solution:
        "Built a protected admin interface backed by Netlify Functions and role-aware UI logic so sensitive actions such as vote adjustments, user role updates, product management, and voting period control remained secure while still being accessible to the client.",
      impact:
        "Shifted the project from a developer-maintained build into a platform the client can realistically operate after handoff.",
    },
    {
      challenge: "Stripe integration had to do more than just process payments",
      solution:
        "Implemented checkout creation and webhook-driven fulfillment logic so successful purchases could update application state and award bonus votes instead of existing as an isolated payment flow.",
      impact:
        "Connected e-commerce directly to the platform’s engagement system and turned merchandise purchases into a functional part of the product experience.",
    },
    {
      challenge: "Database security could not rely on frontend behavior alone",
      solution:
        "Wrote Row-Level Security policies across the major tables to enforce ownership rules, admin permissions, and controlled access for CRUD operations directly at the database layer.",
      impact:
        "Added a stronger security foundation and protected core data workflows even if client-side logic was bypassed or misused.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Challenges & Resolutions
        </h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          The project’s biggest challenges were less about isolated bugs and
          more about making multiple systems behave reliably together.
        </p>
      </div>

      <div className="bg-slate-900/50 border border-purple-500/20 rounded-2xl p-8 md:p-12 backdrop-blur-sm mb-12">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <Wrench className="w-6 h-6 text-purple-400" />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-3">
              Challenge Profile
            </h2>
            <p className="text-slate-300 leading-relaxed">
              As CelestialComics expanded, the project moved beyond simple page
              building and into full-system coordination. The hardest parts of
              development involved keeping authentication, voting state,
              administrative controls, database security, and Stripe workflows
              aligned as the platform grew. Many of the challenges were not
              one-time fixes—they were architectural problems that required more
              intentional separation of concerns and stronger system-level
              thinking.
            </p>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/50 via-pink-500/50 to-purple-500/50 hidden md:block"></div>

        <div className="space-y-12">
          {challenges.map((item, index) => (
            <div key={index} className="relative">
              <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-slate-950 transform -translate-x-2 hidden md:block"></div>

              <div
                className={`md:grid md:grid-cols-2 md:gap-8 ${
                  index % 2 === 0 ? "" : "md:flex-row-reverse"
                }`}
              >
                <div
                  className={`${
                    index % 2 === 0
                      ? "md:text-right md:pr-12"
                      : "md:col-start-2 md:pl-12"
                  }`}
                >
                  <div className="bg-slate-900/50 border border-red-500/30 rounded-xl p-6 backdrop-blur-sm mb-4 md:mb-0">
                    <div className="flex items-start gap-3 mb-3">
                      <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <h3 className="font-medium text-red-300 text-sm mb-1">
                          Challenge
                        </h3>
                        <p className="text-white text-sm leading-relaxed">
                          {item.challenge}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`${
                    index % 2 === 0
                      ? "md:col-start-2 md:pl-12"
                      : "md:col-start-1 md:pr-12"
                  }`}
                >
                  <div className="bg-slate-900/50 border border-green-500/30 rounded-xl p-6 backdrop-blur-sm mb-3">
                    <div className="flex items-start gap-3 mb-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <h3 className="font-medium text-green-300 text-sm mb-1">
                          Solution
                        </h3>
                        <p className="text-white text-sm leading-relaxed">
                          {item.solution}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-900/20 border border-purple-500/20 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <ArrowRight className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                      <p className="text-purple-200 text-xs leading-relaxed">
                        {item.impact}
                      </p>
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
            <h3 className="text-lg font-bold text-purple-300 mb-3">
              System Consistency Matters
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Frontend and backend logic must agree on shared states like open,
              closed, and finalized. Even small mismatches in those rules can
              break important workflows such as vote recanting or winner
              determination.
            </p>
          </div>

          <div className="bg-slate-950/50 rounded-xl p-6">
            <h3 className="text-lg font-bold text-pink-300 mb-3">
              Separation of Concerns Reduces Fragility
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Splitting responsibilities between shared modules, page-level
              scripts, and protected backend functions made the app easier to
              debug and significantly reduced the risk of one feature breaking
              another.
            </p>
          </div>

          <div className="bg-slate-950/50 rounded-xl p-6">
            <h3 className="text-lg font-bold text-purple-300 mb-3">
              Security Should Live Below the UI
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Moving access control into Supabase policies and protected
              serverless functions created much stronger guarantees than relying
              on hidden buttons or client-side checks alone.
            </p>
          </div>

          <div className="bg-slate-950/50 rounded-xl p-6">
            <h3 className="text-lg font-bold text-pink-300 mb-3">
              Real Products Require Operational Thinking
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Building the app was only part of the challenge. Launch readiness,
              client handoff, payment ownership, and order fulfillment also
              shaped how the system needed to be designed.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-slate-900/50 border border-purple-500/20 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
        <h2 className="text-3xl font-bold text-white mb-6">
          Development Approach
        </h2>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-purple-400 font-bold">1</span>
            </div>
            <div>
              <h3 className="font-bold text-white mb-2">
                Incremental Refactoring
              </h3>
              <p className="text-slate-300 text-sm">
                Major changes were introduced one subsystem at a time so core
                functionality could remain testable while architecture improved.
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
                Each fix had to be checked across multiple pages and workflows,
                because changes in authentication, voting, or admin state rarely
                affected only one view.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-purple-400 font-bold">3</span>
            </div>
            <div>
              <h3 className="font-bold text-white mb-2">
                Build for Maintainability
              </h3>
              <p className="text-slate-300 text-sm">
                Refactors were guided not only by what fixed the current issue,
                but by what would make the codebase safer for future changes,
                client usage, and platform growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Challenges;