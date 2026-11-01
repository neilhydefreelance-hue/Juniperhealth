// Type 2 diabetes signs and risks. Taken from the type 2 diabetes guide on the website.
import { chips, title, point, big, p, end } from './_common.mjs';
export const scenes = [
  title('Know the signs', ['Type 2', 'diabetes'], 'Many people have no symptoms at first.', 3.4),
  big('9 in 10', 'People with diabetes', 'In the UK have type 2.'),
  point(1, 'Possible signs', chips(['Peeing more', 'Very thirsty', 'Tired', 'Weight loss', 'Repeated thrush', 'Slow healing cuts', 'Blurred vision'], 0.8), 5.8),
  point(2, 'Who is more at risk', chips(['Over 40', 'Over 25 if South Asian', 'Family history', 'Overweight', 'High blood pressure'], 0.8), 5.6),
  point(3, 'A simple blood test', p('An HbA1c test shows your average blood sugar over the last 2 to 3 months.')),
  point(4, 'What can help', chips(['Eating well', 'Being active', 'Losing some weight', 'Education courses', 'Medicines'], 0.8), 5.4),
  end('Free plain English guide', 'General information, not medical advice. Check your risk with Diabetes UK Know Your Risk.'),
];
