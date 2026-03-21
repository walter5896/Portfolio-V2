import desktopMockup from "../../assets/earthmark/earthmark-desktop.png";
import tabletMockup from "../../assets/earthmark/earthmark-tablet.png";
import mobileMockup from "../../assets/earthmark/earthmark-mobile.png";

export default function Hero() {
  const tags = [
    "Web Design",
    "Front-End Development",
    "Responsive Design",
    "Multimedia Integration",
    "Accessibility",
  ];

  const highlights = [
    "Fully responsive website",
    "Used SCSS to make the project more maintainable, reusable, scalable, and organized",
    "Use of art direction",
    "Multimedia storytelling with self-produced video",
    "Accessible design with custom captions and transcripts",
  ];

  return (
    <section id="hero" className="bg-[#f5f2ed] py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-block bg-[#52999c] text-white px-6 py-2 rounded-full mb-6">
          <span className="font-medium text-sm uppercase tracking-wider">
            Class Project • Web Development
          </span>
        </div>

        <h1 className="font-serif font-bold text-6xl md:text-7xl text-black mb-6">
          Earthmark Studios
        </h1>

        <p className="text-2xl md:text-3xl text-gray-700 mb-8 max-w-3xl mx-auto">
          A responsive architecture portfolio website built from scratch
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-[#52999c] text-white px-6 py-2 rounded-full font-medium text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-xl leading-relaxed text-black">
            A comprehensive web design and development project showcasing
            responsive architecture, multimedia storytelling, and accessible
            design principles. This case study demonstrates the integration of
            modern front-end technologies with thoughtful art direction and
            inclusive practices.
          </p>
        </div>

        <div className="relative">
          <div className="mb-8">
            <p className="font-medium text-lg mb-4 text-black">Desktop</p>
            <div className="shadow-2xl rounded-lg overflow-hidden">
              <img
                src={desktopMockup}
                alt="Earthmark Studios desktop mockup showing the website homepage"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="font-medium text-lg mb-4 text-black">Tablet</p>
              <div className="shadow-xl rounded-lg overflow-hidden inline-block">
                <img
                  src={tabletMockup}
                  alt="Earthmark Studios tablet mockup"
                  className="h-auto max-h-[500px]"
                />
              </div>
            </div>

            <div>
              <p className="font-medium text-lg mb-4 text-black">Mobile</p>
              <div className="shadow-xl rounded-lg overflow-hidden inline-block">
                <img
                  src={mobileMockup}
                  alt="Earthmark Studios mobile mockup"
                  className="h-auto max-h-[500px]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white border border-black shadow-lg p-8 rounded-lg text-left">
          <h2 className="font-medium text-3xl text-black mb-6 text-center">
            Key Details
          </h2>

          <div className="space-y-4">
            <div>
              <span className="font-medium text-xl text-black">Role: </span>
              <span className="text-xl text-black">Web Designer & Developer</span>
            </div>

            <div>
              <span className="font-medium text-xl text-black">
                Tools & Technologies:{" "}
              </span>
              <span className="text-xl text-black">
                VS Code, HTML5, SCSS, CSS Grid, Figma, Adobe Premiere Pro,
                Adobe Illustrator, Google Fonts
              </span>
            </div>

            <div>
              <p className="font-medium text-xl text-black mb-2">
                Project Highlights:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                {highlights.map((item) => (
                  <li key={item} className="text-xl text-black">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p className="font-light italic text-lg text-black mt-8 text-center">
          "Hero image uses art direction to highlight architectural details
          across different screen sizes."
        </p>
      </div>
    </section>
  );
}