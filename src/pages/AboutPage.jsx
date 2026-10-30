import {
  FiArrowUpRight,
  FiClipboard,
  FiMapPin,
  FiShield,
  FiTruck,
} from "react-icons/fi";
import PageIntro from "../components/PageIntro";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const operatingPrinciples = [
  {
    icon: FiClipboard,
    number: "01",
    title: "Plan before mobilization",
    description:
      "Start with the cargo, route and destination. Build a movement plan around access, timing and operational constraints.",
  },
  {
    icon: FiTruck,
    number: "02",
    title: "Match equipment to the work",
    description:
      "Coordinate prime movers, lowbeds, cranes and field support to suit the specific transport or lifting requirement.",
  },
  {
    icon: FiShield,
    number: "03",
    title: "Keep safety in the plan",
    description:
      "Use clear responsibilities, equipment checks and journey controls throughout the assignment.",
  },
];

const clientTypes = [
  "Energy operators",
  "Engineering contractors",
  "Fabrication yards",
  "Infrastructure developers",
];

export default function AboutPage() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(pageRef.current.querySelectorAll('.reveal'), {
        opacity: 0,
        y: 30,
        stagger: 0.12,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: pageRef.current,
          start: 'top 80%',
        },
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>
      <PageIntro
        eyebrow="About Kobbs Global"
        title="Built around the realities of industrial movement."
        description="Kobbs Global Services Nigeria Limited coordinates haulage, heavy-lift and oilfield logistics for demanding work across Nigeria’s energy and infrastructure sectors."
        image="https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?auto=format&fit=crop&w=2200&q=85"
        className="reveal"
      />

      <section className="bg-background py-14 text-foreground sm:py-20 reveal">
        <div className="container-x grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <p className="eyebrow mb-3 font-semibold text-navy reveal">
              Industrial logistics from the Niger Delta
            </p>
            <h2 className="max-w-xl text-3xl font-bold uppercase leading-tight sm:text-4xl reveal">
              One coordinated team for complex cargo moves.
            </h2>
            <div className="mt-5 max-w-2xl space-y-4 text-base leading-7 text-foreground/75 reveal">
              <p>
                Moving heavy or out-of-gauge cargo takes more than transport
                capacity. Routes, equipment configuration, lifting requirements
                and site conditions all need to work together.
              </p>
              <p>
                Kobbs Global brings those moving parts into one operational
                plan, supporting industrial clients from early assessment
                through field execution.
              </p>
            </div>
          </div>
          <figure className="relative min-h-72 overflow-hidden bg-navy lg:col-span-6 lg:min-h-[26rem] reveal">
            <img
              src="https://images.unsplash.com/photo-1513828583688-c52646e6e9a3?auto=format&fit=crop&w=1400&q=85"
              alt="Cargo cranes at a working industrial port"
              className="absolute inset-0 size-full object-cover"
              loading="lazy"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-charcoal/95 to-transparent px-5 pb-5 pt-20 text-ink sm:px-7 sm:pb-7">
              <p className="font-mono text-xs font-semibold uppercase text-amber">
                Regional operating base
              </p>
              <p className="mt-1 flex items-start gap-2 text-sm leading-6 sm:text-base">
                <FiMapPin aria-hidden="true" className="mt-1 shrink-0 text-amber" />
                Federal Lighter Terminal, Onne Port, Rivers State
              </p>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-charcoal py-14 text-ink sm:py-20 reveal">
        <div className="container-x">
          <div className="mb-8 grid gap-4 md:grid-cols-2 md:items-end">
            <div>
              <p className="eyebrow mb-2 font-semibold text-amber reveal">
                How we work
              </p>
              <h2 className="max-w-xl text-3xl font-bold uppercase leading-tight sm:text-4xl reveal">
                Preparation is part of the service.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-ink-muted md:justify-self-end reveal">
              Each assignment is shaped around its cargo, route and operating
              environment, with technical coordination and safety considered
              from the outset.
            </p>
          </div>

          <div className="grid gap-px border border-white/10 bg-white/10 md:grid-cols-3 reveal">
            {operatingPrinciples.map(({ icon: Icon, number, title, description }) => (
              <article key={number} className="bg-navy p-5 sm:p-6 reveal">
                <div className="mb-8 flex items-center justify-between">
                  <Icon aria-hidden="true" className="size-6 text-amber" />
                  <span className="font-mono text-xs text-slate">APPROACH / {number}</span>
                </div>
                <h3 className="max-w-xs text-xl font-bold uppercase leading-6 reveal">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-ink-muted reveal">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-12 text-foreground sm:py-16 reveal">
        <div className="container-x flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="eyebrow mb-2 font-semibold text-navy reveal">Working together</p>
            <h2 className="text-2xl font-bold uppercase sm:text-3xl reveal">
              Supporting teams across the project lifecycle.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 reveal">
            {clientTypes.map((clientType) => (
              <span
                key={clientType}
                className="border border-navy/15 px-3 py-2 text-sm text-foreground/75"
              >
                {clientType}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-12 text-ink sm:py-16 reveal">
        <div className="container-x flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow mb-2 font-semibold text-amber reveal">Start a conversation</p>
            <h2 className="text-2xl font-bold uppercase sm:text-3xl reveal">
              Tell us what your operation needs to move.
            </h2>
          </div>
          <a
            href="/contact"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 bg-amber px-5 py-3 font-mono text-xs font-bold uppercase text-amber-foreground transition-colors hover:bg-amber/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink reveal"
          >
            Contact our team <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </section>
    </div>
  );
}

  return (
    <>
      <PageIntro
        eyebrow="About Kobbs Global"
        title="Built around the realities of industrial movement."
        description="Kobbs Global Services Nigeria Limited coordinates haulage, heavy-lift and oilfield logistics for demanding work across Nigeria’s energy and infrastructure sectors."
        image="https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?auto=format&fit=crop&w=2200&q=85"
      />

      <section className="bg-background py-14 text-foreground sm:py-20">
        <div className="container-x grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <p className="eyebrow mb-3 font-semibold text-navy">
              Industrial logistics from the Niger Delta
            </p>
            <h2 className="max-w-xl text-3xl font-bold uppercase leading-tight sm:text-4xl">
              One coordinated team for complex cargo moves.
            </h2>
            <div className="mt-5 max-w-2xl space-y-4 text-base leading-7 text-foreground/75">
              <p>
                Moving heavy or out-of-gauge cargo takes more than transport
                capacity. Routes, equipment configuration, lifting requirements
                and site conditions all need to work together.
              </p>
              <p>
                Kobbs Global brings those moving parts into one operational
                plan, supporting industrial clients from early assessment
                through field execution.
              </p>
            </div>
          </div>
          <figure className="relative min-h-72 overflow-hidden bg-navy lg:col-span-6 lg:min-h-[26rem]">
            <img
              src="https://images.unsplash.com/photo-1513828583688-c52646e6e9a3?auto=format&fit=crop&w=1400&q=85"
              alt="Cargo cranes at a working industrial port"
              className="absolute inset-0 size-full object-cover"
              loading="lazy"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-charcoal/95 to-transparent px-5 pb-5 pt-20 text-ink sm:px-7 sm:pb-7">
              <p className="font-mono text-xs font-semibold uppercase text-amber">
                Regional operating base
              </p>
              <p className="mt-1 flex items-start gap-2 text-sm leading-6 sm:text-base">
                <FiMapPin
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-amber"
                />
                Federal Lighter Terminal, Onne Port, Rivers State
              </p>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-charcoal py-14 text-ink sm:py-20">
        <div className="container-x">
          <div className="mb-8 grid gap-4 md:grid-cols-2 md:items-end">
            <div>
              <p className="eyebrow mb-2 font-semibold text-amber">
                How we work
              </p>
              <h2 className="max-w-xl text-3xl font-bold uppercase leading-tight sm:text-4xl">
                Preparation is part of the service.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-ink-muted md:justify-self-end">
              Each assignment is shaped around its cargo, route and operating
              environment, with technical coordination and safety considered
              from the outset.
            </p>
          </div>
          <div className="grid gap-px border border-white/10 bg-white/10 md:grid-cols-3">
            {operatingPrinciples.map(
              ({ icon: Icon, number, title, description }) => (
                <article key={number} className="bg-navy p-5 sm:p-6">
                  <div className="mb-8 flex items-center justify-between">
                    <Icon aria-hidden="true" className="size-6 text-amber" />
                    <span className="font-mono text-xs text-slate">
                      APPROACH / {number}
                    </span>
                  </div>
                  <h3 className="max-w-xs text-xl font-bold uppercase leading-6">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-ink-muted">
                    {description}
                  </p>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="bg-background py-12 text-foreground sm:py-16">
        <div className="container-x flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="eyebrow mb-2 font-semibold text-navy">
              Working together
            </p>
            <h2 className="text-2xl font-bold uppercase sm:text-3xl">
              Supporting teams across the project lifecycle.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {clientTypes.map((clientType) => (
              <span
                key={clientType}
                className="border border-navy/15 px-3 py-2 text-sm text-foreground/75"
              >
                {clientType}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-12 text-ink sm:py-16">
        <div className="container-x flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow mb-2 font-semibold text-amber">
              Start a conversation
            </p>
            <h2 className="text-2xl font-bold uppercase sm:text-3xl">
              Tell us what your operation needs to move.
            </h2>
          </div>
          <a
            href="/contact"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 bg-amber px-5 py-3 font-mono text-xs font-bold uppercase text-amber-foreground transition-colors hover:bg-amber/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            Contact our team <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </section>
    </>
  );
}
