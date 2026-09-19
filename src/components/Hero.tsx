import { useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { useT } from "../i18n/lang";
import { Reveal } from "./Reveal";
import ShapeGrid from "./ShapeGrid";
import { useFitText } from "../lib/useFitText";
import "./Hero.css";

const LINKEDIN_URL = "https://www.linkedin.com/in/gabrielly-ferreira-619609113/";

export function Hero() {
  const t = useT();
  const reduce = useReducedMotion();
  const innerRef = useRef<HTMLDivElement>(null);
  const titleRef = useFitText<HTMLHeadingElement>(t.hero.title, innerRef);

  return (
    <section className="hero" id="top">
      {!reduce && (
        <div className="hero__bg" aria-hidden="true">
          <ShapeGrid
            direction="diagonal"
            speed={0.18}
            squareSize={12}
            borderColor="rgba(255, 255, 255, 0.06)"
            hoverFillColor="rgba(201, 162, 76, 0.35)"
          />
        </div>
      )}

      <div className="wrap hero__inner" ref={innerRef}>
        <Reveal delay={0}>
          <h1 ref={titleRef} className="hero__title">
            {t.hero.title}
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="hero__role">{t.hero.role}</p>
        </Reveal>

        <Reveal delay={0.18} className="hero__meta">
          <span className="hero__badge">
            <span className="hero__badge-dot" aria-hidden="true" />
            {t.hero.badgeOpen}
          </span>
          <span className="hero__based">{t.hero.basedIn}</span>
          <a
            className="hero__contact"
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer noopener"
          >
            LinkedIn <span aria-hidden="true">&rarr;</span>
          </a>
        </Reveal>
      </div>

      <a className="hero__scroll" href="#stack" aria-hidden="true">
        <span className="hero__scroll-line" />
        {t.hero.scroll}
      </a>
    </section>
  );
}
