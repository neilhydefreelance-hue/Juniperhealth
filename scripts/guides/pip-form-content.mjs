// Words for the "How to fill in your PIP form" PDF guide.
// Plain English, no em or en dashes. The points tables come from src/lib/checker/pip.ts,
// so they always match the PIP self-check.
//
// Sources: Citizens Advice "Check how to fill in your claim form" and its question pages,
// and the DWP "PIP assessment guide part 2: the assessment criteria".

/** One entry per PIP activity, in the same order as the self-check (a1 to a12). */
export const ACTIVITIES = [
  {
    id: 'a1',
    q: 3,
    formTitle: 'Preparing food',
    covers:
      'Whether you can make a <strong>simple meal</strong>: a hot, one course meal for one person, cooked from fresh ingredients. The DWP’s example is peeling, chopping and boiling potatoes, opening a tin, and frying a small piece of meat or fish. The cooker or microwave is treated as being at waist height, so problems bending down to an oven do not count here.',
    write: [
      'Opening packets and tins, peeling and chopping, and lifting a pan of water.',
      'Whether you can use a hob or oven safely. Say if you have burnt or cut yourself, left the cooker on, or dropped things.',
      'Whether you can only use a microwave, and why.',
      'If you lose track of what you are doing, forget food is cooking, or cannot tell if food is cooked properly.',
      'If low mood or anxiety means you do not cook unless someone prompts you, or you live on snacks and ready meals.',
      'How long it takes, how you feel afterwards, and any aids you use, such as a perching stool or easy grip knives.',
    ],
    example:
      'I cannot stand for more than about 5 minutes because of pain in my hips and back, so I sit on a stool to chop vegetables. My grip is weak, and I have dropped a pan of boiling water twice this year. On most days my partner lifts pans and drains them for me. On bad days, which are about 4 days a week, I do not cook at all and eat cereal or toast.',
  },
  {
    id: 'a2',
    q: 4,
    formTitle: 'Eating and drinking',
    covers:
      'Whether you can <strong>take nutrition</strong>: cutting food into pieces, getting food and drink to your mouth, chewing and swallowing. It also covers people who are fed through a tube, and people who need reminding to eat.',
    write: [
      'Problems cutting up food, holding cutlery or lifting a cup.',
      'Choking, coughing or trouble swallowing, and whether someone needs to watch you eat.',
      'If you forget to eat, have no appetite because of your condition, or an eating disorder means someone needs to encourage or supervise you.',
      'Spilling food or drink, and how long meals take you.',
      'Aids such as adapted cutlery, a plate guard or a special cup.',
    ],
    example:
      'Because of my depression I often do not feel hungry and forget to eat. My mum phones me at lunchtime and teatime every day to remind me. Without these calls I would skip meals, and I have lost 6 kilograms in the last 3 months.',
  },
  {
    id: 'a3',
    q: 5,
    formTitle: 'Managing treatments',
    covers:
      'Taking medicines at the right time and in the right dose, <strong>noticing changes</strong> in your health (such as blood sugar or signs of a crisis), and doing <strong>therapy at home</strong> that a health professional has prescribed or recommended, such as physiotherapy exercises, dialysis or oxygen. For therapy, the points depend on how many hours a week you need help.',
    write: [
      'Every medicine you take, and whether you use a pill organiser (dosette box) or phone alarms.',
      'If someone reminds you to take medicines, checks you have taken them, or keeps them safe because of a risk of overdose.',
      'If someone helps you notice changes in your condition, for example spotting a hypo or early signs of a relapse.',
      'Therapy you do at home, who helps you, and roughly how many hours a week it takes.',
    ],
    example:
      'I take 9 different tablets at 4 times of day. I use a dosette box that the pharmacy fills, and my phone alarm reminds me. Even with this, I miss doses about twice a week because of memory problems. My husband checks the box each evening. He also helps with my physiotherapy exercises for about 30 minutes every day, which is 3.5 hours a week.',
  },
  {
    id: 'a4',
    q: 6,
    formTitle: 'Washing and bathing',
    covers:
      'Washing your face, hair, body and lower body, and getting in and out of an <strong>ordinary bath or shower</strong> (not an adapted one).',
    write: [
      'Getting in and out of a standard bath or shower, and whether you have fallen or nearly fallen.',
      'Which parts of your body you cannot reach, for example your feet, back or hair.',
      'If you avoid washing because of pain, tiredness, low mood or lack of motivation, and whether someone prompts you.',
      'If you need someone nearby in case you fall, faint or have a seizure.',
      'Aids such as a shower seat, bath board, grab rails or a long handled sponge.',
    ],
    example:
      'I cannot get in or out of the bath because I cannot lift my legs high enough. I have a strip wash at the sink instead. I cannot reach my feet or lower legs, so my daughter washes them twice a week. Washing makes me so tired that I have to lie down for an hour afterwards.',
  },
  {
    id: 'a5',
    q: 7,
    formTitle: 'Managing toilet needs',
    covers:
      'Getting on and off an <strong>ordinary toilet</strong>, cleaning yourself afterwards, and managing <strong>incontinence</strong> of your bladder, bowel or both, including a catheter or stoma.',
    write: [
      'Problems getting on and off the toilet, or cleaning yourself.',
      'Accidents, how often they happen, and what you use (pads, a catheter, a stoma bag).',
      'If you need help to change pads or clothes, or to clean up after an accident.',
      'Aids such as a raised seat, frame or grab rails.',
    ],
    example:
      'I have bowel incontinence 3 or 4 times a week, often with little warning. I use pads, but I cannot always change them or clean myself properly because I cannot twist my body. My partner helps me clean up and change my clothes after most accidents.',
  },
  {
    id: 'a6',
    q: 8,
    formTitle: 'Dressing and undressing',
    covers:
      'Putting on and taking off clothes, including socks and shoes. It also covers knowing <strong>when</strong> to change clothes and choosing clothes that suit the weather and the situation.',
    write: [
      'Buttons, zips, bras, socks, tights and shoe laces.',
      'Whether you need to sit down, and how long dressing takes.',
      'If you stay in the same clothes for days, or wear night clothes all day, because of your mental health.',
      'If someone helps you with your top half, bottom half, or both.',
      'Aids such as a button hook, sock aid or long shoe horn, and clothes you choose because they are easier (elastic waists, slip on shoes).',
    ],
    example:
      'My hands are stiff and painful every morning, so I cannot do up buttons or zips. I only wear clothes with elastic waists and slip on shoes. My wife puts my socks on and helps me into jumpers and coats because I cannot lift my arms above my shoulders.',
  },
  {
    id: 'a7',
    q: 9,
    formTitle: 'Communicating',
    covers:
      'Speaking to people and understanding what they say, in your own language. <strong>Basic</strong> information is one simple sentence. <strong>Complex</strong> information is more than one sentence, or one complicated sentence. <strong>Communication support</strong> means help from someone trained or experienced in helping you, such as a sign language interpreter or a family member who knows your needs.',
    write: [
      'If you use a hearing aid or other aid to speak or hear.',
      'If you struggle to follow conversations, understand what a doctor says, or remember what you have been told.',
      'If anxiety, a learning disability, autism, brain injury or a speech problem makes it hard to explain yourself.',
      'Who helps you, and how.',
    ],
    example:
      'Because of my brain injury, I cannot follow more than one instruction at a time. At GP appointments my sister comes with me and explains what the doctor has said in simple words. On the phone I often agree to things without understanding them.',
  },
  {
    id: 'a8',
    q: 10,
    formTitle: 'Reading',
    covers:
      'Reading and understanding signs, symbols and words in your own language, in <strong>normal size print</strong>, with glasses or contact lenses if you use them. <strong>Basic</strong> written information is signs, symbols and dates. <strong>Complex</strong> written information is more than one sentence, such as a letter.',
    write: [
      'If you need a magnifier, large print or a screen reader, even when wearing glasses.',
      'If you cannot take in, or remember, what you have read, for example letters about bills or appointments.',
      'If someone reads your post to you or explains it.',
    ],
    example:
      'Even with my glasses I cannot read normal size print because of macular degeneration. I use a magnifier for short things, but I cannot read letters. My son reads all my post to me.',
  },
  {
    id: 'a9',
    q: 11,
    formTitle: 'Mixing with other people',
    covers:
      'Meeting people face to face, understanding how they are behaving, and building relationships. <strong>Social support</strong> means help from someone trained or experienced in helping you mix with people, such as a support worker or a close family member. The top score is for people who cannot mix with others because it causes <strong>overwhelming distress</strong>, or because they may behave in a way that puts themselves or others at serious risk.',
    write: [
      'How you feel before, during and after meeting people, including people you do not know.',
      'If you avoid people, cancel plans, or only go out with someone you trust.',
      'Panic attacks, anger, paranoia, or not understanding social cues.',
      'Who supports you, and what happens when they are not there.',
    ],
    example:
      'I have not met anyone new on my own for over a year. If I have to, my heart races and I shake and cannot speak. My support worker comes with me to appointments and speaks for me when I freeze. I have walked out of 2 appointments this year because I could not cope.',
  },
  {
    id: 'a10',
    q: 12,
    formTitle: 'Making budgeting decisions',
    covers:
      '<strong>Simple</strong> budgeting decisions are working out the cost of things and the change you should get. <strong>Complex</strong> budgeting decisions are planning a budget, paying bills and planning future purchases.',
    write: [
      'If you struggle with numbers, prices or change.',
      'If someone manages your bills or bank account, or checks your spending.',
      'If you spend money impulsively (for example during a manic episode), or ignore bills because of anxiety or low mood.',
      'Debts or missed payments that happened because of your condition.',
    ],
    example:
      'When I am high I spend money I do not have. Last year I built up £3,000 of debt in 2 weeks. My brother now helps me manage my bills and checks my bank account every week. I cannot plan ahead for bills without his help.',
  },
  {
    id: 'a11',
    q: 13,
    formTitle: 'Going out',
    covers:
      'Planning a route and following it, on journeys you know and journeys you do not. It is about <strong>mental, thinking and sensory</strong> difficulties, such as anxiety, memory problems, confusion or sight loss. It also covers people who cannot go out at all because it causes overwhelming distress. Physical difficulty walking belongs in the next question.',
    write: [
      'Local journeys you know well, such as to a shop or a friend’s house, as well as unfamiliar ones.',
      'If you only go out with someone, or only at quiet times.',
      'What happens when a journey changes, such as a diversion, delay or a closed station.',
      'Panic attacks, getting lost, or getting confused, and how often.',
      'If you use an assistance dog, a cane, or a navigation aid.',
    ],
    example:
      'I only leave the house with my partner. On my own I get panic attacks as soon as I reach the end of the road, and I have to go back. If a bus is cancelled I cannot work out another way home and I freeze. I have not made a journey on my own for 18 months.',
  },
  {
    id: 'a12',
    q: 14,
    formTitle: 'Moving around',
    covers:
      'Standing and then moving <strong>outdoors on flat, level ground</strong>, such as a pavement. The key distances are <strong>20 metres</strong> (about 5 car lengths) and <strong>50 metres</strong> (about the length of 5 buses). The DWP looks at whether you can do it safely, to a good standard, repeatedly and within a reasonable time.',
    write: [
      'How far you can walk before you need to stop because of pain, breathlessness, dizziness or tiredness. Count in metres, not minutes.',
      'How you walk: slowly, with a limp, stopping often, holding on to things.',
      'Whether you could walk the same distance again soon after, and how you feel later that day and the next day.',
      'Falls or near falls, and how often.',
      'Aids you use: a stick, crutches, a walking frame, a wheelchair or a mobility scooter.',
    ],
    example:
      'I can walk about 15 metres with my stick before the pain in my knees makes me stop. I walk very slowly and have to hold onto walls or fences. After walking to the car, my knees swell and I need to rest for the rest of the day. I have fallen 3 times in the last 6 months.',
  },
];

export const SOURCES = [
  ['Citizens Advice, Check how to fill in your claim form', 'https://www.citizensadvice.org.uk/benefits/sick-or-disabled-people-and-carers/pip/help-with-your-claim/fill-in-form-pip/'],
  ['Citizens Advice, Getting evidence to support your PIP claim', 'https://www.citizensadvice.org.uk/benefits/sick-or-disabled-people-and-carers/pip/help-with-your-claim/your-supporting-evidence/'],
  ['Citizens Advice, Sending your PIP claim form', 'https://www.citizensadvice.org.uk/benefits/sick-or-disabled-people-and-carers/pip/help-with-your-claim/send-in-form/'],
  ['DWP, PIP assessment guide part 2: the assessment criteria', 'https://www.gov.uk/government/publications/personal-independence-payment-assessment-guide-for-assessment-providers/pip-assessment-guide-part-2-the-assessment-criteria'],
  ['The Social Security (Personal Independence Payment) Regulations 2013, Schedule 1', 'https://www.legislation.gov.uk/uksi/2013/377/schedule/1'],
  ['GOV.UK, Personal Independence Payment', 'https://www.gov.uk/pip'],
];
