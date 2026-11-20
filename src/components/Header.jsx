import { useEffect, useState } from "react";
import { contactUrl, homeUrl, sectionUrl } from "../paths.js";
import { PHONE_DISPLAY, PHONE_HREF } from "../site.js";
import { Mark } from "./Mark.jsx";

const SECTION_LINKS = [
  ["o-firmie", "O firmie"],
  ["uslugi", "Usługi"],
  ["realizacje", "Realizacje"],
  ["pytania", "Pytania"],
];

export function Header({ contactPage = false }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

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

  useEffect(() => {
    if (contactPage) {
      setActive("kontakt");
      return undefined;
    }

    const sections = SECTION_LINKS.map(([id]) => document.getElementById(id)).filter(Boolean);
    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActive(visible[0].target.id);
        }
      },
      {
        rootMargin: "-28% 0px -55% 0px",
        threshold: [0.08, 0.2, 0.4],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [contactPage]);

  return (
    <header className="header">
      <div className="wrap header-bar">
        <a className="logo" href={homeUrl} onClick={() => setOpen(false)}>
          <Mark />
          <span>
            <strong>MulchMaster</strong>
            <small>wycinka · mulczowanie</small>
          </span>
        </a>
        <nav id="menu" className={open ? "nav is-open" : "nav"} aria-label="Główne">
          {SECTION_LINKS.map(([id, label]) => (
            <a
              key={id}
              href={sectionUrl(`#${id}`)}
              className={!contactPage && active === id ? "is-active" : undefined}
              aria-current={!contactPage && active === id ? "true" : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href={contactUrl}
            className={contactPage || active === "kontakt" ? "is-active" : undefined}
            aria-current={contactPage ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            Kontakt
          </a>
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
