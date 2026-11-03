import { FiArrowRight, FiCompass, FiShield, FiTruck } from "react-icons/fi";
import { useRef } from "react";
import { Link } from "react-router-dom";
import useScrollReveal from "../hooks/useScrollReveal";
import heroImage from "../assets/thumbnail.jpg";

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

  useScrollReveal(sectionRef, { stagger: 0.1 });

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative bg-white pb-16 pt-28 text-slate-900 sm:pb-24 sm:pt-36 lg:pb-28 lg:pt-40"
    >
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/60 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600 reveal">
              <span className="size-1.5 rounded-full bg-blue-600 animate-pulse" />
              Port Harcourt · Onne · Nigeria
            </div>
            
            <h1 className="max-w-2xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl reveal leading-[1.1]">
              Moving industry{" "}
              <span className="text-blue-600">forward.</span>
            </h1>
            
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg reveal">
              Precision haulage, heavy-lift engineering, and industrial transportation solutions built for demanding energy and infrastructure projects across Nigeria.
            </p>
            
            <div className="mt-8 flex flex-wrap items-center gap-3.5 reveal">
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center gap-2.5 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Request a quote <FiArrowRight aria-hidden="true" className="size-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex min-h-12 items-center gap-2.5 rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Explore services <FiArrowRight aria-hidden="true" className="size-4 text-slate-400" />
              </Link>
            </div>
          </div>

          <figure className="relative min-h-80 overflow-hidden rounded-2xl border border-slate-100 shadow-xl shadow-slate-100/60 sm:min-h-96 lg:col-span-6 lg:min-h-[32rem] reveal group">
            <img
              src={heroImage}
              alt="Industrial cargo prepared for lowbed road transportation"
              className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
            <figcaption className="absolute bottom-5 left-5 rounded-lg border border-white/20 bg-white/95 px-4 py-2.5 text-xs font-medium text-slate-800 shadow-md backdrop-blur-sm">
              Industrial Transport & Engineering Logistics
            </figcaption>
          </figure>
        </div>

        {/* Operational Highlights Cards */}
        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {operationalFacts.map(({ icon: Icon, label, value, detail }) => (
            <div
              key={label}
              className="group rounded-xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-100 hover:shadow-md reveal"
            >
              <div className="mb-3.5 inline-flex size-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                <Icon aria-hidden="true" className="size-5" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                {label}
              </p>
              <h3 className="mt-1.5 text-sm font-semibold leading-snug text-slate-900">
                {value}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-500">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
