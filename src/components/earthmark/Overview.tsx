export default function Overview() {
  return (
    <section
      id="problem-goals"
      className="py-20 px-6 bg-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <h2 className="font-bold text-5xl text-black text-center mb-16">
          Project Overview
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Assignment */}
          <div className="bg-[#f7f7f7] p-8 rounded-lg shadow-lg border border-gray-200">

            <h3 className="font-bold text-3xl text-black mb-6">
              The Assignment
            </h3>

            <p className="text-lg leading-relaxed text-black mb-6">
              Create a fully responsive, single-page portfolio website for a fictional
              architecture firm from scratch. The project required demonstrating
              proficiency in HTML5, CSS (with SCSS), responsive design principles,
              and multimedia integration.
            </p>

            <p className="text-lg leading-relaxed text-black">
              The challenge was to build a professional-looking website that works
              seamlessly across all device sizes while incorporating advanced
              techniques like art direction, custom video production, and
              accessibility features.
            </p>

          </div>

          {/* Goals */}
          <div className="bg-[#52999c] text-white p-8 rounded-lg shadow-lg">

            <h3 className="font-bold text-3xl mb-6">
              Project Goals
            </h3>

            <ul className="space-y-4">

              <li className="flex items-start gap-3">
                <span className="text-xl">✓</span>
                <span className="text-lg leading-relaxed">
                  Build a fully responsive website using a mobile-first approach
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-xl">✓</span>
                <span className="text-lg leading-relaxed">
                  Implement SCSS for better code organization and maintainability
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-xl">✓</span>
                <span className="text-lg leading-relaxed">
                  Demonstrate art direction with responsive images
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-xl">✓</span>
                <span className="text-lg leading-relaxed">
                  Create and integrate custom multimedia content (video)
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-xl">✓</span>
                <span className="text-lg leading-relaxed">
                  Ensure accessibility with captions and transcripts
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-xl">✓</span>
                <span className="text-lg leading-relaxed">
                  Apply a cohesive visual identity and design system
                </span>
              </li>

            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}