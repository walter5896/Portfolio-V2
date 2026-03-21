import imgResponsiveArt from "../../assets/earthmark/earthmark-art-direction.png";

export default function DesignProcess() {
  return (
    <section id="process" className="py-20 px-6 bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-['Merriweather',serif] font-bold text-5xl text-black text-center mb-16">
          Design & Development Process
        </h2>

        <div className="space-y-16">
          {/* Step 1: Responsive Art Direction */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-[#d9d9d9] border border-black p-8 rounded-lg shadow-lg">
                <img
                  src={imgResponsiveArt}
                  alt="Responsive art direction diagram showing mobile, tablet, and desktop layouts"
                  className="w-full h-auto rounded shadow-md"
                />
              </div>
            </div>

            <div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[#52999c] text-white rounded-full w-10 h-10 flex items-center justify-center font-['Roboto',sans-serif] font-bold text-xl">
                    1
                  </span>
                  <h3 className="font-['Roboto',sans-serif] font-bold text-3xl text-black">
                    Responsive Art Direction
                  </h3>
                </div>

                <p className="font-['Roboto',sans-serif] text-xl leading-relaxed text-black mb-4">
                  By using the HTML5 &lt;picture&gt; element, the hero images are
                  thoughtfully cropped and resized to highlight important
                  architectural details at different screen sizes. This keeps the
                  visuals impactful and the story consistent, whether someone is
                  viewing the site on a phone, tablet, or desktop.
                </p>

                <div className="bg-[#edf8ff] p-4 rounded border-l-4 border-[#52999c]">
                  <p className="font-['Roboto',sans-serif] font-medium text-lg text-black">
                    Key Technique: Art direction ensures visual storytelling
                    remains powerful across all breakpoints
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: SCSS Architecture */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-black p-8 rounded-lg shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[#52999c] text-white rounded-full w-10 h-10 flex items-center justify-center font-['Roboto',sans-serif] font-bold text-xl">
                    2
                  </span>
                  <h3 className="font-['Roboto',sans-serif] font-bold text-3xl text-white">
                    SCSS Architecture
                  </h3>
                </div>

                <p className="font-['Roboto',sans-serif] text-xl leading-relaxed text-white mb-6">
                  The styling was organized using separate SCSS files for
                  scalability and maintainability:
                </p>

                <ul className="space-y-3 mb-6">
                  {[
                    { file: "variables.scss", desc: "colors, typography, spacing" },
                    { file: "small.scss", desc: "base/mobile styles" },
                    { file: "medium.scss", desc: "tablet breakpoint" },
                    { file: "large.scss", desc: "desktop refinements" },
                    {
                      file: "styles.scss",
                      desc: "centralized imports and media queries",
                    },
                  ].map((item) => (
                    <li key={item.file} className="flex items-start">
                      <span className="text-[#9ccff2] mr-3 font-bold">→</span>
                      <span className="font-['Roboto',sans-serif] text-lg text-white">
                        <span className="font-bold">{item.file}</span> — {item.desc}
                      </span>
                    </li>
                  ))}
                </ul>

                <p className="font-['Roboto',sans-serif] text-lg leading-relaxed text-white">
                  This structure allows easy updates to branding, layout spacing,
                  and responsive behavior without rewriting large portions of code.
                </p>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="bg-[#313131] p-6 rounded-lg shadow-lg font-mono text-sm text-[#9ccff2] overflow-x-auto">
                <pre>{`// styles.scss
@import 'variables';
@import 'small';

@media (min-width: 768px) {
  @import 'medium';
}

@media (min-width: 1024px) {
  @import 'large';
}`}</pre>
              </div>
            </div>
          </div>

          {/* Step 3: Video Creation & Editing */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-[#edf8ff] to-[#9ccff2] p-8 rounded-lg shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[#52999c] text-white rounded-full w-10 h-10 flex items-center justify-center font-['Roboto',sans-serif] font-bold text-xl">
                    3
                  </span>
                  <h3 className="font-['Roboto',sans-serif] font-bold text-3xl text-black">
                    Video Creation & Editing
                  </h3>
                </div>

                <p className="font-['Roboto',sans-serif] text-xl leading-relaxed text-black mb-6">
                  In addition to web development, I independently produced the
                  featured video for the site.
                </p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-[#313131] mr-3 text-2xl">✓</span>
                    <span className="font-['Roboto',sans-serif] text-lg text-black">
                      Filmed on location
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#313131] mr-3 text-2xl">✓</span>
                    <span className="font-['Roboto',sans-serif] text-lg text-black">
                      Scripted to align with brand messaging
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#313131] mr-3 text-2xl">✓</span>
                    <span className="font-['Roboto',sans-serif] text-lg text-black">
                      Edited for pacing and clarity
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#313131] mr-3 text-2xl">✓</span>
                    <span className="font-['Roboto',sans-serif] text-lg text-black">
                      Exported in multiple formats (MP4 & WebM) for browser
                      compatibility
                    </span>
                  </li>
                </ul>

                <p className="font-['Roboto',sans-serif] text-lg italic text-black">
                  This allowed the site to communicate brand values through
                  storytelling, not just static imagery.
                </p>
              </div>
            </div>

            <div>
              <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-[#52999c]">
                <div className="aspect-video bg-gradient-to-br from-[#313131] to-[#52999c] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
                  </svg>
                </div>
                <p className="font-['Roboto',sans-serif] text-center text-lg text-gray-600">
                  Video production integrated seamlessly into the website
                  experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}