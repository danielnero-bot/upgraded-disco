import {
  FiArrowRight,
  FiTruck,
  FiAnchor,
  FiSettings,
  FiLayers,
} from "react-icons/fi";
import { useRef } from "react";
import { Link } from "react-router-dom";
import useScrollReveal from "../hooks/useScrollReveal";
import Haulage from "../assets/Haulage.jpg";
import Heavy from "../assets/heavy.jpg";
import Rig from "../assets/OIP (1).webp";
import Leasing from "../assets/thumbnail (6).jpg";

const services = [
  {
    icon: FiTruck,
    number: "01",
    title: "Haulage & Transportation",
    description:
      "Overland transit for industrial plant components, line pipes, tubulars and oversized cargo, supported by pilot-escort coordination.",
    image: Haulage,
    alt: "Heavy transport truck on an industrial road",
  },
  {
    icon: FiLayers,
    number: "02",
    title: "Heavy Lift & Craneage",
    description:
      "Engineered lifting, tandem crane operations and precision offloading for structural fabrications and heavy plant equipment.",
    image: Heavy,
    alt: "Industrial construction and lifting equipment at a worksite",
  },
  {
    icon: FiAnchor,
    number: "03",
    title: "Rig Move Operations",
    description:
      "End-to-end relocation of land and swamp drilling rigs, heavy mud pumps and camp modules under strict HSE protocols.",
    image: Rig,
    alt: "Large industrial port cranes and cargo operations",
    featured: true,
  },
  {
    icon: FiSettings,
    number: "04",
    title: "Equipment Leasing",
    description:
      "Flexible leasing of rough-terrain cranes, lowbed trailers, flatbeds and dedicated fleet trucks with mechanical support.",
    image: Leasing,
    alt: "Industrial operations team working with heavy equipment",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef(null);

  useScrollReveal(sectionRef, { stagger: 0.08 });

  return (
    <section
      id="services"
      ref={sectionRef}
      className="bg-white py-24 lg:py-32"
    >
      <div className="container-x">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-[var(--radius-card)] border border-steel-200 bg-steel-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-navy-800 shadow-xs reveal">
              <span className="size-1.5 rounded-full bg-accent" />
              <span>Deployment Portfolio</span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl reveal">
              Core Specialized Services
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-steel-600 reveal">
            Heavy-duty industrial assets and certified transportation setups deployed across maritime, swamp, and dryland energy corridors.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {services.map(
            ({
              icon: Icon,
              number,
              title,
              description,
              image,
              alt,
              featured,
            }) => (
              <article
                key={number}
                className="group flex flex-col overflow-hidden rounded-[var(--radius-card)] border border-steel-200 bg-white shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-navy-700 hover:shadow-md reveal"
              >
                <div className="relative h-52 shrink-0 overflow-hidden bg-steel-100 border-b border-steel-200">
                  <img
                    src={image}
                    alt={alt}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-[var(--radius-card)] border border-steel-200/60 bg-white/95 px-2.5 py-1 text-xs font-bold text-navy-900 shadow-xs backdrop-blur-xs">
                    {number}
                  </span>
                  {featured && (
                    <span className="absolute right-3 top-3 rounded-[var(--radius-card)] bg-accent px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-navy-950 shadow-xs">
                      Core Specialty
                    </span>
                  )}
                </div>
                
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3.5 inline-flex size-9 items-center justify-center rounded-[var(--radius-card)] bg-steel-100 text-navy-900 transition-colors group-hover:bg-navy-900 group-hover:text-white">
                    <Icon aria-hidden="true" className="size-4" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 transition-colors group-hover:text-navy-700">
                    {title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-steel-600">
                    {description}
                  </p>
                  <Link
                    to="/contact"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-navy-900 transition-colors hover:text-navy-700"
                  >
                    <span>Discuss this service</span>
                    <FiArrowRight
                      aria-hidden="true"
                      className="size-4 transition-transform group-hover:translate-x-1 text-steel-400"
                    />
                  </Link>
                </div>
              </article>
            ),
          )}
        </div>

        <div className="mt-12 flex flex-col gap-4 rounded-[var(--radius-card)] border border-steel-200 bg-steel-50 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-navy-700">
              Additional Logistics Support
            </p>
            <p className="mt-1 text-sm text-steel-600">
              Quayside marshaling, certified rigging crews, staging-yard storage, and rapid maintenance teams available on demand.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-[var(--radius-card)] border border-steel-200 bg-white px-5 py-2.5 text-sm font-bold text-navy-900 shadow-xs transition-colors hover:border-steel-400 hover:bg-steel-50"
          >
            <span>Submit Fleet Needs</span>
            <FiArrowRight aria-hidden="true" className="size-4 text-steel-400" />
          </Link>
        </div>
      </div>
    </section>
  );
}
