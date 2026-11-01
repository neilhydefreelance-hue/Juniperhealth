// Citalopram. Taken from the citalopram medicine page on the website.
import { chips, title, point, big, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Citalopram:', 'what to know'], 'An SSRI antidepressant.'),
  point(1, 'What it treats', chips(['Depression', 'Panic disorder'], 0.8)),
  big('4 to 6 weeks', 'Give it time', 'It usually takes 4 to 6 weeks to work fully. Some people feel more anxious when they first start.'),
  point(2, 'Common side effects', chips(['Feeling sick', 'Headache', 'Sweating', 'Dry mouth', 'Sleep changes'], 0.8)),
  point(3, 'Heart rhythm', p('It can affect your heart rhythm at higher doses. Do not take it with St John\'s wort.')),
  point(4, 'Do not stop suddenly', p('It can cause dizziness, electric shock feelings and anxiety. Your doctor will lower the dose slowly.')),
  point('!', 'Get help straight away', p('Tell your doctor at once if you feel worse or have thoughts of suicide, especially if you are under 25.')),
  end('Read about citalopram', 'General information, not medical advice. In an emergency call 999. Samaritans: 116 123.'),
];
