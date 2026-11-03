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
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1000&q=85",
    alt: "Industrial operations team working with heavy equipment",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef(null);

  useScrollReveal(sectionRef, { stagger: 0.1 });

  return (
    <section
      id="services"
      ref={sectionRef}
      className="bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="container-x">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-blue-600 reveal">
              Deployment Portfolio
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl reveal">
              Core Specialized Services
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-slate-500 reveal">
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
                className="group flex flex-col overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl hover:shadow-slate-100 reveal"
              >
                <div className="relative h-52 shrink-0 overflow-hidden bg-slate-50">
                  <img
                    src={image}
                    alt={alt}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-md bg-white/95 px-2.5 py-1 text-xs font-semibold text-slate-800 shadow-sm backdrop-blur-sm">
                    {number}
                  </span>
                  {featured && (
                    <span className="absolute right-3 top-3 rounded-md bg-blue-600 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-sm">
                      Core Specialty
                    </span>
                  )}
                </div>
                
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3.5 inline-flex size-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    <Icon aria-hidden="true" className="size-4" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                    {title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-500">
                    {description}
                  </p>
                  <Link
                    to="/contact"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700"
                  >
                    <span>Discuss this service</span>
                    <FiArrowRight
                      aria-hidden="true"
                      className="size-4 transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </article>
            ),
          )}
        </div>

        <div className="mt-12 flex flex-col gap-4 rounded-xl border border-slate-100 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
              Additional Logistics Support
            </p>
            <p className="mt-1 text-sm text-slate-600">
              Quayside marshaling, certified rigging crews, staging-yard storage, and rapid maintenance teams available on demand.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-blue-50 px-4 py-2.5 text-sm font-semibold text-blue-600 transition-colors hover:bg-blue-100"
          >
            Submit Fleet Needs <FiArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
