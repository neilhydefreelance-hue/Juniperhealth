// Lansoprazole. Taken from the lansoprazole medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Lansoprazole:', 'what to know'], 'It reduces stomach acid.'),
  point(1, 'What it is for', chips(['Heartburn', 'Acid reflux', 'Stomach ulcers', 'Protecting the stomach'], 0.8)),
  point(2, 'Common side effects', chips(['Headache', 'Diarrhoea or constipation', 'Feeling sick', 'Stomach pain', 'Wind'], 0.8)),
  point(3, 'Long-term use', p('It can lower vitamin B12 and magnesium levels.')),
  point('!', 'See a GP', p('If you have difficulty swallowing, weight loss or are being sick.')),
  point(4, 'Stopping', p('After long use, heartburn can be worse for a few weeks. Your GP may suggest stepping down slowly.')),
  end('Read about lansoprazole', 'General information, not medical advice.'),
];
