// Apixaban. Taken from the apixaban medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Apixaban:', 'blood thinner', 'basics'], 'Also known as Eliquis.'),
  point(1, 'What it is for', chips(['Preventing strokes in AF', 'DVT and PE', 'Clots after hip or knee surgery'], 0.8)),
  point(2, 'Common side effects', chips(['Bruising easily', 'Nosebleeds', 'Bleeding gums', 'Heavier periods'], 0.8)),
  point(3, 'Stay safe', chips(['Carry an alert card', 'Tell your dentist', 'No ibuprofen or aspirin unless advised'], 0.8)),
  point('!', 'Never stop suddenly', p('It greatly raises your risk of a stroke or clot. Talk to your doctor first, including before surgery or dental work.')),
  point('!', 'Call 999 if', p('You have a severe headache, confusion or sudden weakness. Get urgent help after any fall or head injury.')),
  end('Read about apixaban', 'General information, not medical advice.'),
];
