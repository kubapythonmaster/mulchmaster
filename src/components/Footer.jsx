import {
  external,
  FACEBOOK,
  FACEBOOK_NAME,
  PHONE_DISPLAY,
  PHONE_HREF,
  WHATSAPP,
} from "../site.js";
import { Mark } from "./Mark.jsx";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-top">
        <div className="footer-brand-block">
          <a className="footer-brand" href="#start">
            <Mark />
            <span>MulchMaster</span>
          </a>
          <p className="footer-tag">
            Wycinka, mulczowanie i czyszczenie działek. Na Facebooku jako {FACEBOOK_NAME}.
          </p>
          <a className="footer-phone" href={PHONE_HREF}>
            {PHONE_DISPLAY}
          </a>
          <p className="footer-hours">Oddzwaniamy z terenu — także wieczorem po robocie.</p>
        </div>
        <div className="footer-nav">
          <div>
            <p className="footer-label">Na stronie</p>
            <ul>
              <li><a href="#o-firmie">O firmie</a></li>
              <li><a href="#uslugi">Usługi</a></li>
              <li><a href="#sprzet">Sprzęt</a></li>
              <li><a href="#realizacje">Realizacje</a></li>
              <li><a href="#pytania">Pytania</a></li>
            </ul>
          </div>
          <div>
            <p className="footer-label">Napisz</p>
            <ul>
              <li><a href={PHONE_HREF}>Zadzwoń</a></li>
              <li><a href={WHATSAPP} {...external}>WhatsApp</a></li>
              <li><a href={FACEBOOK} {...external}>Facebook</a></li>
              <li><a href="#kontakt">Opisz działkę</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="wrap footer-base">
        <p>© 2026 MulchMaster</p>
        <p>
          Strona stworzona przez{" "}
          <a href="https://nocturagency.pl" {...external}>
            Noctura
          </a>
        </p>
      </div>
    </footer>
  );
}

export function CallDock() {
  return (
    <a className="callbar" href={PHONE_HREF}>
      <span>Zadzwoń</span>
      <strong>{PHONE_DISPLAY}</strong>
    </a>
  );
}
