import { lazy, Suspense } from "react";
import { About } from "../components/About.jsx";
import { ContactTeaser } from "../components/ContactTeaser.jsx";
import { Faq } from "../components/Faq.jsx";
import { Gear } from "../components/Gear.jsx";
import { Hero } from "../components/Hero.jsx";
import { Offer } from "../components/Offer.jsx";
import { Services } from "../components/Services.jsx";

const Gallery = lazy(() =>
  import("../components/Gallery.jsx").then((mod) => ({ default: mod.Gallery })),
);

export function HomePage() {
  return (
    <main id="tresc">
      <Hero />
      <About />
      <Services />
      <Gear />
      <Suspense fallback={<div className="section sheet" aria-hidden="true" />}>
        <Gallery />
      </Suspense>
      <Offer />
      <Faq />
      <ContactTeaser />
    </main>
  );
}
