// Promotes the Juniper Health Facebook group. Points people to the website's Community page, not the group link.
// Facebook's name is used in text only (no logo).
const SITE = 'juniperhealth.info';
const icon = (d) => `<div class="num" data-in="0.1"><svg viewBox="0 0 24 24" width="84" height="84" fill="none" stroke="#1e1b26" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-top:-10px">${d}</svg></div>`;
const people = ['Ask about PIP', 'Form tips', 'Share what helped', 'Talk to people who get it'];

export const scenes = [
  {
    dur: 3.6,
    kind: 'title',
    html: `<div class="eyebrow" data-in="0.1">Join us</div>
      <h1><span class="line" data-in="0.3">Our Facebook</span><span class="line" data-in="0.55">community</span><span class="line" data-in="0.8">is growing</span></h1>
      <p data-in="1.1">A friendly group for anyone living with a health condition.</p>`,
  },
  {
    dur: 4.6,
    kind: 'point',
    html: `${icon('<path d="M4 5h16v11H9l-5 4z"/><path d="M10 9.5a2 2 0 1 1 2.6 1.9c-.4.2-.6.5-.6.9V13M12 15.2v.1"/>')}
      <h2 data-in="0.35">Ask questions</h2>
      <p data-in="0.8">Stuck on a PIP form, an assessment or a benefit letter? Ask people who have been there.</p>`,
  },
  {
    dur: 4.6,
    kind: 'point',
    html: `${icon('<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/>')}
      <h2 data-in="0.35">Share what helps</h2>
      <p data-in="0.8">Tips, wins and bad days. You are not on your own.</p>
      <div class="cloud">${people.map((c, i) => `<span data-in="${(1.2 + i * 0.15).toFixed(2)}">${c}</span>`).join('')}</div>`,
  },
  {
    dur: 4.4,
    kind: 'point',
    html: `${icon('<circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.4"/><path d="M3 19c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5M15 14.2c3 0 6 1.6 6 4.8"/>')}
      <h2 data-in="0.35">Free and friendly</h2>
      <p data-in="0.8">Kind rules, no judgement and no selling. Everyone is welcome.</p>`,
  },
  {
    dur: 6.0,
    kind: 'title',
    html: `<div class="eyebrow" data-in="0.1">How to join</div>
      <h2 data-in="0.3">3 easy steps</h2>
      <ol class="steps">
        <li data-in="0.8"><b>1</b><span>Go to <em>${SITE}</em></span></li>
        <li data-in="1.4"><b>2</b><span>Tap <em>Menu</em>, then <em>Community</em></span></li>
        <li data-in="2.0"><b>3</b><span>Tap to join our <em>Facebook group</em></span></li>
      </ol>`,
  },
  {
    dur: 5.4,
    kind: 'end',
    html: `<img class="logo-big" data-in="0.05" src="../../../docs/logo-master.png" alt="">
      <h2 data-in="0.25">Come and join us</h2>
      <p data-in="0.5">Look under Community on our website.</p>
      <div><span class="url" data-in="0.75">${SITE}</span></div>
      <p class="small" data-in="1.0">Peer support, not medical advice. In a crisis, call 999 or Samaritans on 116 123.</p>`,
  },
];
