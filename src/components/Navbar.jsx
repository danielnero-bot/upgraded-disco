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
  const headerRef = useRef(null);
  const navRef = useRef(null);
  const mobileNavRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set(headerRef.current, { y: 0, opacity: 1 });
        gsap.set(navRef.current?.querySelectorAll("a"), { y: 0, opacity: 1 });
        return;
      }

      gsap.from(headerRef.current, { y: -20, opacity: 0, duration: 0.5, ease: "power2.out" });
      gsap.from(navRef.current?.querySelectorAll("a"), {
        y: 10,
        opacity: 0,
        stagger: 0.05,
        duration: 0.4,
        ease: "power2.out",
      });
    }, [headerRef, navRef]);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!mobileNavRef.current) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      gsap.set(mobileNavRef.current, {
        display: menuOpen ? "block" : "none",
        opacity: 1,
      });
      return;
    }

    if (menuOpen) {
      gsap.set(mobileNavRef.current, { display: "block", height: 0, opacity: 0 });
      gsap.to(mobileNavRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      gsap.to(mobileNavRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(mobileNavRef.current, { display: "none" });
        },
      });
    }
  }, [menuOpen]);

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-md transition-all duration-200"
    >
      <nav
        aria-label="Main navigation"
        className="container-x flex h-20 items-center justify-between gap-6"
      >
        <Link
          to="/"
          aria-label="Kobbs Global home"
          className="group inline-flex shrink-0 items-center rounded-lg p-1 transition-opacity hover:opacity-90"
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
                `rounded-md px-3.5 py-2 text-sm font-medium transition-all duration-150 ${
                  isActive
                    ? "bg-blue-50 text-blue-600 font-semibold"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
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
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
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
          className="inline-flex size-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition-colors hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-blue-600 lg:hidden"
        >
          {menuOpen ? <FiX className="size-5" /> : <FiMenu className="size-5" />}
        </button>
      </nav>

      {/* Mobile navigation panel */}
      <div
        ref={mobileNavRef}
        id="mobile-navigation"
        aria-hidden={!menuOpen}
        className="hidden overflow-hidden border-t border-slate-100 bg-white px-6 pb-6 pt-3 shadow-lg lg:hidden"
      >
        <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
          {navItems.map(({ label, href }) => (
            <NavLink
              key={label}
              to={href}
              end={href === "/"}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `rounded-lg px-3.5 py-2.5 text-base font-medium transition-colors ${
                  isActive
                    ? "bg-blue-50 text-blue-600 font-semibold"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-3 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 active:scale-[0.98]"
          >
            Request a Quote <FiArrowUpRight aria-hidden="true" className="size-4" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
