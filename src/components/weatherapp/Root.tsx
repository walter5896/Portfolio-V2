import Navigation from "./Navigation";
import Home from "./Home";
import Overview from "./Overview";
import Process from "./Process";
import Results from "./Results";

export default function Root() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <Navigation />

      <main className="pt-16">
        <Home />
        <Overview />
        <Process />
        <Results />
      </main>
    </div>
  );
}