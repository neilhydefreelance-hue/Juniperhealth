// Bipolar medicines, part 1 of 2: mood stabilisers. Taken from the medicine pages on the website.
import { point, end } from './_bipolar-common.mjs';
const med = (name, type, use, safety, dur = 6.0) => ({
  dur,
  kind: 'point',
  html: `<div class="eyebrow" data-in="0.1">${type}</div>
    <h2 data-in="0.3">${name}</h2>
    <p data-in="0.7">${use}</p>
    <p data-in="1.3"><em>Safety:</em> ${safety}</p>`,
});

export const scenes = [
  {
    dur: 3.8,
    kind: 'title',
    html: `<div class="eyebrow" data-in="0.1">Bipolar medicines 1 of 2</div>
      <h1><span class="line" data-in="0.3">Mood</span><span class="line" data-in="0.55">stabilisers</span></h1>
      <p data-in="0.9">Used long term to prevent highs and lows.</p>`,
  },
  med('Lithium', 'Mood stabiliser', 'Usually the first choice for long-term treatment of bipolar disorder.', 'regular blood tests. Get urgent help for sickness, diarrhoea, a bad tremor, unsteadiness or confusion.'),
  med('Lamotrigine', 'Mood stabiliser', 'Especially helpful for preventing episodes of depression.', 'the dose is increased slowly. See a doctor straight away if you get a rash.'),
  med('Valproate', 'Mood stabiliser', 'Very effective, but it can harm an unborn baby and may affect male fertility.', 'not usually started in anyone under 55 unless two specialists agree. Never used in pregnancy.'),
  med('Carbamazepine', 'Mood stabiliser', 'Sometimes used when other medicines have not worked.', 'it affects many other medicines, including some contraception. Blood tests are needed.'),
  point('!', 'Never stop suddenly', '<p data-in="0.8">Stopping a mood stabiliser suddenly can bring on mania or depression. Always talk to your psychiatrist or GP first.</p>', 5.4),
  end('Every medicine explained', 'General information, not medical advice. Next: antipsychotics and other medicines.'),
];
