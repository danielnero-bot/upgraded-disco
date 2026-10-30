import { FiArrowRight, FiCompass, FiShield, FiTruck } from "react-icons/fi";

const operationalFacts = [
  {
    icon: FiCompass,
    label: "Operational base",
    value: "Federal Lighter Terminal, Onne Logistics Corridor",
    detail: "Port Harcourt, Rivers State",
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
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-navy text-ink"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?auto=format&fit=crop&w=2200&q=85')",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-r from-navy via-navy/90 to-navy/45"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-t from-charcoal/90 via-transparent to-navy/35"
      />

      <div className="container-x pb-10 pt-20 sm:pb-14 sm:pt-28 lg:pb-16 lg:pt-32">
        <div className="mb-6 flex flex-wrap items-center gap-3 text-xs font-mono uppercase text-ink-muted">
          <span className="bg-amber/15 px-2 py-1 font-semibold text-amber">
            Sec_01 / Corridor directive
          </span>
          <span className="hidden h-px w-10 bg-amber/50 sm:block" />
          <span>Port Harcourt / Onne Hub / Gulf of Guinea</span>
        </div>

        <div className="max-w-4xl">
          <h1 className="max-w-3xl font-display text-5xl font-bold uppercase leading-[1.02] sm:text-6xl lg:text-7xl">
            Moving industry <span className="text-amber">forward.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-muted sm:text-xl">
            Haulage, heavy-lift and industrial transportation solutions for
            demanding projects across Nigeria and the Gulf of Guinea energy
            corridor.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/contact"
              className="inline-flex min-h-12 items-center gap-3 bg-amber px-6 py-3 font-mono text-sm font-bold uppercase text-amber-foreground transition-colors hover:bg-amber/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              Request a quote <FiArrowRight aria-hidden="true" />
            </a>
            <a
              href="/services"
              className="inline-flex min-h-12 items-center gap-3 border border-white/15 bg-charcoal/60 px-5 py-3 font-mono text-sm font-semibold uppercase text-ink transition-colors hover:border-amber/50 hover:text-amber focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
            >
              Explore our services <FiArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mt-16 grid gap-px border border-white/10 bg-white/10 md:grid-cols-3">
          {operationalFacts.map(({ icon: Icon, label, value, detail }) => (
            <div key={label} className="bg-charcoal/90 p-5 sm:p-6">
              <div className="mb-3 flex items-center gap-2 font-mono text-xs font-semibold uppercase text-amber">
                <Icon aria-hidden="true" />
                {label}
              </div>
              <p className="text-sm font-semibold leading-6 text-ink">
                {value}
              </p>
              <p className="mt-1 text-xs leading-5 text-ink-muted">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
