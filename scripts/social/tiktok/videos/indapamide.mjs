// Indapamide. Taken from the indapamide medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Indapamide:', 'what to know'], 'A water tablet for blood pressure.'),
  point(1, 'How it works', p('It helps the kidneys remove salt and water and relaxes blood vessels.')),
  point(2, 'Common side effects', chips(['Low potassium', 'Peeing more', 'Headache', 'Dizziness', 'Skin rash'], 0.8)),
  point(3, 'Blood tests', p('You need regular blood tests to check your potassium and sodium levels.')),
  point('!', 'Call 111 or your doctor', p('For muscle cramps, weakness, confusion or an irregular heartbeat, or fainting.')),
  point(4, 'Gout', p('It can make gout worse. Tell your doctor if you have gout.')),
  end('Read about indapamide', 'General information, not medical advice.'),
];
