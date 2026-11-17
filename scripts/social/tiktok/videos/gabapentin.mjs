// Gabapentin. Taken from the gabapentin medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Gabapentin:', 'what to know'], 'Also known as Neurontin.'),
  point(1, 'What it treats', chips(['Nerve pain, such as after shingles', 'Nerve pain from diabetes', 'Some types of epilepsy'], 0.8)),
  point(2, 'Common side effects', chips(['Sleepy or tired', 'Dizzy or unsteady', 'Weight gain', 'Swollen hands or feet'], 0.8)),
  point(3, 'A controlled drug', p('It can cause dependence and be misused. Do not drive if it makes you sleepy or dizzy.')),
  point('!', 'Breathing danger', p('Taking it with opioids, alcohol or other sedatives raises the risk of dangerous breathing problems. Call 999 for slow or shallow breathing.')),
  point(4, 'Do not stop suddenly', p('It can cause anxiety, sweating and pain, and trigger seizures. Your doctor will lower the dose slowly.')),
  end('Read about gabapentin', 'General information, not medical advice. Samaritans: 116 123.'),
];
