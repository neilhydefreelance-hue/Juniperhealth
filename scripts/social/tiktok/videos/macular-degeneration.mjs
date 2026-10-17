// Age-related macular degeneration. Taken from the AMD guide on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Protect your sight', ['Macular', 'degeneration'], 'Also called AMD.', 3.4),
  point(1, 'Your central sight', p('AMD affects the macula, the part of the eye for detailed sight like reading and faces. It is the most common cause of sight loss in the UK.'), 5.4),
  point(2, 'Two types', chips(['Dry AMD: slow, over years', 'Wet AMD: fast, but treatable'], 0.8)),
  point(3, 'Signs', chips(['Blurred central sight', 'Straight lines look wavy', 'A dark patch', 'Harder to read'], 0.8)),
  point(4, 'Seeing things that are not there?', p('Charles Bonnet syndrome is common with sight loss. It is not a mental health problem.')),
  point(5, 'Smoking more than doubles the risk', p('Stopping smoking is one of the best things you can do for your eyes.'), 4.6),
  point('!', 'Sudden change?', p('If your central sight suddenly becomes distorted, blurred or patchy, see an optician or eye casualty the same day.'), 5.2),
  end('Free plain English guide', 'General information, not medical advice.'),
];
