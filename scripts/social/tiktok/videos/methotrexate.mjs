// Methotrexate. Taken from the methotrexate medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Methotrexate:', 'once a week'], 'What to know.'),
  point(1, 'What it treats', chips(['Rheumatoid arthritis', 'Severe psoriasis', 'Psoriatic arthritis', "Crohn's disease"], 0.8)),
  point('!', 'Once a week only', p('Take it on the same day each week. Taking it daily by mistake can be fatal.')),
  point(2, 'Alongside it', chips(['Folic acid on a different day', 'Regular blood tests', 'Limit alcohol'], 0.8)),
  point(3, 'Common side effects', chips(['Feeling sick', 'Mouth ulcers', 'Tiredness', 'Hair thinning', 'More infections'], 0.8)),
  point(4, 'Contact your doctor if', chips(['New dry cough or breathlessness', 'High temperature or sore throat', 'Unusual bruising', 'Yellow skin or eyes'], 0.8)),
  end('Read about methotrexate', 'General information, not medical advice. Avoid pregnancy during treatment.'),
];
