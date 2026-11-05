// Free and cheaper prescriptions. Taken from the prescriptions page on the website.
import { chips, title, point, big, p, end } from './_common.mjs';
export const scenes = [
  title('NHS health costs', ['Paying for', 'prescriptions?'], 'You might not need to.'),
  big('9 in 10', 'Given free', 'Around 9 in 10 prescription items in England are given free.'),
  point(1, 'Medical exemption', chips(['Diabetes treated with medicine', 'Underactive thyroid', 'Epilepsy', 'Cancer treatment', 'Some disabilities'], 0.8), 5.6),
  point(2, 'Covers everything', p('A medical exemption certificate makes all your NHS prescriptions free. Ask your GP surgery for form FP92A.')),
  point(3, 'Prepayment certificate', p('A 12 month PPC saves money if you need 12 or more items a year. You can pay in 10 monthly instalments.')),
  point(4, 'In Wales', p('Prescriptions are free for everyone registered with a GP in Wales.')),
  end('Check what you can get', 'General information. Free self-check on our website. Nothing leaves your device.'),
];
