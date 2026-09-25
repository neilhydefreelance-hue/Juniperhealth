# Notes for AI coding sessions

- This is the Juniper Health website (juniperhealth.info), built with Astro 7, Keystatic and Cloudflare Workers.
- **Never use em dashes or en dashes** in any copy, code comments or docs. Use commas, full stops or brackets. Ranges are written "8 to 11". `npm run lint:copy` enforces this after a build.
- Write in plain English for a reading age of 9 to 11, UK spelling, short sentences. See docs/BRAND.md.
- Public pages must stay fast: no client-side frameworks, no third-party scripts beyond the optional Cloudflare beacon, no web font other than the two self-hosted ones.
- Self-check answers must never leave the browser. Do not add network calls to `src/lib/checker/`.
- PIP points must match Schedule 1 of the PIP Regulations 2013. Update `tests/scoring.test.ts` with any change.
- Before committing: `npm run build && npm run lint:copy && npm test && npm run check`, and ideally the browser tests (see README).
- **Conditions are always listed A to Z**, and so are the condition groups. Sorting is automatic (`aToZ` in `src/lib/topics.ts`). When adding a condition, also renumber the `order:` field of every condition main page in that group so it follows A to Z, and keep any hand-written lists (footer, menu, Keystatic options) A to Z. `npm run lint:copy` fails if a condition list is out of order.
