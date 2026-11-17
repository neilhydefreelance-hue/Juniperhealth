// Rizatriptan. Taken from the rizatriptan medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Rizatriptan:', 'migraine', 'medicine'], 'Also known as Maxalt.'),
  point(1, 'Take it early', p('It works best when taken as soon as the headache starts. It comes as tablets or wafers that melt on the tongue.')),
  point(2, 'Common side effects', chips(['Sleepy or dizzy', 'Tingling', 'Heavy or tight chest', 'Dry mouth'], 0.8)),
  point(3, 'Taking propranolol?', p('You need a lower dose of rizatriptan.')),
  point(4, 'Watch for overuse', p('Triptans on 10 or more days a month can cause medication overuse headaches. Your GP can help.')),
  point('!', 'Call 999 if', p('You have chest pain or tightness that is severe or does not go away.')),
  end('Read about rizatriptan', 'General information, not medical advice. Not suitable with heart disease or after a stroke.'),
];
