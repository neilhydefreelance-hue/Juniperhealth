// "What is COPD?" Taken from the COPD guide on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Explained simply', ['What is', 'COPD?'], 'Chronic obstructive pulmonary disease.', 3.4),
  point(1, 'A group of lung conditions', p('Including emphysema and chronic bronchitis. They make it hard to breathe out. It is usually diagnosed over 35.')),
  point(2, 'Symptoms', chips(['Breathlessness', 'Chesty cough', 'Chest infections', 'Wheezing', 'Tiredness'], 0.8)),
  point(3, 'Not just a smoker\'s cough', p('Many people put early symptoms down to getting older, so COPD can go unnoticed for years. Ask for a spirometry test.')),
  point(4, 'What can help', chips(['Stopping smoking', 'Pulmonary rehab', 'Inhalers', 'Vaccines', 'A rescue pack'], 0.8), 5.4),
  point('!', 'Call 999 if', p('You are severely breathless and treatment is not helping, have chest pain, blue or grey lips, or are confused or very drowsy.'), 5.6),
  end('Free plain English guide', 'General information, not medical advice.'),
];
