// Famotidine. Taken from the famotidine medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Famotidine:', 'what to know'], 'It reduces stomach acid.'),
  point(1, 'What it is for', chips(['Heartburn', 'Acid reflux', 'Stomach ulcers'], 0.8)),
  point(2, 'How it works', p('It blocks histamine on the stomach lining, which tells the stomach to make acid.')),
  point(3, 'Common side effects', chips(['Headache', 'Dizziness', 'Constipation or diarrhoea'], 0.8)),
  point('!', 'Call 111 or your doctor', p('If you get a fast or irregular heartbeat, confusion, or yellow skin or eyes.')),
  point(4, 'Kidney problems?', p('You may need a lower dose. Tell your doctor or pharmacist.')),
  end('Read about famotidine', 'General information, not medical advice.'),
];
