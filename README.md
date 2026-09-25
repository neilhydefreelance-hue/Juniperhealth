# Juniper Health

The website for **juniperhealth.app**: plain-English guides to health conditions and UK disability benefits (PIP, Attendance Allowance and DLA), with free self-checks that run entirely in the visitor's browser.

Run by Neil Hyde, trading as Juniper Health.

## Quick start

```bash
npm install
npm run dev        # http://localhost:4321 (editor at /keystatic)
npm run build      # builds the site into dist/ for Cloudflare
npm test           # scoring tests for the self-checks
npm run lint:copy  # after a build: no dashes, no broken links, good titles
npm run check      # TypeScript and Astro checks
```

Browser and accessibility tests (after a build):

```bash
python3 -m http.server 4322 -d dist/client &
npm run test:e2e
```

## How it is built

| Part | Choice | Why |
| --- | --- | --- |
| Site generator | [Astro 7](https://astro.build) | Every public page is plain HTML built ahead of time. No JavaScript on content pages. |
| Hosting | Cloudflare Workers (static assets) | Fast UK edge servers, free SSL, free email forwarding and analytics. |
| Editor | [Keystatic](https://keystatic.com) | A simple editing screen at /keystatic. Content is saved as files in this repository. |
| Content format | Markdoc (`.mdoc`) with front matter | Readable text files, plus building blocks such as highlight boxes and self-check links. |
| Fonts | Lexend (headings), Atkinson Hyperlegible Next (body) | Self-hosted, Latin only, preloaded. |

## Folder guide

```
src/
  content/          All page text (edited through Keystatic)
    conditions/     Groups (physical.mdoc), conditions (physical/asthma.mdoc) and their pages (physical/asthma/treatment.mdoc)
    benefits/       One main page per benefit, plus pages inside it (pip/how-to-claim.mdoc)
    pages/          About, contact and legal pages
    products/       Affiliate products (empty at launch)
  data/             settings.json (business details) and rates.json (benefit rates)
  lib/checker/      The self-check questions and scoring (pip.ts, aa.ts, dla.ts, engine.ts)
  components/       Header, footer, cards, boxes and other building blocks
  layouts/          Page templates
  pages/            Routes (web addresses)
  styles/global.css The design system: colours, type, spacing and components
docs/               Brand guide, editing guide, deployment and launch checklist
tests/              Unit tests (scoring) and browser tests (e2e.mjs)
scripts/            Icon, share image and copy checking scripts
```

## Adding a new condition

1. In Keystatic, open **Health condition pages** and choose **Add**.
2. Give the main page a web address made of its group and name, for example `physical/me-cfs`, and fill in **Condition name** and **Card icon**.
3. Add pages inside it, for example `physical/me-cfs/treatment`.
4. Add it to the product options in `keystatic.config.ts` if you want affiliate products on it.

Conditions sit inside groups. A group is a page with a one-part address (for example `physical`). The group page, the A to Z list on /conditions/ and the home page list its conditions automatically. A new group needs adding to `NAV` in `src/data/site.ts`.

The topic menu, breadcrumbs, structured data, sitemap and llms.txt all update automatically.

## The self-checks

The PIP, Attendance Allowance and DLA checks are defined as data in `src/lib/checker/`. The questions are rendered as a normal HTML form, and `engine.ts` turns them into one question per screen. Scoring happens in the browser. **Nothing is ever sent to a server.** Answers are only stored (in `localStorage`) if the visitor presses "Save my answers on this device".

The PIP descriptors follow Schedule 1 of the PIP Regulations 2013. `tests/scoring.test.ts` checks every points value against the law. If the Timms Review changes the rules, update `pip.ts` and the tests together.

Benefit rates live in `src/data/rates.json` (editable in Keystatic under **Benefit rates**). Update them every April.

## Performance

Content pages ship no JavaScript, inline their CSS and preload two small font files. Measured on a throttled mobile connection: first content and largest content at about 0.3 seconds on 4G and under 0.6 seconds on slow 4G, with no layout shift.

## House rules for all text

See [docs/BRAND.md](docs/BRAND.md). In short: plain English, UK spelling, short sentences, and never use em dashes or en dashes. `npm run lint:copy` enforces the dash rule.
