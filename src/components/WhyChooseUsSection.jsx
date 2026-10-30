import { FiMapPin, FiTruck, FiTool, FiUsers } from "react-icons/fi";

const strengths = [
  {
    icon: FiMapPin,
    number: "01",
    title: "Industrial haulage experience",
    description:
      "Working knowledge of Nigerian transport routes, port approaches, swamp concessions and Niger Delta operating conditions.",
    label: "Regional knowledge",
  },
  {
    icon: FiTruck,
    number: "02",
    title: "Heavy-cargo capabilities",
    description:
      "Mobilization planning for out-of-gauge cargo, heavy industrial components and multi-piece drilling systems.",
    label: "Engineered handling",
  },
  {
    icon: FiTool,
    number: "03",
    title: "Operational field support",
    description:
      "Journey management, escort coordination, equipment-readiness checks and on-site supervision for each contract.",
    label: "Hands-on supervision",
  },
  {
    icon: FiUsers,
    number: "04",
    title: "Punctual professionalism",
    description:
      "Clear transit updates, structured mobilization schedules, responsive client liaisons and regulatory compliance.",
    label: "Contract integrity",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="bg-background py-16 text-foreground sm:py-20 lg:py-24">
      <div className="container-x">
        <div className="mb-10 max-w-2xl">
          <p className="eyebrow mb-2 font-semibold text-navy">
            Operational differentiation
          </p>
          <h2 className="text-3xl font-bold uppercase leading-tight sm:text-4xl">
            Why industrial operators choose Kobbs Global
          </h2>
          <p className="mt-4 text-base leading-7 text-foreground/70">
            Built on direct experience in high-consequence environments where
            safety and logistical readiness matter.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {strengths.map(
            ({ icon: Icon, number, title, description, label }) => (
              <article
                key={number}
                className="flex min-h-72 flex-col justify-between border border-navy/10 bg-white p-6 shadow-sm"
              >
                <div>
                  <div className="mb-5 flex size-11 items-center justify-center bg-navy text-amber">
                    <Icon aria-hidden="true" className="size-5" />
                  </div>
                  <p className="font-mono text-xs uppercase text-slate">
                    Pillar {number}
                  </p>
                  <h3 className="mt-2 text-xl font-bold uppercase leading-6">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-foreground/70">
                    {description}
                  </p>
                </div>
                <p className="mt-5 border-t border-navy/10 pt-3 font-mono text-xs font-semibold uppercase text-navy">
                  {label}
                </p>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
