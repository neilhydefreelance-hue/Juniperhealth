// Mast cell activation syndrome (MCAS). Taken from the MCAS condition pages on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Conditions A to Z', ['MCAS:', 'what is it?'], 'Mast cell activation syndrome.'),
  point(1, 'What happens', p('Mast cells, part of your immune system, release chemicals such as histamine too easily.')),
  point(2, 'Symptoms come and go', chips(['Flushing', 'Itching or hives', 'Tummy pain', 'Fast heartbeat', 'Dizziness', 'Brain fog'], 0.8)),
  point(3, 'Common triggers', chips(['Heat', 'Alcohol', 'Some foods', 'Stress', 'Exercise', 'Strong smells'], 0.8)),
  point(4, 'Getting diagnosed', p('There is no single test. Keep a symptom diary and photos of rashes or flushing to show your GP.')),
  point('!', 'Call 999', p('For swelling of the lips, tongue or throat, or difficulty breathing. Use your adrenaline auto-injector first.')),
  end('Read about MCAS', 'General information, not medical advice.'),
];
