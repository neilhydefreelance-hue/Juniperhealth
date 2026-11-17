// VAT relief on disability products. Taken from the VAT relief guide on the website.
import { chips, title, point, big, p, end } from './_common.mjs';
export const scenes = [
  title('Save money', ['Pay no VAT', 'on disability', 'products'], 'Many people do not know.'),
  big('0%', 'VAT', 'On many products designed for disabled people, if you have a long-term illness or disability.'),
  point(1, 'You do not need a benefit', p('A long-term condition that affects everyday activities, or a condition such as diabetes, can count.')),
  point(2, 'Things that can qualify', chips(['Riser recliner chairs', 'Stairlifts and hoists', 'Mobility scooters', 'Incontinence products', 'Ramps and bathroom changes'], 0.8), 5.6),
  point(3, 'How to claim', p('Tell the seller you are eligible and fill in a short declaration. They take the VAT off.')),
  point(4, 'Other ways to save', chips(['British Red Cross loans', 'Charity grants', 'Access to Work'], 0.8)),
  end('Free home and equipment guide', 'General information. Ordinary items like a standard bed do not qualify.'),
];
