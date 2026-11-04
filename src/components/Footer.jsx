import { Link } from "react-router-dom";
import logo from "../assets/logo1.png";
import { FiArrowUpRight } from "react-icons/fi";

const footerGroups = [
  {
    title: "Services",
    links: [
      ["Heavy Haulage", "/services"],
      ["Engineered Heavy Lift", "/services"],
      ["Rig Move Logistics", "/services"],
      ["Equipment Leasing", "/services"],
    ],
  },
  {
    title: "Capabilities",
    links: [
      ["Fleet Support", "/about"],
      ["Route Surveys", "/about"],
      ["Quayside Logistics", "/about"],
      ["Niger Delta Operations", "/projects"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About Kobbs Global", "/about"],
      ["Project Experience", "/projects"],
      ["HSE Management", "/safety"],
      ["Contact & Quotes", "/contact"],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-navy-900 bg-navy-950 text-steel-200">
      <div className="container-x py-14 sm:py-16">
        <div className="grid gap-10 pb-12 md:grid-cols-2 xl:grid-cols-5 border-b border-navy-900">
          <div className="space-y-5 xl:col-span-2">
            <Link
              to="/"
              aria-label="Kobbs Global home"
              className="inline-flex rounded-[var(--radius-card)] bg-white/95 p-1.5 transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-accent"
            >
              <img
                src={logo}
                alt="Kobbs Global Services logo"
                className="h-10 w-auto object-contain sm:h-12"
              />
            </Link>
            <p className="max-w-md text-sm leading-relaxed text-steel-400">
              Reliable Nigerian industrial haulage, heavy-lift logistics, rig relocation operations, and oilfield equipment leasing from Port Harcourt.
            </p>
            <div className="rounded-[var(--radius-card)] border border-navy-800 bg-navy-900/60 p-4 text-xs leading-relaxed text-steel-400">
              <p className="font-semibold uppercase tracking-wider text-accent">
                Registered Operations Hub
              </p>
              <p className="mt-1 font-medium text-steel-200">
                Ambassador Nne Furo Kurubo, Model Secondary School Road, Onne, Port Harcourt, Rivers State.
              </p>
              <div className="mt-3 flex flex-wrap gap-4 pt-2.5 border-t border-navy-800 font-semibold text-steel-200">
                <a className="hover:text-accent transition-colors" href="tel:+2348037080258">
                  +234 (0) 803 708 0258
                </a>
                <a className="hover:text-accent transition-colors" href="mailto:kobbs@kobbsglobal.com">
                  kobbs@kobbsglobal.com
                </a>
              </div>
            </div>
          </div>

          {footerGroups.map(({ title, links }) => (
            <div key={title}>
              <h2 className="mb-4 text-xs font-bold uppercase tracking-wider text-white">
                {title}
              </h2>
              <nav aria-label={`${title} links`} className="flex flex-col gap-2.5">
                {links.map(([label, href]) => (
                  <Link
                    key={label}
                    to={href}
                    className="text-sm text-steel-400 transition-colors hover:text-accent focus-visible:outline-1 focus-visible:outline-accent"
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-xs text-steel-400">
          <p>
            © {new Date().getFullYear()} Kobbs Global Services Nigeria Limited. Established 1997.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/safety" className="hover:text-accent transition-colors">
              HSE & Safety Policy
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1 font-semibold text-accent hover:text-accent-hover transition-colors"
            >
              <span>Contact Desk</span>
              <FiArrowUpRight className="size-3" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
