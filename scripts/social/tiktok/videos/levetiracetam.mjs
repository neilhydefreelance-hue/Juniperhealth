// Levetiracetam. Taken from the levetiracetam medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Levetiracetam:', 'epilepsy', 'medicine'], 'Also known as Keppra.'),
  point(1, 'What it treats', p('Several types of seizure. It is one of the most widely used epilepsy medicines.')),
  point(2, 'Common side effects', chips(['Sleepy or tired', 'Headache', 'Dizziness', 'Irritability', 'Low mood or anxiety'], 0.8)),
  point(3, 'Mood changes', p('Tell your doctor if you or your family notice changes in your mood or behaviour, such as aggression or depression.')),
  point('!', 'Do not stop suddenly', p('It can cause seizures. Your doctor will lower the dose slowly over weeks.')),
  point(4, 'Driving', p('Follow DVLA rules on driving with epilepsy.')),
  end('Read about levetiracetam', 'General information, not medical advice. Samaritans: 116 123.'),
];
