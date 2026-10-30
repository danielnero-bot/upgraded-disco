import { FiShield, FiClipboard, FiUsers, FiAward, FiArrowUpRight } from "react-icons/fi";

const safeguards = [
  { icon: FiClipboard, title: "Journey management plans", text: "Routes are mapped with speed controls, driver-rest windows, route constraints and emergency muster points before mobilization." },
  { icon: FiUsers, title: "Pre-mobilization checks", text: "Vehicle and equipment inspections are paired with toolbox briefings that address the hazards of each assignment." },
  { icon: FiAward, title: "Trained crews", text: "Drivers, operators and rigging personnel receive role-specific training for safe transport and lifting operations." },
];

const documents = ["HSE management manual", "Journey management plan template", "Risk assessment matrix", "Nigerian content compliance information"];

export default function SafetySection() {
  return (
    <section id="safety" className="bg-navy py-16 text-ink sm:py-20 lg:py-24">
      <div className="container-x">
        <div className="mb-10 flex flex-col gap-3 border-l-4 border-amber bg-amber p-5 text-amber-foreground sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3"><FiShield aria-hidden="true" className="size-7 shrink-0" /><p className="text-lg font-bold uppercase">Safety first / Operational integrity / Zero-harm ambition</p></div>
          <span className="w-fit bg-charcoal px-3 py-2 font-mono text-xs font-semibold uppercase text-amber">Policy: KGS-HSE-ZERO-HARM</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="space-y-6 lg:col-span-7">
            <div>
              <p className="eyebrow font-semibold text-amber">Field safety management</p>
              <h2 className="mt-2 text-3xl font-bold uppercase leading-tight sm:text-4xl">HSE standards on every route and lift</h2>
              <p className="mt-4 max-w-3xl text-base leading-7 text-ink-muted">In heavy industrial haulage and craneage, safety is the foundation of the operation. Our approach centers on proactive risk assessment, equipment integrity and clear personnel accountability.</p>
            </div>
            <div className="space-y-3">
              {safeguards.map(({ icon: Icon, title, text }) => (
                <article key={title} className="flex gap-4 border border-white/5 bg-charcoal p-4 sm:p-5">
                  <Icon aria-hidden="true" className="mt-1 size-6 shrink-0 text-amber" />
                  <div><h3 className="font-display text-lg font-bold uppercase">{title}</h3><p className="mt-1 text-sm leading-6 text-ink-muted">{text}</p></div>
                </article>
              ))}
            </div>
          </div>

          <aside className="border border-white/10 bg-charcoal p-6 sm:p-7 lg:col-span-5">
            <div className="mb-4 flex items-center gap-2 font-mono text-xs font-semibold uppercase text-amber"><FiShield aria-hidden="true" />HSE documentation</div>
            <h3 className="text-2xl font-bold uppercase">Client audit packs & manuals</h3>
            <p className="mt-3 text-sm leading-6 text-ink-muted">Procurement and vetting teams may request relevant HSE materials and pre-qualification information for contract review.</p>
            <ul className="my-6 divide-y divide-white/10 border-y border-white/10 bg-black/20 px-4">
              {documents.map((document) => <li key={document} className="flex items-center justify-between gap-3 py-3 text-xs"><span className="uppercase text-ink-muted">{document}</span><span className="shrink-0 font-mono text-[0.65rem] font-semibold uppercase text-amber">On request</span></li>)}
            </ul>
            <a href="#contact" className="inline-flex min-h-12 w-full items-center justify-center gap-2 bg-white/5 px-4 py-3 text-center font-mono text-xs font-semibold uppercase transition-colors hover:bg-white/10 hover:text-amber focus-visible:outline-2 focus-visible:outline-amber">Request HSE information <FiArrowUpRight aria-hidden="true" /></a>
          </aside>
        </div>
      </div>
    </section>
  );
}