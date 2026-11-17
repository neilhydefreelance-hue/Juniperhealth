// Disabled person's bus pass. Taken from the bus passes page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Travel help', ['Free bus travel', 'if you are disabled'], 'England and Wales.'),
  point(1, 'In England', p('Free local bus travel from 9:30am to 11pm on weekdays, and all day at weekends and on bank holidays.')),
  point(2, 'In Wales', p('Free bus travel at any time, with a Concessionary Travel Card from Transport for Wales.')),
  point(3, 'You may qualify if you', chips(['Are blind or partially sighted', 'Are severely deaf', 'Find walking very hard', 'Have a learning disability', 'Cannot speak'], 0.8)),
  point(4, 'PIP or DLA?', p('8 points in moving around or communicating verbally, or higher rate DLA mobility, is usually enough proof.')),
  point(5, 'Companion pass', p('Some councils, and Wales, can let someone travel with you for free.')),
  end('Read about bus passes', 'Apply to your council, or Transport for Wales.'),
];
