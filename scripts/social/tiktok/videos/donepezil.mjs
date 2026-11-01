// Donepezil. Taken from the donepezil medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Donepezil:', 'Alzheimer\'s', 'medicine'], 'Also known as Aricept.'),
  point(1, 'What it does', p('It can help with memory and thinking for a while in Alzheimer\'s disease, but it does not cure it.')),
  point(2, 'Common side effects', chips(['Feeling sick', 'Diarrhoea', 'Vivid dreams', 'Muscle cramps', 'Tiredness'], 0.8)),
  point(3, 'Vivid dreams?', p('It is usually taken at night. Taking it in the morning may help.')),
  point(4, 'Stopping', p('Memory and thinking can drop within weeks. Decide with the memory clinic or GP.')),
  point('!', 'Get help if', chips(['Slow heartbeat or fainting', 'Black or bloody poo', 'Vomiting blood', 'Fits'], 0.8)),
  end('Read about donepezil', 'General information, not medical advice.'),
];
