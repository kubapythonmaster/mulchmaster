import { FACEBOOK_NAME, steps } from "../site.js";
import { Photo } from "./Photo.jsx";

const points = [
  "Wycinka drzew",
  "Mulczowanie",
  "Usuwanie samosiejek",
  "Karczowanie działek",
  "Frezowanie pni",
  "Teren pod budowę",
];

export function About() {
  return (
    <section className="section about sheet" id="o-firmie">
      <div className="wrap about-layout">
        <div className="about-copy">
          <p className="kicker">O firmie</p>
          <span className="about-mark" aria-hidden="true">
            <span />
          </span>
          <h2>Robimy to za Was.</h2>
          <p className="about-lead">
            Wycinka i mulczowanie działek — od samosiejek po teren pod budowę. Na Facebooku
            jesteśmy jako {FACEBOOK_NAME}.
          </p>
          <p>
            Szukamy działek porośniętych samosiejkami od 1&nbsp;ha i ścinamy je bez opłaty
            w zamian za drewno. Resztę — mulczowanie, frezowanie, wywóz — wyceniamy przed
            wyjazdem. Na miejscu pracuje koparka Doosan albo ciągnik Fendt, oba z mulczerem.
          </p>
          <ul className="about-list">
            {points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
        <div className="about-visual">
          <span className="about-dots" aria-hidden="true" />
          <span className="about-frame" aria-hidden="true" />
          <figure className="about-photo">
            <Photo
              id="drzewo"
              alt="Oczyszczona działka z jednym zostawionym drzewem, w tle domy i maszyna z mulczerem."
              sizes="(max-width: 899px) 100vw, 480px"
            />
          </figure>
        </div>
      </div>
      <div className="wrap">
        <ol className="steps">
          {steps.map((step) => (
            <li key={step.n}>
              <span>{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
