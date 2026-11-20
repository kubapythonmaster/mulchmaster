import { PHONE_HREF } from "../site.js";
import { Photo } from "./Photo.jsx";

export function Offer() {
  return (
    <section className="band-cta" id="oferta">
      <div className="band-cta-media" aria-hidden="true">
        <Photo id="bocian" alt="" sizes="100vw" />
      </div>
      <div className="band-cta-shade" />
      <div className="wrap">
        <div className="band-cta-copy">
          <p className="kicker">Wycinka za materiał</p>
          <h2>Od 1 ha samosiejek — ścinamy bez opłaty.</h2>
          <p>
            Bierzemy materiał zamiast gotówki. Mulczowanie, frezowanie i wywóz
            wyceniamy osobno, zanim wjedziemy.
          </p>
          <div className="actions">
            <a className="btn" href={PHONE_HREF}>
              Zadzwoń teraz
            </a>
            <a className="btn btn-ghost" href="#kontakt">
              Wyślij zdjęcie działki
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
