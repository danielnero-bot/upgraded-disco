import { FiClipboard, FiTool, FiTruck, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import PageIntro from "../components/PageIntro";
import ServicesSection from "../components/ServicesSection";
import img from "../assets/thumbnail (6).jpg";

const deliverySteps = [
  {
    icon: FiClipboard,
    title: "Scope & Assess",
    text: "Review cargo dimensions, tonnages, origin and destination points, timing windows, and specific site constraints.",
  },
  {
    icon: FiTool,
    title: "Plan & Prepare",
    text: "Conduct civil route surveys, bridge load verifications, crane capacity studies, and journey management protocols.",
  },
  {
    icon: FiTruck,
    title: "Mobilize & Deliver",
    text: "Deploy certified operators, prime movers, pilot escorts, and technical field supervisors to execute safe transport.",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <PageIntro
        eyebrow="Core Services"
        title="Specialized transport and lifting for demanding operations."
        description="Comprehensive haulage, engineered heavy lift, drilling rig relocation, and equipment leasing for high-stakes industrial projects across Nigeria."
        image={img}
      />
      <ServicesSection />
      
      {/* Workflow Section */}
      <section className="bg-white py-16 sm:py-20 border-t border-slate-100">
        <div className="container-x">
          <div className="mb-12 max-w-2xl">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-blue-600">
              Execution Process
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              From initial brief to mobilization
            </h2>
            <p className="mt-3 text-base text-slate-500">
              A disciplined, three-stage workflow ensuring seamless mobilization and risk-free execution.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {deliverySteps.map(({ icon: Icon, title, text }, index) => (
              <article
                key={title}
                className="group rounded-xl border border-slate-100 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-100 hover:shadow-lg hover:shadow-blue-50/50"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex size-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Icon aria-hidden="true" className="size-6" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Step 0{index + 1}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">{title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-500">
                  {text}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 active:scale-[0.98]"
            >
              <span>Discuss a Requirement</span>
              <FiArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
