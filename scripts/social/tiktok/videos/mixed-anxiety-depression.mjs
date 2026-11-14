// Mixed anxiety and depression. Taken from the mixed anxiety and depression page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Mental health', ['Anxious', 'and low', 'at the same time?'], 'Mixed anxiety and depression.'),
  point(1, 'Very common', p('Many people have symptoms of both. "Mild" does not mean easy to live with.')),
  point(2, 'Signs', chips(['Low or hopeless', 'Worried or on edge', 'Tired', 'Poor sleep', 'Hard to concentrate'], 0.8)),
  point(3, 'Common triggers', chips(['Money worries', 'Bereavement', 'Long-term pain or illness', 'Loneliness'], 0.8)),
  point(4, 'Getting help', p('Talk to your GP. In England you can refer yourself to NHS Talking Therapies. In Wales, ask your GP about local support.')),
  point('!', 'If you feel unsafe', p('Call 999 in an emergency, or call Samaritans free on 116 123, any time.')),
  end('Read our guide', 'General information, not medical advice. It can be treated.'),
];
