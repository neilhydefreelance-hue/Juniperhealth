// Ezetimibe. Taken from the ezetimibe medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Ezetimibe:', 'lowering', 'cholesterol'], 'Also known as Ezetrol.'),
  point(1, 'How it works', p('It reduces how much cholesterol your gut absorbs from food, so LDL ("bad") cholesterol falls.')),
  point(2, 'With or without a statin', p('It is often used with a statin, or instead of one. It also treats inherited high cholesterol.')),
  point(3, 'Common side effects', chips(['Stomach pain', 'Diarrhoea', 'Wind', 'Tiredness', 'Muscle aches'], 0.8)),
  point(4, 'Works best with', p('A healthy diet. Cholesterol rises again if you stop.')),
  point('!', 'Get help if', chips(['Unexplained muscle pain or weakness', 'Yellow skin or eyes', 'Severe stomach pain'], 0.8)),
  end('Read about ezetimibe', 'General information, not medical advice.'),
];
