// Bisoprolol. Taken from the bisoprolol medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Bisoprolol:', 'what to know'], 'A beta blocker.'),
  point(1, 'What it is for', chips(['Heart failure', 'Preventing angina', 'High blood pressure', 'Fast heart rhythms'], 0.8)),
  point(2, 'How it works', p('It blocks adrenaline on the heart, slowing your heart rate so the heart works more efficiently.')),
  point(3, 'Common side effects', chips(['Tired or dizzy', 'Cold hands and feet', 'Headache', 'Feeling sick'], 0.8)),
  point(4, 'Good to know', chips(['Can make asthma worse', 'Can hide low blood sugar'], 0.8)),
  point('!', 'Do not stop suddenly', p('It can make angina worse and raise your heart rate. Your doctor will lower the dose over 1 to 2 weeks.')),
  end('Read about bisoprolol', 'General information, not medical advice. Get help for chest pain or fainting.'),
];
