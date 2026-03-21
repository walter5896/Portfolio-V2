export default function ResearchPlanning() {
  return (
    <section id="research" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-bold text-5xl text-black text-center mb-16">
          Research & Planning
        </h2>

        <div className="bg-gradient-to-br from-[#f7f7f7] to-[#edf8ff] p-10 rounded-lg shadow-lg">
          <div className="space-y-8">
            <div>
              <h3 className="font-bold text-2xl text-black mb-4">
                Research Methodology
              </h3>
              <p className="text-xl leading-relaxed text-black">
                Before beginning development, I conducted thorough research into
                contemporary architecture websites to understand best practices
                for visual storytelling, navigation patterns, and responsive
                image handling in the architectural space.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-2xl text-black mb-4">
                Wireframing & Information Architecture
              </h3>
              <p className="text-xl leading-relaxed text-black">
                Wireframes were created to establish clear visual hierarchy and
                intuitive navigation. The structure prioritized showcasing
                architectural photography while maintaining accessibility and
                readability across all device sizes.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-2xl text-black mb-4">
                Mobile-First Strategy
              </h3>
              <p className="text-xl leading-relaxed text-black">
                A mobile-first approach ensured that the core experience was
                optimized for smaller screens before progressively enhancing for
                tablets and desktops. This methodology resulted in faster load
                times and better performance across all devices.
              </p>
            </div>

            <div className="pt-6 border-t border-gray-300">
              <h3 className="font-bold text-2xl text-black mb-4">
                Key Planning Decisions
              </h3>

              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#52999c] mr-3 text-2xl">→</span>
                  <span className="text-xl text-black">
                    Implement art direction using HTML5 picture element for
                    optimal image cropping
                  </span>
                </li>

                <li className="flex items-start">
                  <span className="text-[#52999c] mr-3 text-2xl">→</span>
                  <span className="text-xl text-black">
                    Organize SCSS architecture for scalability and team
                    collaboration
                  </span>
                </li>

                <li className="flex items-start">
                  <span className="text-[#52999c] mr-3 text-2xl">→</span>
                  <span className="text-xl text-black">
                    Plan for video integration with accessibility features from
                    the start
                  </span>
                </li>

                <li className="flex items-start">
                  <span className="text-[#52999c] mr-3 text-2xl">→</span>
                  <span className="text-xl text-black">
                    Design with semantic HTML to ensure screen reader
                    compatibility
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}