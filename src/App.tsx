import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/layout/Navbar";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Earthmark from "./pages/case-studies/Earthmark";
import WeatherApp from "./pages/case-studies/WeatherApp";
import PivotPointAI from "./pages/case-studies/PivotPointAI";
import CelestialComics from "./pages/case-studies/CelestialComics";

import Overview from "./components/celestial-comics/Overview";
import Architecture from "./components/celestial-comics/Architecture";
import Improvements from "./components/celestial-comics/Improvements";
import Challenges from "./components/celestial-comics/Challenges";
import TechStack from "./components/celestial-comics/TechStack";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppLayout() {
  const location = useLocation();

  const hideGlobalNavbar =
    location.pathname.startsWith("/projects/celestial-comics");

  return (
    <>
      <ScrollToTop />

      {!hideGlobalNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/projects/earthmark" element={<Earthmark />} />
        <Route path="/projects/weather-app" element={<WeatherApp />} />
        <Route path="/projects/pivot-point-ai" element={<PivotPointAI />} />

        <Route path="/projects/celestial-comics" element={<CelestialComics />}>
          <Route index element={<Overview />} />
          <Route path="architecture" element={<Architecture />} />
          <Route path="improvements" element={<Improvements />} />
          <Route path="challenges" element={<Challenges />} />
          <Route path="tech-stack" element={<TechStack />} />
          <Route
            path="*"
            element={<Navigate to="/projects/celestial-comics" replace />}
          />
        </Route>
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;