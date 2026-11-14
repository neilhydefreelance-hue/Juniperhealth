// Dementia, work and benefits. Taken from the dementia benefits and work page on the website.
import { title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Conditions A to Z', ['Dementia:', 'help you can claim'], 'For the person and their carer.'),
  point(1, 'Over State Pension age', p('Look at Attendance Allowance. The higher rate is for help or supervision both day and night.')),
  point(2, 'Under State Pension age', p('PIP can help. Dementia can affect almost every PIP activity.')),
  point(3, 'Council tax', p('A person with dementia may be disregarded for council tax. This can mean a discount, or no bill.')),
  point(4, 'For carers', p("Carer's Allowance, if you care for at least 35 hours a week.")),
  point(5, 'Still working?', p('Dementia counts as a disability at work. Get advice before leaving a job.')),
  end('Read about dementia help', 'General information. Citizens Advice can help for free.'),
];
