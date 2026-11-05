// Finasteride. Taken from the finasteride medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Finasteride:', 'what to know'], 'Proscar and Propecia.'),
  point(1, 'What it is for', chips(['Enlarged prostate (5mg)', 'Male pattern hair loss (1mg)'], 0.8)),
  point(2, 'Common side effects', chips(['Erection problems', 'Lower sex drive', 'Less semen', 'Breast tenderness'], 0.8)),
  point('!', 'Mood warning', p('The medicines regulator warns about depression and suicidal thoughts. Stop and see a doctor if your mood changes.')),
  point(3, 'Pregnancy', p('Women who are or may become pregnant should not handle crushed or broken tablets.')),
  point(4, 'PSA tests', p('It lowers PSA test results.')),
  end('Read about finasteride', 'General information, not medical advice. Samaritans: 116 123.'),
];
