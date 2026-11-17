// Buprenorphine. Taken from the buprenorphine medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Buprenorphine:', 'what to know'], 'For opioid dependence and pain.'),
  point(1, 'How it helps', p('It eases withdrawal and cravings without the same high as heroin, and blocks other opioids.')),
  point(2, 'Common side effects', chips(['Constipation', 'Feeling sick', 'Headache', 'Sweating', 'Sleepiness'], 0.8)),
  point('!', 'Call 999', p('For slow or shallow breathing, or if someone is very sleepy and hard to wake.')),
  point('!', 'Never mix', p('With alcohol, benzodiazepines or other sedatives without medical advice. It can stop your breathing.')),
  point(3, 'Ask about naloxone', p('It can reverse an opioid overdose. Keep buprenorphine away from children.')),
  end('Read about buprenorphine', 'General information, not medical advice.'),
];
