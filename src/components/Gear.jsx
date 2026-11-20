import { Photo } from "./Photo.jsx";

export function Gear() {
  return (
    <section className="section sheet gear" id="sprzet">
      <div className="wrap gear-layout">
        <div className="gear-copy">
          <p className="kicker">Sprzęt</p>
          <h2>Własny sprzęt</h2>
          <p className="lead">
            Na działkę wjeżdża koparka Doosan i ciągnik Fendt — oba z mulczerem.
          </p>
          <ul className="gear-points">
            <li>
              <strong>Fendt z mulczerem</strong>
              <span>Zestaw do pracy z ciągnika na większych działkach.</span>
            </li>
            <li>
              <strong>Głowica mulczująca</strong>
              <span>Rozdrabnia gałęzie, odrosty i pozostałości po wycince.</span>
            </li>
          </ul>
        </div>

        <div className="gear-stack" aria-hidden="false">
          <figure className="gear-shot gear-shot--back">
            <div className="gear-crop">
              <Photo
                id="fendt-plac"
                alt="Ciągnik Fendt z obciążnikiem z przodu i mulczerem z tyłu."
                sizes="(max-width: 899px) 92vw, 520px"
              />
            </div>
            <figcaption>Fendt z mulczerem</figcaption>
          </figure>
          <figure className="gear-shot gear-shot--front">
            <div className="gear-crop">
              <Photo
                id="glowica"
                alt="Głowica mulczująca podniesiona na ramieniu koparki Doosan."
                sizes="(max-width: 899px) 70vw, 380px"
              />
            </div>
            <figcaption>Głowica mulczująca</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
