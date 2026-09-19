import type { Project } from "../data/projects";
import { useT } from "../i18n/lang";
import { Reveal } from "./Reveal";
import { ScreenshotPreview } from "./ScreenshotPreview";
import "./ProjectCard.css";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ENDPOINT_LINES = [
  "POST   /auth/login",
  "GET    /tickets",
  "PATCH  /tickets/:id",
  "GET    /users/me/role",
  "// role check runs before the handler",
];

function ApiPreview() {
  return (
    <div className="shot shot--api" data-active="true" aria-hidden="true">
      <div className="api-preview">
        {ENDPOINT_LINES.map((line, i) => (
          <p key={i} className="api-preview__line">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const t = useT();
  const copy = t.projects.items[project.id as keyof typeof t.projects.items];

  return (
    <Reveal delay={Math.min(index * 0.06, 0.3)} className="card">
      {project.screenshot ? (
        <ScreenshotPreview
          src={`/screenshots/${project.screenshot}`}
          alt={`${project.name} full-page screenshot`}
        />
      ) : (
        <ApiPreview />
      )}

      <div className="card__body">
        <div className="card__head">
          <h3 className="card__name">{project.name}</h3>
          <span className="card__category">{copy.category}</span>
        </div>

        <p className="card__desc">{copy.description}</p>

        <ul className="card__tech">
          {project.tech.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        <div className="card__links">
          {project.liveUrl ? (
            <a
              className="card__link card__link--primary"
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              {t.projects.viewLive}
            </a>
          ) : (
            <span className="card__link card__link--muted">
              {t.projects.apiOnly}
            </span>
          )}
          <a
            className="card__link"
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer noopener"
          >
            {project.liveUrl ? t.projects.viewCode : t.projects.viewDocs}
          </a>
        </div>
      </div>
    </Reveal>
  );
}
