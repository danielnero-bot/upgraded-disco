import { FiCheck, FiMap, FiTruck, FiTool, FiAnchor } from "react-icons/fi";

const capabilities = [
  {
    icon: FiMap,
    number: "01",
    title: "Route surveys & journey management",
    description: "Civil route surveys, bridge load checks, overhead-clearance logs and escort planning before cargo release.",
    outcome: "Transit feasibility",
  },
  {
    icon: FiTool,
    number: "02",
    title: "Heavy-cargo rigging & engineering",
    description: "Lift studies, center-of-gravity planning, spreader-beam allocation and multi-axle trailer lashing calculations.",
    outcome: "Engineered rigging",
  },
  {
    icon: FiAnchor,
    number: "03",
    title: "Oilfield & swamp rig relocation",
    description: "Turnkey movement of land rigs, mud tanks, power packs and offshore staging packages across difficult terrain.",
    outcome: "Field logistics",
  },
  {
    icon: FiTruck,
    number: "04",
    title: "Dedicated fleet support",
    description: "Equipment charters, rough-terrain lifting equipment and lowbed transport supported by maintenance teams.",
    outcome: "Dedicated charters",
  },
];

export default function CapabilitiesSection() {
  return (
    <section id="about" className="bg-background py-16 text-foreground sm:py-20 lg:py-24">
      <div className="container-x">
        <div className="mb-12 grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <div className="eyebrow mb-3 flex items-center gap-2 font-semibold text-navy">
              <span className="size-2 bg-amber" />Operational excellence & industrial competence
            </div>
            <h2 className="max-w-xl text-3xl font-bold uppercase leading-tight sm:text-4xl">
              Engineered transportation for Nigeria’s energy and infrastructure sectors.
            </h2>
          </div>
          <div className="space-y-4 text-base leading-7 text-foreground/80 lg:col-span-7">
            <p>
              Kobbs Global Services Nigeria Limited provides mission-critical overland haulage, precision heavy lift and integrated oilfield logistics for deepwater operators, engineering contractors and infrastructure developers. Based in Port Harcourt, we coordinate complex freight movements where route constraints, oversized cargo and tight schedules leave little room for error.
            </p>
            <p>
              From high-tonnage fabrication transport to swamp rig relocations, our teams coordinate route feasibility, escort logistics and lifting plans. Every mobilization follows documented journey-management and operational-integrity standards.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {capabilities.map(({ icon: Icon, number, title, description, outcome }) => (
            <article key={number} className="flex min-h-72 flex-col justify-between border border-navy/10 bg-white p-6 shadow-sm">
              <div>
                <div className="mb-5 flex size-12 items-center justify-center bg-background text-navy"><Icon aria-hidden="true" className="size-6" /></div>
                <p className="font-mono text-xs text-slate">Capability / {number}</p>
                <h3 className="mt-2 text-xl font-bold leading-6">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-foreground/70">{description}</p>
              </div>
              <p className="mt-6 flex items-center gap-2 font-mono text-xs font-semibold uppercase text-navy">
                <span className="text-amber">{outcome}</span><FiCheck aria-hidden="true" />
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}