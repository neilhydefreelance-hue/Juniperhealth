// Council tax discounts for disabled people and carers. Taken from the council tax guide on the website.
import { title, point, big, p, end } from './_common.mjs';
export const scenes = [
  title('Money off bills', ['Council tax', 'discounts', 'you might miss'], 'For disabled people and carers.'),
  point(1, 'Disabled Band Reduction', p('If your home has an extra bathroom, a room used for your needs, or space for a wheelchair indoors, your bill may drop one band.'), 5.6),
  point(2, 'It does not depend on income', p('Apply to your council for the Disabled Band Reduction Scheme.'), 4.4),
  big('25%', 'Off for severe mental impairment', 'Such as dementia or a severe learning disability. If they live alone, the home may be exempt.', 5.4),
  point(3, 'Carers and low incomes', p('Some live-in carers can be disregarded. And if you are on a low income, ask about Council Tax Reduction.')),
  point(4, 'Ask about backdating', p('Many councils will backdate discounts, sometimes by several years, if you were eligible but did not claim.')),
  end('Free money off bills guide', 'General information, not financial advice.'),
];
