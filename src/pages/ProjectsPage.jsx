import { FiFileText, FiMapPin, FiTruck } from "react-icons/fi";
import PageIntro from "../components/PageIntro";
import ProjectsSection from "../components/ProjectsSection";

const projectFactors = [
  {
    icon: FiMapPin,
    title: "Route Context & Clearances",
    text: "Port approaches, swamp accessways, fabrication yards, and inland corridors each require custom route clearance assessments.",
  },
  {
    icon: FiTruck,
    title: "Precision Cargo Handling",
    text: "Equipment configuration, axle loading calculations, and lashing methods aligned directly to structural engineering limits.",
  },
  {
    icon: FiFileText,
    title: "Documented Qualification Scope",
    text: "Historical reference verification, audited client scopes, and equipment manifest packs available upon request.",
  },
];

export default function ProjectsPage() {
  return (
    <div className="bg-white">
      <PageIntro
        eyebrow="Project Experience"
        title="Operational track record across Nigeria’s energy corridor."
        description="A selection of historical transportation and logistics assignments across deepwater developments, industrial fabrication yards, and maritime operations."
        image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2200&q=85"
      />
      <ProjectsSection />
      
      {/* Methodology Section */}
      <section className="bg-white py-16 sm:py-20 border-t border-slate-100">
        <div className="container-x">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-blue-600">
            Execution Standards
          </p>
          <h2 className="mb-10 max-w-2xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            The engineering details behind every successful mobilization
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {projectFactors.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="group rounded-xl border border-slate-100 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-100 hover:shadow-lg hover:shadow-blue-50/50"
              >
                <div className="mb-5 flex size-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Icon aria-hidden="true" className="size-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-500">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
