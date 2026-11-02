import { FiFileText, FiMapPin, FiTruck } from "react-icons/fi";
import PageIntro from "../components/PageIntro";
import ProjectsSection from "../components/ProjectsSection";

const projectFactors = [
  {
    icon: FiMapPin,
    title: "Route context",
    text: "Port approaches, fabrication yards and inland corridors each bring distinct planning needs.",
  },
  {
    icon: FiTruck,
    title: "Cargo handling",
    text: "Equipment selection and load configuration are aligned to cargo and transit constraints.",
  },
  {
    icon: FiFileText,
    title: "Documented scope",
    text: "Formal project references and available verification material can be discussed on request.",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Project showcase"
        title="Operational experience across Nigeria’s energy corridor."
        description="A selection of historical transportation and logistics assignments across deepwater, fabrication and maritime operations."
        image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2200&q=85"
      />
      <ProjectsSection />
      <section className="bg-background py-16 text-foreground sm:py-20">
        <div className="container-x">
          <p className="eyebrow mb-2 font-semibold text-navy">
            How we approach assignments
          </p>
          <h2 className="mb-8 max-w-2xl text-3xl font-bold uppercase">
            The details behind a successful movement
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {projectFactors.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="border-t-2 border-amber bg-white p-5"
              >
                <Icon aria-hidden="true" className="mb-4 size-6 text-navy" />
                <h3 className="text-lg font-bold uppercase">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-foreground/70">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
