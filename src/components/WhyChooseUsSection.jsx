import { FiMapPin, FiTruck, FiTool, FiUsers } from "react-icons/fi";

const strengths = [
  {
    icon: FiMapPin,
    number: "01",
    title: "Regional Logistics Intelligence",
    description:
      "Deep working knowledge of Nigerian transit routes, port approach bottlenecks, swamp accessways, and Niger Delta operational realities.",
    label: "Regional Expertise",
  },
  {
    icon: FiTruck,
    number: "02",
    title: "Heavy & Oversized Capability",
    description:
      "Engineered mobilization planning for out-of-gauge equipment, modular plant fabrications, and multi-component drilling systems.",
    label: "Engineered Transport",
  },
  {
    icon: FiTool,
    number: "03",
    title: "Hands-on Field Supervision",
    description:
      "Rigorous journey management, pilot vehicle escorts, pre-trip inspection protocols, and continuous on-site field oversight.",
    label: "Direct Supervision",
  },
  {
    icon: FiUsers,
    number: "04",
    title: "Punctual & Compliant Delivery",
    description:
      "Transparent tracking updates, prompt mobilization schedules, active client communication, and strict regulatory compliance.",
    label: "Execution Integrity",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="container-x">
        <div className="mb-14 max-w-2xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-blue-600">
            Operational Value
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Why industry leaders partner with Kobbs Global
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-500">
            Founded on decades of real-world execution in high-consequence environments where precision and safety are non-negotiable.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {strengths.map(
            ({ icon: Icon, number, title, description, label }) => (
              <article
                key={number}
                className="group flex flex-col justify-between rounded-xl border border-slate-100 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-100 hover:shadow-lg hover:shadow-blue-50/50"
              >
                <div>
                  <div className="mb-6 flex size-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    <Icon aria-hidden="true" className="size-5" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Pillar {number}
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-slate-900">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-500">
                    {description}
                  </p>
                </div>
                <div className="mt-6 border-t border-slate-100 pt-4 text-xs font-semibold uppercase tracking-wider text-blue-600">
                  {label}
                </div>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
