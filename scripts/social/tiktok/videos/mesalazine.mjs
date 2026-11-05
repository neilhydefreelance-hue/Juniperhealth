// Mesalazine. Taken from the mesalazine medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Mesalazine:', 'for colitis'], 'Asacol, Octasa, Pentasa and others.'),
  point(1, 'What it does', p('It reduces inflammation in the bowel. It is the main treatment for mild to moderate ulcerative colitis.')),
  point(2, 'Stay on the same brand', p('Different brands release the medicine in different parts of the bowel.')),
  point(3, 'Common side effects', chips(['Headache', 'Feeling sick', 'Stomach pain', 'Diarrhoea', 'Rash'], 0.8)),
  point(4, 'Blood tests', p('You need regular blood tests to check your kidneys and blood count.')),
  point('!', 'Get help if', chips(['Unexplained bruising or sore throat', 'Worse bloody diarrhoea with fever', 'Chest pain or breathlessness'], 0.8)),
  end('Read about mesalazine', 'General information, not medical advice. Stopping can lead to a flare-up.'),
];
