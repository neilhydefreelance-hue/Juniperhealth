// PIP back pay calculator. Taken from the PIP back pay calculator and how to claim pages on the website.
import { chips, title, point, big, p, end } from './_common.mjs';
export const scenes = [
  title('Free calculator', ['How much PIP', 'back pay?'], 'Work it out in about a minute.'),
  big('Day 1', 'Paid from your claim date', 'PIP is paid from the date you started your claim, so your first payment may include back pay.'),
  point(1, 'Pick your rates', chips(['Daily living: standard or enhanced', 'Mobility: standard or enhanced'], 0.8)),
  point(2, 'Add your claim date', p('This is usually the date you phoned the DWP to start your claim. It is on your award letter.')),
  point(3, 'See your estimate', p('It uses the rate for each day, so a claim that runs over April uses the old and new rates.')),
  point('!', 'Private', p('The sums are done on your phone. Nothing leaves your device.')),
  end('Try the free calculator', 'An estimate only. Only the DWP can decide your award.'),
];
