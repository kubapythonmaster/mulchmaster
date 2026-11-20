import { mkdir, writeFile, readdir, unlink } from "node:fs/promises";
import { join } from "node:path";

const dir = join(process.cwd(), "public", "fonts");
await mkdir(dir, { recursive: true });

for (const name of await readdir(dir)) {
  if (name.startsWith("manrope-") || name.startsWith("figtree-")) {
    await unlink(join(dir, name));
  }
}

const cssUrl =
  "https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&display=swap";

const css = await (
  await fetch(cssUrl, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    },
  })
).text();

const keep = new Set(["latin", "latin-ext"]);
const faces = [];
const parts = css.split("/* ");
for (const part of parts.slice(1)) {
  const subset = part.slice(0, part.indexOf(" */")).trim();
  if (!keep.has(subset)) continue;
  const weight = part.match(/font-weight:\s*(\d+)/)?.[1];
  const range = part.match(/unicode-range:\s*([^;]+)/)?.[1]?.trim();
  const url = part.match(/url\(([^)]+)\)/)?.[1]?.replace(/['"]/g, "");
  if (!weight || !url || !range) continue;
  const name = `manrope-${weight}-${subset}.woff2`;
  const bin = Buffer.from(await (await fetch(url)).arrayBuffer());
  await writeFile(join(dir, name), bin);
  faces.push({ weight, subset, name, range });
  console.log("saved", name, bin.length);
}

const out = faces
  .map(
    (f) => `@font-face {
  font-family: Manrope;
  font-style: normal;
  font-weight: ${f.weight};
  font-display: swap;
  src: url("/fonts/${f.name}") format("woff2");
  unicode-range: ${f.range};
}`,
  )
  .join("\n");

await writeFile(join(process.cwd(), "scripts", "manrope-faces.css"), out);
console.log("faces:", faces.length);
