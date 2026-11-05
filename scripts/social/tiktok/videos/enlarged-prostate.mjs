// Enlarged prostate. Taken from the enlarged prostate guide on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Over 50?', ['Enlarged', 'prostate'], 'Very common, and treatable.', 3.4),
  point(1, 'A squeezed tube', p('The prostate wraps around the tube that carries pee. When it grows, it can squeeze the tube.')),
  point(2, 'Signs', chips(['Hard to start peeing', 'Weak flow', 'Peeing more often', 'Up at night to pee', 'Dribbling'], 0.8)),
  point(3, 'Getting checked', p('Your GP may ask you to keep a bladder diary, test your urine, examine your prostate, and talk about a PSA blood test.'), 5.4),
  point(4, 'What can help', chips(['Bladder training', 'Tamsulosin', 'Finasteride', 'Procedures like TURP'], 0.8)),
  point('!', 'Go to A&E if', p('You cannot pee at all, especially if your tummy is painful and swollen.'), 4.6),
  end('Free plain English guide', 'General information, not medical advice.'),
];
