// Naltrexone. Taken from the naltrexone medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Naltrexone:', 'staying off', 'alcohol or opioids'], 'Help to prevent relapse.'),
  point(1, 'What it does', p('It blocks opioids and reduces the rewarding effect of alcohol, which helps lower cravings.')),
  point('!', 'Before you start', p('You must be completely off opioids for 7 to 10 days, or it will cause sudden, severe withdrawal.')),
  point(2, 'Carry a card', p('Normal opioid painkillers will not work while you take it.')),
  point('!', 'Overdose danger', p('Never try to overcome the block with large amounts of opioids. After stopping, your tolerance is very low.')),
  point(3, 'Common side effects', chips(['Feeling sick', 'Headache', 'Trouble sleeping', 'Restless', 'Joint pain'], 0.8)),
  end('Read about naltrexone', 'General information, not medical advice. FRANK: 0300 123 6600. Drinkline: 0300 123 1110.'),
];
