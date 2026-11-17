// Motability and car tax. Taken from the travel support pages on the website.
import { chips, title, point, big, p, end } from './_common.mjs';
export const scenes = [
  title('Travel', ['Motability', 'and free', 'car tax'], 'Using your mobility benefit.'),
  point(1, 'The Motability Scheme', p('Lease a new car, wheelchair accessible vehicle, scooter or powered wheelchair. Insurance, servicing, breakdown cover and tyres are included.')),
  point(2, 'Who can join', chips(['Enhanced rate PIP mobility', 'Higher rate DLA mobility', 'Armed Forces Independence Payment', "War Pensioners' Mobility Supplement"], 0.8)),
  point(3, 'You do not need to drive', p('You can name up to two other people as drivers.')),
  big('Free', 'Car tax', 'With enhanced rate PIP mobility or higher rate DLA mobility. Half price with standard rate PIP mobility.'),
  end('Read about Motability', 'General information, not financial advice. Some cars need an upfront payment.'),
];
