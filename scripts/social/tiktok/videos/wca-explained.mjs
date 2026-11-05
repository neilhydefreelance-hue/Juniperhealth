// Work Capability Assessment. Taken from the ESA work capability assessment page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('ESA and Universal Credit', ['The Work', 'Capability', 'Assessment'], 'Explained in under a minute.'),
  point(1, 'What it is', p('It decides whether your health limits your ability to work. It is used for New Style ESA and the Universal Credit health element.')),
  point(2, 'The form', p('ESA50 for ESA, UC50 for Universal Credit. You usually have 4 weeks. Ask before the deadline if you need more time.')),
  point(3, 'Form tips', chips(['Describe your bad days', 'Say what happens if you try', 'Add GP or consultant letters', 'Keep copies'], 0.8)),
  point(4, 'The outcomes', chips(['Fit for work', 'Limited capability for work (LCW)', 'LCWRA: support group or health element'], 0.8)),
  point(5, 'Disagree?', p('Ask for a mandatory reconsideration within one month, then appeal to a tribunal.')),
  end('Read about the WCA', 'General information, not legal advice. Citizens Advice can help for free.'),
];
