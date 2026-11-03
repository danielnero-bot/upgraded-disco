import { useState } from "react";
import { FiMail, FiMapPin, FiPhone, FiArrowRight } from "react-icons/fi";
import PageIntro from "../components/PageIntro";

const contactMethods = [
  {
    icon: FiMapPin,
    label: "Operations Base",
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
    window.location.href = `mailto:kobbs@kobbsglobal.com?subject=${subject}&body=${encodeURIComponent(message)}`;
    setSubmitted(true);
  }

  return (
    <div className="bg-white">
      <PageIntro
        eyebrow="Contact & Project Scoping"
        title="Tell us what your operation needs to move."
        description="Submit cargo tonnages, transport routes, and schedule timelines. Our engineering and dispatch team will evaluate feasibility and deliver a structured quotation."
        image="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=2200&q=85"
      />

      <section className="bg-white py-16 sm:py-20 border-t border-slate-100">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Form */}
          <div className="lg:col-span-7">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
              Technical Assessment Desk
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Request an Operational Quote
            </h2>
            <p className="mt-3 text-base text-slate-500">
              Provide cargo dimensions, estimated weight, origin/destination points, and any site-specific access constraints.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5 rounded-2xl border border-slate-100 bg-white p-7 sm:p-9 shadow-lg shadow-slate-100/60"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-semibold text-slate-700">
                  Full Name
                  <input
                    required
                    name="name"
                    placeholder="e.g. Samuel Okon"
                    autoComplete="name"
                    className="mt-2 h-11 w-full rounded-lg border border-slate-200 bg-white px-3.5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </label>
                <label className="block text-sm font-semibold text-slate-700">
                  Company / Organization
                  <input
                    name="company"
                    placeholder="e.g. Energy Partners Ltd"
                    autoComplete="organization"
                    className="mt-2 h-11 w-full rounded-lg border border-slate-200 bg-white px-3.5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </label>
                <label className="block text-sm font-semibold text-slate-700">
                  Work Email
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="name@company.com"
                    autoComplete="email"
                    className="mt-2 h-11 w-full rounded-lg border border-slate-200 bg-white px-3.5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </label>
                <label className="block text-sm font-semibold text-slate-700">
                  Phone Number
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+234 ..."
                    autoComplete="tel"
                    className="mt-2 h-11 w-full rounded-lg border border-slate-200 bg-white px-3.5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </label>
              </div>

              <label className="block text-sm font-semibold text-slate-700">
                Service Category Required
                <select
                  required
                  defaultValue=""
                  name="service"
                  className="mt-2 h-11 w-full rounded-lg border border-slate-200 bg-white px-3.5 text-sm text-slate-900 outline-none transition-all focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                >
                  <option value="" disabled>
                    Select primary service
                  </option>
                  <option>Haulage & Overland Transportation</option>
                  <option>Heavy Lift & Engineered Craneage</option>
                  <option>Rig Move & Oilfield Relocation</option>
                  <option>Industrial Equipment Leasing</option>
                  <option>Other Integrated Logistics</option>
                </select>
              </label>

              <label className="block text-sm font-semibold text-slate-700">
                Project Scope & Technical Specifications
                <textarea
                  required
                  name="details"
                  rows="4"
                  className="mt-2 w-full rounded-lg border border-slate-200 bg-white p-3.5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  placeholder="Details of cargo dimensions, tonnages, transport route, proposed dates, and site access..."
                />
              </label>

              <button
                type="submit"
                className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 active:scale-[0.98]"
              >
                <span>Submit Technical Request</span>
                <FiArrowRight aria-hidden="true" className="size-4" />
              </button>

              {submitted && (
                <div className="rounded-lg bg-blue-50 p-4 text-sm text-blue-800">
                  Your mail client has been prepared with your request. You can also write directly to{" "}
                  <a
                    className="font-bold underline"
                    href="mailto:kobbs@kobbsglobal.com"
                  >
                    kobbs@kobbsglobal.com
                  </a>
                  .
                </div>
              )}
            </form>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-slate-100 bg-white p-7 sm:p-8 shadow-lg shadow-slate-100/60">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                Direct Contact
              </span>
              <h3 className="mt-2 text-2xl font-bold text-slate-900">
                Reach Operations Desk
              </h3>
              
              <div className="mt-6 space-y-6">
                {contactMethods.map(({ icon: Icon, label, value, href }) => (
                  <div
                    key={label}
                    className="flex gap-4 border-t border-slate-100 pt-5"
                  >
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                      <Icon aria-hidden="true" className="size-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="mt-1 block text-sm font-semibold text-slate-900 transition-colors hover:text-blue-600"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="mt-1 text-sm font-medium leading-relaxed text-slate-700">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-slate-100 bg-slate-50/60 p-6 text-xs leading-relaxed text-slate-500">
              <span className="font-semibold text-slate-800">Expedited Assessment Tip:</span> Providing accurate length x width x height dimensions and gross tonnages allows our engineers to immediately identify required axle configurations and bridge permits.
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
