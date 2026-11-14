// Promotes the free printable parent and child autism planner in Free resources.
const inside = ['All about me', 'Sensory needs', 'Weekly routine', 'Sleep diary', 'Meals for the week', 'Calm plan', 'Meltdown log'];
const school = ['EHC plan tracker (England)', 'IDP tracker (Wales)', 'Meeting prep', 'Appointments'];
const chips = (list, from) => `<div class="cloud">${list.map((c, i) => `<span data-in="${(from + i * 0.15).toFixed(2)}">${c}</span>`).join('')}</div>`;

export const scenes = [
  {
    dur: 3.8,
    kind: 'title',
    html: `<div class="eyebrow" data-in="0.1">Free to download</div>
      <h1><span class="line" data-in="0.3">Our autism</span><span class="line" data-in="0.55">planner for</span><span class="line" data-in="0.8">parents and kids</span></h1>
      <p data-in="1.1">Print it and fill it in together.</p>`,
  },
  {
    dur: 4.6,
    kind: 'point',
    html: `<div class="big" data-in="0.1">33</div>
      <h2 data-in="0.35">Printable pages</h2>
      <p data-in="0.8">To track what matters and plan goals you can work on together.</p>`,
  },
  {
    dur: 5.8,
    kind: 'point',
    html: `<h2 data-in="0.2">What is inside</h2>${chips(inside, 0.6)}`,
  },
  {
    dur: 5.2,
    kind: 'point',
    html: `<h2 data-in="0.2">Goals and wins</h2>
      <p data-in="0.6">Break goals into small steps, track progress with stars, and celebrate every win on the wins wall.</p>`,
  },
  {
    dur: 5.4,
    kind: 'point',
    html: `<h2 data-in="0.2">School and support</h2>${chips(school, 0.6)}`,
  },
  {
    dur: 5.4,
    kind: 'end',
    html: `<img class="logo-big" data-in="0.05" src="../../../docs/logo-master.png" alt="">
      <h2 data-in="0.25">Free download</h2>
      <p data-in="0.5">Look under Free resources on our website.</p>
      <div><span class="url" data-in="0.75">juniperhealth.info</span></div>
      <p class="small" data-in="1.0">Free for personal use. No sign up needed.</p>`,
  },
];
