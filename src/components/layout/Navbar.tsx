import { House, FolderKanban, UserRound, Mail } from "lucide-react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const navItems = [
    { to: "/", label: "Home", icon: House, end: true },
    { to: "/projects", label: "Projects", icon: FolderKanban },
    { to: "/about", label: "About", icon: UserRound },
    { to: "/contact", label: "Contact", icon: Mail },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-400/40 to-transparent" />

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="inline-flex items-center cursor-default select-none">
            <span className="text-white font-bold tracking-wide text-lg">
              Walter Blundell
            </span>
          </div>

          <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-2 py-1 shadow-[0_0_20px_rgba(255,255,255,0.02)]">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    `group relative transition-all ${
                      isActive ? "text-white" : "text-slate-400 hover:text-white"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span
                        className={`hidden lg:inline-flex items-center gap-2 rounded-xl px-4 py-2 font-medium transition-all duration-300 ${
                          isActive
                            ? "bg-gradient-to-r from-violet-500/25 to-cyan-500/20 border border-violet-400/25 text-white shadow-[0_0_24px_rgba(139,92,246,0.22)]"
                            : "border border-transparent hover:bg-white/5 hover:border-white/10"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        {item.label}
                      </span>

                      <span
                        className={`inline-flex lg:hidden items-center justify-center rounded-xl p-3 transition-all duration-300 ${
                          isActive
                            ? "bg-gradient-to-r from-violet-500/25 to-cyan-500/20 border border-violet-400/25 text-white shadow-[0_0_24px_rgba(139,92,246,0.22)]"
                            : "border border-transparent hover:bg-white/5 hover:border-white/10"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </span>

                      <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 rounded-lg border border-white/10 bg-slate-900 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-xl transition-all duration-200 group-hover:opacity-100 lg:hidden whitespace-nowrap">
                        {item.label}
                      </span>
                    </>
                  )}
                </NavLink>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;