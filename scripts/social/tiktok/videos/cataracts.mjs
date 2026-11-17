// "What are cataracts?" Taken from the cataracts guide on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Explained simply', ['What are', 'cataracts?'], 'A cloudy lens in the eye.', 3.4),
  point(1, 'A cloudy lens', p('The lens inside your eye is normally clear. With cataracts it becomes cloudy. Most people over 65 have some cloudiness.')),
  point(2, 'Signs', chips(['Blurred or misty sight', 'Faded colours', 'Glare from lights', 'Halos around lights', 'New glasses often'], 0.8), 5.4),
  point(3, 'Not painful', p('Cataracts do not hurt or make your eyes red. They usually develop slowly.'), 4.4),
  point(4, 'What raises the risk', chips(['Getting older', 'Diabetes', 'Long-term steroids', 'Smoking', 'Alcohol'], 0.8)),
  point(5, 'Getting help', p('An optician can spot cataracts at a routine eye test and refer you if they affect daily life. Surgery can replace the cloudy lens.'), 5.4),
  end('Free plain English guide', 'General information, not medical advice.'),
];
