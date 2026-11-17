// Venlafaxine. Taken from the venlafaxine medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Venlafaxine:', 'what to know'], 'An SNRI antidepressant.'),
  point(1, 'What it treats', chips(['Depression', 'Generalised anxiety', 'Social anxiety', 'Panic disorder'], 0.8)),
  point(2, 'Common side effects', chips(['Feeling sick', 'Headache', 'Sweating', 'Dizziness', 'Trouble sleeping'], 0.8)),
  point('!', 'Try not to miss doses', p('Withdrawal symptoms can start within hours of a missed dose, like dizziness and electric shock feelings.')),
  point(3, 'Stopping', p('Your doctor will lower the dose very slowly. It can also raise blood pressure, so they may check it.')),
  point('!', 'Get help straight away', p('If you have thoughts of harming yourself, chest pain, or a severe headache.')),
  end('Read about venlafaxine', 'General information, not medical advice. In an emergency call 999. Samaritans: 116 123.'),
];
