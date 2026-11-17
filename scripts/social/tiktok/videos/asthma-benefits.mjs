// Asthma, work and benefits. Taken from the asthma benefits and work page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Conditions A to Z', ['Asthma:', 'work and benefits'], 'Your rights and the help you can get.'),
  point(1, 'Is it a disability?', p('It can be. The law looks at how you would be without your medicine, so many people are covered.')),
  point(2, 'Ask for adjustments', chips(['Away from dust and fumes', 'Smoke-free', 'Good ventilation', 'Time for appointments'], 0.8)),
  point(3, 'Asthma caused by work', p('Tell your employer and GP. You may be able to claim Industrial Injuries Disablement Benefit.')),
  point(4, 'PIP', p('Severe asthma can affect moving around, washing, dressing and preparing food.')),
  point(5, 'Prescriptions', p('Not free for asthma in England, but a prepayment certificate can save money. Free in Wales.')),
  end('Read about asthma', 'General information, not medical or legal advice.'),
];
