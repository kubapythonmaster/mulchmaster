import { existsSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { spawnSync } from "node:child_process";

process.env.BASE_PATH = "/mulchmaster/";
const build = spawnSync("npm", ["run", "build"], { stdio: "inherit", shell: true, env: process.env });
if (build.status !== 0) process.exit(build.status ?? 1);

if (existsSync("dist/server")) rmSync("dist/server", { recursive: true, force: true });
writeFileSync("dist/.nojekyll", "");

const base = process.env.BASE_PATH;
function walk(dir) {
  for (const name of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, name.name);
    if (name.isDirectory()) {
      walk(path);
      continue;
    }
    if (!/\.(css|html|js|webmanifest|svg)$/i.test(name.name)) continue;
    let text = readFileSync(path, "utf8");
    const next = text
      .replaceAll('url("/fonts/', `url("${base}fonts/`)
      .replaceAll("url(/fonts/", `url(${base}fonts/`)
      .replaceAll('href="/fonts/', `href="${base}fonts/`)
      .replaceAll('href="/media/', `href="${base}media/`)
      .replaceAll('href="/favicon', `href="${base}favicon`)
      .replaceAll('href="/apple-touch-icon', `href="${base}apple-touch-icon`)
      .replaceAll('href="/site.webmanifest', `href="${base}site.webmanifest`)
      .replaceAll('content="/media/', `content="${base}media/`)
      .replaceAll('imagesrcset="/media/', `imagesrcset="${base}media/`)
      .replaceAll(", /media/", `, ${base}media/`);
    if (next !== text) writeFileSync(path, next);
  }
}
walk("dist");

const publish = spawnSync("npx", ["--yes", "gh-pages", "-d", "dist", "-f"], {
  stdio: "inherit",
  shell: true,
});
process.exit(publish.status ?? 1);
