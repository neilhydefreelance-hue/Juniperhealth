// "What is heart failure?" Taken from the heart failure guide on the website.
import { chips, title, point, big, p, end } from './_common.mjs';
export const scenes = [
  title('Explained simply', ['What is', 'heart failure?'], 'It does not mean your heart has stopped.', 3.6),
  point(1, 'Not pumping as well', p('Heart failure means your heart is not pumping blood around your body as well as it should. Treatment can control symptoms for many years.'), 5.4),
  big('1 million', 'People in the UK', 'Have heart failure.'),
  point(2, 'Symptoms', chips(['Breathless', 'Breathless lying flat', 'Very tired', 'Swollen ankles', 'Sudden weight gain'], 0.8)),
  point(3, 'Getting diagnosed', p('A blood test called NT-proBNP, then an echocardiogram, an ultrasound scan of your heart.')),
  point(4, 'Tell your team if', p('You are more breathless than usual, your ankles swell more, or you gain weight quickly. Contact your heart failure team or NHS 111.'), 5.4),
  point('!', 'Call 999 if', p('You have chest pain, severe breathlessness, or cough up pink, frothy mucus.'), 4.6),
  end('Free plain English guide', 'General information, not medical advice.'),
];
