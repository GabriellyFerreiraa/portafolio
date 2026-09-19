import { PROJECTS } from "../data/projects";
import { useT } from "../i18n/lang";
import { Reveal } from "./Reveal";
import { ProjectCard } from "./ProjectCard";
import "./ProjectsGrid.css";

export function ProjectsGrid() {
  const t = useT();
  const frontend = PROJECTS.filter((p) => p.group === "frontend");
  const backend = PROJECTS.filter((p) => p.group === "backend");

  return (
    <section className="section works" id="work">
      <div className="wrap">
        <Reveal>
          <p className="label">{t.projects.eyebrow}</p>
          <h2 className="works__title">{t.projects.title}</h2>
          <p className="works__intro">{t.projects.intro}</p>
        </Reveal>

        <div className="works__group">
          <Reveal>
            <h3 className="works__group-title">{t.projects.groupFrontend}</h3>
          </Reveal>
          <div className="works__grid">
            {frontend.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
        </div>

        <div className="works__group">
          <Reveal>
            <h3 className="works__group-title">{t.projects.groupBackend}</h3>
          </Reveal>
          <div className="works__grid">
            {backend.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
