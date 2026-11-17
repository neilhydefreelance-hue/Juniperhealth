// "What is migraine?" Taken from the migraine guide on the website.
import { chips, title, point, big, p, end } from './_common.mjs';
export const scenes = [
  title('Explained simply', ['More than', 'a headache:', 'migraine'], ''),
  big('1 in 5', 'Women', 'And around 1 in 15 men have migraine. Attacks usually last 4 hours to 3 days.'),
  point(1, 'Common symptoms', chips(['Throbbing headache', 'Feeling sick', 'Light and sound hurt', 'Worse when you move'], 0.8)),
  point(2, 'Aura', p('About 1 in 3 people get a warning sign first, like zigzag lines, flashing lights or pins and needles.')),
  point(3, 'Common triggers', chips(['Hormone changes', 'Stress', 'Tiredness', 'Skipping meals', 'Alcohol', 'Bright lights'], 0.8), 5.4),
  point(4, 'What can help', chips(['A headache diary', 'Painkillers', 'Triptans', 'Preventive medicines', 'CGRP medicines'], 0.8), 5.4),
  point('!', 'Call 999 if', p('A headache is sudden and the worst you have ever had, or comes with weakness, slurred speech, confusion or a drooping face.'), 5.4),
  end('Free plain English guide', 'General information, not medical advice.'),
];
