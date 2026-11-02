export default function PageIntro({ eyebrow, title, description, image }) {
  return (
    <section className="bg-white pb-12 pt-28 text-navy sm:pb-16 sm:pt-32 lg:pb-20">
      <div className="container-x grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-6">
          <p className="eyebrow mb-4 flex items-center gap-2 font-semibold text-amber-foreground">
            <span className="h-0.5 w-8 bg-amber" />{eyebrow}
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate sm:text-lg">
            {description}
          </p>
        </div>
        <div className="relative min-h-56 overflow-hidden sm:min-h-72 lg:col-span-6 lg:min-h-80">
          <img src={image} alt="" className="absolute inset-0 size-full object-cover" fetchPriority="high" />
          <span aria-hidden="true" className="absolute bottom-0 left-0 h-1 w-20 bg-amber" />
        </div>
      </div>
    </section>
  );
}
