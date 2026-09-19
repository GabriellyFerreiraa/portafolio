import { useT } from "./i18n/lang";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { TechMarquee } from "./components/TechMarquee";
import { ProjectsGrid } from "./components/ProjectsGrid";
import { About } from "./components/About";
import { Footer } from "./components/Footer";

export default function App() {
  const t = useT();

  return (
    <>
      <a className="skip-link" href="#main">
        {t.skipLink}
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <TechMarquee />
        <ProjectsGrid />
        <About />
      </main>
      <Footer />
    </>
  );
}
