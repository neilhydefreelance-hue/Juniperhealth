// Disabled Persons Railcard. Taken from the Disabled Persons Railcard page on the website.
import { chips, title, point, big, p, end } from './_common.mjs';
export const scenes = [
  title('Travel help', ['Disabled Persons', 'Railcard'], 'More people can now get one.'),
  big('1/3 off', 'Most rail fares', 'For you and one adult travelling with you, across Great Britain.'),
  point(1, 'The cost', p('£20 for 1 year or £54 for 3 years. You can have it on your phone.')),
  point(2, 'You may qualify with', chips(['PIP or DLA, any rate', 'Attendance Allowance', 'Blue Badge', 'Disabled bus pass', 'Sight or hearing loss', 'Epilepsy'], 0.8)),
  point(3, 'New in 2026', p('From September, some people with long-term or fluctuating conditions, and neurodivergent people, can apply with professional evidence.')),
  point(4, 'How to apply', p('Apply on the railcard website and upload proof, such as your award letter.')),
  end('Read about the railcard', 'Check the railcard website for the latest rules.'),
];
