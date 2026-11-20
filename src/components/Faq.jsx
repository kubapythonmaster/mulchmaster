import { faq } from "../site.js";

export function Faq() {
  return (
    <section className="section sheet faq" id="pytania">
      <div className="wrap faq-layout">
        <header className="faq-intro">
          <p className="kicker">Pytania</p>
          <h2>Zanim wjedziemy na działkę</h2>
          <p>
            Krótko i konkretnie — bez obiecywania roboty, której nie robimy.
            Jak coś jest niejasne, dzwoń.
          </p>
          <a className="faq-jump" href="#kontakt">
            Masz inne pytanie? Napisz
          </a>
        </header>
        <div className="faq-list">
          {faq.map((item, index) => (
            <details key={item.q}>
              <summary>
                <span className="faq-num">{String(index + 1).padStart(2, "0")}</span>
                <span className="faq-q">{item.q}</span>
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
