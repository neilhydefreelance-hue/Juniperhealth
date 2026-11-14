// Rivastigmine. Taken from the rivastigmine medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Rivastigmine:', 'what to know'], "For Alzheimer's and Parkinson's dementia."),
  point(1, 'Capsules or patches', p('It comes as capsules, liquid or a daily skin patch.')),
  point(2, 'Common side effects', chips(['Feeling or being sick', 'Less appetite', 'Weight loss', 'Dizziness', 'Diarrhoea'], 0.8)),
  point('!', 'Patch safety', p('Take off the old patch before putting on a new one. More than one patch can cause a dangerous overdose.')),
  point(3, 'Change the spot', p('Put the patch on a different place each day.')),
  point(4, 'Missed more than 3 days?', p('It must be restarted at the lowest dose. Ask your doctor.')),
  end('Read about rivastigmine', 'General information, not medical advice.'),
];
