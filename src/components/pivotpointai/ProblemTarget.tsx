export default function ProblemTarget() {
  return (
    <section id="problem" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-[#fff4f2] border-2 border-[#f2e1e1] rounded-lg p-8 shadow-md">
            <h3 className="font-mono font-bold text-3xl mb-6">The Problem:</h3>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                Many mom-and-pop businesses struggle to adopt modern digital
                tools due to limited technical knowledge, time constraints, or
                perceived complexity. As a result, these businesses often fall
                behind competitors who leverage technology more effectively.
              </p>
              <p>
                The opportunity identified was to provide an accessible,
                AI-powered coaching service that simplifies technology adoption
                and decision-making for small business owners.
              </p>
            </div>
          </div>

          <div className="bg-[#edffe0] border-2 border-[#c7ff7a] rounded-lg p-8 shadow-md">
            <h3 className="font-mono font-bold text-3xl mb-6">
              Target Audience:
            </h3>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Non-tech-savvy mom-and-pop business owners.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Small teams with limited digital infrastructure.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  Business owners seeking clarity rather than complex software.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-black text-white rounded-lg p-8 shadow-xl">
          <h3 className="font-mono font-bold text-3xl mb-6">Project Goals:</h3>
          <ul className="space-y-3 text-lg">
            <li className="flex items-start">
              <span className="mr-2">-</span>
              <span>Validate whether a real market need exists.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">-</span>
              <span>Determine startup costs and feasibility.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">-</span>
              <span>Evaluate scalability of the business model.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">-</span>
              <span>
                Communicate brand, pricing, and availability through a website.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">-</span>
              <span>Enable easy customer contact &amp; leads.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}