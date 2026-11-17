// "What is PCOS?" An overview taken from the PCOS guide on the website.
const symptoms = ['Irregular or no periods', 'Extra hair', 'Thinning hair', 'Oily skin or acne', 'Weight gain', 'Trouble getting pregnant', 'Low mood or anxiety'];
const helps = ['Being active', 'Healthy eating', 'The combined pill', 'Metformin', 'Hair and skin treatments', 'Fertility treatment'];
const chips = (list, from) => `<div class="cloud">${list.map((c, i) => `<span data-in="${(from + i * 0.15).toFixed(2)}">${c}</span>`).join('')}</div>`;
const point = (n, title, body) => ({
  dur: 5.0,
  kind: 'point',
  html: `<div class="num" data-in="0.1">${n}</div><h2 data-in="0.35">${title}</h2>${body}`,
});

export const scenes = [
  {
    dur: 3.4,
    kind: 'title',
    html: `<div class="eyebrow" data-in="0.1">Explained simply</div>
      <h1><span class="line" data-in="0.3">What is</span><span class="line" data-in="0.55">PCOS?</span></h1>
      <p data-in="0.9">Polycystic ovary syndrome.</p>`,
  },
  point(1, 'It affects how the ovaries work', '<p data-in="0.8">It is linked to higher levels of the hormone testosterone, and to the body not responding to insulin properly.</p>'),
  {
    dur: 5.0,
    kind: 'point',
    html: `<div class="big" data-in="0.1">1 in 10</div>
      <h2 data-in="0.35">It is common</h2>
      <p data-in="0.8">It is thought to affect around 1 in 10 women and people with ovaries in the UK. Many do not know they have it.</p>`,
  },
  { ...point(2, 'Common symptoms', chips(symptoms, 0.8)), dur: 5.8 },
  point(3, 'Diagnosed with 2 of 3 signs', `<ol class="steps">
      <li data-in="0.8"><b>1</b><span>Irregular or no periods</span></li>
      <li data-in="1.2"><b>2</b><span>Signs of higher testosterone</span></li>
      <li data-in="1.6"><b>3</b><span>Polycystic ovaries on a scan</span></li>
    </ol>`),
  { ...point(4, 'There is no cure, but a lot can help', chips(helps, 0.8)), dur: 5.6 },
  point(5, 'Look after your long-term health', '<p data-in="0.8">PCOS raises the risk of type 2 diabetes and high cholesterol. Regular checks can pick up problems early.</p>'),
  {
    dur: 5.0,
    kind: 'end',
    html: `<img class="logo-big" data-in="0.05" src="../../../docs/logo-master.png" alt="">
      <h2 data-in="0.25">Free plain English PCOS guide</h2>
      <div><span class="url" data-in="0.6">juniperhealth.info</span></div>
      <p class="small" data-in="0.9">General information, not medical advice. Speak to your GP about your symptoms.</p>`,
  },
];
