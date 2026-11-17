// Risperidone. Taken from the risperidone medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Risperidone:', 'what to know'], 'An antipsychotic medicine.'),
  point(1, 'What it is for', chips(['Schizophrenia', 'Mania in bipolar disorder', 'Short-term aggression in dementia'], 0.8)),
  point(2, 'Common side effects', chips(['Sleepiness', 'Weight gain', 'Restlessness', 'Stiffness or shaking', 'Headache'], 0.8)),
  point(3, 'Regular checks', p('Your weight, blood sugar and cholesterol will be checked regularly.')),
  point('!', 'Call 999', p('A high temperature with stiff muscles and confusion, or signs of a stroke in older people with dementia.')),
  point('!', 'Never stop suddenly', p('It can cause withdrawal and bring symptoms back. Your team will lower the dose slowly.')),
  end('Read about risperidone', 'General information, not medical advice.'),
];
