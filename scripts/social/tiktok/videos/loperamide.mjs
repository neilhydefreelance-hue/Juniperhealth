// Loperamide. Taken from the loperamide medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Loperamide:', 'diarrhoea', 'medicine'], 'Also known as Imodium.'),
  point(1, 'What it does', p('It slows down the bowel so poo is firmer and less frequent. It can also help long-term diarrhoea in IBS.')),
  point('!', 'Do not use it if', chips(['There is blood in your poo', 'You have a high temperature', 'You have a colitis flare'], 0.8)),
  point(2, 'Never take extra', p('Very high doses can cause serious heart problems. Not for children under 12 unless prescribed.')),
  point(3, 'Common side effects', chips(['Constipation', 'Wind', 'Stomach cramps', 'Feeling sick'], 0.8)),
  point(4, 'Get help if', p('You have a swollen, painful tummy, especially with a high temperature.')),
  end('Read about loperamide', 'General information, not medical advice. Ask a pharmacist.'),
];
