// Budesonide with formoterol. Taken from the budesonide with formoterol medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Symbicort and', 'combination', 'inhalers'], 'Budesonide with formoterol.'),
  point(1, 'Two in one', p('A steroid preventer (budesonide) with a long-acting reliever (formoterol), for asthma and COPD.')),
  point(2, 'Preventer and reliever?', p('Some people use it as both. Your asthma action plan should say exactly how to use it.')),
  point(3, 'Rinse your mouth', p('Rinse your mouth after each use.')),
  point(4, 'Common side effects', chips(['Hoarse voice', 'Oral thrush', 'Headache', 'Shaking', 'Fast heartbeat'], 0.8)),
  point('!', 'Get medical help if', p('You need more than your maximum number of puffs in a day, or wheezing gets worse straight after using it.')),
  end('Read about this inhaler', 'General information, not medical advice. In an asthma attack, call 999 if your inhaler is not helping.'),
];
