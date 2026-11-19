import { useEffect, useState } from "react";
import { PHONE_DISPLAY, PHONE_HREF } from "../site.js";
import { Mark } from "./Mark.jsx";

const LINKS = [
  ["#o-firmie", "O firmie"],
  ["#uslugi", "Usługi"],
  ["#realizacje", "Realizacje"],
  ["#pytania", "Pytania"],
  ["#kontakt", "Kontakt"],
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="header">
      <div className="wrap header-bar">
        <a className="logo" href="#start" onClick={() => setOpen(false)}>
          <Mark />
          <span>
            <strong>MulchMaster</strong>
            <small>wycinka · mulczowanie</small>
          </span>
        </a>
        <nav id="menu" className={open ? "nav is-open" : "nav"} aria-label="Główne">
          {LINKS.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a className="btn nav-call" href={PHONE_HREF} onClick={() => setOpen(false)}>
            Zadzwoń · {PHONE_DISPLAY}
          </a>
        </nav>
        <a className="btn header-call" href={PHONE_HREF}>
          Zadzwoń
        </a>
        <button
          type="button"
          className={open ? "menu-btn is-open" : "menu-btn"}
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr">{open ? "Zamknij menu" : "Otwórz menu"}</span>
          <span className="menu-lines" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}
