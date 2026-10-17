// Epilepsy and seizure first aid. Taken from the epilepsy guide on the website.
import { title, point, big, p, end } from './_common.mjs';
export const scenes = [
  title('Could you help?', ['Epilepsy and', 'seizure', 'first aid'], ''),
  big('630,000', 'People in the UK', 'Have epilepsy, a condition that causes repeated seizures.'),
  point(1, 'Seizures look different', p('Some people lose consciousness and jerk. Others stare for a few seconds, or feel strange and do not know what they are doing.'), 5.4),
  {
    dur: 6.2,
    kind: 'title',
    html: `<div class="eyebrow" data-in="0.1">If someone has a seizure</div>
      <ol class="steps">
        <li data-in="0.5"><b>1</b><span>Stay calm and <em>note the time</em></span></li>
        <li data-in="1.1"><b>2</b><span>Move danger away and <em>cushion their head</em></span></li>
        <li data-in="1.7"><b>3</b><span><em>Do not</em> hold them down or put anything in their mouth</span></li>
        <li data-in="2.3"><b>4</b><span>After, use the <em>recovery position</em></span></li>
      </ol>`,
  },
  point('!', 'Call 999 if', p('The seizure lasts more than 5 minutes, one follows another, they are injured, it is their first seizure, or they do not recover.'), 5.6),
  end('Free plain English guide', 'General information, not medical advice.'),
];
