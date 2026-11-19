import { PHONE_HREF } from "../site.js";
import { Photo } from "./Photo.jsx";

export function Offer() {
  return (
    <section className="band-cta" id="oferta">
      <div className="band-cta-media" aria-hidden="true">
        <Photo
          id="bocian"
          alt=""
          sizes="100vw"
        />
      </div>
      <div className="band-cta-shade" />
      <div className="wrap">
        <div className="band-cta-copy">
          <p className="kicker">Wycinka za materiał</p>
          <h2>Bezpłatnie od 1 ha, gdy na działce są samosiejki.</h2>
          <p>
            Ścinamy bez opłaty w zamian za pozyskany materiał. Mulczowanie, frezowanie
            i wywóz wyceniamy osobno.
          </p>
          <div className="actions">
            <a className="btn" href={PHONE_HREF}>
              Zadzwoń
            </a>
            <a className="btn btn-ghost" href="#kontakt">
              Opisz działkę
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
