// Omeprazole. Taken from the omeprazole medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Omeprazole:', 'what to know'], 'One of the most common heartburn medicines.'),
  point(1, 'What it treats', chips(['Heartburn and acid reflux', 'Stomach ulcers', 'H. pylori, with antibiotics', 'Stomach protection with painkillers'], 0.8)),
  point(2, 'How it works', p('It reduces the amount of acid your stomach makes. Less acid lets ulcers and inflammation heal.')),
  point(3, 'Common side effects', chips(['Headache', 'Stomach pain', 'Diarrhoea or constipation', 'Wind'], 0.8)),
  point('!', 'See a GP if you', chips(['Need it for more than 2 weeks', 'Have trouble swallowing', 'Are losing weight', 'Are vomiting'], 0.8)),
  point(4, 'Stopping after long use', p('Heartburn can get worse for a few weeks. Your GP may suggest lowering the dose slowly.')),
  end('Read about omeprazole', 'General information, not medical advice. Always follow your doctor or pharmacist.'),
];
