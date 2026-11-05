// Disabled Students' Allowance. Taken from the DSA guide on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('Going to university?', ["Disabled", "Students'", 'Allowance'], 'Extra help with your studies.'),
  point(1, 'Who can get it', chips(['Disabilities', 'Long-term conditions', 'Mental health conditions', 'Dyslexia or ADHD'], 0.8)),
  point(2, 'Not means-tested', p('DSA does not depend on your income and does not affect other student finance. Part-time and postgraduate courses count too.')),
  point(3, 'What it can pay for', chips(['Assistive technology', 'Note-takers', 'Mentors', 'Study skills tutors', 'Extra travel'], 0.8), 5.4),
  {
    dur: 6.0,
    kind: 'title',
    html: `<div class="eyebrow" data-in="0.1">How to apply</div>
      <ol class="steps">
        <li data-in="0.5"><b>1</b><span>Apply through <em>Student Finance</em></span></li>
        <li data-in="1.1"><b>2</b><span>Send <em>evidence</em> of your condition</span></li>
        <li data-in="1.7"><b>3</b><span>Book a <em>needs assessment</em></span></li>
      </ol>`,
  },
  point(4, 'Talk to your university', p('Their disability service can arrange adjustments, such as extra time in exams.'), 4.6),
  end('Free work and study guide', 'General information. You can apply before your course starts.'),
];
