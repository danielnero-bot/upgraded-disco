import { FiArrowRight, FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const contactDetails = [
  { icon: FiMapPin, label: "Location base", value: "Onne Port, Rivers State, Nigeria" },
  { icon: FiPhone, label: "Dispatch phone", value: "+234 (0) 803 708 0258", href: "tel:+2348037080258" },
  { icon: FiMail, label: "Technical email", value: "info@kobbsglobal.com", href: "mailto:info@kobbsglobal.com" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="bg-charcoal py-16 text-ink sm:py-20 lg:py-24">
      <div className="container-x">
        <div className="relative overflow-hidden bg-navy p-6 sm:p-10 lg:p-14">
          <div aria-hidden="true" className="absolute -right-20 -top-20 size-80 rounded-full border border-white/5" />
          <div aria-hidden="true" className="absolute -right-8 -top-8 size-56 rounded-full border border-amber/10" />
          <div className="relative max-w-3xl">
            <p className="eyebrow font-semibold text-amber">Dispatch & project assessment desk</p>
            <h2 className="mt-3 text-3xl font-bold uppercase leading-tight sm:text-4xl">Planning your next industrial move?</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-ink-muted">Tell us about your transportation, heavy-lift or rig-move requirements. Our logistics team can review the scope and prepare a tailored technical assessment.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="mailto:info@kobbsglobal.com?subject=Project%20quote%20request" className="inline-flex min-h-12 items-center gap-3 bg-amber px-6 py-3 font-mono text-sm font-bold uppercase text-amber-foreground transition-colors hover:bg-amber/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink">Request a quote <FiArrowRight aria-hidden="true" /></a>
              <a href="tel:+2348037080258" className="inline-flex min-h-12 items-center gap-3 bg-white/5 px-5 py-3 font-mono text-sm font-semibold uppercase transition-colors hover:bg-white/10 hover:text-amber focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"><FiPhone aria-hidden="true" className="text-amber" />Speak with operations</a>
            </div>
            <div className="mt-9 grid gap-4 border border-white/10 bg-charcoal/80 p-5 sm:grid-cols-3">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <div key={label}>
                  <p className="mb-2 flex items-center gap-2 font-mono text-[0.65rem] font-semibold uppercase text-slate"><Icon aria-hidden="true" className="text-amber" />{label}</p>
                  {href ? <a href={href} className="text-sm font-medium text-ink hover:text-amber">{value}</a> : <p className="text-sm font-medium">{value}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}