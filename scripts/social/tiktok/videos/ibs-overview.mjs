// "What is IBS?" Taken from the IBS guide on the website.
import { chips, title, point, big, p, end } from './_common.mjs';
export const scenes = [
  title('Explained simply', ['What is', 'IBS?'], 'Irritable bowel syndrome.', 3.4),
  big('1 in 10', 'People in the UK', 'Are thought to have IBS. It is linked to how the gut and brain communicate.'),
  point(1, 'Symptoms', chips(['Tummy pain or cramps', 'Bloating', 'Diarrhoea', 'Constipation', 'Tiredness'], 0.8)),
  point(2, 'Common triggers', chips(['Alcohol', 'Caffeine', 'Fizzy drinks', 'Fatty or spicy food', 'Stress', 'Periods'], 0.8), 5.4),
  point(3, 'What can help', chips(['Soluble fibre', 'Peppermint oil', 'Antispasmodics', 'Talking therapies'], 0.8)),
  point('!', 'See a GP if you have', p('Bleeding from your bottom, weight loss without trying, a lump in your tummy, or a lasting change in your bowel habits.'), 5.6),
  end('Free plain English guide', 'General information, not medical advice.'),
];
