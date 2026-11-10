// Lithium. Taken from the lithium medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Lithium:', 'what to know'], 'A mood stabiliser for bipolar disorder.'),
  point(1, 'Common side effects', chips(['Thirst', 'Peeing more', 'Slight hand shake', 'Feeling sick', 'Metallic taste', 'Weight gain'], 0.8)),
  point(2, 'Regular blood tests', p('To check your lithium level, kidneys and thyroid. Carry your lithium record book.')),
  point(3, 'Keep levels steady', p('Keep your fluids and salt steady. Hot weather, sickness and some painkillers like ibuprofen can raise levels.')),
  point('!', 'Too much lithium?', p('Being sick, diarrhoea, a coarse shake, unsteadiness, slurred speech or confusion. Get help straight away.')),
  point('!', 'Never stop suddenly', p('It sharply raises the risk of mania coming back. Your doctor will reduce it over at least 4 weeks.')),
  end('Read about lithium', 'General information, not medical advice.'),
];
