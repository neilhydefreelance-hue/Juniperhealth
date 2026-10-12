// "What is coeliac disease?" Taken from the coeliac disease guide on the website.
import { chips, title, point, big, p, end } from './_common.mjs';
export const scenes = [
  title('Explained simply', ['What is', 'coeliac', 'disease?'], 'It is not a food intolerance.'),
  point(1, 'An autoimmune condition', p('Eating gluten, found in wheat, barley and rye, makes the immune system attack the lining of the gut.')),
  big('1 in 100', 'People in the UK', 'Have coeliac disease, but most have not been diagnosed.'),
  point(2, 'Symptoms', chips(['Diarrhoea', 'Tummy pain', 'Bloating', 'Tiredness or anaemia', 'Weight loss', 'Itchy rash'], 0.8), 5.6),
  point(3, 'Keep eating gluten until tested', p('The blood test only works if you eat gluten in more than one meal every day for at least 6 weeks.'), 5.4),
  point(4, 'Treatment', p('A lifelong gluten free diet. You should get dietitian support, and some gluten free foods may be available on prescription.'), 5.4),
  end('Free plain English guide', 'General information, not medical advice. Do not cut out gluten before testing.'),
];
