// Furosemide. Taken from the furosemide medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Furosemide:', 'water tablets'], 'Also known as Lasix.'),
  point(1, 'What it does', p('It removes extra fluid from the body in heart failure and other conditions that cause swelling.')),
  point(2, 'Take it in the morning', p('So you are not up at night to pee.')),
  point(3, 'Heart failure?', p('Weigh yourself daily and tell your team about sudden weight gain.')),
  point(4, 'Common side effects', chips(['Peeing more', 'Dizzy or light-headed', 'Thirsty', 'Muscle cramps'], 0.8)),
  point('!', 'Get help if', chips(['Signs of dehydration', 'Irregular heartbeat or weakness', 'Ringing in ears or hearing loss'], 0.8)),
  end('Read about furosemide', 'General information, not medical advice. You need regular blood tests.'),
];
