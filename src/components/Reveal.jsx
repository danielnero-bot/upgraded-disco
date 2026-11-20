import { useRef } from "react";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Reveal({
  as: Element = "div",
  children,
  className,
  variant = "fade-up",
  trigger = "scroll",
  x,
  y,
  duration,
  stagger,
  delay,
  start,
  once,
  counter,
  ...elementProps
}) {
  const revealRef = useRef(null);

  useScrollReveal(revealRef, {
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
  });

  if (Element === "img") {
    return <Element {...elementProps} ref={revealRef} className={className} />;
  }

  return (
    <Element {...elementProps} ref={revealRef} className={className}>
      {children}
    </Element>
  );
}
