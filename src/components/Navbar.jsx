import { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { gsap } from "gsap";
import logo from "../assets/logo1.png";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "HSE & Safety", href: "/safety" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);
  const navRef = useRef(null);
  const mobileNavRef = useRef(null);

  // Track scroll position to reveal hairline bottom border
  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 12);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  // Entrance animation
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        y: -16,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    }, headerRef);

    return () => ctx.revert();
  }, []);

  // Mobile menu open/close animation with gsap.context for clean unmount/fast toggling
  useEffect(() => {
    if (!mobileNavRef.current) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      mobileNavRef.current.style.display = menuOpen ? "block" : "none";
      mobileNavRef.current.style.opacity = "1";
      return;
    }

    const ctx = gsap.context(() => {
      if (menuOpen) {
        gsap.set(mobileNavRef.current, { display: "block", height: 0, opacity: 0 });
        gsap.to(mobileNavRef.current, {
          height: "auto",
          opacity: 1,
          duration: 0.25,
          ease: "power2.out",
        });
      } else {
        gsap.to(mobileNavRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.2,
          ease: "power2.in",
          onComplete: () => {
            if (mobileNavRef.current) {
              gsap.set(mobileNavRef.current, { display: "none" });
            }
          },
        });
      }
    }, mobileNavRef);

    return () => ctx.revert();
  }, [menuOpen]);

  return (
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-200 ${
        scrolled
          ? "border-b border-steel-200 shadow-[0_1px_3px_0_rgba(7,20,38,0.04)]"
          : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="container-x flex h-20 items-center justify-between gap-6"
      >
        <Link
          to="/"
          aria-label="Kobbs Global home"
          className="group inline-flex shrink-0 items-center rounded-[var(--radius-card)] p-1 transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-accent"
        >
          <img
            src={logo}
            alt="Kobbs Global logo"
            className="h-10 w-auto object-contain sm:h-12"
          />
        </Link>

        {/* Desktop Navigation */}
        <div ref={navRef} className="hidden items-center gap-1 lg:flex">
          {navItems.map(({ label, href }) => (
            <NavLink
              key={label}
              to={href}
              end={href === "/"}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `rounded-[var(--radius-card)] px-3.5 py-2 text-sm font-semibold transition-colors duration-150 ${
                  isActive
                    ? "bg-steel-100 text-navy-900"
                    : "text-steel-600 hover:bg-steel-50 hover:text-navy-900"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-[var(--radius-card)] bg-accent px-5 py-2.5 text-sm font-bold text-navy-950 shadow-xs transition-colors hover:bg-accent-hover active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <span>Request a Quote</span>
            <FiArrowUpRight aria-hidden="true" className="size-4" />
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
          className="inline-flex size-10 items-center justify-center rounded-[var(--radius-card)] border border-steel-200 bg-white text-navy-900 transition-colors hover:bg-steel-50 focus-visible:outline-2 focus-visible:outline-accent lg:hidden"
        >
          {menuOpen ? <FiX className="size-5" /> : <FiMenu className="size-5" />}
        </button>
      </nav>

      {/* Mobile navigation panel */}
      <div
        ref={mobileNavRef}
        id="mobile-navigation"
        aria-hidden={!menuOpen}
        className="hidden overflow-hidden border-t border-steel-200 bg-white px-6 pb-6 pt-3 shadow-lg lg:hidden"
      >
        <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
          {navItems.map(({ label, href }) => (
            <NavLink
              key={label}
              to={href}
              end={href === "/"}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `rounded-[var(--radius-card)] px-3.5 py-2.5 text-base font-semibold transition-colors ${
                  isActive
                    ? "bg-steel-100 text-navy-900"
                    : "text-steel-600 hover:bg-steel-50 hover:text-navy-900"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-3 inline-flex items-center justify-center gap-2 rounded-[var(--radius-card)] bg-accent px-5 py-3 text-sm font-bold text-navy-950 shadow-xs transition-colors hover:bg-accent-hover active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-accent"
          >
            <span>Request a Quote</span>
            <FiArrowUpRight aria-hidden="true" className="size-4" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
