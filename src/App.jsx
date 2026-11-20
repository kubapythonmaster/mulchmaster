import { Footer, CallDock } from "./components/Footer.jsx";
import { Header } from "./components/Header.jsx";
import { ContactPage } from "./pages/ContactPage.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { isContactPath } from "./paths.js";

export function App({ url = "/" }) {
  const contact = isContactPath(url);

  return (
    <div className="site">
      <Header contactPage={contact} />
      {contact ? <ContactPage /> : <HomePage />}
      <Footer />
      <CallDock />
    </div>
  );
}
