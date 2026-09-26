/**
 * NHS health costs check (England and Wales).
 *
 * Based on the NHS Business Services Authority rules that apply from April 2026
 * (leaflet HC11). Income Support and income-based JSA no longer give free
 * prescriptions from 15 April 2026, so they are not asked about.
 * If the rules change, update the questions here and tests/scoring.test.ts.
 */
import type { Answers, CheckerDefinition, ResultView, ScoreCard } from './types';

export const nhsChecker: CheckerDefinition = {
  id: 'nhs',
  name: 'NHS health costs check',
  steps: [
    {
      id: 'where',
      kicker: 'About you',
      title: 'Where are you registered with a GP?',
      type: 'single',
      options: [
        { value: 'england', label: 'England' },
        { value: 'wales', label: 'Wales' },
        { value: 'scotland', label: 'Scotland', stop: true },
        { value: 'ni', label: 'Northern Ireland', stop: true },
      ],
    },
    {
      id: 'age',
      kicker: 'About you',
      title: 'How old are you?',
      hint: 'If you are checking for someone else, answer for them.',
      type: 'single',
      options: [
        { value: 'u16', label: 'Under 16' },
        { value: '16to17', label: '16 or 17' },
        { value: '18', label: '18' },
        { value: '19to24', label: '19 to 24' },
        { value: '25to59', label: '25 to 59' },
        { value: '60plus', label: '60 or over' },
      ],
    },
    {
      id: 'education',
      kicker: 'About you',
      title: 'Are you in full-time education?',
      hint: 'This means at school or college, but not university.',
      showIf: { age: ['16to17', '18'] },
      type: 'single',
      options: [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' },
      ],
    },
    {
      id: 'pregnant',
      kicker: 'About you',
      title: 'Are you pregnant, or have you had a baby in the last 12 months?',
      type: 'single',
      options: [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' },
      ],
    },
    {
      id: 'benefits',
      kicker: 'Benefits and certificates',
      title: 'Do you get any of these?',
      hint: 'Tick all that apply. Include benefits paid to your partner if you are included in their claim.',
      help: '<p><strong>Pension Credit</strong> only counts if you get the <strong>Guarantee Credit</strong> part. Savings Credit on its own does not.</p><p><strong>HC2</strong> and <strong>HC3</strong> are certificates from the NHS Low Income Scheme.</p>',
      type: 'multi',
      options: [
        { value: 'uc', label: 'Universal Credit' },
        { value: 'esa', label: 'Income-related Employment and Support Allowance (ESA)' },
        { value: 'pcgc', label: 'Pension Credit Guarantee Credit' },
        { value: 'hc2', label: 'An HC2 certificate (full help with health costs)' },
        { value: 'hc3', label: 'An HC3 certificate (some help with health costs)' },
        { value: 'war', label: 'A War Pension or Armed Forces Compensation Scheme payment' },
        { value: 'none', label: 'None of these', exclusive: true },
      ],
    },
    {
      id: 'ucPay',
      kicker: 'Universal Credit',
      title: 'What was your take-home pay in your last Universal Credit assessment period?',
      hint: 'It is shown on your Universal Credit statement as "Your total take-home pay for this period". Include your partner if you claim together.',
      showIf: { benefits: ['uc'] },
      type: 'single',
      options: [
        { value: 'low', label: '£435 or less, including no earnings' },
        { value: 'mid', label: 'Between £435.01 and £935' },
        { value: 'high', label: 'More than £935' },
      ],
    },
    {
      id: 'ucExtra',
      kicker: 'Universal Credit',
      title: 'Does your Universal Credit include an amount for a child, or for limited capability for work?',
      showIf: { ucPay: ['mid'] },
      type: 'single',
      options: [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' },
        { value: 'unsure', label: "I'm not sure" },
      ],
    },
    {
      id: 'health',
      kicker: 'Your health',
      title: 'Do any of these apply to you?',
      hint: 'Tick all that apply.',
      help: '<p>The <strong>medical exemption list</strong> covers: cancer treatment or its effects; a permanent fistula needing a dressing or appliance; Addison\'s disease and other forms of hypoadrenalism; diabetes insipidus and other forms of hypopituitarism; diabetes treated with medicine; hypoparathyroidism; myasthenia gravis; an underactive thyroid needing thyroid hormone; and epilepsy needing continuous medicine.</p>',
      type: 'multi',
      options: [
        { value: 'medex', label: 'A condition on the medical exemption list', detail: 'Such as diabetes treated with medicine, an underactive thyroid, epilepsy or cancer. See "What this means".' },
        { value: 'disability', label: 'A physical disability that means I cannot go out without help from someone else' },
        { value: 'diabetes', label: 'Diabetes (any type)' },
        { value: 'glaucoma', label: 'Glaucoma, or an eye doctor has said I am at risk of it' },
        { value: 'familyGlaucoma', label: 'I am 40 or over and my parent, brother, sister or child has glaucoma' },
        { value: 'sight', label: 'I am registered as sight impaired or severely sight impaired' },
        { value: 'complex', label: 'I need very strong or complex glasses lenses' },
        { value: 'none', label: 'None of these', exclusive: true },
      ],
    },
    {
      id: 'savings',
      kicker: 'Money',
      title: 'Do you and your partner have less than £16,000 in savings?',
      hint: 'The limit is £23,250 if you live permanently in a care home. This helps us tell you about the NHS Low Income Scheme.',
      type: 'single',
      options: [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' },
        { value: 'unsure', label: "I'm not sure" },
      ],
    },
  ],
};

type Status = 'free' | 'some' | 'maybe' | 'pay';
interface Item {
  name: string;
  status: Status;
  reason: string;
}

const BAND: Record<Status, { band: string; level: string }> = {
  free: { band: 'Free', level: 'higher' },
  some: { band: 'Some help', level: 'lower' },
  maybe: { band: 'Check', level: 'lower' },
  pay: { band: 'You may have to pay', level: 'none' },
};

export function scoreNhs(a: Answers): ResultView {
  const v = (id: string) => a[id]?.values[0];
  const has = (id: string, value: string) => (a[id]?.values ?? []).includes(value);

  if (v('where') === 'scotland')
    return {
      tone: 'redirect',
      headline: 'In Scotland, prescriptions and eye tests are free for everyone',
      body: '<p>NHS prescriptions and NHS eye examinations are free for everyone registered with a GP in Scotland, and NHS dental check-ups are free too. Help with glasses, dental treatment and travel costs depends on your circumstances.</p>',
      next: [{ label: 'Help with health costs on NHS inform', href: 'https://www.nhsinform.scot/care-support-and-rights/health-rights/access/help-with-health-costs' }],
    };
  if (v('where') === 'ni')
    return {
      tone: 'redirect',
      headline: 'In Northern Ireland, prescriptions are free for everyone',
      body: '<p>NHS prescriptions are free for everyone registered with a GP in Northern Ireland. Help with eye tests, glasses, dental treatment and travel costs depends on your circumstances.</p>',
      next: [{ label: 'Help with health costs on nidirect', href: 'https://www.nidirect.gov.uk/articles/help-health-costs' }],
    };

  const wales = v('where') === 'wales';
  const age = v('age');
  const fullTime = v('education') === 'yes';
  const under16 = age === 'u16';
  const teenInEducation = (age === '16to17' || age === '18') && fullTime;
  const under18 = under16 || age === '16to17';
  const over60 = age === '60plus';
  const pregnant = v('pregnant') === 'yes';

  const uc = has('benefits', 'uc');
  const ucPay = v('ucPay');
  const ucExtra = v('ucExtra');
  const ucQualifies = uc && (ucPay === 'low' || (ucPay === 'mid' && ucExtra === 'yes'));
  const ucUnsure = uc && ucPay === 'mid' && ucExtra === 'unsure';
  const benefit = ucQualifies || has('benefits', 'esa') || has('benefits', 'pcgc') || has('benefits', 'hc2');
  const hc3 = has('benefits', 'hc3');
  const war = has('benefits', 'war');

  const medex = has('health', 'medex');
  const disability = has('health', 'disability');
  const eyeRisk = ['diabetes', 'glaucoma', 'familyGlaucoma', 'sight'].some((x) => has('health', x));
  const complex = has('health', 'complex');

  const benefitReason = ucQualifies
    ? 'you get Universal Credit and your earnings are within the limit'
    : has('benefits', 'hc2')
      ? 'you have an HC2 certificate'
      : has('benefits', 'pcgc')
        ? 'you get Pension Credit Guarantee Credit'
        : 'you get income-related ESA';

  // Prescriptions
  let rx: Item;
  if (wales) rx = { name: 'Prescriptions', status: 'free', reason: 'Prescriptions are free for everyone registered with a GP in Wales.' };
  else if (under16) rx = { name: 'Prescriptions', status: 'free', reason: 'Because you are under 16.' };
  else if (teenInEducation) rx = { name: 'Prescriptions', status: 'free', reason: 'Because you are 16 to 18 and in full-time education.' };
  else if (over60) rx = { name: 'Prescriptions', status: 'free', reason: 'Because you are 60 or over.' };
  else if (benefit) rx = { name: 'Prescriptions', status: 'free', reason: `Because ${benefitReason}.` };
  else if (medex || disability) rx = { name: 'Prescriptions', status: 'free', reason: 'With a medical exemption certificate (MedEx). Ask your GP surgery for form FP92A.' };
  else if (pregnant) rx = { name: 'Prescriptions', status: 'free', reason: 'With a maternity exemption certificate (MatEx). Ask your midwife, doctor or health visitor.' };
  else if (hc3) rx = { name: 'Prescriptions', status: 'some', reason: 'Your HC3 certificate shows how much you need to pay.' };
  else if (war || ucUnsure) rx = { name: 'Prescriptions', status: 'maybe', reason: war ? 'Free for medicines for your accepted war or service disability.' : 'Check your Universal Credit statement to see if it includes a child or limited capability for work amount.' };
  else rx = { name: 'Prescriptions', status: 'pay', reason: 'A prescription prepayment certificate can save money if you need 2 or more items a month.' };

  // Sight tests
  let sight: Item;
  if (under16) sight = { name: 'NHS sight tests', status: 'free', reason: 'Because you are under 16.' };
  else if (teenInEducation) sight = { name: 'NHS sight tests', status: 'free', reason: 'Because you are 16 to 18 and in full-time education.' };
  else if (over60) sight = { name: 'NHS sight tests', status: 'free', reason: 'Because you are 60 or over.' };
  else if (eyeRisk) sight = { name: 'NHS sight tests', status: 'free', reason: 'Because of your eye health or your family history of glaucoma.' };
  else if (complex) sight = { name: 'NHS sight tests', status: 'free', reason: 'Because you need complex lenses.' };
  else if (benefit) sight = { name: 'NHS sight tests', status: 'free', reason: `Because ${benefitReason}.` };
  else if (hc3) sight = { name: 'NHS sight tests', status: 'some', reason: 'Your HC3 certificate may cover part of the cost.' };
  else if (ucUnsure) sight = { name: 'NHS sight tests', status: 'maybe', reason: 'It depends on whether your Universal Credit includes a child or limited capability for work amount.' };
  else sight = { name: 'NHS sight tests', status: 'pay', reason: wales ? 'Wales also offers free eye examinations for some people with eye problems. Ask your optometrist.' : 'Many opticians offer low-cost or free tests as a promotion.' };

  // Glasses and contact lens vouchers
  let glasses: Item;
  if (under16) glasses = { name: 'Vouchers for glasses', status: 'free', reason: 'You can get a voucher because you are under 16.' };
  else if (teenInEducation) glasses = { name: 'Vouchers for glasses', status: 'free', reason: 'You can get a voucher because you are 16 to 18 and in full-time education.' };
  else if (benefit) glasses = { name: 'Vouchers for glasses', status: 'free', reason: `You can get a voucher because ${benefitReason}.` };
  else if (complex) glasses = { name: 'Vouchers for glasses', status: 'free', reason: 'You can get a voucher because you need complex lenses.' };
  else if (hc3) glasses = { name: 'Vouchers for glasses', status: 'some', reason: 'Your HC3 certificate may give you a smaller voucher.' };
  else if (ucUnsure) glasses = { name: 'Vouchers for glasses', status: 'maybe', reason: 'It depends on your Universal Credit. See the note below.' };
  else glasses = { name: 'Vouchers for glasses', status: 'pay', reason: 'Vouchers depend on age, benefits or complex lenses. Being over 60 on its own does not give you a voucher.' };

  // Dental
  let dental: Item;
  if (under18) dental = { name: 'NHS dental treatment', status: 'free', reason: 'Because you are under 18.' };
  else if (age === '18' && fullTime) dental = { name: 'NHS dental treatment', status: 'free', reason: 'Because you are 18 and in full-time education.' };
  else if (pregnant) dental = { name: 'NHS dental treatment', status: 'free', reason: 'Because you are pregnant or have had a baby in the last 12 months. Show your MatEx certificate or proof.' };
  else if (benefit) dental = { name: 'NHS dental treatment', status: 'free', reason: `Because ${benefitReason}.` };
  else if (hc3) dental = { name: 'NHS dental treatment', status: 'some', reason: 'Your HC3 certificate shows how much you need to pay.' };
  else if (wales && (age === '18' || age === '19to24' || over60)) dental = { name: 'NHS dental treatment', status: 'some', reason: 'In Wales, dental check-ups are free if you are under 25 or 60 or over. You pay for other treatment.' };
  else if (ucUnsure) dental = { name: 'NHS dental treatment', status: 'maybe', reason: 'It depends on your Universal Credit. See the note below.' };
  else dental = { name: 'NHS dental treatment', status: 'pay', reason: 'You pay NHS dental charges, which are much lower than private fees.' };

  // Travel to hospital
  let travel: Item;
  if (benefit) travel = { name: 'Travel costs to hospital', status: 'free', reason: 'If a GP, dentist or consultant has referred you for NHS treatment. Claim at the hospital.' };
  else if (hc3) travel = { name: 'Travel costs to hospital', status: 'some', reason: 'Your HC3 certificate may cover part of the cost.' };
  else if (ucUnsure) travel = { name: 'Travel costs to hospital', status: 'maybe', reason: 'It depends on your Universal Credit.' };
  else travel = { name: 'Travel costs to hospital', status: 'pay', reason: 'Some hospitals offer free or cheaper parking for people with a Blue Badge or frequent appointments.' };

  // Wigs and fabric supports
  let wigs: Item;
  if (under16 || teenInEducation) wigs = { name: 'NHS wigs and fabric supports', status: 'free', reason: 'Because of your age and education.' };
  else if (benefit) wigs = { name: 'NHS wigs and fabric supports', status: 'free', reason: `Because ${benefitReason}.` };
  else if (hc3) wigs = { name: 'NHS wigs and fabric supports', status: 'some', reason: 'Your HC3 certificate may cover part of the cost.' };
  else wigs = { name: 'NHS wigs and fabric supports', status: 'pay', reason: 'They are free if you are a hospital inpatient.' };

  const items = [rx, sight, glasses, dental, travel, wigs];
  const freeCount = items.filter((i) => i.status === 'free').length;

  const notes: string[] = [];
  if (freeCount)
    notes.push(`<p>From your answers, you may be able to get <strong>${freeCount} of these ${items.length} for free</strong>. Tell the pharmacy, optician, dentist or hospital why you do not have to pay, and be ready to show proof.</p>`);
  else notes.push('<p>From your answers, you may have to pay for most NHS health costs. There are still ways to save money.</p>');
  if (ucUnsure)
    notes.push('<p><strong>Check your Universal Credit statement.</strong> If it includes an amount for a child, or for limited capability for work, and your take-home pay was £935 or less, you can get free prescriptions, dental treatment, sight tests, glasses vouchers and travel costs.</p>');
  if (uc) notes.push('<p>Universal Credit earnings are checked <strong>each month</strong>, so check your latest statement every time you claim free treatment.</p>');
  if (!wales && rx.status === 'pay')
    notes.push('<p>A <strong>prescription prepayment certificate (PPC)</strong> covers all your prescriptions for 3 or 12 months for a fixed price, and you can pay for the 12 month one in monthly instalments. There is also a cheaper PPC just for HRT.</p>');
  if (!benefit && !hc3 && v('savings') !== 'no')
    notes.push('<p>If your income is low, apply to the <strong>NHS Low Income Scheme</strong> using form HC1. You may get an HC2 certificate (full help) or HC3 certificate (some help). You can apply online.</p>');
  notes.push('<p class="small muted"><strong>Always check before you tick a box.</strong> If you claim free treatment and are not entitled to it, you may have to pay a penalty charge of up to £100 as well as the charge. This check is a guide, not a decision. Your answers have not been sent anywhere.</p>');

  const scores: ScoreCard[] = items.map((i) => ({ name: i.name, band: BAND[i.status].band, level: BAND[i.status].level, amount: i.reason }));

  return {
    tone: freeCount ? 'good' : 'maybe',
    headline: freeCount ? `You may be able to get ${freeCount} of ${items.length} NHS costs for free` : 'You may need to pay for most NHS costs, but you could still save',
    body: notes.join(''),
    scores,
    table: {
      heading: 'Your answers',
      rows: nhsChecker.steps.filter((s) => a[s.id]).map((s) => ({ label: s.title, answer: a[s.id].labels.join(', ') })),
    },
    next: [
      { label: 'Help with NHS health costs', href: '/support/health-costs/' },
      { label: 'Free prescriptions', href: '/support/health-costs/prescriptions/' },
      { label: 'NHS Low Income Scheme', href: '/support/health-costs/low-income-scheme/' },
    ],
  };
}
