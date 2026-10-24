// Mirtazapine. Taken from the mirtazapine medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Mirtazapine:', 'what to know'], 'An antidepressant that can help sleep.'),
  point(1, 'What it is for', p('It treats depression. It can also help with sleep and appetite, which is useful for some people.')),
  point(2, 'Taken at bedtime', p('It makes you sleepy, so it is usually taken at bedtime. Lower doses can be more sedating. Avoid alcohol.')),
  point(3, 'Common side effects', chips(['Sleepy at first', 'More appetite', 'Weight gain', 'Dry mouth', 'Headache'], 0.8)),
  point('!', 'Contact your doctor if', chips(['High temperature or sore throat', 'Mouth ulcers', 'Yellow skin or eyes', 'Thoughts of self-harm'], 0.8)),
  point(4, 'Do not stop suddenly', p('It can cause dizziness, anxiety and trouble sleeping. Your doctor will lower the dose slowly.')),
  end('Read about mirtazapine', 'General information, not medical advice. In an emergency call 999. Samaritans: 116 123.'),
];
