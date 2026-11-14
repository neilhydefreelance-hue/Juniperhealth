// Mebeverine. Taken from the mebeverine medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Mebeverine:', 'for IBS', 'cramps'], 'Also known as Colofac.'),
  point(1, 'What it does', p('It relaxes the muscles in the bowel, easing stomach cramps and bloating in IBS.')),
  point(2, 'Side effects are rare', p('Some people get indigestion or heartburn.')),
  point(3, 'Allergic reaction?', p('Get help for a skin rash or swelling of the face.')),
  point('!', 'See a GP if you have', chips(['New bowel symptoms over 40', 'Blood in your poo', 'Weight loss', 'A change lasting weeks'], 0.8)),
  end('Read about mebeverine', 'General information, not medical advice. Ask a pharmacist.'),
];
