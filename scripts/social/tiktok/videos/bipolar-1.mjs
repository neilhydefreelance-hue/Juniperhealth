// Bipolar explained, part 1 of 3: bipolar 1. Taken from the bipolar 1 guide on the website.
import { chips, point, big, urgent, end } from './_bipolar-common.mjs';
const mania = ['Very high or irritable', 'Lots of energy', 'Little need for sleep', 'Racing thoughts', 'Talking fast', 'Grand ideas', 'Risky spending'];

export const scenes = [
  {
    dur: 3.6,
    kind: 'title',
    html: `<div class="eyebrow" data-in="0.1">Bipolar: part 1 of 3</div>
      <h1><span class="line" data-in="0.3">What is</span><span class="line" data-in="0.55">bipolar 1?</span></h1>
      <p data-in="0.9">Extreme highs and lows in mood.</p>`,
  },
  point(1, 'At least one episode of mania', '<p data-in="0.8">Mania is a very high, overactive mood. Most people with bipolar 1 also have episodes of depression.</p>'),
  big('1 week', 'Mania lasts at least a week', 'Or less if hospital treatment is needed. It can be severe.'),
  point(2, 'Signs of mania', chips(mania, 0.8), 5.8),
  point(3, 'It can include psychosis', '<p data-in="0.8">Some people hear voices or believe things that are not true while they are manic.</p>'),
  point(4, 'How it is treated', chips(['Lithium (first choice long term)', 'Antipsychotics for mania', 'Talking therapies', 'A care and crisis plan'], 0.8), 5.6),
  urgent,
  end('Free plain English guide', 'General information, not medical advice. Next: bipolar 2.'),
];
