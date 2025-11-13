import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Packages from "./components/Packages";
import FinancingPlans from "./components/FinancingPlans";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import Benefits from "./components/Benefits";
import Certifications from "./components/Certifications";
import Clients from "./components/Clients";
import Testimonials from "./components/Testimonials";
import Team from "./components/Team";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

const App: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      <Header />
      <main>
        <Hero />
        <Services />
        <Packages />
        <FinancingPlans />
        <Benefits />
        <HowItWorks />
        <Certifications />
        <Clients />
        <Team />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
