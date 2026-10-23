// Methylphenidate. Taken from the methylphenidate medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Methylphenidate:', 'ADHD medicine', 'explained'], 'Ritalin, Concerta XL and others.'),
  point(1, 'What it helps', p('It is the most common ADHD medicine. It helps with concentration, impulsiveness and hyperactivity, from age 6 to adults.')),
  point(2, 'Common side effects', chips(['Less appetite', 'Trouble sleeping', 'Headache', 'Stomach ache', 'Fast heartbeat'], 0.8)),
  point(3, 'Regular checks', p('Height, weight, blood pressure and heart rate are checked regularly.')),
  point(4, 'Brands are not the same', p('Long-acting brands release the medicine differently. Do not switch without advice.')),
  point('!', 'Get help if', chips(['Chest pain or fainting', 'Seeing or hearing things', 'New tics', 'Thoughts of self-harm'], 0.8)),
  end('Read about methylphenidate', 'General information, not medical advice. A controlled drug: never share it.'),
];
