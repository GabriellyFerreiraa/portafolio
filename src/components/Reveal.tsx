import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { DUR, EASE_OUT } from "../lib/ease";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  style?: CSSProperties;
}

const MARGIN = "0px 0px -14% 0px";
const FALLBACK_MS = 2200;

function useCanAnimate() {
  const reduce = useReducedMotion();
  const [ok] = useState(
    () =>
      typeof document !== "undefined" &&
      document.visibilityState === "visible" &&
      !reduce,
  );
  return ok && !reduce;
}

/** Fades and lifts content in once it enters the viewport. Degrades safely
 *  to a plain, always-visible div when animation isn't appropriate. */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  style,
}: RevealProps) {
  const canAnimate = useCanAnimate();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: MARGIN });

  const [fallback, setFallback] = useState(false);
  useEffect(() => {
    const id = window.setTimeout(() => setFallback(true), FALLBACK_MS);
    return () => window.clearTimeout(id);
  }, []);

  if (!canAnimate) {
    return (
      <div ref={ref} className={className} style={style}>
        {children}
      </div>
    );
  }

  const show = inView || fallback;

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: DUR.enter, ease: EASE_OUT, delay }}
    >
      {children}
    </motion.div>
  );
}

export { useCanAnimate };
