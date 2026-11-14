// Life after a stroke. Taken from the stroke living well page on the website.
import { title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Conditions A to Z', ['Life after', 'a stroke'], 'Recovery and support.'),
  point(1, 'Fatigue', p('Tiredness after a stroke is very common. Plan rest, pace yourself and build up slowly.')),
  point(2, 'Communication', p('With aphasia, take your time and use gestures, pictures or writing.')),
  point(3, 'Emotions', p('Low mood, anxiety, anger and crying easily are common. Tell your GP or stroke team.')),
  point('!', 'Driving', p('Do not drive for 1 month after a stroke or TIA. Still have problems after that? Tell the DVLA.')),
  point(4, 'Help at home', p('Your council can assess your care needs. Family carers can ask for a carer\'s assessment.')),
  end('Read about stroke', 'General information. The Stroke Association has a free helpline.'),
];
