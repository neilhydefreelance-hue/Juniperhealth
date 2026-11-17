// Semaglutide. Taken from the semaglutide medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Semaglutide:', 'Ozempic, Wegovy', 'and Rybelsus'], 'What it is and what to know.'),
  point(1, 'What it treats', chips(['Type 2 diabetes', 'Weight management with obesity', 'Lowering heart attack and stroke risk'], 0.8)),
  point(2, 'How it works', p('It copies a gut hormone called GLP-1. It helps release insulin, slows stomach emptying and reduces appetite.')),
  point(3, 'Common side effects', chips(['Feeling or being sick', 'Diarrhoea or constipation', 'Stomach pain', 'Feeling tired'], 0.8)),
  point('!', 'Call 111 if', p('You have severe stomach pain that spreads to your back. It can be a sign of an inflamed pancreas.')),
  point(4, 'Beware fake pens', p('Only buy weight-loss medicines from a registered pharmacy with a prescription. Fake pens are sold online.')),
  end('Read about semaglutide', 'General information, not medical advice. Not for use in pregnancy.'),
];
