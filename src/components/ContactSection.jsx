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
    <section id="contact" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50/50 via-white to-white p-8 sm:p-12 lg:p-16 shadow-lg shadow-blue-50/60">
          <div className="relative max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-100/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700">
              Dispatch & Assessment
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Ready to mobilize your next industrial project?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              Share your heavy-lift specifications, road transport route, or rig mobilization schedule. Our technical logistics team will evaluate the requirements and deliver an actionable technical quote.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:kobbs@kobbsglobal.com?subject=Project%20quote%20request"
                className="inline-flex min-h-12 items-center gap-2.5 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md active:scale-[0.98]"
              >
                <span>Request a Project Quote</span>
                <FiArrowRight aria-hidden="true" className="size-4" />
              </a>
              <a
                href="tel:+2348037080258"
                className="inline-flex min-h-12 items-center gap-2.5 rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50"
              >
                <FiPhone aria-hidden="true" className="size-4 text-blue-600" />
                <span>Call Operations Desk</span>
              </a>
            </div>

            <div className="mt-12 grid gap-6 border-t border-slate-200/80 pt-8 sm:grid-cols-3">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="space-y-1">
                  <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    <Icon aria-hidden="true" className="size-3.5 text-blue-600" />
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="block text-sm font-semibold text-slate-900 transition-colors hover:text-blue-600"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-slate-700">{value}</p>
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
