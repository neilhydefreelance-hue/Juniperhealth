# Notes for AI coding sessions

- This is the Juniper Health website (juniperhealth.app), built with Astro 7, Keystatic and Cloudflare Workers.
- **Never use em dashes or en dashes** in any copy, code comments or docs. Use commas, full stops or brackets. Ranges are written "8 to 11". `npm run lint:copy` enforces this after a build.
- Write in plain English for a reading age of 9 to 11, UK spelling, short sentences. See docs/BRAND.md.
- Public pages must stay fast: no client-side frameworks, no third-party scripts beyond the optional Cloudflare beacon, no web font other than the two self-hosted ones.
- Self-check answers must never leave the browser. Do not add network calls to `src/lib/checker/`.
- PIP points must match Schedule 1 of the PIP Regulations 2013. Update `tests/scoring.test.ts` with any change.
- Before committing: `npm run build && npm run lint:copy && npm test && npm run check`, and ideally the browser tests (see README).
