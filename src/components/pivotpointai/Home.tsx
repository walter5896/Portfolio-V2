import imgImage1 from "../../assets/pivotpointai/pivotpointai-hero-desktop.png";

export default function Home() {
  return (
    <section
      id="hero"
      className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-6 overflow-hidden min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="bg-[#f9f9f9] shadow-lg p-8 rounded-lg">
            <p className="mb-6">
              <span className="font-mono font-bold text-3xl">
                Title Section:
              </span>
              <span className="font-semibold text-3xl">
                {" "}PivotPoint AI Coaching
              </span>
            </p>

            <div className="space-y-4 text-2xl">
              <p>
                <span className="font-mono font-medium">Course:</span>
                <span> ENTR 3170 — Feasibility Analysis</span>
              </p>

              <p>
                <span className="font-mono font-medium">Role:</span>
                <span> Research, Design, Development</span>
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-black">
            <h3 className="font-mono font-bold text-2xl mb-4">
              Introduction:
            </h3>

            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                ENTR 3170 is an upper-division entrepreneurship course focused
                on trying to figure out whether an idea is worth spending the
                time and money. The course emphasizes project-based learning,
                applying the scientific method, and design thinking to test
                assumptions through both primary and secondary research.
              </p>

              <p>
                This case study explores the feasibility of PivotPoint AI
                Coaching, a conceptual service designed to support mom-and-pop
                businesses learn and use AI effectively to help expand their
                business.
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="shadow-2xl rounded-lg overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-300">
            <img
              src={imgImage1}
              alt="PivotPoint AI Coaching website desktop screenshot"
              className="w-full h-auto"
            />
          </div>

          <p className="text-center mt-6 font-mono text-lg text-gray-600">
            Full-Size Desktop Screenshot
          </p>
        </div>
      </div>
    </section>
  );
}