import { useState } from "react";
import {
  external,
  FACEBOOK,
  FACEBOOK_NAME,
  formServices,
  PHONE_DISPLAY,
  PHONE_HREF,
  PHONE_TEL,
  WHATSAPP,
} from "../site.js";

export function Contact() {
  const [draft, setDraft] = useState(null);
  const [copied, setCopied] = useState(false);

  function onSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const service = String(data.get("service") || "").trim();
    const details = String(data.get("details") || "").trim();
    setCopied(false);
    setDraft(`Dzień dobry, tu ${name}.\nTelefon: ${phone}.\nUsługa: ${service}.\n${details}`);
  }

  async function copyDraft() {
    try {
      await navigator.clipboard.writeText(draft);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section className="section contact tone" id="kontakt">
      <div className="wrap contact-grid">
        <div className="contact-copy">
          <p className="kicker">Kontakt</p>
          <h2>Zadzwoń.</h2>
          <a className="phone-xl" href={PHONE_HREF}>
            {PHONE_DISPLAY}
          </a>
          <p className="contact-lead">
            Napisz na WhatsAppie albo Facebooku i dołącz zdjęcie działki. Jak nie odbierzemy,
            jesteśmy w terenie — oddzwonimy.
          </p>
          <div className="contact-actions">
            <a className="btn" href={WHATSAPP} {...external}>
              WhatsApp
            </a>
            <a className="btn btn-ghost" href={FACEBOOK} {...external}>
              Facebook
            </a>
          </div>
          <p className="contact-note">Na Facebooku jako {FACEBOOK_NAME}.</p>
        </div>
        <form className="form" onSubmit={onSubmit} aria-describedby="form-note">
          <h3>Albo napisz tu</h3>
          <p className="quiet">Składamy tekst do SMS-a albo WhatsAppa. Nic nie leci na serwer.</p>
          <label className="field">
            Imię
            <input name="name" autoComplete="name" required maxLength={80} />
          </label>
          <label className="field">
            Telefon
            <input
              name="phone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              required
              minLength={9}
              maxLength={20}
              pattern="[0-9+ ]{9,}"
              title="Podaj numer telefonu"
            />
          </label>
          <label className="field">
            Usługa
            <select name="service" defaultValue={formServices[0]}>
              {formServices.map((service) => (
                <option key={service}>{service}</option>
              ))}
            </select>
          </label>
          <label className="field">
            Co jest do zrobienia
            <textarea
              name="details"
              required
              maxLength={800}
              rows={4}
              placeholder="Gdzie jest działka, ile hektarów, co na niej rośnie."
            />
          </label>
          <button className="btn" type="submit">
            Złóż wiadomość
          </button>
          <p id="form-note" className="quiet form-note">
            SMS ucina długie treści. Do zdjęcia działki lepszy WhatsApp.
          </p>
          {draft && (
            <div className="draft" aria-live="polite">
              <label className="field">
                Gotowa wiadomość
                <textarea readOnly value={draft} rows={5} />
              </label>
              <div className="actions">
                <button className="btn" type="button" onClick={copyDraft}>
                  {copied ? "Skopiowano" : "Kopiuj"}
                </button>
                <a className="btn btn-ghost" href={`sms:${PHONE_TEL}?body=${encodeURIComponent(draft)}`}>
                  Otwórz SMS
                </a>
                <a className="btn btn-ghost" href={`${WHATSAPP}?text=${encodeURIComponent(draft)}`} {...external}>
                  WhatsApp
                </a>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
