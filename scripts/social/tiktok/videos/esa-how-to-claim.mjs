// How to claim New Style ESA. Taken from the ESA pages on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('ESA', ['How to claim', 'New Style ESA'], 'Too ill to work.'),
  point(1, 'Can you claim?', chips(['Too ill to work', 'Under State Pension age', 'Paid enough National Insurance', 'Not on Statutory Sick Pay'], 0.8)),
  point(2, 'What you need', chips(['National Insurance number', 'Bank details', 'GP details', 'A fit note'], 0.8)),
  point(3, 'The steps', chips(['Apply online', 'Send fit notes', 'Fill in the ESA50', 'Work Capability Assessment', 'Decision'], 0.8), 5.6),
  point(4, 'On Universal Credit too?', p('You can get both. It is still worth it: ESA is not affected by savings and gives you National Insurance credits.')),
  point(5, 'Backdating', p('New Style ESA can be backdated for up to 3 months. Ask when you claim.')),
  end('Read how to claim', 'General information, not financial advice. Helpline: 0800 328 5644.'),
];
