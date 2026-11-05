// Clopidogrel. Taken from the clopidogrel medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Clopidogrel:', 'what to know'], 'Also known as Plavix.'),
  point(1, 'What it is for', chips(['After a stroke or mini-stroke', 'After a heart attack', 'After a stent', 'Peripheral arterial disease'], 0.8)),
  point(2, 'Common side effects', chips(['Bruising easily', 'Nosebleeds', 'Bleeding for longer', 'Indigestion'], 0.8)),
  point('!', 'Never stop early', p('Especially within a year of a stent. Talk to your heart doctor first, including before surgery or dental work.')),
  point(3, 'Indigestion medicines', p('Some, such as omeprazole and esomeprazole, can make it work less well. Ask a pharmacist.')),
  point('!', 'Call 999 if', p('You have a severe headache or sudden weakness.')),
  end('Read about clopidogrel', 'General information, not medical advice. Tell any doctor or dentist you take it.'),
];
