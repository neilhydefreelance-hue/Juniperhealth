// Aids that can help with asthma. Taken from the asthma aids article on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Asthma', ['Aids that', 'help with', 'asthma'], 'Check what the NHS provides first.'),
  point(1, 'On prescription', chips(['A spacer', 'A peak flow meter', 'An asthma action plan'], 0.8)),
  point(2, 'Look after your spacer', p('Wash it about once a month in warm soapy water and let it drip dry. Replace it every year.')),
  point(3, 'Cut your triggers', chips(['Wash bedding at 60°C', 'Reduce damp and mould', 'Scarf in cold air', 'Sunglasses on high pollen days'], 0.8)),
  point(4, 'Renting with damp?', p('If your home has damp or mould, your landlord has a legal duty to deal with it.')),
  point('!', 'Asthma attack', p('Call 999 if your reliever is not helping, you are too breathless to speak, or your lips look blue or grey.')),
  end('Read the full guide', 'General information, not medical advice. No aid replaces your treatment.'),
];
