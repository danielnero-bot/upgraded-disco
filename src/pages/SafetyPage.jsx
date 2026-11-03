import { FiActivity, FiCheckSquare, FiLifeBuoy } from "react-icons/fi";
import PageIntro from "../components/PageIntro";
import SafetySection from "../components/SafetySection";
import pic from "../assets/OIP (1).webp";

const safetyPhases = [
  {
    icon: FiCheckSquare,
    title: "Before mobilization",
    items: [
      "Review scope and route constraints",
      "Confirm vehicle and equipment readiness",
      "Brief crews on task-specific hazards",
    ],
  },
  {
    icon: FiActivity,
    title: "During operations",
    items: [
      "Follow journey and lifting controls",
      "Maintain communication with the team",
      "Escalate changing site conditions",
    ],
  },
  {
    icon: FiLifeBuoy,
    title: "Prepared response",
    items: [
      "Identify emergency contacts and muster points",
      "Keep response arrangements clear to crews",
      "Review lessons after the assignment",
    ],
  },
];

export default function SafetyPage() {
  return (
    <>
      <PageIntro
        eyebrow="HSE & safety"
        title="Safety is part of every operational decision."
        description="Our approach is built around planning, equipment integrity, crew readiness and documented controls for transport and lifting work."
        image= {pic}
></PageIntro>      <SafetySection />
      <section className="bg-background py-16 text-foreground sm:py-20">
        <div className="container-x">
          <p className="eyebrow mb-2 font-semibold text-navy">
            Operational safeguards
          </p>
          <h2 className="mb-8 max-w-2xl text-3xl font-bold uppercase">
            A safety cycle from planning through closeout
          </h2>
          <div className="grid gap-4 lg:grid-cols-3">
            {safetyPhases.map(({ icon: Icon, title, items }, index) => (
              <article
                key={title}
                className="border border-navy/10 bg-white p-6"
              >
                <div className="mb-4 flex items-center justify-between">
                  <Icon aria-hidden="true" className="size-6 text-navy" />
                  <span className="font-mono text-xs text-slate">
                    PHASE / 0{index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold uppercase">{title}</h3>
                <ul className="mt-4 space-y-3">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="border-t border-navy/10 pt-3 text-sm leading-5 text-foreground/70"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
