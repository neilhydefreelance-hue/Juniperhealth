// Attendance Allowance explained. Taken from the Attendance Allowance guide and rates on the website.
import { chips, title, point, big, p, end } from './_common.mjs';

export const scenes = [
  title('Over State Pension age?', ['Attendance', 'Allowance', 'explained'], 'Money for extra care needs.'),
  point(1, 'Who it is for', p('People over State Pension age with an illness or disability who need help with personal care, or someone to keep them safe.'), 5.4),
  point(2, 'Personal care means', chips(['Washing', 'Dressing', 'Using the toilet', 'Eating and drinking', 'Taking medicines', 'Getting in and out of bed'], 0.8), 5.6),
  point(3, 'Need, not get', p('It does not matter whether anyone actually helps you. It is about the help you need. You must usually have needed it for 6 months.'), 5.4),
  big('£114.60', 'A week at the higher rate', 'Or £76.70 a week at the lower rate (from April 2026). Your income and savings do not matter.', 5.4),
  point(4, 'It can boost other money', chips(['More Pension Credit', 'Housing Benefit', 'Council Tax Reduction', "Carer's Allowance for your carer"], 0.8), 5.6),
  end('Check if you could get it', 'Free self-check on our website. General information, not financial advice.'),
];
