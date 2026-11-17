// Glyceryl trinitrate. Taken from the GTN medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['GTN spray', 'for angina'], 'Glyceryl trinitrate.'),
  point(1, 'What it does', p('A spray or tablet under the tongue widens blood vessels and relieves angina chest pain within minutes.')),
  point(2, 'Sit down first', p('It can make you feel faint.')),
  point('!', 'Call 999 if', p('Chest pain has not gone 5 minutes after the second dose.')),
  point(3, 'Never mix with', p('Medicines for erection problems such as sildenafil. Blood pressure can fall dangerously.')),
  point(4, 'Common side effects', chips(['Headache', 'Flushing', 'Dizzy when standing'], 0.8)),
  end('Read about GTN', 'General information, not medical advice. Do not stop GTN patches without asking your doctor.'),
];
