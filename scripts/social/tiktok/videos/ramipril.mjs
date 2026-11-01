// Ramipril. Taken from the ramipril medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Ramipril:', 'what to know'], 'An ACE inhibitor.'),
  point(1, 'What it is for', chips(['High blood pressure', 'Heart failure', 'After a heart attack', 'Kidney disease'], 0.8)),
  point(2, 'That dry cough', p('A dry, tickly cough is a common side effect. Tell your doctor if it bothers you.')),
  point(3, 'Sick day rules', p('If you are being sick or have diarrhoea and cannot drink, you may need to pause it. Ask your doctor.')),
  point(4, 'Good to know', chips(['Regular blood tests', 'Avoid potassium salt substitutes', 'Not in pregnancy'], 0.8)),
  point('!', 'Call 999 if', p('Your face, lips, tongue or throat swell.')),
  end('Read about ramipril', 'General information, not medical advice.'),
];
