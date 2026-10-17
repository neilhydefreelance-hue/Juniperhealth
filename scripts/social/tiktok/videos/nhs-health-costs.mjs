// Free prescriptions, dental care, sight tests and glasses. Taken from the NHS health costs guide on the website.
import { chips, title, point, p, end } from './_common.mjs';

export const scenes = [
  title('Save money on', ['Free NHS', 'prescriptions', 'and more'], 'Lots of people can get help but do not know it.'),
  point(1, 'What you might not pay for', chips(['Prescriptions', 'Dental treatment', 'Sight tests', 'Glasses'], 0.8)),
  point(2, 'You may get help because of', chips(['Your age', 'Pregnancy or a new baby', 'Some health conditions', 'Some benefits', 'A low income'], 0.8), 5.6),
  point(3, 'In Wales', p('Prescriptions are free for everyone registered with a GP in Wales. Dental check-ups are free if you are under 25 or 60 or over.'), 5.4),
  point(4, 'Low income?', p('The NHS Low Income Scheme can give you free or cheaper prescriptions, dental care, sight tests and travel to hospital.')),
  point('!', 'Check before you tick the box', p('If you claim free treatment you are not entitled to, you could get a penalty of up to £100. Not sure? Pay and ask for a refund receipt.'), 5.6),
  end('Check what you can get', 'Free self-check on our website. Nothing leaves your device.'),
];
