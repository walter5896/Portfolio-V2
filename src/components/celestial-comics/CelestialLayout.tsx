import { useState } from "react";
import { Rocket, Menu, X } from "lucide-react";
import { NavLink, Link, Outlet } from "react-router-dom";

function CelestialLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { to: ".", label: "Overview", end: true },
    { to: "architecture", label: "Architecture" },
    { to: "improvements", label: "Improvements" },
    { to: "challenges", label: "Challenges" },
    { to: "tech-stack", label: "Tech Stack" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-slate-950/80 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4 min-w-0">
              <Link
                to="/projects"
                className="text-sm text-slate-400 hover:text-white transition-colors whitespace-nowrap"
              >
                ← Back to Projects
              </Link>

              <div className="flex items-center gap-3 min-w-0">
                <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
                  <Rocket className="w-6 h-6 text-white" />
                </div>

                <div className="min-w-0">
                  <h1 className="font-bold text-white text-xl truncate">
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
            </nav>

            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="md:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden pb-4">
              <div className="mt-2 space-y-2 rounded-xl border border-purple-500/20 bg-slate-900/80 p-3">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.end}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-lg transition-all ${
                        isActive
                          ? "bg-purple-500/20 text-purple-300"
                          : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="border-t border-purple-500/20 bg-slate-950/50 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-slate-400 text-sm">
            © 2026 CelestialComics Case Study. Original project built with
            HTML5, CSS3, and Vanilla JavaScript.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default CelestialLayout;