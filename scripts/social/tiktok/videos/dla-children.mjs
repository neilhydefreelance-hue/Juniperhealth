// DLA for children. Taken from the DLA guide on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Parents and carers', ['DLA for', 'children'], 'Extra money for a disabled child under 16.'),
  point(1, 'Who it is for', p('Children under 16 who need much more care, supervision or help getting around than other children their age.')),
  point(2, 'The care part', chips(['Lowest rate', 'Middle rate', 'Highest rate', 'From 3 months old'], 0.8)),
  point(3, 'The mobility part', chips(['Higher rate from age 3', 'Lower rate from age 5'], 0.8)),
  point(4, 'Income does not matter', p('Your income and savings do not affect DLA.'), 4.6),
  point(5, 'It can lead to', chips(["Carer's Allowance for you", 'More Universal Credit', 'A Blue Badge', 'Motability', 'Family Fund grants'], 0.8), 5.6),
  end('Check if your child could get it', 'Free DLA self-check on our website. Nothing leaves your device.'),
];
