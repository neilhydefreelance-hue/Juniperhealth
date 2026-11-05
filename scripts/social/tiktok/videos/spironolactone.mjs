// Spironolactone. Taken from the spironolactone medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Spironolactone:', 'what to know'], 'Also known as Aldactone.'),
  point(1, 'What it is for', chips(['Heart failure', 'Fluid build-up', 'Hard-to-control blood pressure'], 0.8)),
  point(2, 'Also used for', chips(['Acne in women', 'Excess hair growth, including PCOS'], 0.8)),
  point(3, 'Watch your potassium', chips(['Regular blood tests', 'No potassium supplements', 'No salt substitutes'], 0.8)),
  point(4, 'Common side effects', chips(['Breast tenderness', 'Irregular periods', 'Dizziness', 'Peeing more'], 0.8)),
  point('!', 'Get help if', chips(['Muscle weakness or numbness', 'Irregular heartbeat', 'Confusion or peeing much less'], 0.8)),
  end('Read about spironolactone', 'General information, not medical advice. Ask your doctor about sick day rules.'),
];
