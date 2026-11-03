import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import PageIntro from "../components/PageIntro";

export default function NotFoundPage() {
  return (
    <div className="bg-white">
      <PageIntro
        eyebrow="404 Error · Route Not Found"
        title="This logistics route is off the map."
        description="The page you requested may have moved or been updated. Return to the homepage or navigate to our services."
        image="https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?auto=format&fit=crop&w=2200&q=85"
      />
      <section className="bg-white py-14 border-t border-slate-100">
        <div className="container-x">
          <Link
            to="/"
            className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 active:scale-[0.98]"
          >
            <FiArrowLeft className="size-4" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
