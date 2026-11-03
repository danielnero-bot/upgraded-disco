import {
  FiArrowUpRight,
  FiClipboard,
  FiMapPin,
  FiShield,
  FiTruck,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import PageIntro from "../components/PageIntro";
import { useRef } from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import pic from "../assets/thumbnail.jpg";
import pict from "../assets/2015-05-17 12.13.41(1).jpg";

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

  useScrollReveal(pageRef, { stagger: 0.12 });

  return (
    <div ref={pageRef}>
      <PageIntro
        eyebrow="About Kobbs Global"
        title="Built around the realities of industrial movement."
        description="Established in 1997, Kobbs Global Services Nigeria Limited supports haulage, heavy-lift, rig-move and equipment-leasing operations across oil and gas, construction and energy projects."
        image={pict}
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
                Kobbs Global Services Nigeria Limited was established in 1997
                and has operated across Nigeria’s oil and gas, construction and
                energy sectors, providing haulage, heavy-lift and rig-move
                support for complex industrial assignments.
              </p>
              <p>
                The company’s work is built around disciplined route planning,
                equipment matching and operational coordination, with an
                emphasis on safe movement planning and field execution.
              </p>
            </div>
          </div>
          <figure className="relative min-h-72 overflow-hidden border border-border bg-white lg:col-span-6 lg:min-h-104 reveal">
            <img
              src={pic}
              alt="Cargo cranes at a working industrial port"
              className="absolute inset-0 size-full object-cover"
              loading="lazy"
            />
            <figcaption className="absolute inset-x-0 bottom-0 border-t border-border bg-white/95 px-5 py-4 text-navy sm:px-7 sm:py-5">
              <p className="font-mono text-xs font-semibold uppercase text-amber-foreground">
                Regional operating base
              </p>
              <p className="mt-1 flex items-start gap-2 text-sm leading-6 sm:text-base">
                <FiMapPin
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-amber-foreground"
                />
                Ambassador Nne Furo Kurubo, Model Secondary School Road, Onne,
                Port Harcourt, Rivers State.
              </p>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-white py-12 text-navy sm:py-16">
        <div className="container-x grid gap-6 md:grid-cols-2">
          <article className="border-t-2 border-amber pt-5">
            <p className="eyebrow mb-2 font-semibold text-amber-foreground">
              Our mission
            </p>
            <p className="max-w-xl text-lg font-semibold leading-7">
              Coordinate dependable haulage, heavy-lift and rig-move support
              for complex industrial operations.
            </p>
          </article>
          <article className="border-t border-border pt-5">
            <p className="eyebrow mb-2 font-semibold text-amber-foreground">
              Our vision
            </p>
            <p className="max-w-xl text-lg font-semibold leading-7">
              Be a trusted Nigerian logistics partner for challenging cargo
              movements across the energy and infrastructure sectors.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-white py-14 text-navy sm:py-20 reveal">
        <div className="container-x">
          <div className="mb-8 grid gap-4 md:grid-cols-2 md:items-end">
            <div>
              <p className="eyebrow mb-2 font-semibold text-amber-foreground reveal">
                How we work
              </p>
              <h2 className="max-w-xl text-3xl font-bold uppercase leading-tight sm:text-4xl reveal">
                Preparation is part of the service.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate md:justify-self-end reveal">
              Each assignment is shaped around its cargo, route and operating
              environment, with technical coordination and safety considered
              from the outset.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3 reveal">
            {operatingPrinciples.map(
              ({ icon: Icon, number, title, description }) => (
                <article key={number} className="border border-border bg-white p-5 sm:p-6 reveal">
                  <div className="mb-8 flex items-center justify-between">
                    <Icon aria-hidden="true" className="size-6 text-amber-foreground" />
                    <span className="font-mono text-xs text-slate">
                      APPROACH / {number}
                    </span>
                  </div>
                  <h3 className="max-w-xs text-xl font-bold leading-6 reveal">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate reveal">
                    {description}
                  </p>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="bg-background py-12 text-foreground sm:py-16 reveal">
        <div className="container-x flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="eyebrow mb-2 font-semibold text-navy reveal">
              Working together
            </p>
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

      <section className="bg-white py-12 text-navy sm:py-16 reveal">
        <div className="container-x border-y border-border py-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow mb-2 font-semibold text-amber-foreground reveal">
                Start a conversation
              </p>
              <h2 className="text-2xl font-bold sm:text-3xl reveal">
                Tell us what your operation needs to move.
              </h2>
            </div>
            <Link
              to="/contact"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 bg-amber px-5 py-3 text-sm font-bold text-navy transition-colors hover:bg-amber/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber reveal"
            >
              Contact our team <FiArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
