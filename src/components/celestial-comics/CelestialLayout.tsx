import { FileDown, Rocket } from "lucide-react";
import { NavLink, Link, Outlet } from "react-router-dom";

function CelestialLayout() {
  const navItems = [
    { to: "/projects/celestial-comics", label: "Overview", end: true },
    { to: "/projects/celestial-comics/architecture", label: "Architecture" },
    { to: "/projects/celestial-comics/improvements", label: "Improvements" },
    { to: "/projects/celestial-comics/challenges", label: "Challenges" },
    { to: "/projects/celestial-comics/tech-stack", label: "Tech Stack" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-slate-950/80 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <Link
                to="/projects"
                className="text-sm text-slate-400 hover:text-white transition-colors whitespace-nowrap"
              >
                ← Back to Projects
              </Link>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
                  <Rocket className="w-6 h-6 text-white" />
                </div>

                <div>
                  <h1 className="font-bold text-white text-xl">
                    CelestialComics
                  </h1>
                  <p className="text-purple-300 text-xs">Case Study</p>
                </div>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg transition-all ${
                      isActive
                        ? "bg-purple-500/20 text-purple-300"
                        : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              <button className="ml-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg flex items-center gap-2">
                <FileDown className="w-4 h-4" />
                Export PDF
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="border-t border-purple-500/20 bg-slate-950/50 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-slate-400 text-sm">
            © 2026 CelestialComics Case Study. Original project built with HTML5, CSS3, and Vanilla JavaScript.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default CelestialLayout;