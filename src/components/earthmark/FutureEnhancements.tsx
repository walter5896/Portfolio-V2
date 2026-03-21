export default function FutureEnhancements() {
  const enhancements = [
    {
      title: "Multi-Page Architecture Portfolio",
      description:
        "Expand the single-page site into a more complete portfolio with individual project pages, case studies, and a dynamic filtering system for browsing work.",
      icon: "🏗️",
      priority: "High",
      color: "bg-[#52999c]",
    },
    {
      title: "Motion & Interaction Design",
      description:
        "Introduce subtle animations using CSS transitions and JavaScript to enhance engagement. Scroll-triggered reveals could help guide attention through the content.",
      icon: "✨",
      priority: "Medium",
      color: "bg-[#9ccff2]",
    },
    {
      title: "Performance Optimization",
      description:
        "Run deeper Lighthouse audits, lazy-load imagery, optimize video delivery, and reduce CSS or JavaScript overhead for a faster overall experience.",
      icon: "⚡",
      priority: "High",
      color: "bg-[#52999c]",
    },
    {
      title: "CMS Integration",
      description:
        "Integrate a headless CMS such as Contentful or Sanity so the site can scale and content can be updated without editing code directly.",
      icon: "📊",
      priority: "Medium",
      color: "bg-[#9ccff2]",
    },
    {
      title: "Advanced Analytics",
      description:
        "Add analytics to understand user behavior, most-viewed content, and engagement patterns, then use that data to refine the experience.",
      icon: "📈",
      priority: "Low",
      color: "bg-[#313131]",
    },
    {
      title: "Interactive 3D Models",
      description:
        "Explore integrating 3D architectural models using tools like Three.js so visitors could interact with projects in a more immersive way.",
      icon: "🎨",
      priority: "Low",
      color: "bg-[#313131]",
    },
  ];

  const roadmap = [
    {
      phase: "Phase 1",
      timeframe: "Next Iteration",
      items: ["Multi-page expansion", "Performance optimization"],
    },
    {
      phase: "Phase 2",
      timeframe: "Later Enhancement",
      items: ["Motion design", "Analytics"],
    },
    {
      phase: "Phase 3",
      timeframe: "Long-Term Expansion",
      items: ["CMS integration", "3D model exploration"],
    },
  ];

  return (
    <section id="future" className="py-20 px-6 bg-gradient-to-b from-[#f7f7f7] to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-bold text-5xl text-black text-center mb-6">
          If I Had More Time...
        </h2>

        <p className="text-xl text-center text-gray-700 max-w-3xl mx-auto mb-16">
          Ideas for how I would expand this project beyond the class requirements.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {enhancements.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className={`${item.color} text-white p-6`}>
                <div className="flex items-center gap-4">
                  <span className="text-5xl">{item.icon}</span>
                  <div>
                    <h3 className="font-bold text-2xl">{item.title}</h3>
                    <span className="text-sm opacity-90">Priority: {item.priority}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-lg leading-relaxed text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#52999c] to-[#9ccff2] text-white p-12 rounded-lg shadow-xl text-center">
          <h3 className="font-bold text-3xl mb-4">Continuous Improvement</h3>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto">
            This project represents a strong foundation built on responsive design,
            accessibility, and visual storytelling. With more time, it could evolve into
            a much broader digital portfolio experience while preserving the same design principles.
          </p>
        </div>

        <div className="mt-16 bg-white p-10 rounded-lg shadow-lg border border-gray-200">
          <h3 className="font-bold text-2xl text-black mb-8 text-center">
            Development Roadmap
          </h3>

          <div className="space-y-6">
            {roadmap.map((phase, index) => (
              <div key={phase.phase} className="flex items-start gap-4">
                <div className="bg-[#52999c] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">
                  {index + 1}
                </div>

                <div className="flex-1">
                  <h4 className="font-bold text-xl text-black mb-1">
                    {phase.phase}
                  </h4>
                  <p className="text-sm text-gray-500 mb-2">{phase.timeframe}</p>

                  <ul className="space-y-1">
                    {phase.items.map((item) => (
                      <li key={item} className="text-lg text-gray-700">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}