// Help with energy and water bills. Taken from the energy and water guide on the website.
import { chips, title, point, big, p, end } from './_common.mjs';
export const scenes = [
  title('Money off bills', ['Help with', 'energy and', 'water bills'], 'Free schemes many people miss.'),
  big('£150', 'Warm Home Discount', 'Off your electricity bill each winter, usually automatic if you get a means-tested benefit like Universal Credit or Pension Credit.', 5.6),
  point(1, 'Priority Services Register', chips(['Free to join', 'Power cut warnings', 'Large print or audio bills', 'Password scheme'], 0.8), 5.4),
  point(2, 'WaterSure', p('Caps your bill if you have a water meter, get a means-tested benefit, and use a lot of water because of a medical condition.'), 5.4),
  big('£25', 'Cold Weather Payments', 'For each 7 day spell of very cold weather, if you get certain benefits. Paid automatically.'),
  point(3, 'Medical equipment at home?', p('The NHS may refund the electricity for things like a dialysis machine or oxygen concentrator. Ask your hospital team.')),
  end('Free money off bills guide', 'General information, not financial advice.'),
];
