// Acne overview. Taken from the acne pages on the website.
import { chips, title, point, big, p, end } from './_common.mjs';
export const scenes = [
  title('Skin', ['Acne:', 'you do not have', 'to put up with it'], 'Myths, treatment and scarring.'),
  point(1, 'Myth busting', p('Acne is not caused by being dirty. Washing too often or scrubbing can make it worse.')),
  point(2, 'Not just teenagers', p('It is most common between 12 and 25, but many adults, especially women, have acne too.')),
  point(3, 'What can help', chips(['Benzoyl peroxide from a pharmacy', 'Prescription gels', 'Antibiotic tablets with a gel', 'Isotretinoin from a specialist'], 0.8)),
  big('6 to 8 weeks', 'Stick with it', 'Treatments usually take 6 to 8 weeks or more to work.'),
  point(4, 'Get help early', p('See a GP if acne is scarring, not improving, or affecting how you feel. Nodules and cysts can leave permanent scars.')),
  end('Read our acne guide', 'General information, not medical advice. Talk to a GP or pharmacist about treatment.'),
];
