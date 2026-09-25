// Renders the default social share image: node scripts/og/render.mjs
import { chromium } from 'playwright';
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.goto(new URL('./og.html', import.meta.url).href);
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: new URL('../../public/images/og-default.png', import.meta.url).pathname });
await browser.close();
console.log('Wrote public/images/og-default.png');
