import { Link } from "react-router-dom";
import PageIntro from "../components/PageIntro";

export default function NotFoundPage() {
  return (
    <>
      <PageIntro
        eyebrow="Page not found"
        title="This route is off the map."
        description="The page may have moved. Return to the homepage or use the navigation to find the information you need."
        image="https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?auto=format&fit=crop&w=2200&q=85"
      />
      <section className="bg-background py-14 text-foreground">
        <div className="container-x">
          <Link
            to="/"
            className="inline-flex min-h-12 items-center bg-amber px-5 py-3 font-mono text-xs font-bold uppercase text-amber-foreground hover:bg-amber/90"
          >
            Return home
          </Link>
        </div>
      </section>
    </>
  );
}
