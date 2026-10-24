// Fatty liver disease. Taken from the fatty liver disease page on the website.
import { chips, title, point, big, p, end } from './_common.mjs';
export const scenes = [
  title('Liver health', ['Fatty liver:', 'common, silent', 'and reversible'], 'Also called MASLD or NAFLD.'),
  big('1 in 5', 'Very common', 'Fatty liver disease is thought to affect up to 1 in 5 people in the UK.'),
  point(1, 'Usually no symptoms', p('It is often found by chance on a blood test or ultrasound scan. Later, some people feel tired or have a dull ache on the right side.')),
  point(2, 'Who is at risk', chips(['Extra weight around the waist', 'Type 2 diabetes', 'High blood pressure', 'High cholesterol', 'Over 50 or smoking'], 0.8), 5.6),
  point(3, 'Tests', chips(['Blood tests', 'FIB-4 score', 'ELF blood test', 'FibroScan'], 0.8)),
  point(4, 'It can be reversed', p('In the early stages, losing weight, being active and eating healthily can reduce fat in the liver and even reverse some scarring.')),
  end('Read our fatty liver guide', 'General information, not medical advice. Talk to your GP.'),
];
