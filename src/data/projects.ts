export type ProjectGroup = "frontend" | "backend";

export interface Project {
  id: string;
  name: string;
  group: ProjectGroup;
  tech: string[];
  liveUrl: string | null;
  repoUrl: string;
  /** filename under /public/screenshots, null when there is no live UI to shoot */
  screenshot: string | null;
}

export const PROJECTS: Project[] = [
  {
    id: "restaurante-raiz",
    name: "Restaurante Raíz",
    group: "frontend",
    tech: ["React", "TypeScript", "Vite", "Framer Motion"],
    liveUrl: "https://restaurante-raiz.vercel.app",
    repoUrl: "https://github.com/GabriellyFerreiraa/restaurante-raiz",
    screenshot: "restaurante-raiz.jpg",
  },
  {
    id: "red-neuronal",
    name: "Sinapsis",
    group: "frontend",
    tech: ["React", "TypeScript", "Canvas 2D", "Vitest"],
    liveUrl: "https://red-neuronal-eight.vercel.app",
    repoUrl: "https://github.com/GabriellyFerreiraa/red-neuronal",
    screenshot: "red-neuronal.jpg",
  },
  {
    id: "gpu-scheduling-viz",
    name: "GPU Scheduling Viz",
    group: "frontend",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://gpu-scheduling-viz.vercel.app",
    repoUrl: "https://github.com/GabriellyFerreiraa/gpu-scheduling-viz",
    screenshot: "gpu-scheduling-viz.jpg",
  },
  {
    id: "detour",
    name: "Detour",
    group: "frontend",
    tech: ["React", "TypeScript", "Tailwind CSS", "WebGL"],
    liveUrl: "https://detour-snowy.vercel.app",
    repoUrl: "https://github.com/GabriellyFerreiraa/detour",
    screenshot: "detour.jpg",
  },
  {
    id: "desk-control",
    name: "Desk Control",
    group: "backend",
    tech: ["React", "Supabase", "PostgreSQL", "RLS"],
    liveUrl: "https://tranquil-syrniki-a20c8e.netlify.app",
    repoUrl: "https://github.com/GabriellyFerreiraa/desk-control",
    screenshot: "desk-control.jpg",
  },
  {
    id: "ticketsense",
    name: "TicketSense",
    group: "backend",
    tech: ["Supabase", "Edge Functions", "Gemini"],
    liveUrl: "https://ticketsense.netlify.app",
    repoUrl: "https://github.com/GabriellyFerreiraa/ticketsense",
    screenshot: "ticketsense.jpg",
  },
  {
    id: "servicedesk-api",
    name: "Service Desk API",
    group: "backend",
    tech: ["Node.js", "Express", "JWT", "PostgreSQL"],
    liveUrl: null,
    repoUrl: "https://github.com/GabriellyFerreiraa/servicedesk-api",
    screenshot: null,
  },
  {
    id: "ticketsense-next",
    name: "TicketSense (Next.js)",
    group: "backend",
    tech: ["Next.js", "App Router", "Supabase"],
    liveUrl: "https://ticketsense-next.vercel.app",
    repoUrl: "https://github.com/GabriellyFerreiraa/ticketsense-next",
    screenshot: "ticketsense-next.jpg",
  },
  {
    id: "payload-cms-demo",
    name: "Payload CMS Demo",
    group: "backend",
    tech: ["Next.js", "Payload CMS", "Postgres (Neon)"],
    liveUrl: "https://payload-cms-demo-sigma.vercel.app",
    repoUrl: "https://github.com/GabriellyFerreiraa/payload-cms-demo",
    screenshot: "payload-cms-demo.jpg",
  },
];

export const TECH_MARQUEE = [
  "React",
  "TypeScript",
  "Node.js",
  "Supabase",
  "Next.js",
  "Prisma",
  "PostgreSQL",
  "Express",
  "Tailwind CSS",
  "Vite",
];
