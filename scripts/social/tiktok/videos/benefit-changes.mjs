// Changes to health and disability benefits. Taken from the Universal Credit changes page on the website.
import { chips, title, point, big, p, end } from './_common.mjs';
export const scenes = [
  title('Benefits', ['What is', 'changing for', 'disabled people?'], 'Universal Credit and ESA.'),
  big('£217.26', 'New claims since April 2026', 'Most new claimants get the lower health element. Others, including the terminally ill, get £429.80 a month.', 5.8),
  point(1, 'Already getting it?', p('You keep the protected higher rate while you still qualify.')),
  point(2, 'Planned, not yet law', chips(['Ending the Work Capability Assessment', 'Health money linked to PIP', 'Changes for under 22s'], 0.8)),
  point(3, 'PIP review', p('The Timms review of PIP is still under way. No PIP rules have changed because of it yet.')),
  point(4, 'What to do now', chips(['Claim now if you qualify', 'Check if you could get PIP', 'Get free advice'], 0.8)),
  end('Read what is changing', 'General information, not financial advice. Plans can change.'),
];
