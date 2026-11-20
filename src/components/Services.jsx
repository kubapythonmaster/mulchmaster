import { contactUrl } from "../paths.js";
import { services } from "../site.js";

export function Services() {
  return (
    <section className="section band tone" id="uslugi">
      <div className="wrap">
        <header className="svc-head">
          <h2>Co robimy</h2>
          <p>
            Od wycinki po mulczowanie. Zakres dobieramy do działki, nie do gotowego
            pakietu z cennika.
          </p>
        </header>
        <div className="svc-grid">
          {services.map((service, index) => (
            <article key={service.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{service.title}</h3>
              <p className="svc-tags">{service.tags}</p>
              <p>{service.text}</p>
            </article>
          ))}
          <a className="svc-ask" href={contactUrl}>
            <span>12</span>
            <h3>Nie wiesz, co wybrać</h3>
            <p className="svc-tags">Zdjęcie · telefon</p>
            <p>Podeślij zdjęcie działki. Powiemy, co schodzi za materiał, a co wyceniamy.</p>
          </a>
        </div>
      </div>
    </section>
  );
}
