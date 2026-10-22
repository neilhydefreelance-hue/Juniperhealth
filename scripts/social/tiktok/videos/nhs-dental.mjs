// NHS dental treatment. Taken from the health costs pages on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('NHS health costs', ['Free or', 'cheaper NHS', 'dental care'], 'Who pays, and how much.'),
  point(1, 'Free if you', chips(['Are under 18', 'Are pregnant or had a baby in 12 months', 'Get certain benefits', 'Have an HC2'], 0.8)),
  point(2, 'Three price bands', chips(['Band 1: check-ups', 'Band 2: fillings, root canal', 'Band 3: crowns, dentures'], 0.8)),
  point(3, 'One charge', p('In England you pay one charge for each course of treatment, however many visits it takes.')),
  point(4, 'In Wales', p('Dental check-ups are free if you are under 25 or 60 or over.')),
  point(5, 'No NHS dentist?', p('Search the NHS website for dentists taking on patients. For urgent dental care, call NHS 111.')),
  end('Check what you can get', 'General information. Free self-check on our website. Nothing leaves your device.'),
];
