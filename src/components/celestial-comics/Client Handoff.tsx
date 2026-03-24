import {
  Handshake,
  Server,
  Database,
  CreditCard,
  ShieldCheck,
  ClipboardList,
  Package,
  BookOpen,
} from "lucide-react";

function Handoff() {
  const handoffAreas = [
    {
      icon: Server,
      title: "Hosting & Deployment Transfer",
      label: "Netlify",
      color: "purple",
      description:
        "The application is currently structured to be transferred into a client-owned hosting environment without requiring a rebuild. Netlify would remain the deployment layer, but ownership, environment variables, and production settings would be moved into the client’s account as part of launch preparation.",
      bullets: [
        "Transfer site ownership or recreate the project inside a client-owned Netlify account",
        "Reconfigure production environment variables securely during transfer",
        "Confirm deployed functions, redirects, and build settings in the new environment",
        "Preserve separation between public client code and protected backend logic",
      ],
    },
    {
      icon: Database,
      title: "Backend Ownership Transition",
      label: "Supabase",
      color: "pink",
      description:
        "Because Supabase handles authentication, relational data, storage, and security policies, the long-term success of the project depends on the client owning backend access. The handoff plan includes transitioning operational control while preserving the application’s data model and role-based protections.",
      bullets: [
        "Move the project into a client-controlled Supabase workspace or document equivalent migration steps",
        "Transfer access to authentication, database tables, storage buckets, and policies",
        "Review Row-Level Security and admin permissions with the client before launch",
        "Rotate sensitive keys as part of final production handoff",
      ],
    },
    {
      icon: CreditCard,
      title: "Payment Account Transfer",
      label: "Stripe",
      color: "purple",
      description:
        "The Stripe integration is already functional from a development standpoint, but live operation requires the client’s business account to be the source of truth. That means payment ownership, webhook configuration, and checkout credentials need to be tied directly to the client rather than the development environment.",
      bullets: [
        "Connect checkout and webhook logic to a client-owned Stripe account",
        "Replace development credentials with production keys in the deployment environment",
        "Re-register webhook endpoints for the client’s live configuration",
        "Verify that successful purchases continue to trigger bonus vote fulfillment correctly",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Security & Credential Finalization",
      label: "Launch Readiness",
      color: "pink",
      description:
        "A major part of handoff is not just giving the client access, but doing it safely. The platform was built so sensitive operations stay protected behind environment variables and serverless functions, which makes ownership transfer more manageable and reduces the risk of exposing private credentials in the frontend.",
      bullets: [
        "Audit all environment variables before launch",
        "Remove or replace any development-only secrets or test credentials",
        "Verify that no privileged keys are exposed to public client code",
        "Re-test critical serverless workflows after key rotation",
      ],
    },
  ];

  const operations = [
    {
      icon: ClipboardList,
      title: "Admin Readiness",
      description:
        "The admin panel was built specifically to reduce dependency on direct code changes after launch. The client can already manage stories, products, users, vote balances, and voting rounds through the interface, which makes the platform more realistic as a handoff-ready system rather than a developer-only prototype.",
    },
    {
      icon: BookOpen,
      title: "Documentation & Training",
      description:
        "A proper handoff would include a walkthrough of the admin workflow, account ownership, and deployment structure. This ensures the client understands how to manage content, what services power the application, and when technical support may still be needed after launch.",
    },
    {
      icon: Package,
      title: "Order Fulfillment Planning",
      description:
        "While the platform already supports checkout and bonus vote fulfillment, physical merchandise fulfillment still requires an operational decision. At the current stage, the technical purchase flow is complete, but the delivery workflow for physical products needs to be defined with the client before a full public launch.",
    },
  ];

  const fulfillmentOptions = [
    {
      title: "Manual Fulfillment",
      subtitle: "Best short-term launch option",
      points: [
        "Client receives order details and fulfills products manually",
        "Lowest setup complexity and easiest path to launch",
        "Works well while order volume is still small",
      ],
    },
    {
      title: "Third-Party Fulfillment",
      subtitle: "Best medium-term scaling option",
      points: [
        "Connect product orders to an external shipping or print-on-demand provider",
        "Reduces manual workload for the client",
        "Would require additional integration and workflow testing",
      ],
    },
    {
      title: "Custom Internal Order System",
      subtitle: "Best long-term control option",
      points: [
        "Track fulfillment status directly inside the platform",
        "Creates more operational visibility for the client",
        "Requires additional development beyond the current implementation",
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-block bg-purple-500/10 border border-purple-500/30 rounded-full px-6 py-2 mb-6">
          <span className="text-purple-300 text-sm font-medium">
            Launch Readiness
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Handoff & Launch Planning
        </h1>

        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          Beyond building the product, this phase considers what happens when
          the platform is transferred to the client and prepared for real-world
          operation.
        </p>
      </div>

      {/* Overview */}
      <div className="bg-slate-900/50 border border-purple-500/20 rounded-2xl p-8 md:p-12 backdrop-blur-sm mb-12">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <Handshake className="w-6 h-6 text-purple-400" />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-3">
              Why Handoff Matters
            </h2>
            <p className="text-slate-300 leading-relaxed">
              CelestialComics was not treated as a one-off school build. From an
              architectural standpoint, it was developed with the expectation
              that ownership would eventually shift to the client. That means
              launch readiness is not only about code quality, but also about
              account ownership, security, documentation, and operational
              planning. The goal of this phase is to make the platform
              manageable after development rather than leaving the client
              dependent on the original build environment.
            </p>
          </div>
        </div>
      </div>

      {/* Handoff Areas */}
      <div className="space-y-8 mb-16">
        {handoffAreas.map((area, index) => {
          const Icon = area.icon;

          const colorClasses = {
            purple: {
              border: "border-purple-500/30",
              text: "text-purple-400",
              iconBg: "bg-purple-500/20",
              badge:
                "bg-purple-500/10 border-purple-500/30 text-purple-300",
            },
            pink: {
              border: "border-pink-500/30",
              text: "text-pink-400",
              iconBg: "bg-pink-500/20",
              badge: "bg-pink-500/10 border-pink-500/30 text-pink-300",
            },
          };

          const colors = colorClasses[area.color as keyof typeof colorClasses];

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
                  <div
                    className={`inline-block px-3 py-1 rounded-full border text-xs font-medium mb-3 ${colors.badge}`}
                  >
                    {area.label}
                  </div>

                  <h2 className="text-2xl font-bold text-white mb-3">
                    {area.title}
                  </h2>

                  <p className="text-slate-300 leading-relaxed mb-5">
                    {area.description}
                  </p>

                  <div className="space-y-3">
                    {area.bullets.map((bullet, bulletIndex) => (
                      <div key={bulletIndex} className="flex items-start gap-3">
                        <div
                          className={`w-2 h-2 rounded-full mt-2 ${area.color === "purple" ? "bg-purple-400" : "bg-pink-400"}`}
                        />
                        <p className="text-slate-300 text-sm leading-relaxed">
                          {bullet}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Operational Readiness */}
      <div className="bg-slate-900/50 border border-purple-500/20 rounded-2xl p-8 md:p-12 backdrop-blur-sm mb-16">
        <h2 className="text-3xl font-bold text-white mb-8">
          Operational Readiness
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {operations.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-slate-950/60 border border-purple-500/20 rounded-xl p-6"
              >
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-purple-400" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Fulfillment Planning */}
      <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-2xl p-8 md:p-12 backdrop-blur-sm mb-16">
        <h2 className="text-3xl font-bold text-white mb-6">
          Order Fulfillment Considerations
        </h2>

        <p className="text-slate-200 leading-relaxed mb-8 max-w-4xl">
          The technical commerce layer is already in place: users can purchase
          merchandise, checkout through Stripe, and automatically receive bonus
          votes after successful payment. What remains unresolved is the
          physical fulfillment model. That is not a code failure—it is a
          business and operations decision that needs to be finalized before the
          platform transitions into a fully live client-managed product.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {fulfillmentOptions.map((option, index) => (
            <div
              key={index}
              className="bg-slate-950/50 border border-purple-500/20 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-white mb-2">
                {option.title}
              </h3>
              <p className="text-purple-300 text-sm mb-4">{option.subtitle}</p>

              <div className="space-y-3">
                {option.points.map((point, pointIndex) => (
                  <div key={pointIndex} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-pink-400 mt-2" />
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommendation */}
      <div className="bg-slate-900/50 border border-purple-500/20 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
        <h2 className="text-3xl font-bold text-white mb-6">
          Recommended Next Phase
        </h2>

        <div className="space-y-4 text-slate-300 leading-relaxed">
          <p>
            The strongest short-term path would be to launch with
            <span className="text-purple-400 font-medium">
              {" "}client-owned accounts, documented admin workflows, and manual
              order fulfillment
            </span>
            . That would allow the platform to become operational without
            delaying launch for a more advanced logistics build.
          </p>

          <p>
            From there, the next technical phase could focus on expanding
            operational support rather than rebuilding core functionality. That
            may include fulfillment automation, improved reporting, or a more
            formal maintenance workflow after handoff.
          </p>

          <p>
            In other words, the application itself is already capable of
            supporting launch. The remaining work is primarily about
            <span className="text-purple-400 font-medium">
              {" "}ownership transfer, documentation, and real-world operations
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Handoff;