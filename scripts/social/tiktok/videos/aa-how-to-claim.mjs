// How to claim Attendance Allowance. Taken from the Attendance Allowance pages on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Attendance Allowance', ['How to', 'claim'], 'Step by step.'),
  point(1, 'Get the form', p('Claim online at GOV.UK, or call the free helpline on 0800 731 0122. Ask by phone and your claim can start that day, if you send it back within 6 weeks.')),
  point(2, 'Fill it in well', chips(['Describe a typical week', 'Include bad days and nights', 'Think about safety', 'Say how often you need help'], 0.8)),
  point(3, 'Need, not get', p('It is about the help you need, not only the help you get.')),
  point(4, 'Send evidence', chips(['GP or consultant letters', 'Your medicines list', 'A care plan', 'A note from someone who helps'], 0.8)),
  point('!', 'Terminally ill?', p('Use the special rules. Ask a doctor or nurse for an SR1 form. You get the higher rate straight away.')),
  end('Read how to claim', 'General information, not financial advice. Age UK Advice: 0800 678 1602.'),
];
