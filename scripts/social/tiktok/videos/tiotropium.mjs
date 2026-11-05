// Tiotropium. Taken from the tiotropium medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Tiotropium:', 'once-a-day', 'inhaler'], 'Also known as Spiriva.'),
  point(1, 'What it does', p('It keeps the airways relaxed and open for 24 hours, easing breathlessness in COPD and some asthma.')),
  point('!', 'Not a reliever', p('Keep using your reliever inhaler for sudden symptoms.')),
  point(2, 'HandiHaler capsules', p('They are for inhaling only. Never swallow them.')),
  point(3, 'Common side effects', chips(['Dry mouth', 'Constipation', 'Cough', 'Sore throat'], 0.8)),
  point(4, 'Get help if', chips(['Wheezing worse straight after', 'Eye pain or seeing halos', 'You cannot pee'], 0.8)),
  end('Read about tiotropium', 'General information, not medical advice. Very breathless? Call 999.'),
];
