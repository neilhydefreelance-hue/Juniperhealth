// High cholesterol. Taken from the high cholesterol guide on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('No symptoms', ['High', 'cholesterol'], 'The only way to know is a blood test.', 3.4),
  point(1, 'More than half', p('More than half of adults in the UK have cholesterol above the healthy level. It raises the risk of heart attack and stroke.')),
  point(2, 'What raises it', chips(['Saturated fat', 'Not being active', 'Smoking', 'Type 2 diabetes', 'Your genes'], 0.8)),
  point(3, 'Free NHS Health Check', p('In England, adults aged 40 to 74 are invited for a free check every 5 years, including a cholesterol test.')),
  point(4, 'What can help', chips(['Less saturated fat', 'Being active', 'Stop smoking', 'Statins', 'Other medicines'], 0.8)),
  end('Free plain English guide', 'General information, not medical advice. Ask your GP about a cholesterol test.'),
];
