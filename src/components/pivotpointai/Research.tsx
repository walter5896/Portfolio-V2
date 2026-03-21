import imgImage4 from "../../assets/pivotpointai/pivotpointai-lead-form.png";
import imgImage5 from "../../assets/pivotpointai/pivotpointai-survey-results.png";

export default function Research() {
  return (
    <section id="research" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-mono font-bold text-center mb-16">
          Research & Validation
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="font-mono font-medium text-3xl mb-6">
              Primary Research:
            </h3>
            <p className="text-lg leading-relaxed mb-8">
              Interviews and surveys with small business owners revealed strong
              interest in AI coaching when framed as personalized, human-guided
              support rather than software adoption.
            </p>

            <h3 className="font-mono font-medium text-3xl mb-6">
              Secondary Research:
            </h3>
            <p className="text-lg leading-relaxed mb-8">
              Industry data supports growing demand for AI enablement among
              small businesses, particularly those seeking affordable, low-risk
              entry points.
            </p>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 shadow-md">
              <h4 className="font-mono font-medium text-2xl mb-4">
                Key Validation Results:
              </h4>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>80% would pay for monthly AI coaching</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>60% preferred pricing between $150–250</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Average satisfaction after pilot session: 8.6/10</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <img
                src={imgImage4}
                alt="PivotPoint AI lead form or validation visual"
                className="w-full h-auto"
              />
            </div>

            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <h4 className="font-mono font-medium text-2xl p-6 bg-gray-100 border-b">
                Survey Results:
              </h4>
              <img
                src={imgImage5}
                alt="PivotPoint AI survey results"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}