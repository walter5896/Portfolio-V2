import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const sections = [
    { id: "hero", label: "Overview" },
    { id: "problem-goals", label: "Problem & Goals" },
    { id: "visual-identity", label: "Visual Identity" },
    { id: "research", label: "Research" },
    { id: "process", label: "Process" },
    { id: "accessibility", label: "Accessibility" },
    { id: "outcome", label: "Outcome" },
    { id: "reflection", label: "Reflection" },
    { id: "future", label: "Future" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section.id);

        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

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

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      const offset = 80;

      const y =
        element.getBoundingClientRect().top +
        window.pageYOffset -
        offset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg border-b border-gray-200"
          : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between py-4">

          {/* LEFT SIDE */}
          <div className="flex items-center gap-6">

            {/* Back Button */}
            <Link
              to="/projects"
              className="text-sm text-gray-600 hover:text-[#52999c] transition-colors whitespace-nowrap"
            >
              ← Back to Projects
            </Link>

            {/* Logo */}
            <button
              onClick={() => scrollToSection("hero")}
              className="font-['Merriweather',serif] font-bold text-xl md:text-2xl text-black hover:text-[#52999c] transition-colors"
            >
              Earthmark Studios
            </button>

          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`font-['Roboto',sans-serif] px-4 py-2 rounded-full transition-all ${
                  activeSection === section.id
                    ? "bg-[#52999c] text-white font-medium"
                    : "text-gray-700 hover:bg-gray-100 hover:text-[#52999c]"
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu */}
          <MobileMenu
            sections={sections}
            scrollToSection={scrollToSection}
            activeSection={activeSection}
          />

        </div>
      </div>
    </nav>
  );
}

function MobileMenu({
  sections,
  scrollToSection,
  activeSection,
}: any) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (id: string) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-black hover:text-[#52999c]"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-b border-gray-200">
          <div className="px-6 py-4 space-y-2">
            {sections.map((section: any) => (
              <button
                key={section.id}
                onClick={() => handleClick(section.id)}
                className={`w-full text-left font-['Roboto',sans-serif] px-4 py-3 rounded-lg transition-all ${
                  activeSection === section.id
                    ? "bg-[#52999c] text-white font-medium"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}