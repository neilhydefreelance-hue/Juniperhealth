// Olanzapine. Taken from the olanzapine medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Olanzapine:', 'what to know'], 'An antipsychotic medicine.'),
  point(1, 'What it is for', chips(['Schizophrenia', 'Mania in bipolar disorder'], 0.8)),
  point(2, 'Common side effects', chips(['Weight gain', 'Bigger appetite', 'Sleepiness', 'Dizziness', 'Dry mouth', 'Constipation'], 0.8)),
  point(3, 'Smoking matters', p('Smoking lowers olanzapine levels. Tell your team if you start or stop smoking.')),
  point('!', 'Call 999', p('A high temperature with stiff muscles and confusion.')),
  point('!', 'Never stop suddenly', p('It can cause withdrawal and bring symptoms back. Your team will lower the dose slowly.')),
  end('Read about olanzapine', 'General information, not medical advice.'),
];
