// Borderline personality disorder. Taken from the BPD guide on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Explained with care', ['Borderline', 'personality', 'disorder'], 'Also called EUPD.'),
  point(1, 'Not a "wrong" personality', p('BPD affects how you manage emotions, see yourself and relate to others. It can be helped.')),
  point(2, 'Signs', chips(['Intense, changing emotions', 'Fear of abandonment', 'Unstable relationships', 'Feeling empty', 'Impulsive behaviour'], 0.8), 5.6),
  point(3, 'Often linked to trauma', p('Many people with BPD have had difficult experiences, often in childhood, but not everyone has.')),
  point(4, 'Therapy helps', chips(['DBT', 'Mentalisation-based therapy', 'A care and crisis plan'], 0.8)),
  point(5, 'You deserve respect', p('Many people with BPD have faced stigma. You deserve to be listened to. See your GP to get support.')),
  end('Free plain English guide', 'General information, not medical advice. In a crisis, call 999 or Samaritans on 116 123.'),
];
