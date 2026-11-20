import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { App } from "./App.jsx";
import "./styles.css";

const root = document.getElementById("root");
const url = `${window.location.pathname}${window.location.search}`;
const app = (
  <StrictMode>
    <App url={url} />
  </StrictMode>
);

if (root.firstElementChild) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
