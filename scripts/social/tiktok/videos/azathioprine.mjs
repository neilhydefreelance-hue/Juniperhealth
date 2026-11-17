// Azathioprine. Taken from the azathioprine medicine page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Medicines A to Z', ['Azathioprine:', 'what to know'], 'It calms down the immune system.'),
  point(1, 'What it is for', chips(["Crohn's and colitis", 'Rheumatoid arthritis', 'After a transplant', 'Other autoimmune conditions'], 0.8)),
  point(2, 'Blood tests', p('You need a blood test before starting, and regular blood tests during treatment.')),
  point(3, 'Protect your skin', p('It increases the risk of skin cancer. Use sunscreen and check your skin.')),
  point('!', 'Get help fast', p('A high temperature, sore throat, mouth ulcers, unusual bruising or yellow skin. Call 111 or your doctor straight away.')),
  point(4, 'Be patient', p('It takes 2 to 3 months to work fully. Avoid live vaccines.')),
  end('Read about azathioprine', 'General information, not medical advice.'),
];
