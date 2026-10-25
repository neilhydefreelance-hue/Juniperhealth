// Sumatriptan. Taken from the sumatriptan medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Sumatriptan:', 'migraine', 'medicine'], 'Also known as Imigran.'),
  point(1, 'Take it early', p('It treats migraine and cluster headache attacks. It works best when taken early in an attack.')),
  point(2, 'Common side effects', chips(['Feeling hot', 'Tingling or heavy', 'Tight chest or throat', 'Dizziness'], 0.8)),
  point(3, 'One dose per attack', p('If the first dose did not help, do not take a second dose for the same attack.')),
  point(4, 'Watch for overuse', p('Taking triptans on 10 or more days a month can cause medication overuse headaches. Your GP can help.')),
  point('!', 'Call 999 if', p('You have severe chest pain or tightness that does not go away.')),
  end('Read about sumatriptan', 'General information, not medical advice. Not suitable for everyone with heart problems.'),
];
