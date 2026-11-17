// Insulin aspart. Taken from the insulin aspart medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Insulin aspart:', 'what to know'], 'A fast-acting mealtime insulin.'),
  point(1, 'How it works', p('It starts working in about 10 to 20 minutes and lasts 3 to 5 hours, covering the rise after a meal.')),
  point(2, 'Common side effects', chips(['Hypos', 'Redness where you inject', 'Lumps under the skin', 'Weight gain'], 0.8)),
  point(3, 'Rotate your sites', p('Change where you inject to avoid lumps. Always carry fast-acting sugar.')),
  point('!', 'Severe hypo?', p('Confusion, fits or passing out. Someone should give glucagon or call 999.')),
  point('!', 'Never stop insulin', p('In type 1 diabetes, stopping can cause DKA within hours, even if you are not eating.')),
  end('Read about insulin aspart', 'General information, not medical advice.'),
];
