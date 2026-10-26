// Naproxen. Taken from the naproxen medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Naproxen:', 'what to know'], 'An anti-inflammatory painkiller.'),
  point(1, 'What it is used for', chips(['Arthritis', 'Gout attacks', 'Back pain and sprains', 'Period pain'], 0.8)),
  point(2, 'Use it carefully', p('Take the lowest dose for the shortest time. Your doctor may also give you a stomach-protecting medicine.')),
  point(3, 'Common side effects', chips(['Indigestion', 'Stomach pain', 'Feeling sick', 'Headache'], 0.8)),
  point(4, 'Not for everyone', chips(['Not with other anti-inflammatories', 'Not with blood thinners unless advised', 'Can make asthma worse'], 0.8)),
  point('!', 'Get help if', p('You have black or bloody poo or vomit blood. Call 999 for chest pain or signs of a heart attack or stroke.')),
  end('Read about naproxen', 'General information, not medical advice. Always follow your doctor or pharmacist.'),
];
