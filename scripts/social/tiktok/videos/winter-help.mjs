// Winter help for disabled people. Taken from the disability and winter article on the website.
import { chips, title, point, big, p, end } from './_common.mjs';
export const scenes = [
  title('Winter 2026 to 2027', ['Disabled?', 'Help to get', 'through winter'], 'Money, warmth and health.'),
  point(1, 'Keep warm safely', p('Heat the rooms you use most to at least 18°C if you can. Wear thin layers, have hot drinks and keep moving if you can.')),
  big('£150', 'Warm Home Discount', 'Off your electricity bill, usually automatic with a means-tested benefit like Universal Credit or Pension Credit.'),
  big('£25', 'Cold Weather Payments', 'For each 7 day spell of very cold weather, from 1 November to 31 March, with certain benefits.'),
  point(2, 'Free jabs', p('Flu jabs are free for people with many long-term conditions, people 65 or over, and carers. Ask your GP or pharmacy.')),
  point(3, 'Get ready', chips(['Priority Services Register', 'Order prescriptions early', 'Power cuts: call 105', 'Make a winter plan'], 0.8)),
  end('Read our full winter guide', 'General information, not financial or medical advice. Struggling? Samaritans: 116 123.'),
];
