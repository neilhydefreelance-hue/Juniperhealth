// Depression, work and benefits. Taken from the depression pages on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Depression', ['Depression', 'and work:', 'your rights'], 'Support to stay in work, and benefits.'),
  point(1, 'Can it be a disability?', p('Yes, if it has a substantial, long-term effect on daily life. The law looks at you without treatment.')),
  point(2, 'Reasonable adjustments', chips(['Flexible or later hours', 'Time off for therapy', 'A phased return', 'Working from home'], 0.8)),
  point(3, 'Access to Work', p('Free, confidential Mental Health Support, with up to 9 months of advice and a support plan.')),
  point(4, 'PIP and depression', chips(['Needing prompting to eat or wash', 'Medicine reminders', 'Distress mixing with people', 'Help with money'], 0.8)),
  point(5, 'Cannot work?', p('You may get New Style ESA or extra Universal Credit, as well as PIP.')),
  end('Read about depression and work', 'General information, not legal advice. Samaritans: 116 123.'),
];
