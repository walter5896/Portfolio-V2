import { AlertCircle, Target, Users, CheckCircle } from "lucide-react";
import problemImage from "../../assets/weatherapp/weatherapp-problem.png";
import objectivesImage from "../../assets/weatherapp/weatherapp-objectives.png";

export default function Overview() {
  const objectives = [
    "Build a functional app using vanilla JavaScript",
    "Integrate a live weather API",
    "Store user ZIP code using localStorage",
    "Dynamically update content without page navigation",
    "Deploy the project professionally online",
  ];

  const targetUsers = [
    "Users who want quick weather access",
    "Mobile-first users",
    "Individuals who prefer clean, minimal interfaces",
    "Users that don't want to deal with ads",
    "Users that don't want to spend any money",
  ];

  return (
    <section id="overview" className="min-h-screen px-4 sm:px-6 lg:px-8 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Project Overview
          </h1>
          <p className="text-xl text-gray-600">
            Understanding the problem and setting objectives
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-white rounded-xl shadow-md">
                <AlertCircle className="text-blue-600" size={28} />
              </div>
              <h2 className="text-2xl font-bold">Problem Statement</h2>
            </div>

            <div className="mb-6 flex justify-center">
              <img
                src={problemImage}
                alt="Weather app problem statement visual"
                className="w-32 h-32 object-cover rounded-2xl shadow-lg"
              />
            </div>

            <p className="text-gray-800 leading-relaxed text-lg mb-4">
              Many existing weather applications overload users with excessive data and complex interfaces.
            </p>

            <p className="text-gray-800 leading-relaxed text-lg">
              This project aimed to create a simple, fast, and readable weather application that focuses only
              on essential weather information.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl shadow-md">
                <Target className="text-orange-600" size={28} />
              </div>
              <h2 className="text-2xl font-bold">Personal Objectives</h2>
            </div>

            <div className="mb-6 flex justify-center">
              <img
                src={objectivesImage}
                alt="Weather app objectives visual"
                className="w-32 h-32 object-cover rounded-2xl shadow-lg"
              />
            </div>

            <ul className="space-y-3">
              {objectives.map((objective) => (
                <li key={objective} className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 leading-relaxed">{objective}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
              <Users className="text-white" size={32} />
            </div>
            <h2 className="text-3xl font-bold text-white">Target Users</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {targetUsers.map((user) => (
              <div
                key={user}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-white leading-relaxed">{user}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}