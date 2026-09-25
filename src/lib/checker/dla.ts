/**
 * DLA for children check (under 16, England and Wales).
 *
 * Care component (sections 72 and 72(1A) Social Security Contributions and Benefits Act 1992):
 *   Lowest: attention for a significant part of the day.
 *   Middle: day condition (frequent attention or continual supervision) OR night condition.
 *   Highest: day AND night conditions, or terminal illness.
 * For children, the needs must be substantially more than a child of the same age without a disability.
 * Mobility: higher rate from age 3, lower rate from age 5.
 */
import rates from '../../data/rates.json';
import type { Answers, CheckerDefinition, ResultView, ScoreCard } from './types';

export const dlaChecker: CheckerDefinition = {
  id: 'dla',
  name: 'DLA for children check',
  steps: [
    {
      id: 'age',
      kicker: 'About your child',
      title: 'How old is your child?',
      type: 'single',
      options: [
        { value: 'baby', label: 'Under 3 months old' },
        { value: 'toddler', label: '3 months to 2 years old' },
        { value: 'three', label: '3 or 4 years old' },
        { value: 'five', label: '5 to 15 years old' },
        { value: 'sixteen', label: '16 or over', stop: true },
      ],
    },
    {
      id: 'where',
      kicker: 'About your child',
      title: 'Where does your child live?',
      type: 'single',
      options: [
        { value: 'ew', label: 'England or Wales' },
        { value: 'scotland', label: 'Scotland', stop: true },
        { value: 'ni', label: 'Northern Ireland' },
        { value: 'abroad', label: 'Outside the UK', stop: true },
      ],
    },
    {
      id: 'terminal',
      kicker: 'About your child',
      title: 'Has a doctor or nurse said your child may have 12 months or less to live?',
      hint: 'You do not have to answer this if you would rather not.',
      type: 'single',
      options: [
        { value: 'no', label: 'No' },
        { value: 'yes', label: 'Yes' },
        { value: 'skip', label: "I'd rather not say" },
      ],
    },
    {
      id: 'duration',
      kicker: 'About your child',
      title: 'How long has your child needed extra help?',
      type: 'single',
      options: [
        { value: 'long', label: 'At least 3 months, and it is likely to last at least 6 more months' },
        { value: 'short', label: 'Less than 3 months so far', detail: 'You can start a claim, but DLA is usually only paid once the needs have lasted 3 months.' },
      ],
    },
    {
      id: 'more',
      kicker: 'Compared with other children',
      title: 'Compared with children of the same age without a disability, how much extra help or watching over does your child need?',
      help: '<p>All young children need a lot of care. DLA is about the <strong>extra</strong> care your child needs because of their condition. For example, a 2 year old needs help to dress, but most do not need help taking medicines through the day, or someone watching them constantly because of seizures.</p>',
      type: 'single',
      options: [
        { value: 'same', label: 'About the same as other children', level: 0 },
        { value: 'bit', label: 'A bit more', level: 1 },
        { value: 'lot', label: 'A lot more', level: 2 },
      ],
    },
    {
      id: 'day',
      kicker: 'During the day',
      title: 'During the day, how much extra help does your child need with personal care or staying safe?',
      hint: 'Personal care means things like washing, dressing, eating, using the toilet, taking medicines, moving about and communicating.',
      type: 'single',
      options: [
        { value: 'none', label: 'No more than other children their age', level: 0 },
        { value: 'some', label: 'For some of the day, adding up to about an hour or more', level: 1 },
        { value: 'frequent', label: 'Often, spread throughout the day', level: 2 },
        { value: 'continual', label: 'They need watching nearly all the time to keep them or others safe', level: 2 },
      ],
    },
    {
      id: 'night',
      kicker: 'During the night',
      title: 'At night, how much extra help does your child need?',
      type: 'single',
      options: [
        { value: 'none', label: 'No more than other children their age', level: 0 },
        { value: 'repeated', label: 'Once most nights for 20 minutes or more, or twice or more most nights', level: 2 },
        { value: 'watch', label: 'Someone needs to be awake for long periods, or often, to watch over them', level: 2 },
      ],
    },
    {
      id: 'walking',
      kicker: 'Getting around',
      title: 'Which of these best describes your child outdoors?',
      showIf: { age: ['three', 'five'] },
      type: 'single',
      options: [
        { value: 'ok', label: 'They walk about as well as other children their age', level: 0 },
        {
          value: 'cannot',
          label: "They can't walk, or can hardly walk",
          detail: 'For example because of severe pain, breathlessness, exhaustion, or it would be dangerous to their health.',
          level: 2,
        },
        { value: 'sight', label: 'They are severely sight impaired (blind)', level: 2 },
        { value: 'deafblind', label: 'They are both deaf and blind', level: 2 },
        {
          value: 'behaviour',
          label: 'They have a severe learning disability or brain condition, and severe behaviour problems outdoors',
          detail: 'For example they may run off or become physically aggressive, and need someone with them all the time.',
          level: 1,
        },
      ],
    },
    {
      id: 'guidance',
      kicker: 'Getting around',
      title: 'On routes they do not know, does your child need someone with them outdoors, much more than other children their age?',
      hint: 'For example because of anxiety, learning disability, autism, hearing loss or seizures.',
      showIf: { age: ['five'] },
      type: 'single',
      options: [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' },
      ],
    },
  ],
};

const money = (n: number) => `£${n.toFixed(2)}`;
const weekly = (n: number) => `${money(n)} a week (${money(n * 4)} every 4 weeks)`;

export function scoreDla(a: Answers): ResultView {
  const r = rates.dla;
  const v = (id: string) => a[id]?.values[0];

  if (v('age') === 'sixteen')
    return {
      tone: 'redirect',
      headline: 'At 16 or over, young people claim PIP instead',
      body: '<p>DLA for children stops at 16. Young people aged 16 or over claim Personal Independence Payment (PIP). If your child already gets DLA, they will be invited to claim PIP around their 16th birthday.</p>',
      next: [{ label: 'Try the PIP points self-check', href: '/benefits/pip/points-checker/' }],
    };
  if (v('where') === 'scotland')
    return {
      tone: 'redirect',
      headline: 'In Scotland, DLA for children has been replaced by Child Disability Payment',
      body: '<p>Child Disability Payment is paid by Social Security Scotland. The rules are similar, but you apply through Social Security Scotland.</p>',
      next: [{ label: 'Child Disability Payment on mygov.scot', href: 'https://www.mygov.scot/child-disability-payment' }],
    };
  if (v('where') === 'abroad')
    return {
      tone: 'redirect',
      headline: 'Your child usually needs to live in the UK to get DLA',
      body: '<p>Children normally need to live in Great Britain, and those aged 3 or over need to have lived here for at least 2 of the last 3 years. There are some exceptions, so ask the DLA helpline or an adviser.</p>',
      next: [{ label: 'DLA for children on GOV.UK', href: 'https://www.gov.uk/disability-living-allowance-children' }],
    };

  const ageBand = v('age');
  const terminal = v('terminal') === 'yes';
  const moreLevel = a.more?.level ?? 0;
  const day = a.day?.level ?? 0;
  const nightMet = (a.night?.level ?? 0) >= 2;
  const dayMet = day >= 2;

  // Care component
  let care: { band: string; level: string; amount: number };
  if (terminal) care = { band: 'Highest rate (special rules)', level: 'highest', amount: r.careHighest };
  else if (moreLevel === 0) care = { band: 'May not qualify', level: 'none', amount: 0 };
  else if (dayMet && nightMet) care = { band: 'Highest rate', level: 'highest', amount: r.careHighest };
  else if (dayMet || nightMet) care = { band: 'Middle rate', level: 'middle', amount: r.careMiddle };
  else if (day === 1) care = { band: 'Lowest rate', level: 'lowest', amount: r.careLowest };
  else care = { band: 'May not qualify', level: 'none', amount: 0 };

  // Mobility component
  const walking = v('walking');
  let mobility: { band: string; level: string; amount: number } | null = null;
  if (ageBand === 'three' || ageBand === 'five') {
    const behaviourHigher = walking === 'behaviour' && care.level === 'highest';
    if (walking === 'cannot' || walking === 'sight' || walking === 'deafblind' || behaviourHigher)
      mobility = { band: 'Higher rate', level: 'higher', amount: r.mobilityHigher };
    else if (ageBand === 'five' && (v('guidance') === 'yes' || walking === 'behaviour'))
      mobility = { band: 'Lower rate', level: 'lower', amount: r.mobilityLower };
    else mobility = { band: 'May not qualify', level: 'none', amount: 0 };
  }

  const total = care.amount + (mobility?.amount ?? 0);
  const tone: ResultView['tone'] = total > 0 ? 'good' : moreLevel > 0 ? 'maybe' : 'unlikely';
  const headline =
    total > 0
      ? `Your child may be able to get about ${money(total)} a week from DLA`
      : moreLevel > 0
        ? 'It may be worth getting advice before you decide'
        : 'From these answers, your child may not qualify at the moment';

  const notes: string[] = [];
  if (terminal)
    notes.push('<p>Because a doctor or nurse has said your child may have 12 months or less to live, you can claim under the <strong>special rules</strong>. The highest care rate is paid straight away with no waiting period. Ask your child\'s doctor or nurse for an SR1 form.</p>');
  if (moreLevel === 0 && !terminal)
    notes.push('<p>DLA is about the <strong>extra</strong> help a child needs compared with other children of the same age. If your child\'s needs grow, you can check again at any time.</p>');
  if (ageBand === 'baby')
    notes.push('<p>The care part of DLA can usually be paid from 3 months old. You can start a claim before then.</p>');
  if (ageBand === 'toddler')
    notes.push('<p>The mobility part of DLA can be paid from age 3 (higher rate) or 5 (lower rate), so only the care part applies for now.</p>');
  if (ageBand === 'three')
    notes.push('<p>The lower rate of mobility can only be paid from age 5, so it is not included yet.</p>');
  if (walking === 'behaviour' && care.level !== 'highest')
    notes.push('<p>The higher mobility rate for severe behaviour problems also needs your child to get the highest care rate, so we have shown the lower rate instead.</p>');
  if (v('duration') === 'short')
    notes.push('<p>You said the extra needs started less than 3 months ago. DLA is usually only paid once they have lasted 3 months, so you may need to wait a little before it starts.</p>');
  if (total > 0)
    notes.push('<p>Getting DLA for a child can also open the door to other help, such as Carer\'s Allowance for you, extra Universal Credit or Child Tax Credit, and a Blue Badge.</p>');
  notes.push('<p class="small muted"><strong>This is an estimate, not a decision.</strong> Only the Department for Work and Pensions (DWP) can decide. Your answers have not been sent anywhere.</p>');

  const scores: ScoreCard[] = [
    { name: 'Care part', band: care.band, level: care.level, amount: care.amount ? weekly(care.amount) : undefined },
  ];
  if (mobility) scores.push({ name: 'Mobility part', band: mobility.band, level: mobility.level, amount: mobility.amount ? weekly(mobility.amount) : undefined });

  return {
    tone,
    headline,
    body: notes.join(''),
    scores,
    table: {
      heading: 'Your answers',
      rows: dlaChecker.steps.filter((s) => a[s.id]).map((s) => ({ label: s.title, answer: a[s.id].labels.join(', ') })),
    },
    next: [
      { label: 'How to claim DLA for a child', href: '/benefits/dla/how-to-claim/' },
      { label: 'Read about DLA for children', href: '/benefits/dla/' },
    ],
  };
}
