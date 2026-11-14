// Insulin glargine. Taken from the insulin glargine medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Insulin', 'glargine'], 'Lantus, Abasaglar, Semglee, Toujeo.'),
  point(1, 'Background insulin', p('Usually injected once a day. It releases insulin evenly for about 24 hours to keep blood sugar steady.')),
  point(2, 'Common side effects', chips(['Hypos', 'Redness where you inject', 'Lumps under the skin', 'Weight gain'], 0.8)),
  point(3, 'Toujeo is different', p('It is stronger and not dose for dose the same as Lantus. Do not mix glargine with other insulins.')),
  point('!', 'Never stop without advice', p('Stopping can quickly cause very high blood sugar and, in type 1 diabetes, diabetic ketoacidosis.')),
  point('!', 'Call 999 for', p('A severe hypo with confusion, fits or passing out, or swelling of the face or trouble breathing.')),
  end('Read about insulin glargine', 'General information, not medical advice.'),
];
