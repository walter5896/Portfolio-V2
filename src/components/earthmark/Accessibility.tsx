import transcriptImage from "../../assets/earthmark/earthmark-accessibility.png";

function Accessibility() {
  return (
    <section id="accessibility" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-['Merriweather',serif] font-bold text-5xl text-black text-center mb-16">
          Accessibility & Inclusive Design
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-[#edf8ff] to-white p-10 rounded-lg shadow-lg border border-[#9ccff2]">
            <h3 className="font-['Roboto',sans-serif] font-bold text-3xl text-black mb-6">
              Accessibility Features
            </h3>

            <p className="font-['Roboto',sans-serif] text-xl leading-relaxed text-black mb-8">
              Accessibility was built into both the visual design and multimedia
              elements from the start.
            </p>

            <ul className="space-y-5">
              {[
                {
                  icon: "📝",
                  title: "Custom Subtitles",
                  desc: "Written and scripted using YouTube",
                },
                {
                  icon: "🎬",
                  title: "Caption File Embedded",
                  desc: "Using the <track> element for video",
                },
                {
                  icon: "📄",
                  title: "Expandable Transcript",
                  desc: "Using the <details> element",
                },
                {
                  icon: "🔍",
                  title: "Semantic HTML",
                  desc: "Screen reader compatibility",
                },
                {
                  icon: "🖼️",
                  title: "Alt Text",
                  desc: "For all images",
                },
              ].map((item) => (
                <li
                  key={item.title}
                  className="bg-white p-4 rounded-lg shadow-md border-l-4 border-[#52999c]"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-3xl">{item.icon}</span>
                    <div>
                      <h4 className="font-['Roboto',sans-serif] font-bold text-xl text-black">
                        {item.title}
                      </h4>
                      <p className="font-['Roboto',sans-serif] text-lg text-gray-700">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="bg-[#f7f7f7] p-10 rounded-lg shadow-lg">
              <h3 className="font-['Roboto',sans-serif] font-bold text-3xl text-black mb-6">
                Transcript Implementation
              </h3>

              <p className="font-['Roboto',sans-serif] text-xl leading-relaxed text-black mb-6">
                Every video includes a full transcript that users can expand and
                read. This ensures content is accessible to users who are deaf or
                hard of hearing, and provides SEO benefits.
              </p>

              <div className="border border-black shadow-xl rounded-lg overflow-hidden">
                <img
                  src={transcriptImage}
                  alt="Example of video transcript implementation showing expandable transcript below video player"
                  className="w-full h-auto"
                />
              </div>

              <p className="font-['Roboto',sans-serif] text-lg text-gray-600 mt-4 italic">
                Example of expandable transcript feature
              </p>
            </div>

            <div className="mt-8 bg-[#52999c] text-white p-8 rounded-lg shadow-lg">
              <h3 className="font-['Roboto',sans-serif] font-bold text-2xl mb-4">
                WCAG Compliance
              </h3>
              <p className="font-['Roboto',sans-serif] text-lg leading-relaxed">
                The site follows WCAG 2.1 Level AA guidelines, ensuring that all
                users, regardless of ability, can access and enjoy the content.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-[#313131] to-[#52999c] text-white p-10 rounded-lg shadow-xl">
          <h3 className="font-['Roboto',sans-serif] font-bold text-3xl mb-4 text-center">
            Why Accessibility Matters
          </h3>
          <p className="font-['Roboto',sans-serif] text-xl leading-relaxed text-center max-w-4xl mx-auto">
            Building accessibility from the ground up ensures that the site
            reaches the widest possible audience while demonstrating professional
            best practices. It&apos;s not just about compliance—it&apos;s about
            creating an inclusive experience that respects all users.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Accessibility;