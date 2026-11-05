// Topiramate. Taken from the topiramate medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Topiramate:', 'what to know'], 'For epilepsy and migraine prevention.'),
  point(1, 'Common side effects', chips(['Tingling hands and feet', 'Tiredness', 'Less appetite', 'Trouble finding words', 'Low mood'], 0.8), 5.6),
  point('!', 'Pregnancy safety', p('It can harm an unborn baby. If you could get pregnant, you must follow a pregnancy prevention programme and use highly effective contraception.')),
  point(2, 'Contraception', p('It can make hormonal contraception less effective. Drink plenty of water.')),
  point('!', 'Get help straight away for', chips(['Sudden eye pain or blurred vision', 'Not sweating and very hot', 'Side pain or blood in pee'], 0.8)),
  point(3, 'Do not stop suddenly', p('It can cause seizures, even if you take it for migraine. Your doctor will lower the dose slowly.')),
  end('Read about topiramate', 'General information, not medical advice. Samaritans: 116 123.'),
];
