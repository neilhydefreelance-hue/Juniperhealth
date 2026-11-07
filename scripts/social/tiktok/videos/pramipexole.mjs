// Pramipexole. Taken from the pramipexole medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Pramipexole:', 'what to know'], "For Parkinson's and restless legs."),
  point(1, 'Common side effects', chips(['Feeling sick', 'Sleepiness', 'Dizziness', 'Swollen legs', 'Seeing things'], 0.8)),
  point('!', 'Watch for new urges', p('Such as gambling, shopping, eating or a high sex drive. Tell your doctor straight away. Family may notice first.')),
  point(2, 'Sudden sleep', p('It can make you fall asleep without warning. Do not drive if this happens.')),
  point(3, 'Restless legs getting worse?', p('Symptoms can get worse over time on this medicine. Tell your doctor.')),
  point('!', 'Never stop suddenly', p('It can cause a serious reaction and withdrawal. Your specialist will lower the dose slowly.')),
  end('Read about pramipexole', 'General information, not medical advice.'),
];
