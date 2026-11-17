// MCAS treatment. Taken from the MCAS treatment and living well pages on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Conditions A to Z', ['MCAS:', 'treatment options'], 'Mast cell activation syndrome.'),
  point(1, 'Antihistamines first', p('Non-drowsy ones such as cetirizine, loratadine or fexofenadine. Only take a higher dose if your doctor says so.')),
  point(2, 'H2 blockers', p('Such as famotidine. They can help with gut symptoms like tummy pain and feeling sick.')),
  point(3, 'Other options', chips(['Sodium cromoglicate', 'Montelukast', 'Short courses of steroids'], 0.8)),
  point(4, 'Avoid your triggers', p('A symptom diary can show patterns. Ask about a dietitian before cutting out foods.')),
  point('!', 'Tell every doctor', p('Some painkillers and anaesthetics can trigger symptoms. Tell your doctor, dentist and pharmacist you have MCAS.')),
  end('Read about MCAS treatment', 'General information, not medical advice.'),
];
