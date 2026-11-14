// Fluoxetine. Taken from the fluoxetine medicine page on the website.
import { chips, title, point, big, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Fluoxetine', '(Prozac):', 'what to know'], 'An SSRI antidepressant.'),
  point(1, 'What it treats', chips(['Depression', 'OCD', 'Bulimia'], 0.8)),
  big('4 to 6 weeks', 'Give it time', 'It can take 4 to 6 weeks to work. It is the main antidepressant used for young people.'),
  point(2, 'Common side effects', chips(['Feeling sick', 'Headache', 'Trouble sleeping', 'Feeling restless', 'Less appetite'], 0.8)),
  point(3, 'Stays in your body', p('It lasts for weeks, so it interacts with many medicines. Do not take it with St John\'s wort.')),
  point('!', 'Get help straight away', p('Tell your doctor at once if you feel worse or have thoughts of suicide, especially if you are under 25.')),
  end('Read about fluoxetine', 'General information, not medical advice. In an emergency call 999. Samaritans: 116 123.'),
];
