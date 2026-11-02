import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

const references = [
  {
    eyebrow: "Operational logistics / Fabrication & pipelines",
    location: "Port Harcourt",
    title: "Saipem Contracting Nigeria Logistics",
    description:
      "Dedicated heavy transport support, pipe-section dispatch and yard logistics linking fabrication facilities with marine quaysides.",
    scope: "Heavy haulage fleet charters & yard dispatch",
  },
  {
    eyebrow: "Commercial maritime logistics / Inland transit",
    location: "Onne Port",
    title: "Murphy Shipping Support Operations",
    description:
      "Quayside vessel-discharge support, port-clearance haulage and overland heavy transit for industrial and oilfield consignments.",
    scope: "Port clearance, offloading & line transit",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-navy py-16 text-ink sm:py-20 lg:py-24">
      <div className="container-x">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow mb-2 font-semibold text-amber">
              Verified operational footprint
            </p>
            <h2 className="max-w-3xl text-3xl font-bold uppercase leading-tight sm:text-4xl">
              Project experience & historical references
            </h2>
          </div>
          <span className="w-fit bg-amber/10 px-3 py-2 font-mono text-xs font-semibold uppercase text-amber">
            Documented sector participation
          </span>
        </div>

        <div className="grid gap-4 lg:grid-cols-12">
          <article className="flex flex-col justify-between border border-white/10 bg-charcoal p-6 sm:p-8 lg:col-span-7">
            <div>
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2 font-mono text-xs uppercase">
                <span className="font-semibold text-amber">
                  Featured assignment / Nigeria deepwater
                </span>
                <span className="text-ink-muted">Status: executed</span>
              </div>
              <h3 className="text-2xl font-bold uppercase leading-tight sm:text-3xl">
                Egina project transportation support
              </h3>
              <p className="mt-4 text-sm leading-7 text-ink-muted sm:text-base">
                Critical heavy road haulage and inland freight movements for
                large structural components and auxiliary materials associated
                with a major Nigerian deepwater development. The work required
                civil path audits, axle-load planning and secure convoy
                coordination across southern logistics corridors.
              </p>
              <div className="mt-6 grid gap-4 border border-white/5 bg-black/20 p-4 sm:grid-cols-2">
                <div>
                  <p className="font-mono text-[0.65rem] uppercase text-slate">
                    Location / operating bases
                  </p>
                  <p className="mt-1 text-sm font-medium">
                    Port Harcourt / Onne FLT / Offshore staging
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[0.65rem] uppercase text-slate">
                    Technical scope
                  </p>
                  <p className="mt-1 text-sm font-medium">
                    Heavy structural haulage & staging
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4 font-mono text-xs uppercase">
              <span className="text-ink-muted">Reference: KGS-EGN-REF</span>
              <span className="inline-flex items-center gap-2 font-semibold text-amber">
                <FiCheckCircle aria-hidden="true" />
                Verified operation
              </span>
            </div>
          </article>

          <div className="grid gap-4 lg:col-span-5">
            {references.map(
              ({ eyebrow, location, title, description, scope }) => (
                <article
                  key={title}
                  className="flex flex-col justify-between border border-white/10 bg-charcoal p-5 sm:p-6"
                >
                  <div>
                    <div className="mb-3 flex flex-wrap items-center justify-between gap-2 font-mono text-[0.65rem] uppercase text-amber">
                      <span>{eyebrow}</span>
                      <span className="text-slate">{location}</span>
                    </div>
                    <h3 className="text-xl font-bold uppercase leading-6">
                      {title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-ink-muted">
                      {description}
                    </p>
                  </div>
                  <p className="mt-5 border-t border-white/10 pt-3 font-mono text-xs uppercase text-ink-muted">
                    Scope: {scope}
                  </p>
                </article>
              ),
            )}
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-3 border border-white/10 bg-white/5 p-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-6 text-ink-muted">
            Formal client verification packs for historical assignments are
            available upon technical request.
          </p>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 font-mono text-xs font-semibold uppercase text-amber"
          >
            Request project references <FiArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
