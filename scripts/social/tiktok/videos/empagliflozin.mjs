// Empagliflozin. Taken from the empagliflozin medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Empagliflozin:', 'what to know'], 'Also known as Jardiance.'),
  point(1, 'What it is for', chips(['Type 2 diabetes', 'Heart failure', 'Chronic kidney disease'], 0.8)),
  point(2, 'How it works', p('It makes you pass more sugar, salt and water in your pee. This lowers blood sugar and protects the heart and kidneys.')),
  point(3, 'Common side effects', chips(['Thrush or genital infections', 'Urine infections', 'Peeing more', 'Thirst'], 0.8)),
  point(4, 'Sick day rules', p('Stop it if you are unwell and cannot eat or drink, and restart when you are better. Stop before major surgery if your team advises.')),
  point('!', 'Get urgent help for', chips(['Being sick or stomach pain', 'Fast breathing or sleepiness', 'Painful, swollen genitals with fever'], 0.8)),
  end('Read about empagliflozin', 'General information, not medical advice.'),
];
