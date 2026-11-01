// Obesity overview. Taken from the obesity page on the website.
import { chips, title, point, big, p, end } from './_common.mjs';
export const scenes = [
  title('Health', ['Obesity is', 'not a personal', 'failing'], 'Support, not blame.'),
  big('1 in 4', 'Very common', 'Around 1 in 4 adults in England live with obesity. It is a long-term health condition.'),
  point(1, 'Many causes', chips(['Genes', 'Some medicines', 'Health conditions', 'Sleep and stress', 'Money and time'], 0.8)),
  point(2, 'Waist matters too', p('As a guide, try to keep your waist to less than half your height.')),
  big('5%', 'Small changes count', 'Losing even 5% of your body weight can improve your health.'),
  point(3, 'Ask your GP', p('You can say: "I would like some support with my weight. What is available to me?"')),
  end('Read our obesity guide', 'General information, not medical advice.'),
];
