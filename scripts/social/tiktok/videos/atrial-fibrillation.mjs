// "What is atrial fibrillation?" Taken from the AF guide on the website.
import { chips, title, point, big, p, end } from './_common.mjs';
export const scenes = [
  title('Explained simply', ['What is', 'atrial', 'fibrillation?'], 'Also called AF.'),
  point(1, 'An irregular heartbeat', p('The top chambers of the heart beat chaotically, so the heart does not pump as well.')),
  big('1.5 million', 'People in the UK', 'Have AF, and many more may have it without knowing.'),
  point(2, 'Symptoms', chips(['Fluttering or racing heart', 'Irregular pulse', 'Breathless', 'Tired or dizzy', 'No symptoms at all'], 0.8), 5.4),
  point(3, 'Why it matters', p('Clots can form in the heart and travel to the brain, causing a stroke. Treatment lowers this risk.')),
  point(4, 'Getting checked', p('An ECG records your heart\'s rhythm. Smart watches can spot signs, but you still need an ECG to confirm it.')),
  point('!', 'Call 999 if', p('You have chest pain, severe breathlessness, fainting, or signs of a stroke.'), 4.6),
  end('Free plain English guide', 'General information, not medical advice.'),
];
