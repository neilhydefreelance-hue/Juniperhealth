// The Autumn Budget 2026. Taken from the Budget article on the website.
import { chips, title, point, big, p, end } from './_common.mjs';
export const scenes = [
  title('Autumn Budget 2026', ['The Budget:', 'what it means', 'for disabled people'], 'In under a minute.'),
  point(1, 'PIP, DLA and Attendance Allowance', p('No changes in the Budget. Decisions on PIP wait for the government\'s response to the Timms Review.')),
  big('£100', 'Household Energy Payment', 'A one-off payment for homes in council tax bands A to D in England, expected from January 2027.'),
  point(2, 'Gas standing charges', p('Plans to remove the separate standing charge on gas bills from 2027. No confirmed change for electricity.')),
  point(3, "Carer's Allowance", p('The earnings cliff edge will be replaced with a taper, but not until 2030 to 2031.')),
  point(4, 'What to do now', chips(['Check your council tax band', 'Check what you can claim', 'Watch out for scams', 'Get free advice'], 0.8)),
  end('Read our Budget guide', 'General information, not financial advice. Details may change.'),
];
