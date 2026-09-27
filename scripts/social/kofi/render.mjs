// Renders the Ko-fi tier images (2:1): node scripts/social/kofi/render.mjs
// Writes docs/social/kofi/<tier>.png (1200 x 600) and <tier>@2x.png (2400 x 1200).
import { chromium } from 'playwright';
const tiers = [
  { file: 'bronze', name: 'Bronze', icon: 'cup', line: 'A cuppa a month to keep Juniper Health free for everyone.',
    colours: { hi: '#F3C9A0', mid: '#CD7F32', lo: '#8A4E1C', glow: 'rgba(205,127,50,.35)', text: '#F3C9A0' } },
  { file: 'silver', name: 'Silver', icon: 'book', line: 'Keeps our guides accurate, up to date and growing.',
    colours: { hi: '#FFFFFF', mid: '#C9CCD3', lo: '#8C909B', glow: 'rgba(201,204,211,.3)', text: '#E4E6EB' } },
  { file: 'gold', name: 'Gold', icon: 'people', line: 'Helps our community grow and reach more people.',
    colours: { hi: '#FFE6A8', mid: '#F2B441', lo: '#B7791F', glow: 'rgba(242,180,65,.35)', text: '#F2B441' } },
];
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
for (const scale of [1, 2]) {
  const page = await browser.newPage({ viewport: { width: 1200, height: 600 }, deviceScaleFactor: scale });
  await page.goto(new URL('./tier.html', import.meta.url).href);
  await page.evaluate(() => document.fonts.ready);
  for (const t of tiers) {
    await page.evaluate((x) => window.setTier(x), t);
    const out = new URL(`../../../docs/social/kofi/${t.file}${scale === 2 ? '@2x' : ''}.png`, import.meta.url).pathname;
    await page.screenshot({ path: out });
    console.log('Wrote', out.split('/juniperhealth/')[1]);
  }
  await page.close();
}
await browser.close();
