// Diazepam. Taken from the diazepam medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Diazepam:', 'short-term', 'only'], 'Also known as Valium.'),
  point(1, 'What it is used for', chips(['Severe anxiety', 'Muscle spasms', 'Alcohol withdrawal', 'Stopping a long seizure'], 0.8)),
  point(2, 'Usually 2 to 4 weeks', p('It can cause dependence, even after a few weeks, so it is usually only prescribed short term.')),
  point('!', 'Never mix', p('Never take it with alcohol or opioids, as this can stop your breathing. Call 999 for slow breathing or if someone is hard to wake.')),
  point(3, 'Common side effects', chips(['Sleepy', 'Unsteady', 'Poor memory', 'Headache'], 0.8)),
  point(4, 'Do not stop suddenly', p('After regular use, stopping can cause withdrawal and, in severe cases, seizures. Your doctor will lower the dose very slowly.')),
  end('Read about diazepam', 'General information, not medical advice. Do not drive if you feel sleepy.'),
];
