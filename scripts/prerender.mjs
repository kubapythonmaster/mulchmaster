import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const entryPath = path.resolve("dist/server/entry-server.js");
const { render } = await import(pathToFileURL(entryPath).href);
const templatePath = path.resolve("dist/index.html");
const template = fs.readFileSync(templatePath, "utf8");

if (!template.includes("<!--app-->")) {
  console.error("Brak znacznika <!--app--> w dist/index.html");
  process.exit(1);
}

const pages = [
  {
    url: "/",
    file: "index.html",
    title: "MulchMaster — wycinka drzew i mulczowanie działek",
    description:
      "Wycinka drzew, usuwanie samosiejek i mulczowanie działek. Bezpłatna wycinka za materiał od 1 ha. Koparka Doosan, ciągnik Fendt. Tel. 512 984 776.",
    preload: "doosan-las",
    check: "Wycinka drzew",
  },
  {
    url: "/kontakt/",
    file: path.join("kontakt", "index.html"),
    title: "Kontakt — MulchMaster | wycinka i mulczowanie",
    description:
      "Skontaktuj się z MulchMaster: telefon 512 984 776, WhatsApp, Facebook albo formularz. Wyślij zdjęcie działki — oddzwaniamy z terenu.",
    preload: "bocian",
    check: "Porozmawiajmy o Twojej działce",
  },
];

for (const page of pages) {
  const rendered = render(page.url).replace(/^(?:<link\b[^>]*>)+/, "");
  if (!rendered.includes(page.check)) {
    console.error(`Prerender nie zawiera treści dla ${page.url}`);
    process.exit(1);
  }

  let html = template.replace("<!--app-->", () => rendered);
  html = html
    .replace(/<title>.*?<\/title>/, `<title>${page.title}</title>`)
    .replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
      `<meta name="description" content="${page.description}" />`,
    )
    .replace(
      /<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:title" content="${page.title}" />`,
    )
    .replace(
      /<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:description" content="${page.description}" />`,
    );

  if (page.preload === "bocian") {
    html = html.replace(
      /doosan-las-480\.webp/g,
      "bocian-480.webp",
    ).replace(
      /doosan-las\.webp/g,
      "bocian.webp",
    ).replace(
      /doosan-las-960\.webp/g,
      "bocian-960.webp",
    );
  }

  const outPath = path.resolve("dist", page.file);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, html);
  console.log("Prerender OK,", page.url, rendered.length, "znaków");
}

fs.rmSync(path.resolve("dist/server"), { recursive: true, force: true });
