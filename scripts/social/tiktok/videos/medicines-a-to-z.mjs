// Launches the Medicines A to Z section of the website.
const covers = ['What it treats', 'Off-label uses', 'How it works', 'Side effects', 'Coming off it safely'];
const chips = (list, from) => `<div class="cloud">${list.map((c, i) => `<span data-in="${(from + i * 0.15).toFixed(2)}">${c}</span>`).join('')}</div>`;

export const scenes = [
  {
    dur: 3.6,
    kind: 'title',
    html: `<div class="eyebrow" data-in="0.1">New on our website</div>
      <h1><span class="line" data-in="0.3">Medicines</span><span class="line" data-in="0.55">A to Z</span></h1>
      <p data-in="0.9">Plain English guides to common medicines.</p>`,
  },
  {
    dur: 4.8,
    kind: 'point',
    html: `<div class="big" data-in="0.1">140</div>
      <h2 data-in="0.35">Medicines explained</h2>
      <p data-in="0.8">From antidepressants and painkillers to inhalers and insulin.</p>`,
  },
  {
    dur: 5.6,
    kind: 'point',
    html: `<h2 data-in="0.2">Every page covers</h2>${chips(covers, 0.6)}`,
  },
  {
    dur: 5.2,
    kind: 'point',
    html: `<div class="num" data-in="0.1">!</div>
      <h2 data-in="0.35">Never stop suddenly</h2>
      <p data-in="0.8">Some medicines cause withdrawal symptoms. Always talk to your GP, prescriber or pharmacist before you stop or change a medicine.</p>`,
  },
  {
    dur: 5.6,
    kind: 'title',
    html: `<div class="eyebrow" data-in="0.1">How to find it</div>
      <ol class="steps">
        <li data-in="0.5"><b>1</b><span>Go to <em>juniperhealth.info</em></span></li>
        <li data-in="1.1"><b>2</b><span>Tap <em>Menu</em>, then <em>Medicines</em></span></li>
        <li data-in="1.7"><b>3</b><span>Search or pick a letter</span></li>
      </ol>`,
  },
  {
    dur: 5.0,
    kind: 'end',
    html: `<img class="logo-big" data-in="0.05" src="../../../docs/logo-master.png" alt="">
      <h2 data-in="0.25">Free to read</h2>
      <div><span class="url" data-in="0.6">juniperhealth.info</span></div>
      <p class="small" data-in="0.9">General information, not medical advice. Never stop a medicine without talking to your GP first.</p>`,
  },
];
