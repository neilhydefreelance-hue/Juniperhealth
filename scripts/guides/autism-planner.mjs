// Builds the printable "Our autism planner" for parents and autistic children to use together.
//   node scripts/guides/autism-planner.mjs [output.pdf]
// Writes public/guides/our-autism-planner.pdf, which the Free resources page links to.
// White pages and outline boxes keep printer ink use low.
import { chromium } from 'playwright';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { pathToFileURL } from 'node:url';

const root = new URL('../../', import.meta.url);
const file = (p) => new URL(p, root).href;
const read = (p) => readFileSync(new URL(p, root), 'utf8');
const settings = JSON.parse(read('src/data/settings.json'));
const plant = read('src/assets/plant.svg');
const updated = new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' });
const out = process.argv[2] ?? new URL('public/guides/our-autism-planner.pdf', root).pathname;

// Small building blocks
const lines = (n, label = '') => `<div class="lines">${label ? `<p class="field">${label}</p>` : ''}${'<span></span>'.repeat(n)}</div>`;
const box = (label, h = 30, extra = '') => `<div class="box-write" style="height:${h}mm${extra}"><p class="field">${label}</p></div>`;
const grid = (cols, rows, h = 9, first = '') =>
  `<table class="grid"><thead><tr>${cols.map((c) => `<th scope="col">${c}</th>`).join('')}</tr></thead><tbody>${rows
    .map((r) => `<tr style="height:${h}mm">${cols.map((_, i) => (i === 0 && r ? `<th scope="row">${r}</th>` : `<td>${i === 0 && first ? first : ''}</td>`)).join('')}</tr>`)
    .join('')}</tbody></table>`;
const ticks = (items) => `<ul class="tickboxes">${items.map((t) => `<li>${t}</li>`).join('')}</ul>`;
const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const face = (mouth, brows = '') =>
  `<svg viewBox="0 0 40 40" width="34" height="34" aria-hidden="true"><circle cx="20" cy="20" r="17" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="14" cy="16" r="2" fill="currentColor"/><circle cx="26" cy="16" r="2" fill="currentColor"/>${brows}<path d="${mouth}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`;
const FACES = [
  ['Happy', face('M12 24 Q20 32 28 24')],
  ['Calm', face('M13 26 L27 26')],
  ['Worried', face('M13 28 Q20 23 27 28', '<path d="M10 11 L17 13 M30 11 L23 13" stroke="currentColor" stroke-width="2"/>')],
  ['Sad', face('M12 29 Q20 22 28 29')],
  ['Angry', face('M13 28 Q20 25 27 28', '<path d="M10 10 L17 14 M30 10 L23 14" stroke="currentColor" stroke-width="2"/>')],
  ['Tired', face('M15 27 Q20 29 25 27', '<path d="M11 16 L17 16 M23 16 L29 16" stroke="white" stroke-width="5"/><path d="M11 17 L17 17 M23 17 L29 17" stroke="currentColor" stroke-width="2"/>')],
];
const faceRow = (cls = '') => `<div class="faces ${cls}">${FACES.map(([n, s]) => `<span>${s}<small>${n}</small></span>`).join('')}</div>`;
const page = (id, eyebrow, title, body, who = 'together') =>
  `<section class="page" id="${id}"><div class="page__top"><p class="eyebrow">${eyebrow}</p><span class="who who--${who}">${{ together: 'Fill in together', parent: 'For grown-ups', child: 'For me' }[who]}</span></div><h2>${title}</h2>${body}</section>`;

const SECTIONS = [
  ['about', 'All about us', [['about-me', 'All about me'], ['sensory', 'My senses'], ['passport', 'My communication passport'], ['contacts', 'Our important people'], ['health', 'Health and diagnosis record']]],
  ['daily', 'Everyday life and tracking', [['routine', 'Our weekly routine'], ['week', 'Weekly tracker'], ['sleep', 'Sleep diary'], ['food', 'Food and eating'], ['meals', 'Our meals for the week'], ['feelings', 'My feelings check-in'], ['overwhelm', 'Meltdown and shutdown log'], ['calm', 'My calm plan'], ['skills', 'Everyday skills tracker']]],
  ['goals', 'Goals and plans we work on together', [['goal-setting', 'Choosing a goal together'], ['goal-1', 'Our goal plan'], ['progress', 'Goal progress tracker'], ['plan-week', 'Planning our week'], ['changes', 'Getting ready for changes'], ['first-then', 'First, then and next boards'], ['wins', 'Our wins wall']]],
  ['support', 'School, appointments and support', [['school', 'School and SEN support'], ['ehcp', 'EHC plan tracker (England)'], ['idp', 'IDP tracker (Wales)'], ['meeting', 'Getting ready for a meeting'], ['appointments', 'Appointments log'], ['benefits', 'Help you may be able to get']]],
  ['parent', 'Looking after you too', [['parent', 'Grown-up check-in'], ['notes', 'Notes and questions'], ['help', 'Where to get help']]],
];

const css = `
@font-face { font-family: 'Lexend'; src: url('${file('public/fonts/lexend.woff2')}') format('woff2'); font-weight: 100 900; }
@font-face { font-family: 'Atkinson'; src: url('${file('public/fonts/atkinson-next.woff2')}') format('woff2'); font-weight: 200 800; }
:root { --purple: #5B3494; --night: #2E1A52; --lavender: #8556B8; --mist: #F7F3FC; --leaf: #1F7A5C; --marigold: #B7791F;
  --ink: #1E1B26; --slate: #524C63; --line: #CFC5DE; --soft: #E6DEF1; }
@page { size: A4; margin: 14mm 14mm 16mm;
  @bottom-left { content: "Juniper Health \\00B7  Our autism planner"; font: 8.5pt 'Atkinson', sans-serif; color: #524C63; }
  @bottom-right { content: "Page " counter(page); font: 8.5pt 'Atkinson', sans-serif; color: #524C63; } }
@page cover { margin: 0; @bottom-left { content: none; } @bottom-right { content: none; } }
* { box-sizing: border-box; }
body { margin: 0; font: 11pt/1.45 'Atkinson', sans-serif; color: var(--ink); }
h1, h2, h3, .eyebrow, th, .field, .who, .faces small, .tl__head { font-family: 'Lexend', sans-serif; }
h1, h2, h3 { color: var(--night); line-height: 1.2; margin: 0 0 .45em; }
h2 { font-size: 19pt; font-weight: 600; }
h3 { font-size: 12pt; font-weight: 600; margin-top: .9em; }
p, ul, ol { margin: 0 0 .6em; } ul, ol { padding-left: 1.2em; } li { margin-bottom: .25em; }
a { color: var(--purple); }
.eyebrow { color: var(--lavender); font-size: 8.5pt; font-weight: 600; text-transform: uppercase; letter-spacing: .08em; margin: 0; }
.small { font-size: 9.5pt; color: var(--slate); }
.page { break-before: page; }
.page__top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2mm; }
.who { font-size: 8.5pt; font-weight: 600; border: 1.5px solid; border-radius: 999px; padding: 2px 10px; }
.who--together { color: var(--purple); } .who--parent { color: var(--slate); } .who--child { color: var(--leaf); }
.field { font-size: 9pt; font-weight: 600; color: var(--lavender); margin: 0 0 1mm; }
.box-write { border: 1px solid var(--line); border-radius: 8px; padding: 6px 10px; margin: 0 0 4mm; break-inside: avoid; }
.lines { margin: 0 0 4mm; } .lines span { display: block; height: 8.5mm; border-bottom: 1px solid var(--line); }
.two { display: grid; grid-template-columns: 1fr 1fr; gap: 5mm; }
.three { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 4mm; }
table { width: 100%; border-collapse: collapse; margin: 0 0 4mm; break-inside: avoid; }
.grid th, .grid td { border: 1px solid var(--line); padding: 3px 5px; font-size: 9pt; vertical-align: top; text-align: left; }
.grid thead th { color: var(--night); font-weight: 600; background: #fff; border-bottom: 2px solid var(--lavender); }
.grid tbody th { font-weight: 600; color: var(--night); width: 30mm; }
.tickboxes { list-style: none; padding: 0; columns: 2; column-gap: 6mm; }
.tickboxes li { position: relative; padding-left: 7mm; margin-bottom: 2.2mm; break-inside: avoid; }
.tickboxes li::before { content: ""; position: absolute; left: 0; top: .1em; width: 4.2mm; height: 4.2mm; border: 1.5px solid var(--purple); border-radius: 3px; }
.tickboxes.one { columns: 1; }
.tip { border-left: 4px solid var(--lavender); padding: 2mm 4mm; margin: 0 0 4mm; color: var(--slate); font-size: 10pt; break-inside: avoid; }
.tip strong { color: var(--night); }
.faces { display: flex; gap: 3mm; flex-wrap: wrap; color: var(--night); margin: 0 0 3mm; }
.faces span { display: flex; flex-direction: column; align-items: center; width: 17mm; }
.faces small { font-size: 7.5pt; color: var(--slate); }
.faces.mini svg { width: 22px; height: 22px; } .faces.mini span { width: 12mm; }
.tl { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 4mm; }
.tl > div { border: 1.5px solid var(--line); border-top: 6px solid; border-radius: 8px; padding: 6px 10px; min-height: 75mm; }
.tl__head { font-weight: 600; margin: 0 0 1mm; color: var(--night); }
.tl .g { border-top-color: #2E8B57; } .tl .a { border-top-color: #D9A21B; } .tl .r { border-top-color: #C0392B; }
.ladder { display: flex; flex-direction: column-reverse; gap: 2mm; margin: 0 0 4mm; }
.ladder div { border: 1px solid var(--line); border-radius: 8px; padding: 2mm 3mm; min-height: 13mm; display: flex; gap: 3mm; }
.ladder b { font-family: 'Lexend'; color: var(--purple); min-width: 14mm; }
.ftn { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 4mm; margin: 0 0 4mm; }
.ftn div { border: 2px solid var(--lavender); border-radius: 10px; height: 62mm; padding: 3mm; }
.ftn h3 { margin: 0; text-align: center; color: var(--purple); font-size: 15pt; }
.stars { display: grid; grid-template-columns: repeat(15, 1fr); gap: 1.5mm; margin: 0 0 4mm; }
.stars span { aspect-ratio: 1; border: 1.5px dashed var(--line); border-radius: 50%; }
.body-map { display: flex; gap: 6mm; align-items: flex-start; }
.body-map svg { width: 46mm; flex: none; color: var(--lavender); }
.toc { list-style: none; padding: 0; }
.toc > li { margin-bottom: 3mm; } .toc > li > strong { color: var(--night); font-family: 'Lexend'; }
.toc ol { columns: 2; margin-top: 1mm; font-size: 10pt; }
/* Cover, white to save ink */
.cover { page: cover; height: 297mm; padding: 26mm 22mm 20mm; display: flex; flex-direction: column; border-top: 6mm solid var(--purple); }
.cover__brand { display: flex; align-items: center; gap: 12px; font: 600 15pt 'Lexend', sans-serif; color: var(--night); }
.cover__brand img { width: 60px; height: 60px; border-radius: 50%; }
.cover h1 { font-size: 40pt; font-weight: 700; margin: 28mm 0 6mm; }
.cover .lead { font-size: 14pt; color: var(--slate); max-width: 150mm; }
.cover__names { margin-top: 12mm; display: grid; gap: 4mm; max-width: 150mm; }
.cover__names div { border-bottom: 1.5px solid var(--line); padding-bottom: 2mm; font: 600 10pt 'Lexend'; color: var(--lavender); height: 12mm; display: flex; align-items: flex-end; }
.cover__plant { width: 60mm; height: 60mm; color: #EFE9F7; margin: auto 0 0 auto; }
.cover__foot { border-top: 1px solid var(--line); padding-top: 5mm; font-size: 10pt; color: var(--slate); display: flex; justify-content: space-between; }
`;

const bodyOutline = `<svg viewBox="0 0 100 200" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><circle cx="50" cy="20" r="13"/><path d="M38 36 Q50 40 62 36 L74 44 L86 92 L78 94 L66 56 L66 110 L70 190 L56 190 L52 120 L48 120 L44 190 L30 190 L34 110 L34 56 L22 94 L14 92 L26 44 Z"/></g></svg>`;

const pages = [
// How to use
page('how', 'Start here', 'How to use this planner', `
<p>This planner is for you and your child to use <strong>together</strong>. It helps you notice patterns, plan for tricky times, share what works with school and professionals, and work on goals that matter to your child.</p>
<p>Look for the label in the top corner of each page:</p>
${ticks(['<strong>Fill in together</strong>: talk it through and fill it in side by side', '<strong>For me</strong>: pages written for your child, in their own words or drawings', '<strong>For grown-ups</strong>: records and plans for you to keep'])}
<h3>Tips that help</h3>
<ul>
<li><strong>Go at your child's pace.</strong> Use one page at a time. You do not need to fill in everything.</li>
<li><strong>Let your child answer in their own way</strong>: words, drawings, symbols, photos, pointing, or typing.</li>
<li><strong>Build on strengths and interests.</strong> Use what your child loves to make goals and plans more fun.</li>
<li><strong>Goals should help your child, not make them hide who they are.</strong> Avoid goals about stopping stimming or making eye contact. Focus on comfort, safety, independence and what your child wants.</li>
<li><strong>Look for patterns, not blame.</strong> Trackers help you spot what leads to good days and hard days.</li>
<li><strong>Print the pages you use most</strong>, such as the weekly tracker, as many times as you need.</li>
<li><strong>Take it to appointments.</strong> Your notes are useful evidence for school, health and benefit claims such as DLA.</li>
</ul>
<div class="tip"><strong>A note on words.</strong> We say "autistic child", which many autistic people prefer. Please use the words your family and your child feel comfortable with.</div>
<p class="small">This planner is general information to help you organise and plan. It is not medical advice. Talk to your GP, paediatrician or your child's school about any worries.</p>
`, 'parent'),
// Contents
page('contents', 'Contents', 'What is inside', `<ol class="toc">${SECTIONS.map(([, name, items]) => `<li><strong>${name}</strong><ol>${items.map(([, t]) => `<li>${t}</li>`).join('')}</ol></li>`).join('')}</ol>`, 'parent'),

// ABOUT US
page('about-me', 'All about us', 'All about me', `
<div class="two">
  ${box('My name is, and I like to be called', 16)}
  ${box('My age and birthday', 16)}
</div>
${box('A picture of me (draw it or stick in a photo)', 55)}
<div class="two">
  <div>${box('Things I love and am really good at', 38)}${box('My favourite things to talk about', 30)}</div>
  <div>${box('Things I do not like', 38)}${box('Things that make me feel safe and calm', 30)}</div>
</div>
${box('The best way to help me is', 25)}
`, 'child'),

page('sensory', 'All about us', 'My senses', `
<p>Everyone's senses work differently. Some things might feel too much, and some things you might want more of. Fill this in together.</p>
${grid(['My senses', 'Things that feel too much or I avoid', 'Things I love or look for', 'What helps me'], ['Sounds', 'Sights and light', 'Touch and clothes', 'Smells', 'Tastes and textures', 'Movement and balance', 'Body signals (hunger, thirst, needing the toilet, pain, temperature)'], 22)}
${box('My sensory toolkit (for example ear defenders, a fidget, sunglasses, a weighted blanket, a quiet space)', 24)}
`),

page('passport', 'All about us', 'My communication passport', `
<p>Fill this in together, then copy it for school, clubs, relatives, doctors or anyone new. It helps people understand you quickly.</p>
<div class="two">
  ${box('How I communicate (for example talking, signing, pictures, typing, a device)', 32)}
  ${box('How to help me understand (for example short sentences, give me time, show me)', 32)}
  ${box('How I show I am happy or interested', 30)}
  ${box('How I show I am worried, in pain or overwhelmed', 30)}
  ${box('Please do', 30)}
  ${box('Please do not', 30)}
</div>
${box('If I am overwhelmed, the best thing to do is', 26)}
${box('Important things to know about me (health, allergies, medicines, sensory needs)', 22)}
`),

page('contacts', 'All about us', 'Our important people', `
<p>Keep everyone's details in one place.</p>
${grid(['Who', 'Name', 'Phone or email', 'Notes'], ['GP', 'Paediatrician', 'Health visitor or school nurse', 'School or nursery', 'SENCO', 'Class teacher or key worker', 'Speech and language therapist', 'Occupational therapist', 'CAMHS or mental health team', 'Social worker or early help', 'Local SENDIASS (free SEN advice)', 'Dentist', 'Pharmacy', 'Respite or short breaks', 'Emergency contact'], 11)}
`, 'parent'),

page('health', 'All about us', 'Health and diagnosis record', `
<div class="two">
  ${box('Diagnosis, date and who gave it', 22)}
  ${box('Other conditions or differences (for example ADHD, dyspraxia, epilepsy, anxiety)', 22)}
</div>
<h3>Medicines</h3>
${grid(['Medicine', 'What it is for', 'Dose and when', 'Started', 'Notes and side effects'], ['', '', '', '', ''], 10)}
<div class="two">
  ${box('Allergies', 18)}
  ${box('Height and weight checks', 18)}
</div>
<h3>Assessments and reports</h3>
${grid(['Date', 'Assessment or report', 'Who did it', 'Key points', 'Copy kept?'], ['', '', '', '', ''], 12)}
`, 'parent'),

// DAILY LIFE
page('routine', 'Everyday life', 'Our weekly routine', `
<p>Fill in the regular things that happen each day. You can draw symbols or stick on pictures for your child.</p>
${grid(['', ...DAYS], ['Morning', 'School or day', 'After school', 'Evening', 'Bedtime'], 36)}
`),

page('week', 'Everyday life', 'Weekly tracker', `
<p>Week starting: ______________________ &nbsp; Print this page as often as you need. A quick tick, number or word is enough.</p>
${grid(['', ...DAYS], ['Sleep (hours)', 'Mood (draw a face)', 'Eating (good, okay, hard)', 'Toilet', 'Medicines taken', 'School or nursery (good, okay, hard)', 'Meltdowns or shutdowns (how many)', 'Sensory overload', 'Exercise or outdoor time', 'Screen time', 'Something that went well'], 15)}
${box('Patterns we noticed this week', 22)}
`, 'parent'),

page('sleep', 'Everyday life', 'Sleep diary', `
<p>Many autistic children find sleep hard. Two weeks of notes can help you and your GP spot patterns.</p>
${grid(['Date', 'Wind-down started', 'In bed', 'Fell asleep', 'Woke in the night (times)', 'Woke up', 'Notes (screens, food, worries, naps)'], ['', '', '', '', '', '', '', '', '', '', '', '', '', ''], 12.5)}
`, 'parent'),

page('food', 'Everyday life', 'Food and eating', `
<div class="two">
  ${box('My safe foods (foods I always feel okay eating)', 45)}
  ${box('Foods I really do not like, and why (taste, smell, texture, look)', 45)}
</div>
<h3>Food explorer</h3>
<p>Trying new foods slowly, one small step at a time. Every step counts. There is no pressure to eat it.</p>
${grid(['Food', 'Looked at it', 'Touched it', 'Smelled it', 'Licked it', 'Tasted it', 'Ate some'], ['', '', '', '', '', ''], 12)}
${box('Mealtime tips that help us (for example same plate, foods not touching, quiet table)', 25)}
`),

page('meals', 'Everyday life', 'Our meals for the week', `
<p>Week starting: ______________________ &nbsp; Plan meals together. Include at least one safe food at each meal, so there is always something your child is happy to eat.</p>
${grid(['', 'Breakfast', 'Lunch', 'Dinner', 'Snacks', 'Who helps cook?'], DAYS, 22)}
<div class="two">
  ${box('Shopping list', 52)}
  <div>
    ${box('A new food we might try this week (no pressure)', 24)}
    ${box('Jobs I can help with (for example washing veg, stirring, setting the table)', 24)}
  </div>
</div>
`),

page('feelings', 'Everyday life', 'My feelings check-in', `
<p>Circle how you feel, or draw your own face.</p>
<table class="grid"><thead><tr><th scope="col">Morning</th><th scope="col">After school</th><th scope="col">Evening</th></tr></thead><tbody><tr>${[1, 2, 3].map(() => `<td>${faceRow('mini')}</td>`).join('')}</tr></tbody></table>
<div class="body-map">
  ${bodyOutline}
  <div style="flex:1">
    <p><strong>Where do I feel it in my body?</strong> Colour in where you feel feelings, such as a tight tummy or hot face.</p>
    ${box('When I feel worried, my body', 22)}
    ${box('When I feel angry, my body', 22)}
    ${box('When I feel happy, my body', 22)}
  </div>
</div>
${box('Words or signs I can use to show how I feel', 20)}
`, 'child'),

page('overwhelm', 'Everyday life', 'Meltdown and shutdown log', `
<p>A meltdown or shutdown is not bad behaviour. It is a response to feeling overwhelmed. Noting what happened before, during and after can help you spot triggers and plan support.</p>
${grid(['Date and time', 'Where and who was there', 'What happened before (triggers, changes, sensory, tiredness, hunger)', 'What it looked like', 'What helped', 'How long until calm'], ['', '', '', '', '', '', '', ''], 22)}
`, 'parent'),

page('calm', 'Everyday life', 'My calm plan', `
<p>Work this out together when everyone is calm. Share it with school and family.</p>
<div class="tl">
  <div class="g"><p class="tl__head">Green: I feel okay</p><p class="small">What it looks like, and what keeps me feeling good</p></div>
  <div class="a"><p class="tl__head">Amber: I am getting worried or overloaded</p><p class="small">My early warning signs, and what helps me now</p></div>
  <div class="r"><p class="tl__head">Red: I am overwhelmed</p><p class="small">What helps me to be safe and calm, and what does not help</p></div>
</div>
<div class="two" style="margin-top:4mm">
  ${box('Things that often make me overwhelmed', 30)}
  ${box('My calm-down choices (for example quiet space, music, squeezes, movement, my special interest)', 30)}
</div>
${box('After I have calmed down, I need', 20)}
`),

page('skills', 'Everyday life', 'Everyday skills tracker', `
<p>Track skills your child wants to work on. Fill in the date when they reach each stage. Break big tasks into small steps.</p>
${grid(['Skill', 'With help', 'With prompts or a picture', 'On my own', 'Notes'], ['Getting dressed', 'Brushing teeth', 'Washing and bathing', 'Using the toilet', 'Packing my bag', 'Making a snack', 'Using money', 'Crossing the road safely', 'Telling someone I need help', '', '', ''], 14)}
`),

// GOALS
page('goal-setting', 'Goals together', 'Choosing a goal together', `
<p>The best goals come from your child. They should make life easier, safer or happier for them. Choose one or two at a time.</p>
<h3>Good goals are</h3>
${ticks(['<strong>Chosen together</strong>, with your child saying what matters to them', '<strong>Small and clear</strong>, so you both know when it is done', '<strong>Built on strengths</strong> and interests', '<strong>About comfort, safety or independence</strong>, not about looking less autistic', '<strong>Broken into steps</strong>, with lots of praise for each one', '<strong>Flexible</strong>, so you can change them if they are not working'])}
<h3>Ideas to get you started</h3>
<div class="three">
  ${box('Feelings and calm', 34, ';font-size:9.5pt')}
  ${box('Independence and self-care', 34)}
  ${box('Friends and fun', 34)}
  ${box('School and learning', 34)}
  ${box('Sleep, food and health', 34)}
  ${box('Trying new things', 34)}
</div>
<div class="tip"><strong>Examples:</strong> "I can tell someone when the noise is too much", "I can get dressed with a picture list", "I can order my own drink at the cafe", "I can use my calm space when I feel amber".</div>
`),

page('goal-1', 'Goals together', 'Our goal plan', `
${box('My goal (in my words)', 20)}
<div class="two">
  ${box('Why this matters to me', 24)}
  ${box('What will be different when I can do it', 24)}
</div>
<h3>Small steps to get there</h3>
<div class="ladder">
  <div><b>Step 1</b></div><div><b>Step 2</b></div><div><b>Step 3</b></div><div><b>Step 4</b></div><div><b>Step 5</b></div><div><b>Goal!</b></div>
</div>
<div class="two">
  ${box('Who can help me (home, school, others)', 22)}
  ${box('Things that will help (pictures, timers, practice, rewards)', 22)}
</div>
<div class="two">
  ${box('Start date and when we will check how it is going', 16)}
  ${box('How we will celebrate', 16)}
</div>
`),

page('progress', 'Goals together', 'Goal progress tracker', `
<p>Colour in a star each time you practise or take a step. When the row is full, celebrate!</p>
${['Goal 1', 'Goal 2', 'Goal 3'].map((g) => `${box(g, 12)}<div class="stars">${'<span></span>'.repeat(15)}</div>`).join('')}
<h3>Check-in</h3>
${grid(['Date', 'How is it going? (draw a face)', 'What is helping', 'What is hard', 'Change anything?'], ['', '', '', '', '', ''], 14)}
`),

page('plan-week', 'Goals together', 'Planning our week', `
<p>Week starting: ______________________ &nbsp; Sit down together at the start of the week.</p>
${grid(['', ...DAYS], ['Things happening', 'Anything new or different', 'Fun thing to look forward to'], 26)}
<div class="two">
  ${box('What might be tricky this week', 32)}
  ${box('Our plan to make it easier', 32)}
</div>
${box('One thing I want to try or practise this week', 18)}
`),

page('changes', 'Goals together', 'Getting ready for changes', `
<p>Changes, like a new school, a trip or a hospital visit, can feel big. Plan together and use this as a simple story.</p>
<div class="two">
  ${box('What is going to happen', 26)}
  ${box('When and where', 26)}
  ${box('Who will be there', 24)}
  ${box('What I might see, hear, smell or feel', 24)}
  ${box('What might feel hard', 24)}
  ${box('What will help me (things to bring, a quiet place, a plan for breaks)', 24)}
</div>
${box('Pictures of the place or people (draw or stick in photos)', 45)}
`),

page('first-then', 'Goals together', 'First, then and next boards', `
<p>Draw or stick pictures in the boxes. Cut them out and use them on the fridge, at school or when you are out.</p>
<div class="ftn"><div><h3>First</h3></div><div><h3>Then</h3></div><div><h3>Next</h3></div></div>
<div class="ftn"><div><h3>First</h3></div><div><h3>Then</h3></div><div><h3>Next</h3></div></div>
<div class="ftn" style="grid-template-columns:1fr 1fr"><div style="height:48mm"><h3>Now</h3></div><div style="height:48mm"><h3>Later</h3></div></div>
`, 'child'),

page('wins', 'Goals together', 'Our wins wall', `
<p>Big or small, write down or draw every win. Look back at this page on hard days.</p>
<div class="three">${Array.from({ length: 12 }, () => box('Date', 46)).join('')}</div>
`, 'child'),

// SUPPORT
page('school', 'School and support', 'School and SEN support', `
<div class="two">
  ${box('School or nursery, and year group', 16)}
  ${box('SENCO name and contact', 16)}
</div>
<h3>SEN support at school</h3>
<p class="small">Schools must use their best efforts to meet special educational needs. Many children get help through "SEN support" without an EHC plan. In Wales, children with additional learning needs (ALN) get support through an Individual Development Plan (IDP).</p>
${grid(['Need', 'Support in place', 'Who provides it', 'Is it working?'], ['Communication', 'Sensory', 'Learning', 'Social and emotional', 'Break and lunch times', 'Getting to and from school', ''], 14)}
${box('Reasonable adjustments agreed (for example a quiet space, movement breaks, uniform changes, a time-out card)', 25)}
${grid(['Date', 'School contact', 'What we talked about', 'Agreed actions'], ['', '', '', ''], 13)}
`, 'parent'),

page('ehcp', 'School and support', 'EHC plan tracker (England)', `
<p>An Education, Health and Care (EHC) plan is a legal document for children and young people who need more support than a school can usually provide. Parents can ask the council for an assessment themselves. Your local SENDIASS can help for free.</p>
<table class="grid"><thead><tr><th scope="col">Stage</th><th scope="col" style="width:45mm">Time limit</th><th scope="col" style="width:25mm">Date</th><th scope="col">Notes</th></tr></thead><tbody><tr style="height:13mm"><th scope="row" style="width:55mm">Request for assessment sent</th><td>Day 1</td><td></td><td></td></tr><tr style="height:13mm"><th scope="row" style="width:55mm">Council decides whether to assess</th><td>Within 6 weeks</td><td></td><td></td></tr><tr style="height:13mm"><th scope="row" style="width:55mm">Assessment reports gathered</th><td>Usually within 6 weeks of agreeing to assess</td><td></td><td></td></tr><tr style="height:13mm"><th scope="row" style="width:55mm">Draft plan received</th><td>Usually by week 14</td><td></td><td></td></tr><tr style="height:13mm"><th scope="row" style="width:55mm">Your comments and choice of school sent</th><td>15 days from getting the draft</td><td></td><td></td></tr><tr style="height:13mm"><th scope="row" style="width:55mm">Final plan issued</th><td>Within 20 weeks of the request</td><td></td><td></td></tr><tr style="height:13mm"><th scope="row" style="width:55mm">Annual review</th><td>At least every 12 months</td><td></td><td></td></tr></tbody></table>
<p class="small">You can appeal some decisions, such as a refusal to assess, to the SEND Tribunal. In Wales, see the IDP tracker on the next page.</p>
${box('Evidence to send (reports, letters, this planner, examples of difficulties)', 30)}
${box('Notes', 30)}
`, 'parent'),

page('idp', 'School and support', 'IDP tracker (Wales)', `
<p>In Wales, children with <strong>additional learning needs (ALN)</strong> can get an <strong>Individual Development Plan (IDP)</strong>. It is a legal plan that sets out your child's needs and the support they must get. Most IDPs are made by the school. Councils make them for children with more complex needs. SNAP Cymru gives free, independent advice.</p>
<div class="two">
  ${box('School ALNCo (ALN coordinator) name and contact', 16)}
  ${box('Who maintains the IDP (school or council)', 16)}
</div>
<table class="grid"><thead><tr><th scope="col">Stage</th><th scope="col" style="width:45mm">Time limit</th><th scope="col" style="width:25mm">Date</th><th scope="col">Notes</th></tr></thead><tbody>
<tr style="height:13mm"><th scope="row" style="width:55mm">We told the school or council we think our child has ALN</th><td>Day 1</td><td></td><td></td></tr>
<tr style="height:13mm"><th scope="row" style="width:55mm">School decides if our child has ALN, and writes the IDP</th><td>Within 35 school days</td><td></td><td></td></tr>
<tr style="height:13mm"><th scope="row" style="width:55mm">Council decides and writes the IDP (if the council is responsible)</th><td>Within 12 weeks</td><td></td><td></td></tr>
<tr style="height:13mm"><th scope="row" style="width:55mm">IDP received</th><td></td><td></td><td></td></tr>
<tr style="height:13mm"><th scope="row" style="width:55mm">IDP review</th><td>At least every 12 months</td><td></td><td></td></tr>
</tbody></table>
<p class="small">IDPs are built around the child, using person-centred meetings. If you disagree with a decision, you can ask the council to reconsider a school's decision, use free disagreement resolution, or appeal to the Education Tribunal for Wales.</p>
<div class="two">
  ${box('What matters to my child (their views for the IDP)', 34)}
  ${box('Support written in the IDP (what, who, how often)', 34)}
</div>
${box('Evidence to share (reports, letters, this planner, examples)', 24)}
`, 'parent'),

page('meeting', 'School and support', 'Getting ready for a meeting', `
<div class="two">
  ${box('Meeting with, date and time', 16)}
  ${box('Who is coming with me', 16)}
</div>
<h3>Before the meeting</h3>
<div class="two">
  ${box('What is going well', 32)}
  ${box('What we are worried about', 32)}
</div>
${box('What my child wants to say (ask them, or bring their All about me page)', 26)}
${box('Questions to ask', 30)}
<h3>After the meeting</h3>
${grid(['What was agreed', 'Who will do it', 'By when'], ['', '', '', ''], 11)}
`, 'parent'),

page('appointments', 'School and support', 'Appointments log', `
${grid(['Date', 'Who with (doctor, therapist, service)', 'Why', 'What was said or decided', 'Next steps and follow-up date'], ['', '', '', '', '', '', '', '', '', '', ''], 20)}
`, 'parent'),

page('benefits', 'School and support', 'Help you may be able to get', `
<p>Tick what you have, are applying for or want to look into. Rules depend on your child's needs, not just their diagnosis. Your notes in this planner can be good evidence.</p>
<table class="grid"><thead><tr><th scope="col" style="width:32mm">Help</th><th scope="col" style="width:62mm">What it is</th><th scope="col" style="width:30mm">Status (have, applied, look into)</th><th scope="col">Notes</th></tr></thead><tbody><tr style="height:13mm"><th scope="row">Disability Living Allowance (DLA) for children</th><td>Money towards the extra care or mobility needs of a child under 16</td><td></td><td></td></tr><tr style="height:13mm"><th scope="row">Carer's Allowance</th><td>Money for you if you care for your child at least 35 hours a week and they get certain benefits</td><td></td><td></td></tr><tr style="height:13mm"><th scope="row">Carer's assessment</th><td>A free council check of the support you need as a carer</td><td></td><td></td></tr><tr style="height:13mm"><th scope="row">Short breaks and respite</th><td>Time for your child to do activities while you get a break</td><td></td><td></td></tr><tr style="height:13mm"><th scope="row">Blue Badge</th><td>Parking near where you need to go, if your child qualifies</td><td></td><td></td></tr><tr style="height:13mm"><th scope="row">Family Fund grant</th><td>Grants for things like equipment, days out or a break</td><td></td><td></td></tr><tr style="height:13mm"><th scope="row">CEA cinema card</th><td>A free cinema ticket for the person who goes with your child</td><td></td><td></td></tr><tr style="height:13mm"><th scope="row">Max Card</th><td>Discounts at days out for families of children with additional needs</td><td></td><td></td></tr><tr style="height:13mm"><th scope="row">Disabled Facilities Grant</th><td>Money for changes to your home, such as a safe space</td><td></td><td></td></tr><tr style="height:13mm"><th scope="row">Council Tax reduction</th><td>Money off your bill if your home has been adapted or you are on a low income</td><td></td><td></td></tr><tr style="height:13mm"><th scope="row">Local offer activities</th><td>Your council's list of SEND services and clubs</td><td></td><td></td></tr><tr style="height:13mm"><th scope="row">Free school transport</th><td>Help getting to school if your child cannot walk there safely</td><td></td><td></td></tr></tbody></table>
<p class="small">Find out more at juniperhealth.info, including our free <strong>DLA for children check</strong>. Your council's "local offer" website lists SEND services in your area.</p>
`, 'parent'),

// PARENT
page('parent', 'Looking after you', 'Grown-up check-in', `
<p>Caring for an autistic child can be joyful and exhausting. Looking after yourself helps you look after them.</p>
<h3>How am I doing?</h3>
${grid(['', 'Week 1', 'Week 2', 'Week 3', 'Week 4'], ['My energy (1 to 10)', 'My sleep', 'Time for me', 'Who I talked to', 'Something good'], 13)}
<div class="two">
  ${box('My support network (family, friends, groups, online communities)', 34)}
  ${box('What I need help with right now', 34)}
</div>
<div class="tip">If you care for your child, you have the right to a free <strong>carer's assessment</strong> from your council. It looks at what support could help you. If you are struggling, talk to your GP, or call Samaritans free on 116 123, day or night.</div>
${box('One small thing I will do for me this week', 18)}
`, 'parent'),

page('notes', 'Looking after you', 'Notes and questions', `${lines(26)}`, 'parent'),

page('help', 'Looking after you', 'Where to get help', `
<table class="grid"><tbody>
<tr><th scope="row">National Autistic Society</th><td>Autism information and a helpline for families</td><td>0808 800 4104<br>autism.org.uk</td></tr>
<tr><th scope="row">Contact</th><td>Help for families with disabled children, including benefits and education</td><td>0808 808 3555<br>contact.org.uk</td></tr>
<tr><th scope="row">IPSEA</th><td>Free legal advice on special educational needs in England</td><td>ipsea.org.uk</td></tr>
<tr><th scope="row">SNAP Cymru</th><td>Free advice on additional learning needs and IDPs in Wales</td><td>snapcymru.org</td></tr>
<tr><th scope="row">Your local SENDIASS</th><td>Free, independent advice on SEN and EHC plans</td><td>Search for your council's SENDIASS</td></tr>
<tr><th scope="row">Family Fund</th><td>Grants for families raising disabled or seriously ill children</td><td>familyfund.org.uk</td></tr>
<tr><th scope="row">Carers UK</th><td>Advice and support for carers</td><td>carersuk.org</td></tr>
<tr><th scope="row">YoungMinds parents helpline</th><td>Advice about a child's mental health</td><td>youngminds.org.uk</td></tr>
<tr><th scope="row">Samaritans</th><td>If you are struggling, any time</td><td>116 123, free, day or night</td></tr>
<tr><th scope="row">NHS 111</th><td>Urgent medical help that is not an emergency</td><td>111 or 111.nhs.uk</td></tr>
</tbody></table>
<div class="box-write" style="height:auto;margin-top:6mm">
  <h3 style="margin-top:0">About Juniper Health</h3>
  <p>Juniper Health gives clear, kind help with health conditions and disability benefits in England and Wales. It is run by ${settings.ownerName}, trading as ${settings.tradingName}. We are independent and not part of the NHS or DWP. This planner is general information, not medical advice.</p>
  <p style="margin-bottom:0">More free guides and self-checks at juniperhealth.info &middot; ${settings.email} &middot; Updated ${updated}</p>
</div>
`, 'parent'),
];

const html = `<!doctype html><html lang="en-GB"><head><meta charset="utf-8"><title>Our autism planner</title>
<meta name="author" content="${settings.tradingName}"><style>${css}</style></head><body>
<section class="cover">
  <div class="cover__brand"><img src="${file('public/images/logo-512.webp')}" alt=""> Juniper Health</div>
  <p class="eyebrow" style="margin-top:26mm">Free printable planner for families</p>
  <h1 style="margin-top:4mm">Our autism planner</h1>
  <p class="lead">A planner and tracker for parents and autistic children to use together. Track sleep, feelings, food and overwhelm, plan for changes, and set goals that matter to your child.</p>
  <div class="cover__names"><div>This planner belongs to</div><div>And my grown-up</div><div>Date we started</div></div>
  <div class="cover__plant">${plant}</div>
  <div class="cover__foot"><span>For England and Wales &middot; ${updated}</span><span>juniperhealth.info</span></div>
</section>
${pages.join('\n')}
</body></html>`;

const tmp = join(tmpdir(), 'juniper-autism-planner.html');
writeFileSync(tmp, html);
mkdirSync(dirname(out), { recursive: true });
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
const p = await browser.newPage();
await p.goto(pathToFileURL(tmp).href);
await p.evaluate(() => document.fonts.ready);
await p.pdf({ path: out, preferCSSPageSize: true, printBackground: true, tagged: true, outline: true });
await browser.close();
console.log(`Wrote ${out}`);
