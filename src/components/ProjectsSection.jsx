import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import heavyImage from "../assets/OIP (3).webp";
import thirdImage from "../assets/OIP (2).webp";

const references = [
  {
    eyebrow: "Historical Project · 2014–2017",
    location: "Nigeria",
    title: "Provision of trucks for road transportation on Egina project",
    description:
      "Road haulage and transport support for Saipem Contracting Nigeria Ltd during the flagship Egina offshore development.",
    scope: "Road Logistics & Multi-Axle Haulage",
    image: heavyImage,
  },
  {
    eyebrow: "Historical Project · 2012",
    location: "Nigeria",
    title: "Haulage of equipment for mini A.G.O. plant",
    description:
      "Plant machinery relocation for Niger Delta Petroleum Resources Ltd via Murphy Shipping and Commercial Services.",
    scope: "Heavy Equipment Haulage",
    image: thirdImage,
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="container-x">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-blue-600">
              Verified Track Record
            </p>
            <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Project Experience & Historical References
            </h2>
          </div>
          <span className="w-fit rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1 text-xs font-semibold text-slate-600">
            Documented Energy Participation
          </span>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          {/* Main Featured Case */}
          <article className="flex flex-col justify-between overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:shadow-lg lg:col-span-7">
            <figure className="relative h-64 overflow-hidden sm:h-80">
              <img
                src={heavyImage}
                alt="Heavy truck for industrial road transportation"
                loading="lazy"
                className="size-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <figcaption className="absolute bottom-3 left-3 rounded-md bg-white/95 px-3 py-1.5 text-xs text-slate-700 shadow-sm backdrop-blur-sm">
                Operations Field Snapshot
              </figcaption>
            </figure>
            <div className="flex flex-1 flex-col justify-between p-7 sm:p-8">
              <div>
                <div className="mb-3 flex flex-wrap items-center justify-between gap-2 text-xs">
                  <span className="font-semibold uppercase tracking-wider text-blue-600">
                    Historical Record · 2014–2017
                  </span>
                  <span className="text-slate-400">Published Corporate Reference</span>
                </div>
                <h3 className="text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
                  Provision of trucks for road transportation on the Egina project
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                  Historical project record published by Kobbs Global: specialized trucking and heavy haulage operations provided for Saipem Contracting Nigeria Ltd during the construction phase of the landmark Egina FPSO project.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4 rounded-lg bg-slate-50 p-4">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-400">Timeline</p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">2014–2017</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-400">Client / Contractor</p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">Saipem Contracting Nigeria Ltd</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 text-xs">
                <span className="font-medium text-slate-500">Historical Assignment</span>
                <span className="inline-flex items-center gap-1.5 font-semibold text-blue-600">
                  <FiCheckCircle aria-hidden="true" className="size-4" />
                  Verified Completion
                </span>
              </div>
            </div>
          </article>

          {/* Secondary Cases */}
          <div className="grid gap-6 lg:col-span-5">
            {references.map(({ eyebrow, location, title, description, scope, image }) => (
              <article
                key={title}
                className="group flex flex-col justify-between overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <figure className="relative h-44 overflow-hidden">
                  <img
                    src={image}
                    alt="Industrial logistics equipment"
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <figcaption className="absolute bottom-2.5 left-2.5 rounded bg-white/95 px-2.5 py-1 text-[0.65rem] font-medium text-slate-700 shadow-sm backdrop-blur-sm">
                    {location}
                  </figcaption>
                </figure>
                <div className="flex flex-1 flex-col p-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                      {eyebrow}
                    </p>
                    <h3 className="mt-2 text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500">
                      {description}
                    </p>
                  </div>
                  <div className="mt-5 border-t border-slate-100 pt-3 text-xs font-semibold text-slate-500">
                    Scope: <span className="text-slate-800">{scope}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 rounded-xl border border-slate-100 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-600">
            Formal technical qualification and project verification dossiers are available upon formal client request.
          </p>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 font-semibold text-blue-600 transition-colors hover:text-blue-700"
          >
            <span>Request Detailed Dossier</span>
            <FiArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
