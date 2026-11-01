// "What is multiple sclerosis?" Taken from the MS guide on the website.
import { chips, title, point, big, p, end } from './_common.mjs';
export const scenes = [
  title('Explained simply', ['What is', 'MS?'], 'Multiple sclerosis.', 3.4),
  point(1, 'The immune system attacks the nerves', p('It damages the protective layer around nerves in the brain and spinal cord, disrupting messages to the body.'), 5.4),
  big('150,000+', 'People in the UK', 'Have MS. It is often diagnosed in people in their 20s, 30s and 40s, and is more common in women.'),
  point(2, 'Common symptoms', chips(['Fatigue', 'Sight problems', 'Numbness or tingling', 'Weakness', 'Balance problems', 'Bladder problems'], 0.8), 5.6),
  point(3, 'Types of MS', chips(['Relapsing remitting', 'Secondary progressive', 'Primary progressive'], 0.8)),
  point(4, 'What can help', chips(['Disease modifying therapies', 'Treating relapses', 'Fatigue courses', 'Physiotherapy'], 0.8)),
  end('Free plain English guide', 'General information, not medical advice.'),
];
