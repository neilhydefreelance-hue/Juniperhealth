// Theophylline. Taken from the theophylline medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Theophylline:', 'what to know'], 'For asthma and COPD.'),
  point(1, 'What it does', p('It opens the airways. It is an add-on treatment when inhalers are not enough.')),
  point('!', 'A fine balance', p('The gap between a helpful and harmful dose is small. You need blood tests to check the level.')),
  point(2, 'Things that change the level', chips(['Smoking', 'Illness', 'Some antibiotics', 'Many other medicines'], 0.8)),
  point(3, 'Stay on the same brand', p('Always tell your doctor and pharmacist about any changes.')),
  point('!', 'Signs of too much', p('Being sick a lot, a very fast or irregular heartbeat, or fits. Get help straight away.')),
  end('Read about theophylline', 'General information, not medical advice.'),
];
