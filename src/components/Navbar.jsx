import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import logo from "../assets/KOBBS_Global_Services_Logo-removebg-preview.png";
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

  // Animate header and nav links on mount
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, { y: -30, opacity: 0, duration: 0.6 });
      gsap.from(navRef.current.querySelectorAll("a"), {
        y: 20,
        opacity: 0,
        stagger: 0.08,
        duration: 0.5,
        ease: "power2.out",
      });
    }, [headerRef, navRef]);
    return () => ctx.revert();
  }, []);

  // Animate mobile menu opening/closing
  useEffect(() => {
    if (menuOpen) {
      gsap.fromTo(
        "#mobile-navigation",
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.4, ease: "power2.out" },
      );
    } else {
      gsap.to("#mobile-navigation", {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }, [menuOpen]);

  return (
    <header
      ref={headerRef}
      className="relative z-50 border-t-4 border-amber bg-navy text-ink shadow-lg"
    >
      <nav
        aria-label="Main navigation"
        className="container-x flex min-h-20 items-center justify-between gap-4 py-3"
      >
        <a
          href="/"
          aria-label="Kobbs Global home"
          className="inline-flex shrink-0 items-center rounded-sm  p-1.5"
        >
          <img
            src={logo}
            alt="Kobbs Global logo"
            className=""
          />
        </a>

        <div ref={navRef} className="hidden items-center gap-1 lg:flex">
          {navItems.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="rounded-sm px-3 py-2 text-sm font-medium text-ink-muted transition-colors hover:bg-white/5 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
            >
              {label}
            </a>
          ))}
        </div>

        <a
          href="/contact"
          className="hidden shrink-0 items-center gap-2 rounded-sm bg-amber px-5 py-3 text-sm font-bold text-amber-foreground transition-colors hover:bg-amber/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink lg:inline-flex"
        >
          Request a Quote{" "}
          <FiArrowUpRight aria-hidden="true" className="size-4" />
        </a>

        <button
          type="button"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
          className="inline-flex size-11 items-center justify-center rounded-sm border border-ink-line text-ink transition-colors hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber lg:hidden"
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

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-ink-line bg-navy px-5 pb-5 pt-2 lg:hidden"
        >
          <nav
            aria-label="Mobile navigation"
            className="mx-auto flex max-w-7xl flex-col"
          >
            {navItems.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-ink-line py-3 text-sm font-medium text-ink-muted transition-colors hover:text-amber focus-visible:outline-2 focus-visible:outline-amber"
              >
                {label}
              </a>
            ))}
            <a
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-sm bg-amber px-5 py-3 text-sm font-bold text-amber-foreground transition-colors hover:bg-amber/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              Request a Quote{" "}
              <FiArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
