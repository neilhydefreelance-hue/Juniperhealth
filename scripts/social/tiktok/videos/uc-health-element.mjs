// The Universal Credit health element. Taken from the Universal Credit guide on the website.
import { chips, title, point, big, p, end } from './_common.mjs';
export const scenes = [
  title('Universal Credit', ['The health', 'element', 'explained'], 'Extra money if you cannot work.'),
  point(1, 'What it is', p('Extra Universal Credit if your health means you cannot work or prepare for work. The DWP calls it LCWRA.')),
  big('£429.80', 'A month at the higher rate', 'For people who had it before 6 April 2026, people who are terminally ill, and people who meet the severe conditions criteria.', 5.8),
  big('£217.26', 'A month at the lower rate', 'For most people who start getting it on or after 6 April 2026.'),
  point(2, 'Already getting it?', p('You are protected. You keep the higher rate as long as you still qualify.')),
  point(3, 'Good to know', chips(['3 month waiting period', 'No work search rules', 'You can still choose to work', 'PIP does not reduce it'], 0.8), 5.6),
  end('Free Universal Credit guide', 'General information, not financial advice. Rates for 2026 to 2027.'),
];
