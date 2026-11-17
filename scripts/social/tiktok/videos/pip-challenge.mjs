// Challenging a PIP decision. Taken from the PIP challenge a decision page on the website.
import { chips, title, point, big, p, end } from './_common.mjs';
export const scenes = [
  title('PIP', ['PIP decision', 'wrong?', 'Challenge it'], 'Many decisions are changed.'),
  big('1 month', 'Act fast', 'Ask for a mandatory reconsideration within one month of the date on your decision letter.'),
  point(1, 'Mandatory reconsideration', p('Ask by phone, by letter or on form CRMR1. If you phone, follow it up in writing and keep a copy.')),
  point(2, 'What to say', chips(['Which activities you disagree with', 'Why, with examples', 'What the report got wrong', 'Any new evidence'], 0.8)),
  point(3, 'Then appeal', p('Still disagree? Appeal to an independent tribunal within one month of your reconsideration notice. It is not part of the DWP.')),
  point(4, 'Worth it', p('Most PIP appeals that reach a hearing are decided in the claimant\'s favour.')),
  end('Read how to challenge', 'General information, not legal advice. Citizens Advice can help for free.'),
];
