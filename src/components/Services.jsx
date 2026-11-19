import { Photo } from "./Photo.jsx";
import { services } from "../site.js";

const tiles = [
  {
    title: "Wycinka za materiał",
    text: "Samosiejki od 1 ha ścinamy bez opłaty w zamian za drewno. Mulczowanie i frezowanie wyceniamy osobno.",
    featured: true,
  },
  {
    title: "Wycinka drzew",
    text: "Drzewa na działce, przy domu albo drodze. Zakres ustalamy przed robotą.",
  },
  {
    title: "Mulczowanie",
    text: "Gałęzie i zarośla rozdrabniamy na miejscu — bez sterty do ręcznego sprzątania.",
  },
  {
    title: "Frezowanie pni",
    text: "Pniaki, które przeszkadzają w budowie albo przejeździe. Robimy je od godziny.",
  },
];

function TileIcon({ name }) {
  if (name === "materiał") {
    return (
      <svg className="tile-ico" viewBox="0 0 32 32" aria-hidden="true">
        <path d="M6 22V10h4l3 6 3-6h4v12h-3.5V14.5L13.5 22h-2L8.5 14.5V22H6z" fill="currentColor" />
      </svg>
    );
  }
  if (name === "wycinka") {
    return (
      <svg className="tile-ico" viewBox="0 0 32 32" aria-hidden="true">
        <path d="M16 4l2 8h8l-6.5 5 2.5 8L16 20l-6 5 2.5-8L6 12h8l2-8z" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }
  if (name === "mulcz") {
    return (
      <svg className="tile-ico" viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M16 7v18M7 16h18" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }
  return (
    <svg className="tile-ico" viewBox="0 0 32 32" aria-hidden="true">
      <rect x="7" y="10" width="18" height="14" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M11 10V8h10v2" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  );
}

const icons = ["materiał", "wycinka", "mulcz", "frez"];

export function Services() {
  return (
    <section className="section sheet" id="uslugi">
      <div className="wrap">
        <header className="svc-head">
          <div>
            <p className="kicker">Usługi</p>
            <h2>Co robimy</h2>
          </div>
          <p>
            Od wycinki po mulczowanie. Zakres dobieramy do działki, nie do gotowego
            pakietu z cennika.
          </p>
        </header>
      </div>

      <div className="tile-band">
        <div className="tile-band-bg" aria-hidden="true">
          <Photo
            id="doosan-pole"
            alt=""
            sizes="100vw"
          />
        </div>
        <div className="wrap tile-row">
          {tiles.map((tile, index) =>
            tile.featured ? (
              <article className="tile tile-hot" key={tile.title}>
                <TileIcon name={icons[index]} />
                <h3>{tile.title}</h3>
                <p>{tile.text}</p>
                <a className="btn" href="#kontakt">
                  Zapytaj
                </a>
              </article>
            ) : (
              <article className="tile" key={tile.title}>
                <TileIcon name={icons[index]} />
                <h3>{tile.title}</h3>
                <p>{tile.text}</p>
              </article>
            ),
          )}
        </div>
      </div>

      <div className="wrap">
        <p className="svc-more-label">Cały zakres</p>
        <ul className="svc-lines">
          {services.map((service) => (
            <li key={service.title}>
              <strong>{service.title}</strong>
              <span>{service.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
