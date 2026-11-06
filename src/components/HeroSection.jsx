import { FiArrowRight, FiCompass, FiShield, FiTruck } from "react-icons/fi";
import { useRef } from "react";
import { Link } from "react-router-dom";
import useScrollReveal from "../hooks/useScrollReveal";
import heroImage from "../assets/thumbnail.jpg";

// Rule 6: Render stats strip only behind SHOW_STATS constant set to false
const SHOW_STATS = false;
const statsPlaceholders = [
  { value: "00+", label: "Completed Operations" },
  { value: "00+", label: "Prime Movers & Heavy Assets" },
  { value: "100%", label: "Zero-Harm Safety Record" },
  { value: "25+", label: "Years Industry Leadership" },
];

const operationalFacts = [
  {
    icon: FiCompass,
    label: "Registered Hub",
    value: "Ambassador Nne Furo Kurubo, Model Secondary School Road",
    detail: "Onne, Port Harcourt, Rivers State",
  },
  {
    icon: FiTruck,
    label: "Specialized Fleet",
    value: "Prime movers, multi-axle lowbeds & mobile cranes",
    detail: "Tandem haulage & swamp staging operations",
  },
  {
    icon: FiShield,
    label: "Safety Protocol",
    value: "Journey management & zero-harm mandate",
    detail: "Rigging safety audits & comprehensive risk checks",
  },
];

export default function HeroSection() {
  const sectionRef = useRef(null);

  useScrollReveal(sectionRef, { stagger: 0.08 });

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative bg-white pb-20 pt-28 text-navy-900 sm:pb-28 sm:pt-36 lg:pb-32 lg:pt-40"
    >
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <div className="mb-5 inline-flex items-center gap-2 rounded-[var(--radius-card)] border border-steel-200 bg-steel-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-navy-800 shadow-xs reveal">
              <span className="size-1.5 rounded-full bg-accent" />
              <span>Port Harcourt · Onne · Nigeria</span>
            </div>
            
            <h1 className="max-w-2xl text-4xl font-extrabold tracking-tight text-navy-900 sm:text-5xl lg:text-6xl reveal leading-[1.1]">
              Moving industry forward.
            </h1>
            
            <p className="mt-6 max-w-xl text-base leading-relaxed text-steel-600 sm:text-lg reveal">
              Precision haulage, heavy-lift engineering, and industrial transportation solutions built for demanding energy and infrastructure projects across Nigeria.
            </p>
            
            <div className="mt-8 flex flex-wrap items-center gap-3.5 reveal">
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center gap-2.5 rounded-[var(--radius-card)] bg-accent px-6 py-3 text-sm font-bold text-navy-950 shadow-xs transition-colors hover:bg-accent-hover active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <span>Request a quote</span>
                <FiArrowRight aria-hidden="true" className="size-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex min-h-12 items-center gap-2.5 rounded-[var(--radius-card)] border border-steel-200 bg-white px-5 py-3 text-sm font-bold text-navy-900 transition-colors hover:border-steel-400 hover:bg-steel-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <span>Explore services</span>
                <FiArrowRight aria-hidden="true" className="size-4 text-steel-400" />
              </Link>
            </div>
          </div>

          <figure className="relative min-h-80 overflow-hidden rounded-[var(--radius-card)] border border-steel-200 shadow-xs sm:min-h-96 lg:col-span-6 lg:min-h-[32rem] reveal group">
            <img
              src={heroImage}
              alt="Industrial cargo prepared for lowbed road transportation"
              className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent pointer-events-none" />
            <figcaption className="absolute bottom-4 left-4 rounded-[var(--radius-card)] border border-steel-200/40 bg-white/95 px-3.5 py-2 text-xs font-semibold text-navy-900 shadow-sm backdrop-blur-xs">
              Industrial Transport & Engineering Logistics
            </figcaption>
          </figure>
        </div>

        {/* Optional Stats Strip (Behind SHOW_STATS constant per Rule 6) */}
        {SHOW_STATS && (
          <div className="mt-14 grid grid-cols-2 gap-4 rounded-[var(--radius-card)] border border-steel-200 bg-steel-50 p-6 sm:grid-cols-4 reveal">
            {statsPlaceholders.map((stat) => (
              <div key={stat.label} className="text-center">
                {/* TODO: confirm with client */}
                <p className="text-3xl font-extrabold text-navy-900">{stat.value}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-steel-600">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Operational Highlights Cards */}
        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {operationalFacts.map(({ icon: Icon, label, value, detail }) => (
            <div
              key={label}
              className="group rounded-[var(--radius-card)] border border-steel-200 bg-white p-6 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-navy-700 reveal"
            >
              <div className="mb-3.5 inline-flex size-10 items-center justify-center rounded-[var(--radius-card)] bg-steel-100 text-navy-900 transition-colors group-hover:bg-navy-900 group-hover:text-white">
                <Icon aria-hidden="true" className="size-5" />
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-navy-700">
                {label}
              </p>
              <h3 className="mt-1.5 text-sm font-bold leading-snug text-navy-900">
                {value}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-steel-600">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
