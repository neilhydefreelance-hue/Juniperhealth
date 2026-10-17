// Disabled Persons Railcard and bus passes. Taken from the travel guides on the website.
import { chips, title, point, big, p, end } from './_common.mjs';
export const scenes = [
  title('Save on travel', ['Railcards and', 'free bus', 'passes'], 'For disabled people.'),
  big('1/3 off', 'Most train fares', 'With a Disabled Persons Railcard, for you and one adult with you. It costs £20 a year.', 5.4),
  point(1, 'Who can get a railcard', chips(['PIP or DLA (any rate)', 'Attendance Allowance', 'A Blue Badge', 'Deaf or sight impaired', 'Epilepsy'], 0.8), 5.6),
  point(2, 'More people qualify in 2026', p('Since September 2026, some people with long-term or fluctuating conditions and some neurodivergent people can apply too.'), 5.4),
  point(3, 'Free bus travel in England', p('A disabled person\'s bus pass gives free local bus travel from 9:30am on weekdays and all day at weekends.')),
  point(4, 'Free bus travel in Wales', p('A Concessionary Travel Card gives free bus travel at any time. Ask for a companion card if you need help to travel.')),
  end('Free travel guides', 'General information. Apply to your council or Transport for Wales for a bus pass.'),
];
