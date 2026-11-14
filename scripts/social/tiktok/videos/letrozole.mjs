// Letrozole. Taken from the letrozole medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Letrozole:', 'what to know'], 'Also known as Femara.'),
  point(1, 'What it is for', chips(['Breast cancer after the menopause', 'Fertility treatment in PCOS'], 0.8)),
  point(2, 'How it works', p('It lowers oestrogen. Some breast cancers need oestrogen to grow, so lowering it slows or stops them.')),
  point(3, 'Common side effects', chips(['Hot flushes', 'Joint pain or stiffness', 'Tiredness', 'Thinning hair'], 0.8)),
  point(4, 'Bone health', p('It can thin your bones. You may have bone scans and be advised to take calcium and vitamin D.')),
  point('!', 'Get help if', p('You have sudden leg pain or swelling, chest pain or breathlessness. Call 999 for signs of a stroke or heart attack.')),
  end('Read about letrozole', 'General information, not medical advice. Do not stop early without talking to your team.'),
];
