// CEA Card. Taken from the CEA Card page on the website.
import { title, point, big, chips, p, end } from './_common.mjs';
export const scenes = [
  title('Days out', ['Free cinema ticket', 'for your carer'], 'With a CEA Card.'),
  big('1 free', 'Ticket for a companion', 'Buy a full price ticket for yourself, and get one free for someone to go with you and help you.'),
  point(1, 'You can usually apply if you get', chips(['PIP, either part', 'DLA, any rate', 'Attendance Allowance', 'Armed Forces Independence Payment'], 0.8)),
  point(2, 'Sight loss', p('You can also apply if you are registered blind or sight impaired.')),
  point(3, 'Cost and how to apply', p('It costs £6. Apply online at the CEA Card website and upload your proof.')),
  point(4, 'Tip', p('Many cinemas run autism-friendly and subtitled showings. Check your local cinema.')),
  end('Read about the CEA Card', 'Accepted at most UK cinemas.'),
];
