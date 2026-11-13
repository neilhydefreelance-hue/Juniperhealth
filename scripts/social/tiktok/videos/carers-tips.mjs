// Help for carers. Taken from the help for carers page on the website.
import { title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Help for carers', ['Are you', 'a carer?'], 'You may not call yourself one.'),
  point(1, 'You count', p('If you regularly help someone who could not manage without you, you have rights and may get support.')),
  point(2, 'Tell your GP', p('Many surgeries offer flexible appointments, health checks and a free flu vaccine for carers.')),
  point(3, "Carer's assessment", p('Ask your council for a free carer\'s assessment.')),
  point(4, "Carer's Allowance", p('Money for people who care for 35 hours a week or more.')),
  point(5, 'Free carer tickets', p('Many venues give free tickets to carers. Carers UK runs a free helpline.')),
  end('Read help for carers', 'General information. Your council can tell you more.'),
];
