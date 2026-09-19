const en = {
  langLabel: "Language",
  langName: "English",
  skipLink: "Skip to content",
  docTitle: "Gabrielly Ferreira · Full-Stack Developer",

  nav: {
    links: {
      work: "Work",
      about: "About",
      contact: "Contact",
    },
    brandAria: "Gabrielly Ferreira, home",
    resume: "Download CV",
    open: "Open menu",
    close: "Close menu",
  },

  hero: {
    title: "Full-stack developer",
    role: "Building interfaces, and the systems behind them.",
    badgeOpen: "Open to work",
    basedIn: "Based in Argentina",
    scroll: "Scroll",
  },

  tech: {
    label: "Stack",
  },

  projects: {
    eyebrow: "Selected work",
    title: "Nine projects, two sides of the stack",
    intro:
      "Frontend experiments and backend systems, each one built and shipped end to end.",
    groupFrontend: "Frontend",
    groupBackend: "Backend",
    viewLive: "Live site",
    viewCode: "Code",
    viewDocs: "Read the docs",
    apiOnly: "API, no UI",
    items: {
      "restaurante-raiz": {
        category: "Editorial landing page",
        description:
          "A fictional restaurant's landing page with fluid typography and a full reservation flow, form validation and accessible states included.",
      },
      "red-neuronal": {
        category: "Interactive explainer",
        description:
          "A neural network explainer with a hand-written training engine in TypeScript, rendered frame by frame on a 2D canvas.",
      },
      "gpu-scheduling-viz": {
        category: "Research case study",
        description:
          "An interactive case study on GPU scheduling and energy efficiency, built to make a research question explorable, not just readable.",
      },
      detour: {
        category: "Product site",
        description:
          "A fictional VPN brand's site: an animated world map, a lazy-loaded 3D globe, and full EN/ES/PT support.",
      },
      "desk-control": {
        category: "Service desk dashboard",
        description:
          "A service desk management tool with role-based dashboards, shift scheduling and absence approval, backed by Supabase with row-level security.",
      },
      ticketsense: {
        category: "AI-assisted triage",
        description:
          "AI-assisted ticket triage powered by Gemini through a Supabase Edge Function, classifying new tickets before a human opens them.",
      },
      "servicedesk-api": {
        category: "REST API",
        description:
          "A REST API built from scratch: JWT authentication, role-based access control in a dedicated table, tests and CI. No UI, the documentation is the interface.",
      },
      "ticketsense-next": {
        category: "Next.js rebuild",
        description:
          "The same TicketSense product rebuilt on the Next.js App Router, to compare both architectures side by side.",
      },
      "payload-cms-demo": {
        category: "Headless CMS",
        description:
          "A headless CMS running inside a Next.js App Router app, Postgres on Neon, content rendered through Server Components.",
      },
    },
  },

  about: {
    eyebrow: "About",
    title: "Full-stack, by choice.",
    body: [
      "I like building the interface first, then the system underneath it, or the other way around, depending on what the project needs. What matters is that both sides hold together: something people enjoy using, backed by a system that behaves the same way at 2am as it does in a demo.",
      "Most of what's here is self-directed: frontend experiments that push on animation, accessibility and performance, and backend systems with real authentication, real roles and real edge cases. I write in English, Spanish and Portuguese, and build for all three from the start, not as a translation pass at the end.",
    ],
    highlight:
      "Critical privilege-escalation vulnerabilities found and fixed in production, not staging.",
  },

  footer: {
    note: "Full-stack developer. Frontend experiments and backend systems, built end to end.",
    author: "Designed and built by Gabrielly Ferreira",
    meta: (y: number) => `© ${y} · All rights reserved`,
  },
};

export type Dict = typeof en;

const es: Dict = {
  langLabel: "Idioma",
  langName: "Español",
  skipLink: "Ir al contenido",
  docTitle: "Gabrielly Ferreira · Desarrolladora Full-Stack",

  nav: {
    links: {
      work: "Proyectos",
      about: "Sobre mí",
      contact: "Contacto",
    },
    brandAria: "Gabrielly Ferreira, inicio",
    resume: "Descargar CV",
    open: "Abrir menú",
    close: "Cerrar menú",
  },

  hero: {
    title: "Desarrolladora full-stack",
    role: "Construyo interfaces, y los sistemas detrás de ellas.",
    badgeOpen: "Disponible para trabajar",
    basedIn: "Radicada en Argentina",
    scroll: "Desplázate",
  },

  tech: {
    label: "Stack",
  },

  projects: {
    eyebrow: "Proyectos seleccionados",
    title: "Nueve proyectos, dos lados del stack",
    intro:
      "Experimentos de frontend y sistemas de backend, cada uno construido y publicado de punta a punta.",
    groupFrontend: "Frontend",
    groupBackend: "Backend",
    viewLive: "Sitio en vivo",
    viewCode: "Código",
    viewDocs: "Ver documentación",
    apiOnly: "API, sin interfaz",
    items: {
      "restaurante-raiz": {
        category: "Landing editorial",
        description:
          "Landing de un restaurante ficticio con tipografía fluida y un flujo de reserva completo, con validación de formulario y estados accesibles.",
      },
      "red-neuronal": {
        category: "Explicador interactivo",
        description:
          "Un explicador de redes neuronales con un motor de entrenamiento escrito a mano en TypeScript, renderizado cuadro a cuadro en un canvas 2D.",
      },
      "gpu-scheduling-viz": {
        category: "Caso de estudio de investigación",
        description:
          "Un caso de estudio interactivo sobre scheduling de GPU y eficiencia energética, pensado para explorar la pregunta de investigación, no solo leerla.",
      },
      detour: {
        category: "Sitio de producto",
        description:
          "El sitio de una marca ficticia de VPN: un mapa del mundo animado, un globo 3D con carga diferida, y soporte completo en EN/ES/PT.",
      },
      "desk-control": {
        category: "Dashboard de service desk",
        description:
          "Una herramienta de gestión de service desk con dashboards por rol, gestión de turnos y aprobación de ausencias, con Supabase y RLS.",
      },
      ticketsense: {
        category: "Triage asistido por IA",
        description:
          "Triage de tickets asistido por IA con Gemini a través de una Supabase Edge Function, que clasifica los tickets antes de que alguien los abra.",
      },
      "servicedesk-api": {
        category: "API REST",
        description:
          "Una API REST construida desde cero: autenticación JWT, control de acceso por rol en una tabla dedicada, tests y CI. Sin interfaz, la documentación es la interfaz.",
      },
      "ticketsense-next": {
        category: "Reconstrucción en Next.js",
        description:
          "El mismo producto TicketSense reconstruido sobre el App Router de Next.js, para comparar ambas arquitecturas en paralelo.",
      },
      "payload-cms-demo": {
        category: "CMS headless",
        description:
          "Un CMS headless corriendo dentro de una app con el App Router de Next.js, Postgres en Neon, contenido renderizado con Server Components.",
      },
    },
  },

  about: {
    eyebrow: "Sobre mí",
    title: "Full-stack, por elección.",
    body: [
      "Me gusta construir la interfaz primero y después el sistema debajo de ella, o al revés, según lo que pida el proyecto. Lo que importa es que los dos lados se sostengan: algo que la gente disfrute usar, respaldado por un sistema que se comporta igual a las 2am que en una demo.",
      "La mayoría de lo que hay acá es autodirigido: experimentos de frontend que exploran animación, accesibilidad y performance, y sistemas de backend con autenticación real, roles reales y casos límite reales. Escribo en inglés, español y portugués, y construyo para los tres idiomas desde el inicio, no como una pasada de traducción al final.",
    ],
    highlight:
      "Vulnerabilidades críticas de escalación de privilegios encontradas y corregidas en producción, no en staging.",
  },

  footer: {
    note: "Desarrolladora full-stack. Experimentos de frontend y sistemas de backend, construidos de punta a punta.",
    author: "Diseñado y desarrollado por Gabrielly Ferreira",
    meta: (y: number) => `© ${y} · Todos los derechos reservados`,
  },
};

const pt: Dict = {
  langLabel: "Idioma",
  langName: "Português",
  skipLink: "Pular para o conteúdo",
  docTitle: "Gabrielly Ferreira · Desenvolvedora Full-Stack",

  nav: {
    links: {
      work: "Projetos",
      about: "Sobre mim",
      contact: "Contato",
    },
    brandAria: "Gabrielly Ferreira, início",
    resume: "Baixar currículo",
    open: "Abrir menu",
    close: "Fechar menu",
  },

  hero: {
    title: "Desenvolvedora full-stack",
    role: "Construo interfaces, e os sistemas por trás delas.",
    badgeOpen: "Disponível para trabalho",
    basedIn: "Baseada na Argentina",
    scroll: "Role para baixo",
  },

  tech: {
    label: "Stack",
  },

  projects: {
    eyebrow: "Projetos selecionados",
    title: "Nove projetos, dois lados do stack",
    intro:
      "Experimentos de frontend e sistemas de backend, cada um construído e publicado do início ao fim.",
    groupFrontend: "Frontend",
    groupBackend: "Backend",
    viewLive: "Site ao vivo",
    viewCode: "Código",
    viewDocs: "Ver documentação",
    apiOnly: "API, sem interface",
    items: {
      "restaurante-raiz": {
        category: "Landing editorial",
        description:
          "Landing de um restaurante fictício com tipografia fluida e um fluxo de reserva completo, com validação de formulário e estados acessíveis.",
      },
      "red-neuronal": {
        category: "Explicador interativo",
        description:
          "Um explicador de redes neurais com um motor de treino escrito à mão em TypeScript, renderizado quadro a quadro num canvas 2D.",
      },
      "gpu-scheduling-viz": {
        category: "Case study de pesquisa",
        description:
          "Um case study interativo sobre scheduling de GPU e eficiência energética, pensado pra explorar a pergunta de pesquisa, não só ler sobre ela.",
      },
      detour: {
        category: "Site de produto",
        description:
          "O site de uma marca fictícia de VPN: um mapa-múndi animado, um globo 3D com carregamento tardio, e suporte completo em EN/ES/PT.",
      },
      "desk-control": {
        category: "Dashboard de service desk",
        description:
          "Uma ferramenta de gestão de service desk com dashboards por papel, gestão de escalas e aprovação de ausências, com Supabase e RLS.",
      },
      ticketsense: {
        category: "Triagem assistida por IA",
        description:
          "Triagem de chamados assistida por IA com Gemini via Supabase Edge Function, classificando os chamados antes de alguém abrir.",
      },
      "servicedesk-api": {
        category: "API REST",
        description:
          "Uma API REST construída do zero: autenticação JWT, controle de acesso por papel numa tabela dedicada, testes e CI. Sem interface, a documentação é a interface.",
      },
      "ticketsense-next": {
        category: "Reconstrução em Next.js",
        description:
          "O mesmo produto TicketSense reconstruído sobre o App Router do Next.js, pra comparar as duas arquiteturas lado a lado.",
      },
      "payload-cms-demo": {
        category: "CMS headless",
        description:
          "Um CMS headless rodando dentro de um app com App Router do Next.js, Postgres na Neon, conteúdo renderizado com Server Components.",
      },
    },
  },

  about: {
    eyebrow: "Sobre mim",
    title: "Full-stack, por escolha.",
    body: [
      "Gosto de construir a interface primeiro e depois o sistema por trás dela, ou o contrário, dependendo do que o projeto pedir. O que importa é que os dois lados se sustentem: algo que as pessoas gostem de usar, apoiado num sistema que se comporta do mesmo jeito às 2h da manhã e numa demo.",
      "A maior parte do que está aqui é autodirigida: experimentos de frontend que exploram animação, acessibilidade e performance, e sistemas de backend com autenticação real, papéis reais e casos extremos reais. Escrevo em inglês, espanhol e português, e construo para os três desde o início, não como uma passada de tradução no final.",
    ],
    highlight:
      "Vulnerabilidades críticas de escalação de privilégio encontradas e corrigidas em produção, não em staging.",
  },

  footer: {
    note: "Desenvolvedora full-stack. Experimentos de frontend e sistemas de backend, construídos do início ao fim.",
    author: "Desenhado e desenvolvido por Gabrielly Ferreira",
    meta: (y: number) => `© ${y} · Todos os direitos reservados`,
  },
};

export const STRINGS = { en, es, pt };
export type Lang = keyof typeof STRINGS;

export const LANG_OPTIONS: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
  { code: "pt", label: "PT" },
];
