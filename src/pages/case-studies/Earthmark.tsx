import Navigation from "../../components/earthmark/Navigation";
import Hero from "../../components/earthmark/Hero";
import Overview from "../../components/earthmark/Overview";
import VisualIdentity from "../../components/earthmark/VisualIdentity";
import ResearchPlanning from "../../components/earthmark/ResearchPlanning";
import DesignProcess from "../../components/earthmark/DesignProcess";
import Accessibility from "../../components/earthmark/Accessibility";
import FinalOutcome from "../../components/earthmark/FinalOutcome";
import Reflection from "../../components/earthmark/Reflection";
import FutureEnhancements from "../../components/earthmark/FutureEnhancements";

function Earthmark() {
  return (
    <div className="min-h-screen bg-white">

      <Navigation />

      {/* Padding for fixed nav */}
      <div className="pt-20">

        <Hero />

        <Overview />

        <VisualIdentity />

        <ResearchPlanning />

        <DesignProcess />

        <Accessibility />

        <FinalOutcome />

        <Reflection />

        <FutureEnhancements />

      </div>

      {/* Footer */}
      <footer className="bg-[#313131] text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-['Roboto',sans-serif] text-lg">
            © {new Date().getFullYear()} Walter Blundell — Web Design, Development, & Multimedia Production
          </p>
        </div>
      </footer>

    </div>
  );
}

export default Earthmark;