// How to claim DLA for a child. Taken from the DLA pages on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('DLA for children', ['How to claim', 'DLA for', 'your child'], 'Step by step.'),
  point(1, 'Get the form', p('Download the DLA1 Child form from GOV.UK, or call the free helpline on 0800 121 4600. Send it back within 6 weeks and your claim starts from the day you asked.')),
  point(2, 'Compare with other children', p('DLA is about the extra help your child needs compared with other children the same age.')),
  point(3, 'Form tips', chips(['Keep a diary for a week or two', 'Describe bad days and nights', 'Explain the risks', 'Say how long things take'], 0.8)),
  point(4, 'Send evidence', chips(['GP, consultant or therapist letters', 'EHCP or school support plan', 'Teacher or SENCo letter', 'Your diary'], 0.8)),
  point(5, 'Take your time', p('The form is long. Take breaks and do it over a few days. Keep a copy.')),
  end('Read how to claim', 'General information, not financial advice. Contact: 0808 808 3555.'),
];
