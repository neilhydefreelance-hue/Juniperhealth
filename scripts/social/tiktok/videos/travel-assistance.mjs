// Help when you travel. Taken from the travel support pages on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Travel', ['Free help', 'on trains and', 'planes'], 'You have the right to ask.'),
  point(1, 'Passenger Assist', p('Free help on trains to get on and off, with luggage, and to change trains. Book up to 2 hours ahead, or turn up and go.')),
  point(2, 'Flying', p('You have the right to free help at airports, including for hidden disabilities. Tell your airline at least 48 hours before you fly.')),
  point(3, 'Sunflower lanyard', p('A discreet way to show you may need extra help, time or patience. Many places give them out free.')),
  point(4, 'Coaches and taxis', chips(['Disabled Coachcard', 'Assistance dogs cannot be refused', 'Wheelchair users: no extra charge', 'Dial-a-ride schemes'], 0.8)),
  end('Read about travel help', 'General information.'),
];
