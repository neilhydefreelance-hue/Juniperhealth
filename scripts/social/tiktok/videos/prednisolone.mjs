// Prednisolone. Taken from the prednisolone medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Prednisolone:', 'steroid tablets'], 'What to know.'),
  point(1, 'What it is used for', chips(['Asthma attacks', 'COPD flare-ups', 'Bowel flares', 'Arthritis flares', 'Severe allergies'], 0.8)),
  point(2, 'Common side effects', chips(['More appetite', 'Trouble sleeping', 'Mood changes', 'Raised blood sugar'], 0.8)),
  point('!', 'Never stop suddenly', p('After more than 3 weeks or high doses, stopping suddenly can cause a life-threatening adrenal crisis. The dose must be lowered slowly.')),
  point(3, 'Steroid emergency card', p('Carry one if you take it for more than 3 weeks.')),
  point(4, 'Get help if', chips(['Feeling very low, high or confused', 'Signs of serious infection', 'Black or bloody poo', 'Very thirsty, peeing a lot'], 0.8)),
  end('Read about prednisolone', 'General information, not medical advice. Samaritans: 116 123.'),
];
