// Aspirin. Taken from the aspirin medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Low-dose', 'aspirin:', 'who needs it?'], 'Usually 75mg.'),
  point(1, 'What it does', p('It stops platelets sticking together, so clots are less likely. It helps after a heart attack, stroke or mini-stroke.')),
  point(2, 'Not for everyone', p('Low-dose aspirin is no longer recommended for people who do not have heart or circulation disease.')),
  point('!', 'Never for under 16s', p('Except on a doctor\'s advice, because of the risk of Reye\'s syndrome.')),
  point(3, 'Side effects', chips(['Indigestion', 'Bruising easily', 'Bleeding for longer', 'Can worsen asthma'], 0.8)),
  point(4, 'Do not stop without advice', p('If you take it for heart disease or after a stroke, stopping can raise your risk.')),
  end('Read about aspirin', 'General information, not medical advice. Get help for vomiting blood or black poo.'),
];
