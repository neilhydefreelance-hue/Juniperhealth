// Tamsulosin. Taken from the tamsulosin medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Tamsulosin:', 'enlarged', 'prostate'], 'Making it easier to pee.'),
  point(1, 'What it does', p('It relaxes the prostate and bladder neck, so urine flows more easily. It helps with a weak flow and needing to pee often.')),
  point(2, 'Common side effects', chips(['Dizzy when standing', 'Ejaculation problems', 'Blocked or runny nose', 'Headache'], 0.8)),
  point(3, 'Stand up slowly', p('Get up slowly from sitting or lying down.')),
  point(4, 'Having cataract surgery?', p('Tell the eye surgeon you take tamsulosin.')),
  point('!', 'Get help if', chips(['You faint', 'An erection lasts more than 4 hours', 'A severe skin rash'], 0.8)),
  end('Read about tamsulosin', 'General information, not medical advice.'),
];
