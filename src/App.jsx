import { About } from "./components/About.jsx";
import { Contact } from "./components/Contact.jsx";
import { Faq } from "./components/Faq.jsx";
import { Footer, CallDock } from "./components/Footer.jsx";
import { Gallery } from "./components/Gallery.jsx";
import { Gear } from "./components/Gear.jsx";
import { Header } from "./components/Header.jsx";
import { Hero } from "./components/Hero.jsx";
import { Offer } from "./components/Offer.jsx";
import { Services } from "./components/Services.jsx";

export function App() {
  return (
    <div className="site">
      <Header />
      <main id="tresc">
        <Hero />
        <About />
        <Services />
        <Gear />
        <Gallery />
        <Offer />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <CallDock />
    </div>
  );
}
