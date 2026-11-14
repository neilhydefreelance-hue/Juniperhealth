// NHS Low Income Scheme. Taken from the health costs pages on the website.
import { chips, title, point, big, p, end } from './_common.mjs';
export const scenes = [
  title('NHS health costs', ['Low income?', 'Get help with', 'NHS costs'], 'The NHS Low Income Scheme.'),
  big('£16,000', 'Savings limit', 'You can apply if your savings are below £16,000. Your home does not count.'),
  point(1, 'Work or own a home?', p('You can still apply. The scheme looks at your income and savings.')),
  point(2, 'HC2 gives full help', chips(['Prescriptions', 'Dental treatment', 'Sight tests and glasses', 'Travel to hospital'], 0.8)),
  point(3, 'HC3 gives some help', p('It shows the most you need to pay.')),
  point(4, 'How to apply', p('Online on the NHS Business Services Authority website, or on form HC1. Call 0300 330 1343 for a form.')),
  end('Check what you can get', 'General information. Free self-check on our website. Nothing leaves your device.'),
];
