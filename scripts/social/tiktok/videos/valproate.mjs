// Valproate. Taken from the valproate medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Valproate:', 'what to know'], 'For epilepsy and bipolar disorder.'),
  point('!', 'Pregnancy warning', p('It can seriously harm an unborn baby. Anyone who could get pregnant must use highly effective contraception.')),
  point(1, 'Pregnancy Prevention Programme', p('Women and girls who could get pregnant must be on it. Men starting valproate are usually reviewed by two specialists.')),
  point(2, 'Common side effects', chips(['Feeling sick', 'Weight gain', 'Hair thinning', 'Shaking', 'Stomach pain', 'Sleepiness'], 0.8)),
  point(3, 'Blood tests', p('You need regular blood tests in the first few months.')),
  point('!', 'Never stop on your own', p('Even if you find out you are pregnant. It can cause seizures. Speak to your doctor urgently instead.')),
  end('Read about valproate', 'General information, not medical advice.'),
];
