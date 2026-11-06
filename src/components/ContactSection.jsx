import { FiArrowRight, FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const contactDetails = [
  {
    icon: FiMapPin,
    label: "Operations Address",
    value:
      "Ambassador Nne Furo Kurubo, Model Secondary School Road, Onne, Port Harcourt, Rivers State.",
  },
  {
    icon: FiPhone,
    label: "Direct Dispatch Line",
    value: "+234 (0) 803 708 0258",
    href: "tel:+2348037080258",
  },
  {
    icon: FiMail,
    label: "Logistics Email",
    value: "kobbs@kobbsglobal.com",
    href: "mailto:kobbs@kobbsglobal.com",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="bg-navy-900 py-24 lg:py-32">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[var(--radius-card)] border border-navy-800 p-8 sm:p-12 lg:p-16">
          {/* Subtle decorative rule */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

          <div className="relative max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-[var(--radius-card)] border border-navy-700 bg-navy-800 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-steel-200">
              Dispatch & Assessment
            </span>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to mobilize your next industrial project?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-steel-400 sm:text-lg">
              Share your heavy-lift specifications, road transport route, or rig mobilization schedule. Our technical logistics team will evaluate the requirements and deliver an actionable technical quote.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:kobbs@kobbsglobal.com?subject=Project%20quote%20request"
                className="inline-flex min-h-12 items-center gap-2.5 rounded-[var(--radius-card)] bg-accent px-6 py-3 text-sm font-bold text-navy-950 shadow-xs transition-colors hover:bg-accent-hover active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <span>Request a Project Quote</span>
                <FiArrowRight aria-hidden="true" className="size-4" />
              </a>
              <a
                href="tel:+2348037080258"
                className="inline-flex min-h-12 items-center gap-2.5 rounded-[var(--radius-card)] border border-navy-700 bg-navy-800 px-5 py-3 text-sm font-bold text-steel-200 transition-colors hover:border-steel-400 hover:bg-navy-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <FiPhone aria-hidden="true" className="size-4 text-accent" />
                <span>Call Operations Desk</span>
              </a>
            </div>

            <div className="mt-12 grid gap-6 border-t border-navy-800 pt-8 sm:grid-cols-3">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="space-y-1.5">
                  <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-steel-400">
                    <Icon aria-hidden="true" className="size-3.5 text-accent" />
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="block text-sm font-semibold text-steel-200 transition-colors hover:text-white focus-visible:outline-1 focus-visible:outline-accent"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-steel-400 leading-relaxed">{value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
