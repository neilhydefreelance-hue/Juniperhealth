// Drug dependence. Taken from the drug dependence page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Mental health', ['Drug', 'dependence:', 'no judgement'], 'A health condition. Help is free.'),
  point(1, 'Signs', chips(['Feeling you cannot cope without it', 'Needing more', 'Withdrawal when you stop', 'Hard to stop'], 0.8)),
  point(2, 'Staying safer', chips(['Do not use alone', 'Avoid mixing, including alcohol', 'Carry naloxone', 'Clean equipment'], 0.8)),
  point(3, 'Tolerance drops fast', p('After a break, such as prison, hospital or detox, your tolerance drops quickly. This raises the risk of overdose.')),
  point('!', 'Overdose: call 999', p('If someone is unconscious, not breathing properly or has blue or grey lips. Use the recovery position, give naloxone if you have it, and stay with them.'), 5.6),
  point(4, 'Free, confidential help', chips(['Local drug services', 'You can refer yourself', 'Your GP', 'FRANK: 0300 123 6600'], 0.8)),
  end('Read our drug dependence guide', 'General information, not medical advice. People recover every day.'),
];
