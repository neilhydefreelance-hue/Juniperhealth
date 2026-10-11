// "What is costochondritis?" An overview taken from the costochondritis guide on the website.
const symptoms = ['Sharp or aching chest pain', 'Often on the left', 'Worse when you breathe in', 'Worse when you move', 'Tender to press'];
const helps = ['Ibuprofen tablets or gel', 'Paracetamol', 'Heat or ice', 'Rest from heavy lifting', 'Gentle stretches', 'Physiotherapy'];
const chips = (list, from) => `<div class="cloud">${list.map((c, i) => `<span data-in="${(from + i * 0.15).toFixed(2)}">${c}</span>`).join('')}</div>`;
const point = (n, title, body, dur = 5.0) => ({
  dur,
  kind: 'point',
  html: `<div class="num" data-in="0.1">${n}</div><h2 data-in="0.35">${title}</h2>${body}`,
});

export const scenes = [
  {
    dur: 3.4,
    kind: 'title',
    html: `<div class="eyebrow" data-in="0.1">Explained simply</div>
      <h1><span class="line" data-in="0.3">What is</span><span class="line" data-in="0.55">costochondritis?</span></h1>
      <p data-in="0.9">You say it "kos-toe-kon-dry-tis".</p>`,
  },
  point(1, 'Inflamed rib cartilage', '<p data-in="0.8">The cartilage that joins your ribs to your breastbone becomes inflamed. This causes pain at the front of the chest.</p>'),
  point(2, 'Common symptoms', chips(symptoms, 0.8), 5.6),
  {
    dur: 5.6,
    kind: 'point',
    html: `<div class="big" data-in="0.1">999</div>
      <h2 data-in="0.35">Chest pain? Get it checked</h2>
      <p data-in="0.8">Call 999 if the pain is tight, heavy or crushing, spreads to your arms, neck, jaw or back, or you are short of breath, sweaty or dizzy.</p>`,
  },
  point(3, 'It is not dangerous', '<p data-in="0.8">It can hurt a lot, but it does not damage your heart or lungs. Most people are better within 1 to 2 months.</p>'),
  point(4, 'What can help', chips(helps, 0.8), 5.6),
  {
    dur: 5.0,
    kind: 'end',
    html: `<img class="logo-big" data-in="0.05" src="../../../docs/logo-master.png" alt="">
      <h2 data-in="0.25">Free plain English guide</h2>
      <div><span class="url" data-in="0.6">juniperhealth.info</span></div>
      <p class="small" data-in="0.9">General information, not medical advice. Always get new chest pain checked.</p>`,
  },
];
