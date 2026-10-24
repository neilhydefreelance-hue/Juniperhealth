// Type 1 diabetes and the 4 Ts. Taken from the type 1 diabetes guide on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Know the 4 Ts', ['Type 1', 'diabetes'], 'It is not caused by diet or lifestyle.', 3.4),
  point(1, 'The immune system attacks', p('It destroys the cells that make insulin. Without insulin, sugar builds up in your blood. It usually starts in childhood or young adulthood.'), 5.4),
  {
    dur: 6.4,
    kind: 'title',
    html: `<div class="eyebrow" data-in="0.1">The 4 Ts</div>
      <ol class="steps">
        <li data-in="0.5"><b>T</b><span><em>Toilet:</em> peeing more, or bedwetting</span></li>
        <li data-in="1.1"><b>T</b><span><em>Thirsty:</em> very thirsty</span></li>
        <li data-in="1.7"><b>T</b><span><em>Tired:</em> very tired</span></li>
        <li data-in="2.3"><b>T</b><span><em>Thinner:</em> losing weight without trying</span></li>
      </ol>`,
  },
  point(2, 'See a GP the same day', p('If you or your child have the 4 Ts, see a GP the same day or call NHS 111.')),
  point('!', 'Call 999 if there is also', p('Being sick, tummy pain, fruity-smelling breath, deep or fast breathing, or drowsiness. This could be DKA.'), 5.4),
  point(3, 'Treatment', chips(['Insulin injections or pump', 'Glucose monitoring', 'Carb counting', 'Yearly checks'], 0.8)),
  end('Free plain English guide', 'General information, not medical advice.'),
];
