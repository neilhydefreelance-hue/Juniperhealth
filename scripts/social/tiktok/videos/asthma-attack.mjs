// Asthma and what to do in an attack. Taken from the asthma guide on the website.
import { chips, title, point, big, p, end } from './_common.mjs';
export const scenes = [
  title('Know what to do', ['Asthma:', 'signs, triggers', 'and attacks'], ''),
  big('5 million+', 'People in the UK', 'Get treatment for asthma.'),
  point(1, 'Symptoms', chips(['Wheezing', 'Breathlessness', 'Tight chest', 'Coughing at night'], 0.8)),
  point(2, 'Common triggers', chips(['Colds and flu', 'Pollen and pets', 'Smoke', 'Cold air', 'Exercise', 'Stress'], 0.8), 5.4),
  {
    dur: 6.0,
    kind: 'title',
    html: `<div class="eyebrow" data-in="0.1">In an asthma attack</div>
      <ol class="steps">
        <li data-in="0.5"><b>1</b><span><em>Sit up straight</em> and try to keep calm</span></li>
        <li data-in="1.1"><b>2</b><span>Use your reliever as your <em>action plan</em> says</span></li>
        <li data-in="1.7"><b>3</b><span>Blue reliever: <em>1 puff every 30 to 60 seconds</em>, up to 10</span></li>
        <li data-in="2.3"><b>4</b><span>Not better? <em>Call 999</em></span></li>
      </ol>`,
  },
  point(3, 'Get an asthma action plan', p('Ask your GP or nurse for a written plan and a yearly review.'), 4.6),
  end('Free plain English guide', 'General information, not medical advice. Follow your own asthma action plan.'),
];
