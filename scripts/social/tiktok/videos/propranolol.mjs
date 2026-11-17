// Propranolol. Taken from the propranolol medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Propranolol:', 'what to know'], 'A beta blocker with many uses.'),
  point(1, 'What it is used for', chips(['Preventing migraines', 'Physical signs of anxiety', 'High blood pressure', 'Irregular heartbeat', 'Shaking (tremor)'], 0.8), 5.6),
  point(2, 'How it works', p('It blocks adrenaline. This slows your heart rate and eases shaking and a pounding heart.')),
  point(3, 'Common side effects', chips(['Tiredness', 'Cold hands and feet', 'Sleep problems or nightmares', 'Dizziness'], 0.8)),
  point(4, 'Do not stop suddenly', p('It can cause a fast heartbeat and, in people with heart disease, chest pain. Your doctor will lower the dose slowly.')),
  point('!', 'Important', p('Not suitable for most people with asthma. It is very dangerous in overdose. If you have thoughts of self-harm, tell your doctor. Samaritans: 116 123.'), 5.6),
  end('Read about propranolol', 'General information, not medical advice. In an emergency call 999.'),
];
