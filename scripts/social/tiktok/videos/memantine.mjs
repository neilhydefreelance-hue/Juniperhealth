// Memantine. Taken from the memantine medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Memantine:', 'dementia', 'medicine'], 'Also known as Ebixa.'),
  point(1, 'What it is for', p('Moderate to severe Alzheimer\'s disease. It can help with memory, attention and daily activities.')),
  point(2, 'With other medicines', p('It can be taken on its own or with donepezil, galantamine or rivastigmine.')),
  point(3, 'Common side effects', chips(['Headache', 'Dizzy or sleepy', 'Constipation', 'High blood pressure'], 0.8)),
  point('!', 'Get help if', chips(['Fits', 'Seeing or hearing things', 'Sudden confusion', 'Severe stomach pain'], 0.8)),
  point(4, 'Stopping', p('Symptoms may get worse. Decide with the memory clinic or GP. Kidney problems may need a lower dose.')),
  end('Read about memantine', 'General information, not medical advice.'),
];
