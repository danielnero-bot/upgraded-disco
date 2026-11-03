import { FiArrowRight, FiCheck, FiMap, FiTruck, FiTool, FiAnchor } from "react-icons/fi";
import { Link } from "react-router-dom";

const capabilities = [
  {
    icon: FiMap,
    number: "01",
    title: "Route surveys & journey management",
    description: "Civil route surveys, bridge load checks, overhead clearance logs and pilot escort protocols prior to cargo movement.",
    outcome: "Transit Feasibility",
  },
  {
    icon: FiTool,
    number: "02",
    title: "Heavy-cargo rigging & engineering",
    description: "Lift studies, center-of-gravity planning, spreader-beam allocation and multi-axle trailer lashing calculations.",
    outcome: "Engineered Rigging",
  },
  {
    icon: FiAnchor,
    number: "03",
    title: "Oilfield & swamp rig relocation",
    description: "Turnkey movement of land rigs, mud tanks, power packs and offshore staging packages across challenging terrains.",
    outcome: "Field Logistics",
  },
  {
    icon: FiTruck,
    number: "04",
    title: "Dedicated fleet support",
    description: "Equipment charters, rough-terrain lifting gear, and multi-axle lowbeds supported by dedicated maintenance crews.",
    outcome: "Dedicated Charters",
  },
];

export default function CapabilitiesSection() {
  return (
    <section id="about" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="container-x">
        <div className="mb-14 grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5">
            <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600">
              <span className="size-1.5 rounded-full bg-blue-600" />
              Operational Excellence
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Engineered transportation for energy and infrastructure.
            </h2>
          </div>
          <div className="space-y-4 text-base leading-relaxed text-slate-600 lg:col-span-7">
            <p>
              Kobbs Global Services Nigeria Limited provides mission-critical overland haulage, precision heavy lift, and integrated oilfield logistics for energy operators and contractors. Headquartered in Port Harcourt, we coordinate complex freight movements where oversized cargo and tight schedules require uncompromising precision.
            </p>
            <div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700"
              >
                Learn more about our company <FiArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {capabilities.map(({ icon: Icon, number, title, description, outcome }) => (
            <article
              key={number}
              className="group flex min-h-72 flex-col justify-between rounded-xl border border-slate-100 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-100 hover:shadow-lg hover:shadow-blue-50/50"
            >
              <div>
                <div className="mb-6 flex size-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <Icon aria-hidden="true" className="size-6" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Capability / {number}
                </span>
                <h3 className="mt-2 text-lg font-bold leading-snug text-slate-900">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  {description}
                </p>
              </div>
              <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 text-xs font-semibold text-blue-600">
                <span>{outcome}</span>
                <FiCheck aria-hidden="true" className="size-4 text-blue-600" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
