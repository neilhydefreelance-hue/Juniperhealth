// Rosuvastatin. Taken from the rosuvastatin medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Rosuvastatin:', 'what to know'], 'A strong statin for cholesterol.'),
  point(1, 'What it does', p('It lowers cholesterol and reduces your risk of a heart attack or stroke.')),
  point(2, 'Common side effects', chips(['Headache', 'Muscle aches', 'Stomach pain', 'Feeling sick', 'Constipation', 'Feeling weak'], 0.8)),
  point('!', 'Call 111 or your doctor', p('If you get unexplained muscle pain or weakness, especially with a high temperature or dark pee.')),
  point(3, 'Indigestion remedies', p('They can stop it working as well. Take them at least 2 hours apart.')),
  point(4, 'Keep taking it', p('There are no withdrawal symptoms, but if you stop, your cholesterol rises again.')),
  end('Read about rosuvastatin', 'General information, not medical advice.'),
];
