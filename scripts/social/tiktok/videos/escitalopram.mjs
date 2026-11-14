// Escitalopram. Taken from the escitalopram medicine page on the website.
import { chips, title, point, big, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Escitalopram:', 'what to know'], 'Also known as Cipralex.'),
  point(1, 'What it treats', chips(['Depression', 'Generalised anxiety', 'Panic and social anxiety', 'OCD', 'PTSD'], 0.8), 5.6),
  big('4 to 6 weeks', 'Give it time', 'It usually takes 4 to 6 weeks to work fully. Some people feel more anxious at first.'),
  point(2, 'Common side effects', chips(['Feeling sick', 'Headache', 'Sweating', 'Sleep changes', 'Yawning'], 0.8)),
  point(3, 'Good to know', chips(['Can affect heart rhythm', "No St John's wort", 'Do not stop suddenly'], 0.8)),
  point('!', 'Get help straight away', p('Tell your doctor at once if you feel worse or have thoughts of suicide.')),
  end('Read about escitalopram', 'General information, not medical advice. In an emergency call 999. Samaritans: 116 123.'),
];
