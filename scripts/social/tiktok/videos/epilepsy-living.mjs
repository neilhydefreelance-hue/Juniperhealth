// Living with epilepsy. Taken from the epilepsy living well page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Conditions A to Z', ['Living with', 'epilepsy'], 'Triggers, safety and driving.'),
  point(1, 'Common triggers', chips(['Missing medicine', 'Lack of sleep', 'Stress', 'Alcohol', 'Illness', 'Flashing lights, for a few'], 0.8)),
  point(2, 'Stay safe', p('Have showers rather than baths, and swim with someone who knows about your epilepsy.')),
  point(3, 'Driving', p('You must tell the DVLA and stop driving. You can usually reapply after 12 months without a seizure.')),
  point(4, 'Planning a baby?', p('Talk to your specialist first. Some medicines can harm an unborn baby. Do not stop suddenly.')),
  point('!', 'Call 999', p('If a seizure lasts more than 5 minutes, or one follows another.')),
  end('Read about epilepsy', 'General information, not medical advice.'),
];
