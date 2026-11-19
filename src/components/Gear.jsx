import { Photo } from "./Photo.jsx";

export function Gear() {
  return (
    <section className="section sheet" id="sprzet">
      <div className="wrap">
        <header className="section-head">
          <p className="kicker">Sprzęt</p>
          <h2>Własny sprzęt</h2>
          <p className="lead">Na działkę wjeżdża koparka Doosan i ciągnik Fendt — oba z mulczerem.</p>
        </header>
        <div className="gear-grid">
          <figure className="shot-frame">
            <div className="shot-crop">
              <Photo
                id="fendt-plac"
                alt="Ciągnik Fendt z obciążnikiem z przodu i mulczerem z tyłu."
                sizes="(max-width: 799px) 100vw, 540px"
              />
            </div>
            <figcaption>
              <strong>Fendt z mulczerem</strong>
              Zestaw do pracy z ciągnika.
            </figcaption>
          </figure>
          <figure className="shot-frame">
            <div className="shot-crop">
              <Photo
                id="glowica"
                alt="Głowica mulczująca podniesiona na ramieniu koparki Doosan."
                sizes="(max-width: 799px) 100vw, 540px"
              />
            </div>
            <figcaption>
              <strong>Głowica mulczująca</strong>
              Rozdrabnia gałęzie, odrosty i pozostałości po wycince.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
