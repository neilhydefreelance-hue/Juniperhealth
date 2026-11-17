// Free carer tickets and access cards for days out. Taken from the leisure guides on the website.
import { chips, title, point, big, p, end } from './_common.mjs';
export const scenes = [
  title('Days out', ['Free carer', 'tickets you', 'should know'], 'Do not pay twice.'),
  point(1, 'CEA cinema card', p('Buy a full price ticket and get a free one for someone to help you. It costs £6 and you can get it with PIP, DLA or Attendance Allowance.'), 5.6),
  big('+1', 'Nimbus Access Card', 'Shows venues you need a free companion ticket, step-free access or captions. £15 for 3 years.'),
  point(2, 'Hynt in Wales', p('A free scheme giving a free ticket for a carer at participating theatres and arts centres.')),
  point(3, 'Heritage sites', chips(['National Trust', 'English Heritage', 'Cadw'], 0.8), 4.6),
  point(4, 'Other handy cards', chips(['Radar key for 10,000+ toilets', 'Sunflower lanyard', 'Just Can\'t Wait card', 'Max Card for families'], 0.8), 5.6),
  end('Free days out guide', 'General information. Always check with the venue before you book.'),
];
