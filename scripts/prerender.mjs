import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const entryPath = path.resolve("dist/server/entry-server.js");
const { render } = await import(pathToFileURL(entryPath).href);
const indexPath = path.resolve("dist/index.html");
const html = fs.readFileSync(indexPath, "utf8");

if (!html.includes("<!--app-->")) {
  console.error("Brak znacznika <!--app--> w dist/index.html");
  process.exit(1);
}

const rendered = render().replace(/^(?:<link\b[^>]*>)+/, "");
if (!rendered.includes("Wycinka drzew")) {
  console.error("Prerender nie zawiera treści strony");
  process.exit(1);
}

fs.writeFileSync(indexPath, html.replace("<!--app-->", () => rendered));
fs.rmSync(path.resolve("dist/server"), { recursive: true, force: true });
console.log("Prerender OK,", rendered.length, "znaków");
