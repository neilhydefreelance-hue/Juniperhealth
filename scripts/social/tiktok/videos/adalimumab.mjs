// Adalimumab. Taken from the adalimumab medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Adalimumab:', 'biologic', 'injections'], 'Humira and similar brands.'),
  point(1, 'What it treats', chips(['Rheumatoid arthritis', "Crohn's and colitis", 'Psoriasis', 'Hidradenitis suppurativa'], 0.8)),
  point(2, 'Before you start', p('You will be checked for TB and hepatitis.')),
  point(3, 'Infections matter', p('Tell your team straight away if you get an infection. Avoid live vaccines, and ask about flu, COVID and pneumonia jabs.')),
  point(4, 'Brand switches', p('Several brands, called biosimilars, work in the same way. Your team may switch you between them.')),
  point('!', 'Get help if', chips(['High temperature or chills', 'A cough that will not go away', 'Night sweats or weight loss', 'Unusual bruising'], 0.8)),
  end('Read about adalimumab', 'General information, not medical advice.'),
];
