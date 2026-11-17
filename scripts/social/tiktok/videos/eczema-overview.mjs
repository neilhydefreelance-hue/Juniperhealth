// "What is eczema?" Taken from the eczema guide on the website.
import { chips, title, point, big, p, end } from './_common.mjs';
export const scenes = [
  title('Explained simply', ['What is', 'eczema?'], 'Itchy, dry, cracked and sore skin.', 3.4),
  big('1 in 5', 'Children', 'And 1 in 10 adults in the UK have eczema. It often runs in families.'),
  point(1, 'Where it often appears', chips(['Hands', 'Inside elbows', 'Backs of knees', 'Face and scalp in children'], 0.8)),
  point(2, 'Common triggers', chips(['Soaps and detergents', 'Heat and sweat', 'Cold, dry weather', 'Wool', 'Stress', 'Dust mites and pets'], 0.8), 5.6),
  point(3, 'What can help', chips(['Emollients every day', 'Steroid creams', 'Wet wraps', 'Light therapy', 'Specialist medicines'], 0.8), 5.4),
  point('!', 'Get help the same day if', p('Eczema becomes weepy, crusty or very painful, or you feel unwell. It may be infected. Call NHS 111 or your GP.'), 5.4),
  end('Free plain English guide', 'General information, not medical advice.'),
];
