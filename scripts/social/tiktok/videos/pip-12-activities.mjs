// "The 12 PIP activities". One scene per activity, with the most points it can score
// (from Schedule 1 of the PIP Regulations 2013, as used in src/lib/checker/pip.ts).
const acts = [
  ['Preparing food', 'Making a simple hot meal for one, from fresh ingredients, safely.', 8],
  ['Eating and drinking', 'Cutting up food, getting it to your mouth, chewing and swallowing.', 10],
  ['Managing medicines', 'Taking medicines, noticing changes in your health, and treatment at home.', 8],
  ['Washing and bathing', 'Washing your body and hair, and getting in and out of a bath or shower.', 8],
  ['Using the toilet', 'Getting on and off the toilet, cleaning yourself, and managing incontinence.', 8],
  ['Dressing', 'Choosing suitable clothes, and putting them on and taking them off.', 8],
  ['Talking and listening', 'Speaking to people and understanding what they say.', 12],
  ['Reading', 'Reading and understanding signs, symbols and written words.', 8],
  ['Mixing with people', 'Meeting people face to face and getting on with them.', 8],
  ['Managing money', 'Working out costs and change, and planning a budget.', 6],
  ['Planning journeys', 'Planning and following a route, and coping with going out.', 12],
  ['Moving around', 'Standing and then walking outdoors, and how far you can go.', 12],
];

export const scenes = [
  {
    dur: 3.2,
    kind: 'title',
    html: `<div class="eyebrow" data-in="0.1">PIP explained</div>
      <h1><span class="line" data-in="0.3">The 12 PIP</span><span class="line" data-in="0.55">activities</span></h1>
      <p data-in="0.9">What the DWP looks at, one by one.</p>`,
  },
  {
    dur: 4.6,
    kind: 'title',
    html: `<h2 data-in="0.1">How the points work</h2>
      <p data-in="0.5">For each activity, the statement that fits you on <b>most days</b> scores points.</p>
      <p data-in="1.1">8 points in a part gets the <b>standard rate</b>. 12 gets the <b>enhanced rate</b>.</p>`,
  },
  ...acts.map(([title, text, max], i) => ({
    dur: 3.8,
    kind: 'point',
    html: `<div class="num" data-in="0.05">${i + 1}</div>
      <div><span class="tag${i >= 10 ? ' tag--mob' : ''}" data-in="0.25">${i >= 10 ? 'Mobility' : 'Daily living'}</span></div>
      <h2 data-in="0.35">${title}</h2>
      <p data-in="0.7">${text}</p>
      <div class="max" data-in="1.1">Up to <b>${max}</b> points</div>`,
  })),
  {
    dur: 4.6,
    kind: 'end',
    html: `<img class="logo-big" data-in="0.05" src="../../../docs/logo-master.png" alt="">
      <h2 data-in="0.25">Go through all 12 at your own pace</h2>
      <p data-in="0.5">Free, private PIP points self-check</p>
      <div><span class="url" data-in="0.75">juniperhealth.info</span></div>
      <p class="small" data-in="1.0">General information, not advice. We are not part of the DWP.</p>`,
  },
];
