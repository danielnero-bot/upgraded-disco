import { FiCompass, FiGlobe, FiShield } from "react-icons/fi";
import CapabilitiesSection from "../components/CapabilitiesSection";
import PageIntro from "../components/PageIntro";
import WhyChooseUsSection from "../components/WhyChooseUsSection";

const principles = [
  {
    icon: FiCompass,
    title: "Plan the route",
    text: "Assess cargo, route conditions and operational constraints before mobilization.",
  },
  {
    icon: FiShield,
    title: "Protect the operation",
    text: "Coordinate people, equipment and controls around each movement’s risk profile.",
  },
  {
    icon: FiGlobe,
    title: "Work locally",
    text: "Operate from the Onne and Port Harcourt logistics corridor with regional context.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About Kobbs Global"
        title="Industrial logistics, built around the realities of the route."
        description="Kobbs Global Services Nigeria Limited supports industrial, energy and infrastructure work with haulage, heavy-lift and oilfield logistics from the Niger Delta."
        image="https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?auto=format&fit=crop&w=2200&q=85"
      />
      <section className="bg-charcoal py-14 text-ink sm:py-16">
        <div className="container-x grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-3 font-semibold text-amber">
              Our operating approach
            </p>
            <h2 className="text-3xl font-bold uppercase leading-tight">
              Practical planning for high-consequence moves.
            </h2>
          </div>
          <p className="text-base leading-7 text-ink-muted lg:col-span-7">
            Complex cargo movements demand more than vehicles and lifting
            equipment. Our work brings route planning, fleet coordination,
            technical preparation and field oversight together around the
            requirements of each assignment.
          </p>
        </div>
        <div className="container-x mt-8 grid gap-4 md:grid-cols-3">
          {principles.map(({ icon: Icon, title, text }) => (
            <article key={title} className="border border-white/10 bg-navy p-5">
              <Icon aria-hidden="true" className="mb-4 size-6 text-amber" />
              <h3 className="font-display text-lg font-bold uppercase">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-ink-muted">{text}</p>
            </article>
          ))}
        </div>
      </section>
      <CapabilitiesSection />
      <WhyChooseUsSection />
    </>
  );
}
