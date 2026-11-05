// Levothyroxine. Taken from the levothyroxine medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Levothyroxine:', 'what to know'], 'For an underactive thyroid.'),
  point(1, 'What it does', p('It replaces the thyroid hormone your body is not making enough of. Most people take it for life.')),
  point(2, 'How to take it', p('On an empty stomach, usually 30 to 60 minutes before breakfast or caffeine.')),
  point(3, 'Leave a gap', chips(['4 hours from iron', '4 hours from calcium', '4 hours from indigestion remedies'], 0.8)),
  point(4, 'Dose too high?', chips(['Fast heartbeat', 'Sweating', 'Shaking', 'Feeling anxious', 'Trouble sleeping'], 0.8)),
  point(5, 'Blood tests', p('You need blood tests to check your dose, especially when starting or if you become pregnant.')),
  end('Read about levothyroxine', 'General information, not medical advice. Get urgent help for chest pain.'),
];
