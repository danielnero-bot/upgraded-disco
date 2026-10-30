import {
  FiArrowRight,
  FiTruck,
  FiAnchor,
  FiSettings,
  FiLayers,
} from "react-icons/fi";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: FiTruck,
    number: "01",
    title: "Haulage & transportation",
    description:
      "Overland transit for industrial plant components, line pipes, tubulars and oversized cargo, with dedicated pilot-escort coordination.",
    image:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1000&q=85",
    alt: "Heavy transport truck on an industrial road",
  },
  {
    icon: FiLayers,
    number: "02",
    title: "Heavy lift & craneage",
    description:
      "Engineered lifting, tandem crane operations and precision offloading for structural fabrications, offshore packages and pressure vessels.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=85",
    alt: "Industrial construction and lifting equipment at a worksite",
  },
  {
    icon: FiAnchor,
    number: "03",
    title: "Rig move operations",
    description:
      "End-to-end relocation of land and swamp drilling rigs, heavy mud pumps and camp modules under rigorous HSE protocols.",
    image:
      "https://images.unsplash.com/photo-1513828583688-c52646e6e9a3?auto=format&fit=crop&w=1000&q=85",
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

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current.querySelectorAll('.reveal'), {
        opacity: 0,
        y: 30,
        stagger: 0.12,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="bg-charcoal py-16 text-ink sm:py-20 lg:py-24"
    >
      <div className="container-x">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow mb-2 font-semibold text-amber reveal">
              Operational deployment portfolio
            </p>
            <h2 className="text-3xl font-bold uppercase sm:text-4xl reveal">
              Core specialized services
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-ink-muted reveal">
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
                className="group flex min-h-124 flex-col overflow-hidden bg-navy reveal"
              >
                <div className="relative h-56 shrink-0 overflow-hidden bg-slate/20">
                  <img
                    src={image}
                    alt={alt}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 bg-charcoal/90 px-2 py-1 font-mono text-xs uppercase text-ink">
                    Service / {number}
                  </span>
                  {featured && (
                    <span className="absolute right-0 top-0 bg-amber px-3 py-1 font-mono text-[0.65rem] font-bold uppercase text-amber-foreground">
                      Primary specialty
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-3 flex size-9 items-center justify-center border border-white/10 text-amber">
                    <Icon aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold uppercase leading-6 transition-colors group-hover:text-amber">
                    {title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-ink-muted">
                    {description}
                  </p>
                  <a
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase text-amber focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber"
                  >
                    Discuss this service{' '}
                    <FiArrowRight
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </article>
            )
          )}
        </div>

        <div className="mt-5 flex flex-col gap-4 border-l-2 border-amber bg-white/5 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-mono text-xs font-semibold uppercase text-amber">
              Additional logistical support
            </p>
            <p className="mt-1 max-w-3xl text-sm leading-6 text-ink-muted">
              Field mechanical maintenance, certified rigging crews, quayside
              marshaling and staging-yard storage can be mobilized on request.
            </p>
          </div>
          <a
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 font-mono text-xs font-semibold uppercase text-ink hover:text-amber"
          >
            Submit fleet requirements <FiArrowRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
