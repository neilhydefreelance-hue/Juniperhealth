// Colchicine. Taken from the colchicine medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Colchicine:', 'for gout', 'attacks'], 'What to know.'),
  point(1, 'What it is for', chips(['Treating a gout attack', 'Preventing attacks when starting allopurinol', 'Pericarditis'], 0.8)),
  point('!', 'Never take extra', p('Do not take more than the prescribed dose. Too much colchicine is dangerous.')),
  point(2, 'Common side effects', chips(['Diarrhoea', 'Feeling or being sick', 'Stomach pain'], 0.8)),
  point(3, 'Severe diarrhoea or vomiting?', p('Stop taking it.')),
  point(4, 'Interactions', chips(['Grapefruit and grapefruit juice', 'Clarithromycin', 'Some statins'], 0.8)),
  end('Read about colchicine', 'General information, not medical advice. Get help for unusual bruising or a high temperature.'),
];
