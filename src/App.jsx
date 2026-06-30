import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import StepVideos from "./components/StepVideos";
import StepCaseStudies from "./components/StepCaseStudies";
import StepArticles from "./components/StepArticles";
import StepClients from "./components/StepClients";
import Footer from "./components/Footer";
import FabCTA from "./components/FabCTA";
import LegalModal from "./components/LegalModal";

export default function App() {
  const [legalOpen, setLegalOpen] = useState(
    () => typeof window !== "undefined" && window.location.hash === "#legal",
  );

  useEffect(() => {
    const onHash = () => setLegalOpen(window.location.hash === "#legal");
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const openLegal = () => {
    window.history.pushState(null, "", "#legal");
    setLegalOpen(true);
  };

  const closeLegal = () => {
    if (window.location.hash === "#legal") {
      window.history.pushState(null, "", window.location.pathname);
    }
    setLegalOpen(false);
  };

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StepVideos />
        <StepCaseStudies />
        <StepArticles />
        <StepClients />
      </main>
      <Footer onOpenLegal={openLegal} />
      <FabCTA />
      {legalOpen && <LegalModal onClose={closeLegal} />}
    </>
  );
}
