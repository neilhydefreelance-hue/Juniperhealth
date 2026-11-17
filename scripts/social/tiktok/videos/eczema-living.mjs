// Living with eczema. Taken from the eczema living well page on the website.
import { title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Conditions A to Z', ['Living with', 'eczema'], 'Everyday tips for your skin.'),
  point(1, 'Daily routine', p('Short, warm baths or showers. Wash with your emollient and apply more straight after.')),
  point(2, 'Clothes', p('Soft cotton fabrics and non-biological washing powder.')),
  point(3, 'Stop the itch', p('Keep nails short. Try tapping or pressing the skin instead of scratching.')),
  point('!', 'Fire safety', p('Emollients soak into fabrics and make them catch fire more easily. Keep away from flames and do not smoke.')),
  point(4, 'Your mental health', p('Talk to your GP if you are struggling. In England you can refer yourself to NHS Talking Therapies.')),
  end('Read about eczema', 'General information. The National Eczema Society has a helpline.'),
];
