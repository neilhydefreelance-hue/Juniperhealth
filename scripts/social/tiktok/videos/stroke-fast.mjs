// Stroke: think FAST. Taken from the stroke guide on the website.
import { chips, title, point, big, p, end } from './_common.mjs';
export const scenes = [
  title('Could save a life', ['Spot a stroke:', 'think FAST'], ''),
  {
    dur: 7.0,
    kind: 'title',
    html: `<div class="eyebrow" data-in="0.1">Think FAST</div>
      <ol class="steps">
        <li data-in="0.5"><b>F</b><span><em>Face:</em> has it dropped on one side?</span></li>
        <li data-in="1.2"><b>A</b><span><em>Arms:</em> can they lift both and keep them there?</span></li>
        <li data-in="1.9"><b>S</b><span><em>Speech:</em> is it slurred or muddled?</span></li>
        <li data-in="2.6"><b>T</b><span><em>Time:</em> call 999 straight away</span></li>
      </ol>`,
  },
  point(1, 'Other sudden signs', chips(['Loss of sight', 'Weakness or numbness', 'Dizziness', 'Loss of balance', 'Severe headache'], 0.8), 5.4),
  big('100,000', 'Strokes a year', 'Happen in the UK. Treatment works best when it starts fast.'),
  point(2, 'Mini strokes matter too', p('A TIA (mini stroke) has symptoms that go within 24 hours. It is still an emergency. Call 999.')),
  point(3, 'Most strokes can be prevented', chips(['Treat high blood pressure', 'Atrial fibrillation checks', 'Stop smoking', 'Be active'], 0.8)),
  end('Free plain English guide', 'General information, not medical advice. If you spot the signs, call 999.'),
];
