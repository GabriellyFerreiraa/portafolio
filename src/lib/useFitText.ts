import { useLayoutEffect, useRef, type RefObject } from "react";

/** Shrinks an element's font-size so its content never wraps, no matter the
 *  text length or viewport width. Starts from whatever the CSS (a clamp())
 *  already computed, and only shrinks further if it would still overflow
 *  `container` (NOT necessarily the element's own DOM parent: a flex/inline
 *  wrapper that shrink-wraps to its content, like Reveal's motion.div,
 *  would make parentElement useless here since it'd always equal the
 *  element's own width). Re-measures on resize and whenever `text` changes
 *  (e.g. a language switch swaps in a longer string). Requires
 *  `white-space: nowrap` and `display: inline-block` (or similar) in CSS. */
export function useFitText<T extends HTMLElement>(
  text: string,
  container: RefObject<HTMLElement | null>,
) {
  const ref = useRef<T | null>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    const box = container.current;
    if (!el || !box) return;

    const fit = () => {
      el.style.fontSize = "";
      el.style.maxWidth = "none";
      const naturalWidth = el.scrollWidth;
      const boxStyle = getComputedStyle(box);
      const available =
        box.clientWidth -
        parseFloat(boxStyle.paddingLeft) -
        parseFloat(boxStyle.paddingRight);
      // available <= 0 means the container isn't laid out yet (display:none,
      // mid-transition, a race right after mount/resize, etc.) — bail out
      // instead of dividing by a bogus value, which would collapse
      // font-size to 0px and leave it stuck there until the next resize.
      if (available > 0 && naturalWidth > available) {
        const base = parseFloat(getComputedStyle(el).fontSize);
        const next = (base * available) / naturalWidth;
        el.style.fontSize = `${next * 0.98}px`;
      }
      el.style.maxWidth = "";
    };

    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, [text, container]);

  return ref;
}
