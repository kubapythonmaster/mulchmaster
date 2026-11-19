import { faq } from "../site.js";

export function Faq() {
  return (
    <section className="section sheet" id="pytania">
      <div className="faq-wrap">
        <header className="section-head center-head">
          <p className="kicker">Pytania</p>
          <h2>Zanim wjedziemy</h2>
          <p>Krótko, bez obiecywania roboty, której nie ma w zakresie.</p>
        </header>
        <div className="faq-list">
          {faq.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
