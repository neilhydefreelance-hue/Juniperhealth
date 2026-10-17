// "What is fibromyalgia?" An overview taken from the fibromyalgia guide on the website.
const symptoms = ['Widespread pain', 'Extreme tiredness', 'Poor sleep', 'Stiffness', 'Fibro fog', 'Headaches', 'IBS', 'Sensitive to pain'];
const helps = ['Gentle exercise', 'Pacing', 'Talking therapies', 'Some medicines', 'Good sleep habits'];
const chips = (list, from) => `<div class="cloud">${list.map((c, i) => `<span data-in="${(from + i * 0.15).toFixed(2)}">${c}</span>`).join('')}</div>`;

export const scenes = [
  {
    dur: 3.4,
    kind: 'title',
    html: `<div class="eyebrow" data-in="0.1">Explained simply</div>
      <h1><span class="line" data-in="0.3">What is</span><span class="line" data-in="0.55">fibromyalgia?</span></h1>
      <p data-in="0.9">You say it "fy-bro-my-al-ja".</p>`,
  },
  {
    dur: 5.0,
    kind: 'point',
    html: `<div class="num" data-in="0.1">1</div>
      <h2 data-in="0.35">Long-term pain all over the body</h2>
      <p data-in="0.8">It is a real, recognised condition. It does not show on X-rays or blood tests, but the pain is real.</p>`,
  },
  {
    dur: 5.6,
    kind: 'point',
    html: `<div class="num" data-in="0.1">2</div>
      <h2 data-in="0.35">It is more than pain</h2>
      ${chips(symptoms, 0.8)}`,
  },
  {
    dur: 5.0,
    kind: 'point',
    html: `<div class="big" data-in="0.1">1 in 20</div>
      <h2 data-in="0.35">It is common</h2>
      <p data-in="0.8">The NHS says it may affect as many as 1 in 20 people in the UK. It is more common in women.</p>`,
  },
  {
    dur: 5.2,
    kind: 'point',
    html: `<div class="num" data-in="0.1">3</div>
      <h2 data-in="0.35">The pain "volume" is turned up</h2>
      <p data-in="0.8">Experts think the brain and nerves process pain signals differently. It often starts after an injury, illness or stressful time.</p>`,
  },
  {
    dur: 4.8,
    kind: 'point',
    html: `<div class="num" data-in="0.1">4</div>
      <h2 data-in="0.35">No single test</h2>
      <p data-in="0.8">A GP looks at your symptoms and rules out other conditions. A symptom diary can help.</p>`,
  },
  {
    dur: 5.4,
    kind: 'point',
    html: `<div class="num" data-in="0.1">5</div>
      <h2 data-in="0.35">A mix of things can help</h2>
      ${chips(helps, 0.8)}`,
  },
  {
    dur: 5.0,
    kind: 'point',
    html: `<div class="num" data-in="0.1">6</div>
      <h2 data-in="0.35">You may get PIP</h2>
      <p data-in="0.8">PIP is based on how it affects your daily life, not your diagnosis. Describe your bad days.</p>`,
  },
  {
    dur: 5.0,
    kind: 'end',
    html: `<img class="logo-big" data-in="0.05" src="../../../docs/logo-master.png" alt="">
      <h2 data-in="0.25">Free plain English fibromyalgia guide</h2>
      <div><span class="url" data-in="0.6">juniperhealth.info</span></div>
      <p class="small" data-in="0.9">General information, not medical advice. Speak to your GP about your symptoms.</p>`,
  },
];
