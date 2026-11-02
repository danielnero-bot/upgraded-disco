import { FiClipboard, FiTool, FiTruck } from "react-icons/fi";
import { Link } from "react-router-dom";
import PageIntro from "../components/PageIntro";
import ServicesSection from "../components/ServicesSection";

const deliverySteps = [
  {
    icon: FiClipboard,
    title: "Scope & assess",
    text: "Share cargo dimensions, weight, pickup and delivery points, timing and site constraints.",
  },
  {
    icon: FiTool,
    title: "Plan & prepare",
    text: "Review route feasibility, equipment configuration, lift requirements and journey controls.",
  },
  {
    icon: FiTruck,
    title: "Mobilize & deliver",
    text: "Coordinate the people, fleet and field support needed to execute the movement.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Core services"
        title="Specialized transport and lifting for demanding operations."
        description="Explore haulage, heavy lift, rig moves and equipment leasing for industrial projects across Nigeria."
        image="https://images.unsplash.com/photo-1513828583688-c52646e6e9a3?auto=format&fit=crop&w=2200&q=85"
      />
      <ServicesSection />
      <section className="bg-background py-16 text-foreground sm:py-20">
        <div className="container-x">
          <div className="mb-8 max-w-2xl">
            <p className="eyebrow mb-2 font-semibold text-navy">
              From brief to mobilization
            </p>
            <h2 className="text-3xl font-bold uppercase">
              A clear path to deployment
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {deliverySteps.map(({ icon: Icon, title, text }, index) => (
              <article
                key={title}
                className="border border-navy/10 bg-white p-6"
              >
                <div className="mb-5 flex items-center justify-between">
                  <Icon aria-hidden="true" className="size-6 text-navy" />
                  <span className="font-mono text-xs text-slate">
                    STEP / 0{index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold uppercase">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-foreground/70">
                  {text}
                </p>
              </article>
            ))}
          </div>
          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-2 bg-amber px-5 py-3 font-mono text-xs font-bold uppercase text-amber-foreground hover:bg-amber/90"
          >
            Discuss a requirement
          </Link>
        </div>
      </section>
    </>
  );
}
