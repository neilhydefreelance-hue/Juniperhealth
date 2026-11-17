// Loratadine. Taken from the loratadine medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Loratadine:', 'what to know'], 'A non-drowsy antihistamine.'),
  point(1, 'What it is for', chips(['Hay fever', 'Other allergies', 'Itchy hives'], 0.8)),
  point(2, 'How it works', p('It blocks histamine, easing sneezing, itching, a runny nose and watery eyes.')),
  point(3, 'Common side effects', chips(['Headache', 'Tiredness', 'Some sleepiness'], 0.8)),
  point('!', 'Ask a pharmacist first', p('If you have liver problems or epilepsy.')),
  point('!', 'Call 111 or your doctor', p('If you get a fast or irregular heartbeat, or fits.')),
  end('Read about loratadine', 'General information, not medical advice.'),
];
