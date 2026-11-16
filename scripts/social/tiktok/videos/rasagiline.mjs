// Rasagiline. Taken from the rasagiline medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Rasagiline:', 'what to know'], "A once-a-day Parkinson's tablet."),
  point(1, 'How it works', p('It stops dopamine being broken down in the brain, which improves movement.')),
  point(2, 'Common side effects', chips(['Headache', 'Flu-like symptoms', 'Joint pain', 'Indigestion', 'Low mood'], 0.8)),
  point('!', 'Tell your doctor', p('About urges you cannot control, such as gambling or shopping, or seeing things that are not there.')),
  point(3, 'Check with a pharmacist', p('It interacts with some antidepressants, tramadol, and cough and cold remedies.')),
  point(4, 'Skin checks', p('Have regular skin checks, and report a new or changing mole.')),
  end('Read about rasagiline', 'General information, not medical advice.'),
];
