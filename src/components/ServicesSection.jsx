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
    title: "Haulage & transportation",
    description:
      "Overland transit for industrial plant components, line pipes, tubulars and oversized cargo, with dedicated pilot-escort coordination.",
    image: Haulage,
    alt: "Heavy transport truck on an industrial road",
  },
  {
    icon: FiLayers,
    number: "02",
    title: "Heavy lift & craneage",
    description:
      "Engineered lifting, tandem crane operations and precision offloading for structural fabrications, offshore packages and pressure vessels.",
    image: Heavy,
    alt: "Industrial construction and lifting equipment at a worksite",
  },
  {
    icon: FiAnchor,
    number: "03",
    title: "Rig move operations",
    description:
      "End-to-end relocation of land and swamp drilling rigs, heavy mud pumps and camp modules under rigorous HSE protocols.",
    image: Rig,
    alt: "Large industrial port cranes and cargo operations",
    featured: true,
  },
  {
    icon: FiSettings,
    number: "04",
    title: "Equipment leasing",
    description:
      "Flexible hire of rough-terrain cranes, lowbeds, flatbeds and dedicated fleet trucks with mechanical support.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1000&q=85",
    alt: "Industrial operations team working with heavy equipment",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef(null);

  useScrollReveal(sectionRef, { stagger: 0.12 });

  return (
    <section
      id="services"
      ref={sectionRef}
      className="bg-white py-16 text-navy sm:py-20 lg:py-24"
    >
      <div className="container-x">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow mb-2 font-semibold text-amber-foreground reveal">
              Operational deployment portfolio
            </p>
            <h2 className="text-3xl font-bold uppercase sm:text-4xl reveal">
              Core specialized services
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate reveal">
            Industrial equipment and certified transport setups deployed under
            rigorous engineering protocols across maritime, swamp and dryland
            terrain.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
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
                className="group flex min-h-124 flex-col overflow-hidden border border-border bg-white transition-shadow duration-300 hover:shadow-lg reveal"
              >
                <div className="relative h-56 shrink-0 overflow-hidden bg-white">
                  <img
                    src={image}
                    alt={alt}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none"
                  />
                  <span                   className="absolute left-3 top-3 border border-border bg-white/95 px-2 py-1 font-mono text-xs uppercase text-navy">
                    Service / {number}
                  </span>
                  {featured && (
                    <span                     className="absolute right-0 top-0 bg-amber px-3 py-1 font-mono text-[0.65rem] font-bold uppercase text-navy">
                      Primary specialty
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-3 flex size-9 items-center justify-center border border-border text-amber-foreground">
                    <Icon aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold leading-6 transition-colors group-hover:text-amber-foreground">
                    {title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-slate">
                    {description}
                  </p>
                  <Link
                    to="/contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-amber-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber"
                  >
                    Discuss this service{" "}
                    <FiArrowRight
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </article>
            ),
          )}
        </div>

        <div className="mt-5 flex flex-col gap-4 border-y border-border py-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-mono text-xs font-semibold uppercase text-amber-foreground">
              Additional logistical support
            </p>
            <p className="mt-1 max-w-3xl text-sm leading-6 text-slate">
              Field mechanical maintenance, certified rigging crews, quayside
              marshaling and staging-yard storage can be mobilized on request.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-navy hover:text-amber-foreground"
          >
            Submit fleet requirements <FiArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
