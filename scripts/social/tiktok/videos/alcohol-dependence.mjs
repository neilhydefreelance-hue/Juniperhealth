// Alcohol dependence. Taken from the alcohol dependence pages on the website.
import { chips, title, point, big, p, end } from './_common.mjs';
export const scenes = [
  title('Mental health', ['Alcohol', 'dependence:', 'no judgement'], 'A health condition, not a weakness.'),
  point(1, 'Signs to look for', chips(['Strong urge to drink', 'Needing more for the same effect', 'Drinking in the morning', 'Hard to stop once you start', 'Shaking or sweating when you stop'], 0.8), 5.6),
  point(2, 'Do not stop suddenly', p('If you drink heavily every day, stopping suddenly can cause fits. Talk to your GP or local alcohol service so you can stop safely.')),
  point(3, 'Call 999 if', p('Someone has a fit, is very confused, or is seeing things that are not there after stopping drinking.')),
  big('14 units', 'The UK guide', 'No more than 14 units a week, spread over 3 or more days, with some alcohol-free days.'),
  point(4, 'Free help', chips(['Your GP', 'Local alcohol services', 'You can refer yourself', 'Drinkline: 0300 123 1110'], 0.8)),
  end('Read our alcohol guide', 'General information, not medical advice. Help is free and confidential.'),
];
