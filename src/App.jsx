import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CapabilitiesSection from "./components/CapabilitiesSection";
import ServicesSection from "./components/ServicesSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import ProjectsSection from "./components/ProjectsSection";
import SafetySection from "./components/SafetySection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ProjectsPage from "./pages/ProjectsPage";
import SafetyPage from "./pages/SafetyPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

function HomePage() {
  return (
    <main>
      <HeroSection />
      <CapabilitiesSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ProjectsSection />
      <SafetySection />
      <ContactSection />
    </main>
  );
}

function RoutedApp() {
  const location = useLocation();
  const contentRef = useRef(null);

  // Page transition animation on route change
  useEffect(() => {
    window.scrollTo(0, 0);

    if (!contentRef.current) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      gsap.set(contentRef.current, { opacity: 1, y: 0 });
      return;
    }

    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
    );
  }, [location]);
  return (
    <>
      <Navbar />
      <div ref={contentRef}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/safety" element={<SafetyPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about-us" element={<Navigate to="/about" replace />} />
          <Route
            path="/core-services"
            element={<Navigate to="/services" replace />}
          />
          <Route
            path="/project-showcase"
            element={<Navigate to="/projects" replace />}
          />
          <Route
            path="/hse-and-safety"
            element={<Navigate to="/safety" replace />}
          />
          <Route
            path="/contact-and-quotes"
            element={<Navigate to="/contact" replace />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <RoutedApp />
    </BrowserRouter>
  );
}

export default App;
