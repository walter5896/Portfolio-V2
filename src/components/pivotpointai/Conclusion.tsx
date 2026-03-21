import imgImage9 from "../../assets/pivotpointai/pivotpointai-live-site-qr.png";
import starIcon from "../../assets/pivotpointai/pivotpointai-star.svg";

export default function Conclusion() {
  return (
    <>
      <section
        id="conclusion"
        className="py-20 px-6 bg-gradient-to-br from-gray-50 to-gray-100"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-mono font-bold text-center mb-16">
            Conclusion & Final Reflection
          </h2>

          <div className="bg-[#f8f8f8] border-2 border-[#f2e1e1] rounded-lg p-8 shadow-lg mb-8 relative">
            <img
              src={starIcon}
              alt=""
              aria-hidden="true"
              className="absolute -top-6 right-8 w-14 h-14"
            />

            <h3 className="font-bold text-3xl mb-4">
              The Verdict: Feasibility Confirmed
            </h3>

            <p className="text-lg leading-relaxed">
              <span className="font-semibold">
                PivotPoint AI Coaching is a viable, scalable venture
              </span>
              . With low overhead ($500/mo fixed costs) and high demand (80%
              positive interest), the model is both sustainable and fiscally
              responsible. The MVP confirms that modern web infrastructure can
              support a professional-grade solution without high technical
              overhead.
            </p>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-lg p-8 shadow-lg mb-8">
            <h3 className="font-bold text-3xl mb-4">
              <span>The Future of PivotPoint — </span>
              <span className="italic font-medium">
                If the project were to move into a full launch phase, the next
                steps would include:
              </span>
            </h3>

            <ul className="space-y-3 text-lg">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  Expanded Pilot: Running a 3-month trial with 5 local
                  businesses in Utah County.
                </span>
              </li>

              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  Advanced Curriculum: Developing “Phase 2” modules for
                  advanced AI tools like custom GPTs and automated CRM
                  workflows.
                </span>
              </li>

              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  Student Pipeline: Formalizing partnerships with UVU and BYU
                  to create a consistent stream of qualified coaches.
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-[#fff4f2] border-2 border-[#f2e1e1] rounded-lg p-8 shadow-lg mb-12">
            <h3 className="font-semibold text-3xl mb-4">
              Personal Reflection:
            </h3>

            <p className="text-lg leading-relaxed">
              This project proved the power of digital development: manifesting
              a “random idea” into a functional reality without wasting
              resources. It allowed for total creative expression while
              remaining grounded in{" "}
              <span className="font-semibold">cold, hard business logic.</span>{" "}
              Bridging the gap between entrepreneurship and tech widened my
              understanding of team collaboration and how to truly target a
              specific audience need.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-block bg-white rounded-lg shadow-xl p-6">
              <img
                src={imgImage9}
                alt="PivotPoint AI Coaching QR code"
                className="w-64 h-auto mx-auto mb-4"
              />

              <p className="font-mono text-lg">Scan Me</p>

              <a
                href="https://pivotpointaicoaching.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 italic underline block mt-2 break-all"
              >
                https://pivotpointaicoaching.netlify.app/
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg">
            PivotPoint AI Coaching - ENTR 3170 Case Study
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Walter Blundell • 2026
          </p>
        </div>
      </footer>
    </>
  );
}