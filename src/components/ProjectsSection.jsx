import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

const references = [
  {
    eyebrow: "Historical project record / 2014–2017",
    location: "Nigeria",
    title: "Provision of trucks for road transportation on the Egina project",
    description:
      "Historical project record published by Kobbs Global: provision of trucks for road transportation on the Egina project for Saipem Contracting Nigeria Ltd.",
    scope: "Road transportation support",
  },
  {
    eyebrow: "Historical project record / 2012",
    location: "Nigeria",
    title: "Haulage of equipment for a mini A.G.O. plant",
    description:
      "Historical project record published by Kobbs Global: haulage of equipment for a mini A.G.O. plant for Niger/Delta Petroleum Resources Ltd — Murphy Shipping/Commercial Services.",
    scope: "Equipment haulage",
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
                  Historical record / 2014–2017
                </span>
                <span className="text-ink-muted">Published by company</span>
              </div>
              <h3 className="text-2xl font-bold uppercase leading-tight sm:text-3xl">
                Provision of trucks for road transportation on the Egina project
              </h3>
              <p className="mt-4 text-sm leading-7 text-ink-muted sm:text-base">
                This reflects a historical project record published by Kobbs
                Global: provision of trucks for road transportation on the Egina
                project for Saipem Contracting Nigeria Ltd. The project is
                preserved as a past assignment and should not be presented as a
                current client relationship.
              </p>
              <div className="mt-6 grid gap-4 border border-white/5 bg-black/20 p-4 sm:grid-cols-2">
                <div>
                  <p className="font-mono text-[0.65rem] uppercase text-slate">
                    Reference period
                  </p>
                  <p className="mt-1 text-sm font-medium">2014–2017</p>
                </div>
                <div>
                  <p className="font-mono text-[0.65rem] uppercase text-slate">
                    Client attribution
                  </p>
                  <p className="mt-1 text-sm font-medium">
                    Saipem Contracting Nigeria Ltd.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4 font-mono text-xs uppercase">
              <span className="text-ink-muted">Historical project</span>
              <span className="inline-flex items-center gap-2 font-semibold text-amber">
                <FiCheckCircle aria-hidden="true" />
                Company-published record
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
