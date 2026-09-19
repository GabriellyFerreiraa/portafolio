import { useT } from "../i18n/lang";
import { TECH_MARQUEE } from "../data/projects";
import "./TechMarquee.css";

export function TechMarquee() {
  const t = useT();

  return (
    <section className="marquee" id="stack" aria-label={t.tech.label}>
      <div className="marquee__track" aria-hidden="true">
        <ul className="marquee__row">
          {TECH_MARQUEE.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <ul className="marquee__row">
          {TECH_MARQUEE.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
      <p className="u-sr-only">{TECH_MARQUEE.join(", ")}</p>
    </section>
  );
}
