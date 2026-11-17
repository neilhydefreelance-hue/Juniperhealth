// Eating disorders: types and warning signs. Taken from the eating disorders guide on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('You are not alone', ['Eating', 'disorders'], 'People can and do recover.', 3.4),
  point(1, 'Serious mental illnesses', p('Controlling food, eating or exercise is used to cope with difficult feelings. They can seriously affect physical health.')),
  point(2, 'Types', chips(['Anorexia', 'Bulimia', 'Binge eating disorder', 'ARFID', 'OSFED'], 0.8)),
  point(3, 'Warning signs', chips(['Worrying about food or weight', 'Avoiding eating with others', 'Strict food rules', 'Exercising a lot', 'Mood changes'], 0.8), 5.6),
  point(4, 'Getting help', p('See your GP as soon as possible. Early treatment makes recovery more likely. Beat offers free helplines.')),
  point('!', 'Call 999 if someone', p('Faints, has chest pain, a very fast or irregular heartbeat, is very weak or confused, or has been vomiting a lot.'), 5.4),
  end('Free plain English guide', 'General information, not medical advice. Samaritans: 116 123.'),
];
