// "What is depression?" Taken from the depression guide on the website.
import { chips, title, point, big, p, end } from './_common.mjs';
export const scenes = [
  title('Explained simply', ['What is', 'depression?'], 'More than feeling sad.', 3.4),
  point(1, 'More than a few bad days', p('Depression means feeling persistently low for weeks or months, in a way that affects your daily life.')),
  big('1 in 6', 'Adults', 'In the UK have a common mental health problem such as depression in any given week.'),
  point(2, 'Common signs', chips(['Low or hopeless', 'Losing interest', 'Tired', 'Sleep changes', 'Hard to concentrate', 'Feeling worthless'], 0.8), 5.6),
  point(3, 'Getting help', p('Talk to your GP. In England, you can refer yourself to NHS Talking Therapies.')),
  point(4, 'What can help', chips(['Guided self-help', 'CBT', 'Group exercise', 'Counselling', 'Antidepressants'], 0.8), 5.4),
  point('!', 'If you feel unsafe', p('If you are thinking about suicide, call 999, or call Samaritans free on 116 123, any time.')),
  end('Free plain English guide', 'General information, not medical advice.'),
];
