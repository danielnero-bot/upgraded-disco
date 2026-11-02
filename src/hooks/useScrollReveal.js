import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useScrollReveal(ref, options = {}) {
  const { start = "top 80%", stagger = 0.12, y = 30 } = options;

  useEffect(() => {
    const element = ref?.current;

    if (!element) {
      return undefined;
    }

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealItems = element.querySelectorAll(".reveal");

    if (prefersReducedMotion || !revealItems.length) {
      gsap.set(revealItems, { opacity: 1, y: 0 });
      return undefined;
    }

    const ctx = gsap.context(() => {
      gsap.from(revealItems, {
        opacity: 0,
        y,
        stagger,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start,
        },
      });
    }, element);

    return () => ctx.revert();
  }, [ref, start, stagger, y]);
}
