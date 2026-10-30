import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CapabilitiesSection from "./components/CapabilitiesSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import SafetySection from "./components/SafetySection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <CapabilitiesSection />
        <ServicesSection />
        <ProjectsSection />
        <WhyChooseUsSection />
        <SafetySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
