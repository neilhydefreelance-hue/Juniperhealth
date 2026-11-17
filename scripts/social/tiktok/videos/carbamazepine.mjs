// Carbamazepine. Taken from the carbamazepine medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Carbamazepine:', 'what to know'], 'Also known as Tegretol.'),
  point(1, 'What it treats', chips(['Epilepsy', 'Trigeminal neuralgia', 'Other nerve pain', 'Bipolar disorder, sometimes'], 0.8)),
  point(2, 'Common side effects', chips(['Dizzy or unsteady', 'Double vision', 'Feeling sick', 'Low sodium'], 0.8)),
  point('!', 'Rash? Get help', p('A skin rash, especially with blisters, peeling, mouth ulcers or a high temperature, needs help straight away.')),
  point(3, 'Contraception and pregnancy', p('It can harm an unborn baby and makes the pill less effective. Talk to your doctor.')),
  point(4, 'Do not stop suddenly', p('It can trigger seizures, even if you take it for another reason. It also interacts with many medicines.')),
  end('Read about carbamazepine', 'General information, not medical advice. Samaritans: 116 123.'),
];
