// Quetiapine. Taken from the quetiapine medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Quetiapine:', 'what to know'], 'An antipsychotic medicine.'),
  point(1, 'What it is for', chips(['Schizophrenia', 'Bipolar disorder', 'Depression, with an antidepressant'], 0.8)),
  point(2, 'Common side effects', chips(['Sleepiness', 'Dizziness', 'Dry mouth', 'Weight gain', 'Constipation'], 0.8)),
  point(3, 'Regular checks', p('Your weight, blood sugar and cholesterol will be checked regularly.')),
  point('!', 'Call 999', p('A high temperature with stiff muscles and confusion.')),
  point('!', 'Never stop suddenly', p('It can cause withdrawal and bring symptoms back. Your doctor will lower the dose slowly.')),
  end('Read about quetiapine', 'General information, not medical advice.'),
];
