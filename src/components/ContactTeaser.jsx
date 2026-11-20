import { PHONE_DISPLAY, PHONE_HREF } from "../site.js";
import { contactUrl } from "../paths.js";

export function ContactTeaser() {
  return (
    <section className="section contact-teaser tone" id="kontakt-teaser">
      <div className="wrap contact-teaser-inner">
        <div>
          <p className="kicker">Kontakt</p>
          <h2>Masz zdjęcie działki? Napisz albo zadzwoń.</h2>
          <p>
            Na osobnej stronie znajdziesz numer, WhatsApp, Facebook i formularz
            do przygotowania wiadomości.
          </p>
        </div>
        <div className="contact-teaser-actions">
          <a className="btn" href={contactUrl}>
            Przejdź do kontaktu
          </a>
          <a className="btn btn-ghost" href={PHONE_HREF}>
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}
