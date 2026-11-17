// Coronary heart disease and heart attack signs. Taken from the CHD guide on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Know the signs', ['Coronary', 'heart disease'], 'And when it is a heart attack.'),
  point(1, 'Narrowed arteries', p('Fatty deposits narrow the arteries that carry blood to your heart muscle. It can be treated and managed.')),
  point(2, 'Angina', p('A tight, heavy or dull chest pain, often brought on by activity, cold or stress, which eases with rest.')),
  point('!', 'Heart attack: call 999', chips(['Chest pain that does not go', 'Pain spreading to arm, jaw or back', 'Sweating', 'Feeling sick', 'Breathless'], 0.8), 5.6),
  point(3, 'Signs can be milder', p('Women, older people and people with diabetes may have less typical symptoms. If in doubt, call 999.')),
  point(4, 'Risks you can change', chips(['Smoking', 'High blood pressure', 'High cholesterol', 'Inactivity', 'Alcohol'], 0.8)),
  end('Free plain English guide', 'General information, not medical advice.'),
];
