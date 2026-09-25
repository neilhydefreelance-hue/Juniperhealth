/**
 * Attendance Allowance check.
 *
 * Based on the day and night conditions in sections 64 and 65 of the Social
 * Security Contributions and Benefits Act 1992:
 *   Day: frequent attention throughout the day with bodily functions, or
 *        continual supervision to avoid substantial danger.
 *   Night: prolonged or repeated attention, or someone awake to watch over you.
 * Lower rate: day or night. Higher rate: day and night, or terminal illness.
 */
import rates from '../../data/rates.json';
import type { Answers, CheckerDefinition, ResultView } from './types';

export const aaChecker: CheckerDefinition = {
  id: 'aa',
  name: 'Attendance Allowance check',
  steps: [
    {
      id: 'age',
      kicker: 'About you',
      title: 'Have you reached State Pension age?',
      hint: 'State Pension age is 66 and is rising to 67 between 2026 and 2028.',
      type: 'single',
      options: [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No', stop: true },
        { value: 'unsure', label: "I'm not sure", detail: 'You can check your State Pension age on GOV.UK. We will carry on for now.' },
      ],
    },
    {
      id: 'where',
      kicker: 'About you',
      title: 'Where do you live?',
      type: 'single',
      options: [
        { value: 'ew', label: 'England or Wales' },
        { value: 'scotland', label: 'Scotland', stop: true },
        { value: 'ni', label: 'Northern Ireland' },
        { value: 'abroad', label: 'Outside the UK', stop: true },
      ],
    },
    {
      id: 'existing',
      kicker: 'About you',
      title: 'Do you already get PIP or Disability Living Allowance (DLA)?',
      type: 'single',
      options: [
        { value: 'yes', label: 'Yes', stop: true },
        { value: 'no', label: 'No' },
      ],
    },
    {
      id: 'terminal',
      kicker: 'About you',
      title: 'Has a doctor or nurse said you may have 12 months or less to live?',
      hint: 'You do not have to answer this if you would rather not. It only changes how quickly a claim can be dealt with.',
      type: 'single',
      options: [
        { value: 'no', label: 'No' },
        { value: 'yes', label: 'Yes', stop: true },
        { value: 'skip', label: "I'd rather not say" },
      ],
    },
    {
      id: 'duration',
      kicker: 'About your needs',
      title: 'How long have you needed help because of your illness or disability?',
      type: 'single',
      options: [
        { value: 'long', label: '6 months or more' },
        { value: 'short', label: 'Less than 6 months', detail: 'You can claim early, but it can only be paid once you reach 6 months.' },
      ],
    },
    {
      id: 'tasks',
      kicker: 'About your needs',
      title: 'Which of these do you need help with, or need someone nearby for?',
      hint: 'Tick all that apply. It does not matter whether anyone actually helps you now. It is about the help you need.',
      help: '<p>Attendance Allowance is about <strong>personal care</strong> (help with your body and its functions) and <strong>supervision</strong> (someone keeping an eye on you to keep you safe). Housework and shopping do not count on their own.</p><p>If you can only do something very slowly, with a lot of pain, or with a risk of falling, count it as needing help.</p>',
      type: 'multi',
      options: [
        { value: 'wash', label: 'Washing, bathing or showering' },
        { value: 'dress', label: 'Getting dressed or undressed' },
        { value: 'toilet', label: 'Using the toilet, or managing incontinence' },
        { value: 'eat', label: 'Eating or drinking' },
        { value: 'meds', label: 'Taking medicines or managing treatment' },
        { value: 'move', label: 'Moving around indoors, or getting in and out of bed or a chair' },
        { value: 'talk', label: 'Talking to people, or understanding what is said' },
        { value: 'safe', label: 'Someone keeping an eye on me to keep me safe', detail: 'For example because of falls, dizziness, confusion or forgetting things.' },
        { value: 'none', label: 'None of these', exclusive: true },
      ],
    },
    {
      id: 'day',
      kicker: 'During the day',
      title: 'During the day, how often do you need this help or supervision?',
      showIf: { tasks: ['wash', 'dress', 'toilet', 'eat', 'meds', 'move', 'talk', 'safe'] },
      type: 'single',
      options: [
        { value: 'rarely', label: 'Now and then, but not every day', level: 0 },
        { value: 'once', label: 'Once or twice a day', level: 1 },
        { value: 'frequent', label: 'Several times, spread through the day', level: 2 },
        { value: 'continual', label: 'Someone needs to watch over me for most of the day to keep me safe', level: 2 },
      ],
    },
    {
      id: 'night',
      kicker: 'During the night',
      title: 'At night, how often do you need help or someone to watch over you?',
      hint: 'Night means the hours after the household has gone to bed.',
      type: 'single',
      options: [
        { value: 'none', label: 'Not at night, or only now and then', level: 0 },
        { value: 'short', label: 'Once most nights, for less than 20 minutes', level: 1 },
        { value: 'repeated', label: 'Once most nights for 20 minutes or more, or twice or more most nights', level: 2 },
        { value: 'watch', label: 'Someone needs to be awake for long periods, or often, to watch over me', level: 2 },
      ],
    },
    {
      id: 'home',
      kicker: 'About you',
      title: 'Where do you live now?',
      type: 'single',
      options: [
        { value: 'home', label: 'In my own home, or with family' },
        { value: 'selfpay', label: 'In a care home, and I pay the full cost myself' },
        { value: 'funded', label: 'In a care home paid for by the council or NHS' },
      ],
    },
  ],
};

const money = (n: number) => `£${n.toFixed(2)}`;

export function scoreAa(a: Answers): ResultView {
  const r = rates.aa;
  const v = (id: string) => a[id]?.values[0];

  if (v('age') === 'no')
    return {
      tone: 'redirect',
      headline: 'Under State Pension age? PIP is the benefit to look at',
      body: '<p>Attendance Allowance is only for people who have reached State Pension age. If you are 16 or over and under State Pension age, Personal Independence Payment (PIP) is the benefit for you. For children under 16, it is Disability Living Allowance (DLA).</p>',
      next: [
        { label: 'Try the PIP points self-check', href: '/benefits/pip/points-checker/' },
        { label: 'Try the DLA for children check', href: '/benefits/dla/checker/' },
      ],
    };
  if (v('where') === 'scotland')
    return {
      tone: 'redirect',
      headline: 'In Scotland, Attendance Allowance has been replaced by Pension Age Disability Payment',
      body: '<p>Pension Age Disability Payment is paid by Social Security Scotland. The rules are very similar, so this check can still give you an idea, but you apply through Social Security Scotland.</p>',
      next: [{ label: 'Pension Age Disability Payment on mygov.scot', href: 'https://www.mygov.scot/pension-age-disability-payment' }],
    };
  if (v('where') === 'abroad')
    return {
      tone: 'redirect',
      headline: 'You usually need to live in the UK to get Attendance Allowance',
      body: '<p>You normally need to live in Great Britain and to have lived here for at least 2 of the last 3 years. There are some exceptions, so contact the Attendance Allowance helpline or an adviser if you are not sure.</p>',
      next: [{ label: 'Attendance Allowance eligibility on GOV.UK', href: 'https://www.gov.uk/attendance-allowance/eligibility' }],
    };
  if (v('existing') === 'yes')
    return {
      tone: 'redirect',
      headline: 'You cannot get Attendance Allowance as well as PIP or DLA',
      body: '<p>If you already get PIP or DLA, you usually keep getting it after you reach State Pension age, as long as you still qualify. You cannot get Attendance Allowance at the same time. If your needs have grown, you can ask for your PIP or DLA to be looked at again, but get advice first, because a review can go down as well as up.</p>',
      next: [{ label: 'Read about PIP', href: '/benefits/pip/' }],
    };
  if (v('terminal') === 'yes')
    return {
      tone: 'good',
      headline: `You can get the higher rate of ${money(r.higher)} a week under the special rules`,
      body: `<p>If a doctor or nurse has said you may have 12 months or less to live, you can claim under the <strong>special rules</strong>. You get the higher rate straight away, you do not need to wait 6 months, and claims are dealt with quickly.</p><p>Ask your doctor or nurse for an <strong>SR1 form</strong> and send it with your claim, or someone can claim on your behalf. You can call the Attendance Allowance helpline on <a href="tel:08007310122">0800 731 0122</a>.</p><p class="small muted">This is an estimate, not a decision. Your answers have not been sent anywhere.</p>`,
      next: [{ label: 'How to claim Attendance Allowance', href: '/benefits/attendance-allowance/how-to-claim/' }],
    };

  const tasks = a.tasks?.values ?? [];
  const noTasks = !tasks.length || tasks.includes('none');
  const dayLevel = noTasks ? 0 : (a.day?.level ?? 0);
  const nightLevel = a.night?.level ?? 0;
  const dayMet = dayLevel >= 2;
  const nightMet = nightLevel >= 2;
  const borderline = !dayMet && !nightMet && (dayLevel === 1 || nightLevel === 1);

  let headline: string;
  let tone: ResultView['tone'];
  let level = 'none';
  let bandLabel = 'May not qualify yet';
  let amount = 0;
  if (dayMet && nightMet) {
    headline = `You may be able to get the higher rate of ${money(r.higher)} a week`;
    tone = 'good';
    level = 'higher';
    bandLabel = 'Higher rate';
    amount = r.higher;
  } else if (dayMet || nightMet) {
    headline = `You may be able to get the lower rate of ${money(r.lower)} a week`;
    tone = 'good';
    level = 'lower';
    bandLabel = 'Lower rate';
    amount = r.lower;
  } else if (borderline) {
    headline = 'It may be worth claiming, but it is close';
    tone = 'maybe';
  } else {
    headline = 'From these answers, you may not qualify at the moment';
    tone = 'unlikely';
  }

  const notes: string[] = [];
  if (dayMet) notes.push('<p>You said you need help or supervision <strong>often through the day</strong>. That can meet the day condition.</p>');
  if (nightMet) notes.push('<p>You said you need help or watching over <strong>for long periods, or more than once, at night</strong>. That can meet the night condition.</p>');
  if (tone === 'good' && level === 'lower')
    notes.push('<p>To get the higher rate you need to meet both the day and the night conditions. If your nights are worse than you first said, it is worth mentioning.</p>');
  if (borderline)
    notes.push('<p>You need help, but perhaps not quite often enough to meet the rules. The DWP looks closely at detail, and many people underestimate how often they need help. Keep a diary for a week of every time you need help or struggle, then decide. A free adviser can also help you decide.</p>');
  if (tone === 'unlikely')
    notes.push('<p>Attendance Allowance is for people who need help with personal care, or supervision to keep safe, often during the day or at night. If your needs change, you can check again at any time.</p>');
  if (v('duration') === 'short')
    notes.push('<p>You said you have needed help for less than 6 months. You can send your claim in early, but payments only start once you reach 6 months.</p>');
  if (v('home') === 'funded')
    notes.push('<p>If the council or NHS pays for your care home, Attendance Allowance usually stops after 28 days. It can still be worth claiming so it is in place if things change.</p>');
  if (v('where') === 'ni')
    notes.push('<p>In Northern Ireland, Attendance Allowance is run by the Department for Communities, so phone numbers and some processes are different.</p>');
  notes.push('<p>Attendance Allowance is not means-tested. Your savings and income do not matter, and it can mean you get more Pension Credit or help with council tax.</p>');
  notes.push('<p class="small muted"><strong>This is an estimate, not a decision.</strong> Only the Department for Work and Pensions (DWP) can decide. Your answers have not been sent anywhere.</p>');

  const rows = aaChecker.steps
    .filter((s) => a[s.id])
    .map((s) => ({ label: s.title, answer: a[s.id].labels.join(', ') }));

  return {
    tone,
    headline,
    body: notes.join(''),
    scores: [
      {
        name: 'Attendance Allowance',
        band: bandLabel,
        level,
        amount: amount ? `${money(amount)} a week (${money(amount * 4)} every 4 weeks)` : undefined,
      },
    ],
    table: { heading: 'Your answers', rows },
    next: [
      { label: 'How to claim Attendance Allowance', href: '/benefits/attendance-allowance/how-to-claim/' },
      { label: 'Read about Attendance Allowance', href: '/benefits/attendance-allowance/' },
    ],
  };
}
