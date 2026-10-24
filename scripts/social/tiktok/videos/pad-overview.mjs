// Peripheral arterial disease. Taken from the PAD page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Circulation', ['Legs hurt', 'when you walk?'], 'It could be PAD.'),
  point(1, 'What PAD is', p('Fatty deposits narrow the arteries and reduce blood flow to your legs. It is common, especially over 60 and in people who smoke.')),
  point(2, 'Pain that eases with rest', p('Cramping in the calves, thighs or buttocks when walking that goes away when you stop. This is called intermittent claudication.')),
  point(3, 'Other signs', chips(['Cold or numb feet', 'Hair loss on legs', 'Shiny, pale skin', 'Sores that do not heal'], 0.8)),
  point(4, 'Biggest risk', p('Smoking is the biggest risk. Diabetes, high blood pressure and high cholesterol raise it too.')),
  point('!', 'Call 999 if', p('Your leg or foot suddenly becomes painful, cold, pale, blue or numb, or you cannot move it.')),
  end('Read our PAD guide', 'General information, not medical advice. See your GP about leg pain when walking.'),
];
