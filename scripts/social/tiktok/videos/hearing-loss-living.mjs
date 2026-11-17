// Living with hearing loss. Taken from the hearing loss living well page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Conditions A to Z', ['Living with', 'hearing loss'], 'Tips and free help.'),
  point(1, 'Ask people to', chips(['Face you', 'Speak clearly', 'Get your attention first', 'Rephrase, not repeat', 'Turn off the TV'], 0.8)),
  point(2, 'Relay UK', p('A free service that lets you use text to make and take phone calls.')),
  point(3, 'emergencySMS', p('Register and you can text 999 in an emergency.')),
  point(4, 'Free alerts', p('Your local fire service may fit flashing or vibrating smoke alarms for free.')),
  point(5, 'BSL interpreters', p('You have the right to request a BSL interpreter for NHS appointments.')),
  end('Read about hearing loss', 'General information, not medical advice.'),
];
