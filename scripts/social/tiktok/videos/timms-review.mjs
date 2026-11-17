// "The Timms Review of PIP explained." Taken from the Timms Review article on the website.
const told = ['Assessments', 'Fluctuating conditions', 'Stress and anxiety', 'Too much paperwork', 'Long delays'];
const recs = ['Fewer reviews for lifelong conditions', 'Clearer, kinder letters', 'Better use of evidence', 'Reasonable adjustments', 'Advocacy and support'];
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
    html: `<div class="eyebrow" data-in="0.1">PIP news explained</div>
      <h1><span class="line" data-in="0.3">What is the</span><span class="line" data-in="0.55">Timms Review?</span></h1>
      <p data-in="0.9">A review of how PIP works.</p>`,
  },
  point(1, 'Shaped by disabled people', '<p data-in="0.8">It is led by 3 co-chairs, including Sir Stephen Timms. Almost everyone in its 15 strong steering group has lived experience of disability or long-term ill health.</p>', 5.8),
  {
    dur: 5.0,
    kind: 'point',
    html: `<div class="big" data-in="0.1">38,713</div>
      <h2 data-in="0.35">Responses</h2>
      <p data-in="0.8">People shared their experiences of PIP through the call for evidence.</p>`,
  },
  point(2, 'What people raised', chips(told, 0.8), 5.6),
  point(3, 'Emerging ideas', chips(recs, 0.8), 6.0),
  point(4, 'Nothing changes yet', '<p data-in="0.8">The final report is due in autumn 2026. If you think you qualify for PIP, you can still claim in the usual way.</p>', 5.4),
  {
    dur: 5.0,
    kind: 'end',
    html: `<img class="logo-big" data-in="0.05" src="../../../docs/logo-master.png" alt="">
      <h2 data-in="0.25">Read the full explainer</h2>
      <div><span class="url" data-in="0.6">juniperhealth.info</span></div>
      <p class="small" data-in="0.9">General information, not legal advice.</p>`,
  },
];
