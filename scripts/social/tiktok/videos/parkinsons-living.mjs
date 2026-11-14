// Living with Parkinson's. Taken from the Parkinson's living well page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Conditions A to Z', ["Living with", "Parkinson's"], 'Everyday tips that help.'),
  point(1, 'Keep exercising', chips(['Walking', 'Cycling', 'Dance', 'Tai chi', "Boxing for Parkinson's"], 0.8)),
  point(2, 'Prevent falls', p('Turn slowly, keep your home clutter free, and ask about a falls assessment.')),
  point(3, 'Eating and swallowing', p('Eat fibre and drink fluids. Trouble swallowing? Ask for a speech and language therapy referral.')),
  point(4, 'Mood and sleep', p("Depression, anxiety and sleep problems are part of Parkinson's. Tell your team, as they can be treated.")),
  point(5, 'Driving', p("You must tell the DVLA. Many people carry on driving for years.")),
  end("Read about Parkinson's", "General information. Parkinson's UK has a free helpline."),
];
