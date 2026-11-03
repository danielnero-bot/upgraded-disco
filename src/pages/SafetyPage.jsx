import { FiActivity, FiCheckSquare, FiLifeBuoy } from "react-icons/fi";
import { useRef } from "react";
import PageIntro from "../components/PageIntro";
import SafetySection from "../components/SafetySection";
import liftImage from "../assets/OIP (1).webp";
import useScrollReveal from "../hooks/useScrollReveal";

const safetyPhases = [
  {
    icon: FiCheckSquare,
    title: "Before Mobilization",
    items: [
      "Review cargo weight distribution & bridge clearance logs",
      "Perform certified pre-trip vehicle & rigging inspections",
      "Brief operators & drivers on assignment-specific risks",
    ],
  },
  {
    icon: FiActivity,
    title: "During Operations",
    items: [
      "Strict enforcement of speed limits & rest intervals",
      "Real-time route communication with escort pilot vehicles",
      "Immediate pause protocol for sudden terrain or weather hazards",
    ],
  },
  {
    icon: FiLifeBuoy,
    title: "Prepared Response & Closeout",
    items: [
      "Designated emergency muster points & rapid escalation lines",
      "Comprehensive offloading & equipment de-rigging audits",
      "Post-assignment safety debrief & operational log archival",
    ],
  },
];

export default function SafetyPage() {
  const pageRef = useRef(null);

  useScrollReveal(pageRef, { stagger: 0.1, y: 15 });

  return (
    <main ref={pageRef} className="bg-white">
      <PageIntro
        eyebrow="HSE & Safety Governance"
        title="Safety is woven into every operational decision."
        description="Our policy centers on proactive risk assessment, strict mechanical integrity, trained personnel, and documented controls across all transit and lifting operations."
        image={liftImage}
        imageAlt="Industrial lifting equipment prepared for a controlled operation"
      />
      <SafetySection />

      {/* Safety Cycle Section */}
      <section className="bg-white py-16 sm:py-20 border-t border-slate-100">
        <div className="container-x">
          <div className="mb-12 max-w-2xl reveal">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-blue-600">
              Operational Safeguards
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              A safety lifecycle from planning through demobilization
            </h2>
            <p className="mt-3 text-base text-slate-500">
              Clear accountability and technical control parameters maintained from the moment cargo is surveyed until final handover.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {safetyPhases.map(({ icon: Icon, title, items }, index) => (
              <article
                key={title}
                className="group flex flex-col justify-between rounded-xl border border-slate-100 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-100 hover:shadow-lg hover:shadow-blue-50/50 reveal"
              >
                <div>
                  <div className="mb-6 flex items-center justify-between border-b border-slate-100 pb-4">
                    <div className="flex size-11 items-center justify-center rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon aria-hidden="true" className="size-5" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Phase 0{index + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{title}</h3>
                  <ul className="mt-4 space-y-3">
                    {items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-500"
                      >
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-blue-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
