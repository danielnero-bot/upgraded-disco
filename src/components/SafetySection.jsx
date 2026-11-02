import {
  FiShield,
  FiClipboard,
  FiUsers,
  FiAward,
  FiArrowUpRight,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const safeguards = [
  {
    icon: FiClipboard,
    title: "Journey management plans",
    text: "Routes are mapped with speed controls, driver-rest windows, route constraints and emergency muster points before mobilization.",
  },
  {
    icon: FiUsers,
    title: "Pre-mobilization checks",
    text: "Vehicle and equipment inspections are paired with toolbox briefings that address the hazards of each assignment.",
  },
  {
    icon: FiAward,
    title: "Trained crews",
    text: "Drivers, operators and rigging personnel receive role-specific training for safe transport and lifting operations.",
  },
];

const documents = [
  "HSE management manual",
  "Journey management plan template",
  "Risk assessment matrix",
  "Nigerian content compliance information",
];

export default function SafetySection() {
  return (
    <section id="safety" className="bg-white py-16 text-navy sm:py-20 lg:py-24">
      <div className="container-x">
        <div className="mb-10 flex flex-col gap-3 border-y border-border py-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <FiShield aria-hidden="true" className="size-7 shrink-0" />
            <p className="text-lg font-bold uppercase">
              Safety first / Operational integrity / Zero-harm ambition
            </p>
          </div>
          <span className="w-fit border border-amber px-3 py-2 font-mono text-xs font-semibold uppercase text-amber-foreground">
            Zero-harm ambition
          </span>
        </div>

        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="space-y-6 lg:col-span-7">
            <div>
              <p className="eyebrow font-semibold text-amber-foreground">
                Field safety management
              </p>
              <h2 className="mt-2 text-3xl font-bold uppercase leading-tight sm:text-4xl">
                HSE standards on every route and lift
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-7 text-slate">
                In heavy industrial haulage and craneage, safety is the
                foundation of the operation. Our approach centers on proactive
                risk assessment, equipment integrity and clear personnel
                accountability.
              </p>
            </div>
            <div className="space-y-3">
              {safeguards.map(({ icon: Icon, title, text }) => (
                <article
                  key={title}
                  className="flex gap-4 border border-border bg-white p-4 sm:p-5"
                >
                  <Icon
                    aria-hidden="true"
                    className="mt-1 size-6 shrink-0 text-amber-foreground"
                  />
                  <div>
                    <h3 className="font-display text-lg font-bold">
                      {title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate">
                      {text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="border border-border bg-white p-6 sm:p-7 lg:col-span-5">
            <div className="mb-4 flex items-center gap-2 font-mono text-xs font-semibold uppercase text-amber-foreground">
              <FiShield aria-hidden="true" />
              HSE documentation
            </div>
            <h3 className="text-2xl font-bold">
              Client audit packs & manuals
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate">
              Procurement and vetting teams may request relevant HSE materials
              and pre-qualification information for contract review.
            </p>
            <ul className="my-6 divide-y divide-border border-y border-border px-4">
              {documents.map((document) => (
                <li
                  key={document}
                  className="flex items-center justify-between gap-3 py-3 text-xs"
                >
                  <span className="uppercase text-slate">{document}</span>
                  <span className="shrink-0 font-mono text-[0.65rem] font-semibold uppercase text-amber-foreground">
                    On request
                  </span>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 border border-amber bg-white px-4 py-3 text-center text-sm font-semibold transition-colors hover:bg-amber focus-visible:outline-2 focus-visible:outline-amber"
            >
              Request HSE information <FiArrowUpRight aria-hidden="true" />
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}
