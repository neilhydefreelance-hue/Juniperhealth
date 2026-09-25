// Builds the printable PDF guide "How to fill in your PIP form".
//   node scripts/guides/pip-form.mjs
// Writes public/guides/how-to-fill-in-your-pip-form.pdf, which the site links to.
// Rebuild it whenever the PIP rules, rates or wording change (see docs/LAUNCH-CHECKLIST.md).
import { build } from 'esbuild';
import { chromium } from 'playwright';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { ACTIVITIES, SOURCES } from './pip-form-content.mjs';

const root = new URL('../../', import.meta.url);
const file = (p) => new URL(p, root).href;
const read = (p) => readFileSync(new URL(p, root), 'utf8');

// Load the PIP points straight from the self-check, so the guide and the check always agree.
const bundled = await build({ entryPoints: [new URL('src/lib/checker/pip.ts', root).pathname], bundle: true, format: 'esm', write: false, platform: 'node' });
const { pipChecker } = await import(`data:text/javascript;base64,${Buffer.from(bundled.outputFiles[0].text).toString('base64')}`);
const steps = Object.fromEntries(pipChecker.steps.map((s) => [s.id, s]));

const rates = JSON.parse(read('src/data/rates.json'));
const settings = JSON.parse(read('src/data/settings.json'));
const plant = read('src/assets/plant.svg');
const money = (n) => `£${n.toFixed(2)}`;
const updated = new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' });

const activityPage = (a, i) => {
  const step = steps[a.id];
  const part = i < 10 ? 'Daily living' : 'Mobility';
  const n = i < 10 ? i + 1 : i - 9;
  return `
<section class="activity" id="${a.id}">
  <header class="activity__head">
    <p class="eyebrow">Question ${a.q} on the form &middot; ${part} activity ${n} of ${i < 10 ? 10 : 2}</p>
    <h2>Q${a.q}. ${a.formTitle}</h2>
    <p class="activity__plain">In the PIP rules this is called <strong>${step.title.toLowerCase()}</strong>.</p>
  </header>
  <h3>What this question is about</h3>
  <p>${a.covers}</p>
  <div class="cols">
    <div>
      <h3>Things to write about</h3>
      <ul class="ticks">${a.write.map((w) => `<li>${w}</li>`).join('')}</ul>
    </div>
    <div>
      <h3>What scores points</h3>
      <table class="points">
        <thead><tr><th scope="col">If this is true on most days</th><th scope="col">Points</th></tr></thead>
        <tbody>${step.options.map((o) => `<tr><td>${o.label}</td><td class="num">${o.points}</td></tr>`).join('')}</tbody>
      </table>
    </div>
  </div>
  <figure class="example">
    <figcaption>Example of a helpful answer</figcaption>
    <blockquote>${a.example}</blockquote>
  </figure>
  <div class="notes" aria-label="Space for your notes"><p class="notes__label">My notes for this question</p></div>
</section>`;
};

const html = `<!doctype html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<title>How to fill in your PIP form: a question by question guide</title>
<meta name="author" content="${settings.tradingName}">
<meta name="description" content="A plain English guide to the PIP How your disability affects you form, for people in England and Wales.">
<style>
@font-face { font-family: 'Lexend'; src: url('${file('public/fonts/lexend.woff2')}') format('woff2'); font-weight: 100 900; }
@font-face { font-family: 'Atkinson'; src: url('${file('public/fonts/atkinson-next.woff2')}') format('woff2'); font-weight: 200 800; }
@font-face { font-family: 'Atkinson'; src: url('${file('public/fonts/atkinson-next-italic.woff2')}') format('woff2'); font-weight: 200 800; font-style: italic; }
:root {
  --purple: #5B3494; --deep: #432777; --night: #2E1A52; --lavender: #8556B8; --mist: #F5F0FB;
  --leaf: #1F7A5C; --marigold: #F2B441; --ink: #1E1B26; --slate: #524C63; --amber: #8A5A00; --amber-bg: #FFF4DB;
  --line: #DCD3EA;
}
@page {
  size: A4; margin: 16mm 16mm 18mm;
  @bottom-left { content: "Juniper Health \\00B7  How to fill in your PIP form"; font: 8.5pt 'Atkinson', sans-serif; color: #524C63; }
  @bottom-right { content: "Page " counter(page) " of " counter(pages); font: 8.5pt 'Atkinson', sans-serif; color: #524C63; }
}
@page cover { margin: 0; @bottom-left { content: none; } @bottom-right { content: none; } }
* { box-sizing: border-box; }
html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
body { margin: 0; font: 11pt/1.5 'Atkinson', sans-serif; color: var(--ink); }
h1, h2, h3, .eyebrow, th, figcaption, .notes__label, .badge { font-family: 'Lexend', sans-serif; }
h1, h2, h3 { color: var(--night); line-height: 1.2; margin: 0 0 .5em; }
h2 { font-size: 20pt; font-weight: 600; }
h3 { font-size: 12.5pt; font-weight: 600; margin-top: 1.1em; }
p, ul, ol { margin: 0 0 .7em; }
ul, ol { padding-left: 1.2em; }
li { margin-bottom: .3em; }
a { color: var(--purple); }
strong { color: var(--night); }
.eyebrow { color: var(--lavender); font-size: 9pt; font-weight: 600; text-transform: uppercase; letter-spacing: .08em; margin-bottom: .4em; }
.page { break-before: page; }
.lead { font-size: 13pt; color: var(--slate); }
.small { font-size: 9.5pt; color: var(--slate); }

/* Cover */
.cover { page: cover; height: 297mm; padding: 26mm 22mm 20mm; color: #fff; display: flex; flex-direction: column;
  background: radial-gradient(circle at 85% 12%, rgba(242,180,65,.20), transparent 40%), linear-gradient(160deg, #8556B8 0%, #5B3494 38%, #432777 70%, #2E1A52 100%); }
.cover__brand { display: flex; align-items: center; gap: 12px; font: 600 15pt 'Lexend', sans-serif; }
.cover__brand img { width: 64px; height: 64px; border-radius: 50%; background: #fff; }
.cover h1 { color: #fff; font-size: 40pt; font-weight: 700; margin: 34mm 0 8mm; letter-spacing: -.01em; }
.cover .lead { color: #EDE4F8; font-size: 15pt; max-width: 140mm; }
.cover strong { color: #fff; }
.badges { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 10mm; }
.badge { background: rgba(255,255,255,.14); border: 1px solid rgba(255,255,255,.35); border-radius: 999px; padding: 6px 14px; font-size: 10pt; }
.cover__plant { width: 70mm; height: 70mm; color: rgba(255,255,255,.16); margin: auto 0 0 auto; }
.cover__foot { border-top: 1px solid rgba(255,255,255,.35); padding-top: 5mm; font-size: 10pt; color: #EDE4F8; display: flex; justify-content: space-between; }

/* Boxes */
.box { background: var(--mist); border-radius: 10px; padding: 12px 16px; margin: 1em 0; break-inside: avoid; }
.box > :last-child { margin-bottom: 0; }
.box--care { background: var(--amber-bg); border-left: 5px solid var(--amber); }
.box--care strong { color: var(--amber); }
.box--good { background: #E6F3EE; border-left: 5px solid var(--leaf); }
.box h3 { margin-top: 0; }
.cols { display: grid; grid-template-columns: 1fr 1fr; gap: 8mm; }
.cols > div > h3:first-child { margin-top: .6em; }

/* Tables */
table { width: 100%; border-collapse: collapse; font-size: 9.5pt; margin: .4em 0 1em; break-inside: avoid; }
th { background: var(--night); color: #fff; text-align: left; font-weight: 500; padding: 5px 8px; }
td { border-bottom: 1px solid var(--line); padding: 5px 8px; vertical-align: top; }
tr:nth-child(even) td { background: #FBF9FE; }
.num { text-align: right; font-weight: 700; color: var(--purple); white-space: nowrap; }
.rates td:first-child { width: 40%; }

/* Contents */
.toc { list-style: none; padding: 0; columns: 2; column-gap: 10mm; }
.toc li { break-inside: avoid; border-bottom: 1px dotted var(--line); padding: 4px 0; display: flex; justify-content: space-between; }
.toc a { text-decoration: none; color: var(--ink); }
.toc li a { display: flex; justify-content: space-between; width: 100%; }

/* Rules */
.rules { display: grid; grid-template-columns: 1fr 1fr; gap: 5mm; margin: 1em 0; }
.rule { border: 1px solid var(--line); border-top: 4px solid var(--purple); border-radius: 8px; padding: 10px 12px; break-inside: avoid; }
.rule h3 { margin-top: 0; font-size: 11.5pt; }
.rule p:last-child { margin-bottom: 0; }

/* Activities */
.activity { break-before: page; }
.activity__head { background: var(--mist); border-radius: 10px; padding: 12px 16px; margin-bottom: 4mm; }
.activity__head h2 { margin-bottom: .2em; }
.activity__plain { margin: 0; color: var(--slate); font-size: 10pt; }
.ticks { list-style: none; padding: 0; }
.ticks li { padding-left: 1.4em; position: relative; }
.ticks li::before { content: ""; position: absolute; left: 0; top: .45em; width: .55em; height: .3em; border-left: 2px solid var(--leaf); border-bottom: 2px solid var(--leaf); transform: rotate(-45deg); }
.example { margin: 2mm 0 0; border-left: 5px solid var(--marigold); background: #FFFBF0; border-radius: 0 10px 10px 0; padding: 10px 14px; break-inside: avoid; }
.example figcaption { font-size: 9pt; font-weight: 600; color: var(--amber); text-transform: uppercase; letter-spacing: .06em; margin-bottom: 4px; }
.example blockquote { margin: 0; font-style: italic; }
.notes { margin-top: 5mm; border: 1px solid var(--line); border-radius: 10px; padding: 8px 14px; height: 32mm;
  background-image: repeating-linear-gradient(transparent 0 8.5mm, var(--line) 8.5mm calc(8.5mm + 1px)); background-position: 0 9mm; break-inside: avoid; }
.notes__label { font-size: 9pt; font-weight: 600; color: var(--lavender); margin: 0; }

/* Diary and checklist */
.diary td { height: 27mm; }
.diary th:first-child { width: 17%; }
.check { list-style: none; padding: 0; }
.check li { padding-left: 2em; position: relative; margin-bottom: .55em; }
.check li::before { content: ""; position: absolute; left: 0; top: .1em; width: 1.05em; height: 1.05em; border: 2px solid var(--purple); border-radius: 4px; }
.steps { counter-reset: s; list-style: none; padding: 0; }
.steps > li { counter-increment: s; padding-left: 2.4em; position: relative; margin-bottom: .8em; }
.steps > li::before { content: counter(s); position: absolute; left: 0; top: -.05em; width: 1.7em; height: 1.7em; border-radius: 50%; background: var(--purple); color: #fff; font: 600 10pt/1.7em 'Lexend', sans-serif; text-align: center; }
.sources li { font-size: 9.5pt; word-break: break-word; }
.back { background: var(--night); color: #EDE4F8; border-radius: 12px; padding: 14px 18px; margin-top: 6mm; }
.back strong, .back h3 { color: #fff; }
.back a { color: #E3D4F7; }
</style>
</head>
<body>

<section class="cover">
  <div class="cover__brand"><img src="${file('public/images/logo-512.webp')}" alt=""> Juniper Health</div>
  <p class="eyebrow" style="color:#F2B441;margin-top:30mm;margin-bottom:0">Free printable guide</p>
  <h1 style="margin-top:4mm">How to fill in your PIP form</h1>
  <p class="lead">A plain English, question by question guide to the <strong>“How your disability affects you”</strong> form, with tips on what to write, what scores points and what evidence helps.</p>
  <div class="badges">
    <span class="badge">All 15 questions explained</span>
    <span class="badge">Example answers</span>
    <span class="badge">Symptom diary to print</span>
    <span class="badge">Checklist before you send</span>
  </div>
  <div class="cover__plant">${plant}</div>
  <div class="cover__foot"><span>For England and Wales &middot; Updated ${updated}</span><span>juniperhealth.app</span></div>
</section>

<section class="page">
  <p class="eyebrow">Contents</p>
  <h2>What is in this guide</h2>
  <ul class="toc">
    <li><a href="#start">Before you start</a></li>
    <li><a href="#how">How PIP is decided</a></li>
    <li><a href="#rules">The rules that matter most</a></li>
    <li><a href="#tips">How to write your answers</a></li>
    <li><a href="#q1">Questions 1 and 2</a></li>
    ${ACTIVITIES.map((a) => `<li><a href="#${a.id}">Q${a.q}. ${a.formTitle}</a></li>`).join('')}
    <li><a href="#q15">Q15. Additional information</a></li>
    <li><a href="#evidence">Evidence that helps</a></li>
    <li><a href="#diary">Symptom diary</a></li>
    <li><a href="#send">Before you send the form</a></li>
    <li><a href="#next">What happens next</a></li>
    <li><a href="#help">Free help and sources</a></li>
  </ul>
  <div class="box">
    <h3>About this guide</h3>
    <p>This guide is written by Juniper Health, an independent website. We are <strong>not</strong> part of the DWP, and only the DWP can decide your claim. It is general information, not legal advice. It is based on advice from Citizens Advice, the DWP’s own guide for PIP assessors, and the PIP law.</p>
    <p>You can also use our free, private <strong>PIP points self-check</strong> at <a href="https://juniperhealth.app/benefits/pip/points-checker/">juniperhealth.app/benefits/pip/points-checker</a>. It works through the same 12 activities as the form.</p>
  </div>
</section>

<section class="page" id="start">
  <p class="eyebrow">Getting ready</p>
  <h2>Before you start</h2>
  <p>After you ring the DWP to start your PIP claim, they send you a form called <strong>“How your disability affects you”</strong> (sometimes called the <strong>PIP2</strong>). You may be offered it online or on paper. This form is the most important part of your claim. The health professional who assesses you reads it first, and a good form can sometimes mean you do not need a face to face assessment.</p>
  <div class="box box--care">
    <p><strong>You have one month to send it back.</strong> The deadline is on the letter that comes with the form. If you need more time, ring the PIP enquiry line <strong>before</strong> the deadline and ask for an extension: <strong>0800 121 4433</strong> (Relay UK: 18001 then 0800 121 4433). If they agree, write down the date, the name of the person you spoke to, and your new deadline.</p>
  </div>
  <h3>Get these together first</h3>
  <ul class="check">
    <li>Your National Insurance number (it is on the form’s letter)</li>
    <li>A list of your health conditions and when they started</li>
    <li>A list of your medicines, doses and side effects (your repeat prescription list is ideal)</li>
    <li>Names and contact details of your GP, consultants, nurses, therapists and support workers</li>
    <li>Letters, care plans and reports about your health (see the evidence page)</li>
    <li>Notes from a symptom diary, if you have kept one (there is one to print in this guide)</li>
  </ul>
  <h3>Make it easier on yourself</h3>
  <ul>
    <li><strong>Do it in short bursts.</strong> The form is long. Do one or two questions at a time.</li>
    <li><strong>Draft it first.</strong> Write your answers on scrap paper or in the notes boxes in this guide, then copy them onto the form.</li>
    <li><strong>Ask someone who knows you.</strong> A family member, friend or carer may notice things you have got used to.</li>
    <li><strong>Get free help.</strong> Citizens Advice, local welfare rights services and some charities will help you fill it in.</li>
  </ul>
</section>

<section class="page" id="how">
  <p class="eyebrow">The basics</p>
  <h2>How PIP is decided</h2>
  <p>PIP is <strong>not</strong> based on your diagnosis, or the medicines you take. It is based on <strong>how your condition affects you</strong> in everyday life. Two people with the same condition can get very different results.</p>
  <p>The form asks about <strong>12 activities</strong>. For each one, the DWP picks the statement that best describes you, and each statement scores between 0 and 12 points.</p>
  <table>
    <thead><tr><th scope="col">Part of PIP</th><th scope="col">Form questions</th><th scope="col">8 to 11 points</th><th scope="col">12 points or more</th></tr></thead>
    <tbody>
      <tr><td><strong>Daily living</strong> (10 activities)</td><td>Questions 3 to 12</td><td>Standard rate, ${money(rates.pip.dailyStandard)} a week</td><td>Enhanced rate, ${money(rates.pip.dailyEnhanced)} a week</td></tr>
      <tr><td><strong>Mobility</strong> (2 activities)</td><td>Questions 13 and 14</td><td>Standard rate, ${money(rates.pip.mobilityStandard)} a week</td><td>Enhanced rate, ${money(rates.pip.mobilityEnhanced)} a week</td></tr>
    </tbody>
  </table>
  <p class="small">Rates for ${rates.taxYear}. You can get one part or both. Only one statement counts for each activity, and the points for each part are added up.</p>
  <h3>You need to have had your difficulties for long enough</h3>
  <p>You must have had your difficulties for at least <strong>3 months</strong>, and expect them to last at least another <strong>9 months</strong>. If you are terminally ill, there are faster rules and you do not need to fill in this form in the same way.</p>
  <h3>Some words have a special meaning</h3>
  <table>
    <tbody>
      <tr><td><strong>Aid or appliance</strong></td><td>Anything that helps you do a task, such as a perching stool, grab rail, walking stick or pill organiser. It still counts if you do not have one yet but <strong>could reasonably be expected to use one</strong>.</td></tr>
      <tr><td><strong>Prompting</strong></td><td>Someone reminding you, encouraging you or explaining what to do. They do not have to be in the room.</td></tr>
      <tr><td><strong>Supervision</strong></td><td>Someone needs to be there the whole time to keep you safe.</td></tr>
      <tr><td><strong>Assistance</strong></td><td>Someone physically helping you with part of the task.</td></tr>
      <tr><td><strong>Unaided</strong></td><td>Without any aid, prompting, supervision or help.</td></tr>
    </tbody>
  </table>
</section>

<section class="page" id="rules">
  <p class="eyebrow">From the DWP’s guide for assessors</p>
  <h2>The rules that matter most</h2>
  <p>The DWP gives its assessors a guide explaining how to score each activity. These rules come from that guide and the PIP law. Knowing them helps you describe your difficulties in the way the DWP needs.</p>
  <div class="rules">
    <div class="rule"><h3>1. Can you do it reliably?</h3><p>You only count as able to do something if you can do it <strong>safely</strong>, to an <strong>acceptable standard</strong>, <strong>repeatedly</strong> (as often as you reasonably need to) and in a <strong>reasonable time</strong>. If you fail even one of these, you count as not able to do it.</p></div>
    <div class="rule"><h3>2. What is a reasonable time?</h3><p>No more than <strong>twice as long</strong> as it would take someone without your condition. If it takes you over twice as long, say so.</p></div>
    <div class="rule"><h3>3. What does safely mean?</h3><p>Whether there is a real risk of harm to you or anyone else, either while you do the task or afterwards. Think about falls, burns, cuts, choking, seizures and self harm.</p></div>
    <div class="rule"><h3>4. Repeatedly means again and again</h3><p>Could you do the task again soon after? Think about how you feel afterwards: pain, tiredness, breathlessness, or a flare up the next day.</p></div>
    <div class="rule"><h3>5. Most days means over half</h3><p>A statement applies if it is true on <strong>more than half of days</strong> over a 12 month period. If your condition changes, think about the whole year, not your best days.</p></div>
    <div class="rule"><h3>6. When different days are different</h3><p>If one statement applies on more than half of days, that one counts. If two do, the higher scoring one counts. If none do on their own, but together they add up to more than half, the one that happens most often counts.</p></div>
  </div>
  <div class="box">
    <h3>Pain, tiredness and mental health all count</h3>
    <p>The assessor should think about the effect of <strong>pain, fatigue, breathlessness, nausea, dizziness, anxiety and low motivation</strong>, and about side effects of treatment. If a task leaves you exhausted, or you only manage it because someone pushes you, it matters.</p>
  </div>
</section>

<section class="page" id="tips">
  <p class="eyebrow">Writing your answers</p>
  <h2>How to write your answers</h2>
  <p>Each question has tick boxes and a space to explain. <strong>The explanation is the most important part.</strong> The tick boxes alone do not tell the DWP enough.</p>
  <div class="cols">
    <div>
      <h3>Do</h3>
      <ul class="ticks">
        <li>Describe a <strong>bad day</strong>, and say how many bad days you have in a typical week.</li>
        <li>Say what <strong>happens if you try</strong>: pain, falls, accidents, panic, or needing to rest.</li>
        <li>Say how <strong>long</strong> things take you.</li>
        <li>Say <strong>who helps</strong> you, how, and how often. Say what happens when they are not there.</li>
        <li>Mention help you <strong>need</strong> but do not get. It still counts.</li>
        <li>List every <strong>aid</strong> you use, or ways you have adapted how you do things.</li>
        <li>Give <strong>real examples</strong> with dates or numbers: “I fell twice in March.”</li>
        <li>Tick <strong>“Sometimes”</strong> if a difficulty comes and goes, then explain.</li>
      </ul>
    </div>
    <div>
      <h3>Try not to</h3>
      <ul>
        <li>Describe your <strong>best</strong> day, or how you would like things to be.</li>
        <li>Just write “yes” or “no”.</li>
        <li>Leave a box empty. If a question does not apply, say so briefly.</li>
        <li>Rely on your diagnosis to explain things. Say what it stops you doing.</li>
        <li>Say “I manage” if managing means pain, danger, or taking all day.</li>
        <li>Copy the same words into every question.</li>
      </ul>
      <div class="box box--good">
        <p><strong>Running out of space?</strong> Use extra sheets. Put your <strong>full name</strong>, <strong>National Insurance number</strong> and the <strong>question number</strong> at the top of every sheet, and attach them to the form.</p>
      </div>
    </div>
  </div>
  <div class="box">
    <h3>A simple way to structure each answer</h3>
    <ol>
      <li><strong>What I can and cannot do</strong>, and how often.</li>
      <li><strong>Why</strong>: which symptoms get in the way.</li>
      <li><strong>What happens</strong> when I try, during and afterwards.</li>
      <li><strong>Who or what helps</strong>, and what happens without that help.</li>
    </ol>
  </div>
</section>

<section class="page" id="q1">
  <p class="eyebrow">Questions 1 and 2</p>
  <h2>Your health professionals, conditions and treatment</h2>
  <h3>Question 1: health professionals</h3>
  <p>List the people who know most about how your condition affects you <strong>now</strong>. This is not always your GP. A specialist nurse, community mental health worker, occupational therapist, physiotherapist or support worker may know more about your day to day life.</p>
  <ul>
    <li>Give their name, job, address and phone number.</li>
    <li>Say when you last saw them.</li>
    <li>The DWP may contact them, so tell them you are claiming PIP.</li>
  </ul>
  <h3>Question 2: conditions, medicines and treatment</h3>
  <ul>
    <li>List <strong>every</strong> condition, physical and mental, with roughly when it started. Include ones you think are minor.</li>
    <li>List your medicines, doses and how often you take them. A copy of your repeat prescription list is fine.</li>
    <li>Include <strong>side effects</strong>, such as drowsiness, sickness or needing the toilet often.</li>
    <li>Include other treatments: therapy, physiotherapy, injections, dialysis, oxygen, or waiting lists you are on.</li>
    <li>Say if a treatment has not worked or has been stopped.</li>
  </ul>
  <div class="box">
    <p>These first two questions do not score points, but they help the assessor understand your later answers. Be thorough.</p>
  </div>
  <div class="notes" style="height:70mm"><p class="notes__label">My conditions, medicines and side effects</p></div>
</section>

${ACTIVITIES.map(activityPage).join('\n')}

<section class="page" id="q15">
  <p class="eyebrow">Question 15</p>
  <h2>Q15. Additional information</h2>
  <p>This is your space to add anything that does not fit in the other questions. Use it for:</p>
  <ul class="ticks">
    <li>How your condition <strong>changes</strong> from day to day, and what a bad day or a flare up looks like.</li>
    <li>Things that <strong>make it worse</strong>, such as cold weather, stress or doing too much the day before.</li>
    <li>Anything the other questions missed, such as <strong>sleep</strong>, falls at night or <strong>side effects</strong>.</li>
    <li>Who <strong>helped you fill in the form</strong>, and how long it took. This shows how hard forms are for you.</li>
    <li>Evidence you are <strong>still waiting for</strong>, and that you will send it on.</li>
    <li>Anything you need at an assessment, such as a <strong>home visit</strong>, a <strong>phone assessment</strong>, extra time, or someone with you.</li>
  </ul>
  <div class="notes" style="height:95mm"><p class="notes__label">My notes for question 15</p></div>
</section>

<section class="page" id="evidence">
  <p class="eyebrow">Evidence</p>
  <h2>Evidence that helps</h2>
  <p>Evidence backs up what you have written. The most useful evidence explains <strong>how your condition affects what you can do</strong>, not just what your diagnosis is.</p>
  <div class="cols">
    <div>
      <h3>Often helpful</h3>
      <ul class="ticks">
        <li>Letters or reports from consultants, specialist nurses, mental health teams or therapists</li>
        <li>Care plans and support plans</li>
        <li>Occupational therapy assessments</li>
        <li>Hospital discharge letters</li>
        <li>Your repeat prescription list</li>
        <li>A statement from a carer, family member, friend or support worker describing the help they give</li>
        <li>Your symptom diary</li>
      </ul>
    </div>
    <div>
      <h3>Usually less helpful on its own</h3>
      <ul>
        <li>Scan or test results with no explanation of what they mean for you</li>
        <li>Very old letters, unless nothing has changed</li>
        <li>General leaflets about your condition</li>
      </ul>
      <h3>Tips</h3>
      <ul>
        <li>Ask for evidence to be sent to <strong>you</strong>, so you can check it first.</li>
        <li>Send <strong>copies</strong>, not originals.</li>
        <li>Write your <strong>name and National Insurance number</strong> on every page.</li>
        <li>Some GPs charge for letters. Ask first.</li>
      </ul>
    </div>
  </div>
  <div class="box box--care">
    <p><strong>Do not miss the deadline waiting for evidence.</strong> Send the form on time, say in question 15 what is still to come, and post it on later with a short covering letter that gives your name and National Insurance number.</p>
  </div>
</section>

<section class="page" id="diary">
  <p class="eyebrow">Print and fill in</p>
  <h2>Symptom diary</h2>
  <p class="small">Fill this in for a week or two before you do your form. It helps you remember bad days, and you can send a copy as evidence. Think about the activities in the form: cooking, eating, medicines, washing, the toilet, dressing, talking, reading, mixing with people, money, going out and walking.</p>
  <table class="diary">
    <thead><tr><th scope="col">Day and date</th><th scope="col">Good or bad day? Symptoms</th><th scope="col">What I could not do, or needed help with</th><th scope="col">Who helped, and how long it took</th></tr></thead>
    <tbody>${['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((d) => `<tr><td><strong>${d}</strong></td><td></td><td></td><td></td></tr>`).join('')}</tbody>
  </table>
</section>

<section class="page" id="send">
  <p class="eyebrow">Checklist</p>
  <h2>Before you send the form</h2>
  <ul class="check">
    <li>I have answered every question, even if only to say it does not apply.</li>
    <li>My tick boxes match what I have written in the boxes.</li>
    <li>I have described my bad days and how often they happen.</li>
    <li>I have put my name, National Insurance number and question number on every extra sheet.</li>
    <li>I have put my name and National Insurance number on every page of evidence.</li>
    <li>I have signed and dated the form.</li>
    <li>I have made a copy or taken a photo of every page, including the evidence.</li>
    <li>I have used the envelope that came with the form.</li>
    <li>I have asked the Post Office for free <strong>proof of postage</strong>, and kept it.</li>
    <li>I have written down the date I sent it.</li>
  </ul>
  <div class="box">
    <p>Keep your copy safe. You will want to read it again before your assessment, and it is useful if you need to challenge a decision.</p>
  </div>
</section>

<section class="page" id="next">
  <p class="eyebrow">After you send it</p>
  <h2>What happens next</h2>
  <ol class="steps">
    <li><strong>An assessment.</strong> Most people are asked to have an assessment with a health professional, by phone, video or face to face. Some claims are decided from the form and evidence alone. You can take someone with you, and you can ask for the assessment to be audio recorded if you ask in advance.</li>
    <li><strong>Before the assessment,</strong> read your copy of the form again so you remember what you wrote. Take your evidence and a list of your medicines.</li>
    <li><strong>A decision letter.</strong> The DWP writes to tell you if you will get PIP, which parts and rates, and for how long. It shows the points given for each activity. Check them against your form.</li>
    <li><strong>If you disagree,</strong> ask the DWP to look again. This is called a <strong>mandatory reconsideration</strong>. You have <strong>one month</strong> from the date on the letter. If they do not change their decision, you can appeal to an independent tribunal. Many decisions are changed on appeal.</li>
  </ol>
  <div class="box">
    <p>Read our guides to <strong>the PIP assessment</strong> and <strong>how to challenge a PIP decision</strong> at <a href="https://juniperhealth.app/benefits/pip/">juniperhealth.app/benefits/pip</a>.</p>
  </div>
  <h3>Getting PIP can lead to more help</h3>
  <p>For example a Blue Badge, a Disabled Persons Railcard, the Motability Scheme, Carer’s Allowance for someone who cares for you, and extra money in some other benefits. See <a href="https://juniperhealth.app/support/">juniperhealth.app/support</a>.</p>
</section>

<section class="page" id="help">
  <p class="eyebrow">You are not on your own</p>
  <h2>Free help and sources</h2>
  <table>
    <tbody>
      <tr><td><strong>PIP enquiry line</strong> (extensions, questions about your claim)</td><td>0800 121 4433<br>Relay UK: 18001 then 0800 121 4433</td></tr>
      <tr><td><strong>Citizens Advice</strong> (free help with forms and challenges)</td><td>England: 0800 144 8848<br>Wales: 0800 702 2020<br>citizensadvice.org.uk</td></tr>
      <tr><td><strong>Turn2us</strong> (benefits information and grants)</td><td>turn2us.org.uk</td></tr>
      <tr><td><strong>Your local council</strong></td><td>Many have a free welfare rights service</td></tr>
      <tr><td><strong>Samaritans</strong> (if you are struggling)</td><td>116 123, free, day or night</td></tr>
    </tbody>
  </table>
  <h3>Sources</h3>
  <ul class="sources">${SOURCES.map(([label, url]) => `<li>${label}: <a href="${url}">${url.replace('https://', '')}</a></li>`).join('')}</ul>
  <div class="back">
    <h3 style="margin-top:0">About Juniper Health</h3>
    <p>Juniper Health gives clear, kind help with health conditions and disability benefits in England and Wales. It is run by ${settings.ownerName}, trading as ${settings.tradingName}. We are independent and are not part of the DWP or the NHS. This guide is general information, not legal or financial advice. Rules and rates can change, so check GOV.UK or ask an adviser.</p>
    <p style="margin-bottom:0">Find more guides and free self-checks at <a href="https://juniperhealth.app">juniperhealth.app</a> &middot; ${settings.email} &middot; Updated ${updated}</p>
  </div>
</section>

</body>
</html>`;

const tmp = join(tmpdir(), 'juniper-pip-form.html');
writeFileSync(tmp, html);
mkdirSync(new URL('public/guides/', root), { recursive: true });
const out = new URL('public/guides/how-to-fill-in-your-pip-form.pdf', root).pathname;

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
const page = await browser.newPage();
await page.goto(pathToFileURL(tmp).href);
await page.evaluate(() => document.fonts.ready);
await page.pdf({ path: out, preferCSSPageSize: true, printBackground: true, tagged: true, outline: true });
await browser.close();
console.log(`Wrote ${out}`);
