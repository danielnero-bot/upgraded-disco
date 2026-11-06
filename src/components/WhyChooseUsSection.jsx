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
    <section className="border-y border-steel-200 bg-steel-50 py-24 lg:py-32">
      <div className="container-x">
        <div className="mb-14 max-w-2xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-[var(--radius-card)] border border-steel-200 bg-white px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-navy-800 shadow-xs">
            <span className="size-1.5 rounded-full bg-accent" />
            <span>Operational Value</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            Why industry leaders partner with Kobbs Global
          </h2>
          <p className="mt-4 text-base leading-relaxed text-steel-600">
            Founded on decades of real-world execution in high-consequence environments where precision and safety are non-negotiable.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {strengths.map(
            ({ icon: Icon, number, title, description, label }) => (
              <article
                key={number}
                className="group flex flex-col justify-between rounded-[var(--radius-card)] border border-steel-200 bg-white p-7 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-navy-700 hover:shadow-sm"
              >
                <div>
                  <div className="mb-6 flex size-12 items-center justify-center rounded-[var(--radius-card)] bg-steel-100 text-navy-900 transition-colors group-hover:bg-navy-900 group-hover:text-white">
                    <Icon aria-hidden="true" className="size-5" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-steel-400">
                    Pillar {number}
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-navy-900">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-steel-600">
                    {description}
                  </p>
                </div>
                <div className="mt-6 border-t border-steel-200 pt-4 text-xs font-bold uppercase tracking-wider text-navy-700">
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
