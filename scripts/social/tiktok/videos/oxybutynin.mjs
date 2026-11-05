// Oxybutynin. Taken from the oxybutynin medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Oxybutynin:', 'overactive', 'bladder'], 'Urgency and leaking.'),
  point(1, 'What it does', p('It relaxes the bladder, so you can hold more urine and feel less urgency.')),
  point(2, 'Common side effects', chips(['Dry mouth', 'Constipation', 'Blurred vision', 'Dizzy or sleepy', 'Dry eyes'], 0.8)),
  point(3, 'Older people', p('It may affect memory and thinking. Long-term use of this type of medicine has been linked to a higher risk of dementia. Ask about other options.')),
  point(4, 'Keep cool', p('It reduces sweating, so avoid getting too hot.')),
  point('!', 'Get help if', chips(['You cannot pee', 'Confusion or seeing things', 'Eye pain with blurred vision'], 0.8)),
  end('Read about oxybutynin', 'General information, not medical advice.'),
];
