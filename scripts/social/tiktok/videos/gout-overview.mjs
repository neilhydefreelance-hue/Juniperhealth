// "What is gout?" Taken from the gout guide on the website.
import { chips, title, point, big, p, end } from './_common.mjs';
export const scenes = [
  title('Explained simply', ['What is', 'gout?'], 'A type of arthritis.', 3.4),
  point(1, 'Crystals in the joints', p('Too much uric acid builds up in the blood and forms sharp crystals in and around the joints.')),
  big('1 in 40', 'Adults in the UK', 'Have gout. It is more common in men.'),
  point(2, 'A gout attack', p('It comes on quickly, often at night. The joint, usually the big toe, becomes hot, red, swollen and so painful even a bed sheet hurts.'), 5.6),
  point(3, 'What raises the risk', chips(['Family history', 'Being overweight', 'Kidney disease', 'Water tablets', 'Beer and spirits', 'Sugary drinks'], 0.8), 5.6),
  point(4, 'What can help', chips(['Anti-inflammatories', 'Colchicine', 'Steroids', 'Allopurinol to stop flares'], 0.8)),
  point('!', 'Same day help if', p('A swollen, painful joint comes with a high temperature or you feel unwell. Call NHS 111 or see a GP.'), 5.0),
  end('Free plain English guide', 'General information, not medical advice.'),
];
