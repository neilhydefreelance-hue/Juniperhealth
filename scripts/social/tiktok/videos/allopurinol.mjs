// Allopurinol. Taken from the allopurinol medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Allopurinol:', 'stopping gout', 'coming back'], 'Usually taken for life.'),
  point(1, 'What it does', p('It lowers uric acid in your blood. Taken every day, it stops gout attacks and prevents some kidney stones.')),
  point(2, 'Not for an attack', p('It does not treat an attack that has started. Once you are on it, keep taking it during a flare.')),
  point(3, 'Early flares', p('You may get more gout flares in the first few months. Drink plenty of fluids.')),
  point('!', 'Rash? Get help', p('Any skin rash, especially with a high temperature, sore mouth or blistering, can be serious. Stop and get help straight away.')),
  point(4, 'Interactions', p('It interacts with azathioprine and mercaptopurine. Your doctor must adjust these.')),
  end('Read about allopurinol', 'General information, not medical advice.'),
];
