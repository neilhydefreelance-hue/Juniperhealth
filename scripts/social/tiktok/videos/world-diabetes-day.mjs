// World Diabetes Day 2026. Taken from the World Diabetes Day article and diabetes pages on the website.
import { chips, title, point, big, p, end } from './_common.mjs';
export const scenes = [
  title('World Diabetes Day', ['Act early', 'on diabetes'], '14 November 2026. Know the early signs.'),
  point(1, 'Type 1: the 4 Ts', chips(['Toilet: peeing more', 'Thirsty', 'Tired', 'Thinner: losing weight'], 0.8)),
  point('!', 'Same day help', p('4 Ts? See a GP the same day or call NHS 111. Call 999 for being sick, tummy pain, fruity breath, fast breathing or drowsiness.')),
  point(2, 'Type 2: often no symptoms', chips(['Peeing more', 'Very thirsty', 'Tired', 'Thrush or itching', 'Slow-healing cuts'], 0.8), 5.6),
  point(3, 'Higher risk if you', chips(['Are over 40 (25 if South Asian)', 'Have a close relative with diabetes', 'Are overweight', 'Have high blood pressure'], 0.8), 5.6),
  big('42 to 47', 'Prediabetes', 'An HbA1c in this range means higher risk. Healthy changes can stop it becoming type 2.'),
  end('Read our World Diabetes Day guide', 'General information, not medical advice.'),
];
