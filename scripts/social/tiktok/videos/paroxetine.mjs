// Paroxetine. Taken from the paroxetine medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Paroxetine:', 'what to know'], 'An SSRI antidepressant.'),
  point(1, 'What it is for', chips(['Depression', 'Panic and social anxiety', 'Generalised anxiety', 'OCD', 'PTSD'], 0.8)),
  point(2, 'Common side effects', chips(['Feeling sick', 'Sweating', 'Sleep changes', 'Dry mouth', 'Sexual problems', 'Weight gain'], 0.8)),
  point('!', 'Stopping is harder', p('It can cause stronger withdrawal than many antidepressants. Your doctor will lower the dose very slowly.')),
  point(3, 'Pregnancy', p('It is not usually recommended. Talk to your doctor before trying for a baby, but do not stop suddenly.')),
  point('!', 'Feeling worse?', p('Tell your doctor straight away if you have thoughts of suicide, especially if you are under 25.')),
  end('Read about paroxetine', 'General information, not medical advice. Samaritans: 116 123.'),
];
