// Dementia: early signs, types and support. Taken from the dementia guide on the website.
import { chips, title, point, big, p, end } from './_common.mjs';
export const scenes = [
  title('Know the signs', ['Dementia:', 'early signs', 'to look for'], ''),
  big('980,000', 'People in the UK', 'Live with dementia. It is caused by diseases that damage the brain and gets worse over time.', 5.4),
  point(1, 'Early signs', chips(['Forgetting recent events', 'Hard to find words', 'Confused about time or place', 'Trouble with money', 'Mood changes'], 0.8), 5.6),
  point(2, 'Types of dementia', chips(["Alzheimer's disease", 'Vascular dementia', 'Lewy bodies', 'Frontotemporal', 'Mixed'], 0.8), 5.4),
  point(3, 'It can start before 65', p('This is called young onset dementia.'), 4.2),
  point(4, 'Getting checked', p('See a GP if you are worried. They will do memory and blood tests, and may refer you to a memory clinic.')),
  point(5, 'What can help', chips(['Medicines like donepezil', 'Cognitive stimulation therapy', 'Admiral Nurses for families'], 0.8)),
  end('Free plain English guide', 'General information, not medical advice.'),
];
