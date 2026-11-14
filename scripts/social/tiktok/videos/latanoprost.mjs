// Latanoprost. Taken from the latanoprost medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Latanoprost:', 'glaucoma', 'eye drops'], 'Also known as Xalatan.'),
  point(1, 'What it does', p('It lowers pressure inside the eye. It is often the first treatment for glaucoma.')),
  point(2, 'How to use it', chips(['Once a day in the evening', 'Remove contact lenses first', 'Unopened bottles in the fridge'], 0.8)),
  point(3, 'Common side effects', chips(['Red or irritated eyes', 'Longer, darker eyelashes', 'Iris slowly darkening', 'Darker skin around the eye'], 0.8)),
  point('!', 'Keep using it', p('Eye pressure rises again within days if you stop. Untreated glaucoma can permanently damage your sight.')),
  point(4, 'Get help if', p('You have eye pain, swelling or sudden changes in vision.')),
  end('Read about latanoprost', 'General information, not medical advice.'),
];
