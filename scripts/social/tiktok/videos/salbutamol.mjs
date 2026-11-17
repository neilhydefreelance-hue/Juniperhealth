// Salbutamol. Taken from the salbutamol medicine page on the website.
import { chips, title, point, big, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Your blue', 'inhaler:', 'salbutamol'], 'Ventolin, Salamol and others.'),
  point(1, 'What it does', p('It relaxes the muscles around your airways within a few minutes, making breathing easier for 4 to 6 hours.')),
  big('3+', 'Times a week?', 'If you need your reliever 3 or more times a week, your asthma is not well controlled. See your GP or nurse.'),
  point(2, 'Common side effects', chips(['Shaky hands', 'Pounding heart', 'Headache', 'Muscle cramps'], 0.8)),
  point(3, 'Use a spacer', p('A spacer helps more of the medicine reach your lungs. Always keep your reliever with you.')),
  point('!', 'Asthma attack', p('Follow your action plan. Call 999 if your reliever is not helping.')),
  end('Read about salbutamol', 'General information, not medical advice.'),
];
