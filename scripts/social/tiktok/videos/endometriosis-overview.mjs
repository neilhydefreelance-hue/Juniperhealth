// "What is endometriosis?" Taken from the endometriosis guide on the website.
import { chips, title, point, big, p, end } from './_common.mjs';

export const scenes = [
  title('Explained simply', ['What is', 'endometriosis?'], 'And why it takes so long to diagnose.', 3.6),
  point(1, 'Tissue in the wrong place', p('Tissue like the lining of the womb grows in other places, such as the ovaries or bowel. It bleeds each month, causing pain and scarring.'), 5.4),
  big('1 in 10', 'Women and people assigned female at birth', 'Endometriosis is thought to affect around 1 in 10.'),
  point(2, 'Common symptoms', chips(['Severe period pain', 'Pelvic pain', 'Pain during sex', 'Painful poos or pees', 'Heavy periods', 'Extreme tiredness'], 0.8), 5.6),
  big('8 to 9 years', 'Average wait for diagnosis', 'Keep a pain diary and tell your GP. A normal scan does not rule it out.', 5.4),
  point(3, 'What can help', chips(['Painkillers', 'The pill or a hormonal coil', 'Other hormone treatments', 'Keyhole surgery', 'Pain management'], 0.8), 5.6),
  end('Free plain English guide', 'General information, not medical advice. Speak to your GP about your symptoms.'),
];
