import { useT } from "../i18n/lang";
import { Reveal } from "./Reveal";
import "./About.css";

export function About() {
  const t = useT();

  return (
    <section className="section about" id="about">
      <div className="wrap about__inner">
        <Reveal>
          <p className="label">{t.about.eyebrow}</p>
          <h2 className="about__title">{t.about.title}</h2>
        </Reveal>

        <Reveal delay={0.08} className="about__body">
          {t.about.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </Reveal>

        <Reveal delay={0.14}>
          <blockquote className="about__highlight">
            <span className="about__highlight-mark" aria-hidden="true">
              3
            </span>
            <p>{t.about.highlight}</p>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
