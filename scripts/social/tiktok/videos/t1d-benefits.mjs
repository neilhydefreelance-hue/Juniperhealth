// Type 1 diabetes, work and benefits. Taken from the type 1 diabetes benefits and work page on the website.
import { title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Conditions A to Z', ['Type 1 diabetes:', 'work and benefits'], 'Your rights and the help you can get.'),
  point(1, 'Protected at work', p('It usually counts as a disability, because the law looks at how you would be without insulin.')),
  point(2, 'Ask for adjustments', p('Breaks to check glucose or treat a hypo, a private place to inject, and time off for appointments.')),
  point(3, 'Free prescriptions', p('In England, get a medical exemption certificate. Ask your GP surgery. Prescriptions are free in Wales.')),
  point(4, 'DLA for children', p('Many families claim DLA, based on the extra care a child needs day and night.')),
  point(5, 'PIP for adults', p('You may qualify if you need prompting or supervision with insulin, for example due to frequent hypos, or have complications.')),
  end('Read about type 1 diabetes', 'General information, not medical or legal advice.'),
];
