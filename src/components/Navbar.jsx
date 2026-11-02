import { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { gsap } from "gsap";
import logo from "../assets/logo1.png";
import { FiArrowUpRight } from "react-icons/fi";

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

  // Animate header and nav links on mount
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

      gsap.from(headerRef.current, { y: -30, opacity: 0, duration: 0.6 });
      gsap.from(navRef.current?.querySelectorAll("a"), {
        y: 20,
        opacity: 0,
        stagger: 0.08,
        duration: 0.5,
        ease: "power2.out",
      });
    }, [headerRef, navRef]);
    return () => ctx.revert();
  }, []);

  // Animate mobile menu opening/closing without unmounting during the transition.
  useEffect(() => {
    if (!mobileNavRef.current) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      gsap.set(mobileNavRef.current, {
        display: menuOpen ? "block" : "none",
        height: "auto",
        opacity: 1,
      });
      return;
    }

    if (menuOpen) {
      gsap.set(mobileNavRef.current, {
        display: "block",
        height: 0,
        opacity: 0,
      });
      gsap.to(mobileNavRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.35,
        ease: "power2.out",
      });
      return;
    }

    gsap.to(mobileNavRef.current, {
      height: 0,
      opacity: 0,
      duration: 0.25,
      ease: "power2.in",
      onComplete: () => {
        gsap.set(mobileNavRef.current, { display: "none" });
      },
    });
  }, [menuOpen]);

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-0 z-50 border-b border-border bg-white text-navy shadow-sm"
    >
      <nav
        aria-label="Main navigation"
        className="container-x flex min-h-20 items-center justify-between gap-4 py-2"
      >
        <Link
          to="/"
          aria-label="Kobbs Global home"
          className="inline-flex shrink-0 items-center rounded-sm p-1"
        >
          <img
            src={logo}
            alt="Kobbs Global logo"
            className="h-12 w-auto max-w-[11rem] object-contain sm:h-14 sm:max-w-none"
          />
        </Link>

        <div ref={navRef} className="hidden items-center gap-1 lg:flex">
          {navItems.map(({ label, href }) => (
            <NavLink
              key={label}
              to={href}
              end={href === "/"}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `rounded-sm border-b-2 border-transparent px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber ${
                  isActive
                    ? "border-b-2 border-amber text-navy"
                    : "text-slate hover:text-navy"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        <Link
          to="/contact"
          className="hidden shrink-0 items-center gap-2 border border-amber bg-white px-5 py-3 text-sm font-bold text-navy transition-colors hover:bg-amber focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber lg:inline-flex"
        >
          Request a Quote{" "}
          <FiArrowUpRight aria-hidden="true" className="size-4" />
        </Link>

        <button
          type="button"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
          className="inline-flex size-11 items-center justify-center rounded-sm border border-border text-navy transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber lg:hidden"
        >
          {menuOpen ? (
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="size-5"
            >
              <path
                d="m6 6 12 12M18 6 6 18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="size-5"
            >
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </nav>

      <div
        ref={mobileNavRef}
        id="mobile-navigation"
        aria-hidden={!menuOpen}
        className="hidden overflow-hidden border-t border-border bg-white px-5 pb-5 pt-2 lg:hidden"
      >
        <nav
          aria-label="Mobile navigation"
          className="mx-auto flex max-w-7xl flex-col"
        >
          {navItems.map(({ label, href }) => (
            <NavLink
              key={label}
              to={href}
              end={href === "/"}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `border-b border-border py-3 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-amber ${
                  isActive ? "text-amber-foreground" : "text-navy hover:text-amber-foreground"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 inline-flex items-center justify-center gap-2 border border-amber bg-white px-5 py-3 text-sm font-bold text-navy transition-colors hover:bg-amber focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
          >
            Request a Quote{" "}
            <FiArrowUpRight aria-hidden="true" className="size-4" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
