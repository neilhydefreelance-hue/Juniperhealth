// Chronic kidney disease. Taken from the CKD guide on the website.
import { chips, title, point, big, p, end } from './_common.mjs';
export const scenes = [
  title('Explained simply', ['Chronic', 'kidney', 'disease'], 'Often called CKD.'),
  big('1 in 10', 'Adults in the UK', 'Have chronic kidney disease, and many do not know.'),
  point(1, 'Often no early symptoms', p('CKD is usually found through routine blood and urine tests. Later signs include tiredness, swollen ankles and itchy skin.'), 5.4),
  point(2, 'Common causes', chips(['Diabetes', 'High blood pressure', 'Heart disease', 'Some painkillers long term'], 0.8)),
  point(3, 'Get regular tests', p('If you have diabetes, high blood pressure or heart disease, you should have your kidneys checked regularly.')),
  point(4, 'Slowing it down', chips(['Blood pressure medicines', 'SGLT2 inhibitors', 'Statins', 'Healthy changes'], 0.8)),
  end('Free plain English guide', 'General information, not medical advice.'),
];
