// Tolterodine. Taken from the tolterodine medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Tolterodine:', 'what to know'], 'For an overactive bladder.'),
  point(1, 'What it does', p('It reduces urgency, needing to pee often and leaking, by calming the bladder muscle.')),
  point(2, 'Common side effects', chips(['Dry mouth', 'Constipation', 'Headache', 'Dry eyes', 'Blurred vision', 'Dizziness'], 0.8)),
  point('!', 'Call 111 or your doctor', p('If you cannot pee, have a fast or irregular heartbeat, or feel confused.')),
  point(3, 'Older people', p('Long-term use of this type of medicine has been linked with memory problems in older people.')),
  point(4, 'Stopping', p('There are no withdrawal symptoms, but bladder symptoms may come back.')),
  end('Read about tolterodine', 'General information, not medical advice.'),
];
