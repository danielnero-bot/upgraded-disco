import { FiArrowRight, FiCompass, FiShield, FiTruck } from "react-icons/fi";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import heroVideo from "../assets/designarena_video_4piic8up.mp4";

// Rule 6: Render stats strip only behind SHOW_STATS constant set to false
const SHOW_STATS = false;
const statsPlaceholders = [
  { value: "00+", label: "Completed Operations" },
  { value: "00+", label: "Prime Movers & Heavy Assets" },
  { value: "100%", label: "Zero-Harm Safety Record" },
  { value: "25+", label: "Years Industry Leadership" },
];

const operationalFacts = [
  {
    icon: FiCompass,
    label: "Registered Hub",
    value: "Ambassador Nne Furo Kurubo, Model Secondary School Road",
    detail: "Onne, Port Harcourt, Rivers State",
  },
  {
    icon: FiTruck,
    label: "Specialized Fleet",
    value: "Prime movers, multi-axle lowbeds & mobile cranes",
    detail: "Tandem haulage & swamp staging operations",
  },
  {
    icon: FiShield,
    label: "Safety Protocol",
    value: "Journey management & zero-harm mandate",
    detail: "Rigging safety audits & comprehensive risk checks",
  },
];

export default function HeroSection() {
  return (
    <section id="home" className="bg-white text-navy-900">
      <div
        className="relative isolate flex min-h-[36rem] items-center overflow-hidden bg-navy-950 pb-20 pt-28 sm:min-h-[40rem] sm:pb-24 sm:pt-36 lg:min-h-[44rem]"
      >
        <Reveal
          as="video"
          variant="scale-in"
          trigger="mount"
          duration={0.9}
          delay={0.05}
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy-950/85 via-navy-950/55 to-navy-950/15" />

        <div className="container-x relative z-10 w-full">
          <Reveal
            as="div"
            className="max-w-3xl"
            trigger="mount"
            stagger={0.12}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-[var(--radius-card)] border border-white/30 bg-navy-950/35 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-xs backdrop-blur-sm">
              <span className="size-1.5 rounded-full bg-accent" />
              <span>Port Harcourt · Onne · Nigeria</span>
            </div>

            <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Moving industry forward.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
              Precision haulage, heavy-lift engineering, and industrial
              transportation solutions built for demanding energy and
              infrastructure projects across Nigeria.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center gap-2.5 rounded-[var(--radius-card)] bg-accent px-6 py-3 text-sm font-bold text-navy-950 shadow-xs transition-colors hover:bg-accent-hover active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <span>Request a quote</span>
                <FiArrowRight aria-hidden="true" className="size-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex min-h-12 items-center gap-2.5 rounded-[var(--radius-card)] border border-white/60 bg-navy-950/25 px-5 py-3 text-sm font-bold text-white transition-colors hover:border-white hover:bg-navy-950/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <span>Explore services</span>
                <FiArrowRight
                  aria-hidden="true"
                  className="size-4 text-white/75"
                />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="container-x pb-20 sm:pb-28 lg:pb-32">
        {/* Optional Stats Strip (Behind SHOW_STATS constant per Rule 6) */}
        {SHOW_STATS && (
          <Reveal
            as="div"
            className="mt-14 grid grid-cols-2 gap-4 rounded-[var(--radius-card)] border border-steel-200 bg-steel-50 p-6 sm:grid-cols-4"
            stagger={0.1}
          >
            {statsPlaceholders.map((stat) => (
              <div key={stat.label} className="text-center">
                {/* TODO: confirm with client */}
                <p className="text-3xl font-extrabold text-navy-900">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-steel-600">
                  {stat.label}
                </p>
              </div>
            ))}
          </Reveal>
        )}

        {/* Operational Highlights Cards */}
        <Reveal
          as="div"
          className="mt-16 grid gap-4 sm:grid-cols-3"
          stagger={0.1}
        >
          {operationalFacts.map(({ icon: Icon, label, value, detail }) => (
            <div
              key={label}
              className="group rounded-[var(--radius-card)] border border-steel-200 bg-white p-6 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-navy-700"
            >
              <div className="mb-3.5 inline-flex size-10 items-center justify-center rounded-[var(--radius-card)] bg-steel-100 text-navy-900 transition-colors group-hover:bg-navy-900 group-hover:text-white">
                <Icon aria-hidden="true" className="size-5" />
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-navy-700">
                {label}
              </p>
              <h3 className="mt-1.5 text-sm font-bold leading-snug text-navy-900">
                {value}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-steel-600">
                {detail}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
