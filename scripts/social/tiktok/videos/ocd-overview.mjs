// "What is OCD?" Taken from the OCD guide on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Explained simply', ['What is', 'OCD?'], 'Obsessive compulsive disorder.', 3.4),
  point(1, 'Obsessions', p('Unwanted thoughts, images or urges that keep coming back and cause anxiety or distress.')),
  point(2, 'Common obsessions', chips(['Germs', 'Harming someone', 'Things feeling "just right"', 'Unwanted thoughts', 'Relationship doubts'], 0.8), 5.4),
  point(3, 'Compulsions', chips(['Washing', 'Checking', 'Counting', 'Asking for reassurance', 'Avoiding'], 0.8), 5.4),
  point(4, 'A cycle', p('Compulsions bring short-term relief, but they keep the OCD going.'), 4.4),
  point(5, 'You are not your thoughts', p('Intrusive thoughts are a symptom of OCD. Health professionals understand. CBT with exposure and response prevention can help.'), 5.6),
  end('Free plain English guide', 'General information, not medical advice. In England, refer yourself to NHS Talking Therapies.'),
];
