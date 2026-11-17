// Disabled Facilities Grant. Taken from the Disabled Facilities Grant page on the website.
import { chips, title, point, big, p, end } from './_common.mjs';
export const scenes = [
  title('Home help', ['Disabled Facilities', 'Grant'], 'Help to pay for changes to your home.'),
  point(1, 'What it can pay for', chips(['Stairlifts', 'Level-access shower', 'Ramps', 'Wider doors', 'Downstairs bathroom'], 0.8)),
  big('£30,000', 'In England', 'You can get up to £30,000. In Wales, the limit is higher.'),
  point(2, 'The means test', p('Adults may pay towards it. There is no means test for disabled children under 18.')),
  point(3, 'How to apply', p('Contact your council. An occupational therapist will usually assess what you need.')),
  point('!', 'Wait for approval', p('Do not start work before the grant is approved, or you may not be paid.')),
  end('Read about the grant', 'General information. Your council can tell you more.'),
];
