// How to get the Universal Credit health element. Taken from the Universal Credit pages on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Universal Credit', ['How to get', 'the health', 'element'], 'Step by step.'),
  point(1, 'Tell the DWP', p('Report a change of circumstances in your online account, or say you have a health condition when you apply.')),
  point(2, 'Send a fit note', p('Upload it to your journal. The 3 month waiting period usually starts from the date you give medical evidence.')),
  point(3, 'Fill in the UC50', p('You usually have 4 weeks. Describe your worst days as well as your better ones, and add letters from your care team.')),
  point(4, 'The assessment', p('Most people then have a Work Capability Assessment, by phone, video or face to face.')),
  point('!', 'Terminally ill?', p('Ask your doctor or nurse for an SR1 form. No assessment and no waiting period.')),
  point(5, 'Disagree?', chips(['Mandatory reconsideration within one month', 'Then appeal to a tribunal'], 0.8)),
  end('Read how to get it', 'General information, not financial advice. Free help from Citizens Advice.'),
];
