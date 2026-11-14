// Acid reflux and heartburn. Taken from the acid reflux guide on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Explained simply', ['Heartburn and', 'acid reflux'], 'Also called GORD.', 3.4),
  point(1, 'Acid coming back up', p('Stomach acid comes back up into your food pipe. It is very common.'), 4.4),
  point(2, 'Symptoms', chips(['Burning in the chest', 'Sour taste', 'Bringing food up', 'Cough or hiccups', 'Hoarse voice'], 0.8)),
  point(3, 'Common triggers', chips(['Coffee', 'Alcohol', 'Spicy or fatty food', 'Smoking', 'Being overweight', 'Stress'], 0.8), 5.4),
  point(4, 'What can help', chips(['Antacids', 'Gaviscon', 'Omeprazole from your GP', 'Healthy changes'], 0.8)),
  point('!', 'See a GP if you have', p('Difficulty swallowing, weight loss without trying, vomiting blood, or black poo.'), 5.0),
  end('Free plain English guide', 'General information, not medical advice.'),
];
