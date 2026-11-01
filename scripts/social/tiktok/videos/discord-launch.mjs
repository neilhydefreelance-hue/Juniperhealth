// Promotes the Juniper Health Discord community. Discord's name is used in text only (no logo).
const INVITE = 'discord.gg/p6qjffATU';
// A few examples, always shown A to Z like every condition list on the site.
const conditions = ['ADHD', 'Asthma', 'Back pain', 'Bipolar', 'COPD', 'Dementia', 'Depression', 'Diabetes', 'Eczema',
  'Endometriosis', 'Epilepsy', 'Fibromyalgia', 'IBS', 'Migraine', 'MS', 'OCD', "Parkinson's", 'PTSD', 'Stroke']
  .sort((a, b) => a.localeCompare(b, 'en-GB', { sensitivity: 'base' }));

export const scenes = [
  {
    dur: 3.6,
    kind: 'title',
    html: `<div class="eyebrow" data-in="0.1">New</div>
      <h1><span class="line" data-in="0.3">Our Discord</span><span class="line" data-in="0.55">community</span><span class="line" data-in="0.8">is open</span></h1>
      <p data-in="1.1">Free, friendly support from people who get it.</p>`,
  },
  {
    dur: 4.6,
    kind: 'point',
    html: `<div class="num" data-in="0.1"><svg viewBox="0 0 24 24" width="84" height="84" fill="none" stroke="#1e1b26" stroke-width="2.2" stroke-linecap="round" style="vertical-align:middle;margin-top:-10px"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21M8.5 21h7"/></svg></div>
      <h2 data-in="0.35">Live voice chat</h2>
      <p data-in="0.8">Drop in and talk things through, or just listen.</p>`,
  },
  {
    dur: 4.8,
    kind: 'point',
    html: `<div class="big" data-in="0.1">4</div>
      <h2 data-in="0.35">Benefit chats</h2>
      <p data-in="0.8">Ask questions about PIP and other benefits, and share what helped you.</p>`,
  },
  {
    dur: 6.4,
    kind: 'point',
    html: `<div class="big" data-in="0.1">50+</div>
      <h2 data-in="0.35">Condition chats</h2>
      <div class="cloud">${conditions.map((c, i) => `<span data-in="${(0.7 + i * 0.1).toFixed(2)}">${c}</span>`).join('')}
        <span class="more" data-in="${(0.7 + conditions.length * 0.1).toFixed(2)}">and many more</span></div>`,
  },
  {
    dur: 5.4,
    kind: 'end',
    html: `<img class="logo-big" data-in="0.05" src="../../../docs/logo-master.png" alt="">
      <h2 data-in="0.25">Come and join us</h2>
      <p data-in="0.5">Free to join. Link in bio.</p>
      <div><span class="url" data-in="0.75">${INVITE}</span></div>
      <p class="small" data-in="1.0">Peer support, not medical advice. In a crisis, call 999 or Samaritans on 116 123.</p>`,
  },
];
