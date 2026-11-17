// Hay fever overview. Taken from the hay fever pages on the website.
import { chips, title, point, big, p, end } from './_common.mjs';
export const scenes = [
  title('Allergies', ['Hay fever:', 'cold or', 'pollen?'], 'Signs, seasons and what helps.'),
  big('1 in 4', 'Very common', 'Hay fever is an allergy to pollen. It affects around 1 in 4 people in the UK.'),
  point(1, 'Not a cold', p('Hay fever lasts weeks or months while pollen is around, often with itchy eyes, and does not cause a high temperature.')),
  point(2, 'Pollen seasons', chips(['Trees: late March to mid May', 'Grass: mid May to July', 'Weeds: end of June to September'], 0.8)),
  point(3, 'What helps', chips(['Non-drowsy antihistamines', 'Steroid nose sprays', 'Eye drops', 'Ask a pharmacist'], 0.8)),
  point(4, 'Start early', p('Steroid nose sprays work best if you start them 2 weeks before your usual season, and use them every day.')),
  end('Read our hay fever guide', 'General information, not medical advice. See a GP if pharmacy medicines do not help or you are wheezy.'),
];
