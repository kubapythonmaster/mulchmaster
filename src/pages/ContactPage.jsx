import { Contact } from "../components/Contact.jsx";
import { Photo } from "../components/Photo.jsx";
import { homeUrl } from "../paths.js";
import { PHONE_DISPLAY, PHONE_HREF } from "../site.js";

export function ContactPage() {
  return (
    <main id="tresc" className="page-contact">
      <section className="page-hero" aria-labelledby="kontakt-title">
        <div className="page-hero-bg" aria-hidden="true">
          <Photo
            id="bocian"
            alt=""
            sizes="100vw"
            priority
          />
          <div className="page-hero-shade" />
        </div>
        <div className="wrap page-hero-copy">
          <nav className="breadcrumbs" aria-label="Okruszki">
            <a href={homeUrl}>Strona główna</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Kontakt</span>
          </nav>
          <p className="kicker">Kontakt</p>
          <h1 id="kontakt-title">Porozmawiajmy o Twojej działce</h1>
          <p className="lead">
            Zadzwoń, napisz na WhatsAppie albo Facebooku — albo opisz działkę w
            formularzu poniżej. Oddzwaniamy z terenu.
          </p>
          <div className="actions">
            <a className="btn" href={PHONE_HREF}>
              Zadzwoń: {PHONE_DISPLAY}
            </a>
            <a className="btn btn-ghost" href="#napisz">
              Opisz działkę
            </a>
          </div>
        </div>
      </section>
      <Contact />
    </main>
  );
}
