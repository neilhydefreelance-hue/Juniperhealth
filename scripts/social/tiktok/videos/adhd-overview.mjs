// "What is ADHD?" Taken from the ADHD guide on the website.
import { chips, title, point, p, end } from './_common.mjs';

export const scenes = [
  title('Explained simply', ['What is', 'ADHD?'], 'Attention deficit hyperactivity disorder.', 3.4),
  point(1, 'How the brain manages attention', p('It affects attention, activity and impulses. It starts in childhood and is not caused by bad parenting or lack of effort.'), 5.4),
  point(2, 'Inattention', chips(['Easily distracted', 'Forgetting and losing things', 'Not finishing tasks', 'Hard to plan and organise'], 0.8), 5.4),
  point(3, 'Hyperactivity and impulsiveness', chips(['Restless and fidgety', 'Talking a lot', 'Acting without thinking', 'Hard to wait'], 0.8), 5.4),
  point(4, 'Often missed in adults', p('Hyperactivity can show as inner restlessness. Many adults, especially women, have mainly inattentive symptoms.')),
  point(5, 'Getting assessed', p('See your GP, who can refer you to a specialist. In England, ask about Right to Choose, which may mean a shorter wait.'), 5.4),
  point(6, 'What can help', chips(['Medicine', 'ADHD coaching', 'CBT adapted for ADHD', 'Support at school or work'], 0.8), 5.4),
  end('Free plain English guide', 'General information, not medical advice. Speak to your GP if you think you have ADHD.'),
];
