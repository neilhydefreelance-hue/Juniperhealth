// High blood pressure, the silent condition. Taken from the high blood pressure guide on the website.
import { chips, title, point, big, p, end } from './_common.mjs';
export const scenes = [
  title('The silent condition', ['High blood', 'pressure'], 'It rarely causes symptoms.', 3.4),
  point(1, 'Get it checked', p('The only way to know if you have high blood pressure is to have it checked.'), 4.4),
  big('140/90', 'Or higher', 'Usually means high blood pressure (135/85 or higher at home). Healthy is 90/60 to 120/80.', 5.4),
  point(2, 'Why it matters', chips(['Heart attacks', 'Strokes', 'Kidney disease', 'Vascular dementia', 'Sight problems'], 0.8)),
  point(3, 'What raises your risk', chips(['Age', 'Too much salt', 'Being overweight', 'Alcohol', 'Smoking', 'Family history'], 0.8), 5.4),
  point(4, 'Healthy changes', chips(['Under 6g of salt a day', 'More fruit and veg', '150 active minutes a week', 'Less alcohol', 'Stop smoking'], 0.8), 5.6),
  end('Free plain English guide', 'General information, not medical advice. In England, many pharmacies offer free checks to adults aged 40 or over.'),
];
