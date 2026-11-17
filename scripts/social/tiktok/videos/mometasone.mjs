// Mometasone. Taken from the mometasone medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Mometasone:', 'what to know'], 'A steroid spray, cream and inhaler.'),
  point(1, 'What it is for', chips(['Hay fever spray', 'Nasal polyps', 'Eczema and psoriasis', 'Asthma inhaler'], 0.8)),
  point(2, 'Common side effects', chips(['Nosebleeds', 'Dry or sore nose', 'Headache', 'Stinging skin'], 0.8)),
  point(3, 'Long use on skin', p('Strong steroid creams can thin the skin with long use.')),
  point('!', 'Call 111 or your doctor', p('If you notice changes in your eyesight, or weeping or crusting skin.')),
  point(4, 'Stopping a cream', p('Skin may flare if stopped suddenly after long use. Your doctor may suggest using it less often first.')),
  end('Read about mometasone', 'General information, not medical advice.'),
];
