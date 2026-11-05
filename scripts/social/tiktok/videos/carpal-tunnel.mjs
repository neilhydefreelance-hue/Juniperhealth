// Carpal tunnel syndrome. Taken from the carpal tunnel guide on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Tingling fingers?', ['Carpal tunnel', 'syndrome'], 'A squeezed nerve in the wrist.', 3.4),
  point(1, 'A squeezed nerve', p('The median nerve gets squeezed as it passes through a narrow space in your wrist.')),
  point(2, 'Signs', chips(['Pins and needles', 'Numbness', 'Worse at night', 'Weak grip', 'Dropping things'], 0.8)),
  point(3, 'More likely with', chips(['Pregnancy', 'Diabetes', 'Underactive thyroid', 'Rheumatoid arthritis', 'Vibrating tools'], 0.8)),
  point(4, 'What can help', chips(['Wrist splints at night', 'Changing how you use your hands', 'Steroid injections', 'Surgery'], 0.8)),
  end('Free plain English guide', 'General information, not medical advice.'),
];
