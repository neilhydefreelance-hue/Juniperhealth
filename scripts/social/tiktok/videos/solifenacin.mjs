// Solifenacin. Taken from the solifenacin medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Solifenacin:', 'overactive', 'bladder'], 'Also known as Vesicare.'),
  point(1, 'What it does', p('It reduces sudden urges to pee, needing to pee often and leaking.')),
  point(2, 'Common side effects', chips(['Dry mouth', 'Constipation', 'Blurred vision', 'Dry eyes'], 0.8)),
  point(3, 'Older people', p('Long-term use of this type of medicine has been linked with memory problems. Ask if another option suits you better.')),
  point('!', 'Get help if', chips(['You cannot pee', 'Severe stomach pain or swelling', 'Confusion or memory problems'], 0.8)),
  end('Read about solifenacin', 'General information, not medical advice.'),
];
