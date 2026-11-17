// Carers' rights. Taken from the carers support pages on the website.
import { chips, title, point, big, p, end } from './_common.mjs';
export const scenes = [
  title('Carers', ['Caring for', 'someone?', 'Know your rights'], 'What you are entitled to.'),
  point(1, "Free carer's assessment", p('From the council of the person you care for. It can lead to breaks, help at home, training or a personal budget.')),
  big('1 week', "Carer's leave", 'Unpaid leave every 12 months if you work, from your first day in a job. Take it in half days or whole days.'),
  point(2, 'Flexible working', p('All employees can ask for flexible working from day one, such as different hours or working from home.')),
  point(3, 'Look after you', chips(['Tell your GP you are a carer', 'Free flu jab', 'Make an emergency plan', 'Talk to other carers'], 0.8)),
  end("Read about carers' rights", 'General information, not legal advice. Young carers have rights too.'),
];
