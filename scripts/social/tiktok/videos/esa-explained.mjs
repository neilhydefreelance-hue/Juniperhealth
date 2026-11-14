// New Style ESA explained. Taken from the ESA guide on the website.
import { chips, title, point, big, p, end } from './_common.mjs';
export const scenes = [
  title('Too ill to work?', ['ESA', 'explained'], 'Employment and Support Allowance.', 3.4),
  point(1, 'It is about work', p('ESA asks one question: does your health limit how much you can work? You can get it and PIP at the same time.')),
  point(2, 'New Style ESA', p('It is based on the National Insurance you have paid. Your savings and your partner\'s income do not matter.')),
  big('£145.90', 'A week in the support group', 'Or up to £95.55 a week in the first 13 weeks and in the work-related activity group (2026 to 2027).', 5.4),
  point(3, 'The two groups', chips(['Support group: no time limit', 'Work-related activity group: up to 365 days'], 0.8), 5.4),
  point(4, 'No diagnosis needed', p('ESA looks at what you can and cannot do. Physical and mental health count equally.')),
  point(5, 'Not enough National Insurance?', p('Claim Universal Credit instead. You can also get both at the same time.')),
  end('Free ESA guide', 'General information, not financial advice.'),
];
