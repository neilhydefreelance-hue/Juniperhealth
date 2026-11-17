// Schizophrenia overview. Taken from the schizophrenia pages on the website.
import { chips, title, point, big, p, end } from './_common.mjs';
export const scenes = [
  title('Mental health', ['Schizophrenia:', 'what it is', 'and what it is not'], 'Many people recover well.'),
  point(1, 'Not a split personality', p('That is a myth. It affects how a person thinks and experiences the world, like hearing voices or holding unusual beliefs.')),
  point(2, 'Common symptoms', chips(['Hearing voices', 'Strong unusual beliefs', 'Muddled thinking', 'Losing motivation', 'Withdrawing'], 0.8)),
  big('2 weeks', 'Early help', 'The NHS aims for people with a first episode of psychosis to start treatment within 2 weeks of referral.'),
  point(3, 'Treatment', chips(['Antipsychotic medicines', 'CBT for psychosis', 'Family support', 'Physical health checks'], 0.8)),
  point(4, 'Urgent help', p('If someone is at risk or very distressed, call their crisis team, NHS 111 and choose the mental health option, or 999 in an emergency.')),
  end('Read our schizophrenia guide', 'General information, not medical advice. Do not stop medicines suddenly. Talk to your team.'),
];
