export default function PageIntro({ eyebrow, title, description, image }) {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-ink">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url('${image}')` }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-r from-navy via-navy/90 to-navy/55"
      />
      <div className="container-x py-16 sm:py-20 lg:py-24">
        <p className="eyebrow mb-4 font-semibold text-amber">{eyebrow}</p>
        <h1 className="max-w-4xl text-4xl font-bold uppercase leading-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-ink-muted sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
