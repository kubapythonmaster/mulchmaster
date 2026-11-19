import { useEffect, useState } from "react";
import { PHONE_HREF } from "../site.js";
import { Photo } from "./Photo.jsx";

const SLIDES = [
  {
    id: "doosan-las",
    alt: "Koparka Doosan z głowicą mulczującą pracuje w lesie o zmierzchu.",
  },
  {
    id: "fendt-laka",
    alt: "Ciągnik Fendt z mulczerem na łące pod niebieskim niebem.",
  },
  {
    id: "doosan-pole",
    alt: "Koparka Doosan z mulczerem stoi w wysokich zaroślach.",
  },
  {
    id: "po-wycince",
    alt: "Ciągnik Fendt na oczyszczonej działce po wycince.",
  },
];

const SLIDE_MS = 6500;

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return undefined;
    const id = window.setTimeout(() => {
      setIndex((current) => (current + 1) % SLIDES.length);
    }, SLIDE_MS);
    return () => window.clearTimeout(id);
  }, [index]);

  return (
    <section className="hero" id="start">
      <div className="hero-bg">
        {SLIDES.map((slide, i) => (
          <Photo
            key={slide.id}
            id={slide.id}
            alt={i === index ? slide.alt : ""}
            sizes="100vw"
            priority={i === 0}
            className={i === index ? "is-on" : undefined}
          />
        ))}
        <div className="hero-shade" />
      </div>
      <div className="hero-copy">
        <p className="kicker">Wycinka za materiał · od 1 ha</p>
        <h1>
          Działka znów do użytku.
          <span>Bez sterty gałęzi.</span>
        </h1>
        <p className="lead">
          Ścinamy drzewa i samosiejki, a mulczer rozdrabnia resztę na miejscu.
          Od 1&nbsp;ha samosiejki bierzemy za materiał. Zadzwoń i podeślij zdjęcie —
          powiemy, kiedy możemy wjechać.
        </p>
        <div className="actions">
          <a className="btn" href={PHONE_HREF}>
            Zadzwoń: 512 984 776
          </a>
          <a className="btn btn-ghost" href="#realizacje">
            Zobacz realizacje
          </a>
        </div>
      </div>
      <a className="scroll-hint" href="#o-firmie" aria-label="Przewiń dalej">
        <span className="scroll-pill" />
      </a>
    </section>
  );
}
