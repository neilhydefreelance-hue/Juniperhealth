// "5 things to know before you fill in your PIP form". Taken from the PIP form PDF guide.
// Each scene: dur in seconds, kind ('title', 'point' or 'end'), and html. data-in is when a part appears, in seconds.
const point = (n, title, text) => ({
  dur: 4.6,
  kind: 'point',
  html: `<div class="num" data-in="0.1">${n}</div><h2 data-in="0.35">${title}</h2><p data-in="0.8">${text}</p>`,
});

export const scenes = [
  {
    dur: 3.2,
    kind: 'title',
    html: `<div class="eyebrow" data-in="0.1">Filling in your PIP form?</div>
      <h1><span class="line" data-in="0.3">5 things</span><span class="line" data-in="0.55">to know</span><span class="line" data-in="0.8">first</span></h1>`,
  },
  point(1, 'It is about you, not your diagnosis', 'PIP looks at how your condition affects your everyday life.'),
  point(2, 'Describe your bad days', 'Say what a bad day is like, and how many you have in a typical week.'),
  point(3, '"Can you do it reliably?"', 'Safely, well enough, again and again, and in a reasonable time. If not, say so.'),
  point(4, 'List every aid', 'Stools, grab rails, pill boxes. Include ones you need but do not have yet.'),
  point(5, 'Send evidence and keep copies', 'Letters from your care team help. Keep a copy of every page you send.'),
  {
    dur: 4.2,
    kind: 'end',
    html: `<img class="logo-big" data-in="0.05" src="../../../docs/logo-master.png" alt="">
      <h2 data-in="0.25">Free question by question PIP form guide</h2>
      <div><span class="url" data-in="0.6">juniperhealth.info</span></div>
      <p class="small" data-in="0.9">General information, not advice. We are not part of the DWP.</p>`,
  },
];
