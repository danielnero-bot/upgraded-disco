import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useEffect, useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "./animations";
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

  useEffect(() => {
    let active = true;
    let refreshFrame = null;

    function scheduleRefresh() {
      if (!active) return;
      if (refreshFrame !== null) {
        window.cancelAnimationFrame(refreshFrame);
      }
      refreshFrame = window.requestAnimationFrame(() => {
        refreshFrame = null;
        ScrollTrigger.refresh();
      });
    }

    const observer = new MutationObserver(scheduleRefresh);
    if (contentRef.current) {
      observer.observe(contentRef.current, { childList: true, subtree: true });
    }

    window.addEventListener("load", scheduleRefresh);
    document.addEventListener("load", scheduleRefresh, true);
    if (document.readyState === "complete") scheduleRefresh();
    if (document.fonts?.ready) {
      document.fonts.ready.then(scheduleRefresh);
    }

    return () => {
      active = false;
      observer.disconnect();
      window.removeEventListener("load", scheduleRefresh);
      document.removeEventListener("load", scheduleRefresh, true);
      if (refreshFrame !== null) {
        window.cancelAnimationFrame(refreshFrame);
      }
    };
  }, []);

  useLayoutEffect(() => {
    const root = document.documentElement;
    const previousScrollBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    root.style.scrollBehavior = previousScrollBehavior;

    const refreshFrame = window.requestAnimationFrame(() =>
      ScrollTrigger.refresh(),
    );
    return () => window.cancelAnimationFrame(refreshFrame);
  }, [location.key]);
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
