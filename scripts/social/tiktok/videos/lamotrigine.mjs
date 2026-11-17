// Lamotrigine. Taken from the lamotrigine medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Lamotrigine:', 'what to know'], 'For epilepsy and bipolar disorder.'),
  point(1, 'What it is for', chips(['Epilepsy', 'Preventing depression in bipolar disorder'], 0.8)),
  point(2, 'Common side effects', chips(['Headache', 'Skin rash', 'Dizziness', 'Feeling sick', 'Tiredness', 'Blurred vision'], 0.8)),
  point('!', 'Any rash? Get help', p('Get help straight away for any skin rash, especially with a high temperature, sore mouth, blisters or peeling.')),
  point(3, 'Starts slowly', p('The dose goes up slowly at the start, to lower the risk of a serious rash.')),
  point('!', 'Never stop suddenly', p('It can trigger seizures or bring symptoms back. Missed more than 5 days? Do not restart at your usual dose. Ask your doctor.')),
  end('Read about lamotrigine', 'General information, not medical advice.'),
];
