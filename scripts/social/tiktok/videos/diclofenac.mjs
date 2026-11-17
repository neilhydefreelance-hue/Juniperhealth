// Diclofenac. Taken from the diclofenac medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Diclofenac:', 'what to know'], 'Also known as Voltarol.'),
  point(1, 'What it is used for', chips(['Arthritis', 'Back pain and sprains', 'Gout attacks', 'Period pain'], 0.8)),
  point(2, 'Tablets or gel', p('The gel can ease local pain and swelling. Tablets are not suitable with heart disease, heart failure or after a stroke.')),
  point(3, 'Use it carefully', chips(['Lowest dose, shortest time', 'Not with ibuprofen or naproxen', 'Can worsen asthma'], 0.8)),
  point(4, 'Common side effects', chips(['Indigestion', 'Stomach pain', 'Feeling sick', 'Headache'], 0.8)),
  point('!', 'Get help if', p('You have black or bloody poo or vomit blood. Call 999 for chest pain or signs of a heart attack or stroke.')),
  end('Read about diclofenac', 'General information, not medical advice.'),
];
