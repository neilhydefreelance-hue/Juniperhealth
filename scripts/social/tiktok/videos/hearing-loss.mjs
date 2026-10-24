// Hearing loss: signs and help. Taken from the hearing loss guide on the website.
import { chips, title, point, big, p, end } from './_common.mjs';
export const scenes = [
  title('Know the signs', ['Hearing', 'loss'], 'Often family notice first.', 3.4),
  big('1 in 3', 'Adults in the UK', 'Are deaf, have hearing loss or have tinnitus, the charity RNID estimates.'),
  point(1, 'Signs to look out for', chips(['Hard to follow conversations', 'Asking people to repeat', 'TV turned up loud', 'Missing the doorbell', 'Tired after talking'], 0.8), 5.6),
  point(2, 'Getting tested', p('See your GP, who can refer you to NHS audiology. In some areas you can refer yourself. The test is painless.')),
  point(3, 'Hearing aids are free', p('Hearing aids are free on the NHS and help a lot with most permanent hearing loss.')),
  point(4, 'Other help', chips(['Flashing doorbells', 'Captioned phones', 'Hearing loops', 'Lipreading classes'], 0.8)),
  point('!', 'Sudden hearing loss?', p('If you lose hearing suddenly, call NHS 111 or see a GP the same day. Quick treatment can make a difference.'), 5.0),
  end('Free plain English guide', 'General information, not medical advice.'),
];
