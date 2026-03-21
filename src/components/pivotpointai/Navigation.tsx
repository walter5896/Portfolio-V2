import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const sections = [
  { id: "hero", label: "Overview" },
  { id: "problem", label: "Problem & Target" },
  { id: "research", label: "Research" },
  { id: "business", label: "Business Model" },
  { id: "conclusion", label: "Conclusion" },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section.id);

        if (element) {
          const { offsetTop, offsetHeight } = element;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });

      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link
              to="/projects"
              className="hidden sm:inline text-sm text-gray-600 hover:text-black transition-colors whitespace-nowrap"
            >
              ← Back to Projects
            </Link>

            <button
              onClick={() => scrollToSection("hero")}
              className="text-xl font-mono font-normal text-left"
            >
              Walter Blundell
            </button>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`text-sm font-mono transition-colors hover:text-black ${
                  activeSection === section.id
                    ? "text-black font-bold"
                    : "text-gray-500"
                }`}
              >
                {section.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-2">
              <Link
                to="/projects"
                className="px-4 py-3 rounded-lg hover:bg-gray-100 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                ← Back to Projects
              </Link>

              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`text-left px-4 py-3 rounded-lg transition-colors ${
                    activeSection === section.id
                      ? "bg-black text-white font-semibold"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}