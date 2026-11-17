// Interest rates rise to 4%. Taken from the interest rates article on the website.
import { chips, title, point, big, p, end } from './_common.mjs';
export const scenes = [
  title('Money', ['Interest rates', 'up to 4%:', 'what it means'], 'Especially if money is tight.'),
  big('4%', 'Bank Rate', 'The Bank of England raised rates from 3.75% on 5 November 2026, the first rise in over three years.'),
  point(1, 'Your benefits are not cut', p('PIP, DLA, Attendance Allowance, ESA, Carer\'s Allowance and Universal Credit are not linked to interest rates.')),
  point(2, 'What may cost more', chips(['Tracker and variable mortgages', 'Credit cards and overdrafts', 'Everyday prices, for a while'], 0.8)),
  point(3, 'Universal Credit and savings', chips(['Under £6,000: not counted', '£6,000 to £16,000: reduces payment', 'Over £16,000: usually no UC'], 0.8)),
  point(4, 'What to do now', chips(['Check what you can claim', 'Cut your bills', 'Avoid credit for essentials', 'Get free debt advice'], 0.8)),
  end('Read our guide', 'General information, not financial advice. StepChange and Citizens Advice can help for free.'),
];
