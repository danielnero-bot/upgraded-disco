import { gsap, ScrollTrigger, useGSAP } from "../animations";

const variants = {
  "fade-up": { opacity: 0, y: 40 },
  "fade-in": { opacity: 0 },
  "fade-left": { opacity: 0, x: -28 },
  "fade-right": { opacity: 0, x: 28 },
  "scale-in": { opacity: 0, scale: 0.96 },
};

export default function useScrollReveal(ref, options = {}) {
  const {
    variant = "fade-up",
    trigger = "scroll",
    x,
    y,
    duration = 0.7,
    stagger = 0,
    delay = 0,
    start = "top 85%",
    once = true,
    counter = false,
  } = options;

  useGSAP(() => {
    const element = ref?.current;
    if (!element) return;

    const revealTargets =
      stagger > 0 && element.children.length
        ? Array.from(element.children)
        : [element];
    if (!revealTargets.length) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(revealTargets, { clearProps: "opacity,transform" });
      return;
    }

    const initial = variants[variant];
    if (!initial) {
      throw new RangeError(`Unknown reveal variant: ${variant}`);
    }

    const from = { ...initial };
    if (x !== undefined) from.x = x;
    if (y !== undefined) from.y = y;

    const to = { opacity: 1, duration, delay, ease: "power2.out" };
    if (from.x !== undefined) to.x = 0;
    if (from.y !== undefined) to.y = 0;
    if (from.scale !== undefined) to.scale = 1;
    if (stagger > 0) to.stagger = stagger;

    const timeline = gsap.timeline(
      trigger === "scroll"
        ? {
            scrollTrigger: {
              trigger: element,
              start,
              once,
            },
          }
        : undefined,
    );

    timeline.fromTo(
      revealTargets,
      { ...from, immediateRender: true },
      to,
      0,
    );

    if (counter) {
      const counters = element.querySelectorAll("[data-counter]");
      counters.forEach((counterElement) => {
        const end = Number(counterElement.dataset.counter);
        if (!Number.isFinite(end)) {
          throw new TypeError("Reveal counters require a numeric data-counter.");
        }

        const suffix = counterElement.dataset.counterSuffix ?? "";
        const value = { current: 0 };
        timeline.to(
          value,
          {
            current: end,
            duration,
            delay,
            ease: "power2.out",
            snap: { current: 1 },
            onUpdate: () => {
              counterElement.textContent = `${Math.round(value.current)}${suffix}`;
            },
          },
          0,
        );
      });
    }

    const fallbackTimer = window.setTimeout(() => {
      timeline.scrollTrigger?.kill();
      timeline.kill();
      gsap.set(revealTargets, {
        opacity: 1,
        clearProps: "transform",
      });
      if (counter) {
        element.querySelectorAll("[data-counter]").forEach((counterElement) => {
          const suffix = counterElement.dataset.counterSuffix ?? "";
          counterElement.textContent = `${counterElement.dataset.counter}${suffix}`;
        });
      }
    }, 2000);

    const observer = new MutationObserver(() => ScrollTrigger.refresh());
    observer.observe(element, { childList: true, subtree: true });

    const refreshFrame = window.requestAnimationFrame(() =>
      ScrollTrigger.refresh(),
    );

    return () => {
      window.clearTimeout(fallbackTimer);
      window.cancelAnimationFrame(refreshFrame);
      observer.disconnect();
    };
  }, {
    scope: ref,
    dependencies: [
      ref,
      variant,
      trigger,
      x,
      y,
      duration,
      stagger,
      delay,
      start,
      once,
      counter,
    ],
    revertOnUpdate: true,
  });
}
