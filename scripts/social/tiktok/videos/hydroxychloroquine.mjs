// Hydroxychloroquine. Taken from the hydroxychloroquine medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Hydroxy-', 'chloroquine'], 'For arthritis, lupus and more.'),
  point(1, 'What it treats', chips(['Rheumatoid arthritis', 'Lupus', 'Skin conditions made worse by sun'], 0.8)),
  point(2, 'Be patient', p('It takes 2 to 3 months to work fully.')),
  point(3, 'Eye checks', p('Long-term use can damage the back of the eye. You need regular eye checks after 5 years, or sooner if you are at higher risk.')),
  point('!', 'Eyesight changes?', p('If you have blurring or difficulty reading, stop and contact your doctor.')),
  point(4, 'Keep it safe', p('Keep it away from children. Even a small number of tablets can be dangerous.')),
  end('Read about hydroxychloroquine', 'General information, not medical advice.'),
];
