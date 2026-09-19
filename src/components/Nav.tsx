import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLang, useT } from "../i18n/lang";
import { LangSwitch } from "./LangSwitch";
import "./Nav.css";

const RESUME_FILES = {
  en: "/resume/Gabrielly-Ferreira-CV-EN.pdf",
  es: "/resume/Gabrielly-Ferreira-CV-ES.pdf",
  pt: "/resume/Gabrielly-Ferreira-CV-PT.pdf",
};

export function Nav() {
  const t = useT();
  const { lang } = useLang();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as Node;
      if (
        drawerRef.current &&
        !drawerRef.current.contains(target) &&
        !toggleRef.current?.contains(target)
      ) {
        setOpen(false);
      }
    };
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const links = [
    { href: "#work", label: t.nav.links.work },
    { href: "#about", label: t.nav.links.about },
    { href: "#contact", label: t.nav.links.contact },
  ];

  return (
    <header className="nav">
      <div className="wrap nav__row">
        <a className="nav__brand" href="#top" aria-label={t.nav.brandAria}>
          Gabrielly Ferreira
        </a>

        <nav className="nav__links" aria-label={t.nav.links.work}>
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav__end">
          <a
            className="nav__resume"
            href={RESUME_FILES[lang]}
            download
          >
            {t.nav.resume}
          </a>
          <div className="nav__lang-desktop">
            <LangSwitch />
          </div>
          <button
            ref={toggleRef}
            type="button"
            className="nav__toggle"
            aria-expanded={open}
            aria-controls="nav-drawer"
            aria-label={open ? t.nav.close : t.nav.open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="nav__toggle-bar" data-open={open} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="nav-drawer"
            id="nav-drawer"
            ref={drawerRef}
            className="nav__drawer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="nav__drawer-links" aria-label={t.nav.links.work}>
              {links.map((l, i) => (
                <a
                  key={l.href}
                  href={l.href}
                  ref={i === 0 ? firstLinkRef : undefined}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
            </nav>
            <a className="nav__resume nav__resume--drawer" href={RESUME_FILES[lang]} download>
              {t.nav.resume}
            </a>
            <LangSwitch />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
