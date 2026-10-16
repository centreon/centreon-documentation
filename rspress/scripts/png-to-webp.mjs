// Convert the docs' PNG images to WebP (called by migrate.py): same palette
// quantization as the build's PNG compression, then lossless WebP encoding.
// Usage: node scripts/png-to-webp.mjs <docs root>
// Prints the converted PNG paths (relative to the docs root) as a JSON array.
import { createHash } from 'node:crypto';
import { readdir, readFile, unlink, writeFile } from 'node:fs/promises';
import { availableParallelism } from 'node:os';
import { join, relative } from 'node:path';
import { Transformer, pngQuantize } from '@napi-rs/image';

const docsRoot = process.argv[2];

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    // public/ is served as-is and referenced by absolute URLs.
    if (entry.isDirectory() && path !== join(docsRoot, 'public')) yield* walk(path);
    else if (entry.isFile() && entry.name.endsWith('.png')) yield path;
  }
}

const files = [];
for await (const file of walk(docsRoot)) files.push(file);

// The same screenshot is often copied across versions and languages.
const encoded = new Map();
const converted = [];
let before = 0;
let after = 0;

async function convert(file) {
  const png = await readFile(file);
  const hash = createHash('sha1').update(png).digest('hex');
  if (!encoded.has(hash)) {
    // Some color types (e.g. 8-bit grayscale) cannot be encoded: keep the PNG.
    const webp = pngQuantize(png)
      .then((quantized) => new Transformer(quantized).webpLossless())
      .catch(() => null);
    encoded.set(hash, webp);
  }
  const webp = await encoded.get(hash);
  before += png.length;
  if (!webp || webp.length >= png.length) {
    after += png.length;
    return;
  }
  await writeFile(file.replace(/\.png$/, '.webp'), webp);
  await unlink(file);
  after += webp.length;
  converted.push(relative(docsRoot, file));
}

let next = 0;
await Promise.all(
  Array.from({ length: availableParallelism() }, async () => {
    while (next < files.length) await convert(files[next++]);
  }),
);

console.error(
  `  webp: ${converted.length}/${files.length} PNGs converted, ` +
    `${(before / 1048576).toFixed(1)} MB -> ${(after / 1048576).toFixed(1)} MB`,
);
console.log(JSON.stringify(converted.sort()));
