import { Link } from "react-router-dom";

export default function PageIntro({
  eyebrow,
  title,
  description,
  image,
  imageAlt = "",
}) {
  return (
    <section className="border-b border-steel-200 bg-steel-50 pb-14 pt-28 sm:pb-18 sm:pt-36 lg:pb-20 lg:pt-40">
      <div className="container-x grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-6">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-5 flex items-center gap-2 text-xs font-medium text-steel-400">
            <Link to="/" className="text-steel-600 transition-colors hover:text-navy-900">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span className="font-semibold text-navy-900">
              {eyebrow || title}
            </span>
          </nav>

          {eyebrow && (
            <div className="mb-4 inline-flex items-center gap-2 rounded-[var(--radius-card)] border border-steel-200 bg-white px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-navy-800 shadow-xs">
              <span className="size-1.5 rounded-full bg-accent" />
              <span>{eyebrow}</span>
            </div>
          )}

          <h1 className="max-w-2xl text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl lg:text-5xl leading-[1.15]">
            {title}
          </h1>

          {description && (
            <p className="mt-5 max-w-xl text-base leading-relaxed text-steel-600 sm:text-lg">
              {description}
            </p>
          )}
        </div>

        <div className="relative min-h-64 overflow-hidden rounded-[var(--radius-card)] border border-steel-200 bg-steel-100 sm:min-h-80 lg:col-span-6 lg:min-h-96">
          {image ? (
            <img
              src={image}
              alt={imageAlt || title}
              className="absolute inset-0 size-full object-cover"
              fetchPriority="high"
            />
          ) : (
            <div className="flex size-full min-h-64 items-center justify-center p-8 text-center text-xs font-medium text-steel-400">
              {/* TODO: confirm with client */}
              <span>Asset placeholder · Kobbs Operations</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
