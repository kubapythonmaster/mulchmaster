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
        <div>
          <a className="footer-brand" href="#start">
            <Mark />
            <span>MulchMaster</span>
          </a>
          <p className="footer-tag">
            Wycinka drzew, mulczowanie i porządkowanie działek. Na Facebooku jako {FACEBOOK_NAME}.
          </p>
          <a className="footer-phone" href={PHONE_HREF}>
            {PHONE_DISPLAY}
          </a>
        </div>
        <div className="footer-nav">
          <div>
            <p className="footer-label">Na stronie</p>
            <ul>
              <li><a href="#o-firmie">O firmie</a></li>
              <li><a href="#uslugi">Usługi</a></li>
              <li><a href="#realizacje">Realizacje</a></li>
              <li><a href="#pytania">Pytania</a></li>
              <li><a href="#kontakt">Kontakt</a></li>
            </ul>
          </div>
          <div>
            <p className="footer-label">Kontakt</p>
            <ul>
              <li><a href={PHONE_HREF}>Zadzwoń</a></li>
              <li><a href={WHATSAPP} {...external}>WhatsApp</a></li>
              <li><a href={FACEBOOK} {...external}>Facebook</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="wrap footer-base">
        <p>© 2026 MulchMaster</p>
        <p>Bezpłatna wycinka samosiejek od 1 ha, w zamian za materiał.</p>
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
