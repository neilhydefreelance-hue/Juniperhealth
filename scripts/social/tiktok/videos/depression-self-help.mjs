// Living well with depression. Taken from the depression living well page on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Mental health', ['Depression:', 'small steps', 'that help'], 'Alongside treatment. Be patient with yourself.'),
  point(1, 'Start small', p('Set small, realistic goals, like getting dressed or going outside for 5 minutes. Notice when you manage them.')),
  point(2, 'Get active', p('Even a short walk can lift your mood. Your GP may be able to refer you to an exercise scheme.')),
  point(3, 'Everyday helpers', chips(['Regular sleep times', 'Some structure to your day', 'Talk to people you trust', 'Cut down alcohol'], 0.8)),
  point(4, 'Free tools', chips(['NHS Every Mind Matters', 'Mind', 'StepChange for debt worries', 'Citizens Advice'], 0.8)),
  point('!', 'Get help now if', p('You are thinking about harming yourself. Call 999 if you are in danger, NHS 111 option 2, or Samaritans free on 116 123.')),
  end('Read our depression guide', 'General information, not medical advice.'),
];
