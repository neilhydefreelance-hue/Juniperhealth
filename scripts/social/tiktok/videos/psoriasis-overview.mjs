// "What is psoriasis?" Taken from the psoriasis guide on the website.
import { chips, title, point, big, p, end } from './_common.mjs';
export const scenes = [
  title('Explained simply', ['What is', 'psoriasis?'], 'And what can help.', 3.4),
  point(1, 'Skin cells made too fast', p('This causes patches of flaky skin with silvery scales. It is linked to the immune system and often runs in families.')),
  big('1 in 50', 'People in the UK', 'Have psoriasis. It comes and goes, with flare-ups.'),
  point(2, 'Where it often appears', chips(['Elbows', 'Knees', 'Scalp', 'Lower back', 'Nails'], 0.8)),
  point(3, 'Common triggers', chips(['Stress', 'Skin injuries', 'Throat infections', 'Smoking', 'Alcohol'], 0.8)),
  point(4, 'More than skin', p('Up to 1 in 3 people with psoriasis get psoriatic arthritis. Tell your GP about any joint pain.')),
  point(5, 'What can help', chips(['Daily emollients', 'Vitamin D creams', 'Steroid creams', 'Light therapy', 'Tablets and biologics'], 0.8), 5.4),
  end('Free plain English guide', 'General information, not medical advice.'),
];
