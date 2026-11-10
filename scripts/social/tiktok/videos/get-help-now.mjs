// Get help now. Taken from the get help now page on the website.
import { title, point, big, p, end } from './_common.mjs';
export const scenes = [
  title('Save this', ['Need help', 'right now?'], 'Free numbers you can call or text.'),
  big('999', 'In immediate danger', 'Call 999 or go to A&E. Cannot speak? Call 999 and press 55 when asked.'),
  point(1, 'Mental health crisis', p('Call NHS 111 and choose the mental health option, in England and Wales.')),
  point(2, 'Samaritans', p('Call free on 116 123, day or night.')),
  point(3, 'Shout', p('Text SHOUT to 85258 for free, 24 hour text support.')),
  point(4, 'CALL helpline in Wales', p('Call free on 0800 132 737, or text "help" to 81066.')),
  end('You are not alone', 'More free help on our Get help now page.'),
];
