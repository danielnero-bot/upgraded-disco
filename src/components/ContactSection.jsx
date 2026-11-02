import { FiArrowRight, FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const contactDetails = [
  {
    icon: FiMapPin,
    label: "Operations address",
    value:
      "Ambassador Nne Furo Kurubo, Model Secondary School Road, Onne, Port Harcourt, Rivers State.",
  },
  {
    icon: FiPhone,
    label: "Dispatch phone",
    value: "+234 (0) 803 708 0258",
    href: "tel:+2348037080258",
  },
  {
    icon: FiMail,
    label: "Business email",
    value: "kobbs@kobbsglobal.com",
    href: "mailto:kobbs@kobbsglobal.com",
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-white py-16 text-navy sm:py-20 lg:py-24"
    >
      <div className="container-x">
        <div className="relative overflow-hidden border-y border-border py-8 sm:py-10 lg:py-14">
          <div aria-hidden="true" className="absolute right-4 top-4 size-20 border-r border-t border-amber/60 sm:right-8 sm:top-8 sm:size-32" />
          <div className="relative max-w-3xl">
            <p className="eyebrow font-semibold text-amber-foreground">
              Dispatch & project assessment desk
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
              Planning your next industrial move?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate">
              Tell us about your transportation, heavy-lift or rig-move
              requirements. Our logistics team can review the scope and prepare
              a tailored technical assessment.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="mailto:kobbs@kobbsglobal.com?subject=Project%20quote%20request"
                className="inline-flex min-h-12 items-center gap-3 bg-amber px-6 py-3 text-sm font-bold text-navy transition-colors hover:bg-amber/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
              >
                Request a quote <FiArrowRight aria-hidden="true" />
              </a>
              <a
                href="tel:+2348037080258"
                className="inline-flex min-h-12 items-center gap-3 border border-border bg-white px-5 py-3 text-sm font-semibold transition-colors hover:border-amber focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
              >
                <FiPhone aria-hidden="true" className="text-amber" />
                Speak with operations
              </a>
            </div>
            <div className="mt-9 grid gap-4 border-y border-border py-5 sm:grid-cols-3">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <div key={label}>
                  <p className="mb-2 flex items-center gap-2 font-mono text-[0.65rem] font-semibold uppercase text-slate">
                    <Icon aria-hidden="true" className="text-amber" />
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="text-sm font-medium text-navy hover:text-amber-foreground"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium">{value}</p>
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
