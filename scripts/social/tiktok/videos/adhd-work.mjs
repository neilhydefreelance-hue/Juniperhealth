// ADHD, work and benefits. Taken from the ADHD pages on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('ADHD', ['ADHD at work:', 'your rights'], 'And when benefits can help.'),
  point(1, 'Can it be a disability?', p('Often, yes, if it has a substantial, long-term effect on daily life. You do not always need a formal diagnosis to ask for support.')),
  point(2, 'Reasonable adjustments', chips(['Written instructions', 'Quieter workspace', 'Regular check-ins', 'Flexible hours', 'Planning software'], 0.8), 5.6),
  point(3, 'Access to Work', p('It can pay for coaching, equipment and software.')),
  point(4, 'PIP and ADHD', chips(['Forgetting food on the hob', 'Medicine reminders', 'Help with money', 'Getting lost on journeys'], 0.8)),
  point(5, 'Children', p('Children with ADHD may get DLA if they need much more supervision than other children their age.')),
  end('Read about ADHD and work', 'General information, not legal advice. Tell the DVLA if ADHD affects your driving.'),
];
