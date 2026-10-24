// "What is Parkinson's?" Taken from the Parkinson's guide on the website.
import { chips, title, point, big, p, end } from './_common.mjs';
export const scenes = [
  title('Explained simply', ["What is", "Parkinson's?"], 'More than a tremor.', 3.4),
  point(1, 'Losing dopamine cells', p('Nerve cells that make dopamine, a chemical that helps control movement, are slowly lost.')),
  big('153,000', 'People in the UK', "Have Parkinson's. It is more common with age."),
  point(2, 'Main symptoms', chips(['Tremor, often in one hand', 'Slow movement', 'Smaller handwriting', 'Stiff muscles'], 0.8)),
  point(3, 'It affects much more', chips(['Balance and falls', 'Quieter voice', 'Loss of smell', 'Sleep problems', 'Low mood', 'Constipation'], 0.8), 5.6),
  point(4, 'Get it on time', p('Taking medicines at exactly the right times really matters. In hospital, tell staff your times.')),
  point(5, 'What can help', chips(['Levodopa', 'Other medicines', 'Physiotherapy', 'Speech therapy'], 0.8)),
  end('Free plain English guide', 'General information, not medical advice.'),
];
