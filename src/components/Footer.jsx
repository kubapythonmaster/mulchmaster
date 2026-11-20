import {
  external,
  FACEBOOK,
  FACEBOOK_NAME,
  PHONE_DISPLAY,
  PHONE_HREF,
  WHATSAPP,
} from "../site.js";
import { Mark } from "./Mark.jsx";

function IconWhatsApp() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12.04 2C6.58 2 2.15 6.4 2.15 11.84c0 1.96.52 3.8 1.44 5.4L2 22l4.92-1.55a9.9 9.9 0 0 0 5.12 1.4h.01c5.46 0 9.89-4.4 9.89-9.84C21.94 6.4 17.5 2 12.04 2zm5.79 13.98c-.24.68-1.4 1.24-1.94 1.32-.5.07-1.13.1-1.82-.11-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.78-4.17-4.93-4.36-.14-.2-1.18-1.57-1.18-3 0-1.42.74-2.12 1-2.41.26-.29.57-.36.76-.36h.55c.17 0 .4-.06.63.48.24.55.81 1.98.88 2.12.07.14.12.31.02.5-.1.2-.14.32-.28.49-.14.17-.3.38-.42.51-.14.14-.29.29-.12.57.17.28.74 1.22 1.59 1.98 1.1.97 2.02 1.27 2.3 1.41.29.14.45.12.62-.07.17-.2.72-.84.91-1.13.2-.28.39-.24.65-.14.26.1 1.66.78 1.95.92.28.14.47.21.54.33.07.12.07.68-.17 1.36z"
      />
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        fill="currentColor"
        d="M22 12.07C22 6.5 17.52 2 12 2S2 6.5 2 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.03H7.9v-2.9h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.75 8.44-4.91 8.44-9.93z"
      />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-main">
        <div className="footer-signoff">
          <a className="footer-brand" href="#start">
            <Mark />
            <span>MulchMaster</span>
          </a>
          <p className="footer-tag">
            Wycinka i mulczowanie działek. Na Facebooku jako {FACEBOOK_NAME}.
          </p>
        </div>

        <div className="footer-call">
          <p className="footer-call-label">Zadzwoń</p>
          <a className="footer-phone" href={PHONE_HREF}>
            {PHONE_DISPLAY}
          </a>
          <p className="footer-hours">Jesteśmy w terenie — oddzwaniamy.</p>
          <div className="footer-write">
            <span className="footer-write-label">Napisz</span>
            <a className="footer-icon-link" href={WHATSAPP} {...external}>
              <IconWhatsApp />
              WhatsApp
            </a>
            <a className="footer-icon-link" href={FACEBOOK} {...external}>
              <IconFacebook />
              Facebook
            </a>
            <a className="footer-icon-link footer-icon-link--text" href="#kontakt">
              Opisz działkę
            </a>
          </div>
        </div>
      </div>

      <div className="wrap footer-links-row">
        <nav className="footer-inline" aria-label="Stopka">
          <a href="#o-firmie">O firmie</a>
          <a href="#uslugi">Usługi</a>
          <a href="#sprzet">Sprzęt</a>
          <a href="#realizacje">Realizacje</a>
          <a href="#pytania">Pytania</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
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
