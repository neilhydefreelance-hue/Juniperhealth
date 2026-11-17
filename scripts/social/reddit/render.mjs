// Renders the Reddit community icon and banner: node scripts/social/reddit/render.mjs
import { chromium } from 'playwright';
import { readFileSync, writeFileSync, mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const root = new URL('../../../', import.meta.url).pathname;
const out = `${root}docs/social/reddit/`;
const plant = readFileSync(`${root}src/assets/plant.svg`, 'utf8').replace('<svg ', '<svg class="plant" ');
const fonts = `
  @font-face { font-family: Lexend; src: url('file://${root}public/fonts/lexend.woff2'); font-weight: 100 900; }
  @font-face { font-family: Atkinson; src: url('file://${root}public/fonts/atkinson-next.woff2'); font-weight: 200 800; }
  * { margin: 0; box-sizing: border-box; }
  body { overflow: hidden; }`;

const icon = (size) => `<html><head><style>${fonts}
  body { width: ${size}px; height: ${size}px; background: radial-gradient(circle at 30% 25%, #8556B8, #5B3494 55%, #432777); display: grid; place-items: center; }
  .plant { width: 68%; height: 68%; color: #fff; stroke-width: 5; }
</style></head><body>${plant}</body></html>`;

const banner = `<html><head><style>${fonts}
  body { width: 1920px; height: 576px; position: relative; color: #fff; font-family: Atkinson, sans-serif;
    background: linear-gradient(115deg, #8556B8 0%, #5B3494 45%, #2E1A52 100%); }
  .glow { position: absolute; width: 900px; height: 900px; border-radius: 50%; background: radial-gradient(circle, rgba(242,180,65,.18), transparent 65%); left: -220px; top: -380px; }
  .plant { position: absolute; color: rgba(255,255,255,.10); stroke-width: 3; }
  .p1 { width: 560px; height: 560px; right: 60px; top: 10px; }
  .p2 { width: 340px; height: 340px; left: 90px; bottom: -80px; transform: rotate(-12deg); }
  .inner { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); width: 1400px; text-align: center; }
  .eyebrow { font-family: Lexend; font-weight: 600; letter-spacing: .18em; text-transform: uppercase; color: #F2B441; font-size: 30px; }
  h1 { font-family: Lexend; font-weight: 700; font-size: 104px; line-height: 1.05; margin: 14px 0 20px; }
  p { font-size: 38px; color: #EDE4F8; }
  .url { display: inline-block; margin-top: 28px; background: #F2B441; color: #1E1B26; font-family: Lexend; font-weight: 600; font-size: 32px; padding: 10px 32px; border-radius: 999px; }
</style></head><body>
  <div class="glow"></div>
  ${plant.replace('class="plant"', 'class="plant p1"')}
  ${plant.replace('class="plant"', 'class="plant p2"')}
  <div class="inner">
    <div class="eyebrow">Juniper Health community</div>
    <h1>You are not on your own</h1>
    <p>Support with health conditions and disability benefits in England and Wales</p>
    <span class="url">juniperhealth.info</span>
  </div>
</body></html>`;

// Slim banners: one row with the heading on the left and the web address on the right.
const slim = (h) => {
  const big = h >= 200;
  return `<html><head><style>${fonts}
  body { width: 1920px; height: ${h}px; position: relative; color: #fff; font-family: Atkinson, sans-serif;
    background: linear-gradient(115deg, #8556B8 0%, #5B3494 45%, #2E1A52 100%); }
  .plant { position: absolute; color: rgba(255,255,255,.10); stroke-width: 3; }
  .p1 { width: ${h * 1.6}px; height: ${h * 1.6}px; right: 40px; top: ${-h * 0.3}px; }
  .row { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; gap: ${big ? 70 : 48}px; }
  .eyebrow { font-family: Lexend; font-weight: 600; letter-spacing: .18em; text-transform: uppercase; color: #F2B441; font-size: ${big ? 24 : 18}px; }
  h1 { font-family: Lexend; font-weight: 700; font-size: ${big ? 76 : 50}px; line-height: 1.05; margin-top: ${big ? 8 : 4}px; }
  p { font-size: 30px; color: #EDE4F8; margin-top: 10px; }
  .url { background: #F2B441; color: #1E1B26; font-family: Lexend; font-weight: 600; font-size: ${big ? 30 : 24}px; padding: ${big ? '10px 30px' : '7px 22px'}; border-radius: 999px; white-space: nowrap; }
</style></head><body>
  ${plant.replace('class="plant"', 'class="plant p1"')}
  <div class="row">
    <div>
      <div class="eyebrow">Juniper Health community</div>
      <h1>You are not on your own</h1>
      ${big ? '<p>Health conditions and disability benefits in England and Wales</p>' : ''}
    </div>
    <span class="url">juniperhealth.info</span>
  </div>
</body></html>`;
};

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
const shot = async (html, w, h, file) => {
  const page = await browser.newPage({ viewport: { width: w, height: h } });
  // Load from a file so the local font files can be read.
  const tmp = join(mkdtempSync(join(tmpdir(), 'reddit-')), 'page.html');
  writeFileSync(tmp, html);
  await page.goto('file://' + tmp, { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: out + file });
  await page.close();
  console.log('Wrote', file);
};
await shot(icon(256), 256, 256, 'reddit-icon-256.png');
await shot(icon(512), 512, 512, 'reddit-icon-512.png');
// 10:3, as Reddit asks for.
await shot(banner, 1920, 576, 'reddit-banner-1920x576.png');
await shot(slim(256), 1920, 256, 'reddit-banner-1920x256.png'); // 7.5:1
await shot(slim(128), 1920, 128, 'reddit-banner-1920x128.png'); // 15:1
await browser.close();
