import Nav from "./components/Nav";
import Hero from "./components/Hero";
import StepVideos from "./components/StepVideos";
import StepCaseStudies from "./components/StepCaseStudies";
import StepArticles from "./components/StepArticles";
import StepClients from "./components/StepClients";
import Footer from "./components/Footer";
import FabCTA from "./components/FabCTA";

export default function App() {
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
      <Footer />
      <FabCTA />
    </>
  );
}
