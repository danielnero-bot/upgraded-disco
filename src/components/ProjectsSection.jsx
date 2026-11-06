import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import heavyImage from "../assets/OIP (3).webp";
import thirdImage from "../assets/OIP (2).webp";

const references = [
  {
    eyebrow: "Historical Project · 2014–2017",
    location: "Nigeria",
    jobType: "Road Logistics & Multi-Axle Haulage",
    equipment: "Heavy Prime Movers & Lowbeds",
    title: "Provision of trucks for road transportation on Egina project",
    description:
      "Road haulage and transport support for Saipem Contracting Nigeria Ltd during the flagship Egina offshore development.",
    scope: "Road Logistics & Multi-Axle Haulage",
    image: heavyImage,
  },
  {
    eyebrow: "Historical Project · 2012",
    location: "Nigeria",
    jobType: "Heavy Equipment Haulage",
    equipment: "Specialized Trailers & Mobile Rigging",
    title: "Haulage of equipment for mini A.G.O. plant",
    description:
      "Plant machinery relocation for Niger Delta Petroleum Resources Ltd via Murphy Shipping and Commercial Services.",
    scope: "Heavy Equipment Haulage",
    image: thirdImage,
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-white py-24 lg:py-32">
      <div className="container-x">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-[var(--radius-card)] border border-steel-200 bg-steel-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-navy-800 shadow-xs">
              <span className="size-1.5 rounded-full bg-accent" />
              <span>Verified Track Record</span>
            </div>
            <h2 className="max-w-3xl text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              Project Experience & Historical References
            </h2>
          </div>
          <span className="w-fit rounded-[var(--radius-card)] border border-steel-200 bg-steel-50 px-3.5 py-1.5 text-xs font-bold text-navy-800 shadow-xs">
            Documented Energy Participation
          </span>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          {/* Main Featured Case */}
          <article className="group flex flex-col justify-between overflow-hidden rounded-[var(--radius-card)] border border-steel-200 bg-white shadow-xs transition-all duration-300 hover:border-navy-700 hover:shadow-md lg:col-span-7">
            <figure className="relative aspect-[16/10] overflow-hidden bg-steel-100 border-b border-steel-200">
              <img
                src={heavyImage}
                alt="Heavy truck for industrial road transportation on Egina project"
                loading="lazy"
                className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute bottom-3 left-3 right-3 flex flex-wrap items-center justify-between gap-2 rounded-[var(--radius-card)] border border-steel-200/40 bg-white/95 px-3 py-1.5 text-xs font-medium text-navy-900 shadow-sm backdrop-blur-xs">
                <span><strong>Job:</strong> Multi-Axle Road Haulage</span>
                <span><strong>Location:</strong> Nigeria</span>
                <span><strong>Equipment:</strong> Prime Movers & Lowbeds</span>
              </figcaption>
            </figure>
            <div className="flex flex-1 flex-col justify-between p-7 sm:p-8">
              <div>
                <div className="mb-3 flex flex-wrap items-center justify-between gap-2 text-xs">
                  <span className="font-bold uppercase tracking-wider text-navy-700">
                    Historical Record · 2014–2017
                  </span>
                  <span className="text-steel-400">Published Corporate Reference</span>
                </div>
                <h3 className="text-2xl font-bold leading-tight text-navy-900 sm:text-3xl">
                  Provision of trucks for road transportation on the Egina project
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-steel-600 sm:text-base">
                  Historical project record published by Kobbs Global: specialized trucking and heavy haulage operations provided for Saipem Contracting Nigeria Ltd during the construction phase of the landmark Egina FPSO project.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4 rounded-[var(--radius-card)] border border-steel-200 bg-steel-50 p-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-steel-400">Timeline</p>
                    <p className="mt-1 text-sm font-bold text-navy-900">2014–2017</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-steel-400">Client / Contractor</p>
                    <p className="mt-1 text-sm font-bold text-navy-900">Saipem Contracting Nigeria Ltd</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between border-t border-steel-200 pt-4 text-xs">
                <span className="font-medium text-steel-600">Historical Assignment</span>
                <span className="inline-flex items-center gap-1.5 font-bold text-navy-900">
                  <FiCheckCircle aria-hidden="true" className="size-4 text-navy-700" />
                  Verified Completion
                </span>
              </div>
            </div>
          </article>

          {/* Secondary Cases */}
          <div className="grid gap-6 lg:col-span-5">
            {references.map(({ eyebrow, location, jobType, equipment, title, description, scope, image }) => (
              <article
                key={title}
                className="group flex flex-col justify-between overflow-hidden rounded-[var(--radius-card)] border border-steel-200 bg-white shadow-xs transition-all duration-300 hover:border-navy-700 hover:shadow-md"
              >
                <figure className="relative aspect-[16/10] overflow-hidden bg-steel-100 border-b border-steel-200">
                  <img
                    src={image}
                    alt="Industrial logistics equipment"
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <figcaption className="absolute bottom-2.5 left-2.5 right-2.5 flex flex-wrap items-center justify-between gap-1.5 rounded-[var(--radius-card)] border border-steel-200/40 bg-white/95 px-2.5 py-1 text-[0.7rem] font-medium text-navy-900 shadow-xs backdrop-blur-xs">
                    <span><strong>Job:</strong> {jobType}</span>
                    <span><strong>Loc:</strong> {location}</span>
                    <span><strong>Fleet:</strong> {equipment}</span>
                  </figcaption>
                </figure>
                <div className="flex flex-1 flex-col p-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-navy-700">
                      {eyebrow}
                    </p>
                    <h3 className="mt-2 text-lg font-bold text-navy-900 group-hover:text-navy-700 transition-colors">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-steel-600">
                      {description}
                    </p>
                  </div>
                  <div className="mt-5 border-t border-steel-200 pt-3 text-xs font-semibold text-steel-600">
                    Scope: <span className="font-bold text-navy-900">{scope}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 rounded-[var(--radius-card)] border border-steel-200 bg-steel-50 p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-steel-600">
            Formal technical qualification and project verification dossiers are available upon formal client request.
          </p>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 font-bold text-navy-900 transition-colors hover:text-navy-700"
          >
            <span>Request Detailed Dossier</span>
            <FiArrowRight aria-hidden="true" className="size-4 text-steel-400" />
          </Link>
        </div>
      </div>
    </section>
  );
}
