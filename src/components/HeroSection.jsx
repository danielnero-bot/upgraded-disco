import { FiArrowRight, FiCompass, FiShield, FiTruck } from "react-icons/fi";
import { useRef } from "react";
import { Link } from "react-router-dom";
import useScrollReveal from "../hooks/useScrollReveal";
import heroImage from "../assets/thumbnail.jpg";

const operationalFacts = [
  {
    icon: FiCompass,
    label: "Registered address",
    value: "Ambassador Nne Furo Kurubo, Model Secondary School Road",
    detail: "Onne, Port Harcourt, Rivers State",
  },
  {
    icon: FiTruck,
    label: "Specialized assets",
    value: "Prime movers, multi-axle lowbeds & mobile cranes",
    detail: "Tandem haulage and swamp staging",
  },
  {
    icon: FiShield,
    label: "HSE protocol",
    value: "Journey management and a zero-harm mandate",
    detail: "Toolbox verification and rigging safety audits",
  },
];

export default function HeroSection() {
  const sectionRef = useRef(null);

  useScrollReveal(sectionRef, { stagger: 0.1 });

  return (
    <section
      id="home"
      ref={sectionRef}
      className="bg-white pb-14 pt-24 text-navy sm:pb-20 sm:pt-28 lg:pb-24 lg:pt-32"
    >
      <div className="container-x">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <div className="mb-6 flex flex-wrap items-center gap-3 font-mono text-xs uppercase text-slate reveal">
              <span className="h-0.5 w-8 bg-amber" />
              Port Harcourt / Onne / Nigeria
            </div>
            <h1 className="max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl reveal">
              Moving industry{" "}
              <span className="text-amber-foreground">forward.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate sm:text-lg sm:leading-8 reveal">
              Haulage, heavy-lift and industrial transportation solutions for
              demanding projects across Nigeria and the Gulf of Guinea energy
              corridor.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center gap-3 bg-amber px-6 py-3 text-sm font-bold text-navy transition-colors hover:bg-amber/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
              >
                Request a quote <FiArrowRight aria-hidden="true" />
              </Link>
              <Link
                to="/services"
                className="inline-flex min-h-12 items-center gap-3 border border-border bg-white px-5 py-3 text-sm font-semibold text-navy transition-colors hover:border-amber focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
              >
                Explore our services <FiArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>

          <figure className="relative min-h-72 overflow-hidden sm:min-h-96 lg:col-span-6 lg:min-h-[34rem] reveal">
            <img
              src={heroImage}
              alt="Industrial cargo prepared for lowbed road transportation"
              className="absolute inset-0 size-full object-cover"
              fetchPriority="high"
            />
            <figcaption className="absolute bottom-4 left-4 border-l-2 border-amber bg-white/95 px-4 py-3 text-xs text-navy shadow-sm sm:bottom-6 sm:left-6">
              Industrial transport & logistics
            </figcaption>
          </figure>
        </div>

        <div className="mt-12 grid divide-y divide-border border-y border-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {operationalFacts.map(({ icon: Icon, label, value, detail }) => (
            <div
              key={label}
              className="py-5 sm:px-5 sm:py-6 first:sm:pl-0 last:sm:pr-0 reveal"
            >
              <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-amber-foreground">
                <Icon aria-hidden="true" />
                {label}
              </div>
              <p className="text-sm font-semibold leading-6 text-navy">
                {value}
              </p>
              <p className="mt-1 text-xs leading-5 text-slate">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
