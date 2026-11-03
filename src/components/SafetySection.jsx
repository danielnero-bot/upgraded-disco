import {
  FiShield,
  FiClipboard,
  FiUsers,
  FiAward,
  FiArrowUpRight,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const safeguards = [
  {
    icon: FiClipboard,
    title: "Journey Management Plans",
    text: "Precise route mapping with speed constraints, driver-rest schedules, hazard locations, and designated emergency muster points.",
  },
  {
    icon: FiUsers,
    title: "Pre-Mobilization Audits",
    text: "Mandatory mechanical inspections paired with daily safety toolbox talks that address assignment-specific risks.",
  },
  {
    icon: FiAward,
    title: "Certified Operational Crews",
    text: "Heavy-duty drivers, crane operators, and rigging personnel holding accredited technical certifications for heavy lifting.",
  },
];

const documents = [
  "Corporate HSE Management Manual",
  "Standard Journey Management Plan Template",
  "Project Risk Assessment Matrix (RAM)",
  "Nigerian Content Compliance Dossier",
];

export default function SafetySection() {
  return (
    <section id="safety" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="container-x">
        {/* Banner */}
        <div className="mb-12 flex flex-col gap-4 rounded-xl border border-slate-100 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              <FiShield aria-hidden="true" className="size-6 shrink-0" />
            </div>
            <div>
              <p className="text-base font-bold text-slate-900">
                Safety First · Operational Integrity · Zero-Harm Mandate
              </p>
              <p className="text-xs text-slate-500">
                Every mile surveyed, every lift calculated, zero compromise.
              </p>
            </div>
          </div>
          <span className="w-fit rounded-full bg-blue-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600">
            Zero-Harm Policy
          </span>
        </div>

        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="space-y-6 lg:col-span-7">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-blue-600">
                Field HSE Governance
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Rigorous safety standards on every haul and lift
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                In heavy industrial transport and engineered craneage, safety is the prerequisite for all operations. We combine systematic risk engineering, strict equipment certifications, and trained personnel.
              </p>
            </div>

            <div className="space-y-4">
              {safeguards.map(({ icon: Icon, title, text }) => (
                <article
                  key={title}
                  className="flex gap-4 rounded-xl border border-slate-100 bg-white p-5 shadow-sm transition-all duration-200 hover:border-blue-100 hover:shadow-md"
                >
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <Icon aria-hidden="true" className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      {title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500">
                      {text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="rounded-2xl border border-slate-100 bg-white p-7 shadow-lg shadow-slate-100/60 lg:col-span-5">
            <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600">
              <FiShield aria-hidden="true" />
              Compliance Documentation
            </div>
            <h3 className="text-2xl font-bold text-slate-900">
              Client Audit Packs & Manuals
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-slate-500">
              Contract vetting and procurement teams can request our verified HSE policy documents and pre-qualification packages.
            </p>

            <ul className="my-6 divide-y divide-slate-100 border-y border-slate-100">
              {documents.map((document) => (
                <li
                  key={document}
                  className="flex items-center justify-between gap-3 py-3.5 text-xs"
                >
                  <span className="font-medium text-slate-700">{document}</span>
                  <span className="shrink-0 rounded bg-slate-100 px-2 py-0.5 text-[0.7rem] font-semibold uppercase tracking-wider text-slate-600">
                    Available
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3">
              <Link
                to="/safety"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 active:scale-[0.98]"
              >
                <span>View HSE Policies</span>
                <FiArrowUpRight aria-hidden="true" className="size-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50"
              >
                <span>Request Verification Package</span>
                <FiArrowUpRight aria-hidden="true" className="size-4 text-slate-400" />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
