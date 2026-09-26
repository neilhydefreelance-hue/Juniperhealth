// Quality checks run after a build (npm run lint:copy):
//  1. No em dashes or en dashes anywhere in the source or the built site.
//  2. Every internal link points to a page that exists.
//  3. Every page has a title, a description of a sensible length and one h1.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const walk = (dir, out = []) => {
  for (const name of readdirSync(dir)) {
    if (name === 'node_modules' || name.startsWith('.')) continue;
    const p = join(dir, name);
    statSync(p).isDirectory() ? walk(p, out) : out.push(p);
  }
  return out;
};

const problems = [];
const DASHES = /[–—]/;

for (const file of [...walk(join(root, 'src')), ...walk(join(root, 'docs')), join(root, 'README.md')]) {
  if (!existsSync(file) || !/\.(astro|ts|mdoc|md|json|css|mjs)$/.test(file)) continue;
  readFileSync(file, 'utf8').split('\n').forEach((line, i) => {
    if (DASHES.test(line)) problems.push(`Dash found: ${relative(root, file)}:${i + 1}`);
  });
}

const dist = join(root, 'dist', 'client');
if (existsSync(dist)) {
  const html = walk(dist).filter((f) => f.endsWith('.html'));
  for (const file of html) {
    const src = readFileSync(file, 'utf8');
    const rel = relative(dist, file);
    if (DASHES.test(src.replace(/<script[\s\S]*?<\/script>/g, ''))) problems.push(`Dash in built page: ${rel}`);
    const title = src.match(/<title>([^<]*)<\/title>/)?.[1] ?? '';
    const desc = src.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '';
    const h1s = (src.match(/<h1[\s>]/g) ?? []).length;
    if (!title) problems.push(`No title: ${rel}`);
    if (title.length > 70) problems.push(`Long title (${title.length}): ${rel}`);
    if (desc.length < 50 || desc.length > 170) problems.push(`Description length ${desc.length}: ${rel}`);
    if (h1s !== 1) problems.push(`${h1s} h1 headings: ${rel}`);
    for (const [, href] of src.matchAll(/href="(\/[^"#?]*)/g)) {
      if (href.startsWith('/_astro/') || href.startsWith('/keystatic')) continue;
      const target = join(dist, href);
      const ok = existsSync(join(target, 'index.html')) || (existsSync(target) && statSync(target).isFile());
      if (!ok) problems.push(`Broken link ${href} in ${rel}`);
    }
  }
  // Condition lists must always be A to Z (ignoring capitals, numbers in natural order).
  const aToZ = (a, b) => a.localeCompare(b, 'en-GB', { sensitivity: 'base', numeric: true });
  const text = (h) => h.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').trim();
  const checkOrder = (label, names) => {
    const sorted = [...names].sort(aToZ);
    if (names.join('|') !== sorted.join('|')) problems.push(`Not A to Z (${label}): ${names.join(', ')}`);
  };
  const conditionsDir = join(dist, 'conditions');
  if (existsSync(join(conditionsDir, 'index.html'))) {
    const index = readFileSync(join(conditionsDir, 'index.html'), 'utf8');
    const az = index.match(/<ul class="az-list">([\s\S]*?)<\/ul>/)?.[1] ?? '';
    checkOrder('A to Z list on /conditions/', [...az.matchAll(/<a [^>]*>([\s\S]*?)<\/a>/g)].map((m) => text(m[1])));
    checkOrder('groups on /conditions/', [...index.matchAll(/class="card__link" href="\/conditions\/[^/"]+\/">([^<]*)</g)].map((m) => text(m[1])));
    for (const group of readdirSync(conditionsDir)) {
      const page = join(conditionsDir, group, 'index.html');
      if (!existsSync(page)) continue;
      const cards = [...readFileSync(page, 'utf8').matchAll(/<article class="card" data-name[^>]*>[\s\S]*?class="card__link"[^>]*>([^<]*)</g)].map((m) => text(m[1]));
      if (cards.length) checkOrder(`/conditions/${group}/`, cards);
    }
    const home = readFileSync(join(dist, 'index.html'), 'utf8');
    for (const [, list] of home.matchAll(/<ul class="chip-list">([\s\S]*?)<\/ul>/g)) {
      checkOrder('home page condition list', [...list.matchAll(/<\/svg>([^<]*)<\/a>/g)].map((m) => text(m[1])));
    }
  }

  console.log(`Checked ${html.length} pages.`);
}

if (problems.length) {
  console.log([...new Set(problems)].join('\n'));
  process.exit(1);
}
console.log('All copy checks passed.');
