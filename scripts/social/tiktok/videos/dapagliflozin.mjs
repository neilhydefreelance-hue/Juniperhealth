// Dapagliflozin. Taken from the dapagliflozin medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Dapagliflozin:', 'what to know'], 'For diabetes, heart and kidneys.'),
  point(1, 'What it is for', chips(['Type 2 diabetes', 'Heart failure', 'Chronic kidney disease'], 0.8)),
  point(2, 'Common side effects', chips(['Thrush', 'Urine infections', 'Peeing more', 'Thirst', 'Dizziness'], 0.8)),
  point('!', 'Sick day rules', p('Stop and get advice if you are unwell and cannot eat or drink, or before major surgery.')),
  point('!', 'Get help fast', p('Feeling or being sick, stomach pain, fast breathing or sweet-smelling breath. These can be signs of DKA.')),
  point(3, 'Everyday tips', p('Drink plenty of fluids, and keep your genital area clean to lower the risk of infections.')),
  end('Read about dapagliflozin', 'General information, not medical advice.'),
];
