import imgImage6 from "../../assets/pivotpointai/pivotpointai-business-model-canvas.png";
import imgImage7 from "../../assets/pivotpointai/pivotpointai-mobile-screenshot.png";
import imgImage8 from "../../assets/pivotpointai/pivotpointai-tablet-screenshot.png";

export default function BusinessModel() {
  return (
    <section id="business" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-mono font-bold text-center mb-4">
          Business Model, Risk, Strategy, & Tech
        </h2>

        <div className="bg-[#f2f2f2] rounded-lg shadow-lg overflow-hidden mb-12">
          <img
            src={imgImage6}
            alt="PivotPoint AI business model overview"
            className="w-full h-auto"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="bg-[#edffe0] border-2 border-[#c7ff7a] rounded-lg p-8 shadow-md">
            <h3 className="font-mono font-bold text-3xl mb-6">
              Technical Feasibility:
            </h3>

            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                <span className="font-semibold">Development Stack:</span> The MVP
                was custom-built using HTML, SCSS, and vanilla JavaScript to
                ensure high performance and full design control.
              </p>

              <p>
                <span className="font-semibold">Infrastructure:</span> Deployment
                through Netlify allows for near-zero hosting costs during the
                pilot phase, directly supporting the low-overhead business model.
              </p>

              <p>
                <span className="font-semibold">Responsiveness:</span> The site is
                fully optimized for desktop, tablet, and mobile, ensuring
                business owners can access coaching resources on the go.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <p className="font-mono font-bold text-xl text-center bg-gray-100 p-4 rounded-lg">
              These are full-size screenshots of how the site displays on both
              mobile phones and tablets, emphasizing responsiveness across all
              devices.
            </p>

            <div className="flex justify-center items-end gap-8 flex-wrap">
              <div className="shadow-xl rounded-lg overflow-hidden transform hover:scale-105 transition-transform">
                <img
                  src={imgImage7}
                  alt="PivotPoint AI mobile screenshot"
                  className="h-96 w-auto object-contain"
                />
              </div>

              <div className="shadow-xl rounded-lg overflow-hidden transform hover:scale-105 transition-transform">
                <img
                  src={imgImage8}
                  alt="PivotPoint AI tablet screenshot"
                  className="h-64 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}