// Urinary incontinence. Taken from the urinary incontinence guide on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Very common, very treatable', ['Bladder', 'leaks'], 'Urinary incontinence.', 3.4),
  point(1, 'You are not alone', p('It affects millions of women and men in the UK. Many people feel embarrassed, but it is usually treatable.')),
  point(2, 'Types', chips(['Stress: coughing or laughing', 'Urge: sudden need to go', 'Mixed', 'Overflow'], 0.8)),
  point(3, 'Common causes', chips(['Pregnancy and childbirth', 'Menopause', 'Being overweight', 'Prostate problems', 'Constipation'], 0.8)),
  point(4, 'What can help', chips(['Pelvic floor exercises', 'Bladder training', 'Everyday changes', 'Medicines'], 0.8)),
  point(5, 'Getting help', p('See a GP. In some areas you can refer yourself to a continence service or pelvic health physiotherapist.')),
  end('Free plain English guide', 'General information, not medical advice.'),
];
