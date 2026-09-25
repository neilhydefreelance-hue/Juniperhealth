// Builds the favicon and home screen icons from src/assets/plant.svg.
// Run with: node scripts/make-icons.mjs
import sharp from 'sharp';
import { readFileSync } from 'node:fs';

const inner = readFileSync(new URL('../src/assets/plant.svg', import.meta.url), 'utf8')
  .replace(/<svg[^>]*>/, '')
  .replace('</svg>', '')
  .replace(/currentColor/g, '#fff');

// A full-bleed square with the plant in the middle. Used where the device
// adds its own rounded corners (Apple) or masks the icon (Android).
function square(size, plantScale) {
  const offset = (100 - 100 * plantScale) / 2;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="${size}" height="${size}">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#8556B8"/><stop offset="1" stop-color="#432777"/></linearGradient></defs>
  <rect width="100" height="100" fill="url(#g)"/>
  <g transform="translate(${offset} ${offset - 2}) scale(${plantScale})" fill="none" stroke="#fff" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round">${inner}</g>
</svg>`;
}

const out = new URL('../public/', import.meta.url);
const jobs = [
  ['apple-touch-icon.png', 180, 0.72],
  ['icon-192.png', 192, 0.72],
  ['icon-512.png', 512, 0.72],
  ['icon-maskable-512.png', 512, 0.56],
];
for (const [name, size, scale] of jobs) {
  await sharp(Buffer.from(square(size, scale))).png({ compressionLevel: 9 }).toFile(new URL(name, out).pathname);
}
// Small PNG fallback for older browsers that do not read SVG favicons.
await sharp(new URL('favicon.svg', out).pathname, { density: 200 }).resize(48, 48).png().toFile(new URL('favicon-48.png', out).pathname);
// The full round logo, resized for the header of the social share image and the About page.
await sharp(new URL('../docs/logo-master.png', import.meta.url).pathname).resize(512, 512).webp({ quality: 88 }).toFile(new URL('images/logo-512.webp', out).pathname);
await sharp(new URL('../docs/logo-master.png', import.meta.url).pathname).resize(512, 512).png({ compressionLevel: 9 }).toFile(new URL('images/logo-512.png', out).pathname);
console.log('Icons written.');
