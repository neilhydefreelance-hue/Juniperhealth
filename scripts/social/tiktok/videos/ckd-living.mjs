// Living with chronic kidney disease. Taken from the CKD living well page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Conditions A to Z', ['Living with', 'kidney disease'], 'Protect your kidneys.'),
  point(1, 'Protect your kidneys', chips(['Take blood pressure medicines', 'Less salt', 'Stop smoking', 'Keep active'], 0.8)),
  point('!', 'Careful with painkillers', p('Avoid anti-inflammatory painkillers such as ibuprofen unless your doctor says they are safe.')),
  point(2, 'Tell every doctor', p('Tell every doctor, dentist and pharmacist you have CKD. Ask about sick day rules.')),
  point(3, 'Diet', p('Mild CKD needs a healthy, balanced diet. Do not cut potassium or phosphate without advice.')),
  point(4, 'Vaccines', chips(['Flu', 'COVID-19', 'Pneumonia'], 0.8)),
  end('Read about kidney disease', 'General information. Kidney Care UK offers support.'),
];
