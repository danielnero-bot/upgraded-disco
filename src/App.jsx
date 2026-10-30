import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
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
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
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
      <Footer />
    </BrowserRouter>
  );
}

export default App;
