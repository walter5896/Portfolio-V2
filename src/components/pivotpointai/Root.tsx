import Navigation from "./Navigation";
import Home from "./Home";
import ProblemTarget from "./ProblemTarget";
import Research from "./Research";
import BusinessModel from "./BusinessModel";
import Conclusion from "./Conclusion";

export default function Root() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-20">
        <Home />
        <ProblemTarget />
        <Research />
        <BusinessModel />
        <Conclusion />
      </main>
    </div>
  );
}