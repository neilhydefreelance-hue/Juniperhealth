// Storm season and Be Ready. Taken from the storm season article on the website.
import { chips, title, point, big, p, end } from './_common.mjs';
export const scenes = [
  title('Storm season', ['Disabled?', 'Be ready for', 'storms'], 'Power cuts hit some of us harder.'),
  point(1, 'Be Ready', p('The government\'s new campaign asks every household to be ready to manage at home for 3 days.')),
  big('3 days', 'The checklist', '3 litres of water per person per day, food that needs no cooking, a torch, radio, power bank, cash and a written list of your medicines.', 5.8),
  point(2, 'Priority Services Register', p('Free. Join with your energy supplier, your electricity network operator and your water company. They keep separate lists.')),
  point(3, 'Rely on equipment?', chips(['Tell your network operator', 'Ask about battery life', 'Oxygen: ask about back-up cylinders', 'Charge your wheelchair'], 0.8), 5.6),
  point(4, 'Make a plan', p('Agree that someone you trust will come round if the power goes off and you cannot call.')),
  point('!', 'Numbers to know', chips(['Power cut: 105', 'Emergency: 999', 'NHS 111', 'Samaritans: 116 123'], 0.8)),
  end('Read our storm guide', 'General information. Never use a barbecue or generator indoors.'),
];
