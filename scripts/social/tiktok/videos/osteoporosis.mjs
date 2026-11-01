// "What is osteoporosis?" Taken from the osteoporosis guide on the website.
import { chips, title, point, big, p, end } from './_common.mjs';
export const scenes = [
  title('Explained simply', ['What is', 'osteoporosis?'], 'Thinner, weaker bones.', 3.4),
  big('3.5 million+', 'People in the UK', 'Have osteoporosis. Bones can break after a minor fall or bump.'),
  point(1, 'Often no symptoms', p('Many people do not know until a bone breaks, most often the wrist, hip or spine.')),
  point(2, 'Who is more at risk', chips(['After the menopause', 'Parent broke a hip', 'Steroid tablets 3+ months', 'Rheumatoid arthritis', 'Coeliac or Crohn\'s', 'Smoking'], 0.8), 5.8),
  point(3, 'A quick, painless scan', p('A DEXA scan measures how dense your bones are. Your GP can also work out your risk of a break.')),
  point(4, 'What can help', chips(['Bisphosphonate tablets', 'Yearly drip', 'Injections', 'HRT', 'Calcium and vitamin D'], 0.8)),
  end('Free plain English guide', 'General information, not medical advice.'),
];
