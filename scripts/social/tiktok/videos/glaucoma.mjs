// "What is glaucoma?" Taken from the glaucoma guide on the website.
import { chips, title, point, big, p, end } from './_common.mjs';
export const scenes = [
  title('Protect your sight', ['Glaucoma:', 'the silent', 'sight thief'], ''),
  point(1, 'Damage to the optic nerve', p('Glaucoma damages the nerve that connects your eye to your brain, often linked to pressure in the eye.')),
  big('700,000', 'People in the UK', 'Have glaucoma, and many do not know.'),
  point(2, 'No symptoms at first', p('The most common type slowly affects the edges of your sight. Your brain fills in the gaps, so you may not notice.')),
  point(3, 'Who is more at risk', chips(['Over 40', 'Close relative with it', 'African, Caribbean or Asian origin', 'Diabetes', 'Very short-sighted'], 0.8), 5.6),
  point(4, 'Get regular eye tests', p('Glaucoma is often found at a routine eye test. Treatment with drops, laser or surgery can protect your sight.')),
  point('!', 'Go to A&E if you suddenly get', p('A very painful red eye, blurred sight or halos, or a headache with feeling sick.'), 5.0),
  end('Free plain English guide', 'General information, not medical advice.'),
];
