// Amlodipine. Taken from the amlodipine medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Amlodipine:', 'what to know'], 'A common blood pressure medicine.'),
  point(1, 'What it is for', chips(['High blood pressure', 'Preventing angina'], 0.8)),
  point(2, 'How it works', p('It relaxes and widens your blood vessels, so blood flows more easily and blood pressure falls.')),
  point(3, 'Swollen ankles?', p('This is common. Tell your doctor if it bothers you.')),
  point(4, 'Other side effects', chips(['Headache', 'Flushing', 'Dizziness', 'Tiredness', 'Palpitations'], 0.8)),
  point('!', 'Get help if', p('You have new or worse chest pain, yellow skin or eyes, or severe stomach pain.')),
  end('Read about amlodipine', 'General information, not medical advice. Avoid lots of grapefruit juice.'),
];
