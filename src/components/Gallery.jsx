import { useEffect, useRef, useState } from "react";
import { gallery } from "../site.js";
import { Photo } from "./Photo.jsx";

const SLIDE_MS = 5500;

export function Gallery() {
  const dialogRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [active, setActive] = useState(null);
  const current = active === null ? null : gallery[active];
  const slide = gallery[index];

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || active !== null) return undefined;
    const id = window.setTimeout(() => {
      setIndex((value) => (value + 1) % gallery.length);
    }, SLIDE_MS);
    return () => window.clearTimeout(id);
  }, [index, active]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || active === null || dialog.open) return undefined;
    dialog.showModal();
    return undefined;
  }, [active]);

  useEffect(() => {
    if (active === null) return undefined;
    const onKey = (event) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        setActive((value) => (value + 1) % gallery.length);
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setActive((value) => (value - 1 + gallery.length) % gallery.length);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  function go(next) {
    setIndex((next + gallery.length) % gallery.length);
  }

  function close() {
    dialogRef.current?.close();
    setActive(null);
  }

  return (
    <section className="section work tone" id="realizacje">
      <div className="wrap work-head">
        <div>
          <p className="kicker">Realizacje</p>
          <h2>Nasze realizacje</h2>
        </div>
        <p>Zdjęcia z wycinki i mulczowania. Kliknij, żeby powiększyć.</p>
      </div>
      <div className="wrap">
        <div className="show">
          <button
            type="button"
            className="show-stage"
            onClick={() => setActive(index)}
            aria-label={`Powiększ: ${slide.title}`}
          >
            {gallery.map((item, i) => (
              <Photo
                key={item.id}
                id={item.id}
                alt={i === index ? item.alt : ""}
                sizes="(max-width: 900px) 100vw, 1120px"
                priority={i === 0}
                className={i === index ? "is-on" : undefined}
              />
            ))}
            <span className="show-shade" />
            <span className="show-copy">
              <span className="show-n">{String(index + 1).padStart(2, "0")}</span>
              <strong>{slide.title}</strong>
              <span>{slide.text}</span>
            </span>
          </button>
          <div className="show-bar">
            <button type="button" className="work-btn" onClick={() => go(index - 1)} aria-label="Poprzednie zdjęcie">
              ←
            </button>
            <div className="show-dots" role="tablist" aria-label="Zdjęcia realizacji">
              {gallery.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  className="show-dot"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`${item.title}, ${i + 1} z ${gallery.length}`}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>
            <button type="button" className="work-btn" onClick={() => go(index + 1)} aria-label="Następne zdjęcie">
              →
            </button>
          </div>
        </div>
      </div>
      <dialog
        className="lightbox"
        ref={dialogRef}
        aria-label={current ? current.title : "Podgląd zdjęcia"}
        onClose={() => setActive(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
      >
        {current && (
          <div className="lightbox-inner">
            <Photo id={current.id} alt={current.alt} sizes="(max-width: 800px) 92vw, 720px" priority />
            <p className="lightbox-title">
              <strong>{current.title}</strong>
              <span>{current.text}</span>
            </p>
            <div className="lightbox-toolbar">
              <button
                type="button"
                onClick={() => setActive((value) => (value - 1 + gallery.length) % gallery.length)}
              >
                Wstecz
              </button>
              <p>
                {active + 1} / {gallery.length}
              </p>
              <button type="button" onClick={() => setActive((value) => (value + 1) % gallery.length)}>
                Dalej
              </button>
              <button type="button" onClick={close}>
                Zamknij
              </button>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
