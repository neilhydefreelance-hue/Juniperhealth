// Bipolar explained, part 3 of 3: cyclothymia. Taken from the cyclothymia guide on the website.
import { chips, point, big, end } from './_bipolar-common.mjs';

export const scenes = [
  {
    dur: 3.6,
    kind: 'title',
    html: `<div class="eyebrow" data-in="0.1">Bipolar: part 3 of 3</div>
      <h1><span class="line" data-in="0.3">What is</span><span class="line" data-in="0.55">cyclothymia?</span></h1>
      <p data-in="0.9">You say it "sy-clo-thy-me-a".</p>`,
  },
  point(1, 'Ongoing mild highs and lows', '<p data-in="0.8">The mood swings are not severe enough, or do not last long enough, to be diagnosed as bipolar disorder.</p>'),
  big('2 years', 'Going on for at least 2 years', 'In adults, with few breaks. In children and teenagers, at least 1 year.'),
  point(2, 'Highs and lows', `<p data-in="0.6"><em>Highs:</em> cheerful or irritable, lots of energy, less sleep, more risks.</p>
    <p data-in="1.2"><em>Lows:</em> low, tearful, tired, losing interest.</p>`, 5.6),
  point(3, 'It still has a big impact', '<p data-in="0.8">The changes can be unpredictable and affect relationships, work and studies.</p>'),
  point(4, 'What helps', chips(['A mood diary', 'Talking therapies', 'Steady sleep and routines', 'Sometimes a mood stabiliser'], 0.8), 5.6),
  point(5, 'Keep in touch with your GP', '<p data-in="0.8">For some people, cyclothymia can develop into bipolar disorder. Regular reviews help catch changes early.</p>'),
  end('Free plain English guide', 'General information, not medical advice. In a crisis, call 999 or Samaritans on 116 123.'),
];
