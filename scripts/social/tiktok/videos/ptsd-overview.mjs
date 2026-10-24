// "What is PTSD?" Taken from the PTSD guide on the website.
import { chips, title, point, big, p, end } from './_common.mjs';
export const scenes = [
  title('Explained simply', ['What is', 'PTSD?'], 'Post-traumatic stress disorder.', 3.4),
  big('1 in 3', 'People', 'Who have a traumatic experience are affected by PTSD. It can start weeks, months or even years later.', 5.4),
  point(1, 'The main symptoms', chips(['Flashbacks', 'Nightmares', 'Avoiding reminders', 'Feeling on edge', 'Guilt or shame', 'Feeling numb'], 0.8), 5.6),
  point(2, 'Complex PTSD', p('This can develop after repeated or long-lasting trauma, and can make emotions and relationships hard.')),
  point(3, 'Treatment works', chips(['Trauma-focused CBT', 'EMDR', 'Sometimes medicine'], 0.8)),
  point(4, 'Getting help', p('See your GP, or in England refer yourself to NHS Talking Therapies. Veterans can contact Op COURAGE in England or Veterans\' NHS Wales.'), 5.6),
  end('Free plain English guide', 'General information, not medical advice. In a crisis, call 999 or Samaritans on 116 123.'),
];
