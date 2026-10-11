// Access to Work explained. Taken from the Access to Work guide on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Disabled and working?', ['Access to', 'Work', 'explained'], 'Grants for support at work.'),
  point(1, 'Who can get it', p('People with a disability, health condition or mental health condition that makes parts of work harder. You must be 16 or over and in work or about to start.'), 5.6),
  point(2, 'What it can pay for', chips(['Special equipment', 'Workplace adaptations', 'Taxis to work', 'A support worker', 'BSL interpreters'], 0.8), 5.6),
  point(3, 'Mental Health Support Service', p('Free, confidential support for 9 months. You do not need a diagnosis.')),
  point(4, 'Top tips', chips(['Apply early', 'Explain your barriers', 'Give examples', 'Keep records'], 0.8)),
  end('Free work and study guide', 'General information. Apply online on GOV.UK or by phone.'),
];
