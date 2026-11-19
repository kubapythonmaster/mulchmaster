import { PHONE_DISPLAY, PHONE_HREF, steps } from "../site.js";
import { Photo } from "./Photo.jsx";

export function About() {
  return (
    <section className="section about sheet" id="o-firmie">
      <div className="wrap">
        <div className="about-split">
          <figure className="about-media">
            <Photo
              id="drzewo"
              alt="Oczyszczona działka z jednym zostawionym drzewem, w tle domy i maszyna z mulczerem."
              sizes="(max-width: 899px) 100vw, 560px"
            />
            <figcaption>Teren zdjęty pod zabudowę. Drzewo, które ma zostać, zostaje.</figcaption>
          </figure>
          <div className="about-copy">
            <p className="kicker">O firmie</p>
            <h2>Zarośnięta działka schodzi sprzętem, nie grabiami.</h2>
            <p>
              MulchMaster zajmuje się wycinką i mulczowaniem. Na Facebooku jesteśmy jako
              Wycinka za Materiał — szukamy działek porośniętych samosiejkami, od 1 ha
              wzwyż, i ścinamy je bez opłaty w zamian za drewno.
            </p>
            <p>
              Tam, gdzie po wycince został bałagan, wjeżdża mulczer na koparce Doosan albo
              na ciągniku Fendt. Gałęzie i odrosty są rozdrabniane na miejscu. Pniaki
              frezujemy, a materiał wywozimy wtedy, kiedy ma zjechać z działki.
            </p>
            <ul className="about-points">
              <li>
                <strong>Specjalizacja</strong>
                <span>Wycinka · mulczowanie · karczowanie</span>
              </li>
              <li>
                <strong>Za materiał</strong>
                <span>Samosiejki, działki od 1 ha</span>
              </li>
              <li>
                <strong>Kontakt</strong>
                <span>
                  <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
                </span>
              </li>
            </ul>
          </div>
        </div>
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
