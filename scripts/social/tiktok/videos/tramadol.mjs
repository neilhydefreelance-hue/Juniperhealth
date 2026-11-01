// Tramadol. Taken from the tramadol medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Tramadol:', 'what to know'], 'An opioid painkiller.'),
  point(1, 'What it is for', p('Moderate to severe pain, such as after surgery or injury. It works best for short-term pain.')),
  point(2, 'It is addictive', p('It is a controlled drug and can cause dependence. It is not recommended for most long-term pain.')),
  point(3, 'Common side effects', chips(['Feeling sick', 'Constipation', 'Dizzy or sleepy', 'Headache', 'Sweating'], 0.8)),
  point(4, 'Do not mix', chips(['Alcohol', 'Benzodiazepines', 'Other sedatives', 'Many antidepressants'], 0.8)),
  point('!', 'Call 999 if', p('Someone has slow or shallow breathing, or is very sleepy and hard to wake.')),
  point(5, 'Do not stop suddenly', p('After regular use, stopping suddenly can cause withdrawal. Your doctor will lower the dose slowly.')),
  end('Read about tramadol', 'General information, not medical advice. Do not drive if your driving is impaired.'),
];
