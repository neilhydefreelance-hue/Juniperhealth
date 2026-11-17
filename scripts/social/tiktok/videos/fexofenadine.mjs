// Fexofenadine. Taken from the fexofenadine medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Fexofenadine:', 'non-drowsy', 'antihistamine'], 'Telfast and Allevia.'),
  point(1, 'What it treats', chips(['Hay fever', 'Itchy eyes and nose', 'Hives'], 0.8)),
  point('!', 'Skip the fruit juice', p('Do not take it with orange, apple or grapefruit juice. It makes it work less well.')),
  point(2, 'Indigestion remedies', p('Leave 2 hours between it and remedies containing aluminium or magnesium.')),
  point(3, 'Common side effects', chips(['Headache', 'Dizziness', 'Feeling sick', 'Tiredness'], 0.8)),
  point(4, 'Get help if', p('You have a fast or irregular heartbeat.')),
  end('Read about fexofenadine', 'General information, not medical advice. Ask a pharmacist.'),
];
