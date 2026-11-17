// Paracetamol. Taken from the paracetamol medicine page on the website.
import { chips, title, point, big, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Paracetamol:', 'safe use'], 'The everyday painkiller.'),
  big('4g', 'In 24 hours', 'No more than 4g in 24 hours, usually 8 x 500mg tablets. Leave at least 4 hours between doses.'),
  point(1, 'Check the label', p('Cold and flu remedies and co-codamol can also contain paracetamol. Do not double up.')),
  point(2, 'Under 50kg?', p('People who weigh less than 50kg may need a lower dose. Ask a pharmacist.')),
  point(3, 'Headache pills', p('Taking painkillers for headaches on more than 15 days a month can cause medication overuse headaches.')),
  point('!', 'Taken too much?', p('Go to A and E straight away, even if you feel well. An overdose can cause serious liver damage.')),
  end('Read about paracetamol', 'General information, not medical advice. Samaritans: 116 123.'),
];
