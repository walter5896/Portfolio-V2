import { ExternalLink, Code, Cloud } from "lucide-react";
import imgImage1 from "../../assets/weatherapp/weatherapp-hero.png";

export default function Home() {
  return (
    <section id="home" className="min-h-screen px-4 sm:px-6 lg:px-8 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
            Weather App
          </h1>

          <p className="text-2xl sm:text-3xl text-gray-600 mb-4">
            Case Study
          </p>

          <p className="text-xl text-gray-500">
            by Walter Blundell
          </p>
        </div>

        <div className="mb-16 relative group">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10" />
            <img
              src={imgImage1}
              alt="Weather App Interface"
              className="relative rounded-2xl shadow-2xl w-full"
            />
          </div>

          <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg font-semibold">
            Live Project
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Cloud className="text-blue-600" size={24} />
              </div>
              <h3 className="font-bold text-lg">Purpose</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To create a responsive weather app that fetches live data using
              OpenWeatherMap API.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-100 rounded-lg">
                <Code className="text-green-600" size={24} />
              </div>
              <h3 className="font-bold text-lg">Project Type</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Academic Solo Front-End Project
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-100 rounded-lg">
                <svg
                  className="text-purple-600"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <h3 className="font-bold text-lg">Role</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Designer &amp; Developer
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-orange-100 rounded-lg">
                <svg
                  className="text-orange-600"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg">Tools Used</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "OpenWeatherMap API",
                "Netlify",
              ].map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 bg-gradient-to-r from-orange-50 to-red-50 text-orange-700 rounded-full text-sm font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-white/20 rounded-lg">
                <ExternalLink className="text-white" size={24} />
              </div>
              <h3 className="font-bold text-lg text-white">Project Link</h3>
            </div>

            <a
              href="https://dwdd1720classproject.netlify.app/weather/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              View Live Site
              <ExternalLink size={16} />
            </a>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            Short Summary
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            A simple and user-friendly weather app that lets users enter a ZIP
            code to view current weather information, including temperature,
            humidity, wind speed, and weather conditions. The app stores the
            user&apos;s ZIP code locally and loads the weather automatically on
            page load.
          </p>
        </div>
      </div>
    </section>
  );
}