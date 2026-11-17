// Carbocisteine. Taken from the carbocisteine medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Carbocisteine:', 'what to know'], 'A mucus thinner for COPD.'),
  point(1, 'What it does', p('It makes mucus thinner and easier to cough up, and can mean fewer flare-ups.')),
  point(2, 'Common side effects', chips(['Feeling sick', 'Stomach discomfort', 'Diarrhoea'], 0.8)),
  point('!', 'Get help straight away', p('If you are sick with blood, or have black or bloody poo. Call 111 or your doctor.')),
  point(3, 'Not suitable', p('If you have an active stomach ulcer, or in the first 3 months of pregnancy.')),
  point(4, 'Is it working?', p('Your doctor may review whether it is helping after about 4 weeks.')),
  end('Read about carbocisteine', 'General information, not medical advice.'),
];
