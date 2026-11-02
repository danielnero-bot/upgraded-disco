import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import haulageImage from "../assets/OIP (4).webp";
import heavyImage from "../assets/OIP (3).webp";

const references = [
  {
    eyebrow: "Historical project record / 2014–2017",
    location: "Nigeria",
    title: "Provision of trucks for road transportation on the Egina project",
    description:
      "Historical project record published by Kobbs Global: provision of trucks for road transportation on the Egina project for Saipem Contracting Nigeria Ltd.",
    scope: "Road transportation support",
    image: haulageImage,
  },
  {
    eyebrow: "Historical project record / 2012",
    location: "Nigeria",
    title: "Haulage of equipment for a mini A.G.O. plant",
    description:
      "Historical project record published by Kobbs Global: haulage of equipment for a mini A.G.O. plant for Niger/Delta Petroleum Resources Ltd — Murphy Shipping/Commercial Services.",
    scope: "Equipment haulage",
    image: heavyImage,
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-white py-16 text-navy sm:py-20 lg:py-24">
      <div className="container-x">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow mb-2 font-semibold text-amber-foreground">
              Verified operational footprint
            </p>
            <h2 className="max-w-3xl text-3xl font-bold uppercase leading-tight sm:text-4xl">
              Project experience & historical references
            </h2>
          </div>
          <span className="w-fit border border-border px-3 py-2 font-mono text-xs font-semibold uppercase text-slate">
            Documented sector participation
          </span>
        </div>

        <div className="grid gap-4 lg:grid-cols-12">
          <article className="flex flex-col justify-between border border-border bg-white lg:col-span-7">
            <figure className="relative h-56 overflow-hidden sm:h-72">
              <img src={haulageImage} alt="Heavy truck for industrial road transportation" loading="lazy" className="size-full object-cover transition-transform duration-500 hover:scale-[1.02] motion-reduce:transition-none" />
              <figcaption className="absolute bottom-3 left-3 bg-white/95 px-3 py-2 text-xs text-slate">Illustrative operations imagery</figcaption>
            </figure>
            <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
            <div>
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2 font-mono text-xs uppercase">
                <span className="font-semibold text-amber-foreground">
                  Historical record / 2014–2017
                </span>
                <span className="text-slate">Published by company</span>
              </div>
              <h3 className="text-2xl font-bold leading-tight sm:text-3xl">
                Provision of trucks for road transportation on the Egina project
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate sm:text-base">
                This reflects a historical project record published by Kobbs
                Global: provision of trucks for road transportation on the Egina
                project for Saipem Contracting Nigeria Ltd. The project is
                preserved as a past assignment and should not be presented as a
                current client relationship.
              </p>
              <div className="mt-6 grid gap-4 border-y border-border py-4 sm:grid-cols-2">
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
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4 font-mono text-xs uppercase">
              <span className="text-slate">Historical project</span>
              <span className="inline-flex items-center gap-2 font-semibold text-amber-foreground">
                <FiCheckCircle aria-hidden="true" />
                Company-published record
              </span>
            </div>
            </div>
          </article>

          <div className="grid gap-4 lg:col-span-5">
            {references.map(
              ({ eyebrow, location, title, description, scope }, index) => (
                <article
                  key={title}
                  className="flex flex-col justify-between border border-border bg-white"
                >
                  <figure className="relative h-40 overflow-hidden">
                    <img src={index === 0 ? heavyImage : haulageImage} alt="Industrial logistics equipment" loading="lazy" className="size-full object-cover transition-transform duration-500 hover:scale-[1.02] motion-reduce:transition-none" />
                    <figcaption className="absolute bottom-2 left-2 bg-white/95 px-2 py-1 text-[0.65rem] text-slate">Illustrative operations imagery</figcaption>
                  </figure>
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div>
                    <div className="mb-3 flex flex-wrap items-center justify-between gap-2 font-mono text-[0.65rem] uppercase text-amber">
                      <span>{eyebrow}</span>
                      <span className="text-slate">{location}</span>
                    </div>
                    <h3 className="text-xl font-bold leading-6">
                      {title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate">
                      {description}
                    </p>
                  </div>
                  <p className="mt-5 border-t border-border pt-3 font-mono text-xs uppercase text-slate">
                    Scope: {scope}
                  </p>
                  </div>
                </article>
              ),
            )}
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-3 border-y border-border py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-6 text-slate">
            Formal client verification packs for historical assignments are
            available upon technical request.
          </p>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-amber-foreground"
          >
            Request project references <FiArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
