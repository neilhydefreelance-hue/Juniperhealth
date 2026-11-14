// Osteoarthritis and rheumatoid arthritis compared. Taken from the two arthritis guides on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Explained simply', ['Osteoarthritis', 'or rheumatoid', 'arthritis?'], 'Two very different conditions.'),
  point(1, 'Osteoarthritis', p('The most common arthritis. The smooth layer in the joint wears thinner, often in the knees, hips and hands.')),
  point(2, 'Rheumatoid arthritis', p('An autoimmune condition. The immune system attacks the joint lining, often in the hands, wrists and feet, on both sides.')),
  point(3, 'Morning stiffness', p('In osteoarthritis it usually eases within 30 minutes. In rheumatoid arthritis it lasts longer than 30 minutes.')),
  point(4, 'Osteoarthritis treatment', chips(['Exercise', 'Managing weight', 'Anti-inflammatory gels'], 0.8)),
  point(5, 'Rheumatoid arthritis treatment', p('Early treatment matters, so NICE says people should be referred urgently. Medicines like methotrexate can help.'), 5.4),
  end('Free plain English guides', 'General information, not medical advice. A hot, red, swollen joint with a fever needs help the same day.'),
];
