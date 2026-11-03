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
    title: "Plan Before Mobilization",
    description:
      "Start with the cargo geometry, route survey, and destination. Build every movement plan around road clearances, bridge capacities, and timing.",
  },
  {
    icon: FiTruck,
    number: "02",
    title: "Match Equipment to the Work",
    description:
      "Pair prime movers, multi-axle lowbeds, rough-terrain cranes, and pilot escorts to suit the unique weight and terrain parameters.",
  },
  {
    icon: FiShield,
    number: "03",
    title: "Keep Safety Non-Negotiable",
    description:
      "Maintain clear task responsibilities, daily toolbox briefings, and journey management checkpoints across every transit phase.",
  },
];

const clientTypes = [
  "Energy Operators",
  "Engineering Contractors (EPC)",
  "Heavy Fabrication Yards",
  "Infrastructure Developers",
  "Drilling Services Companies",
];

export default function AboutPage() {
  const pageRef = useRef(null);

  useScrollReveal(pageRef, { stagger: 0.1 });

  return (
    <div ref={pageRef} className="bg-white">
      <PageIntro
        eyebrow="About Kobbs Global"
        title="Built around the demanding realities of industrial movement."
        description="Established in 1997, Kobbs Global Services Nigeria Limited delivers specialized haulage, heavy-lift craneage, rig-move logistics, and equipment leasing across Nigeria's energy corridor."
        image={pict}
        className="reveal"
      />

      {/* Story & Operating Base */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600">
              <span className="size-1.5 rounded-full bg-blue-600" />
              Niger Delta Operations
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              One coordinated team for complex cargo moves.
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-600">
              <p>
                Kobbs Global Services Nigeria Limited was established in 1997 and has spent over two decades operating across Nigeria’s oil and gas, construction, and maritime infrastructure sectors.
              </p>
              <p>
                Our reputation is anchored in disciplined route planning, verified lifting engineering, and end-to-end field coordination. By combining specialized trailers with experienced operations personnel, we safeguard critical assets across challenging terrain.
              </p>
            </div>
          </div>

          <figure className="relative min-h-80 overflow-hidden rounded-2xl border border-slate-100 shadow-xl shadow-slate-100/60 lg:col-span-6 lg:min-h-[28rem] group">
            <img
              src={pic}
              alt="Cargo cranes at a working industrial port"
              className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
            <figcaption className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/20 bg-white/95 p-4 shadow-lg backdrop-blur-sm sm:p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                Regional Operating Base
              </p>
              <p className="mt-1 flex items-start gap-2 text-sm font-medium text-slate-800">
                <FiMapPin
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-blue-600"
                />
                Ambassador Nne Furo Kurubo, Model Secondary School Road, Onne, Port Harcourt, Rivers State.
              </p>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-12 sm:py-16 border-y border-slate-100">
        <div className="container-x grid gap-8 md:grid-cols-2">
          <article className="rounded-xl border border-slate-100 bg-white p-8 shadow-sm">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
              Our Mission
            </span>
            <p className="mt-3 text-xl font-bold leading-relaxed text-slate-900">
              Provide safe, engineered, and dependable haulage and heavy-lift logistics that protect client assets and accelerate project timelines.
            </p>
          </article>
          <article className="rounded-xl border border-slate-100 bg-white p-8 shadow-sm">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
              Our Vision
            </span>
            <p className="mt-3 text-xl font-bold leading-relaxed text-slate-900">
              To remain the primary indigenous partner of choice for high-consequence transport and equipment operations across West Africa.
            </p>
          </article>
        </div>
      </section>

      {/* Operating Principles */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="container-x">
          <div className="mb-12 max-w-2xl">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-blue-600">
              Our Execution Model
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Preparation is part of the service.
            </h2>
            <p className="mt-3 text-base text-slate-500">
              Each mobilization is tailored around cargo weight distribution, bridge clearances, and route hazards to guarantee zero surprises.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {operatingPrinciples.map(
              ({ icon: Icon, number, title, description }) => (
                <article
                  key={number}
                  className="group rounded-xl border border-slate-100 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-100 hover:shadow-lg hover:shadow-blue-50/50"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex size-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon aria-hidden="true" className="size-6" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Step {number}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-500">
                    {description}
                  </p>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Sectors Supported */}
      <section className="bg-white py-14 sm:py-16 border-t border-slate-100">
        <div className="container-x flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
              Sectors Served
            </p>
            <h2 className="mt-1 text-2xl font-bold text-slate-900 sm:text-3xl">
              Supporting teams across project lifecycles.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {clientTypes.map((clientType) => (
              <span
                key={clientType}
                className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
              >
                {clientType}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white py-14 sm:py-18">
        <div className="container-x">
          <div className="flex flex-col gap-6 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50/60 to-white p-8 sm:flex-row sm:items-center sm:justify-between sm:p-12 shadow-sm">
            <div className="max-w-xl">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                Start a Conversation
              </span>
              <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                Tell us what your operation needs to move.
              </h2>
            </div>
            <Link
              to="/contact"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 active:scale-[0.98]"
            >
              <span>Contact Operations Desk</span>
              <FiArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
