import { Lightbulb, Palette, Code2, Rocket, ArrowDown } from "lucide-react";
import fetchLogicImage from "../../assets/weatherapp/weatherapp-fetch-logic.png";
import persistenceLogicImage from "../../assets/weatherapp/weatherapp-persistence-logic.png";
import domLogicImage from "../../assets/weatherapp/weatherapp-dom-logic.png";

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Planning",
      icon: Lightbulb,
      color: "from-blue-400 to-blue-600",
      bgColor: "from-blue-100 to-blue-200",
      description: [
        "Define core functionality: ZIP code input → API fetch → display results.",
        "Create a simple layout: header, weather card, input panel.",
        "Plan responsive layout using multiple CSS breakpoints.",
      ],
      codeSection: null,
      codeTitle: null,
      codeDescription: null,
    },
    {
      number: "02",
      title: "Design",
      icon: Palette,
      color: "from-green-400 to-green-600",
      bgColor: "from-green-100 to-green-200",
      description: [
        "Minimal UI focused on readability.",
        "Clean typography and spacing.",
        "Large temperature display and clear weather icon.",
      ],
      codeSection: null,
      codeTitle: null,
      codeDescription: null,
    },
    {
      number: "03",
      title: "Development",
      icon: Code2,
      color: "from-orange-400 to-orange-600",
      bgColor: "from-orange-100 to-orange-200",
      description: [
        "Build layout using HTML and CSS.",
        "Use JavaScript to:",
        "  • Fetch data from OpenWeatherMap API",
        "  • Parse JSON response",
        "  • Update DOM with weather results",
        "  • Store ZIP code in localStorage",
      ],
      codeSection: [fetchLogicImage, persistenceLogicImage, domLogicImage],
      codeTitle: [
        'The "Data Fetching" Logic',
        'The "User Persistence" Logic',
        'The "DOM Manipulation" Section',
      ],
      codeDescription: [
        "I used the Fetch API to pull in real-time weather data and then passed the JSON response to a function that dynamically updates the page with the latest information.",
        "I used localStorage to save the user's location preferences so their settings would still be there the next time they opened the browser.",
        "I dynamically updated the DOM by creating and inserting weather components based on the live data returned from the API.",
      ],
    },
    {
      number: "04",
      title: "Deployment",
      icon: Rocket,
      color: "from-purple-400 to-purple-600",
      bgColor: "from-purple-100 to-purple-200",
      description: [
        "Tested multiple ZIP codes for accuracy",
        "Fixed layout issues on smaller mobile screens",
        "Deployed on Netlify for public access and portfolio use",
      ],
      codeSection: null,
      codeTitle: null,
      codeDescription: null,
    },
  ];

  return (
    <section id="process" className="min-h-screen px-4 sm:px-6 lg:px-8 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Design & Development Process
          </h1>
          <p className="text-xl text-gray-600">From concept to deployment</p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-green-200 via-orange-200 to-purple-200 hidden lg:block" />

          {steps.map((step, index) => (
            <div key={index}>
              <div className="relative mb-12 lg:mb-16">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                  <div className="lg:col-span-5">
                    <div
                      className={`relative bg-gradient-to-br ${step.bgColor} rounded-3xl p-6 sm:p-8 shadow-xl`}
                    >
                      <div className="absolute top-6 left-6">
                        <div
                          className={`bg-gradient-to-br ${step.color} text-white font-bold text-2xl w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg`}
                        >
                          {step.number}
                        </div>
                      </div>

                      <div className="flex items-center gap-3 mb-6 mt-20">
                        <step.icon className="text-gray-800" size={32} />
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                          {step.title}
                        </h2>
                      </div>

                      <ul className="space-y-2">
                        {step.description.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-gray-800"
                          >
                            {!item.startsWith("  •") && (
                              <div className="w-1.5 h-1.5 bg-gray-800 rounded-full mt-2 flex-shrink-0" />
                            )}
                            <span className={item.startsWith("  •") ? "ml-6" : ""}>
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {step.codeSection && (
                    <div className="lg:col-span-7 mt-6 lg:mt-0 space-y-6">
                      {step.codeSection.map((img, idx) => (
                        <div
                          key={idx}
                          className="bg-white rounded-2xl p-6 shadow-xl"
                        >
                          <h3 className="font-bold text-lg mb-2 text-gray-900">
                            {step.codeTitle?.[idx]}
                          </h3>
                          <p className="text-sm text-gray-600 mb-4">
                            {step.codeDescription?.[idx]}
                          </p>
                          <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
                            <img
                              src={img}
                              alt={step.codeTitle?.[idx] || "Code example"}
                              className="w-full"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="flex justify-center mb-8 lg:mb-12">
                  <ArrowDown className="text-gray-400" size={32} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}