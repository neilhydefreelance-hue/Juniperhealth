// "What is tinnitus?" Taken from the tinnitus guide on the website.
import { chips, title, point, big, p, end } from './_common.mjs';
export const scenes = [
  title('Explained simply', ['Ringing', 'in your ears?'], 'It could be tinnitus.', 3.4),
  point(1, 'Sounds only you can hear', chips(['Ringing', 'Buzzing', 'Humming', 'Hissing', 'Whooshing'], 0.8)),
  big('1 in 7', 'Adults in the UK', 'Have tinnitus.'),
  point(2, 'Common causes', chips(['Hearing loss', 'Loud noise', 'Earwax', 'Ear infections', 'Stress'], 0.8)),
  point(3, 'What can help', chips(['Hearing aids', 'Sound therapy', 'Tinnitus counselling', 'CBT'], 0.8)),
  point('!', 'Get help urgently if', p('Tinnitus comes with sudden hearing loss, beats in time with your pulse, or comes with dizziness or face numbness. Call NHS 111.'), 5.6),
  end('Free plain English guide', 'General information, not medical advice. After a head injury, go to A&E.'),
];
