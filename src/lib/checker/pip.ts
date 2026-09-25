/**
 * PIP points self-check.
 *
 * Descriptors and points follow Schedule 1 of the Social Security (Personal
 * Independence Payment) Regulations 2013, rewritten in plain English.
 * If the Timms Review changes the rules, update the points here and the
 * scoring thresholds in scorePip().
 */
import rates from '../../data/rates.json';
import type { Answers, CheckerDefinition, CheckerStep, ResultView } from './types';

const RELIABLY = `<p>Only count something as a thing you <strong>can</strong> do if you can do it:</p>
<ul>
<li><strong>safely</strong>, without risk of harm to you or anyone else</li>
<li><strong>to a good enough standard</strong></li>
<li><strong>again and again</strong>, as often as you need to</li>
<li><strong>in a reasonable time</strong>, no more than about twice as long as someone without your condition</li>
</ul>
<p>If pain, tiredness or a flare afterwards means you can't do it like this, count it as something you can't do.</p>`;

const MOST_DAYS = `<p>Think about <strong>most days</strong>, meaning more than half of the days over a year. If your condition changes from day to day, pick the answer that is true on more than half of days, not just your best or worst day.</p>`;

const AID = `<p>An <strong>aid or appliance</strong> is anything that helps you do the task, such as a perching stool, a grab rail or a long-handled sponge. It still counts if you need one but do not have one yet.</p>`;

const PROMPT = `<p><strong>Prompting</strong> means someone reminding you, encouraging you or explaining what to do. <strong>Supervision</strong> means someone needs to be there to keep you safe. <strong>Help</strong> (or assistance) means someone physically doing part of it for you.</p>`;

const activity = (
  n: number,
  id: string,
  component: 'Daily living' | 'Mobility',
  title: string,
  hint: string,
  extraHelp: string,
  options: [string, number, string, string?][],
): CheckerStep => ({
  id,
  kicker: `${component} activity ${n} of 12`,
  title,
  hint,
  help: extraHelp + MOST_DAYS + RELIABLY,
  type: 'single',
  options: options.map(([value, points, label, detail]) => ({ value, points, label, detail })),
});

export const pipChecker: CheckerDefinition = {
  id: 'pip',
  name: 'PIP points self-check',
  steps: [
    {
      id: 'age',
      kicker: 'About you',
      title: 'How old are you?',
      type: 'single',
      options: [
        { value: 'under16', label: 'Under 16', stop: true },
        { value: 'working', label: '16 or over, but under State Pension age' },
        {
          value: 'spa',
          label: 'State Pension age or over',
          detail: 'State Pension age is 66 and is rising to 67 between 2026 and 2028.',
          stop: true,
        },
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
      id: 'duration',
      kicker: 'About you',
      title: 'How long have you had these difficulties?',
      hint: 'PIP is for long-term conditions. You need to have had difficulties for at least 3 months and expect them to last at least another 9 months.',
      type: 'single',
      options: [
        { value: 'long', label: 'At least 3 months, and I expect them to last at least 9 more months' },
        { value: 'short', label: 'Less than 3 months so far', detail: 'You can still start a claim, but it can only be paid once you reach 3 months.' },
        {
          value: 'terminal',
          label: 'A doctor or nurse has said I may have 12 months or less to live',
          detail: 'There are special, faster rules for you. You would get the higher daily living rate without an assessment.',
        },
      ],
    },
    activity(1, 'a1', 'Daily living', 'Preparing a simple meal', 'This means making a simple hot meal for one person from fresh ingredients, such as peeling and chopping vegetables and cooking them on a hob or in an oven. It is about whether you can, not whether you usually do.', AID + PROMPT, [
      ['a', 0, 'I can prepare and cook a simple meal without help'],
      ['b', 2, 'I need an aid or appliance to do it', 'For example a perching stool, light pans, easy-grip knives or a kettle tipper.'],
      ['c', 2, "I can't use a cooker, but I can make a simple meal with a microwave"],
      ['d', 2, 'I need someone to prompt me to prepare or cook a meal', 'For example because of low mood, poor memory or brain fog.'],
      ['e', 4, 'I need someone to watch over me or help me to prepare or cook a meal', 'For example to stop you burning yourself, or to lift pans or chop food.'],
      ['f', 8, "I can't prepare and cook food at all"],
    ]),
    activity(2, 'a2', 'Daily living', 'Eating and drinking', 'This means cutting up food, getting food and drink to your mouth, chewing and swallowing.', AID + PROMPT, [
      ['a', 0, 'I can eat and drink without help'],
      ['b', 2, 'I need an aid, someone to watch me while I eat, or someone to cut up my food', 'An aid could be adapted cutlery or a special cup.'],
      ['c', 2, 'I need a feeding tube or similar, which I can manage myself'],
      ['d', 4, 'I need someone to prompt me to eat or drink'],
      ['e', 6, 'I need someone to help me manage a feeding tube or similar'],
      ['f', 10, "I can't get food and drink to my mouth. Someone has to do it for me"],
    ]),
    activity(3, 'a3', 'Daily living', 'Managing medicines and treatment', 'This means taking medicines at the right time and dose, noticing changes in your health, and doing treatment at home that a health professional has prescribed, such as physiotherapy exercises.', AID + PROMPT, [
      ['a', 0, "I can manage my medicines and treatment without help, or I don't need any"],
      ['b', 1, 'I need an aid to manage my medicines', 'For example a pill organiser (dosette box) or a phone alarm.'],
      ['c', 1, 'I need someone to prompt me, watch over me or help me to take medicines or check my condition'],
      ['d', 2, 'I need help with treatment at home for up to 3.5 hours a week'],
      ['e', 4, 'I need help with treatment at home for more than 3.5 hours and up to 7 hours a week'],
      ['f', 6, 'I need help with treatment at home for more than 7 hours and up to 14 hours a week'],
      ['g', 8, 'I need help with treatment at home for 14 hours a week or more'],
    ]),
    activity(4, 'a4', 'Daily living', 'Washing and bathing', 'This means washing your face, hair and body, and getting in and out of a normal bath or shower (not an adapted one).', AID + PROMPT, [
      ['a', 0, 'I can wash and bathe without help'],
      ['b', 2, 'I need an aid or appliance to wash or bathe', 'For example a shower seat, bath board, grab rail or long-handled sponge.'],
      ['c', 2, 'I need someone to prompt me or watch over me to wash or bathe'],
      ['d', 2, 'I need help to wash my hair or the lower half of my body'],
      ['e', 3, 'I need help to get in or out of a bath or shower'],
      ['f', 4, 'I need help to wash my body between my shoulders and waist'],
      ['g', 8, "I can't wash at all. Someone has to wash my whole body for me"],
    ]),
    activity(5, 'a5', 'Daily living', 'Using the toilet', 'This means getting on and off the toilet, and cleaning yourself afterwards. It also covers managing incontinence.', AID + PROMPT, [
      ['a', 0, 'I can use the toilet without help'],
      ['b', 2, 'I need an aid or appliance to use the toilet', 'For example a raised toilet seat, grab rails, a commode or incontinence pads you can manage yourself.'],
      ['c', 2, 'I need someone to prompt me or watch over me to use the toilet'],
      ['d', 4, 'I need someone to help me use the toilet', 'For example getting on or off, or cleaning yourself.'],
      ['e', 6, 'I need help to manage incontinence of my bladder or my bowel'],
      ['f', 8, 'I need help to manage incontinence of both my bladder and my bowel'],
    ]),
    activity(6, 'a6', 'Daily living', 'Dressing and undressing', 'This means choosing suitable clothes and putting them on and taking them off, including socks and shoes.', AID + PROMPT, [
      ['a', 0, 'I can dress and undress without help'],
      ['b', 2, 'I need an aid or appliance to dress or undress', 'For example a button hook, sock aid, long shoe horn, or needing to sit down.'],
      ['c', 2, 'I need someone to prompt me to dress or undress, or to help me choose suitable clothes', 'For example knowing when to change, or what to wear for the weather.'],
      ['d', 2, 'I need help to dress or undress the lower half of my body'],
      ['e', 4, 'I need help to dress or undress the upper half of my body'],
      ['f', 8, "I can't dress or undress at all"],
    ]),
    activity(7, 'a7', 'Daily living', 'Talking, listening and understanding', 'This means speaking to people and understanding what they say to you, in your own language.', '<p><strong>Communication support</strong> means help from someone trained, such as a sign language interpreter, or from someone who knows you well and helps you understand or be understood.</p>', [
      ['a', 0, 'I can speak, hear and understand without help'],
      ['b', 2, 'I need an aid to speak or hear', 'For example a hearing aid.'],
      ['c', 4, 'I need support to understand or explain complicated information'],
      ['d', 8, 'I need support to understand or explain basic information', 'Basic means a simple sentence, such as "the bus is late".'],
      ['e', 12, "I can't understand or express spoken information at all, even with support"],
    ]),
    activity(8, 'a8', 'Daily living', 'Reading and understanding', 'This means reading and understanding signs, symbols and written words in your own language, in normal size print.', PROMPT, [
      ['a', 0, 'I can read and understand, using glasses or contact lenses if I need them'],
      ['b', 2, 'I need an aid other than glasses or contact lenses', 'For example a magnifier or large print.'],
      ['c', 2, 'I need someone to prompt me to read or understand complicated written information', 'Complicated means more than one sentence, such as a letter or a bill.'],
      ['d', 4, 'I need someone to prompt me to read or understand basic written information', 'Basic means signs, symbols and dates.'],
      ['e', 8, "I can't read or understand signs, symbols or words at all"],
    ]),
    activity(9, 'a9', 'Daily living', 'Mixing with other people', 'This means meeting people face to face, talking with them, understanding their body language and building relationships.', '<p><strong>Social support</strong> means help from someone trained or someone who knows you well, who needs to be there to help you mix with people.</p>' + PROMPT, [
      ['a', 0, 'I can mix with other people without help'],
      ['b', 2, 'I need someone to prompt me to mix with other people'],
      ['c', 4, 'I need social support to mix with other people'],
      ['d', 8, "I can't mix with other people because it causes me overwhelming distress, or I may act in a way that puts me or others at serious risk"],
    ]),
    activity(10, 'a10', 'Daily living', 'Managing money', 'This means working out the cost of things, handling change, and planning a budget and paying bills.', PROMPT, [
      ['a', 0, 'I can manage money and bills without help'],
      ['b', 2, 'I need someone to prompt me or help me with complicated money decisions', 'For example planning a budget, paying bills or saving for something.'],
      ['c', 4, 'I need someone to prompt me or help me with simple money decisions', 'For example working out the cost of shopping and the right change.'],
      ['d', 6, "I can't make any money decisions at all"],
    ]),
    activity(11, 'a11', 'Mobility', 'Planning and following a journey', 'This is about mental, thinking and sensory difficulties, such as anxiety, memory problems, brain fog or sight loss. Physical difficulty walking is covered in the next question.', '<p>A <strong>navigation aid</strong> is something like a guide cane or a specialist device. An ordinary map or phone map does not count.</p>' + PROMPT, [
      ['a', 0, 'I can plan and follow a journey without help'],
      ['b', 4, 'I need someone to prompt me to go out, or I would feel overwhelming distress'],
      ['c', 8, "I can't plan the route of a journey"],
      ['d', 10, "I can't follow the route of an unfamiliar journey without another person, an assistance dog or a navigation aid"],
      ['e', 10, "I can't go on any journey because it would cause me overwhelming distress"],
      ['f', 12, "I can't follow the route of a familiar journey without another person, an assistance dog or a navigation aid"],
    ]),
    activity(12, 'a12', 'Mobility', 'Moving around', 'This means standing up and then walking (or moving) outdoors on flat ground. As a guide, 20 metres is about the length of two cars parked end to end with a gap, 50 metres is the length of an Olympic swimming pool, and 200 metres is about two football pitches.', '<p>An <strong>aid</strong> here means something like a walking stick, crutches or a walking frame. If you use a manual wheelchair because you cannot walk far, count how far you can walk, not how far you can wheel.</p>', [
      ['a', 0, 'I can stand and then move more than 200 metres'],
      ['b', 4, 'I can stand and then move more than 50 metres, but no more than 200 metres'],
      ['c', 8, 'I can stand and then move more than 20 metres, but no more than 50 metres, without an aid'],
      ['d', 10, 'I can stand and then move more than 20 metres, but no more than 50 metres, only with an aid'],
      ['e', 12, 'I can stand and then move more than 1 metre, but no more than 20 metres', 'With or without an aid.'],
      ['f', 12, "I can't stand, or I can't move more than 1 metre"],
    ]),
  ],
};

const DAILY = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'a10'];
const MOBILITY = ['a11', 'a12'];

const money = (n: number) => `£${n.toFixed(2)}`;
const perWeek = (n: number) => `${money(n)} a week (${money(n * 4)} every 4 weeks)`;

function band(points: number): { band: string; level: string } {
  if (points >= 12) return { band: 'Enhanced rate', level: 'enhanced' };
  if (points >= 8) return { band: 'Standard rate', level: 'standard' };
  return { band: 'Below 8 points', level: 'none' };
}

export function scorePip(a: Answers): ResultView {
  const age = a.age?.values[0];
  const where = a.where?.values[0];

  if (age === 'under16')
    return {
      tone: 'redirect',
      headline: 'Children under 16 claim DLA, not PIP',
      body: '<p>Disability Living Allowance (DLA) is the benefit for children under 16. A parent or carer usually makes the claim. When your child turns 16 they will be invited to claim PIP.</p>',
      next: [
        { label: 'Try the DLA for children check', href: '/benefits/dla/checker/' },
        { label: 'Read about DLA for children', href: '/benefits/dla/' },
      ],
    };
  if (age === 'spa')
    return {
      tone: 'redirect',
      headline: 'Over State Pension age? Attendance Allowance is usually the one to claim',
      body: '<p>You usually can\'t make a new PIP claim once you reach State Pension age. Attendance Allowance is the benefit for people over State Pension age who need help with personal care.</p><p>If you already get PIP, you can usually keep it after you reach State Pension age.</p>',
      next: [
        { label: 'Try the Attendance Allowance check', href: '/benefits/attendance-allowance/checker/' },
        { label: 'Read about Attendance Allowance', href: '/benefits/attendance-allowance/' },
      ],
    };
  if (where === 'scotland')
    return {
      tone: 'redirect',
      headline: 'In Scotland, PIP has been replaced by Adult Disability Payment',
      body: '<p>Adult Disability Payment is paid by Social Security Scotland. It uses the same activities and points as PIP, so this self-check can still give you a rough idea, but you apply through Social Security Scotland.</p>',
      next: [{ label: 'Adult Disability Payment on mygov.scot', href: 'https://www.mygov.scot/adult-disability-payment' }],
    };
  if (where === 'abroad')
    return {
      tone: 'redirect',
      headline: 'You usually need to live in the UK to get PIP',
      body: '<p>To claim PIP you normally need to live in England, Scotland or Wales and to have lived in Great Britain for at least 2 of the last 3 years. There are some exceptions, for example for some people living in the EU who already get UK benefits. Contact the Disability Benefits Centre or an adviser to check your situation.</p>',
      next: [{ label: 'PIP eligibility on GOV.UK', href: 'https://www.gov.uk/pip/eligibility' }],
    };

  const pts = (ids: string[]) => ids.reduce((sum, id) => sum + (a[id]?.points ?? 0), 0);
  const daily = pts(DAILY);
  const mobility = pts(MOBILITY);
  const terminal = a.duration?.values[0] === 'terminal';
  const d = terminal ? { band: 'Enhanced rate (special rules)', level: 'enhanced' } : band(daily);
  const m = band(mobility);
  const r = rates.pip;
  const dailyAmount = d.level === 'enhanced' ? r.dailyEnhanced : d.level === 'standard' ? r.dailyStandard : 0;
  const mobilityAmount = m.level === 'enhanced' ? r.mobilityEnhanced : m.level === 'standard' ? r.mobilityStandard : 0;
  const total = dailyAmount + mobilityAmount;
  const anyAward = total > 0;
  const close = !anyAward && (daily >= 5 || mobility >= 5);

  let headline: string;
  let tone: ResultView['tone'];
  if (anyAward) {
    headline = `You may be able to get about ${money(total)} a week from PIP`;
    tone = 'good';
  } else if (close) {
    headline = 'You are close to the 8 points needed for PIP';
    tone = 'maybe';
  } else {
    headline = 'From these answers, you may not score enough points for PIP';
    tone = 'unlikely';
  }

  const notes: string[] = [];
  if (anyAward)
    notes.push(
      `<p>Based on your answers, you may score <strong>${daily} points for daily living</strong> and <strong>${mobility} points for mobility</strong>. If the DWP agreed, that could mean about <strong>${perWeek(total)}</strong> at ${rates.taxYear} rates.</p>`,
    );
  else
    notes.push(
      `<p>You scored <strong>${daily} points for daily living</strong> and <strong>${mobility} points for mobility</strong>. You need at least 8 points in one part to get PIP.</p>`,
    );
  if (close || tone === 'unlikely')
    notes.push(
      '<p>Before you decide not to claim, go back and check each answer against the <strong>reliability rules</strong>. Many people, especially with conditions that come and go like fibromyalgia, pick the answer for what they can do once, on a good day. Ask yourself whether you could do it safely, well, again and again, and in a reasonable time on most days. If not, a higher answer may apply.</p>',
    );
  if (terminal)
    notes.push(
      '<p>Because a doctor or nurse has said you may have 12 months or less to live, you can claim under the <strong>special rules</strong>. You will get the enhanced daily living rate without a face to face assessment. Ask your doctor or nurse for an SR1 form. Mobility is still decided on your needs.</p>',
    );
  if (a.duration?.values[0] === 'short')
    notes.push('<p>You said your difficulties started less than 3 months ago. You can start a claim now, but PIP can only be paid once you have had them for 3 months.</p>');
  if (where === 'ni')
    notes.push('<p>In Northern Ireland, PIP is run by the Department for Communities. The activities and points are the same, but phone numbers and some processes are different.</p>');
  notes.push(
    '<p class="small muted"><strong>This is an estimate, not a decision.</strong> Only the Department for Work and Pensions (DWP) can decide if you get PIP. It will look at your form, any evidence you send and usually an assessment. Your answers have not been sent anywhere.</p>',
  );

  const rows = [...DAILY, ...MOBILITY].map((id) => {
    const step = pipChecker.steps.find((s) => s.id === id)!;
    const ans = a[id];
    return { label: step.title, answer: ans?.labels[0] ?? 'Not answered', points: `${ans?.points ?? 0} pts` };
  });

  return {
    tone,
    headline,
    body: notes.join(''),
    scores: [
      {
        name: 'Daily living',
        points: daily,
        max: 12,
        threshold: 8,
        band: d.band,
        level: d.level,
        amount: dailyAmount ? perWeek(dailyAmount) : undefined,
      },
      {
        name: 'Mobility',
        points: mobility,
        max: 12,
        threshold: 8,
        band: m.band,
        level: m.level,
        amount: mobilityAmount ? perWeek(mobilityAmount) : undefined,
      },
    ],
    table: { heading: 'Your answers (take these with you when you fill in the form)', rows },
    next: [
      { label: 'How to claim PIP', href: '/benefits/pip/how-to-claim/' },
      { label: 'The 12 activities explained', href: '/benefits/pip/activities/' },
      { label: 'Preparing for your assessment', href: '/benefits/pip/assessment/' },
    ],
  };
}
