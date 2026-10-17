// Bipolar explained, part 2 of 3: bipolar 2. Taken from the bipolar 2 guide on the website.
import { chips, point, big, urgent, end } from './_bipolar-common.mjs';
const hypo = ['Unusually happy or confident', 'Irritable', 'More energy', 'Less sleep', 'Lots of ideas', 'More risks'];

export const scenes = [
  {
    dur: 3.6,
    kind: 'title',
    html: `<div class="eyebrow" data-in="0.1">Bipolar: part 2 of 3</div>
      <h1><span class="line" data-in="0.3">What is</span><span class="line" data-in="0.55">bipolar 2?</span></h1>
      <p data-in="0.9">Hypomania and depression.</p>`,
  },
  point(1, 'Hypomania, not full mania', '<p data-in="0.8">Hypomania is a milder high. It does not include psychosis and does not usually need hospital treatment.</p>'),
  big('4 days', 'Hypomania lasts at least 4 days', 'It can feel good, and other people may notice it more than you do.'),
  point(2, 'Signs of hypomania', chips(hypo, 0.8), 5.6),
  point(3, 'It is not "milder bipolar"', '<p data-in="0.8">Depression in bipolar 2 is often long and severe. For many people, it is the main problem.</p>'),
  point(4, 'Often first seen as depression', '<p data-in="0.8">If you have ever had times of unusually high mood or energy, tell your GP. Antidepressants on their own can trigger hypomania.</p>', 5.6),
  point(5, 'How it is treated', chips(['Lithium', 'Lamotrigine', 'Quetiapine', 'Talking therapies', 'Steady routines'], 0.8), 5.4),
  urgent,
  end('Free plain English guide', 'General information, not medical advice. Next: cyclothymia.'),
];
