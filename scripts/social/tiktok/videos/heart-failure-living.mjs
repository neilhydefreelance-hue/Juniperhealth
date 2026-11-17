// Living with heart failure. Taken from the heart failure living well page on the website.
import { chips, title, point, big, p, end } from './_common.mjs';
export const scenes = [
  title('Conditions A to Z', ['Living with', 'heart failure'], 'Small daily habits that help.'),
  big('2kg in 3 days', 'Weigh yourself daily', 'Each morning after the toilet, before breakfast. Gain this much? Contact your team.'),
  point(1, 'Salt and fluids', p('Eat less salt, and follow any advice about how much to drink.')),
  point(2, 'Stay active', p('Regular, gentle exercise helps. Cardiac rehab will help you build up safely.')),
  point(3, 'Get your vaccines', chips(['Flu', 'COVID-19', 'Pneumonia'], 0.8)),
  point('!', 'Check new medicines', p('Ask a pharmacist first. Some, such as ibuprofen, can make heart failure worse.')),
  end('Read about heart failure', 'General information, not medical advice.'),
];
