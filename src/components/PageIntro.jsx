export default function PageIntro({
  eyebrow,
  title,
  description,
  image,
  imageAlt = "",
}) {
  return (
    <section className="bg-white pb-14 pt-28 text-slate-900 sm:pb-18 sm:pt-36 lg:pb-20">
      <div className="container-x grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-6">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/60 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600">
            <span className="size-1.5 rounded-full bg-blue-600" />
            {eyebrow}
          </div>
          <h1 className="max-w-2xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-slate-900">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            {description}
          </p>
        </div>
        <div className="relative min-h-64 overflow-hidden rounded-2xl border border-slate-100 shadow-lg shadow-slate-100 sm:min-h-80 lg:col-span-6 lg:min-h-96">
          <img
            src={image}
            alt={imageAlt}
            className="absolute inset-0 size-full object-cover"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
