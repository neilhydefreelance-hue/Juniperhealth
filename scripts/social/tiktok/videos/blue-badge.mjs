// Blue Badge explained. Taken from the Blue Badge guide on the website.
import { chips, title, point, big, p, end } from './_common.mjs';
export const scenes = [
  title('Park closer', ['Blue Badge', 'explained'], 'Including hidden disabilities.', 3.4),
  point(1, 'Who gets one automatically', chips(['DLA higher rate mobility', 'PIP: 8+ points in moving around', 'Severely sight impaired'], 0.8), 5.4),
  point(2, 'Hidden disabilities count', p('Such as autism, dementia or a mental health condition, if journeys cause very considerable difficulty or overwhelming distress.'), 5.4),
  big('3 hours', 'On yellow lines', 'You can usually park on single or double yellow lines for up to 3 hours, unless there is a loading ban.'),
  point(3, 'Where else you can park', chips(['Free at meters', 'Pay and display bays', 'Disabled bays'], 0.8)),
  point(4, 'How to apply', p('Apply online through GOV.UK. It costs up to £10 in England and is free in Wales. A badge usually lasts up to 3 years.'), 5.4),
  end('Free Blue Badge guide', 'General information. Misusing a badge can lead to a fine of up to £1,000.'),
];
