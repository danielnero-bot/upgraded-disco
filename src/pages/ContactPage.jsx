import { useState } from "react";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import PageIntro from "../components/PageIntro";

const contactMethods = [
  {
    icon: FiMapPin,
    label: "Operations base",
    value: "Federal Lighter Terminal, Onne Port, Rivers State",
  },
  {
    icon: FiPhone,
    label: "Dispatch phone",
    value: "+234 (0) 803 708 0258",
    href: "tel:+2348037080258",
  },
  {
    icon: FiMail,
    label: "Email",
    value: "info@kobbsglobal.com",
    href: "mailto:info@kobbsglobal.com",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const message = [
      `Name: ${formData.get("name")}`,
      `Company: ${formData.get("company") || "Not provided"}`,
      `Email: ${formData.get("email")}`,
      `Phone: ${formData.get("phone") || "Not provided"}`,
      `Service: ${formData.get("service")}`,
      "",
      `Project details: ${formData.get("details")}`,
    ].join("\n");
    const subject = encodeURIComponent(
      `Quote request: ${formData.get("service")}`,
    );
    window.location.href = `mailto:info@kobbsglobal.com?subject=${subject}&body=${encodeURIComponent(message)}`;
    setSubmitted(true);
  }

  return (
    <>
      <PageIntro
        eyebrow="Contact & quotes"
        title="Tell us what needs to move."
        description="Send the key details of your transport, lifting or equipment requirement and our operations team can follow up."
        image="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=2200&q=85"
      />
      <section className="bg-background py-14 text-foreground sm:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-2 font-semibold text-navy">
              Project assessment desk
            </p>
            <h2 className="text-3xl font-bold uppercase">Request a quote</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-foreground/70">
              Include cargo dimensions, estimated weight, pickup and delivery
              locations, timing and any site access constraints you already
              know.
            </p>
            <form
              onSubmit={handleSubmit}
              className="mt-7 space-y-5 border border-navy/10 bg-white p-5 sm:p-7"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-medium">
                  Full name
                  <input
                    required
                    name="name"
                    autoComplete="name"
                    className="mt-2 min-h-11 w-full border border-navy/20 bg-background px-3 text-sm outline-none focus:border-amber focus:ring-2 focus:ring-amber/30"
                  />
                </label>
                <label className="block text-sm font-medium">
                  Company
                  <input
                    name="company"
                    autoComplete="organization"
                    className="mt-2 min-h-11 w-full border border-navy/20 bg-background px-3 text-sm outline-none focus:border-amber focus:ring-2 focus:ring-amber/30"
                  />
                </label>
                <label className="block text-sm font-medium">
                  Work email
                  <input
                    required
                    type="email"
                    name="email"
                    autoComplete="email"
                    className="mt-2 min-h-11 w-full border border-navy/20 bg-background px-3 text-sm outline-none focus:border-amber focus:ring-2 focus:ring-amber/30"
                  />
                </label>
                <label className="block text-sm font-medium">
                  Phone
                  <input
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    className="mt-2 min-h-11 w-full border border-navy/20 bg-background px-3 text-sm outline-none focus:border-amber focus:ring-2 focus:ring-amber/30"
                  />
                </label>
              </div>
              <label className="block text-sm font-medium">
                Service required
                <select
                  required
                  defaultValue=""
                  name="service"
                  className="mt-2 min-h-11 w-full border border-navy/20 bg-background px-3 text-sm outline-none focus:border-amber focus:ring-2 focus:ring-amber/30"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option>Haulage & transportation</option>
                  <option>Heavy lift & craneage</option>
                  <option>Rig move operations</option>
                  <option>Equipment leasing</option>
                  <option>Other project support</option>
                </select>
              </label>
              <label className="block text-sm font-medium">
                Project details
                <textarea
                  required
                  name="details"
                  rows="5"
                  className="mt-2 w-full border border-navy/20 bg-background p-3 text-sm outline-none focus:border-amber focus:ring-2 focus:ring-amber/30"
                  placeholder="Cargo, route, schedule and any known constraints"
                />
              </label>
              <button
                type="submit"
                className="inline-flex min-h-12 items-center bg-amber px-6 py-3 font-mono text-xs font-bold uppercase text-amber-foreground transition-colors hover:bg-amber/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
              >
                Prepare email request
              </button>
              {submitted && (
                <p
                  role="status"
                  className="text-sm leading-6 text-foreground/70"
                >
                  Your email application should open with the request details.
                  If it does not, contact us directly at{" "}
                  <a
                    className="font-semibold text-navy underline"
                    href="mailto:info@kobbsglobal.com"
                  >
                    info@kobbsglobal.com
                  </a>
                  .
                </p>
              )}
            </form>
          </div>
          <aside className="lg:col-span-5">
            <div className="border-l-4 border-amber bg-navy p-6 text-ink sm:p-7">
              <p className="eyebrow font-semibold text-amber">Direct contact</p>
              <h2 className="mt-2 text-2xl font-bold uppercase">
                Reach the operations team
              </h2>
              <div className="mt-6 space-y-5">
                {contactMethods.map(({ icon: Icon, label, value, href }) => (
                  <div
                    key={label}
                    className="flex gap-3 border-t border-white/10 pt-4"
                  >
                    <Icon
                      aria-hidden="true"
                      className="mt-1 size-5 shrink-0 text-amber"
                    />
                    <div>
                      <p className="font-mono text-[0.65rem] font-semibold uppercase text-slate">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="mt-1 inline-block text-sm leading-6 text-ink hover:text-amber"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="mt-1 text-sm leading-6">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-foreground/70">
              For faster assessment, include approximate cargo dimensions and
              weight, route endpoints, required delivery date and any lifting or
              access constraints.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
