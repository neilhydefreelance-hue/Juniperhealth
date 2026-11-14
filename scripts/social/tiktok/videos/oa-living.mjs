// Living with osteoarthritis. Taken from the osteoarthritis living well page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Conditions A to Z', ['Living with', 'osteoarthritis'], 'Everyday tips for sore joints.'),
  point(1, 'Keep moving', p('Try to be active every day. Swimming, cycling, walking and tai chi are kind to joints.')),
  point(2, 'Pace yourself', p('Break big jobs into smaller chunks. Try not to overdo it on a good day.')),
  point(3, 'Flare-up?', chips(['Heat or cold', 'Keep gently moving', 'Do less for a few days', 'Pain relief as advised'], 0.8)),
  point(4, 'Handy aids', chips(['Walking stick', 'Jar openers', 'Raised toilet seat', 'Long-handled grabber'], 0.8)),
  point(5, 'Free help', p('Your council can arrange a free needs assessment. Versus Arthritis helpline: 0800 5200 520.')),
  end('Read about osteoarthritis', 'General information, not medical advice.'),
];
