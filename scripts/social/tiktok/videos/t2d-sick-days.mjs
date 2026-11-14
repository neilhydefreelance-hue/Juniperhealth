// Type 2 diabetes when you are ill. Taken from the type 2 diabetes living well page on the website.
import { title, point, p, end } from './_common.mjs';
export const scenes = [
  title('World Diabetes Day', ['Diabetes and', 'being ill'], 'Know your sick day rules.'),
  point(1, 'Illness raises blood sugar', p('Being unwell can push your blood sugar up, even if you eat less.')),
  point(2, 'Keep drinking', p('Keep drinking fluids, and eat small amounts if you can.')),
  point(3, 'Check more often', p('If you test at home, check your blood sugar more often.')),
  point('!', 'Some medicines may need a pause', p('Such as metformin and SGLT2 inhibitors, when you cannot eat or drink.')),
  point(4, 'Ask for sick day rules', p('Your GP or pharmacist can tell you what to do with your medicines.')),
  end('Read about type 2 diabetes', 'General information, not medical advice.'),
];
