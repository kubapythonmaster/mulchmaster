import sharp from "sharp";
import { readdir, copyFile, mkdir } from "node:fs/promises";
import { join } from "node:path";
import { tmpdir } from "node:os";

const dir = join(process.cwd(), "public", "media");
const files = (await readdir(dir)).filter(
  (f) => f.endsWith(".webp") && !/-480\.webp$|-960\.webp$/.test(f),
);

const scratch = join(tmpdir(), `mulch-media-${Date.now()}`);
await mkdir(scratch, { recursive: true });

for (const file of files) {
  const id = file.replace(/\.webp$/, "");
  const source = join(scratch, file);
  await copyFile(join(dir, file), source);

  const meta = await sharp(source).metadata();
  const targetW = Math.min(1536, Math.max(meta.width, 1200));

  const base = sharp(source)
    .resize({
      width: targetW,
      withoutEnlargement: meta.width >= 1200,
      kernel: sharp.kernel.lanczos3,
    })
    .sharpen({ sigma: 0.7, m1: 0.7, m2: 0.35 });

  await base.clone().webp({ quality: 88, effort: 5 }).toFile(join(dir, `${id}.webp`));

  const bigMeta = await sharp(join(dir, `${id}.webp`)).metadata();

  await sharp(join(dir, `${id}.webp`))
    .resize({ width: 960, withoutEnlargement: true, kernel: sharp.kernel.lanczos3 })
    .webp({ quality: 86, effort: 5 })
    .toFile(join(dir, `${id}-960.webp`));

  await sharp(join(dir, `${id}.webp`))
    .resize({ width: 480, withoutEnlargement: true, kernel: sharp.kernel.lanczos3 })
    .webp({ quality: 84, effort: 5 })
    .toFile(join(dir, `${id}-480.webp`));

  console.log(`${id}: ${meta.width}x${meta.height} -> ${bigMeta.width}x${bigMeta.height}`);
}
