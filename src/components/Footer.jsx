import { Link } from "react-router-dom";
import logo from "../assets/logo1.png";

const footerGroups = [
  {
    title: "Services",
    links: [
      ["Heavy haulage", "/services"],
      ["Engineered heavy lift", "/services"],
      ["Rig move logistics", "/services"],
      ["Equipment leasing", "/services"],
    ],
  },
  {
    title: "Capabilities",
    links: [
      ["Fleet support", "/about"],
      ["Route surveys", "/about"],
      ["Quayside logistics", "/about"],
      ["Niger Delta operations", "/projects"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About Kobbs Global", "/about"],
      ["Project experience", "/projects"],
      ["HSE management", "/safety"],
      ["Contact & quotes", "/contact"],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-white text-navy">
      <div className="container-x py-12 sm:py-14">
        <div className="grid gap-10 border-b border-border pb-10 md:grid-cols-2 xl:grid-cols-5">
          <div className="space-y-5 xl:col-span-2">
            <Link
              to="/"
              aria-label="Kobbs Global home"
              className="inline-flex rounded-sm p-1.5"
            >
              <img
                src={logo}
                alt="Kobbs Global Services logo"
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p             className="max-w-md text-sm leading-6 text-slate">
              Nigerian industrial haulage, heavy-lift logistics, rig-move
              operations and oilfield equipment leasing from the Niger Delta
              energy corridor.
            </p>
            <div className="border-l-2 border-amber py-2 pl-4 font-mono text-xs leading-5 text-slate">
              <p className="font-semibold uppercase text-amber-foreground">
                Registered business address
              </p>
              <p className="mt-1">Ambassador Nne Furo Kurubo,</p>
              <p>Model Secondary School Road, Onne,</p>
              <p>Port Harcourt, Rivers State.</p>
              <a
                className="mt-2 inline-block text-navy hover:text-amber-foreground"
                href="tel:+2348037080258"
              >
                +234 (0) 803 708 0258
              </a>
              <a
                className="mt-1 block text-navy hover:text-amber-foreground"
                href="mailto:kobbs@kobbsglobal.com"
              >
                kobbs@kobbsglobal.com
              </a>
            </div>
          </div>

          {footerGroups.map(({ title, links }) => (
            <div key={title}>
              <h2 className="mb-4 font-mono text-xs font-semibold uppercase text-amber-foreground">
                {title}
              </h2>
              <nav
                aria-label={`${title} links`}
                className="flex flex-col gap-3"
              >
                {links.map(([label, href]) => (
                  <Link
                    key={label}
                    to={href}
                    className="text-sm text-slate transition-colors hover:text-amber-foreground"
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-3 border-y border-border py-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate">
            <span className="font-mono text-xs font-semibold uppercase text-amber-foreground">
              Safety-first mandate
            </span>
            <span className="ml-3">
              Operational planning built around safe, controlled mobilization.
            </span>
          </p>
          <Link
            className="shrink-0 font-mono text-xs uppercase text-navy hover:text-amber-foreground"
            to="/contact"
          >
            Contact Kobbs Global
          </Link>
        </div>
        <div className="mt-5 flex flex-col gap-2 font-mono text-[0.65rem] uppercase text-slate sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Kobbs Global Services Nigeria Limited.
            Established in 1997.
          </p>
          <p>Onne / Port Harcourt / Rivers State</p>
        </div>
      </div>
    </footer>
  );
}
