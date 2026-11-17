// Living with migraine. Taken from the migraine living well page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Conditions A to Z', ['Living with', 'migraine'], 'Routines and a plan for attacks.'),
  point(1, 'Keep regular routines', chips(['Same bedtime', 'Regular meals', 'Plenty of water', 'Steady caffeine'], 0.8)),
  point(2, 'Headache diary', p('Note attacks, food, sleep and periods. Over time you may spot patterns.')),
  point(3, 'Plan for attacks', p('Carry your medicine, take it early, and know where you can lie down somewhere dark and quiet.')),
  point(4, 'Screens', p('Use night mode, take regular breaks, and avoid flickering lights.')),
  point(5, 'Exercise and stress', p('Regular, moderate exercise and relaxation can reduce attacks for some people.')),
  end('Read about migraine', 'General information. The Migraine Trust offers free support.'),
];
