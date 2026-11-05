// Risedronate. Taken from the risedronate medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Risedronate:', 'stronger bones'], 'For osteoporosis.'),
  point(1, 'What it does', p('It slows the cells that break down bone, so bones become denser and the risk of fractures falls.')),
  point(2, 'How to take it', chips(['First thing in the morning', 'Full glass of plain water', '30 minutes before food or drink', 'Stay upright for 30 minutes'], 0.8), 5.6),
  point(3, 'Look after your teeth', p('Have regular dental check-ups and tell your dentist you take it. Get enough calcium and vitamin D.')),
  point('!', 'Get help if', chips(['Pain swallowing or new heartburn', 'Jaw pain or a loose tooth', 'New thigh, hip or groin pain'], 0.8)),
  point(4, 'A drug holiday?', p('Your doctor may suggest a break after about 5 years, depending on your fracture risk.')),
  end('Read about risedronate', 'General information, not medical advice.'),
];
