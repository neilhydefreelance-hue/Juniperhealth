// Living with type 2 diabetes. Taken from the type 2 diabetes living well page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('World Diabetes Day', ['Living with', 'type 2 diabetes'], 'Small changes that help.'),
  point(1, 'Eating well', chips(['Half a plate of veg', 'Wholegrains', 'Fewer sugary drinks', 'Less salt', 'Beans and fish'], 0.8)),
  point(2, 'Moving more', p('Walking counts. Sit less and build up to 150 minutes of activity a week.')),
  point(3, 'Check your feet daily', p('See a GP or podiatrist the same day about any cut, blister or sore that is not healing.')),
  point(4, 'Driving', p('If you are treated with insulin, you must tell the DVLA.')),
  point(5, 'Your mental health', p('Feeling worried or worn out is common. Talk to your GP or diabetes nurse.')),
  end('Read about type 2 diabetes', 'General information, not medical advice.'),
];
