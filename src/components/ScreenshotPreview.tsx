import { useEffect, useRef, useState } from "react";
import "./ScreenshotPreview.css";

interface ScreenshotPreviewProps {
  src: string;
  alt: string;
}

/** A tall, full-page screenshot inside a short fixed-height frame. While the
 *  frame is in view (or hovered), the image slowly pans down and back up,
 *  simulating someone scrolling the real site. Pure CSS transform, no video. */
export function ScreenshotPreview({ src, alt }: ScreenshotPreviewProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [inView, setInView] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.35 },
    );
    io.observe(frame);
    return () => io.disconnect();
  }, []);

  const measure = () => {
    const frame = frameRef.current;
    const img = imgRef.current;
    if (!frame || !img || !img.naturalHeight) return;
    const renderedHeight = (frame.clientWidth / img.naturalWidth) * img.naturalHeight;
    const distance = Math.max(0, renderedHeight - frame.clientHeight);
    frame.style.setProperty("--scroll-dist", `${distance}px`);
    setReady(true);
  };

  useEffect(() => {
    const onResize = () => measure();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={frameRef}
      className="shot"
      data-active={inView && ready}
      onMouseEnter={() => setInView(true)}
    >
      <img
        ref={imgRef}
        className="shot__img"
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={measure}
      />
    </div>
  );
}
