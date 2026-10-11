// Bipolar medicines, part 2 of 2: antipsychotics and other medicines. Taken from the treatment and medicine pages on the website.
import { chips, point, end } from './_bipolar-common.mjs';

export const scenes = [
  {
    dur: 3.8,
    kind: 'title',
    html: `<div class="eyebrow" data-in="0.1">Bipolar medicines 2 of 2</div>
      <h1><span class="line" data-in="0.3">Antipsychotics</span><span class="line" data-in="0.55">and other</span><span class="line" data-in="0.8">medicines</span></h1>`,
  },
  point(1, 'For mania', chips(['Olanzapine', 'Quetiapine', 'Risperidone', 'Haloperidol', 'Aripiprazole'], 0.8), 5.4),
  point(2, 'For bipolar depression', chips(['Quetiapine', 'Olanzapine with fluoxetine', 'Lamotrigine', 'Lurasidone (sometimes)'], 0.8), 5.4),
  point(3, 'Short term calming', '<p data-in="0.8">A benzodiazepine, such as lorazepam or diazepam, is sometimes used for a few days to help with agitation or sleep.</p>'),
  point(4, 'Antidepressants: with care', '<p data-in="0.8">On their own, antidepressants can trigger mania or hypomania. They are usually only used alongside a mood stabiliser or antipsychotic.</p>', 5.6),
  point(5, 'Side effects to watch', chips(['Weight gain', 'Sleepiness', 'Blood sugar', 'Cholesterol', 'Restlessness'], 0.8), 5.4),
  point(6, 'Have yearly health checks', '<p data-in="0.8">Some of these medicines affect weight, blood sugar and cholesterol, so you should have a physical health check every year.</p>'),
  point('!', 'Never stop suddenly', '<p data-in="0.8">Always talk to your psychiatrist, GP or pharmacist before you stop or change a medicine.</p>', 4.8),
  end('Every medicine explained', 'General information, not medical advice. Find them under Medicines on our website.'),
];
