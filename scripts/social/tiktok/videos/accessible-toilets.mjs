// Accessible toilets and the Radar key. Taken from the leisure support pages on the website.
import { chips, title, point, big, p, end } from './_common.mjs';
export const scenes = [
  title('Out and about', ['Locked', 'accessible', 'toilets?'], 'How to get in.'),
  big('10,000+', 'The Radar key', 'One key opens over 10,000 locked accessible toilets across the UK.'),
  point(1, 'Get a genuine key', p('Buy one from Disability Rights UK for about £6. Some councils give them out free. Cheap copies online may not work.')),
  point(2, 'Changing Places toilets', p('Larger toilets with a hoist, a height-adjustable changing bench and space for up to two carers. Use the online map.')),
  point(3, 'Handy cards', chips(["Just Can't Wait card", 'Sunflower lanyard', '"Please offer me a seat" badge'], 0.8)),
  end('Read the full guide', 'General information. Prices can change.'),
];
