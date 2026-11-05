// Pregabalin. Taken from the pregabalin medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Pregabalin:', 'what to know'], 'Also known as Lyrica.'),
  point(1, 'What it treats', chips(['Nerve pain', 'Generalised anxiety disorder', 'Some types of epilepsy'], 0.8)),
  point(2, 'Common side effects', chips(['Sleepy or dizzy', 'Weight gain', 'Blurred vision', 'Dry mouth', 'Swollen hands or feet'], 0.8)),
  point(3, 'A controlled drug', p('It can cause dependence and misuse. Tell your doctor if you feel you need more to get the same effect.')),
  point('!', 'Breathing danger', p('Taking it with opioids, alcohol or other sedatives can stop your breathing. Call 999 for slow or shallow breathing.')),
  point(4, 'Do not stop suddenly', p('It can cause anxiety, sweating, pain and, in epilepsy, seizures. Your doctor will lower the dose slowly.')),
  end('Read about pregabalin', 'General information, not medical advice. Samaritans: 116 123.'),
];
