import { useT } from "../i18n/lang";
import { Reveal } from "./Reveal";
import "./Footer.css";

const GITHUB_URL = "https://github.com/GabriellyFerreiraa";
const LINKEDIN_URL =
  "https://www.linkedin.com/in/gabrielly-ferreira-619609113/";

export function Footer() {
  const t = useT();
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="contact">
      <Reveal className="wrap footer__grid">
        <div>
          <p className="footer__brand">Gabrielly Ferreira</p>
          <p className="footer__note">{t.footer.note}</p>
        </div>
        <div className="footer__meta">
          <p className="footer__author">{t.footer.author}</p>
          <p className="footer__author-links">
            <a href={GITHUB_URL} target="_blank" rel="noreferrer noopener">
              GitHub
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer noopener">
              LinkedIn
            </a>
          </p>
          <p className="footer__copy">{t.footer.meta(year)}</p>
        </div>
      </Reveal>
    </footer>
  );
}
