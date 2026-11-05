// Crohn's and colitis (IBD). Taken from the Crohn's and colitis guide on the website.
import { chips, title, point, big, p, end } from './_common.mjs';
export const scenes = [
  title('Explained simply', ["Crohn's and", 'colitis'], 'Inflammatory bowel disease (IBD).'),
  point(1, 'An inflamed gut', p('IBD is a lifelong condition where parts of the gut become inflamed.')),
  big('1 in 123', 'People in the UK', 'Have IBD. It often starts between 15 and 40.'),
  point(2, 'Symptoms', chips(['Diarrhoea, maybe with blood', 'Urgent need for the toilet', 'Tummy pain', 'Extreme tiredness', 'Weight loss'], 0.8), 5.6),
  point(3, 'Treatment', chips(['Mesalazine', 'Steroids for flares', 'Immunosuppressants', 'Biologics', 'Surgery'], 0.8)),
  point('!', 'Go to A&E if', p('You have severe tummy pain, a swollen tummy, heavy bleeding from your bottom, or cannot keep fluids down.'), 5.4),
  end('Free plain English guide', 'General information, not medical advice.'),
];
