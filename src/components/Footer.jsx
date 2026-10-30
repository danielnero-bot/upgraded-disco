import logo from "../assets/logo1.png";

const footerGroups = [
  { title: "Services", links: [["Heavy haulage", "#services"], ["Engineered heavy lift", "#services"], ["Rig move logistics", "#services"], ["Equipment leasing", "#services"]] },
  { title: "Capabilities", links: [["Fleet support", "#about"], ["Route surveys", "#about"], ["Quayside logistics", "#about"], ["Niger Delta operations", "#projects"]] },
  { title: "Company", links: [["About Kobbs Global", "#about"], ["Project experience", "#projects"], ["HSE management", "#safety"], ["Contact & quotes", "#contact"]] },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-ink">
      <div className="container-x py-12 sm:py-14">
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-2 xl:grid-cols-5">
          <div className="space-y-5 xl:col-span-2">
            <a href="#home" aria-label="Kobbs Global home" className="inline-flex rounded-sm bg-white p-1.5"><img src={logo} alt="Kobbs Global Services logo" className="h-12 w-auto object-contain" /></a>
            <p className="max-w-md text-sm leading-6 text-ink-muted">Nigerian industrial haulage, heavy-lift logistics, rig-move operations and oilfield equipment leasing from the Niger Delta energy corridor.</p>
            <div className="border-l-2 border-amber bg-charcoal p-4 font-mono text-xs leading-5 text-ink-muted">
              <p className="font-semibold uppercase text-amber">Primary industrial base</p>
              <p className="mt-1">Federal Lighter Terminal, Onne Port Complex</p>
              <p>Port Harcourt, Rivers State, Nigeria</p>
              <a className="mt-2 inline-block text-ink hover:text-amber" href="tel:+2348037080258">+234 (0) 803 708 0258</a>
            </div>
          </div>

          {footerGroups.map(({ title, links }) => (
            <div key={title}>
              <h2 className="mb-4 font-mono text-xs font-semibold uppercase text-amber">{title}</h2>
              <nav aria-label={`${title} links`} className="flex flex-col gap-3">
                {links.map(([label, href]) => <a key={label} href={href} className="text-sm text-ink-muted transition-colors hover:text-amber">{label}</a>)}
              </nav>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-3 border border-white/5 bg-charcoal px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-ink-muted"><span className="font-mono text-xs font-semibold uppercase text-amber">Safety-first mandate</span><span className="ml-3">Operational planning built around safe, controlled mobilization.</span></p>
          <a className="shrink-0 font-mono text-xs uppercase text-ink-muted hover:text-amber" href="mailto:info@kobbsglobal.com">Contact Kobbs Global</a>
        </div>
        <div className="mt-5 flex flex-col gap-2 font-mono text-[0.65rem] uppercase text-slate sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Kobbs Global Services Nigeria Limited. RC 1493012.</p>
          <p>Onne Port / Port Harcourt / Nigeria</p>
        </div>
      </div>
    </footer>
  );
}