// Duloxetine. Taken from the duloxetine medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Duloxetine:', 'mood and pain'], 'An SNRI antidepressant.'),
  point(1, 'What it treats', chips(['Depression', 'Generalised anxiety', 'Diabetic nerve pain', 'Stress incontinence'], 0.8)),
  point(2, 'Also used for', chips(['Fibromyalgia', 'Long-term back pain', 'Osteoarthritis pain'], 0.8)),
  point(3, 'Common side effects', chips(['Feeling sick', 'Dry mouth', 'Headache', 'Dizziness', 'Sweating'], 0.8)),
  point(4, 'Good to know', chips(['Can raise blood pressure', "No St John's wort", 'Avoid lots of alcohol'], 0.8)),
  point('!', 'Do not stop suddenly', p('Withdrawal can be severe. Your doctor will lower the dose over at least 2 to 4 weeks.')),
  end('Read about duloxetine', 'General information, not medical advice. In an emergency call 999. Samaritans: 116 123.'),
];
