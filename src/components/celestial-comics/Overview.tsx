import { useState } from "react";
import {
  Target,
  Layers,
  Zap,
  ChevronRight,
  ChevronDown,
  Folder,
  FileCode,
} from "lucide-react";

function Overview() {
  const [showFullStructure, setShowFullStructure] = useState(false);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-20">
        <div className="inline-block bg-purple-500/10 border border-purple-500/30 rounded-full px-6 py-2 mb-6">
          <span className="text-purple-300 text-sm font-medium">
            Ground-Up Development
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          CelestialComics
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-8">
          A full-stack comic voting and commerce platform built from scratch,
          transforming a client concept into a production-ready web application
          with custom content management, structured voting logic, and secure
          payment workflows.
        </p>

        <div className="flex flex-wrap gap-3 justify-center">
          <span className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-lg text-purple-200 text-sm">
            Vanilla JavaScript
          </span>
          <span className="px-4 py-2 bg-pink-500/20 border border-pink-500/30 rounded-lg text-pink-200 text-sm">
            Supabase Backend
          </span>
          <span className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-lg text-purple-200 text-sm">
            Netlify Deployment
          </span>
          <span className="px-4 py-2 bg-pink-500/20 border border-pink-500/30 rounded-lg text-pink-200 text-sm">
            Stripe Integration
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        <div className="bg-slate-900/50 border border-purple-500/20 rounded-xl p-6 backdrop-blur-sm">
          <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
            <Target className="w-6 h-6 text-purple-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">15+</h3>
          <p className="text-slate-300">Multi-Page Views</p>
        </div>

        <div className="bg-slate-900/50 border border-purple-500/20 rounded-xl p-6 backdrop-blur-sm">
          <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center mb-4">
            <Layers className="w-6 h-6 text-pink-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">17+</h3>
          <p className="text-slate-300">Modular JavaScript Files</p>
        </div>

        <div className="bg-slate-900/50 border border-purple-500/20 rounded-xl p-6 backdrop-blur-sm">
          <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
            <Zap className="w-6 h-6 text-purple-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Full RLS</h3>
          <p className="text-slate-300">Database Security Policies</p>
        </div>
      </div>

      <div className="bg-slate-900/50 border border-purple-500/20 rounded-2xl p-8 md:p-12 backdrop-blur-sm mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Project Overview</h2>
        <div className="space-y-4 text-slate-300 leading-relaxed">
          <p>
            CelestialComics began as a client-driven concept for an interactive
            comic platform, but quickly evolved into a much broader full-stack
            system. At its core, the site allows users to browse stories,
            participate in timed voting rounds, save content, manage profiles,
            and purchase merchandise that awards bonus voting power.
          </p>

          <p>
            Rather than relying on a front-end framework, the application was
            built using{" "}
            <span className="text-purple-400 font-medium">
              HTML5, CSS3, and modular vanilla JavaScript
            </span>
            . This approach gave me tighter control over rendering logic, page
            behavior, debugging, and architecture decisions, while also
            reinforcing strong foundational development practices.
          </p>

          <p>
            The backend is powered by{" "}
            <span className="text-purple-400 font-medium">Supabase</span>,
            which handles authentication, relational PostgreSQL data storage,
            and permission control. Every major table was secured with{" "}
            <span className="text-purple-400 font-medium">
              Row-Level Security policies
            </span>{" "}
            so that user access rules were enforced at the database layer rather
            than depending only on front-end checks.
          </p>

          <p>
            Hosting and protected server-side operations were handled through{" "}
            <span className="text-purple-400 font-medium">Netlify</span> and{" "}
            <span className="text-purple-400 font-medium">
              serverless functions
            </span>
            , allowing sensitive logic such as vote management, admin actions,
            role updates, and Stripe checkout session creation to remain secure
            and separate from public client code.
          </p>

          <p>
            The final system combines content management, voting lifecycle
            control, user permissions, and{" "}
            <span className="text-purple-400 font-medium">
              Stripe-powered e-commerce
            </span>{" "}
            into a single production-ready platform built to be maintainable,
            scalable, and transferable to the client after development.
          </p>
        </div>
      </div>

      <div className="bg-slate-900/50 border border-purple-500/20 rounded-2xl p-8 md:p-12 backdrop-blur-sm mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">System Scope</h2>
        <div className="space-y-4 text-slate-300 leading-relaxed">
          <p>
            Although the site presents itself as a comic platform, the actual
            system scope is closer to a lightweight content and engagement
            platform. The application had to support both public user-facing
            interactions and private administrative workflows without requiring
            direct database access from the client.
          </p>

          <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>Timed voting rounds with open, closed, and finalized states</li>
            <li>Persistent bonus vote rewards tied to merchandise purchases</li>
            <li>Administrative story, product, and user management tools</li>
            <li>Protected backend operations through serverless functions</li>
            <li>Role-based data access and moderation controls</li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
            <Target className="w-6 h-6 text-white" />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Key Objective</h2>
            <p className="text-slate-200 leading-relaxed">
              Turn an early, fragile concept into a{" "}
              <span className="text-purple-300 font-medium">
                stable, modular, and scalable production system
              </span>{" "}
              capable of supporting structured voting rounds, secure user
              authentication, administrative content management, and integrated
              commerce workflows while also making the platform manageable for
              the client after handoff.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-slate-900/50 border border-purple-500/20 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-white mb-4">
              Project Structure
            </h2>
            <p className="text-slate-300 leading-relaxed">
              The project was organized as a multi-page application with
              dedicated modules for authentication, voting, profile management,
              storefront logic, administration, and shared utilities. As the
              platform expanded, maintaining a modular file structure became
              critical for isolating features, reducing regressions, and keeping
              the codebase maintainable.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowFullStructure((prev) => !prev)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-purple-500/30 bg-purple-500/10 text-purple-200 hover:bg-purple-500/20 transition-colors shrink-0"
          >
            {showFullStructure ? (
              <>
                <ChevronDown className="w-4 h-4" />
                Collapse
              </>
            ) : (
              <>
                <ChevronRight className="w-4 h-4" />
                Expand
              </>
            )}
          </button>
        </div>

        <div className="bg-slate-950/80 rounded-lg p-6 font-mono text-sm overflow-x-auto">
          <div className="space-y-1 text-slate-300 min-w-[720px]">
            <div className="flex items-center gap-2 text-purple-300">
              <Folder className="w-4 h-4" />
              <span>/</span>
            </div>

            <div className="ml-6 flex items-center gap-2">
              <FileCode className="w-4 h-4 text-slate-500" />
              <span>index.html</span>
            </div>

            <div className="ml-6 flex items-center gap-2 text-purple-300">
              <Folder className="w-4 h-4" />
              <span>/gallery</span>
            </div>
            <div className="ml-12 flex items-center gap-2">
              <FileCode className="w-4 h-4 text-slate-500" />
              <span>index.html</span>
            </div>
            <div className="ml-12 flex items-center gap-2">
              <FileCode className="w-4 h-4 text-slate-500" />
              <span>story.html</span>
            </div>

            <div className="ml-6 flex items-center gap-2 text-purple-300">
              <Folder className="w-4 h-4" />
              <span>/vote</span>
            </div>
            <div className="ml-12 flex items-center gap-2">
              <FileCode className="w-4 h-4 text-slate-500" />
              <span>index.html</span>
            </div>

            <div className="ml-6 flex items-center gap-2 text-purple-300">
              <Folder className="w-4 h-4" />
              <span>/shop</span>
            </div>
            <div className="ml-12 flex items-center gap-2">
              <FileCode className="w-4 h-4 text-slate-500" />
              <span>index.html</span>
            </div>
            <div className="ml-12 flex items-center gap-2">
              <FileCode className="w-4 h-4 text-slate-500" />
              <span>success.html</span>
            </div>
            <div className="ml-12 flex items-center gap-2">
              <FileCode className="w-4 h-4 text-slate-500" />
              <span>cancel.html</span>
            </div>

            <div className="ml-6 flex items-center gap-2 text-purple-300">
              <Folder className="w-4 h-4" />
              <span>/profile</span>
            </div>
            <div className="ml-12 flex items-center gap-2">
              <FileCode className="w-4 h-4 text-slate-500" />
              <span>index.html</span>
            </div>

            <div className="ml-6 flex items-center gap-2 text-purple-300">
              <Folder className="w-4 h-4" />
              <span>/login</span>
            </div>
            <div className="ml-12 flex items-center gap-2">
              <FileCode className="w-4 h-4 text-slate-500" />
              <span>index.html</span>
            </div>
            <div className="ml-12 flex items-center gap-2">
              <FileCode className="w-4 h-4 text-slate-500" />
              <span>signup.html</span>
            </div>

            <div className="ml-6 flex items-center gap-2 text-purple-300">
              <Folder className="w-4 h-4" />
              <span>/team</span>
            </div>
            <div className="ml-12 flex items-center gap-2">
              <FileCode className="w-4 h-4 text-slate-500" />
              <span>index.html</span>
            </div>

            <div className="ml-6 flex items-center gap-2 text-purple-300">
              <Folder className="w-4 h-4" />
              <span>/admin</span>
            </div>
            <div className="ml-12 flex items-center gap-2">
              <FileCode className="w-4 h-4 text-slate-500" />
              <span>index.html</span>
            </div>

            <div className="ml-6 flex items-center gap-2 text-pink-300 mt-4">
              <Folder className="w-4 h-4" />
              <span>/js</span>
            </div>

            <div className="ml-12 grid grid-cols-1 md:grid-cols-2 gap-y-1 gap-x-10">
              <div className="flex items-center gap-2">
                <FileCode className="w-4 h-4 text-slate-500" />
                <span>admin.js</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCode className="w-4 h-4 text-slate-500" />
                <span>admin-nav.js</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCode className="w-4 h-4 text-slate-500" />
                <span>auth.js</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCode className="w-4 h-4 text-slate-500" />
                <span>auth-signup.js</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCode className="w-4 h-4 text-slate-500" />
                <span>env.js</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCode className="w-4 h-4 text-slate-500" />
                <span>gallery.js</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCode className="w-4 h-4 text-slate-500" />
                <span>profile.js</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCode className="w-4 h-4 text-slate-500" />
                <span>shop.js</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCode className="w-4 h-4 text-slate-500" />
                <span>singleStoryRestrict.js</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCode className="w-4 h-4 text-slate-500" />
                <span>story.js</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCode className="w-4 h-4 text-slate-500" />
                <span>utils.js</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCode className="w-4 h-4 text-slate-500" />
                <span>vote.js</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCode className="w-4 h-4 text-slate-500" />
                <span>votingStateControl.js</span>
              </div>
            </div>

            {showFullStructure && (
              <>
                <div className="ml-6 flex items-center gap-2 text-pink-300 mt-4">
                  <Folder className="w-4 h-4" />
                  <span>/.netlify/functions</span>
                </div>

                <div className="ml-12 grid grid-cols-1 md:grid-cols-2 gap-y-1 gap-x-10">
                  <div className="flex items-center gap-2">
                    <FileCode className="w-4 h-4 text-slate-500" />
                    <span>close-voting-period.js</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileCode className="w-4 h-4 text-slate-500" />
                    <span>create-checkout-session.js</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileCode className="w-4 h-4 text-slate-500" />
                    <span>create-product.js</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileCode className="w-4 h-4 text-slate-500" />
                    <span>create-story.js</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileCode className="w-4 h-4 text-slate-500" />
                    <span>delete-product-image.js</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileCode className="w-4 h-4 text-slate-500" />
                    <span>delete-story-cover.js</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileCode className="w-4 h-4 text-slate-500" />
                    <span>delete-story-page.js</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileCode className="w-4 h-4 text-slate-500" />
                    <span>delete-story.js</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileCode className="w-4 h-4 text-slate-500" />
                    <span>determine-winner.js</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileCode className="w-4 h-4 text-slate-500" />
                    <span>get-users.js</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileCode className="w-4 h-4 text-slate-500" />
                    <span>set-voting-period.js</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileCode className="w-4 h-4 text-slate-500" />
                    <span>stripe-webhook.js</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileCode className="w-4 h-4 text-slate-500" />
                    <span>update-product.js</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileCode className="w-4 h-4 text-slate-500" />
                    <span>update-story.js</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileCode className="w-4 h-4 text-slate-500" />
                    <span>update-user-role.js</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileCode className="w-4 h-4 text-slate-500" />
                    <span>update-user-votes.js</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileCode className="w-4 h-4 text-slate-500" />
                    <span>upload-product-image.js</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileCode className="w-4 h-4 text-slate-500" />
                    <span>upload-story-cover.js</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileCode className="w-4 h-4 text-slate-500" />
                    <span>upload-story-page.js</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Overview;