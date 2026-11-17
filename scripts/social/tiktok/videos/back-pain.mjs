// Back and neck pain. Taken from the back and neck pain guide on the website.
import { chips, title, point, big, p, end } from './_common.mjs';
export const scenes = [
  title('Explained simply', ['Back and', 'neck pain'], 'Most gets better on its own.', 3.4),
  big('4 to 6 weeks', 'Usually', 'Most back pain gets better on its own in this time. It is rarely caused by serious damage.'),
  point(1, 'Keep moving', p('Staying active is the best thing you can do. Carry on with normal activities as much as you can, even if you go slowly.')),
  point(2, 'What can help', chips(['Walking and swimming', 'Stretching, yoga or pilates', 'Physiotherapy', 'Anti-inflammatory painkillers'], 0.8)),
  point(3, 'Things that make it worse', chips(['Sitting for long periods', 'Inactivity', 'Stress', 'Poor sleep'], 0.8)),
  point('!', 'Call 999 if back pain comes with', p('Numbness around your bottom or genitals, problems peeing or pooing, or weakness in both legs.'), 5.6),
  end('Free plain English guide', 'General information, not medical advice. See a GP or physio if it is not improving.'),
];
