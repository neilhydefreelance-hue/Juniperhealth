// PIP assessment tips. Taken from the PIP assessment page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('PIP', ['PIP assessment', 'coming up?'], 'How to prepare.'),
  point(1, 'Before the day', chips(['Re-read your form', 'Write notes on each activity', 'List your medicines', 'Bring someone with you'], 0.8)),
  point(2, 'Ask for a recording', p('You can ask for your assessment to be recorded. Ask as soon as you get your appointment letter.')),
  point(3, 'Describe most days', p('Be honest and specific. Talk about how things are on most days, not a good day.')),
  point(4, 'Effort and after-effects', p('Explain the pain, tiredness and how long it takes you to recover after doing things.')),
  point('!', 'They notice small things', p('How you walked in or managed a coat can end up in the report. If it hurt, say so at the time.')),
  end('Read our assessment guide', 'General information, not legal advice. You can ask for a copy of the report.'),
];
