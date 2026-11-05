// Carer's Allowance and support for carers. Taken from the carers guides on the website.
import { chips, title, point, big, p, end } from './_common.mjs';

export const scenes = [
  title('Do you look after someone?', ["Carer's", 'Allowance', 'explained'], 'You might be a carer without knowing it.'),
  big('£86.45', 'A week', "Carer's Allowance from April 2026, if you care for someone for at least 35 hours a week."),
  point(1, 'Who can get it', chips(['Caring 35+ hours a week', 'Aged 16 or over', 'Not in full-time education', 'Earning £204 a week or less'], 0.8), 5.6),
  point(2, 'They need a qualifying benefit', p('Such as PIP daily living, DLA care at the middle or highest rate, or Attendance Allowance. They do not have to be family or live with you.'), 5.4),
  point(3, 'It protects your pension', p('Carer\'s Allowance gives you National Insurance credits. Claim online on GOV.UK, and it can be backdated up to 3 months.'), 5.4),
  point(4, 'More help for carers', chips(['Free carer\'s assessment', 'Tell your GP', 'Free flu vaccine', 'Free carer tickets', 'Carers UK helpline'], 0.8), 5.6),
  end('Free carers guide', 'General information, not financial advice.'),
];
