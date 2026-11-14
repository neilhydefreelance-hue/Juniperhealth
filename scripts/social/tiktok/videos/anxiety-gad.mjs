// "What is generalised anxiety disorder?" Taken from the GAD guide on the website.
import { chips, title, point, big, p, end } from './_common.mjs';
export const scenes = [
  title('Explained simply', ['What is', 'generalised', 'anxiety disorder?'], 'Also called GAD.'),
  point(1, 'Anxious about lots of things', p('People with GAD feel anxious most days, about a wide range of things, and often cannot remember the last time they felt relaxed.'), 5.4),
  big('5 in 100', 'People', 'The NHS estimates GAD affects up to 5 in 100 people in the UK.'),
  point(2, 'How it can feel', chips(['Constant worry', 'On edge', 'Fast heartbeat', 'Muscle tension', 'Trouble sleeping', 'Upset stomach'], 0.8), 5.6),
  point(3, 'Getting help', p('In England, you can refer yourself to NHS Talking Therapies without seeing a GP.')),
  point(4, 'What can help', chips(['Self-help', 'CBT', 'Applied relaxation', 'Medicine such as sertraline'], 0.8)),
  end('Free plain English guide', 'General information, not medical advice. Never stop a medicine suddenly.'),
];
