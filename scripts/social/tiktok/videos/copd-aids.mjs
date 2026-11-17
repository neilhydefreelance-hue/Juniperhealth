// Aids that can help with COPD. Taken from the COPD aids article on the website.
import { chips, title, point, big, p, end } from './_common.mjs';
export const scenes = [
  title('COPD', ['Aids that', 'help with', 'COPD'], 'Check what is free first.'),
  point(1, 'Free from your NHS team', chips(['Pulmonary rehab', 'A self-management plan', 'Airway clearance help', 'Oxygen, if tests show you need it'], 0.8)),
  big('£1,000', 'Free from your council', 'Equipment for daily living under £1,000 should be free if your council says you need it.'),
  point(2, 'A handheld fan', p('Hold it about 15cm from your face. It can take up to 10 minutes to help, alongside your breathing techniques.')),
  point(3, 'Save your energy', chips(['Sit to shower', 'Perching stool', 'Grabber', 'Use a trolley'], 0.8)),
  point('!', 'Very breathless?', p('Call 999 if you are struggling to breathe, have chest pain, or your lips or skin look blue or grey.')),
  end('Read the full guide', 'General information, not medical advice. No aid replaces your inhalers or treatment plan.'),
];
