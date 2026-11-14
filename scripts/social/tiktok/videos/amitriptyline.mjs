// Amitriptyline. Taken from the amitriptyline medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Amitriptyline', 'for pain?'], 'Why an antidepressant is used for pain.'),
  point(1, 'Low dose, different job', p('It is an older antidepressant. At low doses it is now mostly used for nerve pain and to prevent migraines.')),
  point(2, 'Also used for', chips(['Tension headaches', 'Fibromyalgia', 'IBS', 'Long-term back pain'], 0.8)),
  point(3, 'Taken in the evening', p('It makes you sleepy, so it is usually taken in the evening. Avoid alcohol.')),
  point(4, 'Common side effects', chips(['Sleepiness', 'Dry mouth', 'Constipation', 'Dizziness', 'Weight gain'], 0.8)),
  point('!', 'Stay safe', p('It can be dangerous in overdose, so keep it away from others. Tell your doctor at once if you have thoughts of harming yourself.')),
  end('Read about amitriptyline', 'General information, not medical advice. In an emergency call 999. Samaritans: 116 123.'),
];
