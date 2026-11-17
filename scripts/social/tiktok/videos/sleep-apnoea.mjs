// Obstructive sleep apnoea. Taken from the sleep apnoea guide on the website.
import { chips, title, point, big, p, end } from './_common.mjs';
export const scenes = [
  title('More than snoring', ['Sleep', 'apnoea'], 'Obstructive sleep apnoea (OSA).', 3.4),
  point(1, 'Breathing stops and starts', p('The throat relaxes and narrows while you sleep. Each pause wakes you briefly, so you do not get deep sleep.')),
  big('1.5 million+', 'Adults in the UK', 'Are thought to have OSA, and many do not know.'),
  point(2, 'At night', chips(['Loud snoring', 'Pauses in breathing', 'Gasping or choking', 'Waking a lot'], 0.8)),
  point(3, 'In the day', chips(['Very sleepy', 'Poor concentration', 'Morning headaches', 'Low mood'], 0.8)),
  point(4, 'Getting tested', p('Your GP can refer you to a sleep clinic. The sleep study is usually done at home with a small device.')),
  point(5, 'What can help', chips(['CPAP machine', 'Mouth guards', 'Losing weight', 'Less alcohol'], 0.8)),
  end('Free plain English guide', 'General information, not medical advice. If you are very sleepy, check the rules on driving.'),
];
