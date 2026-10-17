// "See your GP record on your phone." Taken from the NHS App article on the website.
const can = ['Medicines', 'Allergies', 'Test results', 'Conditions', 'Vaccinations', 'GP notes', 'Hospital letters'];
const extras = ['Repeat prescriptions', 'Book GP appointments', 'Message your practice', 'Hospital waiting times', 'Your NHS number'];
const chips = (list, from) => `<div class="cloud">${list.map((c, i) => `<span data-in="${(from + i * 0.15).toFixed(2)}">${c}</span>`).join('')}</div>`;
const point = (n, title, body, dur = 5.0) => ({
  dur,
  kind: 'point',
  html: `<div class="num" data-in="0.1">${n}</div><h2 data-in="0.35">${title}</h2>${body}`,
});

export const scenes = [
  {
    dur: 3.6,
    kind: 'title',
    html: `<div class="eyebrow" data-in="0.1">Did you know?</div>
      <h1><span class="line" data-in="0.3">You can see</span><span class="line" data-in="0.55">your GP record</span><span class="line" data-in="0.8">on your phone</span></h1>
      <p data-in="1.1">Free, in the NHS App.</p>`,
  },
  point(1, 'Pick the right app', `<p data-in="0.8">It depends where your <em>GP practice</em> is.</p>
    <ol class="steps">
      <li data-in="1.2"><b>1</b><span>England: <em>NHS App</em></span></li>
      <li data-in="1.6"><b>2</b><span>Wales: <em>NHS Wales App</em></span></li>
    </ol>`),
  point(2, 'What you can see', chips(can, 0.8), 5.8),
  point(3, 'Prove who you are', `<p data-in="0.8">Use a passport or driving licence and a short video. No photo ID? Ask your GP practice for your <em>online services details</em>.</p>`, 5.4),
  point(4, 'Great evidence for PIP', `<p data-in="0.8">Specialist letters, test results and notes about how your condition affects you can all help your claim.</p>`),
  point(5, 'It does much more', chips(extras, 0.8), 5.6),
  {
    dur: 5.0,
    kind: 'end',
    html: `<img class="logo-big" data-in="0.05" src="../../../docs/logo-master.png" alt="">
      <h2 data-in="0.25">Step by step guide</h2>
      <div><span class="url" data-in="0.6">juniperhealth.info</span></div>
      <p class="small" data-in="0.9">Only download the app from the Apple App Store or Google Play. Never share your password.</p>`,
  },
];
