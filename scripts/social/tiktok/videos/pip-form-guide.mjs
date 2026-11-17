// How to fill in your PIP form. Taken from the free PIP form guide on the website.
import { chips, title, point, big, p, end } from './_common.mjs';
export const scenes = [
  title('Free guide', ['How to fill in', 'your PIP form'], 'Download and print it for free.'),
  big('1 month', 'To send it back', 'The deadline is on the letter. Need more time? Ring the PIP enquiry line before the deadline.'),
  point(1, 'Describe a bad day', p('And say how many bad days you have in a typical week.')),
  point(2, 'Can you do it reliably?', chips(['Safely', 'To an acceptable standard', 'Again and again', 'In a reasonable time'], 0.8)),
  point(3, 'Give real examples', p('Say how long things take, who helps you, and what happens if you try. "I fell twice in March."')),
  point('!', 'Keep a copy', p('Photo every page, and ask the Post Office for free proof of postage.')),
  end('Get the free guide', 'Find it in our free resources.'),
];
