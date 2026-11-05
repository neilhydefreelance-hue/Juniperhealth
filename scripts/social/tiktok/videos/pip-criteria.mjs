// "Can I get PIP?" The PIP criteria in about 45 seconds. Rates come from src/data/rates.json.
import { readFileSync } from 'node:fs';
const { pip, taxYear } = JSON.parse(readFileSync(new URL('../../../../src/data/rates.json', import.meta.url), 'utf8'));
const money = (n) => `£${n.toFixed(2)}`;

const point = (n, title, body, dur = 5) => ({
  dur,
  kind: 'point',
  html: `<div class="num" data-in="0.1">${n}</div><h2 data-in="0.35">${title}</h2>${body}`,
});

const activities = [
  'Preparing food', 'Eating and drinking', 'Managing medicines', 'Washing and bathing', 'Using the toilet',
  'Dressing', 'Talking and listening', 'Reading', 'Mixing with people', 'Managing money',
];

export const scenes = [
  {
    dur: 3.4,
    kind: 'title',
    html: `<div class="eyebrow" data-in="0.1">PIP explained</div>
      <h1><span class="line" data-in="0.3">Can I get</span><span class="line" data-in="0.55">PIP?</span></h1>
      <p data-in="0.9">The criteria, in under a minute.</p>`,
  },
  point(1, 'You are aged 16 to State Pension age', `<p data-in="0.8">Over State Pension age? Look at Attendance Allowance instead.</p>`),
  point(2, 'Your condition is long term', `<p data-in="0.8">You have had difficulties for 3 months, and expect them to last at least 9 more.</p>`),
  point(3, 'You live in England or Wales', `<p data-in="0.8">In Scotland, it is Adult Disability Payment instead.</p>`),
  point(
    4,
    'You struggle with everyday activities',
    `<div class="acts">${activities.map((a, i) => `<span data-in="${(0.7 + i * 0.12).toFixed(2)}">${a}</span>`).join('')}
      <span class="mob" data-in="1.9">Planning journeys</span><span class="mob" data-in="2.02">Moving around</span></div>
      <p class="key" data-in="2.3">10 daily living activities, and <b>2 mobility activities</b>.</p>`,
    7.5,
  ),
  point(
    5,
    'You score enough points',
    `<table class="rates"><tr data-in="0.7"><th>Points</th><th>Weekly rate</th></tr>
      <tr data-in="1.0"><td>Daily living 8+</td><td>${money(pip.dailyStandard)}</td></tr>
      <tr data-in="1.2"><td>Daily living 12+</td><td>${money(pip.dailyEnhanced)}</td></tr>
      <tr data-in="1.4"><td>Mobility 8+</td><td>${money(pip.mobilityStandard)}</td></tr>
      <tr data-in="1.6"><td>Mobility 12+</td><td>${money(pip.mobilityEnhanced)}</td></tr></table>
      <p class="key" data-in="1.9">Rates for ${taxYear}. Up to <b>${money(pip.dailyEnhanced + pip.mobilityEnhanced)} a week</b>.</p>`,
    6.5,
  ),
  point(6, 'Your income does not matter', `<p data-in="0.8">PIP is not means tested. You can work, and savings do not count.</p>`),
  {
    dur: 4.6,
    kind: 'end',
    html: `<img class="logo-big" data-in="0.05" src="../../../docs/logo-master.png" alt="">
      <h2 data-in="0.25">See which points may apply to you</h2>
      <p data-in="0.5">Free, private PIP points self-check</p>
      <div><span class="url" data-in="0.75">juniperhealth.info</span></div>
      <p class="small" data-in="1.0">General information, not advice. We are not part of the DWP.</p>`,
  },
];
