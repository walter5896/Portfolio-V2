import {
  Trophy,
  AlertTriangle,
  TrendingUp,
  Sparkles,
  ExternalLink,
  Github,
} from "lucide-react";

export default function Results() {
  const features = [
    "ZIP code search with local storage",
    "Live weather data via OpenWeather API",
    "Displays temperature, humidity, wind speed, and conditions",
    "Responsive layout for mobile and desktop",
    "Dynamic DOM updates without page reload",
  ];

  const challenges = [
    {
      challenge: "Handling ZIP Code Input",
      solution:
        "Added simple validation to ensure users could only enter five digits and saved valid ZIP codes in localStorage.",
    },
    {
      challenge: "Managing API Data",
      solution:
        "Used the Fetch API to retrieve weather data and dynamically update the interface with the returned information.",
    },
    {
      challenge: "Responsive Layout",
      solution:
        "Implemented CSS breakpoints to keep the layout clean and readable across different screen sizes.",
    },
  ];

  const skills = [
    "API integration and asynchronous JavaScript",
    "DOM manipulation",
    "Responsive design principles",
    "Organizing project structure",
    "Deployment workflow",
  ];

  const improvements = [
    "Add error messages for invalid ZIP codes",
    "Add a loading state while fetching data",
    "Add a 5-day weather forecast",
    "Implement automatic location detection using geolocation",
  ];

  return (
    <section id="results" className="min-h-screen px-4 sm:px-6 lg:px-8 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold leading-[1.15] pb-1 mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Features, Challenges & Results
          </h1>
          <p className="text-xl text-gray-600">
            What was accomplished and lessons learned
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                <Sparkles className="text-yellow-400" size={28} />
              </div>
              <h2 className="text-2xl font-bold text-white">Key Features</h2>
            </div>

            <ul className="space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-white leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-orange-100 rounded-xl">
                <AlertTriangle className="text-orange-600" size={28} />
              </div>
              <h2 className="text-2xl font-bold">Challenges & Solutions</h2>
            </div>

            <div className="space-y-6">
              {challenges.map((item, index) => (
                <div
                  key={item.challenge}
                  className="border-l-4 border-orange-400 pl-4"
                >
                  <h3 className="font-bold text-gray-900 mb-2">
                    Challenge {index + 1}: {item.challenge}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold italic text-orange-600">
                      Solution:
                    </span>{" "}
                    {item.solution}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-green-100 rounded-xl">
                <Trophy className="text-green-600" size={28} />
              </div>
              <h2 className="text-2xl font-bold">Results</h2>
            </div>

            <p className="font-semibold text-gray-900 mb-4 text-lg">
              This project improved my skills in:
            </p>

            <ul className="space-y-3">
              {skills.map((skill) => (
                <li key={skill} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-blue-600 rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                <TrendingUp className="text-white" size={28} />
              </div>
              <h2 className="text-2xl font-bold text-white">
                Future Improvements
              </h2>
            </div>

            <ul className="space-y-3">
              {improvements.map((improvement) => (
                <li key={improvement} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-300 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-white leading-relaxed">
                    {improvement}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 sm:p-12 shadow-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Explore the Project?
          </h2>

          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Check out the live weather application and see all these features in
            action.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://dwdd1720classproject.netlify.app/weather/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-gray-100 transition-all font-semibold shadow-lg"
            >
              <ExternalLink size={20} />
              View Live Site
            </a>

            <a
              href="https://github.com/walter5896/dwdd1720_latest/tree/master/weather"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all font-semibold"
            >
              <Github size={20} />
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}