// Browser tests for the self-checks and key pages, plus an accessibility scan.
// Build first, serve dist/client on port 4322, then run: npm run test:e2e
//   python3 -m http.server 4322 -d dist/client
import { chromium } from 'playwright';
import { readFileSync } from 'node:fs';

const BASE = process.env.BASE_URL ?? 'http://localhost:4322';
const axeSource = readFileSync(new URL('../node_modules/axe-core/axe.min.js', import.meta.url), 'utf8');
let failures = 0;
const ok = (cond, msg) => {
  console.log(`${cond ? 'PASS' : 'FAIL'}  ${msg}`);
  if (!cond) failures++;
};

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
const page = await ctx.newPage();
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));
page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));

async function choose(value) {
  const step = page.locator('fieldset.step.is-active');
  await step.locator(`input[value="${value}"]`).check({ force: true });
  await page.locator('[data-next]').click();
}
const activeStep = () => page.locator('fieldset.step.is-active').getAttribute('data-step');

/* PIP checker: full run */
await page.goto(`${BASE}/benefits/pip/points-checker/`);
ok(!(await page.locator('[data-resume]').isVisible()), 'PIP: no resume box when nothing is saved');
ok(!(await page.locator('[data-nav]').isVisible()), 'PIP: Back and Continue hidden before starting');
await page.locator('[data-start]').click();
ok((await activeStep()) === 'age', 'PIP: first question shows after start');
await page.locator('[data-next]').click();
ok((await page.locator('[data-error]').innerText()).length > 0, 'PIP: error shown when nothing is chosen');
await choose('working');
await choose('ew');
await choose('long');
const picks = { a1: 'f', a2: 'a', a3: 'a', a4: 'f', a5: 'a', a6: 'a', a7: 'a', a8: 'a', a9: 'a', a10: 'a', a11: 'a', a12: 'c' };
let inOrder = true;
for (const [id, v] of Object.entries(picks)) {
  if ((await activeStep()) !== id) inOrder = false;
  await choose(v);
}
ok(inOrder, 'PIP: all 12 activities shown in order');
const headline = await page.locator('[data-result] h2').innerText();
ok(headline.includes('£144.90'), `PIP: headline shows enhanced daily living plus standard mobility (${headline})`);
ok((await page.locator('.score__points').first().innerText()).startsWith('12'), 'PIP: daily living shows 12 points');
ok((await page.locator('.score__band').nth(1).innerText()).includes('Standard'), 'PIP: mobility is standard rate');
ok((await page.locator('.answers tr').count()) === 12, 'PIP: answers table lists all 12 activities');

await page.locator('[data-save]').click();
ok((await page.locator('[data-save-status]').innerText()).includes('Saved on this device'), 'PIP: answers saved locally');
await page.reload();
ok(await page.locator('[data-resume]').isVisible(), 'PIP: resume box appears after reload');
await page.locator('[data-resume-yes]').click();
ok((await page.locator('[data-result] h2').innerText()) === headline, 'PIP: saved result restored');
await page.locator('[data-restart]').click();
ok((await page.evaluate(() => localStorage.getItem('juniper-checker-pip'))) === null, 'PIP: start again deletes saved answers');

await page.locator('[data-start]').click();
await choose('working');
await choose('scotland');
ok((await page.locator('[data-result] h2').innerText()).includes('Adult Disability Payment'), 'PIP: Scotland goes to ADP result');

await page.goto(`${BASE}/benefits/pip/points-checker/`);
await page.locator('[data-start]').click();
await choose('working');
await page.goBack();
ok((await activeStep()) === 'age', 'PIP: browser back returns to previous question');

/* Attendance Allowance: "None of these" skips the day question */
await page.goto(`${BASE}/benefits/attendance-allowance/checker/`);
await page.locator('[data-start]').click();
for (const v of ['yes', 'ew', 'no', 'no', 'long']) await choose(v);
await page.locator('fieldset.step.is-active input[value="wash"]').check({ force: true });
await page.locator('fieldset.step.is-active input[value="none"]').check({ force: true });
ok(!(await page.locator('fieldset.step.is-active input[value="wash"]').isChecked()), 'AA: "None of these" clears other ticks');
await page.locator('[data-next]').click();
ok((await activeStep()) === 'night', 'AA: day question skipped when no tasks');
await choose('repeated');
await choose('home');
ok((await page.locator('.score__band').innerText()).includes('Lower'), 'AA: night needs only gives lower rate');

/* DLA: under 3 skips mobility questions */
await page.goto(`${BASE}/benefits/dla/checker/`);
await page.locator('[data-start]').click();
for (const v of ['toddler', 'ew', 'no', 'long', 'lot', 'frequent', 'repeated']) await choose(v);
ok((await page.locator('.score').count()) === 1, 'DLA: only the care part shown for a toddler');
ok((await page.locator('.score__band').innerText()).includes('Highest'), 'DLA: day and night needs give highest care');

/* Physical conditions: filter box */
await page.goto(`${BASE}/conditions/physical/`);
const cardCount = await page.locator('[data-conditions] > .card').count();
ok(cardCount >= 12, `Conditions: category lists ${cardCount} conditions`);
await page.locator('#condition-filter').fill('diab');
ok((await page.locator('[data-conditions] > .card:visible').count()) === 2, 'Conditions: filter "diab" shows the two diabetes guides');
await page.locator('#condition-filter').fill('zzz');
ok((await page.locator('[data-filter-status]').innerText()).includes('No conditions'), 'Conditions: filter explains when nothing matches');
await page.goto(`${BASE}/conditions/physical/asthma/treatment/`);
ok((await page.locator('.breadcrumbs li').count()) === 5, 'Conditions: breadcrumbs include the category');

/* Mental health: group page and crisis banner */
await page.goto(`${BASE}/conditions/mental-health/`);
const mhCount = await page.locator('[data-conditions] > .card').count();
ok(mhCount >= 13, `Mental health: group lists ${mhCount} conditions`);
await page.locator('#condition-filter').fill('bipolar');
ok((await page.locator('[data-conditions] > .card:visible').count()) === 2, 'Mental health: filter "bipolar" shows bipolar 1 and 2');
await page.goto(`${BASE}/conditions/mental-health/ptsd/treatment/`);
ok(await page.getByText('If you need help now').first().isVisible(), 'Mental health: crisis help shows on condition pages');
await page.goto(`${BASE}/conditions/physical/asthma/`);
ok((await page.getByText('If you need help now').count()) === 0, 'Physical condition pages do not show the mental health crisis banner');

/* NHS health costs check */
await page.goto(`${BASE}/support/health-costs/checker/`);
await page.locator('[data-start]').click();
await choose('england');
await choose('60plus');
ok((await activeStep()) === 'pregnant', 'NHS: education question skipped for over 60s');
await choose('no');
await page.locator('fieldset.step.is-active input[value="uc"]').check({ force: true });
await page.locator('[data-next]').click();
ok((await activeStep()) === 'ucPay', 'NHS: Universal Credit earnings question shown');
await choose('mid');
ok((await activeStep()) === 'ucExtra', 'NHS: child or LCW question shown for mid earnings');
await choose('yes');
await page.locator('fieldset.step.is-active input[value="none"]').check({ force: true });
await page.locator('[data-next]').click();
await choose('yes');
ok((await page.locator('.score').count()) === 6, 'NHS: result lists 6 health costs');
ok((await page.locator('[data-result] h2').innerText()).includes('6 of 6'), 'NHS: all 6 free with qualifying Universal Credit');

/* Disability support */
await page.goto(`${BASE}/support/`);
ok((await page.locator('.grid > .card').count()) === 7, 'Support: index shows 7 topics');
await page.goto(`${BASE}/support/travel/blue-badge/`);
ok((await page.locator('.breadcrumbs li').count()) === 4, 'Support: breadcrumbs on a support page');

/* ESA and Universal Credit guides have no self-check of their own */
await page.goto(`${BASE}/benefits/universal-credit-health/`);
ok((await page.locator('.sticky-cta').count()) === 0, 'UC health element: no sticky self-check button');
ok((await page.locator('table').first().innerText()).includes('£217.26'), 'UC health element: shows the lower rate');
await page.goto(`${BASE}/benefits/esa/`);
ok((await page.locator('.sticky-cta').count()) === 0, 'ESA: no sticky self-check button');
await page.goto(`${BASE}/benefits/pip/`);
ok((await page.locator('.sticky-cta').count()) === 1, 'PIP: sticky self-check button still shows');

/* Mobile menu */
await page.goto(`${BASE}/`);
await page.locator('.site-header__inner .menu-button').click();
ok(await page.locator('#site-menu').isVisible(), 'Menu: opens on mobile');

ok(errors.length === 0, `No JavaScript errors${errors.length ? ': ' + errors.join(' | ') : ''}`);

/* Accessibility scan with axe-core, in light and dark mode */
const pages = ['/', '/conditions/', '/conditions/physical/', '/conditions/physical/asthma/', '/conditions/mental-health/', '/support/', '/support/health-costs/', '/support/health-costs/checker/', '/support/leisure/cea-card/', '/conditions/mental-health/bipolar-1/', '/conditions/mental-health/eating-disorders/benefits-and-work/', '/conditions/physical/type-2-diabetes/benefits-and-work/', '/conditions/physical/fibromyalgia/', '/benefits/', '/benefits/pip/', '/benefits/pip/activities/', '/benefits/pip/points-checker/', '/benefits/esa/', '/benefits/esa/work-capability-assessment/', '/benefits/universal-credit-health/', '/privacy-policy/', '/cookie-policy/', '/tools/'];
for (const theme of ['light', 'dark']) {
  const tctx = await browser.newContext({ viewport: { width: 390, height: 844 }, colorScheme: theme });
  const p = await tctx.newPage();
  for (const path of pages) {
    await p.goto(`${BASE}${path}`);
    await p.addScriptTag({ content: axeSource });
    const res = await p.evaluate(async () => {
      // @ts-ignore axe is added above
      const r = await axe.run(document, { runOnly: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice'] });
      return r.violations.map((v) => `${v.id} (${v.nodes.length}): ${v.nodes.slice(0, 3).map((n) => n.target.join(' ')).join(', ')}`);
    });
    ok(res.length === 0, `axe ${theme} ${path}${res.length ? '\n      ' + res.join('\n      ') : ''}`);
  }
  await tctx.close();
}

await browser.close();
console.log(failures ? `\n${failures} failed` : '\nAll browser tests passed');
process.exit(failures ? 1 : 0);
