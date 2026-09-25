// Renders social media images: node scripts/social/render.mjs
// Writes docs/social/facebook-group-cover.png (1640 x 856) and a sharper @2x copy.
import { chromium } from 'playwright';
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
for (const scale of [1, 2]) {
  const page = await browser.newPage({ viewport: { width: 1640, height: 856 }, deviceScaleFactor: scale });
  await page.goto(new URL('./fb-group-cover.html', import.meta.url).href);
  await page.evaluate(() => document.fonts.ready);
  const name = scale === 1 ? 'facebook-group-cover.png' : 'facebook-group-cover@2x.png';
  await page.screenshot({ path: new URL(`../../docs/social/${name}`, import.meta.url).pathname });
  await page.close();
  console.log(`Wrote docs/social/${name}`);
}
await browser.close();
