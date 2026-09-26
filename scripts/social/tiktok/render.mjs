// Renders a branded TikTok video: node scripts/social/tiktok/render.mjs pip-5-things
// Reads scripts/social/tiktok/videos/<name>.mjs and writes docs/social/tiktok/<name>.mp4 (1080 x 1920, 30 fps).
// Needs ffmpeg: set FFMPEG_PATH, or install it (pip install imageio-ffmpeg includes one).
import { chromium } from 'playwright';
import { spawn, execSync } from 'node:child_process';
import { mkdirSync } from 'node:fs';

const name = process.argv[2] ?? 'pip-5-things';
const { scenes } = await import(new URL(`./videos/${name}.mjs`, import.meta.url).href);
const FPS = 30;
const ffmpeg = process.env.FFMPEG_PATH || (() => {
  try { return execSync('python3 -c "import imageio_ffmpeg as f; print(f.get_ffmpeg_exe())"').toString().trim(); } catch { return 'ffmpeg'; }
})();
const outDir = new URL('../../../docs/social/tiktok/', import.meta.url).pathname;
mkdirSync(outDir, { recursive: true });
const out = `${outDir}${name}.mp4`;

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
const page = await browser.newPage({ viewport: { width: 1080, height: 1920 } });
await page.goto(new URL('./video.html', import.meta.url).href);
await page.evaluate(() => document.fonts.ready);
const total = await page.evaluate((s) => window.setup(s), scenes);
const frames = Math.round(total * FPS);

const enc = spawn(ffmpeg, ['-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', String(FPS), '-i', '-',
  '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-preset', 'slow', '-crf', '18', '-movflags', '+faststart', out], { stdio: ['pipe', 'inherit', 'inherit'] });
for (let f = 0; f < frames; f++) {
  await page.evaluate((t) => window.render(t), f / FPS);
  const buf = await page.screenshot({ type: 'jpeg', quality: 95 });
  if (!enc.stdin.write(buf)) await new Promise((r) => enc.stdin.once('drain', r));
  if (f % 150 === 0) console.log(`frame ${f} of ${frames}`);
}
enc.stdin.end();
await new Promise((r, j) => enc.on('close', (c) => (c === 0 ? r() : j(new Error('ffmpeg failed')))));
// A still of the first point, useful as a cover image when posting.
await page.evaluate((t) => window.render(t), scenes[0].dur + 1.5);
await page.screenshot({ path: `${outDir}${name}-cover.png` });
await browser.close();
console.log(`Wrote docs/social/tiktok/${name}.mp4 (${total.toFixed(1)} seconds)`);
