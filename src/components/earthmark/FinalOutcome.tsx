import imgHeroLarge from "../../assets/earthmark/earthmark-final-hero.png";

export default function FinalOutcome() {
  return (
    <section id="outcome" className="py-20 px-6 bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-['Merriweather',serif] font-bold text-5xl text-black text-center mb-16">
          Final Outcome
        </h2>

        {/* Hero Image */}
        <div className="mb-8">
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img
              src={imgHeroLarge}
              alt="Final Earthmark Studios website hero image showing modern architectural building"
              className="w-full h-auto"
            />
          </div>
          <p className="font-['Roboto',sans-serif] italic text-center text-lg text-gray-600 mt-4">
            Hero image art-directed using the HTML5 &lt;picture&gt; element to preserve architectural
            emphasis across breakpoints.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 mt-16">
          {/* Left: Project Summary */}
          <div className="bg-[#f3f6ff] border border-black p-10 rounded-lg shadow-lg">
            <h3 className="font-['Roboto',sans-serif] font-medium text-2xl text-black mb-6">
              The Earthmark Studios mockup demonstrates:
            </h3>

            <p className="font-['Roboto',sans-serif] text-xl leading-relaxed text-black mb-8">
              The integration of responsive design, modular development, and multimedia storytelling
              into a cohesive brand experience.
            </p>

            <h4 className="font-['Roboto',sans-serif] font-medium text-2xl text-black mb-4">
              The final product includes:
            </h4>

            <ul className="space-y-3">
              {[
                "Fully responsive layout across devices",
                "Art-directed imagery optimized for multiple breakpoints",
                "Structured SCSS architecture for scalability",
                "Self-produced and captioned brand video",
                "Accessible semantic HTML implementation",
              ].map((item) => (
                <li key={item} className="flex items-start">
                  <span className="text-[#52999c] mr-3 text-xl font-bold">•</span>
                  <span className="font-['Roboto',sans-serif] text-lg text-black">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-8 border-t border-gray-300">
              <h4 className="font-['Roboto',sans-serif] font-medium text-2xl text-black mb-4">
                Core Competencies Demonstrated:
              </h4>

              <div className="flex flex-wrap gap-3">
                {[
                  "Responsive Web Design",
                  "SCSS Architecture",
                  "Art Direction",
                  "Video Production",
                  "Accessibility",
                  "Typography Systems",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="bg-[#52999c] text-white px-4 py-2 rounded-full font-['Roboto',sans-serif] text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Stats & Metrics */}
          <div className="space-y-8">
            <div className="bg-[#ffebcc] border border-black p-10 rounded-lg shadow-lg">
              <h3 className="font-['Roboto',sans-serif] font-medium text-2xl text-black mb-6">
                Project Metrics
              </h3>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "100%", label: "Responsive" },
                  { value: "WCAG 2.1", label: "AA Compliant" },
                  { value: "3", label: "Breakpoints" },
                  { value: "5+", label: "SCSS Modules" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="font-['Merriweather',serif] font-bold text-4xl text-[#52999c] mb-2">
                      {stat.value}
                    </div>
                    <div className="font-['Roboto',sans-serif] text-lg text-black">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-10 rounded-lg shadow-lg border-2 border-[#52999c]">
              <h3 className="font-['Roboto',sans-serif] font-medium text-2xl text-black mb-4">
                Technologies Used
              </h3>

              <div className="space-y-3">
                {[
                  { tech: "HTML5", desc: "Semantic structure & <picture> element" },
                  { tech: "SCSS/CSS Grid", desc: "Modular styling & responsive layouts" },
                  { tech: "Adobe Premiere Pro", desc: "Video editing & production" },
                  { tech: "Adobe Illustrator", desc: "Logo design & SVG creation" },
                  { tech: "Figma", desc: "Design & prototyping" },
                ].map((item) => (
                  <div key={item.tech} className="pb-3 border-b border-gray-200 last:border-0">
                    <div className="font-['Roboto',sans-serif] font-bold text-lg text-black">
                      {item.tech}
                    </div>
                    <div className="font-['Roboto',sans-serif] text-base text-gray-600">
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}