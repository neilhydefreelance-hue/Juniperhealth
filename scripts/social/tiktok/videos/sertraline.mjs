// Sertraline. Taken from the sertraline medicine page on the website.
import { chips, title, point, big, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Sertraline:', 'what to know'], 'One of the most used antidepressants in the UK.'),
  point(1, 'What it treats', chips(['Depression', 'Panic and social anxiety', 'OCD', 'PTSD'], 0.8)),
  big('4 to 6 weeks', 'Give it time', 'It usually takes 4 to 6 weeks to work fully. Some people feel more anxious when they first start.'),
  point(2, 'Common side effects', chips(['Feeling sick', 'Headache', 'Sleep changes', 'Dizziness', 'Sweating'], 0.8)),
  point(3, 'Do not stop suddenly', p('Stopping suddenly can cause withdrawal symptoms like dizziness and electric shock feelings. Your doctor will lower the dose slowly.')),
  point(4, 'Get help straight away', p('Tell your doctor at once if you feel worse or have thoughts of suicide. In an emergency call 999. Samaritans: 116 123.')),
  end('Read about sertraline', 'General information, not medical advice. Always follow your doctor or pharmacist.'),
];
