// Phone, broadband and TV discounts. Taken from the support pages on the website.
import { chips, title, point, big, p, end } from './_common.mjs';
export const scenes = [
  title('Money off bills', ['Cheaper', 'broadband,', 'phone and TV'], 'Discounts many people miss.'),
  point(1, 'Social tariffs', p('Cheaper broadband and phone deals if you get Universal Credit or Pension Credit. Some providers also accept PIP.')),
  point(2, 'No exit fee', p('You can usually switch to a social tariff with your current provider without paying to leave your contract.')),
  big('50%', 'TV licence', 'Off your TV licence if you are blind or severely sight impaired.'),
  point(3, 'More help', chips(['Free TV licence: 75+ on Pension Credit', 'Free 195 directory enquiries', 'Relay UK text calls', 'Priority fault repair'], 0.8)),
  end('See all the bill discounts', 'General information, not financial advice. Check with your provider.'),
];
