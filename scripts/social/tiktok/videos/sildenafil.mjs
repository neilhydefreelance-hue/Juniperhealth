// Sildenafil. Taken from the sildenafil medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Sildenafil:', 'what to know'], 'Also known as Viagra.'),
  point(1, 'An early warning', p('Erection problems can be an early sign of heart disease or diabetes. See a GP.')),
  point(2, 'Common side effects', chips(['Headache', 'Flushing', 'Indigestion', 'Blocked nose', 'Colour vision changes'], 0.8)),
  point('!', 'Never mix with', chips(['GTN spray', 'Isosorbide', '"Poppers"'], 0.8)),
  point(3, 'Why?', p('Taken with nitrates, your blood pressure can drop dangerously.')),
  point('!', 'Get help', p('An erection lasting more than 2 hours: go to A and E. Chest pain during or after sex: stop and call 999.')),
  end('Read about sildenafil', 'General information, not medical advice.'),
];
