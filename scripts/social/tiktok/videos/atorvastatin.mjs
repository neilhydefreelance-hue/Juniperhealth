// Atorvastatin. Taken from the atorvastatin medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Atorvastatin:', 'statins', 'explained'], 'Also known as Lipitor.'),
  point(1, 'What it does', p('It lowers cholesterol and reduces your risk of a heart attack or stroke.')),
  point(2, 'Common side effects', chips(['Headache', 'Muscle aches', 'Feeling sick', 'Indigestion'], 0.8)),
  point(3, 'Muscle pain?', p('Tell your doctor. It is often not caused by the statin, but it should be checked.')),
  point(4, 'Good to know', chips(['Avoid lots of grapefruit juice', 'Not in pregnancy or breastfeeding', 'Cholesterol rises again if you stop'], 0.8)),
  point('!', 'Get help if', p('You have unexplained muscle pain with a high temperature or dark pee, or yellow skin or eyes.')),
  end('Read about atorvastatin', 'General information, not medical advice.'),
];
