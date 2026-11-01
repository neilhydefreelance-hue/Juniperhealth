// Free equipment and Disabled Facilities Grants. Taken from the home and equipment guides on the website.
import { chips, title, point, big, p, end } from './_common.mjs';
export const scenes = [
  title('Make home easier', ['Free home', 'equipment and', 'adaptations'], 'Help many people miss.'),
  point(1, 'Ask for a needs assessment', p('Your council\'s adult social care can arrange a free assessment. An occupational therapist may visit.')),
  big('Under £1,000', 'Usually free', 'In England, equipment and small adaptations under £1,000 are usually provided free.'),
  point(2, 'Things like', chips(['Grab rails', 'Shower seats', 'Raised toilet seats', 'Perching stools', 'Key safes'], 0.8)),
  big('£30,000', 'Disabled Facilities Grant', 'In England, for bigger changes like stairlifts, level-access showers and ramps.', 5.4),
  point(3, 'Good to know', chips(['No means test for children', 'Benefits can mean you pay nothing', 'Get approval before work starts'], 0.8), 5.4),
  end('Free home and equipment guide', 'General information. Contact your council to start.'),
];
