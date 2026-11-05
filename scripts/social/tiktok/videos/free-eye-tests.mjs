// Free NHS eye tests and help with glasses. Taken from the health costs pages on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('NHS health costs', ['Free eye tests', 'and help with', 'glasses'], 'Many people qualify.'),
  point(1, 'Free sight test if you', chips(['Are under 16 or 60+', 'Have diabetes or glaucoma', 'Are sight impaired', 'Get certain benefits', 'Have an HC2'], 0.8), 5.6),
  point(2, 'Family history', p('You are 40 or over and your parent, brother, sister or child has glaucoma.')),
  point(3, 'Home visits', p('If you qualify and cannot leave home without help because of illness or disability, ask a local optician for a free home visit.')),
  point(4, 'Vouchers for glasses', p('An NHS optical voucher pays towards glasses or contact lenses for some people. Being over 60 on its own does not give you one.')),
  end('Check what you can get', 'General information. Free self-check on our website. Nothing leaves your device.'),
];
