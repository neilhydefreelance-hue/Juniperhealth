// Underactive thyroid (hypothyroidism). Taken from the hypothyroidism guide on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Explained simply', ['Underactive', 'thyroid'], 'Also called hypothyroidism.', 3.4),
  point(1, 'A small gland, a big job', p('Your thyroid makes hormones that control how fast your body uses energy. When it is underactive, things slow down.')),
  point(2, 'Easy to miss', chips(['Tiredness', 'Weight gain', 'Feeling cold', 'Constipation', 'Thinning hair', 'Low mood', 'Poor memory'], 0.8), 5.8),
  point(3, 'Most common in women over 60', p('The most common cause in the UK is Hashimoto\'s, where the immune system attacks the thyroid.')),
  point(4, 'A simple blood test', p('A test of TSH and T4 shows how your thyroid is working. Most people then take a daily tablet called levothyroxine.')),
  point('!', 'Pregnant or planning?', p('Tell your GP straight away. Your dose usually needs to go up early in pregnancy.'), 4.8),
  end('Free plain English guide', 'General information, not medical advice.'),
];
